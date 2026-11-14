import * as THREE from 'three';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
export {MegaminxView as TeachingView} from "./megaminx-three.js";
export function createRenderer(host,{forceSVG=false}={}){let renderer,mode='webgl';if(!forceSVG){try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NoToneMapping;}catch{mode='svg';}}
 else mode='svg';
 if(mode==='svg'){renderer=new SVGRenderer();renderer.setQuality('high');renderer.setPrecision(3);renderer.overdraw=.45;renderer.sortObjects=true;renderer.sortElements=true;renderer.outputColorSpace=THREE.SRGBColorSpace;}
 renderer.domElement.classList.add('puzzle-renderer');renderer.domElement.setAttribute('aria-hidden','true');host.appendChild(renderer.domElement);return {renderer,mode};}
