import * as THREE from 'three';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
import {SkewbView} from './skewb-three.js';
/** Exact-color view shared by WebGL and SVG. SVG has no opaque body hulls. */
export class TeachingView extends SkewbView {
 constructor(options={}){super(options);this.mode=options.mode||'webgl';this.setState(this.puzzle);}
 setState(puzzle,options={}){super.setState(puzzle,options);const svg=this.mode==='svg';this.root.traverse(o=>{if(!o.isMesh)return;const body=o.userData.kind==='body';if(svg&&body){o.visible=false;return;}const old=o.material;o.material=new THREE.MeshBasicMaterial({color:old.color.clone(),side:THREE.FrontSide});old.dispose();});}
 updateForCamera(camera){if(this.mode!=='svg')return;this.root.updateMatrixWorld(true);const eye=camera.getWorldPosition(new THREE.Vector3());this.root.traverse(o=>{if(o.userData.kind!=='highlight')return;const normal=new THREE.Vector3(...o.userData.normal).transformDirection(o.matrixWorld);o.geometry.computeBoundingSphere();const center=o.localToWorld(o.geometry.boundingSphere.center.clone());o.visible=normal.dot(eye.clone().sub(center))>1e-8;});}
}
export function createRenderer(host,{forceSVG=false}={}){let renderer,mode='webgl';if(!forceSVG){try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NoToneMapping;}catch{mode='svg';}}
 else mode='svg';
 if(mode==='svg'){renderer=new SVGRenderer();renderer.setQuality('high');renderer.setPrecision(3);renderer.overdraw=0;renderer.sortObjects=true;renderer.sortElements=true;renderer.outputColorSpace=THREE.SRGBColorSpace;}
 renderer.domElement.classList.add('puzzle-renderer');renderer.domElement.setAttribute('aria-hidden','true');host.appendChild(renderer.domElement);return {renderer,mode};}
