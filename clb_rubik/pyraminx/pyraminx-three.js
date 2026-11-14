import * as THREE from 'three';
import {ConvexGeometry} from 'three/addons/geometries/ConvexGeometry.js';
import {Pyraminx,PIECE_IDS,pieceHull,VERTICES,AXES,add,scale} from './pyraminx-engine.js';
/** A rebuildable tetrahedron view. Camera/orbit state belongs to the host. */
export class PyraminxView {
 constructor({scale:worldScale=2}={}){this.root=new THREE.Group();this.root.scale.setScalar(worldScale);this.groups=new Map();this.puzzle=new Pyraminx();this.highlightIds=[];this.setState(this.puzzle);}
 dispose(){for(const child of [...this.root.children]){child.traverse(x=>{x.geometry?.dispose();if(x.material){for(const m of Array.isArray(x.material)?x.material:[x.material]){m.map?.dispose();m.dispose();}}});this.root.remove(child);}this.groups.clear();}
 setState(puzzle,{highlightPieceIds=this.highlightIds}={}){
  this.dispose();this.puzzle=puzzle.clone();this.highlightIds=highlightPieceIds.slice();const stickers=this.puzzle.renderData();
  for(const id of PIECE_IDS){const p=this.puzzle.piece(id),g=new THREE.Group();g.userData.pieceId=id;this.groups.set(id,g);this.root.add(g);const hull=pieceHull(`${p.kind}:${p.place}`),center=scale(hull.reduce(add,[0,0,0]),1/hull.length),shrunk=hull.map(v=>add(center,scale(add(v,scale(center,-1)),.987)));
   const body=new THREE.Mesh(new ConvexGeometry(shrunk.map(x=>new THREE.Vector3(...x))),new THREE.MeshStandardMaterial({color:0x202832,roughness:.65,metalness:0}));body.userData={pieceId:id,kind:'body'};g.add(body);
   for(const s of stickers.filter(x=>x.pieceId===id)){const geom=new THREE.BufferGeometry();geom.setAttribute('position',new THREE.Float32BufferAttribute(s.vertices.flat(),3));geom.computeVertexNormals();const selected=this.highlightIds.includes(id);const mesh=new THREE.Mesh(geom,new THREE.MeshStandardMaterial({color:s.hex,roughness:.58,side:THREE.FrontSide,emissive:selected?0xffffff:0x000000,emissiveIntensity:selected?.13:0}));mesh.userData={pieceId:id,stickerId:s.id,slotId:s.slotId,face:s.face};g.add(mesh);
    if(selected){const border=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(s.vertices.map(v=>new THREE.Vector3(...add(v,scale(s.normal,.002))))),new THREE.LineBasicMaterial({color:0xffffff,depthTest:true}));g.add(border);}
   }
  }
  // Hollow interior stays dark during a turn; no full-size solid blocking the twist.
  const core=new THREE.Mesh(new THREE.SphereGeometry(.14,12,8),new THREE.MeshStandardMaterial({color:0x121922,roughness:.8}));this.root.add(core);
 }
 setHighlights(pieceIds){this.setState(this.puzzle,{highlightPieceIds:pieceIds});}
 /** p in [0,1], always measured from the current exact state; never accumulates. */
 previewMove(token,p){const d=this.puzzle.animationDescriptor(token);const selected=new Set(d.pieceIds),axis=new THREE.Vector3(...d.vector);for(const[id,g]of this.groups){g.quaternion.identity();if(selected.has(id))g.quaternion.setFromAxisAngle(axis,d.angle*Math.max(0,Math.min(1,p)));}return d;}
 commitMove(token){const next=this.puzzle.clone().move(token);this.setState(next);return next;}
 cancelPreview(){for(const g of this.groups.values())g.quaternion.identity();}
}
/** Axis labels are view overlays only; names stay fixed when the camera moves. */
export function addAxisLabels(root){
 const labels=[];for(const a of AXES){const canvas=document.createElement('canvas');canvas.width=96;canvas.height=96;const ctx=canvas.getContext('2d');ctx.fillStyle='#152535';ctx.beginPath();ctx.arc(48,48,39,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#ffffff';ctx.lineWidth=3;ctx.stroke();ctx.fillStyle='#ffffff';ctx.font='bold 54px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(a,48,51);const texture=new THREE.CanvasTexture(canvas),sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,depthTest:false}));sprite.position.set(...scale(VERTICES[a],1.14));sprite.scale.set(.14,.14,.14);sprite.renderOrder=10;root.add(sprite);labels.push(sprite);}return labels;
}
