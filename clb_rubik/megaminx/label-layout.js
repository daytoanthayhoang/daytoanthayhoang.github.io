import {Vector3} from 'three';
import {FACE_ORDER,NORMALS} from './megaminx-engine.js';
/** Visible fixed-center labels. A face must point toward the eye from its own
 * surface center, not merely toward the camera's world position. */
export function visibleFaceLabels(camera,width,height,{worldScale=1.45,activeFace=null}={}){
 camera.updateMatrixWorld();const eye=camera.getWorldPosition(new Vector3());
 const candidates=FACE_ORDER.map(face=>{const n=new Vector3(...NORMALS[face]),center=n.clone().multiplyScalar(worldScale*1.055),toward=eye.clone().sub(center),facing=n.dot(toward.clone().normalize()),projected=center.clone().project(camera);return {face,facing,x:(projected.x+1)*width/2,y:(1-projected.y)*height/2,z:projected.z};}).filter(p=>p.facing>.10&&p.z>-1&&p.z<1&&p.x>20&&p.x<width-20&&p.y>15&&p.y<height-15).sort((a,b)=>Number(b.face===activeFace)-Number(a.face===activeFace)||b.facing-a.facing);
 const chosen=[];for(const p of candidates){if(chosen.length===6)break;if(chosen.some(q=>Math.abs(p.x-q.x)<43&&Math.abs(p.y-q.y)<34))continue;chosen.push(p);}return chosen;
}
