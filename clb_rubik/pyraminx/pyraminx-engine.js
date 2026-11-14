/** Exact 36-sticker Pyraminx. No NxN code, floating-state accumulation, or resets. */
export const AXES = Object.freeze(['U', 'L', 'R', 'B']);
export const VERTICES = Object.freeze({U:[0,1,0], L:[-Math.sqrt(2/3),-1/3,Math.sqrt(2)/3], R:[Math.sqrt(2/3),-1/3,Math.sqrt(2)/3], B:[0,-1/3,-2*Math.sqrt(2)/3]});
// Face IDs are opposite vertices, not turn names. B = front, U = bottom.
export const FACES = Object.freeze({U:{name:'đáy',color:'vàng',hex:'#ffd84c'}, L:{name:'bên phải',color:'đỏ',hex:'#ed5c5b'}, R:{name:'bên trái',color:'xanh dương',hex:'#3994f1'}, B:{name:'trước',color:'xanh lá',hex:'#41c583'}});
export const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
export const add=(a,b)=>a.map((x,i)=>x+b[i]);
export const scale=(a,k)=>a.map(x=>x*k);
export const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
export function rotate(v,axis,angle){const c=Math.cos(angle),s=Math.sin(angle);return add(add(scale(v,c),scale(cross(axis,v),s)),scale(axis,dot(axis,v)*(1-c)));}
const canonical=(s)=>AXES.filter(x=>s.includes(x)).join('');
const combinations=(a)=>a.flatMap((x,i)=>a.slice(i+1).map(y=>[x,y]));
export const EDGES=combinations(AXES).map(x=>x.join(''));
export const PIECE_IDS=[...AXES.map(x=>'T:'+x),...AXES.map(x=>'C:'+x),...EDGES.map(x=>'E:'+x)];
export const FACE_NORMALS=Object.fromEntries(AXES.map(x=>[x,scale(VERTICES[x],-1)]));
export function fromBarycentric(q){return AXES.reduce((v,x,i)=>add(v,scale(VERTICES[x],q[i]/3)),[0,0,0]);}
const bary=(entries)=>AXES.map(x=>entries[x]||0);
function triangle(kind,place,face){
 const local=AXES.filter(x=>x!==face); let pts;
 if(kind==='T') pts=local.map(x=>bary({[place]:2+Number(x===place),...(x!==place?{[x]:1}:{})}));
 else if(kind==='E') pts=local.map(x=>{const q=Object.fromEntries([...place].map(v=>[v,1]));q[x]=(q[x]||0)+1;return bary(q);});
 else pts=combinations(local).map(pair=>{const q={[place]:1};for(const x of pair)q[x]=(q[x]||0)+1;return bary(q);});
 let v=pts.map(fromBarycentric);if(dot(cross(add(v[1],scale(v[0],-1)),add(v[2],scale(v[0],-1))),FACE_NORMALS[face])<0){[v[1],v[2]]=[v[2],v[1]];[pts[1],pts[2]]=[pts[2],pts[1]];}
 return {vertices:v,barycentric:pts};
}
export const SLOTS=PIECE_IDS.flatMap(pieceId=>{const[kind,place]=pieceId.split(':');return AXES.filter(f=>!place.includes(f)).map(face=>({pieceId,kind,place,face,normal:FACE_NORMALS[face],...triangle(kind,place,face)}));}).map((x,id)=>({...x,id,key:`${x.pieceId}/${x.face}`}));
const slotIndex=new Map(SLOTS.map(s=>[s.key,s.id]));
// Derive the discrete vertex cycles from an actual right-handed 120-degree rotation.
export const VERTEX_CYCLES=Object.fromEntries(AXES.map(axis=>[axis,Object.fromEntries(AXES.map(v=>{const q=rotate(VERTICES[v],VERTICES[axis],-2*Math.PI/3);const to=AXES.find(w=>Math.hypot(...add(q,scale(VERTICES[w],-1)))<1e-9);if(!to)throw Error('Tetrahedron cycle error');return[v,to];}))]));
export function parseMove(token){
 if(typeof token!=='string')throw new TypeError('A move must be text.');
 const normalized=token.trim().replace(/[’′]/g,"'");const m=/^([ULRBulrb])(2|'|2')?$/.exec(normalized);
 if(!m)throw new SyntaxError(`Invalid Pyraminx move: ${token}. Use U L R B or u l r b, optionally prime. No cube face/slice/wide turns.`);
 const axis=m[1].toUpperCase(),tip=m[1]!==axis;const power=m[2]==="2'"?1:m[2]? -1:1;
 return {token:m[1]+(power===-1?"'":''),axis,tip,power,angle:-power*2*Math.PI/3,vector:VERTICES[axis],kind:tip?'tip':'body'};
}
export function tokenize(text){if(typeof text!=='string')throw new TypeError('Algorithm must be text');return text.trim().split(/\s+/).filter(Boolean).map(t=>parseMove(t).token);}
export function inverse(text){return tokenize(text).reverse().map(t=>t.endsWith("'")?t.slice(0,-1):t+"'").join(' ');}
export function slotMoves(slot,move){return move.tip?slot.kind==='T'&&slot.place===move.axis:slot.place.includes(move.axis);}
export const MOVE_PERMUTATIONS=Object.fromEntries([...AXES,...AXES.map(x=>x.toLowerCase())].map(letter=>{const m=parseMove(letter),p=VERTEX_CYCLES[m.axis];return [letter,SLOTS.map(s=>slotMoves(s,m)?slotIndex.get(`${s.kind}:${canonical([...s.place].map(x=>p[x]).join(''))}/${p[s.face]}`):s.id)];}));
function parity(p){let n=0;for(let i=0;i<p.length;i++)for(let j=i+1;j<p.length;j++)if(p[i]>p[j])n^=1;return n;}
export class Pyraminx {
 constructor(state){this.state=state?Array.from(state):SLOTS.map(s=>s.id);const inv=this.invariants();if(!inv.valid)throw new TypeError(`Invalid Pyraminx state: ${inv.errors.join('; ')}`);}
 clone(){return new Pyraminx(this.state);}
 signature(){return this.state.join(',');}
 exportState(){return this.state.slice();}
 move(token){const m=parseMove(token),p=MOVE_PERMUTATIONS[m.tip?m.axis.toLowerCase():m.axis];for(let k=0;k<(m.power===1?1:2);k++){const next=[];this.state.forEach((id,slot)=>next[p[slot]]=id);this.state=next;}return this;}
 apply(algorithm){const tokens=tokenize(algorithm);for(const t of tokens)this.move(t);return this;}
 isSolved(){return this.state.every((x,i)=>x===i);}
 piece(pieceId){if(!PIECE_IDS.includes(pieceId))throw new Error(`Unknown piece ${pieceId}`);const stickers=this.state.flatMap((id,slot)=>SLOTS[id].pieceId===pieceId?[{id,slot,face:SLOTS[slot].face,color:SLOTS[id].face,colorVi:FACES[SLOTS[id].face].color,faceVi:FACES[SLOTS[slot].face].name}]:[]);return {pieceId,kind:pieceId[0],home:pieceId.slice(2),place:SLOTS[stickers[0].slot].place,stickers,solved:stickers.every(x=>x.id===x.slot)};}
 pieces(){return PIECE_IDS.map(id=>this.piece(id));}
 alignedTip(axis){return AXES.filter(f=>f!==axis).every(face=>SLOTS[this.state[slotIndex.get(`T:${axis}/${face}`)]].face===SLOTS[this.state[slotIndex.get(`C:${axis}/${face}`)]].face);}
 metrics(){const pieces=this.pieces(),solved=(kind)=>pieces.filter(p=>p.kind===kind&&p.solved).map(p=>p.pieceId);return {tipsAligned:AXES.filter(a=>this.alignedTip(a)),solvedTips:solved('T'),solvedCenters:solved('C'),solvedEdges:solved('E'),correctlyPlacedEdges:pieces.filter(p=>p.kind==='E'&&p.home===p.place).map(p=>p.pieceId),solvedBottomEdges:pieces.filter(p=>p.kind==='E'&&!p.home.includes('U')&&p.solved).map(p=>p.pieceId),isSolved:this.isSolved()};}
 invariants(){
  const errors=[];if(this.state.length!==36||this.state.some(x=>!Number.isInteger(x)||x<0||x>=36)||new Set(this.state).size!==36)return {valid:false,errors:['State must be a permutation of sticker IDs 0..35']};
  const posById=[];this.state.forEach((id,slot)=>posById[id]=slot);
  for(const id of PIECE_IDS){const homes=SLOTS.filter(s=>s.pieceId===id),dest=homes.map(s=>SLOTS[posById[s.id]]);if(new Set(dest.map(s=>s.pieceId)).size!==1||dest[0].kind!==id[0])errors.push(`Split or wrong-type piece ${id}`);if(id[0]!=='E'&&dest[0].place!==id.slice(2))errors.push(`Moved fixed axis ${id}`);
   if(id[0]!=='E'){const p=VERTEX_CYCLES[id.slice(2)],fs=homes.map(s=>s.face),ds=dest.map(s=>s.face);let possible=false;for(let k=0;k<3;k++){if(fs.every((x,i)=>x===ds[i]))possible=true;fs.forEach((x,i)=>fs[i]=p[x]);}if(!possible)errors.push(`Reflected ${id}`);}}
  if(errors.length)return {valid:false,errors};
  const edgePermutation=[],edgeFlips=[];
  for(const place of EDGES){const slots=SLOTS.filter(s=>s.pieceId==='E:'+place),orig=slots.map(s=>SLOTS[this.state[s.id]]);edgePermutation.push(EDGES.indexOf(orig[0].place));const firstHomeFace=AXES.find(f=>!orig[0].place.includes(f));edgeFlips.push(orig[0].face===firstHomeFace?0:1);}
  const edgePermutationParity=parity(edgePermutation),edgeFlipParity=edgeFlips.reduce((a,b)=>a^b,0);if(edgePermutationParity)errors.push('Odd edge permutation');if(edgeFlipParity)errors.push('Odd edge-flip parity');
  return {valid:!errors.length,errors,edgePermutationParity,edgeFlipParity,edgePermutation,edgeFlips,stickerCount:36,pieceCount:14};
 }
 animationDescriptor(token){const m=parseMove(token),slots=SLOTS.filter(s=>slotMoves(s,m));return {...m,origin:[0,0,0],stickerIds:slots.map(s=>this.state[s.id]),pieceIds:[...new Set(slots.map(s=>SLOTS[this.state[s.id]].pieceId))]};}
 renderData({inset=.07,lift=.002}={}){return SLOTS.map(slot=>{const original=SLOTS[this.state[slot.id]],center=scale(slot.vertices.reduce(add,[0,0,0]),1/3);return {id:original.id,pieceId:original.pieceId,slotId:slot.id,place:slot.place,face:slot.face,color:original.face,hex:FACES[original.face].hex,normal:slot.normal.slice(),vertices:slot.vertices.map(v=>add(add(center,scale(add(v,scale(center,-1)),1-inset)),scale(slot.normal,lift)))};});}
}
/** Solid piece hulls, including cut faces; suitable for Three.js ConvexGeometry. */
export function pieceHull(placeId){const[kind,place]=placeId.split(':');if(!PIECE_IDS.includes(placeId))throw Error('Unknown slot');let points;
 if(kind==='T')points=AXES.map(x=>{const q={[place]:2};q[x]=(q[x]||0)+1;return bary(q);});
 else if(kind==='E')points=AXES.map(x=>{const q=Object.fromEntries([...place].map(v=>[v,1]));q[x]=(q[x]||0)+1;return bary(q);});
 else {const others=AXES.filter(x=>x!==place);points=[...others.map(x=>bary({[place]:2,[x]:1})),...combinations(others).map(([a,b])=>bary({[place]:1,[a]:1,[b]:1}))];}
 return points.map(fromBarycentric);
}
