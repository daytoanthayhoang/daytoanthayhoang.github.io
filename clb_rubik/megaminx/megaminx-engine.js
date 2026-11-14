/** Dodecahedral Megaminx. 12 planar 72° face cuts, 62 pieces, 132 stickers.
 * Discrete icosahedral-group orientations avoid cumulative floating-point drift.
 * Geometry is generated independently from face-plane intersections and cuts.
 */
export const add=(a,b)=>a.map((x,i)=>x+b[i]),scale=(a,s)=>a.map(x=>x*s),dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],norm=a=>scale(a,1/Math.sqrt(dot(a,a))),close=(a,b,t=1e-7)=>a.every((x,i)=>Math.abs(x-b[i])<t);
export const transform=(m,v)=>[dot(m.slice(0,3),v),dot(m.slice(3,6),v),dot(m.slice(6,9),v)];
export const multiply=(a,b)=>[0,1,2].flatMap(i=>[0,1,2].map(j=>a[3*i]*b[j]+a[3*i+1]*b[j+3]+a[3*i+2]*b[j+6]));
const transpose=m=>[m[0],m[3],m[6],m[1],m[4],m[7],m[2],m[5],m[8]];
export const IDENTITY=[1,0,0,0,1,0,0,0,1],RING=['F','R','BR','BL','L'],LOW=['DB','DBL','DL','DR','DBR'];
export const NORMALS={U:[0,1,0],D:[0,-1,0]};
for(let i=0;i<5;i++)NORMALS[RING[i]]=[2/Math.sqrt(5)*Math.sin(i*2*Math.PI/5),1/Math.sqrt(5),2/Math.sqrt(5)*Math.cos(i*2*Math.PI/5)];
for(const [a,b] of [['F','DB'],['R','DBL'],['BR','DL'],['BL','DR'],['L','DBR']])NORMALS[b]=scale(NORMALS[a],-1);
export const FACE_ORDER=Object.keys(NORMALS),COLORS=Object.fromEntries(FACE_ORDER.map((f,i)=>[f,{name:['vàng','trắng','xanh lá','đỏ','xanh dương','tím hồng','tím','xanh trời','kem','hồng nhạt','cam','xanh non'][i],hex:['#e8d853','#f7f7f3','#49a77f','#dc625c','#6898cf','#ce8bc9','#9b8fc7','#8fcbde','#e9ca99','#d9b9c7','#f1a66a','#b6d28e'][i]}]));
export const FACE_NAMES=Object.fromEntries(FACE_ORDER.map(f=>[f,`${f} · ${COLORS[f].name}`]));
export const faceName=n=>FACE_ORDER.find(f=>close(n,NORMALS[f]));
export const facesAt=p=>FACE_ORDER.filter(f=>Math.abs(dot(p,NORMALS[f])-1)<1e-6);
export const placeName=fs=>FACE_ORDER.filter(f=>fs.includes(f)).join('-');
function basis(a,b){const u=norm(a),v=norm(add(b,scale(u,-dot(u,b)))),w=cross(u,v);return transpose([...u,...v,...w]);}
export function frameMatrix(localFirst,localNeighbor,worldFirst,worldNeighbor){return multiply(basis(NORMALS[worldFirst],NORMALS[worldNeighbor]),transpose(basis(NORMALS[localFirst],NORMALS[localNeighbor])));}
export function frameMap(localFirst='U',localNeighbor='F',worldFirst='U',worldNeighbor='F'){const m=frameMatrix(localFirst,localNeighbor,worldFirst,worldNeighbor);return Object.fromEntries(FACE_ORDER.map(f=>[f,faceName(transform(m,NORMALS[f]))]));}
export const ORIENTATIONS=[];
for(const f of FACE_ORDER)for(const g of FACE_ORDER)if(Math.abs(dot(NORMALS[f],NORMALS[g])-1/Math.sqrt(5))<1e-7)ORIENTATIONS.push(frameMatrix('U','F',f,g));
const orientationIndex=m=>{const i=ORIENTATIONS.findIndex(o=>close(m,o));if(i<0)throw Error('Non-symmetry orientation');return i;};
const identityIndex=orientationIndex(IDENTITY),PRODUCTS=ORIENTATIONS.map(a=>ORIENTATIONS.map(b=>orientationIndex(multiply(a,b))));
export function rotation(axis,angle){const[x,y,z]=axis,c=Math.cos(angle),s=Math.sin(angle),t=1-c;return [t*x*x+c,t*x*y-s*z,t*x*z+s*y,t*x*y+s*z,t*y*y+c,t*y*z-s*x,t*x*z-s*y,t*y*z+s*x,t*z*z+c];}
export function parseMove(token){const m=/^(DBR|DBL|DR|DL|DB|BR|BL|[UDFRL])([1-4]?)('?)$/.exec(token);if(!m)throw Error(`Invalid Megaminx face turn: ${token}`);return {token,axis:m[1],face:m[1],power:Number(m[2]||1)*(m[3]?-1:1),whole:false};}
export function tokenize(seq){if(Array.isArray(seq))return seq.flatMap(tokenize);if(typeof seq!=='string')throw Error('Expected moves');const t=seq.replaceAll('’',"'").trim().split(/\s+/).filter(Boolean);t.forEach(parseMove);return t;}
export const inverse=seq=>tokenize(seq).reverse().map(t=>t.endsWith("'")?t.slice(0,-1):t+"'").join(' ');
export const mapAlgorithm=(seq,map)=>tokenize(seq).map(t=>{const d=parseMove(t);return map[d.face]+(Math.abs(d.power)>1?Math.abs(d.power):'')+(d.power<0?"'":'');}).join(' ');
export const moveMatrix=t=>{const d=parseMove(t);return rotation(NORMALS[d.face],-d.power*2*Math.PI/5);};
const moveIndices=Object.fromEntries(FACE_ORDER.map(f=>[f,orientationIndex(moveMatrix(f))]));
function combos(a,k){if(k===0)return [[]];return a.flatMap((v,i)=>combos(a.slice(i+1),k-1).map(r=>[v,...r]));}
const intersection=(a,b,c)=>{const det=dot(a.n,cross(b.n,c.n));return Math.abs(det)<1e-8?null:scale(add(add(scale(cross(b.n,c.n),a.d),scale(cross(c.n,a.n),b.d)),scale(cross(a.n,b.n),c.d)),1/det);};
export const CUT=.78;
function makePieces(){const out=[];for(let k=1;k<=3;k++)for(const fs of combos(FACE_ORDER,k)){if(combos(fs,2).some(([a,b])=>Math.abs(dot(NORMALS[a],NORMALS[b])-1/Math.sqrt(5))>1e-7))continue;const sum=fs.reduce((a,f)=>add(a,NORMALS[f]),[0,0,0]),anchor=scale(sum,1/dot(sum,NORMALS[fs[0]]));if(FACE_ORDER.some(f=>dot(anchor,NORMALS[f])>1+1e-7))continue;const kind=['','center','edge','corner'][k],id=`${kind}-${placeName(fs)}`,planes=[...FACE_ORDER.map(f=>({n:NORMALS[f],d:fs.includes(f)?1:CUT})),...fs.map(f=>({n:scale(NORMALS[f],-1),d:-CUT}))],hull=[];
 for(const ps of combos(planes,3)){const p=intersection(...ps);if(p&&planes.every(q=>dot(p,q.n)<=q.d+1e-7)&&!hull.some(q=>close(p,q)))hull.push(p);}
 const stickers=fs.map(f=>{const n=NORMALS[f],vertices=hull.filter(p=>Math.abs(dot(p,n)-1)<1e-7),center=scale(vertices.reduce(add,[0,0,0]),1/vertices.length),u=norm(add(vertices[0],scale(center,-1))),v=cross(n,u);vertices.sort((a,b)=>Math.atan2(dot(add(a,scale(center,-1)),v),dot(add(a,scale(center,-1)),u))-Math.atan2(dot(add(b,scale(center,-1)),v),dot(add(b,scale(center,-1)),u)));return {id:`${id}:${f}`,color:f,normal:n,vertices};});out.push({id,kind,home:placeName(fs),faces:fs,anchor,hull,stickers});}return out;}
export const PIECES=makePieces(),PIECE_IDS=PIECES.map(p=>p.id),STICKER_IDS=PIECES.flatMap(p=>p.stickers.map(s=>s.id)),pieceId=fs=>PIECES.find(p=>p.faces.length===fs.length&&fs.every(f=>p.faces.includes(f)))?.id;
const canonicalSlot=(p,n)=>`${facesAt(p).join(',')}:${faceName(n)}`;
const LEGAL_SLOTS=new Set(PIECES.flatMap(p=>p.stickers.map(s=>canonicalSlot(p.anchor,s.normal))));
export class Megaminx{
 constructor(state){this.orientations=PIECES.map(()=>identityIndex);if(state)this.fromState(state);}
 static fromState(state){return new Megaminx(state);}
 fromState(state){if(state?.schema!=='megaminx-state-1'||state.orientations?.length!==62||!state.orientations.every(i=>Number.isInteger(i)&&i>=0&&i<60))throw Error('Invalid Megaminx state');const before=this.orientations;this.orientations=state.orientations.slice();try{this.validate();}catch(e){this.orientations=before;throw e;}return this;}
 exportState(){return {schema:'megaminx-state-1',orientations:this.orientations.slice()};}
 clone(){return new Megaminx(this.exportState());}signature(){return this.orientations.join(',');}
 piece(id){const i=PIECE_IDS.indexOf(id);if(i<0)throw Error('Unknown piece');const p=PIECES[i],m=ORIENTATIONS[this.orientations[i]],position=transform(m,p.anchor),place=placeName(facesAt(position));return {id,kind:p.kind,home:p.home,place,position,faces:facesAt(position),orientation:m,stickers:p.stickers.map(s=>{const n=transform(m,s.normal);return {id:s.id,color:s.color,colorVi:COLORS[s.color].name,face:faceName(n),normal:n};})};}
 selected(token){const n=NORMALS[parseMove(token).face];return PIECES.filter((p,i)=>Math.abs(dot(transform(ORIENTATIONS[this.orientations[i]],p.anchor),n)-1)<1e-6).map(p=>p.id);}
 move(token){const d=parseMove(token),sel=new Set(this.selected(token));let turns=(d.power%5+5)%5;while(turns--)this.orientations=this.orientations.map((o,i)=>sel.has(PIECE_IDS[i])?PRODUCTS[moveIndices[d.face]][o]:o);return this;}
 apply(seq){tokenize(seq).forEach(t=>this.move(t));return this;}
 animationDescriptor(token){const d=parseMove(token),pieceIds=this.selected(token);return {...d,kind:'face-turn',vector:NORMALS[d.face],origin:[0,0,0],angle:-d.power*2*Math.PI/5,pieceIds,stickerIds:PIECES.filter(p=>pieceIds.includes(p.id)).flatMap(p=>p.stickers.map(s=>s.id))};}
 pieceHull(id){const i=PIECE_IDS.indexOf(id);return PIECES[i].hull.map(v=>transform(ORIENTATIONS[this.orientations[i]],v));}
 renderData({inset=.955,offset=.003}={}){return PIECES.flatMap((p,i)=>p.stickers.map(s=>{const m=ORIENTATIONS[this.orientations[i]],normal=transform(m,s.normal),position=transform(m,p.anchor),raw=s.vertices.map(v=>transform(m,v)),c=scale(raw.reduce(add,[0,0,0]),1/raw.length),face=faceName(normal),place=placeName(facesAt(position));return {id:s.id,pieceId:p.id,kind:p.kind,slotId:`${p.kind}:${place}:${face}`,place,face,color:s.color,colorVi:COLORS[s.color].name,hex:COLORS[s.color].hex,normal,vertices:raw.map(v=>add(add(c,scale(add(v,scale(c,-1)),inset)),scale(normal,offset)))};}));}
 stickerState(){return PIECES.flatMap((p,i)=>p.stickers.map(s=>({id:s.id,pieceId:p.id,color:s.color,position:transform(ORIENTATIONS[this.orientations[i]],p.anchor),normal:transform(ORIENTATIONS[this.orientations[i]],s.normal)})));}
 validate(){const ss=this.stickerState(),keys=ss.map(s=>canonicalSlot(s.position,s.normal));if(new Set(keys).size!==132||keys.some(k=>!LEGAL_SLOTS.has(k)))throw Error('Invalid or overlapping sticker slots');return true;}
 pieceSolved(id){const p=PIECES.find(p=>p.id===id),q=this.piece(id);return close(p.anchor,q.position)&&q.stickers.every(s=>s.color===s.face);}
 piecePlaced(id){return this.piece(id).home===this.piece(id).place;}
 metrics(){const e=PIECES.filter(p=>p.kind==='edge'),c=PIECES.filter(p=>p.kind==='corner'),solvedIds=PIECE_IDS.filter(id=>this.pieceSolved(id)),test=ps=>ps.every(p=>solvedIds.includes(p.id)),baseEdges=e.filter(p=>p.faces.includes('D')),baseCorners=c.filter(p=>p.faces.includes('D')),lowerRing=e.filter(p=>p.faces.every(f=>LOW.includes(f))),triangles=PIECES.filter(p=>p.kind!=='center'&&p.faces.some(f=>LOW.includes(f))&&p.faces.filter(f=>RING.includes(f)).length===1),nonTop=PIECES.filter(p=>!p.faces.includes('U')),upEdges=e.filter(p=>p.faces.includes('U')),upCorners=c.filter(p=>p.faces.includes('U'));
 return {solvedIds,solvedEdges:e.filter(p=>this.pieceSolved(p.id)).map(p=>p.id),solvedCorners:c.filter(p=>this.pieceSolved(p.id)).map(p=>p.id),whiteEdges:baseEdges.filter(p=>this.pieceSolved(p.id)).map(p=>p.id),whiteCorners:baseCorners.filter(p=>this.pieceSolved(p.id)).map(p=>p.id),star:test(baseEdges),firstLayer:test([...baseEdges,...baseCorners]),lowerRing:test([...baseEdges,...baseCorners,...lowerRing]),triangles:test([...baseEdges,...baseCorners,...lowerRing,...triangles]),belowTop:test(nonTop),topEdgesOriented:upEdges.every(p=>this.piece(p.id).stickers.find(s=>s.color==='U').face==='U'),topEdgesSolved:test(upEdges),topCornersPlaced:upCorners.every(p=>this.piecePlaced(p.id)),solved:test(PIECES)};}
 isSolved(){return this.metrics().solved;}
}
