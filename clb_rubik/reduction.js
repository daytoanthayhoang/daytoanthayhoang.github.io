/** Exact, read-only 4×4 reduction predicates. These are not a generic solver. */
import {NORMALS} from './cube-engine.js';

const FACES = Object.freeze(['U', 'R', 'F', 'D', 'L', 'B']);
const EDGE_NAMES = Object.freeze(['UF', 'UR', 'UB', 'UL', 'DF', 'DR', 'DB', 'DL', 'FR', 'FL', 'BR', 'BL']);
const CORNER_NAMES = Object.freeze(['UFR', 'URB', 'UBL', 'ULF', 'DFR', 'DRB', 'DBL', 'DLF']);
const equal = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
const dot = (a, b) => a.reduce((sum, x, i) => sum + x * b[i], 0);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const sameSet = (a, b) => [...a].sort().join('') === [...b].sort().join('');
const identityName = (colors, names) => names.find((name) => sameSet(colors, [...name])) ?? null;

function requireFour(cube) {
  if (!cube || cube.n !== 4 || !Array.isArray(cube.stickers) || cube.stickers.length !== 96) {
    throw new RangeError('Reduction predicates require an exact 4×4 Cube with 96 stickers.');
  }
}

function stickerAt(cube, pos, face) {
  return cube.stickers.find((sticker) => equal(sticker.pos, pos) && equal(sticker.normal, NORMALS[face]));
}

function positionForFaces(faces) {
  const pos = [0, 0, 0];
  for (const face of faces) NORMALS[face].forEach((v, axis) => { if (v) pos[axis] = 3 * v; });
  return pos;
}

/**
 * A completed center has four stickers of one color. Six completed centers
 * are valid only if their color arrangement is a proper rotation of the home
 * scheme, not an arbitrary permutation or a mirror image.
 */
export function centerSummary(cube) {
  requireFour(cube);
  const faces = FACES.map((face) => {
    const stickers = cube.face(face).filter((sticker) => sticker.pos.filter((v) => Math.abs(v) === 3).length === 1);
    const colors = stickers.map((sticker) => sticker.color);
    const uniform = stickers.length === 4 && new Set(colors).size === 1;
    return {face, uniform, color: uniform ? colors[0] : null, colors,
      fixedHomeSolved: uniform && colors[0] === face, stickerIds: stickers.map((sticker) => sticker.id)};
  });
  const centerColors = Object.fromEntries(faces.map((entry) => [entry.face, entry.color]));
  const completedFaces = faces.filter((entry) => entry.uniform).map((entry) => entry.face);
  const fixedHomeFaces = faces.filter((entry) => entry.fixedHomeSolved).map((entry) => entry.face);
  let properColorScheme = completedFaces.length === 6 && new Set(Object.values(centerColors)).size === 6;
  const locations = {};
  if (properColorScheme) {
    for (const face of FACES) locations[centerColors[face]] = NORMALS[face];
    for (const [a, b] of [['R', 'L'], ['U', 'D'], ['F', 'B']]) {
      if (dot(locations[a], locations[b]) !== -1) properColorScheme = false;
    }
    if (!equal(cross(locations.R, locations.U), locations.F)) properColorScheme = false;
  }
  return {faces, centerColors, completedFaces, fixedHomeFaces,
    uniformFaceCount: completedFaces.length, fixedHomeFaceCount: fixedHomeFaces.length,
    properColorScheme,
    // Columns give the current directions of the home +x,+y,+z colors.
    orientation: properColorScheme ? [locations.R, locations.U, locations.F].map((v) => [...v]) : null};
}

/** Count complete monochromatic 2×2 center faces, allowing a rotated cube. */
export function countSolvedCenterFaces(cube) { return centerSummary(cube).uniformFaceCount; }
export function hasProperCenterScheme(cube) { return centerSummary(cube).properColorScheme; }

/**
 * Both wings must show the SAME color on EACH incident face. Matching only
 * unordered two-color identities is insufficient: it accepts a split edge
 * whose two wings face opposite ways. Each returned ID is a physical sticker.
 */
export function edgeSummary(cube, centers = centerSummary(cube)) {
  requireFour(cube);
  const colorToFace = centers.properColorScheme
    ? Object.fromEntries(Object.entries(centers.centerColors).map(([face, color]) => [color, face])) : null;
  const edges = EDGE_NAMES.map((name) => {
    const faces = [...name], base = positionForFaces(faces), freeAxis = base.findIndex((v) => v === 0);
    const wings = [-1, 1].map((coordinate) => {
      const pos = [...base]; pos[freeAxis] = coordinate;
      const stickers = faces.map((face) => stickerAt(cube, pos, face));
      const colors = stickers.map((sticker) => sticker?.color ?? null);
      const relativeColors = colorToFace ? colors.map((color) => colorToFace[color] ?? null) : null;
      return {pos, colors, relativeColors, identity: identityName(colors, EDGE_NAMES),
        relativeIdentity: relativeColors ? identityName(relativeColors, EDGE_NAMES) : null,
        stickerIds: stickers.filter(Boolean).map((sticker) => sticker.id)};
    });
    const paired = wings.every((wing) => wing.stickerIds.length === 2 && wing.identity)
      && equal(wings[0].colors, wings[1].colors);
    const matchesCenters = colorToFace ? paired && equal(wings[0].relativeColors, faces) : null;
    const identityMatchesCenters = colorToFace ? paired && sameSet(wings[0].relativeColors, faces) : null;
    return {name, faces, wings, wingPositions: wings.map((wing) => wing.pos),
      stickerIds: wings.flatMap((wing) => wing.stickerIds), paired: Boolean(paired),
      identity: paired ? wings[0].identity : null,
      relativeIdentity: paired ? wings[0].relativeIdentity : null,
      matchesCenters, identityMatchesCenters,
      flippedInPlace: colorToFace ? Boolean(identityMatchesCenters && !matchesCenters) : null};
  });
  return {edges, pairedEdgeCount: edges.filter((edge) => edge.paired).length,
    pairedEdges: edges.filter((edge) => edge.paired).map((edge) => edge.name),
    unpairedEdges: edges.filter((edge) => !edge.paired).map((edge) => edge.name),
    correctEdges: colorToFace ? edges.filter((edge) => edge.matchesCenters).map((edge) => edge.name) : null,
    flippedInPlace: colorToFace ? edges.filter((edge) => edge.flippedInPlace).map((edge) => edge.name) : null,
    misplacedEdges: colorToFace ? edges.filter((edge) => edge.paired && !edge.identityMatchesCenters).map((edge) => edge.name) : null};
}

export function countPairedEdges(cube) { return edgeSummary(cube).pairedEdgeCount; }

/** Corner colors compared with the actual proper center scheme, not camera. */
export function cornerSummary(cube, centers = centerSummary(cube)) {
  requireFour(cube);
  const colorToFace = centers.properColorScheme
    ? Object.fromEntries(Object.entries(centers.centerColors).map(([face, color]) => [color, face])) : null;
  const corners = CORNER_NAMES.map((name) => {
    const faces = [...name], pos = positionForFaces(faces);
    const stickers = faces.map((face) => stickerAt(cube, pos, face));
    const colors = stickers.map((sticker) => sticker?.color ?? null);
    const relativeColors = colorToFace ? colors.map((color) => colorToFace[color] ?? null) : null;
    return {name, faces, pos, colors, relativeColors, stickerIds: stickers.filter(Boolean).map((sticker) => sticker.id),
      identity: identityName(colors, CORNER_NAMES),
      matchesCenters: colorToFace ? equal(relativeColors, faces) : null,
      identityMatchesCenters: colorToFace ? sameSet(relativeColors, faces) : null};
  });
  return {corners, correctCornerCount: colorToFace ? corners.filter((corner) => corner.matchesCenters).length : null,
    correctCorners: colorToFace ? corners.filter((corner) => corner.matchesCenters).map((corner) => corner.name) : null};
}

/** Actual 3×3-phase goals, relative to the current center colors. */
export function layerSummary(cube, edges = edgeSummary(cube), corners = cornerSummary(cube)) {
  requireFour(cube);
  if (edges.correctEdges === null || corners.correctCorners === null) {
    return {lowerCrossSolved: null, lowerCornersSolved: null, firstTwoLayersSolved: null,
      upperEdgeOrientationCount: null, upperCornerOrientationCount: null};
  }
  const lowerCrossSolved = ['DF', 'DR', 'DB', 'DL'].every((name) => edges.correctEdges.includes(name));
  const lowerCornersSolved = ['DFR', 'DRB', 'DBL', 'DLF'].every((name) => corners.correctCorners.includes(name));
  const firstTwoLayersSolved = lowerCrossSolved && lowerCornersSolved
    && ['FR', 'FL', 'BR', 'BL'].every((name) => edges.correctEdges.includes(name));
  return {lowerCrossSolved, lowerCornersSolved, firstTwoLayersSolved,
    upperEdgeOrientationCount: edges.edges.filter((edge) => edge.name[0] === 'U' && edge.paired
      && edge.wings[0].relativeColors[0] === 'U').length,
    upperCornerOrientationCount: corners.corners.filter((corner) => corner.name[0] === 'U'
      && corner.relativeColors[0] === 'U').length};
}

/** Complete read-only boundary report suitable for JSON manifests and UI. */
export function analyzeReduction(cube) {
  const centers = centerSummary(cube), edges = edgeSummary(cube, centers), corners = cornerSummary(cube, centers);
  const layers = layerSummary(cube, edges, corners);
  return {centerFacesSolved: centers.uniformFaceCount, fixedHomeCenterFacesSolved: centers.fixedHomeFaceCount,
    centersProperRotation: centers.properColorScheme, centerColors: centers.centerColors,
    pairedEdgeCount: edges.pairedEdgeCount, correctCornerCount: corners.correctCornerCount,
    isReduced: centers.properColorScheme && edges.pairedEdgeCount === 12,
    isUniform: cube.isUniform(), ...layers, centers, edges: edges.edges, corners: corners.corners,
    unpairedEdges: edges.unpairedEdges, correctEdges: edges.correctEdges,
    flippedInPlace: edges.flippedInPlace, misplacedEdges: edges.misplacedEdges};
}
