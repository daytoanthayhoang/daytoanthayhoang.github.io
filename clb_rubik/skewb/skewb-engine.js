/** Exact integer Skewb mechanics. Local BOOK notation, NOT WCA Skewb notation.
 * R=UFR, L=UFL, B=UBR, K=UBL. Clockwise as seen from named vertex into core.
 * Four central diagonal cut planes partition [-1,1]^3 into 14 convex solids.
 * Corners: hull(origin, corner, its three adjacent edge midpoints).
 * Centers: hull(origin, the four edge midpoints surrounding that face).
 */
export const FACE_ORDER=['U','D','F','B','R','L'];
export const NORMALS={R:[1,0,0],L:[-1,0,0],U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1]};
export const COLORS={U:{name:'vàng',hex:'#F4D846'},D:{name:'trắng',hex:'#F7F7F3'},F:{name:'xanh lá',hex:'#38A878'},B:{name:'xanh dương',hex:'#548DC4'},R:{name:'cam',hex:'#F4A546'},L:{name:'đỏ',hex:'#E65E58'}};
export const FACE_NAMES={U:'trên U',D:'dưới D',F:'trước F',B:'sau B',R:'phải R',L:'trái L'};
export const AXES={R:[1,1,1],L:[-1,1,1],B:[1,1,-1],K:[-1,1,-1]};
export const AXIS_NAMES={R:'UFR',L:'UFL',B:'UBR',K:'UBL'};
export const IDENTITY=[1,0,0,0,1,0,0,0,1];
export const add=(a,b)=>a.map((x,i)=>x+b[i]);
export const scale=(a,s)=>a.map(x=>x*s);
export const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
export const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
export const equal=(a,b)=>a.every((x,i)=>x===b[i]);
export const transform=(m,v)=>[dot(m.slice(0,3),v),dot(m.slice(3,6),v),dot(m.slice(6,9),v)];
const multiply=(a,b)=>[0,1,2].flatMap(i=>[0,1,2].map(j=>a[3*i]*b[j]+a[3*i+1]*b[j+3]+a[3*i+2]*b[j+6]));
const transpose=m=>[m[0],m[3],m[6],m[1],m[4],m[7],m[2],m[5],m[8]];
const determinant=m=>dot(m.slice(0,3),cross(m.slice(3,6),m.slice(6,9)));
export const cornerName=p=>(p[1]>0?'U':'D')+(p[2]>0?'F':'B')+(p[0]>0?'R':'L');
export const faceName=n=>Object.keys(NORMALS).find(f=>equal(n,NORMALS[f]));
export function tokenize(sequence){if(Array.isArray(sequence))return sequence.flatMap(tokenize);if(typeof sequence!=='string')throw Error('Expected move string');const tokens=sequence.replaceAll('’',"'").trim().split(/\s+/).filter(Boolean);for(const t of tokens)parseMove(t);return tokens;}
export function parseMove(token){const m=/^([RLBKxyz])(2?)('?)$/.exec(token);if(!m)throw Error(`Invalid local Skewb move: ${token}`);return {token,axis:m[1],power:(m[2]?2:1)*(m[3]?-1:1),whole:'xyz'.includes(m[1])};}
export function inverse(sequence){return tokenize(sequence).reverse().map(t=>t.endsWith("'")?t.slice(0,-1):t+"'").join(' ');}
function quarter(axis){return {x:[1,0,0,0,0,1,0,-1,0],y:[0,0,-1,0,1,0,1,0,0],z:[0,1,0,-1,0,0,0,0,1]}[axis];}
/** Signed cyclic-coordinate permutation, no trigonometry or accumulated error. */
export function moveMatrix(token){const d=parseMove(token);let m;if(d.whole)m=quarter(d.axis);else{const s=AXES[d.axis],parity=s[0]*s[1]*s[2],perm=parity>0?[1,2,0]:[2,0,1];m=[0,1,2].flatMap(i=>[0,1,2].map(j=>j===perm[i]?s[i]*s[j]:0));}let out=IDENTITY.slice(),times=((d.power%(d.whole?4:3))+(d.whole?4:3))%(d.whole?4:3);while(times--)out=multiply(m,out);return out;}
function outward(vertices,normal){const c=cross(add(vertices[1],scale(vertices[0],-1)),add(vertices[2],scale(vertices[0],-1)));return dot(c,normal)<0?vertices.slice().reverse():vertices;}
function faceBasis(n){const u=n[0]?[0,1,0]:[1,0,0];return [u,cross(n,u)];}
function createPieces(){const out=[];for(const face of FACE_ORDER){const n=NORMALS[face], [u,v]=faceBasis(n),poly=outward([add(n,u),add(n,v),add(n,scale(u,-1)),add(n,scale(v,-1))],n),id=`center-${face}`;out.push({id,kind:'center',home:face,anchor:n.slice(),hull:[[0,0,0],...poly],stickers:[{id:`${id}:${face}`,color:face,normal:n.slice(),vertices:poly}]});}
 for(const x of [-1,1])for(const y of [-1,1])for(const z of [-1,1]){const anchor=[x,y,z],home=cornerName(anchor),id=`corner-${home}`,mids=[0,1,2].map(i=>anchor.map((c,j)=>i===j?0:c)),stickers=[];for(const face of FACE_ORDER){const n=NORMALS[face];if(dot(anchor,n)!==1)continue;const axis=n.findIndex(x=>x!==0),vertices=outward([anchor,...mids.filter((_,i)=>i!==axis)],n);stickers.push({id:`${id}:${face}`,color:face,normal:n.slice(),vertices});}out.push({id,kind:'corner',home,anchor,hull:[[0,0,0],anchor,...mids],stickers});}return out;}
export const PIECES=createPieces();export const PIECE_IDS=PIECES.map(p=>p.id);export const STICKER_IDS=PIECES.flatMap(p=>p.stickers.map(s=>s.id));
function validMatrix(m){return Array.isArray(m)&&m.length===9&&m.every(x=>[-1,0,1].includes(x))&&equal(multiply(m,transpose(m)),IDENTITY)&&determinant(m)===1;}
export class Skewb{
 constructor(state){this.orientations=PIECES.map(()=>IDENTITY.slice());this.grip=IDENTITY.slice();if(state)this.fromState(state);}
 static fromState(state){return new Skewb(state);}
 fromState(state){if(state?.schema!=='skewb-state-1'||!Array.isArray(state.orientations)||state.orientations.length!==14||!state.orientations.every(validMatrix)||!validMatrix(state.grip))throw Error('Invalid Skewb state schema or orientation');const before=this.exportState();this.orientations=state.orientations.map(m=>m.slice());this.grip=state.grip.slice();try{this.validate();}catch(e){this.orientations=before.orientations;this.grip=before.grip;throw e;}return this;}
 clone(){return new Skewb(this.exportState());}
 exportState(){return {schema:'skewb-state-1',grip:this.grip.slice(),orientations:this.orientations.map(x=>x.slice())};}
 signature(){return JSON.stringify(this.exportState());}
 piece(id){const i=PIECE_IDS.indexOf(id);if(i<0)throw Error(`Unknown piece ${id}`);const p=PIECES[i],m=this.orientations[i],position=transform(m,p.anchor),place=p.kind==='center'?faceName(position):cornerName(position),stickers=p.stickers.map(s=>{const n=transform(m,s.normal);return {id:s.id,color:s.color,colorVi:COLORS[s.color].name,face:faceName(n),faceVi:FACE_NAMES[faceName(n)],normal:n};});return {id,kind:p.kind,home:p.home,place,position,orientation:m.slice(),stickers};}
 selected(token){const d=parseMove(token);return PIECES.filter((p,i)=>d.whole||dot(transform(this.orientations[i],p.anchor),AXES[d.axis])>0).map(p=>p.id);}
 move(token){const d=parseMove(token),m=moveMatrix(token),selected=new Set(this.selected(token));this.orientations=this.orientations.map((o,i)=>selected.has(PIECE_IDS[i])?multiply(m,o):o);if(d.whole)this.grip=multiply(m,this.grip);return this;}
 apply(sequence){const tokens=tokenize(sequence);for(const token of tokens)this.move(token);return this;}
 animationDescriptor(token){const d=parseMove(token),vector=d.whole?NORMALS[{x:'R',y:'U',z:'F'}[d.axis]]:scale(AXES[d.axis],1/Math.sqrt(3)),pieceIds=this.selected(token);return {...d,vector,origin:[0,0,0],angle:-d.power*(d.whole?Math.PI/2:2*Math.PI/3),kind:d.whole?'whole-puzzle':'corner-turn',pieceIds,stickerIds:PIECES.filter(p=>pieceIds.includes(p.id)).flatMap(p=>p.stickers.map(s=>s.id)),axisPlace:d.whole?d.axis:AXIS_NAMES[d.axis]};}
 pieceHull(id){const i=PIECE_IDS.indexOf(id);if(i<0)throw Error('Unknown piece');return PIECES[i].hull.map(v=>transform(this.orientations[i],v));}
 renderData({inset=.93,offset=.009}={}){return PIECES.flatMap((p,i)=>p.stickers.map(s=>{const m=this.orientations[i],normal=transform(m,s.normal),position=transform(m,p.anchor),place=p.kind==='center'?faceName(position):cornerName(position),raw=s.vertices.map(v=>transform(m,v)),center=scale(raw.reduce(add,[0,0,0]),1/raw.length),vertices=raw.map(v=>add(add(center,scale(add(v,scale(center,-1)),inset)),scale(normal,offset)));return {id:s.id,pieceId:p.id,kind:p.kind,slotId:`${p.kind}:${place}:${faceName(normal)}`,place,face:faceName(normal),color:s.color,colorVi:COLORS[s.color].name,hex:COLORS[s.color].hex,normal,vertices};}));}
 stickerState(){return PIECES.flatMap((p,i)=>p.stickers.map(s=>({id:s.id,pieceId:p.id,color:s.color,position:transform(this.orientations[i],p.anchor),normal:transform(this.orientations[i],s.normal)})));}
 validate(){const ss=this.stickerState(),keys=ss.map(s=>`${s.position}|${s.normal}`);if(new Set(keys).size!==30)throw Error('Overlapping sticker slots');const legalSlots=new Set(new Skewb().stickerState().map(s=>`${s.position}|${s.normal}`));if(keys.some(k=>!legalSlots.has(k)))throw Error('Invalid sticker slot');return true;}
 pieceSolved(id){const i=PIECE_IDS.indexOf(id),p=PIECES[i],o=this.orientations[i];return equal(transform(o,p.anchor),transform(this.grip,p.anchor))&&p.stickers.every(s=>equal(transform(o,s.normal),transform(this.grip,s.normal)));}
 metrics(){const ss=this.stickerState(),faces=Object.fromEntries(FACE_ORDER.map(f=>[f,ss.filter(s=>equal(s.normal,NORMALS[f]))])),corners=PIECES.filter(p=>p.kind==='corner'),centers=PIECES.filter(p=>p.kind==='center'),cornerFrame=Object.fromEntries(FACE_ORDER.map(f=>[f,[...new Set(faces[f].filter(s=>s.pieceId.startsWith('corner')).map(s=>s.color))]])),uniformCornerFaces=FACE_ORDER.filter(f=>cornerFrame[f].length===1),uniformFaces=FACE_ORDER.filter(f=>new Set(faces[f].map(s=>s.color)).size===1),matchingCenters=FACE_ORDER.filter(f=>cornerFrame[f].length===1&&faces[f].find(s=>s.pieceId.startsWith('center')).color===cornerFrame[f][0]),whiteFace=this.piece('center-D').place,whiteCorners=corners.filter(p=>this.piece(p.id).stickers.some(s=>s.color==='D'&&s.face===whiteFace)).map(p=>p.id),yellowUp=corners.filter(p=>this.piece(p.id).stickers.some(s=>s.color==='U'&&s.face==='U')).map(p=>p.id);return {solvedCorners:corners.filter(p=>this.pieceSolved(p.id)).map(p=>p.id),solvedCenters:centers.filter(p=>this.pieceSolved(p.id)).map(p=>p.id),whiteFace,whiteCorners,yellowUp,uniformCornerFaces,uniformFaces,matchingCenters,cornerFrame,centers:Object.fromEntries(centers.map(p=>[p.id,this.piece(p.id).place])),firstFaceSolved:whiteCorners.length===4&&corners.filter(p=>p.home.includes('D')).every(p=>this.pieceSolved(p.id)),allCornersSolved:uniformCornerFaces.length===6,solved:uniformFaces.length===6,exactSolved:PIECE_IDS.every(id=>this.pieceSolved(id))};}
 isSolved(){return this.metrics().solved;}
}
