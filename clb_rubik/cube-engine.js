/**
 * Exact NxN sticker model. +x = R, +y = U, +z = F.
 * Coordinates are integers -(n-1), -(n-3), ..., n-1; no floating point
 * transforms are accumulated. Positive q is a right-hand quarter turn.
 *
 * Book notation: r means the second layer ONLY; Rw means two layers.
 * 2R selects the second layer; 3Rw selects three layers. M/E/S require an
 * odd cube. Face matrices are read from outside, top-left to bottom-right.
 */

const freezeVector = (v) => Object.freeze(v);
export const NORMALS = Object.freeze({
  R: freezeVector([1, 0, 0]), L: freezeVector([-1, 0, 0]),
  U: freezeVector([0, 1, 0]), D: freezeVector([0, -1, 0]),
  F: freezeVector([0, 0, 1]), B: freezeVector([0, 0, -1]),
});
export const BASES = Object.freeze(Object.fromEntries(Object.entries({
  F: [[1, 0, 0], [0, 1, 0]], B: [[-1, 0, 0], [0, 1, 0]],
  R: [[0, 0, -1], [0, 1, 0]], L: [[0, 0, 1], [0, 1, 0]],
  U: [[1, 0, 0], [0, 0, -1]], D: [[1, 0, 0], [0, 0, 1]],
}).map(([face, basis]) => [face, Object.freeze(basis.map(freezeVector))])));

const FACE_ORDER = Object.freeze(Object.keys(NORMALS)); // Python reference order.
const SOLVER_ORDER = Object.freeze(['U', 'R', 'F', 'D', 'L', 'B']);
const equal = (a, b) => a.every((x, i) => x === b[i]);
const dot = (a, b) => a.reduce((sum, x, i) => sum + x * b[i], 0);
const normalizeQuotes = (text) => text.replace(/[’′]/g, "'");
const canonicalId = (home, homeNormal) => `${home.join(',')}/${homeNormal.join(',')}`;

function checkSize(n) {
  if (!Number.isInteger(n) || n < 2 || n > 5) {
    throw new RangeError('Cube size must be an integer from 2 through 5.');
  }
}

function checkFace(face) {
  if (typeof face !== 'string' || !Object.hasOwn(NORMALS, face)) {
    throw new TypeError(`Unknown face: ${String(face)}. Use U, R, F, D, L, or B.`);
  }
  return face;
}

/** Split an algorithm. Parentheses and | may group moves but never repeat them. */
export function tokenize(algorithm) {
  if (typeof algorithm !== 'string') throw new TypeError('An algorithm must be a string.');
  const text = normalizeQuotes(algorithm);
  let level = 0;
  for (const char of text) {
    if (char === '(') level++;
    if (char === ')' && --level < 0) throw new SyntaxError('Unmatched algorithm parenthesis.');
  }
  if (level !== 0) throw new SyntaxError('Unmatched algorithm parenthesis.');
  return text.replace(/[()|]/g, ' ').trim().split(/\s+/).filter(Boolean);
}

function readNotation(token) {
  if (typeof token !== 'string') throw new TypeError('A move must be a string.');
  const normalized = normalizeQuotes(token.trim());
  const match = /^(\d*)([URFDLBurfdlbMESxyz])(w?)(2'?|'?)$/.exec(normalized);
  if (!match) throw new SyntaxError(`Invalid move: ${token}.`);
  const [, prefix, face, wide, ending] = match;
  if (prefix && !/^[1-9]\d*$/.test(prefix)) throw new SyntaxError(`Invalid layer number: ${token}.`);
  const count = prefix ? Number(prefix) : undefined;
  if (count !== undefined && !Number.isSafeInteger(count)) throw new RangeError(`Layer number is too large: ${token}.`);
  if (/[xyzMES]/.test(face) && (prefix || wide)) {
    throw new SyntaxError(`Rotations and slice moves cannot have a layer number or w: ${token}.`);
  }
  if (/[urfdlb]/.test(face) && (prefix || wide)) {
    throw new SyntaxError(`Lowercase means the second layer only. Use 2R or Rw style notation: ${token}.`);
  }
  return {token: normalized, prefix, count, face, wide: Boolean(wide), ending,
    power: ending.includes('2') ? 2 : ending === "'" ? -1 : 1};
}

/**
 * Return an animation-friendly move descriptor.
 * axis: 0/1/2; q: signed right-hand quarter turns; selected(pos): boolean.
 * For Three.js use rotation[axis] = q * Math.PI / 2, then rebuild from
 * Cube.move(token), never round a previously animated floating-point state.
 */
export function parseMove(token, n) {
  checkSize(n);
  const parsed = readNotation(token);
  const {face, prefix, count, wide, power} = parsed;
  const s = n - 1;
  let axis, q, selected, kind, depth, width;
  if ('xyz'.includes(face)) {
    axis = 'xyz'.indexOf(face);
    q = -power;
    selected = () => true;
    kind = 'rotation';
  } else if ('MES'.includes(face)) {
    if (n % 2 === 0) throw new RangeError(`${face} requires an odd cube; use numbered layers on ${n}×${n}.`);
    axis = {M: 0, E: 1, S: 2}[face];
    q = power * ('ME'.includes(face) ? 1 : -1);
    selected = (pos) => pos[axis] === 0;
    kind = 'slice';
  } else {
    const normal = NORMALS[face.toUpperCase()];
    axis = normal.findIndex((v) => v !== 0);
    const sign = normal[axis];
    q = -sign * power;
    if (wide) {
      width = count ?? 2;
      if (width < 2 || width > n) throw new RangeError(`Wide move width must be 2 through ${n}: ${parsed.token}.`);
      const cut = s - 2 * (width - 1);
      selected = (pos) => sign * pos[axis] >= cut;
      kind = 'wide';
    } else if (prefix || face !== face.toUpperCase()) {
      depth = count ?? 2;
      if (depth < 1 || depth > n) throw new RangeError(`Layer depth must be 1 through ${n}: ${parsed.token}.`);
      const level = s - 2 * (depth - 1);
      selected = (pos) => sign * pos[axis] === level;
      kind = 'layer';
    } else {
      depth = 1;
      selected = (pos) => sign * pos[axis] === s;
      kind = 'outer';
    }
  }
  return {token: parsed.token, axis, q, selected, kind, depth, width};
}

/** Reverse an algorithm, preserving wide/inner distinctions. */
export function inverse(algorithm) {
  return tokenize(algorithm).reverse().map((token) => {
    const parsed = readNotation(token);
    return parsed.power === 2 ? parsed.token.replace(/'$/, '')
      : parsed.ending === "'" ? parsed.token.slice(0, -1) : `${parsed.token}'`;
  }).join(' ');
}

/** Integer-only quarter-turn rotation, also useful for orientation overlays. */
export function rotate(vector, axis, q) {
  if (![0, 1, 2].includes(axis) || !Number.isInteger(q)) throw new TypeError('Invalid integer rotation.');
  let [x, y, z] = vector;
  for (let k = ((q % 4) + 4) % 4; k > 0; k--) {
    if (axis === 0) [y, z] = [-z, y];
    else if (axis === 1) [x, z] = [z, -x];
    else [x, y] = [-y, x];
  }
  return [x || 0, y || 0, z || 0]; // Avoid negative zero in serialized data.
}

function vector(value, name, n, unit = false) {
  if (!Array.isArray(value) || value.length !== 3 || !value.every(Number.isInteger)) {
    throw new TypeError(`Sticker ${name} must be an integer vector of length three.`);
  }
  if (unit ? value.reduce((s, v) => s + Math.abs(v), 0) !== 1
    : value.some((v) => Math.abs(v) > n - 1 || (v + n - 1) % 2 !== 0)) {
    throw new RangeError(`Sticker ${name} is outside the ${n}×${n} coordinate grid.`);
  }
  return value.map((v) => v || 0);
}

function importSticker(raw, n) {
  if (!raw || typeof raw !== 'object') throw new TypeError('A sticker must be an object.');
  const pos = vector(raw.pos, 'pos', n);
  const normal = vector(raw.normal, 'normal', n, true);
  const tangent = vector(raw.tangent, 'tangent', n, true);
  const home = vector(raw.home, 'home', n);
  const homeNormal = vector(raw.homeNormal ?? raw.home_normal, 'homeNormal', n, true);
  const homeTangent = vector(raw.homeTangent ?? raw.home_tangent, 'homeTangent', n, true);
  const color = checkFace(raw.color);
  if (dot(pos, normal) !== n - 1 || dot(home, homeNormal) !== n - 1
    || dot(normal, tangent) !== 0 || dot(homeNormal, homeTangent) !== 0) {
    throw new RangeError('Sticker normal, tangent, and position are inconsistent.');
  }
  if (!equal(homeNormal, NORMALS[color])) throw new RangeError('Sticker color must match its fixed home face.');
  const id = raw.id ?? canonicalId(home, homeNormal);
  if ((typeof id !== 'string' && typeof id !== 'number') || String(id).length === 0
    || (typeof id === 'number' && !Number.isFinite(id))) throw new TypeError('Sticker id must be a nonempty string or finite number.');
  return {id, pos, normal, tangent, color, home, homeNormal, homeTangent};
}

export class Cube {
  constructor(n = 3) {
    checkSize(n);
    this.n = n;
    this.s = n - 1;
    this.stickers = [];
    const values = Array.from({length: n}, (_, i) => -this.s + 2 * i);
    for (const face of FACE_ORDER) {
      const normal = NORMALS[face];
      const [right, up] = BASES[face];
      for (const b of [...values].reverse()) {
        for (const a of values) {
          const pos = normal.map((v, k) => this.s * v + a * right[k] + b * up[k]);
          this.stickers.push({id: canonicalId(pos, normal), pos, normal: [...normal], tangent: [...up],
            color: face, home: [...pos], homeNormal: [...normal], homeTangent: [...up]});
        }
      }
    }
  }

  /** Import exact case data. Accepts Python snake_case or JS camelCase fields. */
  static fromState(n, state) {
    checkSize(n);
    const raw = Array.isArray(state) ? state : state?.stickers;
    if (!Array.isArray(raw) || raw.length !== 6 * n * n) {
      throw new RangeError(`Expected ${6 * n * n} stickers for a ${n}×${n} cube.`);
    }
    const cube = new Cube(n);
    const ids = new Set(), locations = new Set(), homes = new Set();
    cube.stickers = raw.map((item) => {
      const sticker = importSticker(item, n);
      const location = canonicalId(sticker.pos, sticker.normal);
      const home = canonicalId(sticker.home, sticker.homeNormal);
      if (ids.has(String(sticker.id))) throw new RangeError(`Duplicate sticker id: ${sticker.id}.`);
      if (locations.has(location)) throw new RangeError(`Duplicate sticker location: ${location}.`);
      if (homes.has(home)) throw new RangeError(`Duplicate sticker home: ${home}.`);
      ids.add(String(sticker.id)); locations.add(location); homes.add(home);
      return sticker;
    });
    return cube;
  }

  clone() { return Cube.fromState(this.n, this.stickers); }

  /** Validate every token before mutating, so a typo cannot partially apply. */
  apply(algorithm) {
    const moves = tokenize(algorithm).map((token) => parseMove(token, this.n));
    for (const move of moves) this._applyMove(move);
    return this;
  }

  move(token) { return this._applyMove(parseMove(token, this.n)); }

  _applyMove({axis, q, selected}) {
    for (const sticker of this.stickers) {
      if (!selected(sticker.pos)) continue;
      sticker.pos = rotate(sticker.pos, axis, q);
      sticker.normal = rotate(sticker.normal, axis, q);
      sticker.tangent = rotate(sticker.tangent, axis, q);
    }
    return this;
  }

  face(face) {
    checkFace(face);
    const normal = NORMALS[face], [right, up] = BASES[face];
    return this.stickers.filter((sticker) => equal(sticker.normal, normal))
      .sort((a, b) => dot(b.pos, up) - dot(a.pos, up) || dot(a.pos, right) - dot(b.pos, right));
  }

  matrix(face) {
    const colors = this.face(face).map((sticker) => sticker.color);
    return Array.from({length: this.n}, (_, row) => colors.slice(row * this.n, (row + 1) * this.n));
  }

  /** Uniform faces allow whole-cube rotations; fixed-home solved does not. */
  isUniform() { return FACE_ORDER.every((face) => new Set(this.face(face).map((sticker) => sticker.color)).size === 1); }

  /** Same semantics as the PDF's Python model. true checks marked orientation. */
  isSolved(supercube = false) {
    return this.stickers.every((sticker) => equal(sticker.normal, sticker.homeNormal)
      && (!supercube || equal(sticker.tangent, sticker.homeTangent)));
  }

  /** Deterministic string in persistent sticker order, for exact state checks. */
  fingerprint(orientation = false) {
    return JSON.stringify(this.stickers.map((sticker) =>
      [sticker.pos, sticker.normal, orientation ? sticker.tangent : null]));
  }

  /**
   * 3×3 cubejs facelets in URFDLB face order and fixed HOME color labels.
   * No relabeling by current centers: that would hide global/slice rotations.
   * cubejs 1.3.2 solve() normalizes proper center orientations internally and
   * maps its solution back, so x/y/z, M/E/S, inner and wide turns are supported.
   * solveUpright() alone requires hasFixedCenters(). Neither serialization nor
   * solverReady() proves physical solvability of arbitrary imported stickers.
   */
  toFacelets() {
    if (this.n !== 3) throw new RangeError('cubejs facelet serialization is only supported for 3×3.');
    return SOLVER_ORDER.flatMap((face) => this.face(face).map((sticker) => sticker.color)).join('');
  }

  hasFixedCenters() {
    return this.n === 3 && SOLVER_ORDER.every((face) => this.face(face)[4].color === face);
  }

  /** Check 3×3 size and proper center frame; call solve(), not solveUpright(). */
  solverReady() {
    if (this.n !== 3) return false;
    const locations = {};
    for (const face of SOLVER_ORDER) locations[this.face(face)[4].color] = NORMALS[face];
    if (Object.keys(locations).length !== 6) return false;
    for (const [a, b] of [['R', 'L'], ['U', 'D'], ['F', 'B']]) {
      if (dot(locations[a], locations[b]) !== -1) return false;
    }
    const [a, b] = [locations.R, locations.U];
    const cross = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    return equal(cross, locations.F);
  }

  toJSON() {
    return {n: this.n, stickers: this.stickers.map((sticker) => ({...sticker,
      pos: [...sticker.pos], normal: [...sticker.normal], tangent: [...sticker.tangent],
      home: [...sticker.home], homeNormal: [...sticker.homeNormal], homeTangent: [...sticker.homeTangent]}))};
  }
}

export default Cube;
