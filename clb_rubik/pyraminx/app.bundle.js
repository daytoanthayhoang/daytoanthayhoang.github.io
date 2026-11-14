var ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yl=0,Na=1,Sl=2;var Bs=1,bl=2,ji=3,an=0,Xt=1,nn=2,_i=0,Qi=1,ka=2,Va=3,Fa=4,Ml=5;var vi=100,El=101,Tl=102,Rl=103,wl=104,Al=200,Ll=201,Cl=202,Ul=203,Oa=204,za=205,Il=206,Pl=207,Bl=208,Dl=209,Nl=210,kl=211,Vl=212,Fl=213,Ol=214,Mr=0,Er=1,Tr=2,zi=3,Rr=4,wr=5,Ar=6,Lr=7,Ga=0,zl=1,Gl=2,cn=0,Ha=1,Wa=2,Xa=3,qa=4,Ya=5,Za=6,Ka=7;var $a=300,yi=301,es=302,no=303,io=304,Cr=1e3,Mn=1001,Ur=1002,It=1003,Hl=1004;var Ds=1005;var Ht=1006,so=1007;var Wn=1008;var sn=1009,Ja=1010,ja=1011,ts=1012,ro=1013,gn=1014,xn=1015,_n=1016,oo=1017,ao=1018,Si=1020,Qa=35902,ec=35899,tc=1021,nc=1022,vn=1023,Fn=1026,Xn=1027,ic=1028,co=1029,ri=1030,lo=1031;var ho=1033,Ns=33776,ks=33777,Vs=33778,Fs=33779,uo=35840,fo=35841,po=35842,mo=35843,go=36196,xo=37492,_o=37496,vo=37488,yo=37489,Os=37490,So=37491,bo=37808,Mo=37809,Eo=37810,To=37811,Ro=37812,wo=37813,Ao=37814,Lo=37815,Co=37816,Uo=37817,Io=37818,Po=37819,Bo=37820,Do=37821,No=36492,ko=36494,Vo=36495,Fo=36283,Oo=36284,zs=36285,zo=36286;var ms=2300,Ir=2301,Sr=2302,Ca=2303,Ua=2400,Ia=2401,Pa=2402;var Wl=3200;var Go=0,Xl=1,qn="",Ut="srgb",gs="srgb-linear",xs="linear",lt="srgb";var br=7680;var ql=519,Yl=512,Zl=513,Kl=514,sc=515,$l=516,Jl=517,rc=518,oc=519,jl=35044;var ac="300 es",on=2e3,_s=2001;function cd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ql(){let i=vs("canvas");return i.style.display="block",i}var Zc={},Gi=null;function cc(...i){let e="THREE."+i.shift();Gi?Gi("log",e,...i):console.log(e,...i)}function eh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=eh(i);let e="THREE."+i.shift();if(Gi)Gi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=eh(i);let e="THREE."+i.shift();if(Gi)Gi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function us(...i){let e=i.join(" ");e in Zc||(Zc[e]=!0,Ge(...i))}function th(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nh={[Mr]:Mr,[Tr]:Ar,[Rr]:Rr,[zi]:wr,[Er]:Er,[Ar]:Tr,[Lr]:Lr,[wr]:zi},pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=1234567,fs=Math.PI/180,Hi=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function hd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dd(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function ud(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function fd(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xd(i,e){return i+Math.random()*(e-i)}function _d(i){return i*(.5-Math.random())}function vd(i){i!==void 0&&(Kc=i);let e=Kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(i){return i*fs}function Sd(i){return i*Hi}function bd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),m=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),u=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*m,c*h,a*l);break;case"YZY":i.set(c*h,a*d,c*m,a*l);break;case"ZXZ":i.set(c*m,c*h,a*d,a*l);break;case"XZX":i.set(a*d,c*u,c*p,a*l);break;case"YXY":i.set(c*p,a*d,c*u,a*l);break;case"ZYZ":i.set(c*u,c*p,a*d,a*l);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ih(i,e){if(e.constructor===Float32Array)return i;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function sh(i,e){if(e.constructor===Float32Array)return i;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var uc={DEG2RAD:fs,RAD2DEG:Hi,generateUUID:ns,clamp:$e,euclideanModulo:lc,mapLinear:hd,inverseLerp:dd,lerp:ps,damp:ud,pingpong:fd,smoothstep:pd,smootherstep:md,randInt:gd,randFloat:xd,randFloatSpread:_d,seededRandom:vd,degToRad:yd,radToDeg:Sd,isPowerOfTwo:bd,ceilPowerOfTwo:Md,floorPowerOfTwo:hc,setQuaternionFromProperEuler:Ed,normalize:sh,denormalize:ih},ze=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],m=n[s+3],h=r[o+0],p=r[o+1],u=r[o+2],S=r[o+3];if(m!==S||c!==h||l!==p||d!==u){let g=c*h+l*p+d*u+m*S;g<0&&(h=-h,p=-p,u=-u,S=-S,g=-g);let f=1-a;if(g<.9995){let b=Math.acos(g),R=Math.sin(b);f=Math.sin(f*b)/R,a=Math.sin(a*b)/R,c=c*f+h*a,l=l*f+p*a,d=d*f+u*a,m=m*f+S*a}else{c=c*f+h*a,l=l*f+p*a,d=d*f+u*a,m=m*f+S*a;let b=1/Math.sqrt(c*c+l*l+d*d+m*m);c*=b,l*=b,d*=b,m*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],m=r[o],h=r[o+1],p=r[o+2],u=r[o+3];return e[t]=a*u+d*m+c*p-l*h,e[t+1]=c*u+d*h+l*m-a*p,e[t+2]=l*u+d*p+a*h-c*m,e[t+3]=d*u-a*m-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),m=a(r/2),h=c(n/2),p=c(s/2),u=c(r/2);switch(o){case"XYZ":this._x=h*d*m+l*p*u,this._y=l*p*m-h*d*u,this._z=l*d*u+h*p*m,this._w=l*d*m-h*p*u;break;case"YXZ":this._x=h*d*m+l*p*u,this._y=l*p*m-h*d*u,this._z=l*d*u-h*p*m,this._w=l*d*m+h*p*u;break;case"ZXY":this._x=h*d*m-l*p*u,this._y=l*p*m+h*d*u,this._z=l*d*u+h*p*m,this._w=l*d*m-h*p*u;break;case"ZYX":this._x=h*d*m-l*p*u,this._y=l*p*m+h*d*u,this._z=l*d*u-h*p*m,this._w=l*d*m+h*p*u;break;case"YZX":this._x=h*d*m+l*p*u,this._y=l*p*m+h*d*u,this._z=l*d*u-h*p*m,this._w=l*d*m-h*p*u;break;case"XZY":this._x=h*d*m-l*p*u,this._y=l*p*m-h*d*u,this._z=l*d*u+h*p*m,this._w=l*d*m+h*p*u;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],m=t[10],h=n+a+m;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>m){let p=2*Math.sqrt(1+n-a-m);this._w=(d-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>m){let p=2*Math.sqrt(1+a-n-m);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+m-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),d=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+c*l+o*m-a*d,this.y=n+c*d+a*l-r*m,this.z=s+c*m+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la=new D,$c=new Qt,He=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],m=n[7],h=n[2],p=n[5],u=n[8],S=s[0],g=s[3],f=s[6],b=s[1],R=s[4],E=s[7],A=s[2],w=s[5],_=s[8];return r[0]=o*S+a*b+c*A,r[3]=o*g+a*R+c*w,r[6]=o*f+a*E+c*_,r[1]=l*S+d*b+m*A,r[4]=l*g+d*R+m*w,r[7]=l*f+d*E+m*_,r[2]=h*S+p*b+u*A,r[5]=h*g+p*R+u*w,r[8]=h*f+p*E+u*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],m=d*o-a*l,h=a*c-d*r,p=l*r-o*c,u=t*m+n*h+s*p;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/u;return e[0]=m*S,e[1]=(s*l-d*n)*S,e[2]=(a*n-s*o)*S,e[3]=h*S,e[4]=(d*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=p*S,e[7]=(n*c-l*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ha.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ha=new He,Jc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){let i={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gs]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:Jc,fromXYZ:jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Jc,fromXYZ:jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var it=Td();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,Pr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=vs("canvas")),Ti.width=e.width,Ti.height=e.height;let s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rd=0,Wi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var wd=0,ua=new D,Yt=class i extends pn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=Ht,o=Wn,a=vn,c=sn,l=i.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ns(),this.name="",this.source=new Wi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$a)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=$a;Yt.DEFAULT_ANISOTROPY=1;var at=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],m=c[8],h=c[1],p=c[5],u=c[9],S=c[2],g=c[6],f=c[10];if(Math.abs(d-h)<.01&&Math.abs(m-S)<.01&&Math.abs(u-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+S)<.1&&Math.abs(u+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,E=(p+1)/2,A=(f+1)/2,w=(d+h)/4,_=(m+S)/4,M=(u+g)/4;return R>E&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=_/n):E>A?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=M/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=M/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-u)*(g-u)+(m-S)*(m-S)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(g-u)/b,this.y=(m-S)/b,this.z=(h-d)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Br=class extends pn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Yt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Br{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ys=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dr=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ht=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,d,m,h,p,u,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,d,m,h,p,u,S,g)}set(e,t,n,s,r,o,a,c,l,d,m,h,p,u,S,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=d,f[10]=m,f[14]=h,f[3]=p,f[7]=u,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let h=o*d,p=o*m,u=a*d,S=a*m;t[0]=c*d,t[4]=-c*m,t[8]=l,t[1]=p+u*l,t[5]=h-S*l,t[9]=-a*c,t[2]=S-h*l,t[6]=u+p*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*d,p=c*m,u=l*d,S=l*m;t[0]=h+S*a,t[4]=u*a-p,t[8]=o*l,t[1]=o*m,t[5]=o*d,t[9]=-a,t[2]=p*a-u,t[6]=S+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*d,p=c*m,u=l*d,S=l*m;t[0]=h-S*a,t[4]=-o*m,t[8]=u+p*a,t[1]=p+u*a,t[5]=o*d,t[9]=S-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*d,p=o*m,u=a*d,S=a*m;t[0]=c*d,t[4]=u*l-p,t[8]=h*l+S,t[1]=c*m,t[5]=S*l+h,t[9]=p*l-u,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,u=a*c,S=a*l;t[0]=c*d,t[4]=S-h*m,t[8]=u*m+p,t[1]=m,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*m+u,t[10]=h-S*m}else if(e.order==="XZY"){let h=o*c,p=o*l,u=a*c,S=a*l;t[0]=c*d,t[4]=-m,t[8]=l*d,t[1]=h*m+S,t[5]=o*d,t[9]=p*m-u,t[2]=u*m-p,t[6]=a*d,t[10]=S*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Ld)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Kn.crossVectors(n,Jt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Kn.crossVectors(n,Jt)),Kn.normalize(),js.crossVectors(Jt,Kn),s[0]=Kn.x,s[4]=js.x,s[8]=Jt.x,s[1]=Kn.y,s[5]=js.y,s[9]=Jt.y,s[2]=Kn.z,s[6]=js.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],m=n[5],h=n[9],p=n[13],u=n[2],S=n[6],g=n[10],f=n[14],b=n[3],R=n[7],E=n[11],A=n[15],w=s[0],_=s[4],M=s[8],k=s[12],T=s[1],U=s[5],N=s[9],z=s[13],I=s[2],O=s[6],Z=s[10],W=s[14],se=s[3],q=s[7],ee=s[11],te=s[15];return r[0]=o*w+a*T+c*I+l*se,r[4]=o*_+a*U+c*O+l*q,r[8]=o*M+a*N+c*Z+l*ee,r[12]=o*k+a*z+c*W+l*te,r[1]=d*w+m*T+h*I+p*se,r[5]=d*_+m*U+h*O+p*q,r[9]=d*M+m*N+h*Z+p*ee,r[13]=d*k+m*z+h*W+p*te,r[2]=u*w+S*T+g*I+f*se,r[6]=u*_+S*U+g*O+f*q,r[10]=u*M+S*N+g*Z+f*ee,r[14]=u*k+S*z+g*W+f*te,r[3]=b*w+R*T+E*I+A*se,r[7]=b*_+R*U+E*O+A*q,r[11]=b*M+R*N+E*Z+A*ee,r[15]=b*k+R*z+E*W+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],m=e[6],h=e[10],p=e[14],u=e[3],S=e[7],g=e[11],f=e[15],b=c*p-l*h,R=a*p-l*m,E=a*h-c*m,A=o*p-l*d,w=o*h-c*d,_=o*m-a*d;return t*(S*b-g*R+f*E)-n*(u*b-g*A+f*w)+s*(u*R-S*A+f*_)-r*(u*E-S*w+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],m=e[9],h=e[10],p=e[11],u=e[12],S=e[13],g=e[14],f=e[15],b=t*a-n*o,R=t*c-s*o,E=t*l-r*o,A=n*c-s*a,w=n*l-r*a,_=s*l-r*c,M=d*S-m*u,k=d*g-h*u,T=d*f-p*u,U=m*g-h*S,N=m*f-p*S,z=h*f-p*g,I=b*z-R*N+E*U+A*T-w*k+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return e[0]=(a*z-c*N+l*U)*O,e[1]=(s*N-n*z-r*U)*O,e[2]=(S*_-g*w+f*A)*O,e[3]=(h*w-m*_-p*A)*O,e[4]=(c*T-o*z-l*k)*O,e[5]=(t*z-s*T+r*k)*O,e[6]=(g*E-u*_-f*R)*O,e[7]=(d*_-h*E+p*R)*O,e[8]=(o*N-a*T+l*M)*O,e[9]=(n*T-t*N-r*M)*O,e[10]=(u*w-S*E+f*b)*O,e[11]=(m*E-d*w-p*b)*O,e[12]=(a*k-o*U-c*M)*O,e[13]=(t*U-n*k+s*M)*O,e[14]=(S*R-u*A-g*b)*O,e[15]=(d*A-m*R+h*b)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,m=a+a,h=r*l,p=r*d,u=r*m,S=o*d,g=o*m,f=a*m,b=c*l,R=c*d,E=c*m,A=n.x,w=n.y,_=n.z;return s[0]=(1-(S+f))*A,s[1]=(p+E)*A,s[2]=(u-R)*A,s[3]=0,s[4]=(p-E)*w,s[5]=(1-(h+f))*w,s[6]=(g+b)*w,s[7]=0,s[8]=(u+R)*_,s[9]=(g-b)*_,s[10]=(1-(h+S))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ri.set(s[0],s[1],s[2]).length(),a=Ri.set(s[4],s[5],s[6]).length(),c=Ri.set(s[8],s[9],s[10]).length();r<0&&(o=-o),dn.copy(this);let l=1/o,d=1/a,m=1/c;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=d,dn.elements[5]*=d,dn.elements[6]*=d,dn.elements[8]*=m,dn.elements[9]*=m,dn.elements[10]*=m,t.setFromRotationMatrix(dn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=on,c=!1){let l=this.elements,d=2*r/(t-e),m=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),u,S;if(c)u=r/(o-r),S=o*r/(o-r);else if(a===on)u=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===_s)u=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=on,c=!1){let l=this.elements,d=2/(t-e),m=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),u,S;if(c)u=1/(o-r),S=o/(o-r);else if(a===on)u=-2/(o-r),S=-(o+r)/(o-r);else if(a===_s)u=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=u,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new D,dn=new ht,Ad=new D(0,0,0),Ld=new D(1,1,1),Kn=new D,js=new D,Jt=new D,Qc=new ht,el=new Qt,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],m=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return el.setFromEuler(this),this.setFromQuaternion(el,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cd=0,tl=new D,wi=new Qt,Pn=new ht,Qs=new D,as=new D,Ud=new D,Id=new Qt,nl=new D(1,0,0),il=new D(0,1,0),sl=new D(0,0,1),rl={type:"added"},Pd={type:"removed"},Ai={type:"childadded",child:null},fa={type:"childremoved",child:null},Zt=class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new On,n=new Qt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new He}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(nl,e)}rotateY(e){return this.rotateOnAxis(il,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return tl.copy(e).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nl,e)}translateY(e){return this.translateOnAxis(il,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(as,Qs,this.up):Pn.lookAt(Qs,as,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(Pn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pd),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let m=c[l];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),m=o(e.shapes),h=o(e.skeletons),p=o(e.animations),u=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),u.length>0&&(n.nodes=u)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new D(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let S of e.hand.values()){let g=t.getJointPose(S,n),f=this._getHandJoint(l,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let d=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=d.position.distanceTo(m.position),p=.02,u=.005;l.inputState.pinching&&h>p+u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},er={h:0,s:0,l:0};function pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=lc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pa(o,r,e+1/3),this.g=pa(o,r,e),this.b=pa(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return it.workingToColorSpace(Vt.copy(this),e),Math.round($e(Vt.r*255,0,255))*65536+Math.round($e(Vt.g*255,0,255))*256+Math.round($e(Vt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let m=o-a;switch(l=d<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ut){it.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(er);let n=ps($n.h,er.h,t),s=ps($n.s,er.s,t),r=ps($n.l,er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new We;We.NAMES=rh;var bs=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},un=new D,Bn=new D,ma=new D,Dn=new D,Li=new D,Ci=new D,ol=new D,ga=new D,xa=new D,_a=new D,va=new at,ya=new at,Sa=new at,bn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Bn.subVectors(n,t),ma.subVectors(e,t);let o=un.dot(un),a=un.dot(Bn),c=un.dot(ma),l=Bn.dot(Bn),d=Bn.dot(ma),m=o*l-a*a;if(m===0)return r.set(0,0,0),null;let h=1/m,p=(l*c-a*d)*h,u=(o*d-a*c)*h;return r.set(1-p-u,u,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return va.setScalar(0),ya.setScalar(0),Sa.setScalar(0),va.fromBufferAttribute(e,t),ya.fromBufferAttribute(e,n),Sa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Bn.subVectors(e,t),un.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),un.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Li.subVectors(s,n),Ci.subVectors(r,n),ga.subVectors(e,n);let c=Li.dot(ga),l=Ci.dot(ga);if(c<=0&&l<=0)return t.copy(n);xa.subVectors(e,s);let d=Li.dot(xa),m=Ci.dot(xa);if(d>=0&&m<=d)return t.copy(s);let h=c*m-d*l;if(h<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(n).addScaledVector(Li,o);_a.subVectors(e,r);let p=Li.dot(_a),u=Ci.dot(_a);if(u>=0&&p<=u)return t.copy(r);let S=p*l-c*u;if(S<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ci,a);let g=d*u-p*m;if(g<=0&&m-d>=0&&p-u>=0)return ol.subVectors(r,s),a=(m-d)/(m-d+(p-u)),t.copy(s).addScaledVector(ol,a);let f=1/(g+S+h);return o=S*f,a=h*f,t.copy(n).addScaledVector(Li,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),nr.subVectors(this.max,cs),Ui.subVectors(e.a,cs),Ii.subVectors(e.b,cs),Pi.subVectors(e.c,cs),Jn.subVectors(Ii,Ui),jn.subVectors(Pi,Ii),hi.subVectors(Ui,Pi);let t=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!ba(t,Ui,Ii,Pi,nr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Ui,Ii,Pi,nr))?!1:(ir.crossVectors(Jn,jn),t=[ir.x,ir.y,ir.z],ba(t,Ui,Ii,Pi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,tr=new mn,Ui=new D,Ii=new D,Pi=new D,Jn=new D,jn=new D,hi=new D,cs=new D,nr=new D,ir=new D,di=new D;function ba(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){di.fromArray(i,r);let a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),d=n.dot(di);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Et=new D,sr=new ze,Dd=0,Tn=class extends pn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=e!==void 0?dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ih(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sh(e,this.array)}};var Ms=class extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Es=class extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nd=new mn,ls=new D,Ma=new D,pi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);let t=ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Ma)),this.expandByPoint(ls.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kd=0,rn=new ht,Ea=new Zt,Bi=new D,jt=new mn,hs=new mn,Ct=new D,Wt=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?Es:Ms)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(jt.min,hs.min),jt.expandByPoint(Ct),Ct.addVectors(jt.max,hs.max),jt.expandByPoint(Ct)):(jt.expandByPoint(hs.min),jt.expandByPoint(hs.max))}jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Ct.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(e,l),Ct.add(Bi)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let k=0;k<n.count;k++)a[k]=new D,c[k]=new D;let d=new D,m=new D,h=new D,p=new ze,u=new ze,S=new ze,g=new D,f=new D;function b(k,T,U){l[k]=l[T]=l[U]=1,d.fromBufferAttribute(n,k),m.fromBufferAttribute(n,T),h.fromBufferAttribute(n,U),p.fromBufferAttribute(r,k),u.fromBufferAttribute(r,T),S.fromBufferAttribute(r,U),m.sub(d),h.sub(d),u.sub(p),S.sub(p);let N=1/(u.x*S.y-S.x*u.y);isFinite(N)&&(g.copy(m).multiplyScalar(S.y).addScaledVector(h,-u.y).multiplyScalar(N),f.copy(h).multiplyScalar(u.x).addScaledVector(m,-S.x).multiplyScalar(N),a[k].add(g),a[T].add(g),a[U].add(g),c[k].add(f),c[T].add(f),c[U].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let k=0,T=R.length;k<T;++k){let U=R[k],N=U.start,z=U.count;for(let I=N,O=N+z;I<O;I+=3)b(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let E=new D,A=new D,w=new D,_=new D;function M(k){w.fromBufferAttribute(s,k),_.copy(w);let T=a[k];E.copy(T),E.sub(w.multiplyScalar(w.dot(T))).normalize(),A.crossVectors(_,T);let N=A.dot(c[k])<0?-1:1;o.setXYZW(k,E.x,E.y,E.z,N)}for(let k=0,T=n.count;k<T;++k)l[k]&&M(k);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,d=new D,m=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let u=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,u),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,g),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),a.fromBufferAttribute(n,u),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),a.add(d),c.add(d),l.add(d),n.setXYZ(u,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,m=a.normalized,h=new l.constructor(c.length*d),p=0,u=0;for(let S=0,g=c.length;S<g;S++){a.isInterleavedBufferAttribute?p=c[S]*a.data.stride+a.offset:p=c[S]*d;for(let f=0;f<d;f++)h[u++]=l[p++]}return new Tn(h,d,m)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,m=l.length;d<m;d++){let h=l[d],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let m=0,h=l.length;m<h;m++){let p=l[m];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],m=r[l];for(let h=0,p=m.length;h<p;h++)d.push(m[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ta=new D,Vd=new D,Fd=new He,zt=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ta.subVectors(n,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ta),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fd.getNormalMatrix(e),s=this.coplanarPoint(Ta).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Od=0,zn=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Qi,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=za,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var kn=new D,Ra=new D,rr=new D,or=new D,mi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ra.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),or.copy(this.origin).sub(Ra);let r=e.distanceTo(t)*.5,o=-this.direction.dot(rr),a=or.dot(this.direction),c=-or.dot(rr),l=or.lengthSq(),d=Math.abs(1-o*o),m,h,p,u;if(d>0)if(m=o*c-a,h=o*a-c,u=r*d,m>=0)if(h>=-u)if(h<=u){let S=1/d;m*=S,h*=S,p=m*(m+o*h+2*a)+h*(o*m+h+2*c)+l}else h=r,m=Math.max(0,-(o*h+a)),p=-m*m+h*(h+2*c)+l;else h=-r,m=Math.max(0,-(o*h+a)),p=-m*m+h*(h+2*c)+l;else h<=-u?(m=Math.max(0,-(-o*r+a)),h=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+l):h<=u?(m=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(m=Math.max(0,-(o*r+a)),h=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+l);else h=o>0?-r:r,m=Math.max(0,-(o*h+a)),p=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ra).addScaledVector(rr,h),p}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(a=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,m=e.x-o.x,h=e.y-o.y,p=e.z-o.z,u=t.x-o.x,S=t.y-o.y,g=t.z-o.z,f=n.x-o.x,b=n.y-o.y,R=n.z-o.z,E=Math.abs(c),A=Math.abs(l),w=Math.abs(d),_,M,k,T,U,N,z,I,O,Z,W,se;if(E>=A&&E>=w?(k=c,N=m,O=u,se=f,c>=0?(_=l,M=d,T=h,U=p,z=S,I=g,Z=b,W=R):(_=d,M=l,T=p,U=h,z=g,I=S,Z=R,W=b)):A>=w?(k=l,N=h,O=S,se=b,l>=0?(_=d,M=c,T=p,U=m,z=g,I=u,Z=R,W=f):(_=c,M=d,T=m,U=p,z=u,I=g,Z=f,W=R)):(k=d,N=p,O=g,se=R,d>=0?(_=c,M=l,T=m,U=h,z=u,I=S,Z=f,W=b):(_=l,M=c,T=h,U=m,z=S,I=u,Z=b,W=f)),k===0)return null;let q=_/k,ee=M/k,te=1/k,Me=T-q*N,Te=U-ee*N,J=z-q*O,le=I-ee*O,_e=Z-q*se,Be=W-ee*se,Se=_e*le-Be*J,Xe=Me*Be-Te*_e,mt=J*Te-le*Me;if(s){if(Se<0||Xe<0||mt<0)return null}else if((Se<0||Xe<0||mt<0)&&(Se>0||Xe>0||mt>0))return null;let Ve=Se+Xe+mt;if(Ve===0)return null;let Qe=te*(Se*N+Xe*O+mt*se);return(Ve>0?Qe<0:Qe>0)?null:this.at(Qe/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qi=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},al=new ht,ui=new mi,ar=new pi,cl=new D,cr=new D,lr=new D,hr=new D,wa=new D,dr=new D,ll=new D,ur=new D,Kt=class extends Zt{constructor(e=new Wt,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],m=r[c];d!==0&&(wa.fromBufferAttribute(m,e),o?dr.addScaledVector(wa,d):dr.addScaledVector(wa.sub(t),d))}t.add(dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(ar.containsPoint(ui.origin)===!1&&(ui.intersectSphere(ar,cl)===null||ui.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(al.copy(r).invert(),ui.copy(e.ray).applyMatrix4(al),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let u=0,S=h.length;u<S;u++){let g=h[u],f=o[g.materialIndex],b=Math.max(g.start,p.start),R=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let E=b,A=R;E<A;E+=3){let w=a.getX(E),_=a.getX(E+1),M=a.getX(E+2);s=fr(this,f,e,n,l,d,m,w,_,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let u=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=u,f=S;g<f;g+=3){let b=a.getX(g),R=a.getX(g+1),E=a.getX(g+2);s=fr(this,o,e,n,l,d,m,b,R,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let u=0,S=h.length;u<S;u++){let g=h[u],f=o[g.materialIndex],b=Math.max(g.start,p.start),R=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let E=b,A=R;E<A;E+=3){let w=E,_=E+1,M=E+2;s=fr(this,f,e,n,l,d,m,w,_,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let u=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let g=u,f=S;g<f;g+=3){let b=g,R=g+1,E=g+2;s=fr(this,o,e,n,l,d,m,b,R,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function zd(i,e,t,n,s,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===an,a),c===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ur);return l<t.near||l>t.far?null:{distance:l,point:ur.clone(),object:i}}function fr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,cr),i.getVertexPosition(c,lr),i.getVertexPosition(l,hr);let d=zd(i,e,t,n,cr,lr,hr,ll);if(d){let m=new D;bn.getBarycoord(ll,cr,lr,hr,m),s&&(d.uv=bn.getInterpolatedAttribute(s,a,c,l,m,new ze)),r&&(d.uv1=bn.getInterpolatedAttribute(r,a,c,l,m,new ze)),o&&(d.normal=bn.getInterpolatedAttribute(o,a,c,l,m,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new D,materialIndex:0};bn.getNormal(cr,lr,hr,h.normal),d.face=h,d.barycoord=m}return d}var Nr=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=It,d=It,m,h){super(null,o,a,c,l,d,s,r,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=new pi,Gd=new ze(.5,.5),pr=new D,Gn=class{constructor(e=new zt,t=new zt,n=new zt,s=new zt,r=new zt,o=new zt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],m=r[5],h=r[6],p=r[7],u=r[8],S=r[9],g=r[10],f=r[11],b=r[12],R=r[13],E=r[14],A=r[15];if(s[0].setComponents(l-o,p-d,f-u,A-b).normalize(),s[1].setComponents(l+o,p+d,f+u,A+b).normalize(),s[2].setComponents(l+a,p+m,f+S,A+R).normalize(),s[3].setComponents(l-a,p-m,f-S,A-R).normalize(),n)s[4].setComponents(c,h,g,E).normalize(),s[5].setComponents(l-c,p-h,f-g,A-E).normalize();else if(s[4].setComponents(l-c,p-h,f-g,A-E).normalize(),t===on)s[5].setComponents(l+c,p+h,f+g,A+E).normalize();else if(t===_s)s[5].setComponents(c,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);let t=Gd.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pr.x=s.normal.x>0?e.max.x:e.min.x,pr.y=s.normal.y>0?e.max.y:e.min.y,pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hl=new ht,kr=class i{constructor(){this.coordinateSystem=on,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];hl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Gn),n[s].setFromProjectionMatrix(hl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Gn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Yi=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vr=new D,Fr=new D,dl=new ht,ds=new mi,mr=new pi,Aa=new D,ul=new D,Or=class extends Zt{constructor(e=new Wt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vr.fromBufferAttribute(t,s-1),Fr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(Fr);e.setAttribute("lineDistance",new bt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,e.ray.intersectsSphere(mr)===!1)return;dl.copy(s).invert(),ds.copy(e.ray).applyMatrix4(dl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let p=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let S=p,g=u-1;S<g;S+=l){let f=d.getX(S),b=d.getX(S+1),R=gr(this,e,ds,c,f,b,S);R&&t.push(R)}if(this.isLineLoop){let S=d.getX(u-1),g=d.getX(p),f=gr(this,e,ds,c,S,g,u-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let S=p,g=u-1;S<g;S+=l){let f=gr(this,e,ds,c,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){let S=gr(this,e,ds,c,u-1,p,u-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gr(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Vr.fromBufferAttribute(a,s),Fr.fromBufferAttribute(a,r),t.distanceSqToSegment(Vr,Fr,Aa,ul)>n)return;Aa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Aa);if(!(l<e.near||l>e.far))return{distance:l,point:ul.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ts=class extends Or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Rs=class extends Yt{constructor(e=[],t=yi,n,s,r,o,a,c,l,d){super(e,t,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Hn=class extends Yt{constructor(e,t,n=gn,s,r,o,a=It,c=It,l,d=Fn,m=1){if(d!==Fn&&d!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:m};super(h,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ws=class extends Hn{constructor(e,t=gn,n=yi,s,r,o=It,a=It,c,l=Fn){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},As=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zi=class i extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],m=[],h=0,p=0;u("z","y","x",-1,-1,n,t,e,o,r,0),u("z","y","x",1,-1,n,t,-e,o,r,1),u("x","z","y",1,1,e,n,t,s,o,2),u("x","z","y",1,-1,e,n,-t,s,o,3),u("x","y","z",1,-1,e,t,n,s,r,4),u("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(m,2));function u(S,g,f,b,R,E,A,w,_,M,k){let T=E/_,U=A/M,N=E/2,z=A/2,I=w/2,O=_+1,Z=M+1,W=0,se=0,q=new D;for(let ee=0;ee<Z;ee++){let te=ee*U-z;for(let Me=0;Me<O;Me++){let Te=Me*T-N;q[S]=Te*b,q[g]=te*R,q[f]=I,l.push(q.x,q.y,q.z),q[S]=0,q[g]=0,q[f]=w>0?1:-1,d.push(q.x,q.y,q.z),m.push(Me/_),m.push(1-ee/M),W+=1}}for(let ee=0;ee<M;ee++)for(let te=0;te<_;te++){let Me=h+te+O*ee,Te=h+te+O*(ee+1),J=h+(te+1)+O*(ee+1),le=h+(te+1)+O*ee;c.push(Me,Te,le),c.push(Te,J,le),se+=6}a.addGroup(p,se,k),p+=se,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ls=class i extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,m=e/a,h=t/c,p=[],u=[],S=[],g=[];for(let f=0;f<d;f++){let b=f*h-o;for(let R=0;R<l;R++){let E=R*m-r;u.push(E,-b,0),S.push(0,0,1),g.push(R/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){let R=b+l*f,E=b+l*(f+1),A=b+1+l*(f+1),w=b+1+l*f;p.push(R,E,w),p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(S,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Cs=class i extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],m=new D,h=new D,p=[],u=[],S=[],g=[];for(let f=0;f<=n;f++){let b=[],R=f/n,E=o+R*a,A=e*Math.cos(E),w=Math.sqrt(e*e-A*A),_=0;f===0&&o===0?_=.5/t:f===n&&c===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let k=M/t,T=s+k*r;m.x=-w*Math.cos(T),m.y=A,m.z=w*Math.sin(T),u.push(m.x,m.y,m.z),h.copy(m).normalize(),S.push(h.x,h.y,h.z),g.push(k+_,1-R),b.push(l++)}d.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){let R=d[f][b+1],E=d[f][b],A=d[f+1][b],w=d[f+1][b+1];(f!==0||o>0)&&p.push(R,E,w),(f!==n-1||c<Math.PI)&&p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(S,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function bi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fl(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fl(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=bi(i[t]);for(let s in n)e[s]=n[s]}return e}function fl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var oh={clone:bi,merge:Ft},Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new He().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zr=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gi=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Gr=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hr=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Di(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wr=class extends ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ua,endingEnd:Ua}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ia:r=e,a=2*t-n;break;case Pa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ia:o=e,c=2*n-t;break;case Pa:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,p=this._weightNext,u=(n-t)/(s-t),S=u*u,g=S*u,f=-h*g+2*h*S-h*u,b=(1+h)*g+(-1.5-2*h)*S+(-.5+h)*u+1,R=(-1-p)*g+(1.5+p)*S+.5*u,E=p*g-p*S;for(let A=0;A!==a;++A)r[A]=f*o[d+A]+b*o[l+A]+R*o[c+A]+E*o[m+A];return r}},Xr=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(s-t),m=1-d;for(let h=0;h!==a;++h)r[h]=o[l+h]*m+o[c+h]*d;return r}},qr=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yr=class extends ei{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,m=this.outTangents;if(!d||!m){let u=(n-t)/(s-t),S=1-u;for(let g=0;g!==a;++g)r[g]=o[l+g]*S+o[c+g]*u;return r}let h=a*2,p=e-1;for(let u=0;u!==a;++u){let S=o[l+u],g=o[c+u],f=p*h+u*2,b=m[f],R=m[f+1],E=e*h+u*2,A=d[E],w=d[E+1],_=Yd(n,t,b,A,s);r[u]=ah(_,S,R,w,g)}return r}};function ah(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function qd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Yd(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ah(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=qd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Di(t,this.TimeBufferType),this.values=Di(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Di(e.times,Array),values:Di(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xr(e.settings)&&(n.settings={inTangents:Di(e.settings.inTangents,Array),outTangents:Di(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case Sr:t=this.InterpolantFactoryMethodSmooth;break;case Ca:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Sr;case this.InterpolantFactoryMethodBezier:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;xr(this.settings)&&(pl(this.settings.inTangents,e),pl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xr(this.settings)&&(ml(this.settings.inTangents,e),ml(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ye("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ld(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let m=a*n,h=m-n,p=m+n;for(let u=0;u!==n;++u){let S=t[m+u];if(S!==t[h+u]||S!==t[p+u]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let m=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[m+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function ml(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Ir;var ti=class extends tn{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ms;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="color";var Kr=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="number";var $r=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)Qt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Us=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $r(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends tn{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=ms;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="vector";var jr=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return l.push(d,m),this},this.removeHandler=function(d){let m=l.indexOf(d);return m!==-1&&l.splice(m,2),this},this.getHandler=function(d){for(let m=0,h=l.length;m<h;m+=2){let p=l[m],u=l[m+1];if(p.global&&(p.lastIndex=0),p.test(d))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ch=new jr,Qr=class{constructor(e){this.manager=e!==void 0?e:ch,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=new D,vr=new Qt,Sn=new D,xi=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_r,vr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_r,vr,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_r,vr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_r,vr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new D,gl=new ze,xl=new ze,Gt=class extends xi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,gl,xl),t.subVectors(xl,gl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var eo=class extends xi{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ni=-90,ki=1,Ki=class extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Ni,ki,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Ni,ki,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Ni,ki,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Ni,ki,e,t);a.layers=this.layers,this.add(a);let c=new Gt(Ni,ki,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Ni,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,h,p),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}},to=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var pc="\\[\\]\\.:\\/",Zd=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",Kd="[^"+pc.replace("\\.","")+"]",$d=/((?:WC+[\/:])*)/.source.replace("WC",mc),Jd=/(WCOD+)?/.source.replace("WCOD",Kd),jd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),Qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),eu=new RegExp("^"+$d+Jd+jd+Qd+"$"),tu=["material","materials","bones","map"],Ba=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zd,"")}static parseTrackName(e){let t=eu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Ba;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _0=new Float32Array(1);var $i=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Da=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},_l=new ze,Ji=class{constructor(e=new ze(1/0,1/0),t=new ze(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_l.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_l).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vl=new D,yr=new D,Vi=new D,Fi=new D,La=new D,nu=new D,iu=new D,Is=class{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vl.subVectors(e,this.start),yr.subVectors(this.end,this.start);let n=yr.dot(yr);if(n===0)return 0;let r=yr.dot(vl)/n;return t&&(r=$e(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=nu,n=iu){let s=10000000000000001e-32,r,o,a=this.start,c=e.start,l=this.end,d=e.end;Vi.subVectors(l,a),Fi.subVectors(d,c),La.subVectors(a,c);let m=Vi.dot(Vi),h=Fi.dot(Fi),p=Fi.dot(La);if(m<=s&&h<=s)return t.copy(a),n.copy(c),t.distanceToSquared(n);if(m<=s)r=0,o=p/h,o=$e(o,0,1);else{let u=Vi.dot(La);if(h<=s)o=0,r=$e(-u/m,0,1);else{let S=Vi.dot(Fi),g=m*h-S*S;g!==0?r=$e((S*p-u*h)/g,0,1):r=0,o=(S*r+p)/h,o<0?(o=0,r=$e(-u/m,0,1)):o>1&&(o=1,r=$e((S-u)/m,0,1))}}return t.copy(a).addScaledVector(Vi,r),n.copy(c).addScaledVector(Fi,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ps=class extends pn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function gc(i,e,t,n){let s=su(n);switch(t){case tc:return i*e;case ic:return i*e/s.components*s.byteLength;case co:return i*e/s.components*s.byteLength;case ri:return i*e*2/s.components*s.byteLength;case lo:return i*e*2/s.components*s.byteLength;case nc:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case ho:return i*e*4/s.components*s.byteLength;case Ns:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:case mo:return Math.max(i,16)*Math.max(e,8)/4;case uo:case po:return Math.max(i,8)*Math.max(e,8)/2;case go:case xo:case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case Os:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case No:case ko:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fo:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zs:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function su(i){switch(i){case sn:case Ja:return{byteLength:1,components:1};case ts:case ja:case _n:return{byteLength:2,components:1};case oo:case ao:return{byteLength:2,components:4};case gn:case ro:case xn:return{byteLength:4,components:1};case Qa:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ch(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lu(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,l){let d=c.array,m=c.updateRanges;if(i.bindBuffer(l,a),m.length===0)i.bufferSubData(l,0,d);else{m.sort((p,u)=>p.start-u.start);let h=0;for(let p=1;p<m.length;p++){let u=m[h],S=m[p];S.start<=u.start+u.count+1?u.count=Math.max(u.count,S.start+S.count-u.start):(++h,m[h]=S)}m.length=h+1;for(let p=0,u=m.length;p<u;p++){let S=m[p];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,du=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_u=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$u=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:hu,alphahash_pars_fragment:du,alphamap_fragment:uu,alphamap_pars_fragment:fu,alphatest_fragment:pu,alphatest_pars_fragment:mu,aomap_fragment:gu,aomap_pars_fragment:xu,batching_pars_vertex:_u,batching_vertex:vu,begin_vertex:yu,beginnormal_vertex:Su,bsdfs:bu,iridescence_fragment:Mu,bumpmap_pars_fragment:Eu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:wu,clipping_planes_vertex:Au,color_fragment:Lu,color_pars_fragment:Cu,color_pars_vertex:Uu,color_vertex:Iu,common:Pu,defaultnormal_vertex:Bu,displacementmap_pars_vertex:Du,displacementmap_vertex:Nu,emissivemap_fragment:ku,emissivemap_pars_fragment:Vu,colorspace_fragment:Fu,colorspace_pars_fragment:Ou,envmap_fragment:zu,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Hu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:tf,envmap_vertex:Xu,fog_vertex:qu,fog_pars_vertex:Yu,fog_fragment:Zu,fog_pars_fragment:Ku,gradientmap_pars_fragment:$u,lightmap_pars_fragment:Ju,lights_lambert_fragment:ju,lights_lambert_pars_fragment:Qu,lights_pars_begin:ef,lights_toon_fragment:nf,lights_toon_pars_fragment:sf,lights_phong_fragment:rf,lights_phong_pars_fragment:of,lights_physical_fragment:af,lights_physical_pars_fragment:cf,lights_fragment_begin:lf,lights_fragment_maps:hf,lights_fragment_end:df,lightprobes_pars_fragment:uf,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:mf,logdepthbuf_vertex:gf,map_fragment:xf,map_pars_fragment:_f,map_particle_fragment:vf,map_particle_pars_fragment:yf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Mf,morphcolor_vertex:Ef,morphnormal_vertex:Tf,morphtarget_pars_vertex:Rf,morphtarget_vertex:wf,normal_fragment_begin:Af,normal_fragment_maps:Lf,normal_pars_fragment:Cf,normal_pars_vertex:Uf,normal_vertex:If,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:kf,opaque_fragment:Vf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:zf,dithering_fragment:Gf,dithering_pars_fragment:Hf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Yf,shadowmap_vertex:Zf,shadowmask_pars_fragment:Kf,skinbase_vertex:$f,skinning_pars_vertex:Jf,skinning_vertex:jf,skinnormal_vertex:Qf,specularmap_fragment:ep,specularmap_pars_fragment:tp,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:op,uv_pars_vertex:ap,uv_vertex:cp,worldpos_vertex:lp,background_vert:hp,background_frag:dp,backgroundCube_vert:up,backgroundCube_frag:fp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:xp,distance_vert:_p,distance_frag:vp,equirect_vert:yp,equirect_frag:Sp,linedashed_vert:bp,linedashed_frag:Mp,meshbasic_vert:Ep,meshbasic_frag:Tp,meshlambert_vert:Rp,meshlambert_frag:wp,meshmatcap_vert:Ap,meshmatcap_frag:Lp,meshnormal_vert:Cp,meshnormal_frag:Up,meshphong_vert:Ip,meshphong_frag:Pp,meshphysical_vert:Bp,meshphysical_frag:Dp,meshtoon_vert:Np,meshtoon_frag:kp,points_vert:Vp,points_frag:Fp,shadow_vert:Op,shadow_frag:zp,sprite_vert:Gp,sprite_frag:Hp},be={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},An={basic:{uniforms:Ft([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ft([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ft([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ft([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ft([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ft([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ft([be.points,be.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ft([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ft([be.common,be.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ft([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ft([be.sprite,be.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ft([be.common,be.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ft([be.lights,be.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};An.physical={uniforms:Ft([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Ho={r:0,b:0,g:0},Wp=new ht,Uh=new He;Uh.set(-1,0,0,0,1,0,0,0,1);function Xp(i,e,t,n,s,r){let o=new We(0),a=s===!0?0:1,c,l,d=null,m=0,h=null;function p(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){let E=b.backgroundBlurriness>0;R=e.get(R,E)}return R}function u(b){let R=!1,E=p(b);E===null?g(o,a):E&&E.isColor&&(g(E,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,R){let E=p(R);E&&E.isCubeTexture?(l===void 0&&(l=new Kt(new Zi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:bi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Uh),l.material.toneMapped=it.getTransfer(E.colorSpace)!==lt,(d!==E||m!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,m=E.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Kt(new Ls(2,2),new Rn({name:"BackgroundMaterial",uniforms:bi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||m!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,m=E.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,R){b.getRGB(Ho,fc(i)),t.buffers.color.setClear(Ho.r,Ho.g,Ho.b,R,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,R=1){o.set(b),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:u,addToRenderList:S,dispose:f}}function qp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(U,N,z,I,O){let Z=!1,W=m(U,I,z,N);r!==W&&(r=W,l(r.object)),Z=p(U,I,z,O),Z&&u(U,I,z,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(U,N,z,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function d(U){return i.deleteVertexArray(U)}function m(U,N,z,I){let O=I.wireframe===!0,Z=n[N.id];Z===void 0&&(Z={},n[N.id]=Z);let W=U.isInstancedMesh===!0?U.id:0,se=Z[W];se===void 0&&(se={},Z[W]=se);let q=se[z.id];q===void 0&&(q={},se[z.id]=q);let ee=q[O];return ee===void 0&&(ee=h(c()),q[O]=ee),ee}function h(U){let N=[],z=[],I=[];for(let O=0;O<t;O++)N[O]=0,z[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:I,object:U,attributes:{},index:null}}function p(U,N,z,I){let O=r.attributes,Z=N.attributes,W=0,se=z.getAttributes();for(let q in se)if(se[q].location>=0){let te=O[q],Me=Z[q];if(Me===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor)),te===void 0||te.attribute!==Me||Me&&te.data!==Me.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function u(U,N,z,I){let O={},Z=N.attributes,W=0,se=z.getAttributes();for(let q in se)if(se[q].location>=0){let te=Z[q];te===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let Me={};Me.attribute=te,te&&te.data&&(Me.data=te.data),O[q]=Me,W++}r.attributes=O,r.attributesNum=W,r.index=I}function S(){let U=r.newAttributes;for(let N=0,z=U.length;N<z;N++)U[N]=0}function g(U){f(U,0)}function f(U,N){let z=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;z[U]=1,I[U]===0&&(i.enableVertexAttribArray(U),I[U]=1),O[U]!==N&&(i.vertexAttribDivisor(U,N),O[U]=N)}function b(){let U=r.newAttributes,N=r.enabledAttributes;for(let z=0,I=N.length;z<I;z++)N[z]!==U[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function R(U,N,z,I,O,Z,W){W===!0?i.vertexAttribIPointer(U,N,z,O,Z):i.vertexAttribPointer(U,N,z,I,O,Z)}function E(U,N,z,I){S();let O=I.attributes,Z=z.getAttributes(),W=N.defaultAttributeValues;for(let se in Z){let q=Z[se];if(q.location>=0){let ee=O[se];if(ee===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ee!==void 0){let te=ee.normalized,Me=ee.itemSize,Te=e.get(ee);if(Te===void 0)continue;let J=Te.buffer,le=Te.type,_e=Te.bytesPerElement,Be=le===i.INT||le===i.UNSIGNED_INT||ee.gpuType===ro;if(ee.isInterleavedBufferAttribute){let Se=ee.data,Xe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,mt=ee.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ve=0;Ve<q.locationSize;Ve++)f(q.location+Ve,Se.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)g(q.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Ve=0;Ve<q.locationSize;Ve++)R(q.location+Ve,Me/q.locationSize,le,te,Xe*_e,(mt+Me/q.locationSize*Ve)*_e,Be)}else{if(ee.isInstancedBufferAttribute){for(let Se=0;Se<q.locationSize;Se++)f(q.location+Se,ee.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<q.locationSize;Se++)g(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Se=0;Se<q.locationSize;Se++)R(q.location+Se,Me/q.locationSize,le,te,Me*_e,Me/q.locationSize*Se*_e,Be)}}else if(W!==void 0){let te=W[se];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}b()}function A(){k();for(let U in n){let N=n[U];for(let z in N){let I=N[z];for(let O in I){let Z=I[O];for(let W in Z)d(Z[W].object),delete Z[W];delete I[O]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let N=n[U.id];for(let z in N){let I=N[z];for(let O in I){let Z=I[O];for(let W in Z)d(Z[W].object),delete Z[W];delete I[O]}}delete n[U.id]}function _(U){for(let N in n){let z=n[N];for(let I in z){let O=z[I];if(O[U.id]===void 0)continue;let Z=O[U.id];for(let W in Z)d(Z[W].object),delete Z[W];delete O[U.id]}}}function M(U){for(let N in n){let z=n[N],I=U.isInstancedMesh===!0?U.id:0,O=z[I];if(O!==void 0){for(let Z in O){let W=O[Z];for(let se in W)d(W[se].object),delete W[se];delete O[Z]}delete z[I],Object.keys(z).length===0&&delete n[N]}}}function k(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:g,disableUnusedAttributes:b}}function Yp(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let p=0;p<d;p++)h+=l[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Zp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==sn&&_!==xn&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Ge("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:u,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:E,maxSamples:A,samples:w}}function Kp(i){let e=this,t=null,n=0,s=!1,r=!1,o=new zt,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let p=m.length!==0||h||n!==0||s;return s=h,n=m.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){t=d(m,h,0)},this.setState=function(m,h,p){let u=m.clippingPlanes,S=m.clipIntersection,g=m.clipShadows,f=i.get(m);if(!s||u===null||u.length===0||r&&!g)r?d(null):l();else{let b=r?0:n,R=b*4,E=f.clippingState||null;c.value=E,E=d(u,h,R,p);for(let A=0;A!==R;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,h,p,u){let S=m!==null?m.length:0,g=null;if(S!==0){if(g=c.value,u!==!0||g===null){let f=p+S*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let R=0,E=p;R!==S;++R,E+=4)o.copy(m[R]).applyMatrix4(b,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}var Ws=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zi(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:_i});r.uniforms.tEquirect.value=t;let o=new Kt(s,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Ht),new Ki(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},lh=256,$p=3,Jp=20,Ih=256,Ph=16,jp=3,Qp=new D,em=new We,Xo=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ki(1,10,null),this._boxMesh=new Kt(new Zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Qp}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let m=c.autoClear,h=c.autoClearColor,p=c.autoClearDepth,u=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(em));let g=new Ki(n,s,d);return g.position.copy(a),g.update(c,e),c.autoClear=m,c.autoClearColor=h,c.autoClearDepth=p,c.autoClearStencil=u,e.background=S,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(lh,hc(e))}_fromTexture(e,t){e.mapping===yi||e.mapping===es?this._setSize(e.image.length===0?lh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hh(e,!1,!1),n=Math.log2(e)-$p;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===yi||e.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=tm(),this._integrationMaterial=nm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ph);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-jp)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Ih*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=im());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function hh(i,e,t){return new Ws(i,{minFilter:Wn,generateMipmaps:e,type:_n,colorSpace:gs,depthBuffer:t})}function Xs(i,e,t){return new Rn({name:i,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:Xt,blending:_i,depthTest:!1,depthWrite:!1})}function tm(){return Xs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ih}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nm(){return Xs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ph}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function im(){return Xs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dh(){return Xs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function uh(){return Xs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===no||p===io)if(e.has(h)){let u=e.get(h).texture;return a(u,h.mapping)}else{let u=h.image;if(u&&u.height>0){let S=new Ws(u.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",l),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,u=p===no||p===io,S=p===yi||p===es;if(u||S){let g=t.get(h),f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Xo(i)),g=u?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let b=h.image;return u&&b&&b.height>0||S&&b&&c(b)?(n===null&&(n=new Xo(i)),g=u?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,p){return p===no?h.mapping=yi:p===io&&(h.mapping=es),h}function c(h){let p=0,u=6;for(let S=0;S<u;S++)h[S]!==void 0&&p++;return p===u}function l(h){let p=h.target;p.removeEventListener("dispose",l);let u=e.get(p);u!==void 0&&(e.delete(p),u.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let u=t.get(p);u!==void 0&&(t.delete(p),u.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function rm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function om(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(u=>delete s[u]);function a(u){c(u.target)}function c(u){u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id],o.unregister(u);let S=r.get(u);S&&(e.remove(S),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(u,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),t.memory.geometries++),S}function d(u){let S=u.attributes;for(let g in S)e.update(S[g],i.ARRAY_BUFFER)}function m(u){let S=u.index,g=u.attributes.position,f=0;if(g===void 0)return;let b=S!==null?S.array.length:g.array.length/3-1,R=g.count>=65535?Es:Ms,E=new R(Math.ceil(b/3)*6,1),A=E.array;if(S!==null){let _=S.array;f=S.version;for(let M=0,k=0;M<b;M+=3){let T=_[M+0],U=_[M+1],N=_[M+2];A[k++]=T,A[k++]=U,A[k++]=U,A[k++]=N,A[k++]=N,A[k++]=T}}else{f=g.version;for(let _=0,M=0;_<b;_+=3){let k=_+0,T=_+1,U=_+2;A[M++]=k,A[M++]=T,A[M++]=T,A[M++]=U,A[M++]=U,A[M++]=k}}E.version=f;let w=r.get(u);w&&e.remove(w),r.set(u,E)}function h(u){let S=r.get(u);if(S){let g=u.index;g!==null&&S.version<g.version&&m(u)}else m(u);return r.get(u)}function p(){for(let u in s){let S=s[u].deref();S!==void 0&&c(S)}}return{get:l,update:d,getWireframeAttribute:h,dispose:p}}function am(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,h){i.drawElements(n,h,r,m*o),t.update(h,n,1)}function l(m,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,m*o,p),t.update(h,n,p))}function d(m,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,p);let S=0;for(let g=0;g<p;g++)S+=h[g];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function cm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,e,t){let n=new WeakMap,s=new at;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==m){let k=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",k)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],R=0;p===!0&&(R=1),u===!0&&(R=2),S===!0&&(R=3);let E=a.attributes.position.count*R,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let w=new Float32Array(E*A*4*m),_=new ys(w,E,A,m);_.type=xn,_.needsUpdate=!0;let M=R*4;for(let T=0;T<m;T++){let U=g[T],N=f[T],z=b[T],I=E*A*4*T;for(let O=0;O<U.count;O++){let Z=O*M;p===!0&&(s.fromBufferAttribute(U,O),w[I+Z+0]=s.x,w[I+Z+1]=s.y,w[I+Z+2]=s.z,w[I+Z+3]=0),u===!0&&(s.fromBufferAttribute(N,O),w[I+Z+4]=s.x,w[I+Z+5]=s.y,w[I+Z+6]=s.z,w[I+Z+7]=0),S===!0&&(s.fromBufferAttribute(z,O),w[I+Z+8]=s.x,w[I+Z+9]=s.y,w[I+Z+10]=s.z,w[I+Z+11]=z.itemSize===4?s.w:1)}}h={count:m,texture:_,size:new ze(E,A)},n.set(a,h),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<l.length;S++)p+=l[S];let u=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",u),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function hm(i,e,t,n,s){let r=new WeakMap;function o(l){let d=s.render.frame,m=l.geometry,h=e.get(l,m);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var dm={[Ha]:"LINEAR_TONE_MAPPING",[Wa]:"REINHARD_TONE_MAPPING",[Xa]:"CINEON_TONE_MAPPING",[qa]:"ACES_FILMIC_TONE_MAPPING",[Za]:"AGX_TONE_MAPPING",[Ka]:"NEUTRAL_TONE_MAPPING",[Ya]:"CUSTOM_TONE_MAPPING"};function um(i,e,t,n,s,r){let o=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new Wt;d.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new bt([0,2,0,0,2,0],2));let m=new zr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Kt(d,m),p=new eo(-1,1,1,-1,0,1),u=null,S=null,g=!1,f,b=null,R=[],E=!1;this.setSize=function(A,w){o.setSize(A,w),a!==null&&a.setSize(A,w),c!==null&&c.setSize(A,w);for(let _=0;_<R.length;_++){let M=R[_];M.setSize&&M.setSize(A,w)}},this.setEffects=function(A){R=A,E=R.length>0&&R[0].isRenderPass===!0;let w=o.width,_=o.height;R.length>0&&a===null&&(a=new en(w,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new en(w,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&R.some(k=>k.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new Hn(w,_),r===!0&&(l.format=Xn,l.type=Si)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let k=0;k<R.length;k++){let T=R[k];T.setSize&&T.setSize(w,_),M&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(l)}},this.begin=function(A,w){if(g||A.toneMapping===cn&&R.length===0)return!1;if(b=w,w!==null){let _=w.width,M=w.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return E===!1&&A.setRenderTarget(o),f=A.toneMapping,A.toneMapping=cn,!0},this.hasRenderPass=function(){return E},this.end=function(A,w){A.toneMapping=f,g=!0;let _=o,M=a;for(let k=0;k<R.length;k++){let T=R[k];T.enabled!==!1&&(T.render(A,M,_,w),T.needsSwap!==!1&&(_=M,M=M===a?c:a))}if(u!==A.outputColorSpace||S!==A.toneMapping){u=A.outputColorSpace,S=A.toneMapping,m.defines={},it.getTransfer(u)===lt&&(m.defines.SRGB_TRANSFER="");let k=dm[S];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(b),A.render(h,p),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),m.dispose()}}var Bh=new Yt,Dh=new Hn(1,1),Nh=new ws(1),kh=new ys,Vh=new Dr,Fh=new Rs,fh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),xh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fh[s];if(r===void 0&&(r=new Float32Array(s),fh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yo(i,e){let t=ph[e];t===void 0&&(t=new Int32Array(e),ph[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Rt(t,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),wt(t,n)}}function _m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Rt(t,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),wt(t,n)}}function vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Rt(t,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),wt(t,n)}}function ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Em(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Zo(i){return i.version===0&&(i.compareFunction=oc,i.needsUpdate=!0),i}function Am(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Zo(Dh):r=Bh,t.setTexture2D(e||r,s)}function Lm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vh,s)}function Cm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Zo(Nh):r=Fh,t.setTextureCube(e||r,s)}function Um(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kh,s)}function Im(i){switch(i){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return xm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return Sm;case 35668:case 35672:return bm;case 35669:case 35673:return Mm;case 5125:return Em;case 36294:return Tm;case 36295:return Rm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Um}}function Pm(i,e){i.uniform1fv(this.addr,e)}function Bm(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Dm(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Nm(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function km(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vm(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fm(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Om(i,e){i.uniform1iv(this.addr,e)}function zm(i,e){i.uniform2iv(this.addr,e)}function Gm(i,e){i.uniform3iv(this.addr,e)}function Hm(i,e){i.uniform4iv(this.addr,e)}function Wm(i,e){i.uniform1uiv(this.addr,e)}function Xm(i,e){i.uniform2uiv(this.addr,e)}function qm(i,e){i.uniform3uiv(this.addr,e)}function Ym(i,e){i.uniform4uiv(this.addr,e)}function Zm(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Zo(Dh):o=Bh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Km(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vh,r[o])}function $m(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Zo(Nh):o=Fh;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Jm(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kh,r[o])}function jm(i){switch(i){case 5126:return Pm;case 35664:return Bm;case 35665:return Dm;case 35666:return Nm;case 35674:return km;case 35675:return Vm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return zm;case 35668:case 35672:return Gm;case 35669:case 35673:return Hm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}},yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jm(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function _h(i,e){i.seq.push(e),i.map[e.id]=e}function Qm(i,e,t){let n=i.name,s=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),o=xc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){_h(t,l===void 0?new vc(a,i,e):new yc(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new Sc(a),_h(t,m)),t=m}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Qm(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function vh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var eg=37297,tg=0;function ng(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var yh=new He;function ig(i){it._getMatrix(yh,it.workingColorSpace,i);let e=`mat3( ${yh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ng(i.getShaderSource(e),a)}else return r}function sg(i,e){let t=ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var rg={[Ha]:"Linear",[Wa]:"Reinhard",[Xa]:"Cineon",[qa]:"ACESFilmic",[Za]:"AgX",[Ka]:"Neutral",[Ya]:"Custom"};function og(i,e){let t=rg[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wo=new D;function ag(){it.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function lg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hs(i){return i!==""}function bh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(dg,ug)}function ug(i,e){let t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bc(t)}var fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(i){return i.replace(fg,pg)}function pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Th(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mg={[Bs]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function gg(i){return mg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xg={[es]:"ENVMAP_MODE_REFRACTION"};function _g(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vg={[Ga]:"ENVMAP_BLENDING_MULTIPLY",[zl]:"ENVMAP_BLENDING_MIX",[Gl]:"ENVMAP_BLENDING_ADD"};function yg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Sg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=gg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=_g(t),m=yg(t),h=cg(t),p=lg(r),u=s.createProgram(),S,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Hs).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Hs).join(`
`),g.length>0&&(g+=`
`)):(S=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),g=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?je.tonemapping_pars_fragment:"",t.toneMapping!==cn?og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=bc(o),o=bh(o,t),o=Mh(o,t),a=bc(a),a=bh(a,t),a=Mh(a,t),o=Eh(o),a=Eh(a),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=f+S+o,R=f+g+a,E=vh(s,s.VERTEX_SHADER,b),A=vh(s,s.FRAGMENT_SHADER,R);s.attachShader(u,E),s.attachShader(u,A),t.index0AttributeName!==void 0?s.bindAttribLocation(u,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(u,0,"position"),s.linkProgram(u);function w(T){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(u)||"",N=s.getShaderInfoLog(E)||"",z=s.getShaderInfoLog(A)||"",I=U.trim(),O=N.trim(),Z=z.trim(),W=!0,se=!0;if(s.getProgramParameter(u,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,u,E,A);else{let q=Sh(s,E,"vertex"),ee=Sh(s,A,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(u,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+q+`
`+ee)}else I!==""?Ge("WebGLProgram: Program Info Log:",I):(O===""||Z==="")&&(se=!1);se&&(T.diagnostics={runnable:W,programLog:I,vertexShader:{log:O,prefix:S},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(E),s.deleteShader(A),_=new is(s,u),M=hg(s,u)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(u,eg)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=E,this.fragmentShader=A,this}var bg=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ec(e),t.set(e,n)),n}},Ec=class{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}};function Mg(i){return i===ri||i===Os||i===zs}function Eg(i,e,t,n,s,r){let o=new Ss,a=new Mc,c=new Set,l=[],d=new Map,m=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function u(_,M,k,T,U,N){let z=T.fog,I=U.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||O,Z),se=h[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=ee!==void 0?ee.length:0,Me=0;I.morphAttributes.position!==void 0&&(Me=1),I.morphAttributes.normal!==void 0&&(Me=2),I.morphAttributes.color!==void 0&&(Me=3);let Te,J,le,_e;if(se){let xe=An[se];Te=xe.vertexShader,J=xe.fragmentShader}else{Te=_.vertexShader,J=_.fragmentShader;let xe=a.getVertexShaderStage(_),et=a.getFragmentShaderStage(_);a.update(_,xe,et),le=xe.id,_e=et.id}let Be=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Xe=U.isInstancedMesh===!0,mt=U.isBatchedMesh===!0,Ve=!!_.map,Qe=!!_.matcap,st=!!W,Je=st&&W.isPMREMTexture===!0,_t=!!_.aoMap,gt=!!_.lightMap,Tt=!!_.bumpMap&&_.wireframe===!1,G=!!_.normalMap,ie=!!_.displacementMap,fe=!!_.emissiveMap,de=!!_.metalnessMap,ce=!!_.roughnessMap,Ne=_.anisotropy>0,L=_.clearcoat>0,Fe=_.diffuseRoughness>0,qe=_.dispersion>0,Ae=_.retroreflectivity>0,oe=_.iridescence>0,De=_.sheen>0,me=_.transmission>0,Re=Ne&&!!_.anisotropyMap,y=L&&!!_.clearcoatMap,x=L&&!!_.clearcoatNormalMap,B=L&&!!_.clearcoatRoughnessMap,j=Fe&&!!_.diffuseRoughnessMap,H=oe&&!!_.iridescenceMap,re=oe&&!!_.iridescenceThicknessMap,ae=De&&!!_.sheenColorMap,Y=De&&!!_.sheenRoughnessMap,K=!!_.specularMap,he=!!_.specularColorMap,C=!!_.specularIntensityMap,Q=me&&!!_.transmissionMap,$=me&&!!_.thicknessMap,ge=!!_.gradientMap,ue=!!_.alphaMap,pe=_.alphaTest>0,Ie=!!_.alphaHash,Ze=!!_.extensions,ne=cn;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ne=i.toneMapping);let we=Je?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Oe={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:Te,fragmentShader:J,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:mt,batchingColor:mt&&U._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&U.instanceColor!==null,instancingMorph:Xe&&U.morphTexture!==null,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:Qe,envMap:st,envMapMode:st&&W.mapping,envMapPMREM:Je,envMapMaxLod:Je?we.length-1:null,envMapSize:Je?we[0].width:null,aoMap:_t,lightMap:gt,bumpMap:Tt,normalMap:G,displacementMap:ie,emissiveMap:fe,normalMapObjectSpace:G&&_.normalMapType===Xl,normalMapTangentSpace:G&&_.normalMapType===Go,packedNormalMap:G&&_.normalMapType===Go&&Mg(_.normalMap.format),metalnessMap:de,roughnessMap:ce,anisotropy:Ne,anisotropyMap:Re,clearcoat:L,clearcoatMap:y,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Fe,diffuseRoughnessMap:j,dispersion:qe,retroreflection:Ae,iridescence:oe,iridescenceMap:H,iridescenceThicknessMap:re,sheen:De,sheenColorMap:ae,sheenRoughnessMap:Y,specularMap:K,specularColorMap:he,specularIntensityMap:C,transmission:me,transmissionMap:Q,thicknessMap:$,gradientMap:ge,opaque:_.transparent===!1&&_.blending===Qi&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:Ie,combine:_.combine,mapUv:Ve&&p(_.map.channel),aoMapUv:_t&&p(_.aoMap.channel),lightMapUv:gt&&p(_.lightMap.channel),bumpMapUv:Tt&&p(_.bumpMap.channel),normalMapUv:G&&p(_.normalMap.channel),displacementMapUv:ie&&p(_.displacementMap.channel),emissiveMapUv:fe&&p(_.emissiveMap.channel),metalnessMapUv:de&&p(_.metalnessMap.channel),roughnessMapUv:ce&&p(_.roughnessMap.channel),anisotropyMapUv:Re&&p(_.anisotropyMap.channel),clearcoatMapUv:y&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:H&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&p(_.sheenRoughnessMap.channel),specularMapUv:K&&p(_.specularMap.channel),specularColorMapUv:he&&p(_.specularColorMap.channel),specularIntensityMapUv:C&&p(_.specularIntensityMap.channel),transmissionMapUv:Q&&p(_.transmissionMap.channel),thicknessMapUv:$&&p(_.thicknessMap.channel),alphaMapUv:ue&&p(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(G||Ne),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ve||ue),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&G===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Me,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:fe&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ze&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&_.extensions.multiDraw===!0||mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function S(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)M.push(k),M.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(g(M,_),f(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function f(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let M=h[_.type],k;if(M){let T=An[M];k=oh.clone(T.uniforms)}else k=_.uniforms;return k}function R(_,M){let k=d.get(M);return k!==void 0?++k.usedTimes:(k=new Sg(i,M,_,s),l.push(k),d.set(M,k)),k}function E(_){if(--_.usedTimes===0){let M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function w(){a.dispose()}return{getParameters:u,getProgramCacheKey:S,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:w}}function Tg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,u,S,g,f){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:p,material:u,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:f},i[e]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=u,b.materialVariant=o(h),b.groupOrder=S,b.renderOrder=h.renderOrder,b.z=g,b.group=f),e++,b}function c(h,p,u,S,g,f,b){b.reversedDepth===!0&&(g=-g);let R=a(h,p,u,S,g,f);u.transmission>0?n.push(R):u.transparent===!0?s.push(R):t.push(R)}function l(h,p,u,S,g,f){let b=a(h,p,u,S,g,f);u.transmission>0?n.unshift(b):u.transparent===!0?s.unshift(b):t.unshift(b)}function d(h,p){t.length>1&&t.sort(h||Rg),n.length>1&&n.sort(p||Rh),s.length>1&&s.sort(p||Rh)}function m(){for(let h=e,p=i.length;h<p;h++){let u=i[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:d}}function wg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wh,i.set(n,[o])):s>=r.length?(o=new wh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ag(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Cg=0;function Ug(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ig(i){let e=new Ag,t=Lg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new ht,o=new ht;function a(l){let d=0,m=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,u=0,S=0,g=0,f=0,b=0,R=0,E=0,A=0,w=0,_=0,M=0,k=0,T=0;l.sort(Ug);for(let N=0,z=l.length;N<z;N++){let I=l[N],O=I.color,Z=I.intensity,W=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ri?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=O.r*Z,m+=O.g*Z,h+=O.b*Z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],Z);T++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,te=t.get(I);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[u]=te,n.sunShadowMap[u]=se;let Me=ee.getViewportCount();for(let Te=0;Te<Me;Te++)n.sunShadowMatrix[S+Te]=ee.getMatrix(Te),n.sunShadowCascade[S+Te]=ee._cascadeData[Te];S+=Me,u++}n.sun[p]=q,p++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,te=t.get(I);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=I.shadow.matrix,A++}n.directional[g]=q,g++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(Z),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[b]=q;let ee=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,ee.updateMatrices(I),I.castShadow&&k++),n.spotLightMatrix[b]=ee.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=se,_++}b++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(O).multiplyScalar(Z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=q,R++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let ee=I.shadow,te=t.get(I);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,n.pointShadow[f]=te,n.pointShadowMap[f]=se,n.pointShadowMatrix[f]=I.shadow.matrix,w++}n.point[f]=q,f++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(Z),q.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[E]=q,E++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;let U=n.hash;(U.sunLength!==p||U.directionalLength!==g||U.pointLength!==f||U.spotLength!==b||U.rectAreaLength!==R||U.hemiLength!==E||U.numSunShadows!==u||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==_||U.numSpotMaps!==M||U.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=g,n.spot.length=b,n.rectArea.length=R,n.point.length=f,n.hemi.length=E,n.sunShadow.length=u,n.sunShadowMap.length=u,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-k,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=T,U.sunLength=p,U.directionalLength=g,U.pointLength=f,U.spotLength=b,U.rectAreaLength=R,U.hemiLength=E,U.numSunShadows=u,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=_,U.numSpotMaps=M,U.numLightProbes=T,n.version=Cg++)}function c(l,d){let m=0,h=0,p=0,u=0,S=0,g=0,f=d.matrixWorldInverse;for(let b=0,R=l.length;b<R;b++){let E=l[b];if(E.isSunLight){let A=n.sun[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),m++}else if(E.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(E.isSpotLight){let A=n.spot[u];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),u++}else if(E.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),o.identity(),r.copy(E.matrixWorld),r.premultiply(f),o.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),S++}else if(E.isPointLight){let A=n.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),g++}}}return{setup:a,setupView:c,state:n}}function Ah(i){let e=new Ig(i),t=[],n=[],s=[];function r(m){d.camera=m,t.length=0,n.length=0,s.length=0}function o(m){m.isLightProbeGrid?s.push(m):t.push(m)}function a(m){n.push(m)}function c(){e.setup(t),s.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function l(m){e.setupView(t,m)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Pg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ah(i),e.set(s,[a])):r>=o.length?(a=new Ah(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ng=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],kg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Lh=new ht,Gs=new D,_c=new D;function Vg(i,e,t){let n=new Gn,s=new ze,r=new ze,o=new at,a=new Gr,c=new Hr,l={},d=t.maxTextureSize,m={[an]:Xt,[Xt]:an,[nn]:nn},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Bg,fragmentShader:Dg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let u=new Wt;u.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Kt(u,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let f=this.type;this.render=function(w,_,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===bl&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let k=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),N=i.state;N.setBlending(_i),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=f!==this.type;z&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=w.length;I<O;I++){let Z=w[I],W=Z.shadow;if(W===void 0){Ge("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let se=W.getFrameExtents();s.multiply(se),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/se.y),s.y=r.y*se.y,W.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ji){if(Z.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new en(s.x,s.y,{format:ri,type:_n,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new Hn(s.x,s.y,xn),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=Fn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=It,W.map.depthTexture.magFilter=It}else Z.isPointLight?(W.map=new Ws(s.x),W.map.depthTexture=new ws(s.x,gn)):(W.map=new en(s.x,s.y),W.map.depthTexture=new Hn(s.x,s.y,gn)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=Fn,this.type===Bs?(W.map.depthTexture.compareFunction=q?rc:sc,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=It,W.map.depthTexture.magFilter=It);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let ee=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,M);let te=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:M.layers;for(let Me=0;Me<ee;Me++){let Te=W.getCamera(Me);if(Z.isPointLight){let J=W.camera,le=W.matrix,_e=Z.distance||J.far;_e!==J.far&&(J.far=_e,J.updateProjectionMatrix()),Gs.setFromMatrixPosition(Z.matrixWorld),J.position.copy(Gs),_c.copy(J.position),_c.add(Ng[Me]),J.up.copy(kg[Me]),J.lookAt(_c),J.updateMatrixWorld(),le.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Lh.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Lh,J.coordinateSystem,J.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(W.map),i.clear());let J=W.getViewport(Me);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),N.viewport(o)}n=W.getFrustum(Me),E(_,M,Te,Z,te,this.type)}W.isPointLightShadow!==!0&&this.type===ji&&b(W,M),W.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(k,T,U)};function b(w,_){let M=e.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(s.x,s.y,{format:ri,type:_n}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,M,h,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,M,p,S,null)}function R(w,_,M,k){let T=null,U=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)T=U;else if(T=M.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=T.uuid,z=_.uuid,I=l[N];I===void 0&&(I={},l[N]=I);let O=I[z];O===void 0&&(O=T.clone(),I[z]=O,_.addEventListener("dispose",A)),T=O}if(T.visible=_.visible,T.wireframe=_.wireframe,k===ji?T.side=_.shadowSide!==null?_.shadowSide:_.side:T.side=_.shadowSide!==null?_.shadowSide:m[_.side],T.alphaMap=_.alphaMap,T.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,T.map=_.map,T.clipShadows=_.clipShadows,T.clippingPlanes=_.clippingPlanes,T.clipIntersection=_.clipIntersection,T.displacementMap=_.displacementMap,T.displacementScale=_.displacementScale,T.displacementBias=_.displacementBias,T.wireframeLinewidth=_.wireframeLinewidth,T.linewidth=_.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=i.properties.get(T);N.light=M}return T}function E(w,_,M,k,T,U){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===ji)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=e.update(w),O=w.material;if(Array.isArray(O)){let Z=I.groups;for(let W=0,se=Z.length;W<se;W++){let q=Z[W],ee=O[q.materialIndex];if(ee&&ee.visible){let te=R(w,ee,k,U);w.onBeforeShadow(i,w,_,M,I,te,q),i.renderBufferDirect(M,null,I,te,w,q),w.onAfterShadow(i,w,_,M,I,te,q)}}}else if(O.visible){let Z=R(w,O,k,U);w.onBeforeShadow(i,w,_,M,I,Z,null),i.renderBufferDirect(M,null,I,Z,w,null),w.onAfterShadow(i,w,_,M,I,Z,null)}}let z=w.children;for(let I=0,O=z.length;I<O;I++)E(z[I],_,M,k,T,U)}function A(w){w.target.removeEventListener("dispose",A);for(let M in l){let k=l[M],T=w.target.uuid;T in k&&(k[T].dispose(),delete k[T])}}}function Fg(i,e){function t(){let C=!1,Q=new at,$=null,ge=new at(0,0,0,0);return{setMask:function(ue){$!==ue&&!C&&(i.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){C=ue},setClear:function(ue,pe,Ie,Ze,ne){ne===!0&&(ue*=Ze,pe*=Ze,Ie*=Ze),Q.set(ue,pe,Ie,Ze),ge.equals(Q)===!1&&(i.clearColor(ue,pe,Ie,Ze),ge.copy(Q))},reset:function(){C=!1,$=null,ge.set(-1,0,0,0)}}}function n(){let C=!1,Q=!1,$=null,ge=null,ue=null;return{setReversed:function(pe){if(Q!==pe){let Ie=e.get("EXT_clip_control");pe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Q=pe;let Ze=ue;ue=null,this.setClear(Ze)}},getReversed:function(){return Q},setTest:function(pe){pe?Se(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(pe){$!==pe&&!C&&(i.depthMask(pe),$=pe)},setFunc:function(pe){if(Q&&(pe=nh[pe]),ge!==pe){switch(pe){case Mr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case Rr:i.depthFunc(i.EQUAL);break;case wr:i.depthFunc(i.GEQUAL);break;case Ar:i.depthFunc(i.GREATER);break;case Lr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=pe}},setLocked:function(pe){C=pe},setClear:function(pe){ue!==pe&&(ue=pe,Q&&(pe=1-pe),i.clearDepth(pe))},reset:function(){C=!1,$=null,ge=null,ue=null,Q=!1}}}function s(){let C=!1,Q=null,$=null,ge=null,ue=null,pe=null,Ie=null,Ze=null,ne=null;return{setTest:function(we){C||(we?Se(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(we){Q!==we&&!C&&(i.stencilMask(we),Q=we)},setFunc:function(we,Oe,xe){($!==we||ge!==Oe||ue!==xe)&&(i.stencilFunc(we,Oe,xe),$=we,ge=Oe,ue=xe)},setOp:function(we,Oe,xe){(pe!==we||Ie!==Oe||Ze!==xe)&&(i.stencilOp(we,Oe,xe),pe=we,Ie=Oe,Ze=xe)},setLocked:function(we){C=we},setClear:function(we){ne!==we&&(i.clearStencil(we),ne=we)},reset:function(){C=!1,Q=null,$=null,ge=null,ue=null,pe=null,Ie=null,Ze=null,ne=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,d={},m={},h={},p=new WeakMap,u=[],S=null,g=!1,f=null,b=null,R=null,E=null,A=null,w=null,_=null,M=new We(0,0,0),k=0,T=!1,U=null,N=null,z=null,I=null,O=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=se>=2);let ee=null,te={},Me=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),J=new at().fromArray(Me),le=new at().fromArray(Te);function _e(C,Q,$,ge){let ue=new Uint8Array(4),pe=i.createTexture();i.bindTexture(C,pe),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<$;Ie++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(Q+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return pe}let Be={};Be[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Be[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Be[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(zi),Tt(!1),G(Na),Se(i.CULL_FACE),_t(_i);function Se(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function Xe(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function mt(C,Q){return h[C]!==Q?(i.bindFramebuffer(C,Q),h[C]=Q,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Q),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ve(C,Q){let $=u,ge=!1;if(C){$=p.get(Q),$===void 0&&($=[],p.set(Q,$));let ue=C.textures;if($.length!==ue.length||$[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ie=ue.length;pe<Ie;pe++)$[pe]=i.COLOR_ATTACHMENT0+pe;$.length=ue.length,ge=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ge=!0);ge&&i.drawBuffers($)}function Qe(C){return S!==C?(i.useProgram(C),S=C,!0):!1}let st={[vi]:i.FUNC_ADD,[El]:i.FUNC_SUBTRACT,[Tl]:i.FUNC_REVERSE_SUBTRACT};st[Rl]=i.MIN,st[wl]=i.MAX;let Je={[Al]:i.ZERO,[Ll]:i.ONE,[Cl]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Nl]:i.SRC_ALPHA_SATURATE,[Bl]:i.DST_COLOR,[Il]:i.DST_ALPHA,[Ul]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[Dl]:i.ONE_MINUS_DST_COLOR,[Pl]:i.ONE_MINUS_DST_ALPHA,[kl]:i.CONSTANT_COLOR,[Vl]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(C,Q,$,ge,ue,pe,Ie,Ze,ne,we){if(C===_i){g===!0&&(Xe(i.BLEND),g=!1);return}if(g===!1&&(Se(i.BLEND),g=!0),C!==Ml){if(C!==f||we!==T){if((b!==vi||A!==vi)&&(i.blendEquation(i.FUNC_ADD),b=vi,A=vi),we)switch(C){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.ONE,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",C);break}else switch(C){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Va:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fa:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",C);break}R=null,E=null,w=null,_=null,M.set(0,0,0),k=0,f=C,T=we}return}ue=ue||Q,pe=pe||$,Ie=Ie||ge,(Q!==b||ue!==A)&&(i.blendEquationSeparate(st[Q],st[ue]),b=Q,A=ue),($!==R||ge!==E||pe!==w||Ie!==_)&&(i.blendFuncSeparate(Je[$],Je[ge],Je[pe],Je[Ie]),R=$,E=ge,w=pe,_=Ie),(Ze.equals(M)===!1||ne!==k)&&(i.blendColor(Ze.r,Ze.g,Ze.b,ne),M.copy(Ze),k=ne),f=C,T=!1}function gt(C,Q){C.side===nn?Xe(i.CULL_FACE):Se(i.CULL_FACE);let $=C.side===Xt;Q&&($=!$),Tt($),C.blending===Qi&&C.transparent===!1?_t(_i):_t(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ge=C.stencilWrite;a.setTest(ge),ge&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),fe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function G(C){C!==yl?(Se(i.CULL_FACE),C!==N&&(C===Na?i.cullFace(i.BACK):C===Sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),N=C}function ie(C){C!==z&&(W&&i.lineWidth(C),z=C)}function fe(C,Q,$){C?(Se(i.POLYGON_OFFSET_FILL),(I!==Q||O!==$)&&(I=Q,O=$,o.getReversed()&&(Q=-Q,$=-$),i.polygonOffset(Q,$))):Xe(i.POLYGON_OFFSET_FILL)}function de(C){C?Se(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function ce(C){C===void 0&&(C=i.TEXTURE0+Z-1),ee!==C&&(i.activeTexture(C),ee=C)}function Ne(C,Q,$){$===void 0&&(ee===null?$=i.TEXTURE0+Z-1:$=ee);let ge=te[$];ge===void 0&&(ge={type:void 0,texture:void 0},te[$]=ge),(ge.type!==C||ge.texture!==Q)&&(ee!==$&&(i.activeTexture($),ee=$),i.bindTexture(C,Q||Be[C]),ge.type=C,ge.texture=Q)}function L(){let C=te[ee];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Fe(){try{i.compressedTexImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function qe(){try{i.compressedTexImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function Ae(){try{i.texSubImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function oe(){try{i.texSubImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function De(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function me(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function Re(){try{i.texStorage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function y(){try{i.texStorage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function j(C){return m[C]!==void 0?m[C]:i.getParameter(C)}function H(C,Q){m[C]!==Q&&(i.pixelStorei(C,Q),m[C]=Q)}function re(C){J.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function ae(C){le.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),le.copy(C))}function Y(C,Q){let $=l.get(Q);$===void 0&&($=new WeakMap,l.set(Q,$));let ge=$.get(C);ge===void 0&&(ge=i.getUniformBlockIndex(Q,C.name),i.uniformBlockBinding(Q,ge,ge),$.set(C,ge))}function K(C,Q,$){let ue=l.get(Q).get(C);c[ue]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,ue,$),c[ue]=$)}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},ee=null,te={},h={},c={},p=new WeakMap,u=[],S=null,g=!1,f=null,b=null,R=null,E=null,A=null,w=null,_=null,M=new We(0,0,0),k=0,T=!1,U=null,N=null,z=null,I=null,O=null,J.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:Xe,bindFramebuffer:mt,drawBuffers:Ve,useProgram:Qe,setBlending:_t,setMaterial:gt,setFlipSided:Tt,setCullFace:G,setLineWidth:ie,setPolygonOffset:fe,setScissorTest:de,activeTexture:ce,bindTexture:Ne,unbindTexture:L,compressedTexImage2D:Fe,compressedTexImage3D:qe,texImage2D:x,texImage3D:B,pixelStorei:H,getParameter:j,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Re,texStorage3D:y,texSubImage2D:Ae,texSubImage3D:oe,compressedTexSubImage2D:De,compressedTexSubImage3D:me,scissor:re,viewport:ae,reset:he}}function Og(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,d=new WeakMap,m=new Set,h,p=new WeakMap,u=new Set,S=new FinalizationRegistry(y=>u.delete(y)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(y,x){return g?new OffscreenCanvas(y,x):vs("canvas")}function b(y,x,B){let j=1,H=Re(y);if((H.width>B||H.height>B)&&(j=B/Math.max(H.width,H.height)),j<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let re=Math.floor(j*H.width),ae=Math.floor(j*H.height);h===void 0&&(h=f(re,ae));let Y=x?f(re,ae):h;return Y.width=re,Y.height=ae,Y.getContext("2d").drawImage(y,0,0,re,ae),Ge("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+re+"x"+ae+")."),Y}else return"data"in y&&Ge("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),y;return y}function R(y){return y.generateMipmaps}function E(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(y,x,B,j,H,re=!1){if(y!==null){if(i[y]!==void 0)return i[y];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ae;j&&(ae=e.get("EXT_texture_norm16"),ae||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&ae&&(Y=ae.R16_EXT),B===i.SHORT&&ae&&(Y=ae.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&ae&&(Y=ae.RG16_EXT),B===i.SHORT&&ae&&(Y=ae.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ae&&(Y=ae.RGB16_EXT),B===i.SHORT&&ae&&(Y=ae.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let K=re?xs:it.getTransfer(H);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=K===lt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ae&&(Y=ae.RGBA16_EXT),B===i.SHORT&&ae&&(Y=ae.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(y,x){let B;return y?x===null||x===gn||x===Si?B=i.DEPTH24_STENCIL8:x===xn?B=i.DEPTH32F_STENCIL8:x===ts&&(B=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gn||x===Si?B=i.DEPTH_COMPONENT24:x===xn?B=i.DEPTH_COMPONENT32F:x===ts&&(B=i.DEPTH_COMPONENT16),B}function M(y,x){return R(y)===!0||y.isFramebufferTexture&&y.minFilter!==It&&y.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function k(y){let x=new WeakRef(y);n.get(y).__ref=x,u.add(x),S.register(y,x,x)}function T(y){let x=n.get(y).__ref;x!==void 0&&(u.delete(x),S.unregister(x))}function U(y){z(y.target)}function N(y){I(y.target)}function z(y){y.removeEventListener("dispose",U),T(y),Z(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&m.delete(y)}function I(y){y.removeEventListener("dispose",N),T(y),se(y)}function O(){for(let y of u){let x=y.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):z(x))}u.clear(),m.clear()}function Z(y){let x=n.get(y);if(x.__webglInit===void 0)return;let B=y.source,j=p.get(B);if(j){let H=j[x.__cacheKey];H.usedTimes--,H.usedTimes===0&&W(y),Object.keys(j).length===0&&p.delete(B)}n.remove(y)}function W(y){let x=n.get(y);i.deleteTexture(x.__webglTexture);let B=y.source,j=p.get(B);delete j[x.__cacheKey],o.memory.textures--}function se(y){let x=n.get(y);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=y.depthTexture;if(B&&B.renderTarget===y&&z(B),y.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let re=0;re<x.__webglFramebuffer[H].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[H][re]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let j=y.textures;for(let H=0,re=j.length;H<re;H++){let ae=n.get(j[H]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(j[H])}n.remove(y)}let q=0;function ee(){q=0}function te(){return q}function Me(y){q=y}function Te(){let y=q;return y>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,y}function J(y){let x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.mipmapsAutoUpdate),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function le(y,x){let B=n.get(y);if(y.isVideoTexture&&De(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&B.__version!==y.version){let j=y.image;if(j===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(B,y,x);return}}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function _e(y,x){let B=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){gt(B,y,x);return}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Be(y,x){let B=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){gt(B,y,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Se(y,x){let B=n.get(y);if(y.version>0&&B.__version!==y.version){Tt(B,y,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Xe={[Cr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},mt={[It]:i.NEAREST,[Hl]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},Ve={[Yl]:i.NEVER,[oc]:i.ALWAYS,[Zl]:i.LESS,[sc]:i.LEQUAL,[Kl]:i.EQUAL,[rc]:i.GEQUAL,[$l]:i.GREATER,[Jl]:i.NOTEQUAL};function Qe(y,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===so||x.magFilter===Ds||x.magFilter===Wn||x.minFilter===Ht||x.minFilter===so||x.minFilter===Ds||x.minFilter===Wn)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Xe[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Xe[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Xe[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,mt[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==Ds&&x.minFilter!==Wn||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function st(y,x){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",U),k(x));let j=x.source,H=p.get(j);H===void 0&&(H={},p.set(j,H));let re=J(x);if(re!==y.__cacheKey){H[re]===void 0&&(H[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),H[re].usedTimes++;let ae=H[y.__cacheKey];ae!==void 0&&(H[y.__cacheKey].usedTimes--,ae.usedTimes===0&&W(x)),y.__cacheKey=re,y.__webglTexture=H[re].texture}return B}function Je(y,x,B){return Math.floor(Math.floor(y/B)/x)}function _t(y,x,B,j){let re=y.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,j,x.data);else{re.sort((C,Q)=>C.start-Q.start);let ae=0;for(let C=1;C<re.length;C++){let Q=re[ae],$=re[C],ge=Q.start+Q.count,ue=Je($.start,x.width,4),pe=Je(Q.start,x.width,4);$.start<=ge+1&&ue===pe&&Je($.start+$.count-1,x.width,4)===ue?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++ae,re[ae]=$)}re.length=ae+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,Q=re.length;C<Q;C++){let $=re[C],ge=Math.floor($.start/4),ue=Math.ceil($.count/4),pe=ge%x.width,Ie=Math.floor(ge/x.width),Ze=ue,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(i.TEXTURE_2D,0,pe,Ie,Ze,ne,B,j,x.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function gt(y,x,B){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let H=st(y,x),re=x.source;t.bindTexture(j,y.__webglTexture,i.TEXTURE0+B);let ae=n.get(re);if(re.version!==ae.__version||H===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ne=it.getPrimaries(it.workingColorSpace),we=x.colorSpace===qn?null:it.getPrimaries(x.colorSpace),Oe=x.colorSpace===qn||ne===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=b(x.image,!1,s.maxTextureSize);K=me(x,K);let he=r.convert(x.format,x.colorSpace),C=r.convert(x.type),Q=w(x.internalFormat,he,C,x.normalized,x.colorSpace,x.isVideoTexture);Qe(j,x);let $,ge=x.mipmaps,ue=x.isVideoTexture!==!0,pe=ae.__version===void 0||H===!0,Ie=re.dataReady,Ze=M(x,K);if(x.isDepthTexture)Q=_(x.format===Xn,x.type),pe&&(ue?t.texStorage2D(i.TEXTURE_2D,1,Q,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,he,C,null));else if(x.isDataTexture)if(ge.length>0){ue&&pe&&t.texStorage2D(i.TEXTURE_2D,Ze,Q,ge[0].width,ge[0].height);for(let ne=0,we=ge.length;ne<we;ne++)$=ge[ne],ue?Ie&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,$.width,$.height,he,C,$.data):t.texImage2D(i.TEXTURE_2D,ne,Q,$.width,$.height,0,he,C,$.data);x.generateMipmaps=!1}else ue?(pe&&t.texStorage2D(i.TEXTURE_2D,Ze,Q,K.width,K.height),Ie&&_t(x,K,he,C)):t.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,he,C,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ue&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Q,ge[0].width,ge[0].height,K.depth);for(let ne=0,we=ge.length;ne<we;ne++)if($=ge[ne],x.format!==vn)if(he!==null)if(ue){if(Ie)if(x.layerUpdates.size>0){let Oe=gc($.width,$.height,x.format,x.type);for(let xe of x.layerUpdates){let et=$.data.subarray(xe*Oe/$.data.BYTES_PER_ELEMENT,(xe+1)*Oe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,xe,$.width,$.height,1,he,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,K.depth,he,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Q,$.width,$.height,K.depth,0,$.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,K.depth,he,C,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Q,$.width,$.height,K.depth,0,he,C,$.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ue&&pe&&t.texStorage2D(i.TEXTURE_2D,Ze,Q,ge[0].width,ge[0].height);for(let ne=0,we=ge.length;ne<we;ne++)$=ge[ne],x.format!==vn?he!==null?ue?Ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,$.width,$.height,he,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Q,$.width,$.height,0,$.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Ie&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,$.width,$.height,he,C,$.data):t.texImage2D(i.TEXTURE_2D,ne,Q,$.width,$.height,0,he,C,$.data)}else if(x.isDataArrayTexture)if(ue){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Q,K.width,K.height,K.depth),Ie)if(x.layerUpdates.size>0){let ne=gc(K.width,K.height,x.format,x.type);for(let we of x.layerUpdates){let Oe=K.data.subarray(we*ne/K.data.BYTES_PER_ELEMENT,(we+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,K.width,K.height,1,he,C,Oe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,he,C,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,he,C,K.data);else if(x.isData3DTexture)ue?(pe&&t.texStorage3D(i.TEXTURE_3D,Ze,Q,K.width,K.height,K.depth),Ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,he,C,K.data)):t.texImage3D(i.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,he,C,K.data);else if(x.isFramebufferTexture){if(pe)if(ue)t.texStorage2D(i.TEXTURE_2D,Ze,Q,K.width,K.height);else{let ne=K.width,we=K.height;for(let Oe=0;Oe<Ze;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Q,ne,we,0,he,C,null),ne>>=1,we>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),m.add(x),ne.onpaint=we=>{let Oe=we.changedElements;for(let xe of m)Oe.includes(xe.image)&&(xe.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Oe=i.RGBA,xe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,xe,et,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(ue&&pe){let ne=Re(ge[0]);t.texStorage2D(i.TEXTURE_2D,Ze,Q,ne.width,ne.height)}for(let ne=0,we=ge.length;ne<we;ne++)$=ge[ne],ue?Ie&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he,C,$):t.texImage2D(i.TEXTURE_2D,ne,Q,he,C,$);x.generateMipmaps=!1}else if(ue){if(pe){let ne=Re(K);t.texStorage2D(i.TEXTURE_2D,Ze,Q,ne.width,ne.height)}Ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,C,K)}else t.texImage2D(i.TEXTURE_2D,0,Q,he,C,K);R(x)&&x.mipmapsAutoUpdate===!0&&E(j),ae.__version=re.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Tt(y,x,B){if(x.image.length!==6)return;let j=st(y,x),H=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+B);let re=n.get(H);if(H.version!==re.__version||j===!0){t.activeTexture(i.TEXTURE0+B);let ae=it.getPrimaries(it.workingColorSpace),Y=x.colorSpace===qn?null:it.getPrimaries(x.colorSpace),K=x.colorSpace===qn||ae===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let he=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let xe=0;xe<6;xe++)!he&&!C?Q[xe]=b(x.image[xe],!0,s.maxCubemapSize):Q[xe]=C?x.image[xe].image:x.image[xe],Q[xe]=me(x,Q[xe]);let $=Q[0],ge=r.convert(x.format,x.colorSpace),ue=r.convert(x.type),pe=w(x.internalFormat,ge,ue,x.normalized,x.colorSpace),Ie=x.isVideoTexture!==!0,Ze=re.__version===void 0||j===!0,ne=H.dataReady,we=M(x,$);Qe(i.TEXTURE_CUBE_MAP,x);let Oe;if(x.isDepthTexture){if(pe=_(x.format===Xn,x.type),Ze)if(Ie)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,pe,$.width,$.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,$.width,$.height,0,ge,ue,null)}else if(he){Ie&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,pe,$.width,$.height);for(let xe=0;xe<6;xe++){Oe=Q[xe].mipmaps;for(let et=0;et<Oe.length;et++){let St=Oe[et];x.format!==vn?ge!==null?Ie?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,St.width,St.height,ge,St.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,pe,St.width,St.height,0,St.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,St.width,St.height,ge,ue,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,pe,St.width,St.height,0,ge,ue,St.data)}}}else{if(Oe=x.mipmaps,Ie&&Ze){Oe.length>0&&we++;let xe=Re(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,pe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(C){Ie?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Q[xe].width,Q[xe].height,ge,ue,Q[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,Q[xe].width,Q[xe].height,0,ge,ue,Q[xe].data);for(let et=0;et<Oe.length;et++){let Un=Oe[et].image[xe].image;Ie?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Un.width,Un.height,ge,ue,Un.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,pe,Un.width,Un.height,0,ge,ue,Un.data)}}else{Ie?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ge,ue,Q[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,ge,ue,Q[xe]);for(let et=0;et<Oe.length;et++){let St=Oe[et];Ie?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,ge,ue,St.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,pe,ge,ue,St.image[xe])}}}R(x)&&x.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),re.__version=H.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function G(y,x,B,j,H,re){let ae=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),K=w(B.internalFormat,ae,Y,B.normalized,B.colorSpace),he=n.get(x),C=n.get(B);if(C.__renderTarget=x,!he.__hasExternalTextures){let Q=Math.max(1,x.width>>re),$=Math.max(1,x.height>>re);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,re,K,Q,$,x.depth,0,ae,Y,null):t.texImage2D(H,re,K,Q,$,0,ae,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),oe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,H,C.__webglTexture,0,Ae(x)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,H,C.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(y,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer){let j=x.depthTexture,H=j&&j.isDepthTexture?j.type:null,re=_(x.stencilBuffer,H),ae=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(x),re,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(x),re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,y)}else{let j=x.textures;for(let H=0;H<j.length;H++){let re=j[H],ae=r.convert(re.format,re.colorSpace),Y=r.convert(re.type),K=w(re.internalFormat,ae,Y,re.normalized,re.colorSpace);oe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(x),K,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(y,x,B){let j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(x.depthTexture);H.__renderTarget=x;let re=j?x.depthTexture.image[0]:x.depthTexture.image;(!H.__webglTexture||re.width!==x.width||re.height!==x.height)&&(re.width=x.width,re.height=x.height,x.depthTexture.needsUpdate=!0),j?Se(x.depthTexture,0):le(x.depthTexture,0);let ae=H.__webglTexture,Y=Ae(x),K=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,he=x.depthTexture.format===Xn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fn)oe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,K,ae,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,K,ae,0);else if(x.depthTexture.format===Xn)oe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,K,ae,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,K,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(y){let x=n.get(y),B=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){let j=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let H=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",H)};j.addEventListener("dispose",H),x.__depthDisposeCallback=H}x.__boundDepthTexture=j}if(y.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)fe(x.__webglFramebuffer[j],y,j);else y.texture.mipmaps.length>0?fe(x.__webglFramebuffer[0],y,0):fe(x.__webglFramebuffer,y,0);else if(B){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),ie(x.__webglDepthbuffer[j],y,!1);else{let H=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,re)}}else if(y.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ie(x.__webglDepthbuffer,y,!1);else{let H=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(y,x,B){let j=n.get(y);x!==void 0&&G(j.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&de(y)}function Ne(y){let x=y.texture,B=n.get(y),j=n.get(x);y.addEventListener("dispose",N),k(y);let H=y.textures,re=y.isWebGLCubeRenderTarget===!0,ae=H.length>1;if(ae||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),re){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[Y][K]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ae)for(let Y=0,K=H.length;Y<K;Y++){let he=n.get(H[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&oe(y)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<H.length;Y++){let K=H[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let he=r.convert(K.format,K.colorSpace),C=r.convert(K.type),Q=w(K.internalFormat,he,C,K.normalized,K.colorSpace,y.isXRRenderTarget===!0),$=Ae(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)G(B.__webglFramebuffer[Y][K],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else G(B.__webglFramebuffer[Y],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);R(x)?E(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ae){for(let Y=0,K=H.length;Y<K;Y++){let he=H[Y],C=n.get(he),Q=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Q=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,C.__webglTexture),Qe(Q,he),G(B.__webglFramebuffer,y,he,i.COLOR_ATTACHMENT0+Y,Q,0),R(he)&&E(Q)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Y=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,j.__webglTexture),Qe(Y,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)G(B.__webglFramebuffer[K],y,x,i.COLOR_ATTACHMENT0,Y,K);else G(B.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,Y,0);R(x)?E(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}y.depthBuffer&&de(y)}function L(y){let x=y.textures;for(let B=0,j=x.length;B<j;B++){let H=x[B];if(R(H)&&H.mipmapsAutoUpdate===!0){let re=A(y),ae=n.get(H).__webglTexture;t.bindTexture(re,ae),E(re),t.unbindTexture()}}}let Fe=[];function qe(y){if(y.samples>0){if(oe(y)===!1){let x=y.textures,B=y.width,j=y.height,H=i.COLOR_BUFFER_BIT,re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(y),Y=x.length>1;if(Y)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let he=0;he<x.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[he]);let C=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,H,i.NEAREST),c===!0&&(Fe.length=0,Fe.push(i.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&Fe.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ae.__webglColorRenderbuffer[he]);let C=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){let x=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ae(y){return Math.min(s.maxSamples,y.samples)}function oe(y){let x=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function De(y){let x=o.render.frame;d.get(y)!==x&&(d.set(y,x),y.update())}function me(y,x){let B=y.colorSpace,j=y.format,H=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==gs&&B!==qn&&(it.getTransfer(B)===lt?(j!==vn||H!==sn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",B)),x}function Re(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=Te,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=Me,this.setTexture2D=le,this.setTexture2DArray=_e,this.setTexture3D=Be,this.setTextureCube=Se,this.rebindTextures=ce,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=G,this.useMultisampledRTT=oe,this.dispose=O}function zg(i,e){function t(n,s=qn){let r,o=it.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ja)return i.BYTE;if(n===ja)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===nc)return i.RGB;if(n===vn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===co)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===lo)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===Ns||n===ks||n===Vs||n===Fs)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===fo||n===po||n===mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===xo||n===_o||n===vo||n===yo||n===Os||n===So)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===go||n===xo)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_o)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vo)return r.COMPRESSED_R11_EAC;if(n===yo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Os)return r.COMPRESSED_RG11_EAC;if(n===So)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bo||n===Mo||n===Eo||n===To||n===Ro||n===wo||n===Ao||n===Lo||n===Co||n===Uo||n===Io||n===Po||n===Bo||n===Do)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Co)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===ko||n===Vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fo||n===Oo||n===zs||n===zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new As(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:Gg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends pn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,m=null,h=null,p=null,u=null,S=typeof XRWebGLBinding<"u",g=new Tc,f={},b=t.getContextAttributes(),R=null,E=null,A=[],w=[],_=new ze,M=null,k=null,T=new Gt;T.viewport=new at;let U=new Gt;U.viewport=new at;let N=[T,U],z=new to,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=A[J];return le===void 0&&(le=new Xi,A[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=A[J];return le===void 0&&(le=new Xi,A[J]=le),le.getGripSpace()},this.getHand=function(J){let le=A[J];return le===void 0&&(le=new Xi,A[J]=le),le.getHandSpace()};function Z(J){let le=w.indexOf(J.inputSource);if(le===-1)return;let _e=A[le];_e!==void 0&&(_e.update(J.inputSource,J.frame,l||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",se);for(let J=0;J<A.length;J++){let le=w[J];le!==null&&(w[J]=null,A[J].disconnect(le))}I=null,O=null,g.reset();for(let J in f)delete f[J];if(e.setRenderTarget(R),p=null,h=null,m=null,s=null,E=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),k!==null){let J=k.camera;J.fov=k.fov,J.zoom=k.zoom,J.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return u},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",se),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Be=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Xn:Fn,Be=b.stencil?Si:gn);let Xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new en(h.textureWidth,h.textureHeight,{format:vn,type:sn,depthTexture:new Hn(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new en(p.framebufferWidth,p.framebufferHeight,{format:vn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(J){for(let le=0;le<J.removed.length;le++){let _e=J.removed[le],Be=w.indexOf(_e);Be>=0&&(w[Be]=null,A[Be].disconnect(_e))}for(let le=0;le<J.added.length;le++){let _e=J.added[le],Be=w.indexOf(_e);if(Be===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=w.length){w.push(_e),Be=Xe;break}else if(w[Xe]===null){w[Xe]=_e,Be=Xe;break}if(Be===-1)break}let Se=A[Be];Se&&Se.connect(_e)}}function q(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let le=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),z.near=U.near=T.near=le,z.far=U.far=T.far=_e,(I!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,O=z.far),z.layers.mask=J.layers.mask|6,T.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;let Be=J.parent,Se=z.cameras;q(z,Be);for(let Xe=0;Xe<Se.length;Xe++)q(Se[Xe],Be);z.projectionMatrix.copy(T.projectionMatrix),z.projectionMatrixInverse.copy(T.projectionMatrixInverse),k===null&&J.isPerspectiveCamera&&(k={camera:J,fov:J.fov,zoom:J.zoom}),ee(J,z,Be)};function ee(J,le,_e){_e===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return f[J]};let te=null;function Me(J,le){if(d=le.getViewerPose(l||o),u=le,d!==null){let _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Be=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,Be=!0);for(let Ve=0;Ve<_e.length;Ve++){let Qe=_e[Ve],st=null;if(p!==null)st=p.getViewport(Qe);else{let _t=m.getViewSubImage(h,Qe);st=_t.viewport,Ve===0&&(e.setRenderTargetTextures(E,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(E))}let Je=N[Ve];Je===void 0&&(Je=new Gt,Je.layers.enable(Ve),Je.viewport=new at,N[Ve]=Je),Je.matrix.fromArray(Qe.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Qe.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(st.x,st.y,st.width,st.height),Ve===0&&(z.matrix.copy(Je.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Be===!0&&z.cameras.push(Je)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=n.getBinding();let Ve=m.getDepthInformation(_e[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),m=n.getBinding();for(let Ve=0;Ve<_e.length;Ve++){let Qe=_e[Ve].camera;if(Qe){let st=f[Qe];st||(st=new As,f[Qe]=st);let Je=m.getCameraImage(Qe);st.sourceTexture=Je}}}}for(let _e=0;_e<A.length;_e++){let Be=w[_e],Se=A[_e];Be!==null&&Se!==void 0&&Se.update(Be,le,l||o)}te&&te(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),u=null}let Te=new Ch;Te.setAnimationLoop(Me),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}},Wg=new ht,Oh=new He;Oh.set(-1,0,0,0,1,0,0,0,1);function Xg(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,fc(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,b,R,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),m(g,f)):f.isMeshPhongMaterial?(r(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,E)):f.isMeshMatcapMaterial?(r(g,f),u(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),S(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,b,R):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Xt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Xt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let b=e.get(f),R=b.envMap,E=b.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Oh),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,b,R){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=R*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function m(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,b){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function u(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){let b=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qg(i,e,t,n){let s={},r={};function o(b,R){let E=R.program;n.uniformBlockBinding(b,E,s[b.id])}function a(b,R){let E=s[b.id];E===void 0&&(u(b),E=c(b),s[b.id]=E,b.addEventListener("dispose",g));let A=R.program;n.updateUBOMapping(b,A);let w=e.render.frame;r[b.id]!==w&&(l(b),r[b.id]=w)}function c(b){let R=i.createBuffer(),E=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function l(b){let R=s[b.id],E=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let w=0,_=E.length;w<_;w++){let M=E[w];if(Array.isArray(M))for(let k=0,T=M.length;k<T;k++)d(M[k],w,k,A);else d(M,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,R,E,A){if(h(b,R,E,A)===!0){let w=b.__offset,_=b.value;if(Array.isArray(_)){let M=0;for(let k=0;k<_.length;k++){let T=_[k],U=S(T,!0);m(T,b.__data,M),M+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,b.__data)}}function m(b,R,E){typeof b=="number"||typeof b=="boolean"?R[E]=b:b.isMatrix3?(R[E]=b.elements[0],R[E+1]=b.elements[1],R[E+2]=b.elements[2],R[E+3]=0,R[E+4]=b.elements[3],R[E+5]=b.elements[4],R[E+6]=b.elements[5],R[E+7]=0,R[E+8]=b.elements[6],R[E+9]=b.elements[7],R[E+10]=b.elements[8],R[E+11]=0):ArrayBuffer.isView(b)?R.set(b.subarray(0,R.length-E),E):b.toArray(R,E)}function h(b,R,E,A){let w=b.value,_=R+"_"+E;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);let M=A[_],k=!1;for(let T=0;T<w.length;T++)p(w[T],M,T)===!0&&(k=!0);return k}return p(w,A,_)}function p(b,R,E){if(R[E]===void 0)return typeof b=="number"||typeof b=="boolean"?R[E]=b:ArrayBuffer.isView(b)?R[E]=b.slice():R[E]=b.clone(),!0;{let A=R[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function u(b){let R=b.uniforms,E=0,A=16;for(let _=0,M=R.length;_<M;_++){let k=Array.isArray(R[_])?R[_]:[R[_]];for(let T=0,U=k.length;T<U;T++){let N=k[T],z=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(R[_])||Array.isArray(N.value),O=E;for(let W=0,se=z.length;W<se;W++){let q=z[W],ee=S(q,I),te=E%A,Me=te%ee.boundary,Te=te+Me;E+=Me,Te!==0&&A-Te<ee.storage&&(E+=A-Te),W===0&&(O=E),E+=ee.storage}let Z=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new Z((E-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let w=E%A;return w>0&&(E+=A-w),b.__size=E,b.__cache={},this}function S(b,R){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=16,E.storage=48):b.isMatrix4?(E.boundary=16,E.storage=64):b.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",b),R===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function g(b){let R=b.target;R.removeEventListener("dispose",g),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:f}}var Yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null;function Zg(){return wn===null&&(wn=new Nr(Yg,16,16,ri,_n),wn.name="DFG_LUT",wn.minFilter=Ht,wn.magFilter=Ht,wn.wrapS=Mn,wn.wrapT=Mn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}var qo=class{constructor(e={}){let{canvas:t=Ql(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=sn}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let S=p,g=new Set([ho,lo,co]),f=new Set([sn,gn,ts,Si,oo,ao]),b=new Uint32Array(4),R=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},A=null,w=null,_=[],M=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,U=!1,N=null,z=null,I=null,O=null;this._outputColorSpace=Ut;let Z=0,W=0,se=null,q=-1,ee=null,te=new at,Me=new at,Te=null,J=new We(0),le=0,_e=t.width,Be=t.height,Se=1,Xe=null,mt=null,Ve=new at(0,0,_e,Be),Qe=new at(0,0,_e,Be),st=!1,Je=new Gn,_t=new kr,gt=!1,Tt=!1,G=new ht,ie=new D,fe=new at,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function Ne(){return se===null?Se:1}let L=n;function Fe(v,P){return t.getContext(v,P)}let qe,Ae,oe,De,me,Re,y,x,B,j,H,re,ae,Y,K,he,C,Q,$,ge,ue,pe,Ie;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),L===null){let P="webgl2";if(L=Fe(P,v),L===null)throw Fe(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(v){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ye("WebGLRenderer: "+v.message),v}function Ze(){qe=new rm(L),qe.init(),ue=new zg(L,qe),Ae=new Zp(L,qe,e,ue),oe=new Fg(L,qe),Ae.reversedDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),z=L.createFramebuffer(),I=L.createFramebuffer(),O=L.createFramebuffer(),De=new cm(L),me=new Tg,Re=new Og(L,qe,oe,me,Ae,ue,De),y=new sm(T),x=new lu(L),pe=new qp(L,x),B=new om(L,x,De,pe),j=new hm(L,B,x,pe,De),Q=new lm(L,Ae,Re),K=new Kp(me),H=new Eg(T,y,qe,Ae,pe,K),re=new Xg(T,me),ae=new wg,Y=new Pg(qe),C=new Xp(T,y,oe,j,u,c),he=new Vg(T,j,Ae),Ie=new qg(L,De,Ae,oe),$=new Yp(L,qe,De),ge=new am(L,qe,De),De.programs=H.programs,T.capabilities=Ae,T.extensions=qe,T.properties=me,T.renderLists=ae,T.shadowMap=he,T.state=oe,T.info=De}S!==sn&&(k=new um(S,t.width,t.height,a,s,r));let ne=new Rc(T,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(v){v!==void 0&&(Se=v,this.setSize(_e,Be,!1))},this.getSize=function(v){return v.set(_e,Be)},this.setSize=function(v,P,X=!0){if(ne.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=v,Be=P,t.width=Math.floor(v*Se),t.height=Math.floor(P*Se),X===!0&&(t.style.width=v+"px",t.style.height=P+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(_e*Se,Be*Se).floor()},this.setDrawingBufferSize=function(v,P,X){_e=v,Be=P,Se=X,t.width=Math.floor(v*X),t.height=Math.floor(P*X),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(S===sn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(Ve)},this.setViewport=function(v,P,X,V){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,P,X,V),oe.viewport(te.copy(Ve).multiplyScalar(Ne()).round())},this.getScissor=function(v){return v.copy(Qe)},this.setScissor=function(v,P,X,V){v.isVector4?Qe.set(v.x,v.y,v.z,v.w):Qe.set(v,P,X,V),oe.scissor(Me.copy(Qe).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){oe.setScissorTest(st=v)},this.setOpaqueSort=function(v){Xe=v},this.setTransparentSort=function(v){mt=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,X=!0){let V=0;if(v){let F=!1;if(se!==null){let ye=se.texture.format;F=g.has(ye)}if(F){let ye=se.texture.type,Le=f.has(ye),ve=C.getClearColor(),Ee=C.getClearAlpha(),Pe=ve.r,Ke=ve.g,tt=ve.b;Le?(b[0]=Pe,b[1]=Ke,b[2]=tt,b[3]=Ee,L.clearBufferuiv(L.COLOR,0,b)):(R[0]=Pe,R[1]=Ke,R[2]=tt,R[3]=Ee,L.clearBufferiv(L.COLOR,0,R))}else V|=L.COLOR_BUFFER_BIT}P&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),C.dispose(),ae.dispose(),Y.dispose(),Re.dispose(),me.dispose(),y.dispose(),j.dispose(),B.dispose(),pe.dispose(),Ie.dispose(),H.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Vc),ne.removeEventListener("sessionend",Fc),ai.stop()};function we(v){v.preventDefault(),cc("WebGLRenderer: Context Lost."),U=!0}function Oe(){cc("WebGLRenderer: Context Restored."),U=!1;let v=De.autoReset,P=he.enabled,X=he.autoUpdate,V=he.needsUpdate,F=he.type;Ze(),De.autoReset=v,he.enabled=P,he.autoUpdate=X,he.needsUpdate=V,he.type=F}function xe(v){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function et(v){let P=v.target;P.removeEventListener("dispose",et),St(P)}function St(v){Un(v),me.remove(v)}function Un(v){let P=me.get(v).programs;P!==void 0&&(P.forEach(function(X){H.releaseProgram(X)}),v.isShaderMaterial&&H.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,X,V,F,ye){P===null&&(P=de);let Le=F.isMesh&&F.matrixWorld.determinantAffine()<0,ve=rd(v,P,X,V,F);oe.setMaterial(V,Le);let Ee=X.index,Pe=1;if(V.wireframe===!0){if(Ee=B.getWireframeAttribute(X),Ee===void 0)return;Pe=2}let Ke=X.drawRange,tt=X.attributes.position,Ce=Ke.start*Pe,nt=(Ke.start+Ke.count)*Pe;ye!==null&&(Ce=Math.max(Ce,ye.start*Pe),nt=Math.min(nt,(ye.start+ye.count)*Pe)),Ee!==null?(Ce=Math.max(Ce,0),nt=Math.min(nt,Ee.count)):tt!=null&&(Ce=Math.max(Ce,0),nt=Math.min(nt,tt.count));let Mt=nt-Ce;if(Mt<0||Mt===1/0)return;pe.setup(F,V,ve,X,Ee);let ut,dt=$;if(Ee!==null&&(ut=x.get(Ee),dt=ge,dt.setIndex(ut)),F.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*Ne()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(F.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),oe.setLineWidth(Dt*Ne()),F.isLineSegments?dt.setMode(L.LINES):F.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else F.isPoints?dt.setMode(L.POINTS):F.isSprite&&dt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Dt=F._multiDrawStarts,Ue=F._multiDrawCounts,Ot=F._multiDrawCount,ot=Ee?x.get(Ee).bytesPerElement:1,ci=me.get(V).currentProgram.getUniforms();for(let Nt=0;Nt<Ot;Nt++)ci.setValue(L,"_gl_DrawID",Nt),dt.render(Dt[Nt]/ot,Ue[Nt])}else if(F.isInstancedMesh)dt.renderInstances(Ce,Mt,F.count);else if(X.isInstancedBufferGeometry){let Dt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ue=Math.min(X.instanceCount,Dt);dt.renderInstances(Ce,Mt,Ue)}else dt.render(Ce,Mt)};function kc(v,P,X,V){N!==null&&v.isNodeMaterial&&N.setObject(V,v),gt===!0&&K.setState(v,X,!1),v.transparent===!0&&v.side===nn&&v.forceSinglePass===!1?(v.side=Xt,v.needsUpdate=!0,os(v,P,V),v.side=an,v.needsUpdate=!0,os(v,P,V),v.side=nn):os(v,P,V)}this.compile=function(v,P,X=null){X===null&&(X=v),N!==null&&N.renderStart(v,P,X),w=Y.get(X),w.init(P),M.push(w),X.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),v!==X&&v.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),Tt=this.localClippingEnabled,gt=K.init(this.clippingPlanes,Tt),gt===!0&&K.setGlobalState(this.clippingPlanes,P),N!==null&&he.render(w.state.shadowsArray,X,P);let V=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ye=F.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){let ve=ye[Le];kc(ve,X,P,F),V.add(ve)}else kc(ye,X,P,F),V.add(ye)}),w=M.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(v,P,X=null){let V=this.compile(v,P,X);return new Promise(F=>{function ye(){if(V.forEach(function(Le){let Ee=me.get(Le).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Le)}),V.size===0){F(v);return}setTimeout(ye,10)}qe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let aa=null;function id(v){aa&&aa(v)}function Vc(){ai.stop()}function Fc(){ai.start()}let ai=new Ch;ai.setAnimationLoop(id),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(v){aa=v,ne.setAnimationLoop(v),v===null?ai.stop():ai.start()},ne.addEventListener("sessionstart",Vc),ne.addEventListener("sessionend",Fc),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;N!==null&&N.renderStart(v,P);let X=ne.enabled===!0&&ne.isPresenting===!0,V=k!==null&&(se===null||X)&&k.begin(T,se);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(P),P=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(T,v,P,se),w=Y.get(v,M.length),w.init(P),w.state.textureUnits=Re.getTextureUnits(),M.push(w),G.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?_t.setFromArrayCamera(P):Je.setFromProjectionMatrix(G,on,P.reversedDepth),Tt=this.localClippingEnabled,gt=K.init(this.clippingPlanes,Tt),A=ae.get(v,_.length),A.init(),_.push(A),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let Le=T.xr.getDepthSensingMesh();Le!==null&&ca(Le,P,-1/0,T.sortObjects)}ca(v,P,0,T.sortObjects),A.finish(),N!==null&&N.updateLights(w.state.lightsArray),T.sortObjects===!0&&A.sort(Xe,mt),ce=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,ce&&C.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),gt===!0&&K.beginShadows();let F=w.state.shadowsArray;if(he.render(F,v,P),gt===!0&&K.endShadows(),(V&&k.hasRenderPass())===!1){let Le=A.opaque,ve=A.transmissive;if(w.setupLights(),P.isArrayCamera){let Ee=P.cameras;if(ve.length>0)for(let Pe=0,Ke=Ee.length;Pe<Ke;Pe++){let tt=Ee[Pe];zc(Le,ve,v,tt)}ce&&C.render(v);for(let Pe=0,Ke=Ee.length;Pe<Ke;Pe++){let tt=Ee[Pe];Oc(A,v,tt,tt.viewport)}}else ve.length>0&&zc(Le,ve,v,P),ce&&C.render(v),Oc(A,v,P)}se!==null&&W===0&&(Re.updateMultisampleRenderTarget(se),Re.updateRenderTargetMipmap(se)),V&&k.end(T),v.isScene===!0&&v.onAfterRender(T,v,P),pe.resetDefaultState(),q=-1,ee=null,M.pop(),M.length>0?(w=M[M.length-1],Re.setTextureUnits(w.state.textureUnits),gt===!0&&K.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,N!==null&&N.renderEnd()};function ca(v,P,X,V){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){let Le=P.isArrayCamera?_t:Je;if(!v.frustumCulled||v.intersectsFrustum(Le)){V&&fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(G);let ve=j.update(v),Ee=v.material;Ee.visible&&A.push(v,ve,Ee,X,fe.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){let Le=P.isArrayCamera?_t:Je;if(!v.frustumCulled||v.intersectsFrustum(Le)){let ve=j.update(v),Ee=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),fe.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),fe.copy(ve.boundingSphere.center)),fe.applyMatrix4(v.matrixWorld).applyMatrix4(G)),Array.isArray(Ee)){let Pe=ve.groups;for(let Ke=0,tt=Pe.length;Ke<tt;Ke++){let Ce=Pe[Ke],nt=Ee[Ce.materialIndex];nt&&nt.visible&&A.push(v,ve,nt,X,fe.z,Ce,P)}}else Ee.visible&&A.push(v,ve,Ee,X,fe.z,null,P)}}}let ye=v.children;for(let Le=0,ve=ye.length;Le<ve;Le++)ca(ye[Le],P,X,V)}function Oc(v,P,X,V){let{opaque:F,transmissive:ye,transparent:Le}=v;w.setupLightsView(X),gt===!0&&K.setGlobalState(T.clippingPlanes,X),V&&oe.viewport(te.copy(V)),F.length>0&&$s(F,P,X),ye.length>0&&$s(ye,P,X),Le.length>0&&$s(Le,P,X),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function zc(v,P,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Ce=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:Ce?_n:sn,minFilter:Wn,samples:Math.max(4,Ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ye=w.state.transmissionRenderTarget[V.id],Le=V.viewport||te;ye.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);let ve=T.getRenderTarget(),Ee=T.getActiveCubeFace(),Pe=T.getActiveMipmapLevel();T.setRenderTarget(ye),T.getClearColor(J),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),ce&&C.render(X);let Ke=T.toneMapping;T.toneMapping=cn;let tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),gt===!0&&K.setGlobalState(T.clippingPlanes,V),$s(v,X,V),Re.updateMultisampleRenderTarget(ye),Re.updateRenderTargetMipmap(ye),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let nt=0,Mt=P.length;nt<Mt;nt++){let ut=P[nt],{object:dt,geometry:Dt,material:Ue,group:Ot}=ut;if(Ue.side===nn&&dt.layers.test(V.layers)){let ot=Ue.side;Ue.side=Xt,Ue.needsUpdate=!0,Gc(dt,X,V,Dt,Ue,Ot),Ue.side=ot,Ue.needsUpdate=!0,Ce=!0}}Ce===!0&&(Re.updateMultisampleRenderTarget(ye),Re.updateRenderTargetMipmap(ye))}T.setRenderTarget(ve,Ee,Pe),T.setClearColor(J,le),tt!==void 0&&(V.viewport=tt),T.toneMapping=Ke}function $s(v,P,X){let V=P.isScene===!0?P.overrideMaterial:null;for(let F=0,ye=v.length;F<ye;F++){let Le=v[F],{object:ve,geometry:Ee,group:Pe}=Le,Ke=Le.material;Ke.allowOverride===!0&&V!==null&&(Ke=V),ve.layers.test(X.layers)&&Gc(ve,P,X,Ee,Ke,Pe)}}function Gc(v,P,X,V,F,ye){N!==null&&F.isNodeMaterial&&N.setObject(v,F),v.onBeforeRender(T,P,X,V,F,ye),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(T,P,X,V,v,ye),F.transparent===!0&&F.side===nn&&F.forceSinglePass===!1?(F.side=Xt,F.needsUpdate=!0,T.renderBufferDirect(X,P,V,F,v,ye),F.side=an,F.needsUpdate=!0,T.renderBufferDirect(X,P,V,F,v,ye),F.side=nn):T.renderBufferDirect(X,P,V,F,v,ye),v.onAfterRender(T,P,X,V,F,ye)}function Hc(v){let P=0;for(let X of v)X.texture!==null&&P++;return P}function os(v,P,X){P.isScene!==!0&&(P=de);let V=me.get(v),F=w.state.lights,ye=w.state.shadowsArray,Le=F.state.version,ve=H.getParameters(v,F.state,ye,P,X,w.state.lightProbeGridArray),Ee=H.getProgramCacheKey(ve),Pe=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,V.fog=P.fog;let Ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=y.get(v.envMap||V.environment,Ke),V.envMapRotation=V.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",et),Pe=new Map,V.programs=Pe,V.programVariants=new Map);let tt=Pe.get(Ee);if(tt!==void 0){if(V.currentProgram===tt&&V.lightsStateVersion===Le)return Xc(v,ve),tt}else ve.uniforms=H.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,X,ve),v.onBeforeCompile(ve,T),tt=H.acquireProgram(ve,Ee),Pe.set(Ee,tt),V.uniforms=ve.uniforms;let Ce=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ce.clippingPlanes=K.uniform),Xc(v,ve),V.needsLights=ad(v),V.lightsStateVersion=Le,V.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.sunLights.value=F.state.sun,Ce.sunLightShadows.value=F.state.sunShadow,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.sunShadowMatrix.value=F.state.sunShadowMatrix,Ce.sunShadowCascade.value=F.state.sunShadowCascade,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),V.numLightProbeGrids=Hc(w.state.lightProbeGridArray),V.currentProgram=tt,V.uniformsList=null,tt}function sd(v,P,X,V,F){let ye=me.get(v),Le=ye.currentProgram.id+","+V+","+F,ve=ye.programVariants.get(Le);return ve===void 0?(ve=os(v,P,X),ye.programVariants.set(Le,ve)):(ye.currentProgram=ve,ye.uniformsList=null,ye.outputColorSpace=V,ye.toneMapping=F),ve}function Wc(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=is.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Xc(v,P){let X=me.get(v);X.outputColorSpace=P.outputColorSpace,X.batching=P.batching,X.batchingColor=P.batchingColor,X.instancing=P.instancing,X.instancingColor=P.instancingColor,X.instancingMorph=P.instancingMorph,X.skinning=P.skinning,X.morphTargets=P.morphTargets,X.morphNormals=P.morphNormals,X.morphColors=P.morphColors,X.morphTargetsCount=P.morphTargetsCount,X.numClippingPlanes=P.numClippingPlanes,X.numIntersection=P.numClipIntersection,X.vertexAlphas=P.vertexAlphas,X.vertexTangents=P.vertexTangents,X.toneMapping=P.toneMapping}function rd(v,P,X,V,F){P.isScene!==!0&&(P=de),Re.resetTextureUnits();let ye=P.fog,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?P.environment:null,ve=se===null?T.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:it.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pe=y.get(V.envMap||Le,Ee),Ke=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,tt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color,ut=cn;V.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ut=T.toneMapping);let dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Dt=dt!==void 0?dt.length:0,Ue=me.get(V),Ot=w.state.lights;if(gt===!0&&(Tt===!0||v!==ee)){let xt=v===ee&&V.id===q;K.setState(V,v,xt)}let ot=!1,ci=!1;V.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==Ot.state.version||F.isBatchedMesh&&Ue.batching===!1||!F.isBatchedMesh&&Ue.batching===!0||F.isBatchedMesh&&Ue.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&Ue.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&Ue.instancing===!1||!F.isInstancedMesh&&Ue.instancing===!0||F.isSkinnedMesh&&Ue.skinning===!1||!F.isSkinnedMesh&&Ue.skinning===!0||F.isInstancedMesh&&Ue.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ue.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ue.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ue.instancingMorph===!1&&F.morphTexture!==null||Ue.envMap!==Pe||V.fog===!0&&Ue.fog!==ye||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==K.numPlanes||Ue.numIntersection!==K.numIntersection)||Ue.vertexAlphas!==Ke||Ue.vertexTangents!==tt||Ue.morphTargets!==Ce||Ue.morphNormals!==nt||Ue.morphColors!==Mt||Ue.morphTargetsCount!==Dt||Ue.numLightProbeGrids!==Hc(w.state.lightProbeGridArray)?ot=!0:(Ue.outputColorSpace!==ve||Ue.toneMapping!==ut)&&(ci=!0):(ot=!0,Ue.__version=V.version);let Nt=Ue.currentProgram;(ot===!0||ci===!0)&&(Nt=ci===!0?sd(V,P,F,ve,ut):os(V,P,F),N&&V.isNodeMaterial&&N.onUpdateProgram(V,Nt,Ue));let Js=!1,Zn=!1,li=!1,rt=Nt.getUniforms(),Pt=Ue.uniforms;if(oe.useProgram(Nt.program)&&(Js=!0,Zn=!0,li=!0),V.id!==q&&(q=V.id,Zn=!0),Js||ee!==v){oe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),rt.setValue(L,"projectionMatrix",v.projectionMatrix),rt.setValue(L,"viewMatrix",v.matrixWorldInverse);let Lt=rt.map.cameraPosition;Lt!==void 0&&Lt.setValue(L,ie.setFromMatrixPosition(v.matrixWorld)),Ae.logarithmicDepthBuffer&&rt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&rt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),ee!==v&&(ee=v,Zn=!0,li=!0)}if(Ue.needsLights&&(Ot.state.sunShadowMap.length>0&&rt.setValue(L,"sunShadowMap",Ot.state.sunShadowMap,Re),Ot.state.directionalShadowMap.length>0&&rt.setValue(L,"directionalShadowMap",Ot.state.directionalShadowMap,Re),Ot.state.spotShadowMap.length>0&&rt.setValue(L,"spotShadowMap",Ot.state.spotShadowMap,Re),Ot.state.pointShadowMap.length>0&&rt.setValue(L,"pointShadowMap",Ot.state.pointShadowMap,Re)),F.isSkinnedMesh){rt.setOptional(L,F,"bindMatrix"),rt.setOptional(L,F,"bindMatrixInverse");let xt=F.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),rt.setValue(L,"boneTexture",xt.boneTexture,Re))}F.isBatchedMesh&&(rt.setOptional(L,F,"batchingTexture"),rt.setValue(L,"batchingTexture",F._matricesTexture,Re),rt.setOptional(L,F,"batchingIdTexture"),rt.setValue(L,"batchingIdTexture",F._indirectTexture,Re),rt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&rt.setValue(L,"batchingColorTexture",F._colorsTexture,Re));let hn=X.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Q.update(F,X,Nt),(Zn||Ue.receiveShadow!==F.receiveShadow)&&(Ue.receiveShadow=F.receiveShadow,rt.setValue(L,"receiveShadow",F.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&P.environment!==null&&(Pt.envMapIntensity.value=P.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Zg()),Zn){if(rt.setValue(L,"toneMappingExposure",T.toneMappingExposure),Ue.needsLights&&od(Pt,li),ye&&V.fog===!0&&re.refreshFogUniforms(Pt,ye),re.refreshMaterialUniforms(Pt,V,Se,Be,w.state.transmissionRenderTarget[v.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){let xt=E,Lt=0;for(let In of w.state.lightProbeGridArray)In.texture!==null&&(xt.textures[Lt]=In.texture,xt.min[Lt]=In.boundingBox.min,xt.max[Lt]=In.boundingBox.max,xt.resolution[Lt]=In.resolution,Lt++);for(let In in xt)xt[In].length=Lt;Pt.probesSH.value=xt.textures,Pt.probesMin.value=xt.min,Pt.probesMax.value=xt.max,Pt.probesResolution.value=xt.resolution}is.upload(L,Wc(Ue),Pt,Re)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(is.upload(L,Wc(Ue),Pt,Re),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&rt.setValue(L,"center",F.center),rt.setValue(L,"modelViewMatrix",F.modelViewMatrix),rt.setValue(L,"normalMatrix",F.normalMatrix),rt.setValue(L,"modelMatrix",F.matrixWorld),V.uniformsGroups!==void 0){let xt=V.uniformsGroups;for(let Lt=0,In=xt.length;Lt<In;Lt++){let Yc=xt[Lt];Ie.update(Yc,Nt),Ie.bind(Yc,Nt)}}return Nt}function od(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function ad(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(v,P,X){let V=me.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),me.get(v.texture).__webglTexture=P,me.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let X=me.get(v);X.__webglFramebuffer=P,X.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,X=0){se=v,Z=P,W=X;let V=null,F=!1,ye=!1;if(v){let ve=me.get(v);if(ve.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(L.FRAMEBUFFER,ve.__webglFramebuffer),te.copy(v.viewport),Me.copy(v.scissor),Te=v.scissorTest,oe.viewport(te),oe.scissor(Me),oe.setScissorTest(Te),q=-1;return}else if(ve.__webglFramebuffer===void 0)Re.setupRenderTarget(v);else if(ve.__hasExternalTextures)Re.rebindTextures(v,me.get(v.texture).__webglTexture,me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ke=v.depthTexture;if(ve.__boundDepthTexture!==Ke){if(Ke!==null&&me.has(Ke)&&(v.width!==Ke.image.width||v.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(v)}}let Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Pe=me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[P])?V=Pe[P][X]:V=Pe[P],F=!0):v.samples>0&&Re.useMultisampledRTT(v)===!1?V=me.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[X]:V=Pe,te.copy(v.viewport),Me.copy(v.scissor),Te=v.scissorTest}else te.copy(Ve).multiplyScalar(Se).floor(),Me.copy(Qe).multiplyScalar(Se).floor(),Te=st;if(X!==0&&(V=z),oe.bindFramebuffer(L.FRAMEBUFFER,V)&&oe.drawBuffers(v,V),oe.viewport(te),oe.scissor(Me),oe.setScissorTest(Te),F){let ve=me.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,X)}else if(ye){let ve=P;for(let Ee=0;Ee<v.textures.length;Ee++){let Pe=me.get(v.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,Pe.__webglTexture,X,ve)}}else if(v!==null&&X!==0){let ve=me.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,X)}q=-1};function qc(v){let P=me.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=Ae.textureFormatReadable(v.format),P.__typeReadable=Ae.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,X,V,F,ye,Le,ve=0){if(!(v&&v.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Ee=Ee[Le],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){oe.bindFramebuffer(L.FRAMEBUFFER,Ee);try{let Pe=v.textures[ve],Ke=Pe.format,tt=Pe.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve);let Ce=qc(Pe);if(Ce.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-V&&X>=0&&X<=v.height-F&&L.readPixels(P,X,V,F,ue.convert(Ke),ue.convert(tt),ye)}finally{let Pe=se!==null?me.get(se).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,P,X,V,F,ye,Le,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Ee=Ee[Le],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(P>=0&&P<=v.width-V&&X>=0&&X<=v.height-F){oe.bindFramebuffer(L.FRAMEBUFFER,Ee);let Pe=v.textures[ve],Ke=Pe.format,tt=Pe.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve);let Ce=qc(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,nt),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),L.readPixels(P,X,V,F,ue.convert(Ke),ue.convert(tt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Mt=se!==null?me.get(se).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Mt);let ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await th(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,nt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(nt),L.deleteSync(ut),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,X=0){let V=Math.pow(2,-X),F=Math.floor(v.image.width*V),ye=Math.floor(v.image.height*V),Le=P!==null?P.x:0,ve=P!==null?P.y:0;Re.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Le,ve,F,ye),oe.unbindTexture()},this.copyTextureToTexture=function(v,P,X=null,V=null,F=0,ye=0){let Le,ve,Ee,Pe,Ke,tt,Ce,nt,Mt,ut=v.isCompressedTexture?v.mipmaps[ye]:v.image;if(X!==null)Le=X.max.x-X.min.x,ve=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,Ke=X.min.y,tt=X.isBox3?X.min.z:0;else{let rt=Math.pow(2,-F);Le=Math.floor(ut.width*rt),ve=Math.floor(ut.height*rt),v.isDataArrayTexture?Ee=ut.depth:v.isData3DTexture?Ee=Math.floor(ut.depth*rt):Ee=1,Pe=0,Ke=0,tt=0}V!==null?(Ce=V.x,nt=V.y,Mt=V.z):(Ce=0,nt=0,Mt=0);let dt=ue.convert(P.format),Dt=ue.convert(P.type),Ue;P.isData3DTexture?(Re.setTexture3D(P,0),Ue=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Re.setTexture2DArray(P,0),Ue=L.TEXTURE_2D_ARRAY):(Re.setTexture2D(P,0),Ue=L.TEXTURE_2D),oe.activeTexture(L.TEXTURE0),oe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),oe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),oe.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let Ot=oe.getParameter(L.UNPACK_ROW_LENGTH),ot=oe.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=oe.getParameter(L.UNPACK_SKIP_PIXELS),Nt=oe.getParameter(L.UNPACK_SKIP_ROWS),Js=oe.getParameter(L.UNPACK_SKIP_IMAGES);oe.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),oe.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),oe.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),oe.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);let Zn=v.isDataArrayTexture||v.isData3DTexture,li=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let rt=me.get(v),Pt=me.get(P),hn=me.get(rt.__renderTarget),xt=me.get(Pt.__renderTarget);oe.bindFramebuffer(L.READ_FRAMEBUFFER,hn.__webglFramebuffer),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Lt=0;Lt<Ee;Lt++)Zn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.get(v).__webglTexture,F,tt+Lt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.get(P).__webglTexture,ye,Mt+Lt)),L.blitFramebuffer(Pe,Ke,Pe+Le,Ke+ve,Ce,nt,Ce+Le,nt+ve,L.DEPTH_BUFFER_BIT,L.NEAREST);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||me.has(v)){let rt=me.get(v),Pt=me.get(P);oe.bindFramebuffer(L.READ_FRAMEBUFFER,I),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let hn=0;hn<Ee;hn++)Zn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rt.__webglTexture,F,tt+hn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rt.__webglTexture,F),li?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,ye,Mt+hn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,ye),F!==0?L.blitFramebuffer(Pe,Ke,Pe+Le,Ke+ve,Ce,nt,Ce+Le,nt+ve,L.COLOR_BUFFER_BIT,L.NEAREST):li?L.copyTexSubImage3D(Ue,ye,Ce,nt,Mt+hn,Pe,Ke,Le,ve):L.copyTexSubImage2D(Ue,ye,Ce,nt,Pe,Ke,Le,ve);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else li?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Ue,ye,Ce,nt,Mt,Le,ve,Ee,dt,Dt,ut.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(Ue,ye,Ce,nt,Mt,Le,ve,Ee,dt,ut.data):L.texSubImage3D(Ue,ye,Ce,nt,Mt,Le,ve,Ee,dt,Dt,ut):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ye,Ce,nt,Le,ve,dt,Dt,ut.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ye,Ce,nt,ut.width,ut.height,dt,ut.data):L.texSubImage2D(L.TEXTURE_2D,ye,Ce,nt,Le,ve,dt,Dt,ut);oe.pixelStorei(L.UNPACK_ROW_LENGTH,Ot),oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),oe.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),oe.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),oe.pixelStorei(L.UNPACK_SKIP_IMAGES,Js),ye===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&L.generateMipmap(Ue),oe.unbindTexture()},this.initRenderTarget=function(v){me.get(v).__webglFramebuffer===void 0&&Re.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Re.setTextureCube(v,0):v.isData3DTexture?Re.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Re.setTexture2DArray(v,0):Re.setTexture2D(v,0),oe.unbindTexture()},this.resetState=function(){Z=0,W=0,se=null,oe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var zh={type:"change"},Lc={type:"start"},Hh={type:"end"},Ko=new mi,Gh=new zt,Kg=Math.cos(70*uc.DEG2RAD),At=new D,$t=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6,$o=class extends Ps{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Qt,this._lastTargetPosition=new D,this._quat=new Qt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $i,this._sphericalDelta=new $i,this._scale=1,this._panOffset=new D,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new D,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jg.bind(this),this._onPointerDown=$g.bind(this),this._onPointerUp=jg.bind(this),this._onContextMenu=r0.bind(this),this._onMouseWheel=t0.bind(this),this._onKeyDown=n0.bind(this),this._onTouchStart=i0.bind(this),this._onTouchMove=s0.bind(this),this._onMouseDown=Qg.bind(this),this._onMouseMove=e0.bind(this),this._interceptControlDown=o0.bind(this),this._interceptControlUp=a0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ct.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zh),this.update(),this.state=ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=$t:n>Math.PI&&(n-=$t),s<-Math.PI?s+=$t:s>Math.PI&&(s-=$t),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=At.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ko.origin.copy(this.object.position),Ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ko.direction))<Kg?this.object.lookAt(this.target):(Gh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ko.intersectPlane(Gh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;At.copy(s).sub(this.target);let r=At.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function $g(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Jg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hh),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Lc)}function e0(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function t0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(Lc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hh))}function n0(i){this.enabled!==!1&&this._handleKeyDown(i)}function i0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case si.ROTATE:if(this.enableRotate===!1){this.state=ct.NONE;break}this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case si.PAN:if(this.enablePan===!1){this.state=ct.NONE;break}this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Lc)}function s0(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function r0(i){this.enabled!==!1&&i.preventDefault()}function o0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var pt=Object.freeze(["U","L","R","B"]),Ln=Object.freeze({U:[0,1,0],L:[-Math.sqrt(2/3),-1/3,Math.sqrt(2)/3],R:[Math.sqrt(2/3),-1/3,Math.sqrt(2)/3],B:[0,-1/3,-2*Math.sqrt(2)/3]}),Cn=Object.freeze({U:{name:"\u0111\xE1y",color:"v\xE0ng",hex:"#ffd84c"},L:{name:"b\xEAn ph\u1EA3i",color:"\u0111\u1ECF",hex:"#ed5c5b"},R:{name:"b\xEAn tr\xE1i",color:"xanh d\u01B0\u01A1ng",hex:"#3994f1"},B:{name:"tr\u01B0\u1EDBc",color:"xanh l\xE1",hex:"#41c583"}}),Wh=(i,e)=>i.reduce((t,n,s)=>t+n*e[s],0),qt=(i,e)=>i.map((t,n)=>t+e[n]),Bt=(i,e)=>i.map(t=>t*e),Xh=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];function c0(i,e,t){let n=Math.cos(t),s=Math.sin(t);return qt(qt(Bt(i,n),Bt(Xh(e,i),s)),Bt(e,Wh(e,i)*(1-n)))}var l0=i=>pt.filter(e=>i.includes(e)).join(""),Ic=i=>i.flatMap((e,t)=>i.slice(t+1).map(n=>[e,n])),Cc=Ic(pt).map(i=>i.join("")),Ei=[...pt.map(i=>"T:"+i),...pt.map(i=>"C:"+i),...Cc.map(i=>"E:"+i)],qh=Object.fromEntries(pt.map(i=>[i,Bt(Ln[i],-1)]));function Yh(i){return pt.reduce((e,t,n)=>qt(e,Bt(Ln[t],i[n]/3)),[0,0,0])}var Mi=i=>pt.map(e=>i[e]||0);function h0(i,e,t){let n=pt.filter(o=>o!==t),s;i==="T"?s=n.map(o=>Mi({[e]:2+ +(o===e),...o!==e?{[o]:1}:{}})):i==="E"?s=n.map(o=>{let a=Object.fromEntries([...e].map(c=>[c,1]));return a[o]=(a[o]||0)+1,Mi(a)}):s=Ic(n).map(o=>{let a={[e]:1};for(let c of o)a[c]=(a[c]||0)+1;return Mi(a)});let r=s.map(Yh);return Wh(Xh(qt(r[1],Bt(r[0],-1)),qt(r[2],Bt(r[0],-1))),qh[t])<0&&([r[1],r[2]]=[r[2],r[1]],[s[1],s[2]]=[s[2],s[1]]),{vertices:r,barycentric:s}}var vt=Ei.flatMap(i=>{let[e,t]=i.split(":");return pt.filter(n=>!t.includes(n)).map(n=>({pieceId:i,kind:e,place:t,face:n,normal:qh[n],...h0(e,t,n)}))}).map((i,e)=>({...i,id:e,key:`${i.pieceId}/${i.face}`})),Uc=new Map(vt.map(i=>[i.key,i.id])),Zh=Object.fromEntries(pt.map(i=>[i,Object.fromEntries(pt.map(e=>{let t=c0(Ln[e],Ln[i],-2*Math.PI/3),n=pt.find(s=>Math.hypot(...qt(t,Bt(Ln[s],-1)))<1e-9);if(!n)throw Error("Tetrahedron cycle error");return[e,n]}))]));function oi(i){if(typeof i!="string")throw new TypeError("A move must be text.");let e=i.trim().replace(/[’′]/g,"'"),t=/^([ULRBulrb])(2|'|2')?$/.exec(e);if(!t)throw new SyntaxError(`Invalid Pyraminx move: ${i}. Use U L R B or u l r b, optionally prime. No cube face/slice/wide turns.`);let n=t[1].toUpperCase(),s=t[1]!==n,r=t[2]==="2'"?1:t[2]?-1:1;return{token:t[1]+(r===-1?"'":""),axis:n,tip:s,power:r,angle:-r*2*Math.PI/3,vector:Ln[n],kind:s?"tip":"body"}}function Kh(i){if(typeof i!="string")throw new TypeError("Algorithm must be text");return i.trim().split(/\s+/).filter(Boolean).map(e=>oi(e).token)}function $h(i){return Kh(i).reverse().map(e=>e.endsWith("'")?e.slice(0,-1):e+"'").join(" ")}function Jh(i,e){return e.tip?i.kind==="T"&&i.place===e.axis:i.place.includes(e.axis)}var d0=Object.fromEntries([...pt,...pt.map(i=>i.toLowerCase())].map(i=>{let e=oi(i),t=Zh[e.axis];return[i,vt.map(n=>Jh(n,e)?Uc.get(`${n.kind}:${l0([...n.place].map(s=>t[s]).join(""))}/${t[n.face]}`):n.id)]}));function u0(i){let e=0;for(let t=0;t<i.length;t++)for(let n=t+1;n<i.length;n++)i[t]>i[n]&&(e^=1);return e}var rs=class i{constructor(e){this.state=e?Array.from(e):vt.map(n=>n.id);let t=this.invariants();if(!t.valid)throw new TypeError(`Invalid Pyraminx state: ${t.errors.join("; ")}`)}clone(){return new i(this.state)}signature(){return this.state.join(",")}exportState(){return this.state.slice()}move(e){let t=oi(e),n=d0[t.tip?t.axis.toLowerCase():t.axis];for(let s=0;s<(t.power===1?1:2);s++){let r=[];this.state.forEach((o,a)=>r[n[a]]=o),this.state=r}return this}apply(e){let t=Kh(e);for(let n of t)this.move(n);return this}isSolved(){return this.state.every((e,t)=>e===t)}piece(e){if(!Ei.includes(e))throw new Error(`Unknown piece ${e}`);let t=this.state.flatMap((n,s)=>vt[n].pieceId===e?[{id:n,slot:s,face:vt[s].face,color:vt[n].face,colorVi:Cn[vt[n].face].color,faceVi:Cn[vt[s].face].name}]:[]);return{pieceId:e,kind:e[0],home:e.slice(2),place:vt[t[0].slot].place,stickers:t,solved:t.every(n=>n.id===n.slot)}}pieces(){return Ei.map(e=>this.piece(e))}alignedTip(e){return pt.filter(t=>t!==e).every(t=>vt[this.state[Uc.get(`T:${e}/${t}`)]].face===vt[this.state[Uc.get(`C:${e}/${t}`)]].face)}metrics(){let e=this.pieces(),t=n=>e.filter(s=>s.kind===n&&s.solved).map(s=>s.pieceId);return{tipsAligned:pt.filter(n=>this.alignedTip(n)),solvedTips:t("T"),solvedCenters:t("C"),solvedEdges:t("E"),correctlyPlacedEdges:e.filter(n=>n.kind==="E"&&n.home===n.place).map(n=>n.pieceId),solvedBottomEdges:e.filter(n=>n.kind==="E"&&!n.home.includes("U")&&n.solved).map(n=>n.pieceId),isSolved:this.isSolved()}}invariants(){let e=[];if(this.state.length!==36||this.state.some(a=>!Number.isInteger(a)||a<0||a>=36)||new Set(this.state).size!==36)return{valid:!1,errors:["State must be a permutation of sticker IDs 0..35"]};let t=[];this.state.forEach((a,c)=>t[a]=c);for(let a of Ei){let c=vt.filter(d=>d.pieceId===a),l=c.map(d=>vt[t[d.id]]);if((new Set(l.map(d=>d.pieceId)).size!==1||l[0].kind!==a[0])&&e.push(`Split or wrong-type piece ${a}`),a[0]!=="E"&&l[0].place!==a.slice(2)&&e.push(`Moved fixed axis ${a}`),a[0]!=="E"){let d=Zh[a.slice(2)],m=c.map(u=>u.face),h=l.map(u=>u.face),p=!1;for(let u=0;u<3;u++)m.every((S,g)=>S===h[g])&&(p=!0),m.forEach((S,g)=>m[g]=d[S]);p||e.push(`Reflected ${a}`)}}if(e.length)return{valid:!1,errors:e};let n=[],s=[];for(let a of Cc){let c=vt.filter(m=>m.pieceId==="E:"+a),l=c.map(m=>vt[this.state[m.id]]);n.push(Cc.indexOf(l[0].place));let d=pt.find(m=>!l[0].place.includes(m));s.push(l[0].face===d?0:1)}let r=u0(n),o=s.reduce((a,c)=>a^c,0);return r&&e.push("Odd edge permutation"),o&&e.push("Odd edge-flip parity"),{valid:!e.length,errors:e,edgePermutationParity:r,edgeFlipParity:o,edgePermutation:n,edgeFlips:s,stickerCount:36,pieceCount:14}}animationDescriptor(e){let t=oi(e),n=vt.filter(s=>Jh(s,t));return{...t,origin:[0,0,0],stickerIds:n.map(s=>this.state[s.id]),pieceIds:[...new Set(n.map(s=>vt[this.state[s.id]].pieceId))]}}renderData({inset:e=.07,lift:t=.002}={}){return vt.map(n=>{let s=vt[this.state[n.id]],r=Bt(n.vertices.reduce(qt,[0,0,0]),1/3);return{id:s.id,pieceId:s.pieceId,slotId:n.id,place:n.place,face:n.face,color:s.face,hex:Cn[s.face].hex,normal:n.normal.slice(),vertices:n.vertices.map(o=>qt(qt(r,Bt(qt(o,Bt(r,-1)),1-e)),Bt(n.normal,t)))}})}};function jh(i){let[e,t]=i.split(":");if(!Ei.includes(i))throw Error("Unknown slot");let n;if(e==="T")n=pt.map(s=>{let r={[t]:2};return r[s]=(r[s]||0)+1,Mi(r)});else if(e==="E")n=pt.map(s=>{let r=Object.fromEntries([...t].map(o=>[o,1]));return r[s]=(r[s]||0)+1,Mi(r)});else{let s=pt.filter(r=>r!==t);n=[...s.map(r=>Mi({[t]:2,[r]:1})),...Ic(s).map(([r,o])=>Mi({[t]:1,[r]:1,[o]:1}))]}return n.map(Yh)}var Pc=class{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}},qs=class{constructor(){this.id=0,this.v1=new Yn,this.v2=new Yn,this.v3=new Yn,this.normalModel=new D,this.vertexNormalsModel=[new D,new D,new D],this.vertexNormalsLength=0,this.color=new We,this.material=null,this.uvs=[new ze,new ze,new ze],this.z=0,this.renderOrder=0}},Yn=class{constructor(){this.position=new D,this.positionWorld=new D,this.positionScreen=new at,this.visible=!0}copy(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)}},Ys=class{constructor(){this.id=0,this.v1=new Yn,this.v2=new Yn,this.vertexColors=[new We,new We],this.material=null,this.z=0,this.renderOrder=0}},Zs=class{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new ze,this.material=null,this.renderOrder=0}},Jo=class{constructor(){let e,t,n=0,s,r,o=0,a,c,l=0,d,m,h=0,p,u,S=0,g,f=[],b=[],R={objects:[],lights:[],elements:[]},E=new D,A=new at,w=new mn(new D(-1,-1,-1),new D(1,1,1)),_=new mn,M=new Array(3),k=new ht,T=new ht,U=new ht,N=new Gn,z=[],I=[],O=[],Z=[],W=[],se=[],q=new at,ee=new at,te=new at,Me=[],Te=[null,null,null],J=[{sign:1},{sign:-1}];function le(){let G=[],ie=[],fe=[],de=null,ce=new He;function Ne(x){de=x,ce.getNormalMatrix(de.matrixWorld),G.length=0,ie.length=0,fe.length=0}function L(x){let B=x.position,j=x.positionWorld,H=x.positionScreen;j.copy(B).applyMatrix4(g),H.copy(j).applyMatrix4(T);let re=1/H.w;H.x*=re,H.y*=re,H.z*=re,x.visible=H.x>=-1&&H.x<=1&&H.y>=-1&&H.y<=1&&H.z>=-1&&H.z<=1}function Fe(x,B,j){s=Ve(),s.position.set(x,B,j),L(s)}function qe(x,B,j){G.push(x,B,j)}function Ae(x,B,j){ie.push(x,B,j)}function oe(x,B){fe.push(x,B)}function De(x,B,j){return x.visible===!0||B.visible===!0||j.visible===!0?!0:(M[0]=x.positionScreen,M[1]=B.positionScreen,M[2]=j.positionScreen,w.intersectsBox(_.setFromPoints(M)))}function me(x,B,j){return(j.positionScreen.x-x.positionScreen.x)*(B.positionScreen.y-x.positionScreen.y)-(j.positionScreen.y-x.positionScreen.y)*(B.positionScreen.x-x.positionScreen.x)<0}function Re(x,B){let j=I[x],H=I[B];j.positionScreen.copy(j.position).applyMatrix4(U),H.positionScreen.copy(H.position).applyMatrix4(U),Tt(j.positionScreen,H.positionScreen)===!0&&(j.positionScreen.multiplyScalar(1/j.positionScreen.w),H.positionScreen.multiplyScalar(1/H.positionScreen.w),d=st(),d.id=de.id,d.v1.copy(j),d.v2.copy(H),d.z=Math.max(j.positionScreen.z,H.positionScreen.z),d.renderOrder=de.renderOrder,d.material=de.material,de.material.vertexColors&&(d.vertexColors[0].fromArray(ie,x*3),d.vertexColors[1].fromArray(ie,B*3)),R.elements.push(d))}function y(x,B,j,H){let re=I[x],ae=I[B],Y=I[j],K=re.positionScreen.w,he=ae.positionScreen.w,C=Y.positionScreen.w,Q=K*(re.positionScreen.z+1),$=he*(ae.positionScreen.z+1),ge=C*(Y.positionScreen.z+1),ue=K*(1-re.positionScreen.z),pe=he*(1-ae.positionScreen.z),Ie=C*(1-Y.positionScreen.z);if(Q<0&&$<0&&ge<0||ue<0&&pe<0&&Ie<0)return;if(Q>=0&&$>=0&&ge>=0&&ue>=0&&pe>=0&&Ie>=0){if(De(re,ae,Y)===!1)return;if(H.side===nn||me(re,ae,Y)===!0){a=Qe(),a.id=de.id,a.v1.copy(re),a.v2.copy(ae),a.v3.copy(Y),a.z=(re.positionScreen.z+ae.positionScreen.z+Y.positionScreen.z)/3,a.renderOrder=de.renderOrder,E.subVectors(Y.position,ae.position),A.subVectors(re.position,ae.position),E.cross(A),a.normalModel.copy(E),a.normalModel.applyMatrix3(ce).normalize();for(let ne=0;ne<3;ne++){let we=a.vertexNormalsModel[ne];we.fromArray(G,arguments[ne]*3),we.applyMatrix3(ce).normalize(),a.uvs[ne].fromArray(fe,arguments[ne]*2)}a.vertexNormalsLength=3,a.material=H,H.vertexColors&&a.color.fromArray(ie,x*3),R.elements.push(a)}return}q.set(re.positionScreen.x*K,re.positionScreen.y*K,re.positionScreen.z*K,K),ee.set(ae.positionScreen.x*he,ae.positionScreen.y*he,ae.positionScreen.z*he,he),te.set(Y.positionScreen.x*C,Y.positionScreen.y*C,Y.positionScreen.z*C,C),Te[0]=q,Te[1]=ee,Te[2]=te;let Ze=gt(Te);if(!(Ze<3)){for(let ne=0;ne<Ze;ne++){let we=f[ne],Oe=Me[ne];Oe||(Oe=new Yn,Me[ne]=Oe);let xe=1/we.w;Oe.positionScreen.set(we.x*xe,we.y*xe,we.z*xe,1),Oe.positionWorld.copy(re.positionWorld),Oe.visible=!0}for(let ne=1;ne<Ze-1;ne++){let we=Me[0],Oe=Me[ne],xe=Me[ne+1];if(H.side===nn||me(we,Oe,xe)===!0){a=Qe(),a.id=de.id,a.v1.copy(we),a.v2.copy(Oe),a.v3.copy(xe),a.z=(we.positionScreen.z+Oe.positionScreen.z+xe.positionScreen.z)/3,a.renderOrder=de.renderOrder,E.subVectors(Y.position,ae.position),A.subVectors(re.position,ae.position),E.cross(A),a.normalModel.copy(E),a.normalModel.applyMatrix3(ce).normalize();for(let et=0;et<3;et++){let St=a.vertexNormalsModel[et];St.fromArray(G,arguments[et]*3),St.applyMatrix3(ce).normalize(),a.uvs[et].fromArray(fe,arguments[et]*2)}a.vertexNormalsLength=3,a.material=H,H.vertexColors&&a.color.fromArray(ie,x*3),R.elements.push(a)}}}}return{setObject:Ne,projectVertex:L,checkTriangleVisibility:De,checkBackfaceCulling:me,pushVertex:Fe,pushNormal:qe,pushColor:Ae,pushUv:oe,pushLine:Re,pushTriangle:y}}let _e=new le;function Be(G){if(G.visible===!1)return;if(G.isLight)R.lights.push(G);else if(G.isMesh||G.isLine||G.isPoints){if(G.material.visible===!1||G.frustumCulled===!0&&N.intersectsObject(G)===!1)return;Se(G)}else if(G.isSprite){if(G.material.visible===!1||G.frustumCulled===!0&&N.intersectsSprite(G)===!1)return;Se(G)}let ie=G.children;for(let fe=0,de=ie.length;fe<de;fe++)Be(ie[fe])}function Se(G){e=mt(),e.id=G.id,e.object=G,E.setFromMatrixPosition(G.matrixWorld),E.applyMatrix4(T),e.z=E.z,e.renderOrder=G.renderOrder,R.objects.push(e)}this.projectScene=function(G,ie,fe,de){c=0,m=0,u=0,R.elements.length=0,G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),k.copy(ie.matrixWorldInverse),T.multiplyMatrices(ie.projectionMatrix,k),N.setFromProjectionMatrix(T),t=0,R.objects.length=0,R.lights.length=0,Be(G),fe===!0&&R.objects.sort(_t);let ce=R.objects;for(let Ne=0,L=ce.length;Ne<L;Ne++){let Fe=ce[Ne].object,qe=Fe.geometry;if(_e.setObject(Fe),g=Fe.matrixWorld,r=0,Fe.isMesh){let Ae=Fe.material,oe=Array.isArray(Ae),De=qe.attributes,me=qe.groups;if(De.position===void 0)continue;let Re=De.position.array;for(let y=0,x=Re.length;y<x;y+=3){let B=Re[y],j=Re[y+1],H=Re[y+2],re=qe.morphAttributes.position;if(re!==void 0){let ae=qe.morphTargetsRelative,Y=Fe.morphTargetInfluences;for(let K=0,he=re.length;K<he;K++){let C=Y[K];if(C===0)continue;let Q=re[K];ae?(B+=Q.getX(y/3)*C,j+=Q.getY(y/3)*C,H+=Q.getZ(y/3)*C):(B+=(Q.getX(y/3)-Re[y])*C,j+=(Q.getY(y/3)-Re[y+1])*C,H+=(Q.getZ(y/3)-Re[y+2])*C)}}_e.pushVertex(B,j,H)}if(De.normal!==void 0){let y=De.normal.array;for(let x=0,B=y.length;x<B;x+=3)_e.pushNormal(y[x],y[x+1],y[x+2])}if(De.color!==void 0){let y=De.color.array;for(let x=0,B=y.length;x<B;x+=3)_e.pushColor(y[x],y[x+1],y[x+2])}if(De.uv!==void 0){let y=De.uv.array;for(let x=0,B=y.length;x<B;x+=2)_e.pushUv(y[x],y[x+1])}if(qe.index!==null){let y=qe.index.array;if(me.length>0)for(let x=0;x<me.length;x++){let B=me[x];if(Ae=oe===!0?Fe.material[B.materialIndex]:Fe.material,Ae!==void 0)for(let j=B.start,H=B.start+B.count;j<H;j+=3)_e.pushTriangle(y[j],y[j+1],y[j+2],Ae)}else for(let x=0,B=y.length;x<B;x+=3)_e.pushTriangle(y[x],y[x+1],y[x+2],Ae)}else if(me.length>0)for(let y=0;y<me.length;y++){let x=me[y];if(Ae=oe===!0?Fe.material[x.materialIndex]:Fe.material,Ae!==void 0)for(let B=x.start,j=x.start+x.count;B<j;B+=3)_e.pushTriangle(B,B+1,B+2,Ae)}else for(let y=0,x=Re.length/3;y<x;y+=3)_e.pushTriangle(y,y+1,y+2,Ae)}else if(Fe.isLine){U.multiplyMatrices(T,g);let Ae=qe.attributes;if(Ae.position!==void 0){let oe=Ae.position.array;for(let De=0,me=oe.length;De<me;De+=3)_e.pushVertex(oe[De],oe[De+1],oe[De+2]);if(Ae.color!==void 0){let De=Ae.color.array;for(let me=0,Re=De.length;me<Re;me+=3)_e.pushColor(De[me],De[me+1],De[me+2])}if(qe.index!==null){let De=qe.index.array;for(let me=0,Re=De.length;me<Re;me+=2)_e.pushLine(De[me],De[me+1])}else{let De=Fe.isLineSegments?2:1;for(let me=0,Re=oe.length/3-1;me<Re;me+=De)_e.pushLine(me,me+1)}}}else if(Fe.isPoints){U.multiplyMatrices(T,g);let Ae=qe.attributes;if(Ae.position!==void 0){let oe=Ae.position.array;for(let De=0,me=oe.length;De<me;De+=3)A.set(oe[De],oe[De+1],oe[De+2],1),A.applyMatrix4(U),Xe(A,Fe,ie)}}else Fe.isSprite&&(Fe.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,Fe.matrixWorld),A.set(g.elements[12],g.elements[13],g.elements[14],1),A.applyMatrix4(T),Xe(A,Fe,ie))}return de===!0&&R.elements.sort(_t),R};function Xe(G,ie,fe){let de=1/G.w;G.z*=de,G.z>=-1&&G.z<=1&&(p=Je(),p.id=ie.id,p.x=G.x*de,p.y=G.y*de,p.z=G.z,p.renderOrder=ie.renderOrder,p.object=ie,p.rotation=ie.rotation,p.scale.x=ie.scale.x*Math.abs(p.x-(G.x+fe.projectionMatrix.elements[0])/(G.w+fe.projectionMatrix.elements[12])),p.scale.y=ie.scale.y*Math.abs(p.y-(G.y+fe.projectionMatrix.elements[5])/(G.w+fe.projectionMatrix.elements[13])),p.material=ie.material,R.elements.push(p))}function mt(){if(t===n){let G=new Pc;return z.push(G),n++,t++,G}return z[t++]}function Ve(){if(r===o){let G=new Yn;return I.push(G),o++,r++,G}return I[r++]}function Qe(){if(c===l){let G=new qs;return O.push(G),l++,c++,G}return O[c++]}function st(){if(m===h){let G=new Ys;return Z.push(G),h++,m++,G}return Z[m++]}function Je(){if(u===S){let G=new Zs;return W.push(G),S++,u++,G}return W[u++]}function _t(G,ie){return G.renderOrder!==ie.renderOrder?G.renderOrder-ie.renderOrder:G.z!==ie.z?ie.z-G.z:G.id!==ie.id?G.id-ie.id:0}function gt(G){f[0]=G[0],f[1]=G[1],f[2]=G[2];let ie=3,fe=0;for(let de=0;de<J.length;de++){let ce=J[de];if(fe=0,ie===0)break;for(let L=0;L<ie;L++){let Fe=f[L],qe=f[(L+1)%ie],Ae=ce.sign*Fe.z+Fe.w,oe=ce.sign*qe.z+qe.w,De=Ae>=0,me=oe>=0;if(De&&me)b[fe++]=Fe;else if(De&&!me){b[fe++]=Fe;let Re=Ae/(Ae-oe),y=se[fe];y||(y=new at,se[fe]=y),y.lerpVectors(Fe,qe,Re),b[fe++]=y}else if(!De&&me){let Re=Ae/(Ae-oe),y=se[fe];y||(y=new at,se[fe]=y),y.lerpVectors(Fe,qe,Re),b[fe++]=y}}let Ne=f;f=b,b=Ne,ie=fe}return ie}function Tt(G,ie){let fe=0,de=1,ce=G.z+G.w,Ne=ie.z+ie.w,L=-G.z+G.w,Fe=-ie.z+ie.w;return ce>=0&&Ne>=0&&L>=0&&Fe>=0?!0:ce<0&&Ne<0||L<0&&Fe<0?!1:(ce<0?fe=Math.max(fe,ce/(ce-Ne)):Ne<0&&(de=Math.min(de,ce/(ce-Ne))),L<0?fe=Math.max(fe,L/(L-Fe)):Fe<0&&(de=Math.min(de,L/(L-Fe))),de<fe?!1:(G.lerp(ie,fe),ie.lerp(G,1-de),!0))}}};var jo=class{constructor(){let e,t,n,s,r,o,a,c,l,d,m,h=0,p=0,u=0,S=null,g=1,f,b,R=this,E=new Ji,A=new Ji,w=new We,_=new We,M=new We,k=new We,T=new We,U=new We,N=new D,z=new D,I=new D,O=new D,Z=new He,W=new ht,se=new ht,q=[],ee=[],te=[],Me=new Jo,Te=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=Te,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=Ut,this.info={render:{vertices:0,faces:0}},this.setQuality=function(G){switch(G){case"high":g=1;break;case"low":g=0;break}},this.setClearColor=function(G){U.set(G)},this.setPixelRatio=function(){},this.setSize=function(G,ie){s=G,r=ie,o=s/2,a=r/2,Te.setAttribute("viewBox",-o+" "+-a+" "+s+" "+r),Te.setAttribute("width",s),Te.setAttribute("height",r),E.min.set(-o,-a),E.max.set(o,a)},this.getSize=function(){return{width:s,height:r}},this.setPrecision=function(G){S=G};function J(){for(h=0;Te.childNodes.length>0;)Te.removeChild(Te.childNodes[0])}function le(G){return S!==null?G.toFixed(S):G}function _e(G,ie){let fe=G.data.renderOrder!==void 0?G.data.renderOrder:0,de=ie.data.renderOrder!==void 0?ie.data.renderOrder:0;if(fe!==de)return fe-de;{let ce=G.data.z!==void 0?G.data.z:0;return(ie.data.z!==void 0?ie.data.z:0)-ce}}this.clear=function(){J(),Te.style.backgroundColor=U.getStyle(R.outputColorSpace)},this.render=function(G,ie){if(!(ie instanceof xi)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}let fe=G.background;fe&&fe.isColor?(J(),Te.style.backgroundColor=fe.getStyle(R.outputColorSpace)):this.autoClear===!0&&this.clear(),R.info.render.vertices=0,R.info.render.faces=0,W.copy(ie.matrixWorldInverse),se.multiplyMatrices(ie.projectionMatrix,W),e=Me.projectScene(G,ie,this.sortObjects,this.sortElements),t=e.elements,n=e.lights,Z.getNormalMatrix(ie.matrixWorldInverse),Be(n),u=0;for(let de=0,ce=t.length;de<ce;de++){let Ne=t[de],L=Ne.material;L===void 0||L.opacity===0||Tt(u++,"element",Ne,L)}p=0,G.traverseVisible(function(de){if(de.isSVGObject){if(N.setFromMatrixPosition(de.matrixWorld),N.applyMatrix4(se),N.z<-1||N.z>1)return;let ce=N.x*o,Ne=-N.y*a,L=gt(p++);L.node=de.node,L.x=ce,L.y=Ne,L.z=N.z,L.renderOrder=de.renderOrder,Tt(u++,"svgObject",L,null)}}),te.length=u,this.sortElements&&p>0&&te.sort(_e),f="",b="";for(let de=0;de<u;de++){let ce=te[de];if(ce.type==="svgObject"){Je();let Ne=ce.data,L=Ne.node;L.setAttribute("transform","translate("+Ne.x+","+Ne.y+")"),Te.appendChild(L)}else{let Ne=ce.data,L=ce.material;A.makeEmpty(),Ne instanceof Zs?(c=Ne,c.x*=o,c.y*=-a,Xe(c,Ne,L)):Ne instanceof Ys?(c=Ne.v1,l=Ne.v2,c.positionScreen.x*=o,c.positionScreen.y*=-a,l.positionScreen.x*=o,l.positionScreen.y*=-a,A.setFromPoints([c.positionScreen,l.positionScreen]),E.intersectsBox(A)===!0&&mt(c,l,L)):Ne instanceof qs&&(c=Ne.v1,l=Ne.v2,d=Ne.v3,c.positionScreen.x*=o,c.positionScreen.y*=-a,l.positionScreen.x*=o,l.positionScreen.y*=-a,d.positionScreen.x*=o,d.positionScreen.y*=-a,this.overdraw>0&&(Qe(c.positionScreen,l.positionScreen,this.overdraw),Qe(l.positionScreen,d.positionScreen,this.overdraw),Qe(d.positionScreen,c.positionScreen,this.overdraw)),A.setFromPoints([c.positionScreen,l.positionScreen,d.positionScreen]),E.intersectsBox(A)===!0&&Ve(c,l,d,Ne,L))}}Je()};function Be(G){M.setRGB(0,0,0),k.setRGB(0,0,0),T.setRGB(0,0,0);for(let ie=0,fe=G.length;ie<fe;ie++){let de=G[ie],ce=de.color;de.isAmbientLight?(M.r+=ce.r,M.g+=ce.g,M.b+=ce.b):de.isDirectionalLight?(k.r+=ce.r,k.g+=ce.g,k.b+=ce.b):de.isPointLight&&(T.r+=ce.r,T.g+=ce.g,T.b+=ce.b)}}function Se(G,ie,fe,de){for(let ce=0,Ne=G.length;ce<Ne;ce++){let L=G[ce],Fe=L.color;if(L.isDirectionalLight){let qe=N.setFromMatrixPosition(L.matrixWorld).sub(z.setFromMatrixPosition(L.target.matrixWorld)).normalize(),Ae=fe.dot(qe);if(Ae<=0)continue;Ae*=L.intensity,de.r+=Fe.r*Ae,de.g+=Fe.g*Ae,de.b+=Fe.b*Ae}else if(L.isPointLight){let qe=N.setFromMatrixPosition(L.matrixWorld),Ae=fe.dot(N.subVectors(qe,ie).normalize());if(Ae<=0||(Ae*=L.distance==0?1:1-Math.min(ie.distanceTo(qe)/L.distance,1),Ae==0))continue;Ae*=L.intensity,de.r+=Fe.r*Ae,de.g+=Fe.g*Ae,de.b+=Fe.b*Ae}}}function Xe(G,ie,fe){let de=ie.scale.x*o,ce=ie.scale.y*a;fe.isPointsMaterial&&(de*=fe.size,ce*=fe.size);let Ne="M"+le(G.x-de*.5)+","+le(G.y-ce*.5)+"h"+le(de)+"v"+le(ce)+"h"+le(-de)+"z",L="";(fe.isSpriteMaterial||fe.isPointsMaterial)&&(L="fill:"+fe.color.getStyle(R.outputColorSpace)+";fill-opacity:"+fe.opacity),st(L,Ne)}function mt(G,ie,fe){let de="M"+le(G.positionScreen.x)+","+le(G.positionScreen.y)+"L"+le(ie.positionScreen.x)+","+le(ie.positionScreen.y);if(fe.isLineBasicMaterial){let ce="fill:none;stroke:"+fe.color.getStyle(R.outputColorSpace)+";stroke-opacity:"+fe.opacity+";stroke-width:"+fe.linewidth+";stroke-linecap:"+fe.linecap;fe.isLineDashedMaterial&&(ce=ce+";stroke-dasharray:"+fe.dashSize+","+fe.gapSize),st(ce,de)}}function Ve(G,ie,fe,de,ce){R.info.render.vertices+=3,R.info.render.faces++;let Ne="M"+le(G.positionScreen.x)+","+le(G.positionScreen.y)+"L"+le(ie.positionScreen.x)+","+le(ie.positionScreen.y)+"L"+le(fe.positionScreen.x)+","+le(fe.positionScreen.y)+"z",L="";ce.isMeshBasicMaterial?(w.copy(ce.color),ce.vertexColors&&w.multiply(de.color)):ce.isMeshLambertMaterial||ce.isMeshPhongMaterial||ce.isMeshStandardMaterial?(_.copy(ce.color),ce.vertexColors&&_.multiply(de.color),w.copy(M),I.copy(G.positionWorld).add(ie.positionWorld).add(fe.positionWorld).divideScalar(3),Se(n,I,de.normalModel,w),w.multiply(_).add(ce.emissive)):ce.isMeshNormalMaterial&&(O.copy(de.normalModel).applyMatrix3(Z).normalize(),w.setRGB(O.x,O.y,O.z).multiplyScalar(.5).addScalar(.5)),ce.wireframe?L="fill:none;stroke:"+w.getStyle(R.outputColorSpace)+";stroke-opacity:"+ce.opacity+";stroke-width:"+ce.wireframeLinewidth+";stroke-linecap:"+ce.wireframeLinecap+";stroke-linejoin:"+ce.wireframeLinejoin:L="fill:"+w.getStyle(R.outputColorSpace)+";fill-opacity:"+ce.opacity,st(L,Ne)}function Qe(G,ie,fe){let de=ie.x-G.x,ce=ie.y-G.y,Ne=de*de+ce*ce;if(Ne===0)return;let L=fe/Math.sqrt(Ne);de*=L,ce*=L,ie.x+=de,ie.y+=ce,G.x-=de,G.y-=ce}function st(G,ie){b===G?f+=ie:(Je(),b=G,f=ie)}function Je(){f&&(m=_t(h++),m.setAttribute("d",f),m.setAttribute("style",b),Te.appendChild(m)),f="",b=""}function _t(G){let ie=q[G];return ie===void 0&&(ie=document.createElementNS("http://www.w3.org/2000/svg","path"),g==0&&ie.setAttribute("shape-rendering","crispEdges"),q[G]=ie),ie}function gt(G){let ie=ee[G];return ie===void 0&&(ie={node:null,x:0,y:0,z:0,renderOrder:0},ee[G]=ie),ie}function Tt(G,ie,fe,de){let ce=te[G];return ce===void 0?(ce={type:ie,data:fe,material:de},te[G]=ce,ce):(ce.type=ie,ce.data=fe,ce.material=de,ce)}}};var ea=0,f0=1,p0=new D,Qh=new Is,Bc=new zt,ed=new D,Qo=new bn,ta=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new na,this.unassigned=new na,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Dc(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let c=new D;c.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(c)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let c=n[o],l=c.distanceToPoint(e.origin),d=c.normal.dot(e.direction);if(l>0&&d>=0)return null;let m=d!==0?-l/d:0;if(!(m<=0)&&(d>0?r=Math.min(m,r):s=Math.max(m,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,p0)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===ea){let c=a.distanceToPoint(t.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new D,t=new D,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],c=a.point;for(let l=0;l<3;l++)c.getComponent(l)<e.getComponent(l)&&(e.setComponent(l,c.getComponent(l)),n[l]=a);for(let l=0;l<3;l++)c.getComponent(l)>t.getComponent(l)&&(t.setComponent(l,c.getComponent(l)),s[l]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let h=0;h<3;h++){let p=s[h].point.getComponent(h)-n[h].point.getComponent(h);p>r&&(r=p,o=h)}let a=n[o],c=s[o],l,d;r=0,Qh.set(a.point,c.point);for(let h=0,p=this.vertices.length;h<p;h++){let u=e[h];if(u!==a&&u!==c){Qh.closestPointToPoint(u.point,!0,ed);let S=ed.distanceToSquared(u.point);S>r&&(r=S,l=u)}}r=-1,Bc.setFromCoplanarPoints(a.point,c.point,l.point);for(let h=0,p=this.vertices.length;h<p;h++){let u=e[h];if(u!==a&&u!==c&&u!==l){let S=Math.abs(Bc.distanceToPoint(u.point));S>r&&(r=S,d=u)}}let m=[];if(Bc.distanceToPoint(d.point)<0){m.push(yn.create(a,c,l),yn.create(d,c,a),yn.create(d,l,c),yn.create(d,a,l));for(let h=0;h<3;h++){let p=(h+1)%3;m[h+1].getEdge(2).setTwin(m[0].getEdge(p)),m[h+1].getEdge(1).setTwin(m[p+1].getEdge(0))}}else{m.push(yn.create(a,l,c),yn.create(d,a,c),yn.create(d,c,l),yn.create(d,l,a));for(let h=0;h<3;h++){let p=(h+1)%3;m[h+1].getEdge(2).setTwin(m[0].getEdge((3-h)%3)),m[h+1].getEdge(0).setTwin(m[p+1].getEdge(1))}}for(let h=0;h<4;h++)this.faces.push(m[h]);for(let h=0,p=e.length;h<p;h++){let u=e[h];if(u!==a&&u!==c&&u!==l&&u!==d){r=this.tolerance;let S=null;for(let g=0;g<4;g++){let f=this.faces[g].distanceToPoint(u.point);f>r&&(r=f,S=this.faces[g])}S!==null&&this._addVertexToFace(u,S)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===ea&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=f0;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===ea&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=yn.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},yn=class i{constructor(){this.normal=new D,this.midpoint=new D,this.area=0,this.constant=0,this.outside=null,this.mark=ea,this.edge=null}static create(e,t,n){let s=new i,r=new Ks(e,s),o=new Ks(t,s),a=new Ks(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Qo.set(e.point,t.point,n.point),Qo.getNormal(this.normal),Qo.getMidpoint(this.midpoint),this.area=Qo.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Ks=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Dc=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},na=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ia=class extends Wt{constructor(e=[]){super();let t=[],n=[],r=new ta().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],c=a.edge;do{let l=c.head().point;t.push(l.x,l.y,l.z),n.push(a.normal.x,a.normal.y,a.normal.z),c=c.next}while(c!==a.edge)}this.setAttribute("position",new bt(t,3)),this.setAttribute("normal",new bt(n,3))}};var sa=class{constructor({scale:e=2}={}){this.root=new En,this.root.scale.setScalar(e),this.groups=new Map,this.puzzle=new rs,this.highlightIds=[],this.setState(this.puzzle)}dispose(){for(let e of[...this.root.children])e.traverse(t=>{if(t.geometry?.dispose(),t.material)for(let n of Array.isArray(t.material)?t.material:[t.material])n.map?.dispose(),n.dispose()}),this.root.remove(e);this.groups.clear()}setState(e,{highlightPieceIds:t=this.highlightIds}={}){this.dispose(),this.puzzle=e.clone(),this.highlightIds=t.slice();let n=this.puzzle.renderData();for(let r of Ei){let o=this.puzzle.piece(r),a=new En;a.userData.pieceId=r,this.groups.set(r,a),this.root.add(a);let c=jh(`${o.kind}:${o.place}`),l=Bt(c.reduce(qt,[0,0,0]),1/c.length),d=c.map(h=>qt(l,Bt(qt(h,Bt(l,-1)),.987))),m=new Kt(new ia(d.map(h=>new D(...h))),new gi({color:2107442,roughness:.65,metalness:0}));m.userData={pieceId:r,kind:"body"},a.add(m);for(let h of n.filter(p=>p.pieceId===r)){let p=new Wt;p.setAttribute("position",new bt(h.vertices.flat(),3)),p.computeVertexNormals();let u=this.highlightIds.includes(r),S=new Kt(p,new gi({color:h.hex,roughness:.58,side:an,emissive:u?16777215:0,emissiveIntensity:u?.13:0}));if(S.userData={pieceId:r,stickerId:h.id,slotId:h.slotId,face:h.face},a.add(S),u){let g=new Ts(new Wt().setFromPoints(h.vertices.map(f=>new D(...qt(f,Bt(h.normal,.002))))),new Yi({color:16777215,depthTest:!0}));a.add(g)}}}let s=new Kt(new Cs(.14,12,8),new gi({color:1186082,roughness:.8}));this.root.add(s)}setHighlights(e){this.setState(this.puzzle,{highlightPieceIds:e})}previewMove(e,t){let n=this.puzzle.animationDescriptor(e),s=new Set(n.pieceIds),r=new D(...n.vector);for(let[o,a]of this.groups)a.quaternion.identity(),s.has(o)&&a.quaternion.setFromAxisAngle(r,n.angle*Math.max(0,Math.min(1,t)));return n}commitMove(e){let t=this.puzzle.clone().move(e);return this.setState(t),t}cancelPreview(){for(let e of this.groups.values())e.quaternion.identity()}};var ra=class extends sa{constructor(e={}){super(e),this.mode=e.mode||"webgl",this.setState(this.puzzle)}setState(e,t={}){super.setState(e,t);let n=this.mode==="svg";this.root.traverse(s=>{if(!s.isMesh)return;let r=s.userData.kind==="body"||!Number.isInteger(s.userData.stickerId);if(n&&r){s.visible=!1;return}let o=s.material;s.material=new qi({color:o.color.clone(),side:an}),o.dispose()})}};function td(i,{forceSVG:e=!1}={}){let t,n="webgl";if(e)n="svg";else try{t=new qo({antialias:!0,alpha:!1}),t.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),t.outputColorSpace=Ut,t.toneMapping=cn}catch{n="svg"}return n==="svg"&&(t=new jo,t.setQuality("high"),t.setPrecision(3),t.overdraw=0,t.sortObjects=!0,t.sortElements=!0,t.outputColorSpace=Ut),t.domElement.classList.add("puzzle-renderer"),t.domElement.setAttribute("aria-hidden","true"),i.appendChild(t.domElement),{renderer:t,mode:n}}var oa=class{constructor(e,{onChange:t=()=>{},turnMs:n=900,gapMs:s=450}={}){this.data=e,this.index=0,this.target=null,this.running=!1,this.motion=null,this.gap=0,this.speed=1,this.turnMs=n,this.gapMs=s,this.onChange=t}get count(){return this.data.moves.length}get paused(){return!this.running&&!!this.motion}get stageIndex(){return this.data.frames[this.index].stageIndex}get fraction(){return this.motion?Math.max(0,Math.min(1,this.motion.elapsed/this.turnMs)):0}emit(e){this.onChange(e,this)}seek(e){if(!Number.isFinite(Number(e)))throw Error("Invalid state index");this.index=Math.max(0,Math.min(this.count,Math.round(Number(e)))),this.target=null,this.running=!1,this.motion=null,this.gap=0,this.emit("seek")}setSpeed(e){if(!Number.isFinite(e)||e<.25||e>3)throw Error("Invalid playback speed");this.speed=e,this.emit("status")}play(){this.index===this.count&&!this.motion||((this.target===null||this.target===this.index)&&(this.target=this.count),this.running=!0,this.emit("status"))}pause(){this.running=!1,this.emit("status")}toggle(){this.running?this.pause():this.play()}go(e){this.target=Math.max(0,Math.min(this.count,e)),this.motion=null,this.gap=0,this.running=this.target!==this.index,this.emit("cancel"),this.running&&this.emit("status")}step(e){this.go(this.index+(e<0?-1:1))}group(e){let t=this.data.stages.map(r=>r.start),n=[...t,this.count],s=e<0?[...n].reverse().find(r=>r<this.index):n.find(r=>r>this.index);this.go(s??this.index)}tick(e){if(!this.running)return;let t=Math.max(0,Math.min(120,e))*this.speed;if(this.gap>0){let n=Math.min(this.gap,t);if(this.gap-=n,t-=n,!t)return}if(!this.motion){if(this.target===null||this.index===this.target){this.running=!1,this.target=null,this.emit("status");return}let n=Math.sign(this.target-this.index);this.motion={from:this.index,to:this.index+n,token:n>0?this.data.moves[this.index]:$h(this.data.moves[this.index-1]),elapsed:0},this.emit("motion-start")}this.motion.elapsed=Math.min(this.turnMs,this.motion.elapsed+t),this.emit("motion"),this.motion.elapsed>=this.turnMs&&(this.index=this.motion.to,this.motion=null,this.gap=this.gapMs,this.index===this.target&&(this.running=!1,this.target=null,this.gap=0),this.emit("commit"))}};function nd(i){return i.id==="edge-lb"?[-3,3.1,-7.2]:i.id==="edge-rb"?[3,3.1,-7.2]:[5.1,2.7,6.3]}var yt={schemaVersion:"rubik-web-pyraminx-1.0",id:"WP-CONTINUOUS-01",puzzle:"Pyraminx",title:"M\u1ED9t Pyraminx t\u1EEB ch\xF3p l\u1EC7ch \u0111\u1EBFn b\u1ED1n m\u1EB7t \u0111\u1ED3ng m\xE0u",disclosure:"\u0110\xE2y l\xE0 tr\u1EA1ng th\xE1i \u0111\u1EA7u \u0111\u01B0\u1EE3c chu\u1EA9n b\u1ECB \u0111\u1EC3 d\u1EA1y h\u1ECDc, kh\xF4ng ph\u1EA3i x\xE1o ng\u1EABu nhi\xEAn v\xE0 kh\xF4ng ph\u1EA3i b\u1ED9 gi\u1EA3i cho m\u1ECDi Pyraminx. Ban \u0111\u1EA7u 0/4 ch\xF3p kh\u1EDBp t\xE2m, 0/4 c\u1EE5m t\xE2m \u0111\xFAng, 0/6 c\u1EA1nh \u0111\xFAng. C\xE1c b\u01B0\u1EDBc n\u1ED1i ti\u1EBFp tr\xEAn \u0111\xFAng m\u1ED9t kh\u1ED1i, kh\xF4ng \u0111\u1ED5i ca ho\u1EB7c reset. Ba l\u1EA7n ch\xE8n \u0111\xE1y d\xF9ng ba h\u01B0\u1EDBng c\u1EE7a c\xF9ng \u0111\u1ED9ng t\xE1c. M\u1EABu c\xF3 hai v\xF2ng P-A v\xE0 m\u1ED9t P-F; kh\u1ED1i kh\xE1c c\xF3 th\u1EC3 b\u1ECF qua ho\u1EB7c c\u1EA7n nh\xE1nh kh\xE1c.",notation:"U, L, R, B g\u1ECDi b\u1ED1n \u0111\u1EC9nh, kh\xF4ng g\u1ECDi m\u1EB7t. Ch\u1EEF hoa xoay hai l\u1EDBp; ch\u1EEF th\u01B0\u1EDDng ch\u1EC9 ch\xF3p. M\u1ED7i n\u01B0\u1EDBc l\xE0 120\xB0; d\u1EA5u ph\u1EA9y \u0111\u1EA3o chi\u1EC1u. U2 t\u01B0\u01A1ng \u0111\u01B0\u01A1ng U', kh\xF4ng ph\u1EA3i 180\xB0. M\u1EB7t B trong d\u1EEF li\u1EC7u l\xE0 m\u1EB7t \u0111\u1ED1i di\u1EC7n \u0111\u1EC9nh B, t\u1EE9c m\u1EB7t tr\u01B0\u1EDBc, kh\xF4ng ph\u1EA3i n\u01B0\u1EDBc xoay B.",colorScheme:{U:{name:"\u0111\xE1y",color:"v\xE0ng",hex:"#ffd84c"},L:{name:"b\xEAn ph\u1EA3i",color:"\u0111\u1ECF",hex:"#ed5c5b"},R:{name:"b\xEAn tr\xE1i",color:"xanh d\u01B0\u01A1ng",hex:"#3994f1"},B:{name:"tr\u01B0\u1EDBc",color:"xanh l\xE1",hex:"#41c583"}},orientation:"U tr\xEAn; L tr\u01B0\u1EDBc tr\xE1i; R tr\u01B0\u1EDBc ph\u1EA3i; B ph\xEDa sau. \u0110\xE1y v\xE0ng, tr\u01B0\u1EDBc xanh l\xE1, ph\u1EA3i \u0111\u1ECF, tr\xE1i xanh d\u01B0\u01A1ng. Camera ch\u1EC9 \u0111\u1ED5i g\xF3c nh\xECn, kh\xF4ng \u0111\u1ED5i t\xEAn tr\u1EE5c.",scrambleAlgorithm:"R U' R' U R' L R L' R U' R' U' R U' R' R U' R' U' R U' R' U B U' B' L U' L' R U' R' B' R L' b r' l u'",algorithm:"u l' r b' L R' B R U R' L U L' B U B' U' R U R' U R U R' R U R' U R U R' L R' L' R U' R U R'",moves:["u","l'","r","b'","L","R'","B","R","U","R'","L","U","L'","B","U","B'","U'","R","U","R'","U","R","U","R'","R","U","R'","U","R","U","R'","L","R'","L'","R","U'","R","U","R'"],initialState:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],stages:[{id:"tips",title:"Kh\u1EDBp b\u1ED1n ch\xF3p v\u1EDBi c\u1EE5m t\xE2m b\xEAn d\u01B0\u1EDBi",algorithm:"u l' r b'",targets:["T:U","T:L","T:R","T:B"],goal:"B\u1ED1n ch\xF3p kh\u1EDBp ba m\xE0u c\u1EE7a c\u1EE5m t\xE2m ngay d\u01B0\u1EDBi ch\xFAng.",why:"Ch\xF3p ch\u1EC9 xoay t\u1EA1i ch\u1ED7. Kh\u1EDBp ch\xF3p v\u1EDBi t\xE2m ngay b\xEAn d\u01B0\u1EDBi tr\u01B0\u1EDBc, kh\xF4ng kh\u1EDBp theo m\u1EB7t \u0111\xEDch khi t\xE2m \u1EA5y c\xF2n l\u1EC7ch. C\xE1c n\u01B0\u1EDBc ch\u1EEF hoa sau \u0111\xF3 s\u1EBD mang ch\xF3p v\xE0 t\xE2m c\xF9ng \u0111i.",check:"C\u1EA3 b\u1ED1n ch\xF3p kh\u1EDBp c\u1EE5m t\xE2m c\u1EE7a ch\xEDnh n\xF3; v\u1ECB tr\xED v\xE0 h\u01B0\u1EDBng c\u1EE7a s\xE1u c\u1EA1nh kh\xF4ng \u0111\u1ED5i.",next:"Ch\xF3p \u0111\xE3 \u0111i c\xF9ng t\xE2m. Ta \u0111\u1EB7t ba c\u1EE5m t\xE2m c\xF3 v\xE0ng v\u1EC1 \u0111\xE1y.",preserve:"To\xE0n b\u1ED9 c\u1EA1nh v\xE0 c\u1EE5m t\xE2m.",checkId:"tips-aligned",index:0,start:0,endExclusive:4,moves:["u","l'","r","b'"],highlightPieceIds:["T:U","T:L","T:R","T:B"],highlightIds:[0,1,2,3,4,5,6,7,8,9,10,11],find:"T:U: \u1EDF U; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:L: \u1EDF L; v\xE0ng nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:R: \u1EDF R; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:B: \u1EDF B; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",beforeMetrics:{tipsAligned:[],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:[],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},beforeState:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],afterState:[1,2,0,4,5,3,7,8,6,10,11,9,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],selectedPieces:[{id:"T:U",atStageStart:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:0,slot:0,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:1,slot:1,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:2,slot:2,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},afterStage:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{id:"T:L",atStageStart:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:3,slot:3,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:4,slot:4,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:5,slot:5,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},afterStage:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:4,slot:3,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:5,slot:4,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:3,slot:5,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{id:"T:R",atStageStart:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:6,slot:6,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:7,slot:7,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:8,slot:8,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},afterStage:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:7,slot:6,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:8,slot:7,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:6,slot:8,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{id:"T:B",atStageStart:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},afterStage:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:10,slot:9,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:11,slot:10,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:9,slot:11,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]},{id:"center-l",title:"\u0110\u01B0a \xF4 v\xE0ng c\u1EE7a t\xE2m L xu\u1ED1ng \u0111\xE1y",algorithm:"L",targets:["C:L"],goal:"T\xE2m L c\xF3 v\xE0ng xu\u1ED1ng d\u01B0\u1EDBi v\xE0 xanh l\xE1 ra tr\u01B0\u1EDBc.",why:"Ch\u1EEF L l\u1EDBn xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh L m\u1ED9t n\u1EA5c 120\xB0. L\u01B0\u1EE3t n\xE0y \u0111\u01B0a \xF4 v\xE0ng \u0111ang l\u1EC7ch v\u1EC1 \u0111\xE1y. C\u1EA1nh \u0111\u01B0\u1EE3c ph\xE9p ch\u1EA1y v\xEC ch\u01B0a c\xF3 t\u1EA7ng n\xE0o ho\xE0n ch\u1EC9nh.",check:"C\u1EE5m t\xE2m L \u0111\xFAng ba m\xE0u; ch\xF3p L v\u1EABn kh\u1EDBp n\xF3.",next:"T\xECm \xF4 v\xE0ng tr\xEAn c\u1EE5m t\xE2m R.",preserve:"Ch\xF3p v\u1EABn kh\u1EDBp t\xE2m; c\xE1c c\u1EE5m t\xE2m tr\xEAn tr\u1EE5c kh\xE1c kh\xF4ng xoay.",checkId:"center-L",index:1,start:4,endExclusive:5,moves:["L"],highlightPieceIds:["C:L"],highlightIds:[15,16,17],find:"C:L: \u1EDF L; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:[],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L"],solvedCenters:["C:L"],solvedEdges:[],correctlyPlacedEdges:["E:UL","E:UB","E:LR"],solvedBottomEdges:[],isSolved:!1},beforeState:[1,2,0,4,5,3,7,8,6,10,11,9,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],afterState:[1,2,0,3,4,5,7,8,6,10,11,9,13,14,12,15,16,17,19,20,18,22,23,21,25,24,35,34,29,28,31,30,27,26,33,32],selectedPieces:[{id:"C:L",atStageStart:{pieceId:"C:L",kind:"C",home:"L",place:"L",stickers:[{id:16,slot:15,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:17,slot:16,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:15,slot:17,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"C:L",kind:"C",home:"L",place:"L",stickers:[{id:15,slot:15,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:16,slot:16,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:17,slot:17,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]},{id:"center-r",title:"\u0110\u01B0a \xF4 v\xE0ng c\u1EE7a t\xE2m R xu\u1ED1ng \u0111\xE1y",algorithm:"R'",targets:["C:R"],goal:"T\xE2m R c\xF3 v\xE0ng xu\u1ED1ng d\u01B0\u1EDBi v\xE0 xanh l\xE1 ra tr\u01B0\u1EDBc.",why:"\u1EDE tr\u1EA1ng th\xE1i n\xE0y c\u1EA7n R ng\u01B0\u1EE3c 120\xB0, kh\xF4ng d\xF9ng R thu\u1EADn theo th\xF3i quen t\u1EEB kh\u1ED1i l\u1EADp ph\u01B0\u01A1ng.",check:"T\xE2m R \u0111\xFAng; hai \xF4 t\xE2m xanh l\xE1 \u1EDF ph\xEDa tr\u01B0\u1EDBc \u0111\xE3 kh\u1EDBp nhau.",next:"C\xF2n t\xE2m B \u1EDF ph\xEDa sau. \u0110\u1ED5i g\xF3c quan s\xE1t \u0111\u1EC3 nh\xECn v\xE0ng c\u1EE7a n\xF3, kh\xF4ng \u0111\u1ED5i t\xEAn tr\u1EE5c.",preserve:"T\xE2m L \u0111\xE3 \u0111\xFAng v\xE0 ch\xF3p v\u1EABn kh\u1EDBp t\xE2m.",checkId:"center-R",index:2,start:5,endExclusive:6,moves:["R'"],highlightPieceIds:["C:R"],highlightIds:[18,19,20],find:"C:R: \u1EDF R; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L"],solvedCenters:["C:L"],solvedEdges:[],correctlyPlacedEdges:["E:UL","E:UB","E:LR"],solvedBottomEdges:[],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R"],solvedCenters:["C:L","C:R"],solvedEdges:[],correctlyPlacedEdges:["E:UL","E:UB"],solvedBottomEdges:[],isSolved:!1},beforeState:[1,2,0,3,4,5,7,8,6,10,11,9,13,14,12,15,16,17,19,20,18,22,23,21,25,24,35,34,29,28,31,30,27,26,33,32],afterState:[1,2,0,3,4,5,6,7,8,10,11,9,13,14,12,15,16,17,18,19,20,22,23,21,25,24,33,32,29,28,34,35,27,26,30,31],selectedPieces:[{id:"C:R",atStageStart:{pieceId:"C:R",kind:"C",home:"R",place:"R",stickers:[{id:19,slot:18,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:20,slot:19,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:18,slot:20,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"C:R",kind:"C",home:"R",place:"R",stickers:[{id:18,slot:18,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:19,slot:19,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:20,slot:20,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]},{id:"center-b",title:"Ho\xE0n t\u1EA5t ba t\xE2m \u0111\xE1y",algorithm:"B",targets:["C:B"],goal:"Ba \xF4 t\xE2m v\xE0ng \u1EDF \u0111\xE1y c\xF9ng h\u01B0\u1EDBng xu\u1ED1ng.",why:"T\xE2m B c\xF3 v\xE0ng n\xEAn thu\u1ED9c ba c\u1EE5m \u0111\xE1y. T\xE2m U kh\xF4ng c\xF3 v\xE0ng. Ch\u1EC9nh B ho\xE0n t\u1EA5t b\u1ED9 m\u1ED1c x\xE1c \u0111\u1ECBnh n\u01A1i \u1EDF c\u1EE7a ba c\u1EA1nh v\xE0ng.",check:"Ba t\xE2m L, R, B \u0111\xFAng. Ch\u01B0a c\xF3 c\u1EA1nh \u0111\xE1y n\xE0o \u0111\xFAng trong m\u1EABu n\xE0y.",next:"T\xECm c\u1EA1nh v\xE0ng\u2013xanh l\xE1 \u0111\u1EC3 ch\xE8n v\xE0o khe LR.",preserve:"Hai t\xE2m L, R v\xE0 quan h\u1EC7 ch\xF3p\u2013t\xE2m.",checkId:"bottom-centers",index:3,start:6,endExclusive:7,moves:["B"],highlightPieceIds:["C:B"],highlightIds:[21,22,23],find:"C:B: \u1EDF B; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra b\xEAn tr\xE1i.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R"],solvedCenters:["C:L","C:R"],solvedEdges:[],correctlyPlacedEdges:["E:UL","E:UB"],solvedBottomEdges:[],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:[],correctlyPlacedEdges:["E:UL"],solvedBottomEdges:[],isSolved:!1},beforeState:[1,2,0,3,4,5,6,7,8,10,11,9,13,14,12,15,16,17,18,19,20,22,23,21,25,24,33,32,29,28,34,35,27,26,30,31],afterState:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,33,32,30,31,34,35,28,29,26,27],selectedPieces:[{id:"C:B",atStageStart:{pieceId:"C:B",kind:"C",home:"B",place:"B",stickers:[{id:22,slot:21,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:23,slot:22,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:21,slot:23,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1},afterStage:{pieceId:"C:B",kind:"C",home:"B",place:"B",stickers:[{id:21,slot:21,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:22,slot:22,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:23,slot:23,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]},{id:"edge-lr",title:"Ch\xE8n c\u1EA1nh v\xE0ng\u2013xanh l\xE1 v\xE0o LR",algorithm:"R U R'",targets:["E:LR"],goal:"C\u1EA1nh v\xE0ng\u2013xanh l\xE1 v\u1EC1 khe \u0111\xE1y tr\u01B0\u1EDBc LR, v\xE0ng xu\u1ED1ng.",why:"C\u1EA1nh m\u1EE5c ti\xEAu \u0111ang \u1EDF UB, v\xE0ng nh\xECn ra m\u1EB7t b\xEAn ph\u1EA3i. R m\u1EDF khe, U chuy\u1EC3n c\u1EA1nh, R ng\u01B0\u1EE3c \u0111\xF3ng khe. \u0110\xE2y \u0111\xFAng ca ch\xE8n ph\u1EA3i trong t\xE0i li\u1EC7u, \u0111\u01B0\u1EE3c ki\u1EC3m l\u1EA1i b\u1EB1ng m\xF4 h\xECnh t\u1EE9 di\u1EC7n.",check:"LR \u0111\xFAng c\u1EA3 hai m\xE0u. Ba t\xE2m \u0111\xE1y tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 ba n\u01B0\u1EDBc.",next:"T\xECm c\u1EA1nh v\xE0ng\u2013xanh d\u01B0\u01A1ng, kh\xF4ng x\xE1o l\u1EA1i hay \u0111\u1EB7t sang ca kh\xE1c.",preserve:"C\xE1c t\xE2m \u0111\xE1y tr\u1EDF v\u1EC1 \u0111\xFAng \u1EDF cu\u1ED1i nh\xF3m. T\xE2m U \u0111\u01B0\u1EE3c d\xF9ng l\xE0m v\xF9ng thao t\xE1c.",checkId:"edge-LR",camera:[3.9000000000000004,2.4000000000000004,6.75],index:4,start:7,endExclusive:10,moves:["R","U","R'"],highlightPieceIds:["E:LR"],highlightIds:[30,31],find:"E:LR: \u1EDF UB; v\xE0ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:[],correctlyPlacedEdges:["E:UL"],solvedBottomEdges:[],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:LR"],correctlyPlacedEdges:["E:LR"],solvedBottomEdges:["E:LR"],isSolved:!1},beforeState:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,33,32,30,31,34,35,28,29,26,27],afterState:[2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,34,35,33,32,25,24,30,31,28,29,26,27],selectedPieces:[{id:"E:LR",atStageStart:{pieceId:"E:LR",kind:"E",home:"LR",place:"UB",stickers:[{id:30,slot:28,face:"L",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn ph\u1EA3i"},{id:31,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},afterStage:{pieceId:"E:LR",kind:"E",home:"LR",place:"LR",stickers:[{id:30,slot:30,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:31,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}]},{id:"edge-lb",title:"Ch\xE8n c\u1EA1nh v\xE0ng\u2013xanh d\u01B0\u01A1ng v\xE0o LB",algorithm:"L U L'",targets:["E:LB"],goal:"C\u1EA1nh v\xE0ng\u2013xanh d\u01B0\u01A1ng v\u1EC1 khe \u0111\xE1y tr\xE1i\u2013sau LB.",why:"\u0110\xE2y v\u1EABn l\xE0 m\u1EDF\u2013chuy\u1EC3n\u2013\u0111\xF3ng, quanh tr\u1EE5c L trong h\u1EC7 t\xEAn c\u1ED1 \u0111\u1ECBnh. \u0110\xEDch l\xE0 LB v\xE0 c\u1EA1nh \u0111ang \u1EDF UR. M\xE0n h\xECnh chuy\u1EC3n g\xF3c nh\xECn \u0111\u1EC3 th\u1EA5y m\u1EB7t tr\xE1i; ch\u1EEF tr\xEAn tr\u1EE5c kh\xF4ng \u0111\u1ED5i. Kh\xF4ng \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ECDc L th\xE0nh R theo v\u1ECB tr\xED m\u1EDBi tr\xEAn m\xE0n h\xECnh.",check:"LR v\xE0 LB \u0111\u1EC1u \u0111\xFAng. C\u1EA1nh LR v\u1EEBa l\xE0m \u0111\u01B0\u1EE3c gi\u1EEF nguy\xEAn sau c\u1EA3 nh\xF3m.",next:"T\xECm c\u1EA1nh v\xE0ng\u2013\u0111\u1ECF c\xF2n l\u1EA1i.",preserve:"C\u1EA1nh LR \u0111\xE3 gi\u1EA3i v\xE0 ba t\xE2m \u0111\xE1y, x\xE9t \u1EDF cu\u1ED1i nh\xF3m.",checkId:"edge-LB",camera:[-7.199999999999999,3.3000000000000003,-1.0499999999999998],index:5,start:10,endExclusive:13,moves:["L","U","L'"],highlightPieceIds:["E:LB"],highlightIds:[32,33],find:"E:LB: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:LR"],correctlyPlacedEdges:["E:LR"],solvedBottomEdges:["E:LR"],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB"],correctlyPlacedEdges:["E:UB","E:LR","E:LB"],solvedBottomEdges:["E:LR","E:LB"],isSolved:!1},beforeState:[2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,34,35,33,32,25,24,30,31,28,29,26,27],afterState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34,35,24,25,28,29,30,31,32,33,26,27],selectedPieces:[{id:"E:LB",atStageStart:{pieceId:"E:LB",kind:"E",home:"LB",place:"UR",stickers:[{id:33,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:32,slot:27,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:LB",kind:"E",home:"LB",place:"LB",stickers:[{id:32,slot:32,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:33,slot:33,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}]},{id:"edge-rb",title:"Ch\xE8n c\u1EA1nh v\xE0ng\u2013\u0111\u1ECF v\xE0o RB",algorithm:"B U B'",targets:["E:RB"],goal:"C\u1EA1nh v\xE0ng\u2013\u0111\u1ECF v\u1EC1 khe \u0111\xE1y ph\u1EA3i\u2013sau RB.",why:"\u0110\xEDch l\xE0 RB v\xE0 c\u1EA1nh \u0111ang \u1EDF UL. B m\u1EDF, U chuy\u1EC3n, B ng\u01B0\u1EE3c \u0111\xF3ng. \u0110\xE2y l\xE0 c\xF9ng ph\xE9p ch\xE8n \u0111\u01B0\u1EE3c chuy\u1EC3n sang tr\u1EE5c ph\xEDa sau, kh\xF4ng ph\u1EA3i n\u01B0\u1EDBc B xoay m\u1EB7t sau c\u1EE7a 3\xD73.",check:"\u0110\u1EE7 ba c\u1EA1nh \u0111\xE1y \u0111\xFAng c\u1EA3 v\xE0ng l\u1EABn m\xE0u b\xEAn. M\u1EB7t \u0111\xE1y v\xE0 d\u1EA3i c\u1EA1nh b\xEAn \u0111\u1ED3ng th\u1EDDi kh\u1EDBp.",next:"T\xE2m tr\xEAn U \u0111ang l\u1EC7ch m\u1ED9t n\u1EA5c; nh\xECn ba m\xE0u t\xE2m tr\u01B0\u1EDBc khi s\u1EEDa.",preserve:"Hai c\u1EA1nh LR, LB v\xE0 ba t\xE2m \u0111\xE1y \u1EDF cu\u1ED1i nh\xF3m.",checkId:"bottom-edges",camera:[7.199999999999999,3.3000000000000003,-1.0499999999999998],index:6,start:13,endExclusive:16,moves:["B","U","B'"],highlightPieceIds:["E:RB"],highlightIds:[34,35],find:"E:RB: \u1EDF UL; v\xE0ng nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB"],correctlyPlacedEdges:["E:UB","E:LR","E:LB"],solvedBottomEdges:["E:LR","E:LB"],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},beforeState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34,35,24,25,28,29,30,31,32,33,26,27],afterState:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35],selectedPieces:[{id:"E:RB",atStageStart:{pieceId:"E:RB",kind:"E",home:"RB",place:"UL",stickers:[{id:34,slot:24,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"},{id:35,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:RB",kind:"E",home:"RB",place:"RB",stickers:[{id:34,slot:34,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:35,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!0}}]},{id:"center-u",title:"Ch\u1EC9nh c\u1EE5m t\xE2m tr\xEAn",algorithm:"U'",targets:["C:U"],goal:"T\u1EA5t c\u1EA3 b\u1ED1n c\u1EE5m t\xE2m \u0111\xFAng ba m\u1EB7t.",why:"\u1EDE tr\u1EA1ng th\xE1i c\u1EE5 th\u1EC3 n\xE0y c\u1EA7n U ng\u01B0\u1EE3c. Ba c\u1EA1nh \u0111\xE1y kh\xF4ng thu\u1ED9c l\u1EDBp U n\xEAn v\u1EABn gi\u1EEF nguy\xEAn. Nh\u1EEFng c\u1EA1nh tr\xEAn \u0111ang t\u1EA1m \u0111\xFAng ch\u1ED7 kh\xF4ng ph\u1EA3i l\xFD do \u0111\u1EC3 b\u1ECF qua t\xE2m l\u1EC7ch.",check:"B\u1ED1n t\xE2m, b\u1ED1n ch\xF3p v\xE0 to\xE0n b\u1ED9 t\u1EA7ng \u0111\xE1y \u0111\xE3 \u0111\xFAng. Ba c\u1EA1nh tr\xEAn c\xF2n sai ch\u1ED7.",next:"\u0110\u1ECDc tr\u1ECDn hai m\xE0u c\u1EE7a UL, UR, UB \u0111\u1EC3 ch\u1ECDn chu tr\xECnh.",preserve:"To\xE0n b\u1ED9 t\u1EA7ng \u0111\xE1y.",checkId:"all-centers",index:7,start:16,endExclusive:17,moves:["U'"],highlightPieceIds:["C:U"],highlightIds:[12,13,14],find:"C:U: \u1EDF U; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},beforeState:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35],afterState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28,29,24,25,26,27,30,31,32,33,34,35],selectedPieces:[{id:"C:U",atStageStart:{pieceId:"C:U",kind:"C",home:"U",place:"U",stickers:[{id:13,slot:12,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:14,slot:13,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:12,slot:14,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"C:U",kind:"C",home:"U",place:"U",stickers:[{id:12,slot:12,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:13,slot:13,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:14,slot:14,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]},{id:"cycle-1",title:"Ch\u1EA1y ba c\u1EA1nh tr\xEAn: v\xF2ng th\u1EE9 nh\u1EA5t",algorithm:"R U R' U R U R'",targets:["E:UL","E:UR","E:UB"],goal:"Theo d\xF5i \u0111\u01B0\u1EDDng \u0111i UL \u2192 UR \u2192 UB \u2192 UL.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"T\u1EA7ng \u0111\xE1y v\xE0 c\xE1c t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng. Ba c\u1EA1nh tr\xEAn v\u1EABn ch\u01B0a \u0111\xFAng v\u1ECB tr\xED, nh\u01B0ng \u0111\xE3 ti\u1EBFn m\u1ED9t v\xF2ng.",next:"\u0110\u1ECDc l\u1EA1i v\u1ECB tr\xED c\u1EA1nh; l\xE0m P-A th\xEAm m\u1ED9t l\u1EA7n v\u1EDBi nguy\xEAn h\u1EC7 tr\u1EE5c.",preserve:"T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u0111\u01B0\u1EE3c kh\xF4i ph\u1EE5c sau \u0111\u1EE7 b\u1EA3y n\u01B0\u1EDBc.",checkId:"cycle-one",index:8,start:17,endExclusive:24,moves:["R","U","R'","U","R","U","R'"],highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i. E:UB: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},beforeState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28,29,24,25,26,27,30,31,32,33,34,35],afterState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,28,25,24,30,31,32,33,34,35],selectedPieces:[{id:"E:UL",atStageStart:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1}},{id:"E:UR",atStageStart:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},afterStage:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{id:"E:UB",atStageStart:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]},{id:"cycle-2",title:"Ch\u1EA1y ba c\u1EA1nh tr\xEAn: v\u1EC1 \u0111\xFAng khe",algorithm:"R U R' U R U R'",targets:["E:UL","E:UR","E:UB"],goal:"C\u1EA3 s\xE1u c\u1EA1nh c\xF3 \u0111\xFAng c\u1EB7p m\xE0u c\u1EE7a khe.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"UL, UR, UB \u0111\xFAng c\u1EB7p m\xE0u t\u1EA1i \u0111\xFAng khe. UB \u0111\xFAng h\u01B0\u1EDBng; UL v\xE0 UR ng\u01B0\u1EE3c h\u01B0\u1EDBng.",next:"Gi\u1EEF c\u1EA1nh \u0111\xFAng UB \u1EDF ph\xEDa sau r\u1ED3i l\u1EADt c\u1EB7p c\u1EA1nh tr\u01B0\u1EDBc.",preserve:"T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u1EDF cu\u1ED1i nh\xF3m.",checkId:"edges-placed",index:9,start:24,endExclusive:31,moves:["R","U","R'","U","R","U","R'"],highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UB; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i. E:UR: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},beforeState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,28,25,24,30,31,32,33,34,35],afterState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35],selectedPieces:[{id:"E:UL",atStageStart:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1},afterStage:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{id:"E:UR",atStageStart:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{id:"E:UB",atStageStart:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]},{id:"flip-pair",title:"L\u1EADt hai c\u1EA1nh tr\u01B0\u1EDBc v\xE0 ho\xE0n t\u1EA5t",algorithm:"L R' L' R U' R U R'",targets:["E:UL","E:UR"],goal:"Hai c\u1EA1nh tr\u01B0\u1EDBc \u0111\xFAng h\u01B0\u1EDBng; b\u1ED1n m\u1EB7t \u0111\u1ED3ng m\xE0u.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"B\u1ED1n m\u1EB7t \u0111\u1ED3ng m\xE0u; \u0111\u1EE7 4 ch\xF3p, 4 c\u1EE5m t\xE2m v\xE0 6 c\u1EA1nh \u0111\xFAng. Ki\u1EC3m c\u1EA3 \u0111\xE1y v\xE0 ph\xEDa sau.",next:"\u0110\xE3 xong m\u1EABu li\xEAn t\u1EE5c. L\u1EA7n sau nh\u1EADn \u0111i\u1EC1u ki\u1EC7n \u1EDF t\u1EEBng ch\u1EB7ng, kh\xF4ng h\u1ECDc thu\u1ED9c to\xE0n b\u1ED9 chu\u1ED7i 39 n\u01B0\u1EDBc.",preserve:"T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc.",checkId:"solved",index:10,start:31,endExclusive:39,moves:["L","R'","L'","R","U'","R","U","R'"],highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF UL; xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",beforeMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},afterMetrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!0},beforeState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35],afterState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],selectedPieces:[{id:"E:UL",atStageStart:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:24,slot:24,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:25,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}},{id:"E:UR",atStageStart:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},afterStage:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:26,slot:26,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],camera:[3.5999999999999996,2.0250000000000004,6.449999999999999]}],steps:[{index:0,stageIndex:0,token:"u",groupMoveIndex:0,groupMoveCount:4,animation:{token:"u",axis:"U",tip:!0,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"tip",origin:[0,0,0],stickerIds:[0,1,2],pieceIds:["T:U"]},targets:[{before:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:0,slot:0,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:1,slot:1,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:2,slot:2,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:3,slot:3,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:4,slot:4,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:5,slot:5,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:3,slot:3,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:4,slot:4,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:5,slot:5,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}},{before:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:6,slot:6,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:7,slot:7,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:8,slot:8,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:6,slot:6,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:7,slot:7,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:8,slot:8,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}},{before:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},after:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"0,1,2,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",afterSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32"},{index:1,stageIndex:0,token:"l'",groupMoveIndex:1,groupMoveCount:4,animation:{token:"l'",axis:"L",tip:!0,power:-1,angle:2.0943951023931953,vector:[-.816496580927726,-.3333333333333333,.47140452079103173],kind:"tip",origin:[0,0,0],stickerIds:[3,4,5],pieceIds:["T:L"]},targets:[{before:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:3,slot:3,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:4,slot:4,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:5,slot:5,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:4,slot:3,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:5,slot:4,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:3,slot:5,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:6,slot:6,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:7,slot:7,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:8,slot:8,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:6,slot:6,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:7,slot:7,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:8,slot:8,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}},{before:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},after:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",afterSignature:"1,2,0,4,5,3,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32"},{index:2,stageIndex:0,token:"r",groupMoveIndex:2,groupMoveCount:4,animation:{token:"r",axis:"R",tip:!0,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"tip",origin:[0,0,0],stickerIds:[6,7,8],pieceIds:["T:R"]},targets:[{before:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:4,slot:3,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:5,slot:4,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:3,slot:5,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:4,slot:3,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:5,slot:4,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:3,slot:5,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:6,slot:6,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:7,slot:7,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:8,slot:8,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:7,slot:6,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:8,slot:7,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:6,slot:8,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},after:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"1,2,0,4,5,3,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",afterSignature:"1,2,0,4,5,3,7,8,6,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32"},{index:3,stageIndex:0,token:"b'",groupMoveIndex:3,groupMoveCount:4,animation:{token:"b'",axis:"B",tip:!0,power:-1,angle:2.0943951023931953,vector:[0,-.3333333333333333,-.9428090415820635],kind:"tip",origin:[0,0,0],stickerIds:[9,10,11],pieceIds:["T:B"]},targets:[{before:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"T:U",kind:"T",home:"U",place:"U",stickers:[{id:1,slot:0,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:2,slot:1,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:0,slot:2,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:4,slot:3,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:5,slot:4,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:3,slot:5,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"T:L",kind:"T",home:"L",place:"L",stickers:[{id:4,slot:3,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:5,slot:4,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:3,slot:5,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:7,slot:6,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:8,slot:7,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:6,slot:8,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"T:R",kind:"T",home:"R",place:"R",stickers:[{id:7,slot:6,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:8,slot:7,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:6,slot:8,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:9,slot:9,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:10,slot:10,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:11,slot:11,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},after:{pieceId:"T:B",kind:"T",home:"B",place:"B",stickers:[{id:10,slot:9,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:11,slot:10,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:9,slot:11,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1}}],beforeSignature:"1,2,0,4,5,3,7,8,6,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",afterSignature:"1,2,0,4,5,3,7,8,6,10,11,9,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32"},{index:4,stageIndex:1,token:"L",groupMoveIndex:0,groupMoveCount:1,animation:{token:"L",axis:"L",tip:!1,power:1,angle:-2.0943951023931953,vector:[-.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[4,5,3,16,17,15,30,31,26,27,25,24],pieceIds:["T:L","C:L","E:LR","E:UR","E:UL"]},targets:[{before:{pieceId:"C:L",kind:"C",home:"L",place:"L",stickers:[{id:16,slot:15,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:17,slot:16,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:15,slot:17,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"C:L",kind:"C",home:"L",place:"L",stickers:[{id:15,slot:15,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:16,slot:16,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:17,slot:17,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],beforeSignature:"1,2,0,4,5,3,7,8,6,10,11,9,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",afterSignature:"1,2,0,3,4,5,7,8,6,10,11,9,13,14,12,15,16,17,19,20,18,22,23,21,25,24,35,34,29,28,31,30,27,26,33,32"},{index:5,stageIndex:2,token:"R'",groupMoveIndex:0,groupMoveCount:1,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[7,8,6,19,20,18,35,34,31,30,33,32],pieceIds:["T:R","C:R","E:RB","E:LR","E:LB"]},targets:[{before:{pieceId:"C:R",kind:"C",home:"R",place:"R",stickers:[{id:19,slot:18,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:20,slot:19,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:18,slot:20,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"C:R",kind:"C",home:"R",place:"R",stickers:[{id:18,slot:18,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:19,slot:19,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:20,slot:20,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],beforeSignature:"1,2,0,3,4,5,7,8,6,10,11,9,13,14,12,15,16,17,19,20,18,22,23,21,25,24,35,34,29,28,31,30,27,26,33,32",afterSignature:"1,2,0,3,4,5,6,7,8,10,11,9,13,14,12,15,16,17,18,19,20,22,23,21,25,24,33,32,29,28,34,35,27,26,30,31"},{index:6,stageIndex:3,token:"B",groupMoveIndex:0,groupMoveCount:1,animation:{token:"B",axis:"B",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,-.3333333333333333,-.9428090415820635],kind:"body",origin:[0,0,0],stickerIds:[10,11,9,22,23,21,29,28,27,26,30,31],pieceIds:["T:B","C:B","E:UB","E:UR","E:LR"]},targets:[{before:{pieceId:"C:B",kind:"C",home:"B",place:"B",stickers:[{id:22,slot:21,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:23,slot:22,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:21,slot:23,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"C:B",kind:"C",home:"B",place:"B",stickers:[{id:21,slot:21,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:22,slot:22,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:23,slot:23,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"1,2,0,3,4,5,6,7,8,10,11,9,13,14,12,15,16,17,18,19,20,22,23,21,25,24,33,32,29,28,34,35,27,26,30,31",afterSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,33,32,30,31,34,35,28,29,26,27"},{index:7,stageIndex:4,token:"R",groupMoveIndex:0,groupMoveCount:3,animation:{token:"R",axis:"R",tip:!1,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[6,7,8,18,19,20,33,32,34,35,26,27],pieceIds:["T:R","C:R","E:LB","E:RB","E:UR"]},targets:[{before:{pieceId:"E:LR",kind:"E",home:"LR",place:"UB",stickers:[{id:30,slot:28,face:"L",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn ph\u1EA3i"},{id:31,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:LR",kind:"E",home:"LR",place:"UB",stickers:[{id:30,slot:28,face:"L",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn ph\u1EA3i"},{id:31,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1}}],beforeSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,33,32,30,31,34,35,28,29,26,27",afterSignature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,25,24,35,34,30,31,27,26,28,29,33,32"},{index:8,stageIndex:4,token:"U",groupMoveIndex:1,groupMoveCount:3,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[1,2,0,13,14,12,25,24,35,34,30,31],pieceIds:["T:U","C:U","E:UL","E:RB","E:LR"]},targets:[{before:{pieceId:"E:LR",kind:"E",home:"LR",place:"UB",stickers:[{id:30,slot:28,face:"L",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn ph\u1EA3i"},{id:31,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:LR",kind:"E",home:"LR",place:"UR",stickers:[{id:31,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:30,slot:27,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,25,24,35,34,30,31,27,26,28,29,33,32",afterSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,34,35,31,30,25,24,27,26,28,29,33,32"},{index:9,stageIndex:4,token:"R'",groupMoveIndex:2,groupMoveCount:3,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[7,8,6,19,20,18,31,30,27,26,33,32],pieceIds:["T:R","C:R","E:LR","E:UR","E:LB"]},targets:[{before:{pieceId:"E:LR",kind:"E",home:"LR",place:"UR",stickers:[{id:31,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:30,slot:27,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:LR",kind:"E",home:"LR",place:"LR",stickers:[{id:30,slot:30,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:31,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],beforeSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,34,35,31,30,25,24,27,26,28,29,33,32",afterSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,34,35,33,32,25,24,30,31,28,29,26,27"},{index:10,stageIndex:5,token:"L",groupMoveIndex:0,groupMoveCount:3,animation:{token:"L",axis:"L",tip:!1,power:1,angle:-2.0943951023931953,vector:[-.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[3,4,5,15,16,17,34,35,30,31,28,29],pieceIds:["T:L","C:L","E:RB","E:LR","E:UB"]},targets:[{before:{pieceId:"E:LB",kind:"E",home:"LB",place:"UR",stickers:[{id:33,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:32,slot:27,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:LB",kind:"E",home:"LB",place:"UR",stickers:[{id:33,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:32,slot:27,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,34,35,33,32,25,24,30,31,28,29,26,27",afterSignature:"2,0,1,5,3,4,6,7,8,9,10,11,14,12,13,17,15,16,18,19,20,21,22,23,28,29,33,32,25,24,35,34,31,30,26,27"},{index:11,stageIndex:5,token:"U",groupMoveIndex:1,groupMoveCount:3,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[2,0,1,14,12,13,28,29,33,32,25,24],pieceIds:["T:U","C:U","E:UB","E:LB","E:UL"]},targets:[{before:{pieceId:"E:LB",kind:"E",home:"LB",place:"UR",stickers:[{id:33,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:32,slot:27,face:"B",color:"U",colorVi:"v\xE0ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:LB",kind:"E",home:"LB",place:"UL",stickers:[{id:32,slot:24,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"},{id:33,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"2,0,1,5,3,4,6,7,8,9,10,11,14,12,13,17,15,16,18,19,20,21,22,23,28,29,33,32,25,24,35,34,31,30,26,27",afterSignature:"0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,24,25,28,29,35,34,31,30,26,27"},{index:12,stageIndex:5,token:"L'",groupMoveIndex:2,groupMoveCount:3,animation:{token:"L'",axis:"L",tip:!1,power:-1,angle:2.0943951023931953,vector:[-.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[5,3,4,17,15,16,32,33,35,34,31,30],pieceIds:["T:L","C:L","E:LB","E:RB","E:LR"]},targets:[{before:{pieceId:"E:LB",kind:"E",home:"LB",place:"UL",stickers:[{id:32,slot:24,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"},{id:33,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:LB",kind:"E",home:"LB",place:"LB",stickers:[{id:32,slot:32,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:33,slot:33,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,24,25,28,29,35,34,31,30,26,27",afterSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34,35,24,25,28,29,30,31,32,33,26,27"},{index:13,stageIndex:6,token:"B",groupMoveIndex:0,groupMoveCount:3,animation:{token:"B",axis:"B",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,-.3333333333333333,-.9428090415820635],kind:"body",origin:[0,0,0],stickerIds:[9,10,11,21,22,23,28,29,32,33,26,27],pieceIds:["T:B","C:B","E:UB","E:LB","E:UR"]},targets:[{before:{pieceId:"E:RB",kind:"E",home:"RB",place:"UL",stickers:[{id:34,slot:24,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"},{id:35,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:RB",kind:"E",home:"RB",place:"UL",stickers:[{id:34,slot:24,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"},{id:35,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34,35,24,25,28,29,30,31,32,33,26,27",afterSignature:"0,1,2,3,4,5,6,7,8,11,9,10,12,13,14,15,16,17,18,19,20,23,21,22,34,35,24,25,26,27,30,31,29,28,33,32"},{index:14,stageIndex:6,token:"U",groupMoveIndex:1,groupMoveCount:3,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[0,1,2,12,13,14,34,35,24,25,26,27],pieceIds:["T:U","C:U","E:RB","E:UL","E:UR"]},targets:[{before:{pieceId:"E:RB",kind:"E",home:"RB",place:"UL",stickers:[{id:34,slot:24,face:"R",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn tr\xE1i"},{id:35,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:RB",kind:"E",home:"RB",place:"UB",stickers:[{id:34,slot:28,face:"L",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn ph\u1EA3i"},{id:35,slot:29,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,6,7,8,11,9,10,12,13,14,15,16,17,18,19,20,23,21,22,34,35,24,25,26,27,30,31,29,28,33,32",afterSignature:"1,2,0,3,4,5,6,7,8,11,9,10,13,14,12,15,16,17,18,19,20,23,21,22,25,24,27,26,34,35,30,31,29,28,33,32"},{index:15,stageIndex:6,token:"B'",groupMoveIndex:2,groupMoveCount:3,animation:{token:"B'",axis:"B",tip:!1,power:-1,angle:2.0943951023931953,vector:[0,-.3333333333333333,-.9428090415820635],kind:"body",origin:[0,0,0],stickerIds:[11,9,10,23,21,22,34,35,29,28,33,32],pieceIds:["T:B","C:B","E:RB","E:UB","E:LB"]},targets:[{before:{pieceId:"E:RB",kind:"E",home:"RB",place:"UB",stickers:[{id:34,slot:28,face:"L",color:"U",colorVi:"v\xE0ng",faceVi:"b\xEAn ph\u1EA3i"},{id:35,slot:29,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:RB",kind:"E",home:"RB",place:"RB",stickers:[{id:34,slot:34,face:"U",color:"U",colorVi:"v\xE0ng",faceVi:"\u0111\xE1y"},{id:35,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!0}}],beforeSignature:"1,2,0,3,4,5,6,7,8,11,9,10,13,14,12,15,16,17,18,19,20,23,21,22,25,24,27,26,34,35,30,31,29,28,33,32",afterSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35"},{index:16,stageIndex:7,token:"U'",groupMoveIndex:0,groupMoveCount:1,animation:{token:"U'",axis:"U",tip:!1,power:-1,angle:2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[1,2,0,13,14,12,25,24,27,26,28,29],pieceIds:["T:U","C:U","E:UL","E:UR","E:UB"]},targets:[{before:{pieceId:"C:U",kind:"C",home:"U",place:"U",stickers:[{id:13,slot:12,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:14,slot:13,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:12,slot:14,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"C:U",kind:"C",home:"U",place:"U",stickers:[{id:12,slot:12,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:13,slot:13,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:14,slot:14,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],beforeSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35",afterSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28,29,24,25,26,27,30,31,32,33,34,35"},{index:17,stageIndex:8,token:"R",groupMoveIndex:0,groupMoveCount:7,animation:{token:"R",axis:"R",tip:!1,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[6,7,8,18,19,20,24,25,30,31,34,35],pieceIds:["T:R","C:R","E:UL","E:LR","E:RB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:24,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28,29,24,25,26,27,30,31,32,33,34,35",afterSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,28,29,31,30,26,27,35,34,32,33,24,25"},{index:18,stageIndex:8,token:"U",groupMoveIndex:1,groupMoveCount:7,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[0,1,2,12,13,14,28,29,31,30,26,27],pieceIds:["T:U","C:U","E:UB","E:LR","E:UR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:24,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:24,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,28,29,31,30,26,27,35,34,32,33,24,25",afterSignature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,27,26,28,29,35,34,32,33,24,25"},{index:19,stageIndex:8,token:"R'",groupMoveIndex:2,groupMoveCount:7,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[7,8,6,19,20,18,27,26,35,34,24,25],pieceIds:["T:R","C:R","E:UR","E:RB","E:UL"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:24,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"LR",stickers:[{id:26,slot:30,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,27,26,28,29,35,34,32,33,24,25",afterSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,24,25,28,29,26,27,32,33,34,35"},{index:20,stageIndex:8,token:"U",groupMoveIndex:3,groupMoveCount:7,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[1,2,0,13,14,12,30,31,24,25,28,29],pieceIds:["T:U","C:U","E:LR","E:UL","E:UB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"LR",stickers:[{id:26,slot:30,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"LR",stickers:[{id:26,slot:30,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,24,25,28,29,26,27,32,33,34,35",afterSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,25,24,29,28,30,31,26,27,32,33,34,35"},{index:21,stageIndex:8,token:"R",groupMoveIndex:4,groupMoveCount:7,animation:{token:"R",axis:"R",tip:!1,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[6,7,8,18,19,20,29,28,26,27,34,35],pieceIds:["T:R","C:R","E:UB","E:UR","E:RB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"LR",stickers:[{id:26,slot:30,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}}],beforeSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,25,24,29,28,30,31,26,27,32,33,34,35",afterSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,25,24,27,26,30,31,35,34,32,33,29,28"},{index:22,stageIndex:8,token:"U",groupMoveIndex:5,groupMoveCount:7,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[2,0,1,14,12,13,25,24,27,26,30,31],pieceIds:["T:U","C:U","E:UL","E:UR","E:LR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}}],beforeSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,25,24,27,26,30,31,35,34,32,33,29,28",afterSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28"},{index:23,stageIndex:8,token:"R'",groupMoveIndex:6,groupMoveCount:7,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[7,8,6,19,20,18,31,30,35,34,29,28],pieceIds:["T:R","C:R","E:LR","E:RB","E:UB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28",afterSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,28,25,24,30,31,32,33,34,35"},{index:24,stageIndex:9,token:"R",groupMoveIndex:0,groupMoveCount:7,animation:{token:"R",axis:"R",tip:!1,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[6,7,8,18,19,20,29,28,30,31,34,35],pieceIds:["T:R","C:R","E:UB","E:LR","E:RB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,28,25,24,30,31,32,33,34,35",afterSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28"},{index:25,stageIndex:9,token:"U",groupMoveIndex:1,groupMoveCount:7,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[0,1,2,12,13,14,26,27,31,30,25,24],pieceIds:["T:U","C:U","E:UR","E:LR","E:UL"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UB",stickers:[{id:25,slot:28,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:26,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:27,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28",afterSignature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,24,25,26,27,35,34,32,33,29,28"},{index:26,stageIndex:9,token:"R'",groupMoveIndex:2,groupMoveCount:7,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[7,8,6,19,20,18,24,25,35,34,29,28],pieceIds:["T:R","C:R","E:UL","E:RB","E:UB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:25,slot:30,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:31,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"RB",stickers:[{id:29,slot:34,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:28,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,24,25,26,27,35,34,32,33,29,28",afterSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,29,28,26,27,25,24,32,33,34,35"},{index:27,stageIndex:9,token:"U",groupMoveIndex:3,groupMoveCount:7,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[1,2,0,13,14,12,30,31,29,28,26,27],pieceIds:["T:U","C:U","E:LR","E:UB","E:UR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:25,slot:30,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:31,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:25,slot:30,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:31,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UB",stickers:[{id:26,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:29,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UR",stickers:[{id:29,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:28,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,29,28,26,27,25,24,32,33,34,35",afterSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,27,26,30,31,25,24,32,33,34,35"},{index:28,stageIndex:9,token:"R",groupMoveIndex:4,groupMoveCount:7,animation:{token:"R",axis:"R",tip:!1,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[6,7,8,18,19,20,27,26,25,24,34,35],pieceIds:["T:R","C:R","E:UR","E:UL","E:RB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:25,slot:30,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:31,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:27,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:26,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,27,26,30,31,25,24,32,33,34,35",afterSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,24,25,30,31,35,34,32,33,27,26"},{index:29,stageIndex:9,token:"U",groupMoveIndex:5,groupMoveCount:7,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[2,0,1,14,12,13,28,29,24,25,30,31],pieceIds:["T:U","C:U","E:UB","E:UL","E:LR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:24,slot:26,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"},{id:25,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:27,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:26,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:27,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:26,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UL",stickers:[{id:28,slot:24,face:"R",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn tr\xE1i"},{id:29,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,24,25,30,31,35,34,32,33,27,26",afterSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,25,24,31,30,28,29,35,34,32,33,27,26"},{index:30,stageIndex:9,token:"R'",groupMoveIndex:6,groupMoveCount:7,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[7,8,6,19,20,18,31,30,35,34,27,26],pieceIds:["T:R","C:R","E:LR","E:RB","E:UR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:27,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:26,slot:35,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0},after:{pieceId:"E:UB",kind:"E",home:"UB",place:"UB",stickers:[{id:28,slot:28,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:29,slot:29,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"}],solved:!0}}],beforeSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,25,24,31,30,28,29,35,34,32,33,27,26",afterSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35"},{index:31,stageIndex:10,token:"L",groupMoveIndex:0,groupMoveCount:8,animation:{token:"L",axis:"L",tip:!1,power:1,angle:-2.0943951023931953,vector:[-.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[3,4,5,15,16,17,25,24,30,31,32,33],pieceIds:["T:L","C:L","E:UL","E:LR","E:LB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:25,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:24,slot:25,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:24,slot:30,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35",afterSignature:"0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,27,26,28,29,24,25,31,30,34,35"},{index:32,stageIndex:10,token:"R'",groupMoveIndex:1,groupMoveCount:8,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[6,7,8,18,19,20,27,26,24,25,34,35],pieceIds:["T:R","C:R","E:UR","E:UL","E:RB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:24,slot:30,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:25,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:35,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:27,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:26,slot:27,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"LR",stickers:[{id:26,slot:30,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,27,26,28,29,24,25,31,30,34,35",afterSignature:"0,1,2,5,3,4,8,6,7,9,10,11,12,13,14,17,15,16,20,18,19,21,22,23,32,33,34,35,28,29,26,27,31,30,25,24"},{index:33,stageIndex:10,token:"L'",groupMoveIndex:2,groupMoveCount:8,animation:{token:"L'",axis:"L",tip:!1,power:-1,angle:2.0943951023931953,vector:[-.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[5,3,4,17,15,16,32,33,26,27,31,30],pieceIds:["T:L","C:L","E:LB","E:UR","E:LR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:25,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:35,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:25,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:35,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"LR",stickers:[{id:26,slot:30,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:27,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:26,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"0,1,2,5,3,4,8,6,7,9,10,11,12,13,14,17,15,16,20,18,19,21,22,23,32,33,34,35,28,29,26,27,31,30,25,24",afterSignature:"0,1,2,3,4,5,8,6,7,9,10,11,12,13,14,15,16,17,20,18,19,21,22,23,27,26,34,35,28,29,30,31,32,33,25,24"},{index:34,stageIndex:10,token:"R",groupMoveIndex:3,groupMoveCount:8,animation:{token:"R",axis:"R",tip:!1,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[8,6,7,20,18,19,34,35,30,31,25,24],pieceIds:["T:R","C:R","E:RB","E:LR","E:UL"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"RB",stickers:[{id:25,slot:34,face:"U",color:"B",colorVi:"xanh l\xE1",faceVi:"\u0111\xE1y"},{id:24,slot:35,face:"L",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:24,slot:30,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:27,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:26,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:27,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:26,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}}],beforeSignature:"0,1,2,3,4,5,8,6,7,9,10,11,12,13,14,15,16,17,20,18,19,21,22,23,27,26,34,35,28,29,30,31,32,33,25,24",afterSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,27,26,31,30,28,29,24,25,32,33,34,35"},{index:35,stageIndex:10,token:"U'",groupMoveIndex:4,groupMoveCount:8,animation:{token:"U'",axis:"U",tip:!1,power:-1,angle:2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[0,1,2,12,13,14,27,26,31,30,28,29],pieceIds:["T:U","C:U","E:UR","E:LR","E:UB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:24,slot:30,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:24,slot:30,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UL",stickers:[{id:27,slot:24,face:"R",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn tr\xE1i"},{id:26,slot:25,face:"B",color:"L",colorVi:"\u0111\u1ECF",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:26,slot:26,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],beforeSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,27,26,31,30,28,29,24,25,32,33,34,35",afterSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,26,27,30,31,24,25,32,33,34,35"},{index:36,stageIndex:10,token:"R",groupMoveIndex:5,groupMoveCount:8,animation:{token:"R",axis:"R",tip:!1,power:1,angle:-2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[6,7,8,18,19,20,26,27,24,25,34,35],pieceIds:["T:R","C:R","E:UR","E:UL","E:RB"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"LR",stickers:[{id:24,slot:30,face:"U",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"\u0111\xE1y"},{id:25,slot:31,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:25,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:27,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:26,slot:26,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:26,slot:34,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}}],beforeSignature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,26,27,30,31,24,25,32,33,34,35",afterSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,25,24,30,31,35,34,32,33,26,27"},{index:37,stageIndex:10,token:"U",groupMoveIndex:6,groupMoveCount:8,animation:{token:"U",axis:"U",tip:!1,power:1,angle:-2.0943951023931953,vector:[0,1,0],kind:"body",origin:[0,0,0],stickerIds:[2,0,1,14,12,13,28,29,25,24,30,31],pieceIds:["T:U","C:U","E:UB","E:UL","E:LR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UR",stickers:[{id:25,slot:26,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"},{id:24,slot:27,face:"B",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"tr\u01B0\u1EDBc"}],solved:!1},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:24,slot:24,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:25,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:26,slot:34,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:26,slot:34,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1}}],beforeSignature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,25,24,30,31,35,34,32,33,26,27",afterSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,24,25,31,30,28,29,35,34,32,33,26,27"},{index:38,stageIndex:10,token:"R'",groupMoveIndex:7,groupMoveCount:8,animation:{token:"R'",axis:"R",tip:!1,power:-1,angle:2.0943951023931953,vector:[.816496580927726,-.3333333333333333,.47140452079103173],kind:"body",origin:[0,0,0],stickerIds:[7,8,6,19,20,18,31,30,35,34,26,27],pieceIds:["T:R","C:R","E:LR","E:RB","E:UR"]},targets:[{before:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:24,slot:24,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:25,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0},after:{pieceId:"E:UL",kind:"E",home:"UL",place:"UL",stickers:[{id:24,slot:24,face:"R",color:"R",colorVi:"xanh d\u01B0\u01A1ng",faceVi:"b\xEAn tr\xE1i"},{id:25,slot:25,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}},{before:{pieceId:"E:UR",kind:"E",home:"UR",place:"RB",stickers:[{id:26,slot:34,face:"U",color:"L",colorVi:"\u0111\u1ECF",faceVi:"\u0111\xE1y"},{id:27,slot:35,face:"L",color:"B",colorVi:"xanh l\xE1",faceVi:"b\xEAn ph\u1EA3i"}],solved:!1},after:{pieceId:"E:UR",kind:"E",home:"UR",place:"UR",stickers:[{id:26,slot:26,face:"L",color:"L",colorVi:"\u0111\u1ECF",faceVi:"b\xEAn ph\u1EA3i"},{id:27,slot:27,face:"B",color:"B",colorVi:"xanh l\xE1",faceVi:"tr\u01B0\u1EDBc"}],solved:!0}}],beforeSignature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,24,25,31,30,28,29,35,34,32,33,26,27",afterSignature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35"}],frames:[{index:0,stageIndex:0,state:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],metrics:{tipsAligned:[],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"0,1,2,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",highlightPieceIds:["T:U","T:L","T:R","T:B"],highlightIds:[0,1,2,3,4,5,6,7,8,9,10,11],find:"T:U: \u1EDF U; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:L: \u1EDF L; v\xE0ng nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:R: \u1EDF R; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:B: \u1EDF B; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",why:"Ch\xF3p ch\u1EC9 xoay t\u1EA1i ch\u1ED7. Kh\u1EDBp ch\xF3p v\u1EDBi t\xE2m ngay b\xEAn d\u01B0\u1EDBi tr\u01B0\u1EDBc, kh\xF4ng kh\u1EDBp theo m\u1EB7t \u0111\xEDch khi t\xE2m \u1EA5y c\xF2n l\u1EC7ch. C\xE1c n\u01B0\u1EDBc ch\u1EEF hoa sau \u0111\xF3 s\u1EBD mang ch\xF3p v\xE0 t\xE2m c\xF9ng \u0111i.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo u: ch\u1EC9 xoay ch\xF3p nh\u1ECF U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"u"},{index:1,stageIndex:0,state:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],metrics:{tipsAligned:["U"],solvedTips:["T:L","T:R","T:B"],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",highlightPieceIds:["T:U","T:L","T:R","T:B"],highlightIds:[0,1,2,3,4,5,6,7,8,9,10,11],find:"T:U: \u1EDF U; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc. T:L: \u1EDF L; v\xE0ng nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:R: \u1EDF R; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:B: \u1EDF B; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",why:"Ch\xF3p ch\u1EC9 xoay t\u1EA1i ch\u1ED7. Kh\u1EDBp ch\xF3p v\u1EDBi t\xE2m ngay b\xEAn d\u01B0\u1EDBi tr\u01B0\u1EDBc, kh\xF4ng kh\u1EDBp theo m\u1EB7t \u0111\xEDch khi t\xE2m \u1EA5y c\xF2n l\u1EC7ch. C\xE1c n\u01B0\u1EDBc ch\u1EEF hoa sau \u0111\xF3 s\u1EBD mang ch\xF3p v\xE0 t\xE2m c\xF9ng \u0111i.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 1/4 c\u1EE7a nh\xF3m. To\xE0n b\u1ED9 c\u1EA1nh v\xE0 c\u1EE5m t\xE2m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo l': ch\u1EC9 xoay ch\xF3p nh\u1ECF L, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"l'"},{index:2,stageIndex:0,state:[1,2,0,4,5,3,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],metrics:{tipsAligned:["U","L"],solvedTips:["T:R","T:B"],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,4,5,3,6,7,8,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",highlightPieceIds:["T:U","T:L","T:R","T:B"],highlightIds:[0,1,2,3,4,5,6,7,8,9,10,11],find:"T:U: \u1EDF U; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc. T:L: \u1EDF L; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc. T:R: \u1EDF R; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. T:B: \u1EDF B; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",why:"Ch\xF3p ch\u1EC9 xoay t\u1EA1i ch\u1ED7. Kh\u1EDBp ch\xF3p v\u1EDBi t\xE2m ngay b\xEAn d\u01B0\u1EDBi tr\u01B0\u1EDBc, kh\xF4ng kh\u1EDBp theo m\u1EB7t \u0111\xEDch khi t\xE2m \u1EA5y c\xF2n l\u1EC7ch. C\xE1c n\u01B0\u1EDBc ch\u1EEF hoa sau \u0111\xF3 s\u1EBD mang ch\xF3p v\xE0 t\xE2m c\xF9ng \u0111i.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 2/4 c\u1EE7a nh\xF3m. To\xE0n b\u1ED9 c\u1EA1nh v\xE0 c\u1EE5m t\xE2m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo r: ch\u1EC9 xoay ch\xF3p nh\u1ECF R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"r"},{index:3,stageIndex:0,state:[1,2,0,4,5,3,7,8,6,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],metrics:{tipsAligned:["U","L","R"],solvedTips:["T:B"],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,4,5,3,7,8,6,9,10,11,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",highlightPieceIds:["T:U","T:L","T:R","T:B"],highlightIds:[0,1,2,3,4,5,6,7,8,9,10,11],find:"T:U: \u1EDF U; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc. T:L: \u1EDF L; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc. T:R: \u1EDF R; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc. T:B: \u1EDF B; v\xE0ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",why:"Ch\xF3p ch\u1EC9 xoay t\u1EA1i ch\u1ED7. Kh\u1EDBp ch\xF3p v\u1EDBi t\xE2m ngay b\xEAn d\u01B0\u1EDBi tr\u01B0\u1EDBc, kh\xF4ng kh\u1EDBp theo m\u1EB7t \u0111\xEDch khi t\xE2m \u1EA5y c\xF2n l\u1EC7ch. C\xE1c n\u01B0\u1EDBc ch\u1EEF hoa sau \u0111\xF3 s\u1EBD mang ch\xF3p v\xE0 t\xE2m c\xF9ng \u0111i.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 3/4 c\u1EE7a nh\xF3m. To\xE0n b\u1ED9 c\u1EA1nh v\xE0 c\u1EE5m t\xE2m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo b': ch\u1EC9 xoay ch\xF3p nh\u1ECF B, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"b'"},{index:4,stageIndex:1,state:[1,2,0,4,5,3,7,8,6,10,11,9,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32],metrics:{tipsAligned:["U","L","R","B"],solvedTips:[],solvedCenters:[],solvedEdges:[],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,4,5,3,7,8,6,10,11,9,13,14,12,16,17,15,19,20,18,22,23,21,30,31,35,34,29,28,26,27,25,24,33,32",highlightPieceIds:["C:L"],highlightIds:[15,16,17],find:"C:L: \u1EDF L; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",why:"Ch\u1EEF L l\u1EDBn xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh L m\u1ED9t n\u1EA5c 120\xB0. L\u01B0\u1EE3t n\xE0y \u0111\u01B0a \xF4 v\xE0ng \u0111ang l\u1EC7ch v\u1EC1 \u0111\xE1y. C\u1EA1nh \u0111\u01B0\u1EE3c ph\xE9p ch\u1EA1y v\xEC ch\u01B0a c\xF3 t\u1EA7ng n\xE0o ho\xE0n ch\u1EC9nh.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo L: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh L, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"L"},{index:5,stageIndex:2,state:[1,2,0,3,4,5,7,8,6,10,11,9,13,14,12,15,16,17,19,20,18,22,23,21,25,24,35,34,29,28,31,30,27,26,33,32],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L"],solvedCenters:["C:L"],solvedEdges:[],correctlyPlacedEdges:["E:UL","E:UB","E:LR"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,3,4,5,7,8,6,10,11,9,13,14,12,15,16,17,19,20,18,22,23,21,25,24,35,34,29,28,31,30,27,26,33,32",highlightPieceIds:["C:R"],highlightIds:[18,19,20],find:"C:R: \u1EDF R; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",why:"\u1EDE tr\u1EA1ng th\xE1i n\xE0y c\u1EA7n R ng\u01B0\u1EE3c 120\xB0, kh\xF4ng d\xF9ng R thu\u1EADn theo th\xF3i quen t\u1EEB kh\u1ED1i l\u1EADp ph\u01B0\u01A1ng.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:6,stageIndex:3,state:[1,2,0,3,4,5,6,7,8,10,11,9,13,14,12,15,16,17,18,19,20,22,23,21,25,24,33,32,29,28,34,35,27,26,30,31],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R"],solvedCenters:["C:L","C:R"],solvedEdges:[],correctlyPlacedEdges:["E:UL","E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,3,4,5,6,7,8,10,11,9,13,14,12,15,16,17,18,19,20,22,23,21,25,24,33,32,29,28,34,35,27,26,30,31",highlightPieceIds:["C:B"],highlightIds:[21,22,23],find:"C:B: \u1EDF B; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra b\xEAn tr\xE1i.",why:"T\xE2m B c\xF3 v\xE0ng n\xEAn thu\u1ED9c ba c\u1EE5m \u0111\xE1y. T\xE2m U kh\xF4ng c\xF3 v\xE0ng. Ch\u1EC9nh B ho\xE0n t\u1EA5t b\u1ED9 m\u1ED1c x\xE1c \u0111\u1ECBnh n\u01A1i \u1EDF c\u1EE7a ba c\u1EA1nh v\xE0ng.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo B: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh B, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"B"},{index:7,stageIndex:4,state:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,33,32,30,31,34,35,28,29,26,27],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:[],correctlyPlacedEdges:["E:UL"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,33,32,30,31,34,35,28,29,26,27",highlightPieceIds:["E:LR"],highlightIds:[30,31],find:"E:LR: \u1EDF UB; v\xE0ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i.",why:"C\u1EA1nh m\u1EE5c ti\xEAu \u0111ang \u1EDF UB, v\xE0ng nh\xECn ra m\u1EB7t b\xEAn ph\u1EA3i. R m\u1EDF khe, U chuy\u1EC3n c\u1EA1nh, R ng\u01B0\u1EE3c \u0111\xF3ng khe. \u0110\xE2y \u0111\xFAng ca ch\xE8n ph\u1EA3i trong t\xE0i li\u1EC7u, \u0111\u01B0\u1EE3c ki\u1EC3m l\u1EA1i b\u1EB1ng m\xF4 h\xECnh t\u1EE9 di\u1EC7n.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo R: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R"},{index:8,stageIndex:4,state:[1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,25,24,35,34,30,31,27,26,28,29,33,32],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:B"],solvedCenters:["C:L","C:B"],solvedEdges:[],correctlyPlacedEdges:["E:UL"],solvedBottomEdges:[],isSolved:!1},signature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,25,24,35,34,30,31,27,26,28,29,33,32",highlightPieceIds:["E:LR"],highlightIds:[30,31],find:"E:LR: \u1EDF UB; v\xE0ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i.",why:"C\u1EA1nh m\u1EE5c ti\xEAu \u0111ang \u1EDF UB, v\xE0ng nh\xECn ra m\u1EB7t b\xEAn ph\u1EA3i. R m\u1EDF khe, U chuy\u1EC3n c\u1EA1nh, R ng\u01B0\u1EE3c \u0111\xF3ng khe. \u0110\xE2y \u0111\xFAng ca ch\xE8n ph\u1EA3i trong t\xE0i li\u1EC7u, \u0111\u01B0\u1EE3c ki\u1EC3m l\u1EA1i b\u1EB1ng m\xF4 h\xECnh t\u1EE9 di\u1EC7n.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 1/3 c\u1EE7a nh\xF3m. C\xE1c t\xE2m \u0111\xE1y tr\u1EDF v\u1EC1 \u0111\xFAng \u1EDF cu\u1ED1i nh\xF3m. T\xE2m U \u0111\u01B0\u1EE3c d\xF9ng l\xE0m v\xF9ng thao t\xE1c. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:9,stageIndex:4,state:[2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,34,35,31,30,25,24,27,26,28,29,33,32],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:B"],solvedCenters:["C:L","C:B"],solvedEdges:[],correctlyPlacedEdges:[],solvedBottomEdges:[],isSolved:!1},signature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,34,35,31,30,25,24,27,26,28,29,33,32",highlightPieceIds:["E:LR"],highlightIds:[30,31],find:"E:LR: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",why:"C\u1EA1nh m\u1EE5c ti\xEAu \u0111ang \u1EDF UB, v\xE0ng nh\xECn ra m\u1EB7t b\xEAn ph\u1EA3i. R m\u1EDF khe, U chuy\u1EC3n c\u1EA1nh, R ng\u01B0\u1EE3c \u0111\xF3ng khe. \u0110\xE2y \u0111\xFAng ca ch\xE8n ph\u1EA3i trong t\xE0i li\u1EC7u, \u0111\u01B0\u1EE3c ki\u1EC3m l\u1EA1i b\u1EB1ng m\xF4 h\xECnh t\u1EE9 di\u1EC7n.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 2/3 c\u1EE7a nh\xF3m. C\xE1c t\xE2m \u0111\xE1y tr\u1EDF v\u1EC1 \u0111\xFAng \u1EDF cu\u1ED1i nh\xF3m. T\xE2m U \u0111\u01B0\u1EE3c d\xF9ng l\xE0m v\xF9ng thao t\xE1c. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:10,stageIndex:5,state:[2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,34,35,33,32,25,24,30,31,28,29,26,27],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:LR"],correctlyPlacedEdges:["E:LR"],solvedBottomEdges:["E:LR"],isSolved:!1},signature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,34,35,33,32,25,24,30,31,28,29,26,27",highlightPieceIds:["E:LB"],highlightIds:[32,33],find:"E:LB: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",why:"\u0110\xE2y v\u1EABn l\xE0 m\u1EDF\u2013chuy\u1EC3n\u2013\u0111\xF3ng, quanh tr\u1EE5c L trong h\u1EC7 t\xEAn c\u1ED1 \u0111\u1ECBnh. \u0110\xEDch l\xE0 LB v\xE0 c\u1EA1nh \u0111ang \u1EDF UR. M\xE0n h\xECnh chuy\u1EC3n g\xF3c nh\xECn \u0111\u1EC3 th\u1EA5y m\u1EB7t tr\xE1i; ch\u1EEF tr\xEAn tr\u1EE5c kh\xF4ng \u0111\u1ED5i. Kh\xF4ng \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ECDc L th\xE0nh R theo v\u1ECB tr\xED m\u1EDBi tr\xEAn m\xE0n h\xECnh.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo L: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh L, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"L"},{index:11,stageIndex:5,state:[2,0,1,5,3,4,6,7,8,9,10,11,14,12,13,17,15,16,18,19,20,21,22,23,28,29,33,32,25,24,35,34,31,30,26,27],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:R","T:B"],solvedCenters:["C:R","C:B"],solvedEdges:[],correctlyPlacedEdges:[],solvedBottomEdges:[],isSolved:!1},signature:"2,0,1,5,3,4,6,7,8,9,10,11,14,12,13,17,15,16,18,19,20,21,22,23,28,29,33,32,25,24,35,34,31,30,26,27",highlightPieceIds:["E:LB"],highlightIds:[32,33],find:"E:LB: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, v\xE0ng nh\xECn ra tr\u01B0\u1EDBc.",why:"\u0110\xE2y v\u1EABn l\xE0 m\u1EDF\u2013chuy\u1EC3n\u2013\u0111\xF3ng, quanh tr\u1EE5c L trong h\u1EC7 t\xEAn c\u1ED1 \u0111\u1ECBnh. \u0110\xEDch l\xE0 LB v\xE0 c\u1EA1nh \u0111ang \u1EDF UR. M\xE0n h\xECnh chuy\u1EC3n g\xF3c nh\xECn \u0111\u1EC3 th\u1EA5y m\u1EB7t tr\xE1i; ch\u1EEF tr\xEAn tr\u1EE5c kh\xF4ng \u0111\u1ED5i. Kh\xF4ng \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ECDc L th\xE0nh R theo v\u1ECB tr\xED m\u1EDBi tr\xEAn m\xE0n h\xECnh.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 1/3 c\u1EE7a nh\xF3m. C\u1EA1nh LR \u0111\xE3 gi\u1EA3i v\xE0 ba t\xE2m \u0111\xE1y, x\xE9t \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:12,stageIndex:5,state:[0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,24,25,28,29,35,34,31,30,26,27],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:R","T:B"],solvedCenters:["C:U","C:R","C:B"],solvedEdges:["E:UB"],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,24,25,28,29,35,34,31,30,26,27",highlightPieceIds:["E:LB"],highlightIds:[32,33],find:"E:LB: \u1EDF UL; v\xE0ng nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc.",why:"\u0110\xE2y v\u1EABn l\xE0 m\u1EDF\u2013chuy\u1EC3n\u2013\u0111\xF3ng, quanh tr\u1EE5c L trong h\u1EC7 t\xEAn c\u1ED1 \u0111\u1ECBnh. \u0110\xEDch l\xE0 LB v\xE0 c\u1EA1nh \u0111ang \u1EDF UR. M\xE0n h\xECnh chuy\u1EC3n g\xF3c nh\xECn \u0111\u1EC3 th\u1EA5y m\u1EB7t tr\xE1i; ch\u1EEF tr\xEAn tr\u1EE5c kh\xF4ng \u0111\u1ED5i. Kh\xF4ng \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ECDc L th\xE0nh R theo v\u1ECB tr\xED m\u1EDBi tr\xEAn m\xE0n h\xECnh.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 2/3 c\u1EE7a nh\xF3m. C\u1EA1nh LR \u0111\xE3 gi\u1EA3i v\xE0 ba t\xE2m \u0111\xE1y, x\xE9t \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo L': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh L, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"L'"},{index:13,stageIndex:6,state:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34,35,24,25,28,29,30,31,32,33,26,27],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB"],correctlyPlacedEdges:["E:UB","E:LR","E:LB"],solvedBottomEdges:["E:LR","E:LB"],isSolved:!1},signature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34,35,24,25,28,29,30,31,32,33,26,27",highlightPieceIds:["E:RB"],highlightIds:[34,35],find:"E:RB: \u1EDF UL; v\xE0ng nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"\u0110\xEDch l\xE0 RB v\xE0 c\u1EA1nh \u0111ang \u1EDF UL. B m\u1EDF, U chuy\u1EC3n, B ng\u01B0\u1EE3c \u0111\xF3ng. \u0110\xE2y l\xE0 c\xF9ng ph\xE9p ch\xE8n \u0111\u01B0\u1EE3c chuy\u1EC3n sang tr\u1EE5c ph\xEDa sau, kh\xF4ng ph\u1EA3i n\u01B0\u1EDBc B xoay m\u1EB7t sau c\u1EE7a 3\xD73.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo B: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh B, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"B"},{index:14,stageIndex:6,state:[0,1,2,3,4,5,6,7,8,11,9,10,12,13,14,15,16,17,18,19,20,23,21,22,34,35,24,25,26,27,30,31,29,28,33,32],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R"],solvedCenters:["C:U","C:L","C:R"],solvedEdges:["E:LR"],correctlyPlacedEdges:["E:LR"],solvedBottomEdges:["E:LR"],isSolved:!1},signature:"0,1,2,3,4,5,6,7,8,11,9,10,12,13,14,15,16,17,18,19,20,23,21,22,34,35,24,25,26,27,30,31,29,28,33,32",highlightPieceIds:["E:RB"],highlightIds:[34,35],find:"E:RB: \u1EDF UL; v\xE0ng nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"\u0110\xEDch l\xE0 RB v\xE0 c\u1EA1nh \u0111ang \u1EDF UL. B m\u1EDF, U chuy\u1EC3n, B ng\u01B0\u1EE3c \u0111\xF3ng. \u0110\xE2y l\xE0 c\xF9ng ph\xE9p ch\xE8n \u0111\u01B0\u1EE3c chuy\u1EC3n sang tr\u1EE5c ph\xEDa sau, kh\xF4ng ph\u1EA3i n\u01B0\u1EDBc B xoay m\u1EB7t sau c\u1EE7a 3\xD73.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 1/3 c\u1EE7a nh\xF3m. Hai c\u1EA1nh LR, LB v\xE0 ba t\xE2m \u0111\xE1y \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:15,stageIndex:6,state:[1,2,0,3,4,5,6,7,8,11,9,10,13,14,12,15,16,17,18,19,20,23,21,22,25,24,27,26,34,35,30,31,29,28,33,32],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R"],solvedCenters:["C:L","C:R"],solvedEdges:["E:LR"],correctlyPlacedEdges:["E:UL","E:UR","E:LR"],solvedBottomEdges:["E:LR"],isSolved:!1},signature:"1,2,0,3,4,5,6,7,8,11,9,10,13,14,12,15,16,17,18,19,20,23,21,22,25,24,27,26,34,35,30,31,29,28,33,32",highlightPieceIds:["E:RB"],highlightIds:[34,35],find:"E:RB: \u1EDF UB; v\xE0ng nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i.",why:"\u0110\xEDch l\xE0 RB v\xE0 c\u1EA1nh \u0111ang \u1EDF UL. B m\u1EDF, U chuy\u1EC3n, B ng\u01B0\u1EE3c \u0111\xF3ng. \u0110\xE2y l\xE0 c\xF9ng ph\xE9p ch\xE8n \u0111\u01B0\u1EE3c chuy\u1EC3n sang tr\u1EE5c ph\xEDa sau, kh\xF4ng ph\u1EA3i n\u01B0\u1EDBc B xoay m\u1EB7t sau c\u1EE7a 3\xD73.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 2/3 c\u1EE7a nh\xF3m. Hai c\u1EA1nh LR, LB v\xE0 ba t\xE2m \u0111\xE1y \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo B': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh B, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"B'"},{index:16,stageIndex:7,state:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},signature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35",highlightPieceIds:["C:U"],highlightIds:[12,13,14],find:"C:U: \u1EDF U; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"\u1EDE tr\u1EA1ng th\xE1i c\u1EE5 th\u1EC3 n\xE0y c\u1EA7n U ng\u01B0\u1EE3c. Ba c\u1EA1nh \u0111\xE1y kh\xF4ng thu\u1ED9c l\u1EDBp U n\xEAn v\u1EABn gi\u1EEF nguy\xEAn. Nh\u1EEFng c\u1EA1nh tr\xEAn \u0111ang t\u1EA1m \u0111\xFAng ch\u1ED7 kh\xF4ng ph\u1EA3i l\xFD do \u0111\u1EC3 b\u1ECF qua t\xE2m l\u1EC7ch.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo U': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U'"},{index:17,stageIndex:8,state:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28,29,24,25,26,27,30,31,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},signature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28,29,24,25,26,27,30,31,32,33,34,35",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i. E:UB: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo R: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R"},{index:18,stageIndex:8,state:[0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,28,29,31,30,26,27,35,34,32,33,24,25],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:B"],solvedCenters:["C:U","C:L","C:B"],solvedEdges:["E:LB"],correctlyPlacedEdges:["E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,28,29,31,30,26,27,35,34,32,33,24,25",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF RB; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i. E:UR: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i. E:UB: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 1/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u0111\u01B0\u1EE3c kh\xF4i ph\u1EE5c sau \u0111\u1EE7 b\u1EA3y n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:19,stageIndex:8,state:[1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,27,26,28,29,35,34,32,33,24,25],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:B"],solvedCenters:["C:L","C:B"],solvedEdges:["E:UB","E:LB"],correctlyPlacedEdges:["E:UR","E:UB","E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,27,26,28,29,35,34,32,33,24,25",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF RB; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i. E:UR: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 2/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u0111\u01B0\u1EE3c kh\xF4i ph\u1EE5c sau \u0111\u1EE7 b\u1EA3y n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:20,stageIndex:8,state:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,24,25,28,29,26,27,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:UB","E:LB","E:RB"],correctlyPlacedEdges:["E:UB","E:LB","E:RB"],solvedBottomEdges:["E:LB","E:RB"],isSolved:!1},signature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,24,25,28,29,26,27,32,33,34,35",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF LR; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 3/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u0111\u01B0\u1EE3c kh\xF4i ph\u1EE5c sau \u0111\u1EE7 b\u1EA3y n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:21,stageIndex:8,state:[2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,25,24,29,28,30,31,26,27,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:LB","E:RB"],solvedBottomEdges:["E:LB","E:RB"],isSolved:!1},signature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,25,24,29,28,30,31,26,27,32,33,34,35",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UL; xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF LR; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 4/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u0111\u01B0\u1EE3c kh\xF4i ph\u1EE5c sau \u0111\u1EE7 b\u1EA3y n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R"},{index:22,stageIndex:8,state:[2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,25,24,27,26,30,31,35,34,32,33,29,28],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:B"],solvedCenters:["C:L","C:B"],solvedEdges:["E:LB"],correctlyPlacedEdges:["E:UL","E:UR","E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,25,24,27,26,30,31,35,34,32,33,29,28",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UL; xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF RB; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 5/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u0111\u01B0\u1EE3c kh\xF4i ph\u1EE5c sau \u0111\u1EE7 b\u1EA3y n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:23,stageIndex:8,state:[0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:B"],solvedCenters:["C:U","C:L","C:B"],solvedEdges:["E:LB"],correctlyPlacedEdges:["E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UB; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i. E:UR: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF RB; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i.",why:"Ba c\u1EB7p m\xE0u \u0111ang \u1EDF sai khe. B\xE0i n\xE0y ch\u1ECDn l\u1EB7p chu tr\xECnh P-A quen thu\u1ED9c hai l\u1EA7n thay v\xEC h\u1ECDc chu tr\xECnh ng\u01B0\u1EE3c. Sau v\xF2ng th\u1EE9 nh\u1EA5t ch\xFAng ch\u01B0a v\u1EC1 nh\xE0; kh\xF4ng \u0111\u01B0\u1EE3c tuy\xEAn b\u1ED1 \u0111\xE3 xong.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 6/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u0111\u01B0\u1EE3c kh\xF4i ph\u1EE5c sau \u0111\u1EE7 b\u1EA3y n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:24,stageIndex:9,state:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,28,25,24,30,31,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},signature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,28,25,24,30,31,32,33,34,35",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UB; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i. E:UR: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo R: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R"},{index:25,stageIndex:9,state:[0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:B"],solvedCenters:["C:U","C:L","C:B"],solvedEdges:["E:LB"],correctlyPlacedEdges:["E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,26,27,31,30,25,24,35,34,32,33,29,28",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UB; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i. E:UR: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF RB; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 1/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:26,stageIndex:9,state:[1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,24,25,26,27,35,34,32,33,29,28],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:B"],solvedCenters:["C:L","C:B"],solvedEdges:["E:LB"],correctlyPlacedEdges:["E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"1,2,0,3,4,5,7,8,6,9,10,11,13,14,12,15,16,17,19,20,18,21,22,23,30,31,24,25,26,27,35,34,32,33,29,28",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i. E:UB: \u1EDF RB; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 2/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:27,stageIndex:9,state:[1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,29,28,26,27,25,24,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:LB","E:RB"],correctlyPlacedEdges:["E:LB","E:RB"],solvedBottomEdges:["E:LB","E:RB"],isSolved:!1},signature:"1,2,0,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,18,19,20,21,22,23,30,31,29,28,26,27,25,24,32,33,34,35",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF LR; xanh l\xE1 nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i. E:UB: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 3/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:28,stageIndex:9,state:[2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,27,26,30,31,25,24,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:LB","E:RB"],correctlyPlacedEdges:["E:UR","E:LB","E:RB"],solvedBottomEdges:["E:LB","E:RB"],isSolved:!1},signature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,27,26,30,31,25,24,32,33,34,35",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF LR; xanh l\xE1 nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc. E:UB: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 4/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R"},{index:29,stageIndex:9,state:[2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,24,25,30,31,35,34,32,33,27,26],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:B"],solvedCenters:["C:L","C:B"],solvedEdges:["E:LB"],correctlyPlacedEdges:["E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,24,25,30,31,35,34,32,33,27,26",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UR; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF RB; xanh l\xE1 nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i. E:UB: \u1EDF UL; \u0111\u1ECF nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 5/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:30,stageIndex:9,state:[0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,25,24,31,30,28,29,35,34,32,33,27,26],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:B"],solvedCenters:["C:U","C:L","C:B"],solvedEdges:["E:UB","E:LB"],correctlyPlacedEdges:["E:UL","E:UB","E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,25,24,31,30,28,29,35,34,32,33,27,26",highlightPieceIds:["E:UL","E:UR","E:UB"],highlightIds:[24,25,26,27,28,29],find:"E:UL: \u1EDF UL; xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF RB; xanh l\xE1 nh\xECn ra \u0111\xE1y, \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i. E:UB: \u1EDF UB; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i.",why:"\u1EDE tr\u1EA1ng th\xE1i m\u1EDBi, c\xF9ng chu tr\xECnh th\xEAm m\u1ED9t l\u1EA7n \u0111\u01B0a c\xE1c m\u1EA3nh v\u1EC1 \u0111\xFAng v\u1ECB tr\xED. \u0110\xFAng v\u1ECB tr\xED ch\u01B0a \u0111\u1ED3ng ngh\u0129a \u0111\xFAng h\u01B0\u1EDBng: UL v\xE0 UR s\u1EBD c\xF2n l\u1EADt.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 6/7 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y v\xE0 b\u1ED1n t\xE2m \u1EDF cu\u1ED1i nh\xF3m. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:31,stageIndex:10,state:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!1},signature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,24,27,26,28,29,30,31,32,33,34,35",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF UL; xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110\u1ED1i chi\u1EBFu c\xE1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u v\xE0 \u0111\u1ECDc \u0111\u1EE7 c\xE1c m\xE0u c\u1EE7a t\u1EEBng m\u1EA3nh tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u.",next:"Ti\u1EBFp theo L: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh L, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"L"},{index:32,stageIndex:10,state:[0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,27,26,28,29,24,25,31,30,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:R","T:B"],solvedCenters:["C:U","C:R","C:B"],solvedEdges:["E:UB","E:RB"],correctlyPlacedEdges:["E:UR","E:UB","E:RB"],solvedBottomEdges:["E:RB"],isSolved:!1},signature:"0,1,2,5,3,4,6,7,8,9,10,11,12,13,14,17,15,16,18,19,20,21,22,23,32,33,27,26,28,29,24,25,31,30,34,35",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF LR; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 1/8 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:33,stageIndex:10,state:[0,1,2,5,3,4,8,6,7,9,10,11,12,13,14,17,15,16,20,18,19,21,22,23,32,33,34,35,28,29,26,27,31,30,25,24],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:B"],solvedCenters:["C:U","C:B"],solvedEdges:["E:UB"],correctlyPlacedEdges:["E:UB"],solvedBottomEdges:[],isSolved:!1},signature:"0,1,2,5,3,4,8,6,7,9,10,11,12,13,14,17,15,16,20,18,19,21,22,23,32,33,34,35,28,29,26,27,31,30,25,24",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF RB; xanh l\xE1 nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i. E:UR: \u1EDF LR; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 2/8 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo L': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh L, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"L'"},{index:34,stageIndex:10,state:[0,1,2,3,4,5,8,6,7,9,10,11,12,13,14,15,16,17,20,18,19,21,22,23,27,26,34,35,28,29,30,31,32,33,25,24],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:B"],solvedCenters:["C:U","C:L","C:B"],solvedEdges:["E:UB","E:LR","E:LB"],correctlyPlacedEdges:["E:UB","E:LR","E:LB"],solvedBottomEdges:["E:LR","E:LB"],isSolved:!1},signature:"0,1,2,3,4,5,8,6,7,9,10,11,12,13,14,15,16,17,20,18,19,21,22,23,27,26,34,35,28,29,30,31,32,33,25,24",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF RB; xanh l\xE1 nh\xECn ra \u0111\xE1y, xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn ph\u1EA3i. E:UR: \u1EDF UL; xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 3/8 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R"},{index:35,stageIndex:10,state:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,27,26,31,30,28,29,24,25,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UB","E:LB","E:RB"],correctlyPlacedEdges:["E:UB","E:LB","E:RB"],solvedBottomEdges:["E:LB","E:RB"],isSolved:!1},signature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,27,26,31,30,28,29,24,25,32,33,34,35",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF LR; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UL; xanh l\xE1 nh\xECn ra b\xEAn tr\xE1i, \u0111\u1ECF nh\xECn ra tr\u01B0\u1EDBc.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 4/8 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U'"},{index:36,stageIndex:10,state:[2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,26,27,30,31,24,25,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:R","T:B"],solvedCenters:["C:L","C:R","C:B"],solvedEdges:["E:UR","E:LB","E:RB"],correctlyPlacedEdges:["E:UR","E:LB","E:RB"],solvedBottomEdges:["E:LB","E:RB"],isSolved:!1},signature:"2,0,1,3,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,19,20,21,22,23,28,29,26,27,30,31,24,25,32,33,34,35",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF LR; xanh d\u01B0\u01A1ng nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UR; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 5/8 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R"},{index:37,stageIndex:10,state:[2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,25,24,30,31,35,34,32,33,26,27],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:L","T:B"],solvedCenters:["C:L","C:B"],solvedEdges:["E:LB"],correctlyPlacedEdges:["E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"2,0,1,3,4,5,7,8,6,9,10,11,14,12,13,15,16,17,19,20,18,21,22,23,28,29,25,24,30,31,35,34,32,33,26,27",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF UR; xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i, xanh d\u01B0\u01A1ng nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF RB; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 6/8 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo U: xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh U, 120\xB0 thu\u1EADn khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"U"},{index:38,stageIndex:10,state:[0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,24,25,31,30,28,29,35,34,32,33,26,27],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:B"],solvedCenters:["C:U","C:L","C:B"],solvedEdges:["E:UL","E:UB","E:LB"],correctlyPlacedEdges:["E:UL","E:UB","E:LB"],solvedBottomEdges:["E:LB"],isSolved:!1},signature:"0,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,19,20,18,21,22,23,24,25,31,30,28,29,35,34,32,33,26,27",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF UL; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF RB; \u0111\u1ECF nh\xECn ra \u0111\xE1y, xanh l\xE1 nh\xECn ra b\xEAn ph\u1EA3i.",why:"Ch\u1EC9 UL v\xE0 UR b\u1ECB l\u1EADt t\u1EA1i \u0111\xFAng khe, c\xF2n UB \u0111\xE3 \u0111\xFAng. P-F l\u1EADt \u0111\xFAng c\u1EB7p tr\u01B0\u1EDBc, gi\u1EEF c\u1EA1nh sau. \u0110\xE2y kh\xF4ng ph\u1EA3i chu tr\xECnh s\u1EEDa sai v\u1ECB tr\xED.",check:"\u0110ang \u1EDF n\u01B0\u1EDBc 7/8 c\u1EE7a nh\xF3m. T\u1EA7ng \u0111\xE1y, c\u1EA1nh UB v\xE0 b\u1ED1n t\xE2m tr\u1EDF l\u1EA1i \u0111\xFAng sau \u0111\u1EE7 t\xE1m n\u01B0\u1EDBc. Kh\xF4ng s\u1EEDa ri\xEAng ph\u1EA7n t\u1EA1m l\u1EC7ch gi\u1EEFa nh\xF3m.",next:"Ti\u1EBFp theo R': xoay c\u1EA3 hai l\u1EDBp quanh \u0111\u1EC9nh R, 120\xB0 ng\u01B0\u1EE3c khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh \u1EA5y v\xE0o l\xF5i.",nextMove:"R'"},{index:39,stageIndex:10,state:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],metrics:{tipsAligned:["U","L","R","B"],solvedTips:["T:U","T:L","T:R","T:B"],solvedCenters:["C:U","C:L","C:R","C:B"],solvedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],correctlyPlacedEdges:["E:UL","E:UR","E:UB","E:LR","E:LB","E:RB"],solvedBottomEdges:["E:LR","E:LB","E:RB"],isSolved:!0},signature:"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35",highlightPieceIds:["E:UL","E:UR"],highlightIds:[24,25,26,27],find:"E:UL: \u1EDF UL; xanh d\u01B0\u01A1ng nh\xECn ra b\xEAn tr\xE1i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc. E:UR: \u1EDF UR; \u0111\u1ECF nh\xECn ra b\xEAn ph\u1EA3i, xanh l\xE1 nh\xECn ra tr\u01B0\u1EDBc.",why:"To\xE0n b\u1ED9 m\u1EA3nh \u0111\xE3 v\u1EC1 \u0111\xFAng khe v\xE0 \u0111\xFAng h\u01B0\u1EDBng.",check:"B\u1ED1n m\u1EB7t \u0111\u1ED3ng m\xE0u; \u0111\u1EE7 4 ch\xF3p, 4 c\u1EE5m t\xE2m v\xE0 6 c\u1EA1nh \u0111\xFAng. Ki\u1EC3m c\u1EA3 \u0111\xE1y v\xE0 ph\xEDa sau.",next:"\u0110\xE3 xong m\u1EABu li\xEAn t\u1EE5c. L\u1EA7n sau nh\u1EADn \u0111i\u1EC1u ki\u1EC7n \u1EDF t\u1EEBng ch\u1EB7ng, kh\xF4ng h\u1ECDc thu\u1ED9c to\xE0n b\u1ED9 chu\u1ED7i 39 n\u01B0\u1EDBc.",nextMove:null}],finalState:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],sources:[{title:"WCA Regulations, 12e",url:"https://www.worldcubeassociation.org/regulations/#12e"},{title:"Tactile Cuber: original beginner method",url:"https://tactilecuber.com/other/pyraminx/pyraminx-beginner-method/"},{title:"Jaap: Pyraminx geometry and independent state-space analysis",url:"https://www.jaapsch.net/puzzles/pyraminx.htm"},{title:"GAN: manufacturer tutorial",url:"https://www.gancube.com/pages/gancube-tutorials-pyraminx"}],branchNotes:[{condition:"Ch\xF3p kh\u1EDBp t\xE2m nh\u01B0ng m\xE0u ch\u01B0a \u0111\xFAng m\u1EB7t cu\u1ED1i c\xF9ng",action:"Gi\u1EEF quan h\u1EC7 ch\xF3p\u2013t\xE2m; ch\u1EC9nh c\u1EE5m t\xE2m s\u1EBD mang ch\xF3p theo."},{condition:"C\u1EA1nh v\xE0ng kh\xF4ng \u1EDF \u0111\xFAng khe tr\xEAn nh\u01B0 m\u1EABu",action:"Kh\xF4ng \xE1p d\u1EE5ng m\xE1y m\xF3c chu\u1ED7i n\xE0y. X\xE1c \u0111\u1ECBnh \u0111\xEDch, \u0111\u01B0a c\u1EA1nh v\u1EC1 v\u1ECB tr\xED ch\xE8n v\xE0 ch\u1ECDn h\u01B0\u1EDBng theo c\u1EA3 hai m\xE0u."},{condition:"C\u1EA1nh \u0111\xE1y b\u1ECB m\u1EAFc sai khe ho\u1EB7c b\u1ECB l\u1EADt",action:"C\u1EA7n b\u01B0\u1EDBc \u0111\u01B0a c\u1EA1nh l\xEAn r\u1ED3i nh\u1EADn d\u1EA1ng l\u1EA1i. Nh\xE1nh \u1EA5y kh\xF4ng x\u1EA3y ra trong m\u1EABu \u0111\xE3 chu\u1EA9n b\u1ECB n\xE0y."},{condition:"Ba c\u1EA1nh tr\xEAn \u0111\xE3 \u0111\xFAng ch\u1ED7",action:"B\u1ECF P-A. Ki\u1EC3m h\u01B0\u1EDBng; kh\xF4ng xoay v\xF2ng m\u1ED9t ph\u1EA7n \u0111\xE3 \u0111\xFAng."},{condition:"Hai c\u1EA1nh l\u1EADt kh\xF4ng ph\u1EA3i UL v\xE0 UR",action:"Tr\u01B0\u1EDBc h\u1EBFt c\u1EA7n \u0111\u1ED5i c\xE1ch c\u1EA7m v\xE0 \xE1nh x\u1EA1 l\u1EA1i k\xFD hi\u1EC7u, ho\u1EB7c d\xF9ng c\xF4ng th\u1EE9c t\u01B0\u01A1ng \u1EE9ng. Ch\u1EC9 quay camera kh\xF4ng thay \u0111\u1ED5i n\u01B0\u1EDBc xoay."},{condition:"M\u1ECDi c\u1EA1nh \u0111\xE3 \u0111\xFAng",action:"B\u1ECF P-F v\xE0 ki\u1EC3m b\u1ED1n m\u1EB7t. Kh\xF4ng c\u1EA7n d\xF9ng m\u1ECDi c\xF4ng th\u1EE9c m\u1ED7i l\u1EA7n."}]};var ke=i=>document.getElementById(i),g0="http://www.w3.org/2000/svg",x0=i=>i.replace(/\. (?=[TCE]:)/g,`.
`).replace(/T:/g,"ch\xF3p ").replace(/C:/g,"t\xE2m ").replace(/E:/g,"c\u1EA1nh ");function ln(i,e,t){let n=document.createElement(i);return e!==void 0&&(n.textContent=e),t&&(n.className=t),n}function Nc(i,e){let t=document.createElementNS(g0,i);for(let[n,s]of Object.entries(e))t.setAttribute(n,s);return t}try{let S=function(T){let U=r?.domElement;a?.dispose(),r?.dispose?.(),U?.remove();let N=td(t,{forceSVG:T});r=N.renderer,o=N.mode,n.mode=o,a=new $o(e,r.domElement),a.target.copy(s),a.enableDamping=!0,a.enablePan=!1,a.minDistance=5,a.maxDistance=16,a.addEventListener("start",()=>{c="free",l=!1,b()}),r.domElement.addEventListener("webglcontextlost",z=>{if(z.preventDefault(),S(!0),A(),u.motion){let I=u.fraction;n.previewMove(u.motion.token,I*I*(3-2*I))}w()},{once:!0}),ke("rendererMode").textContent=o==="svg"?"SVG \xB7 m\xE0u nguy\xEAn b\u1EA3n":"3D \xB7 m\xE0u nguy\xEAn b\u1EA3n",ke("rendererMode").title=o==="svg"?"Tr\xECnh duy\u1EC7t kh\xF4ng d\xF9ng WebGL; h\xECnh SVG v\u1EABn d\xF9ng \u0111\xFAng h\xECnh h\u1ECDc v\xE0 n\u01B0\u1EDBc xoay Pyraminx.":"M\xF4 h\xECnh 3D d\xF9ng m\xE0u ph\u1EB3ng \u0111\u1EC3 gi\u1EEF \u0111\xFAng m\xE0u c\xE1c m\u1EA3nh.",g()},g=function(){if(!r)return;let T=t.getBoundingClientRect(),U=Math.max(1,T.width),N=Math.max(1,T.height);r.setSize(U,N),e.aspect=U/N,e.updateProjectionMatrix(),l&&R("stage")},f=function(T){e.position.set(...T),e.lookAt(s),e.updateMatrixWorld();for(let U=0;U<12&&!(Math.max(...Object.values(Ln).map(z=>{let I=new D(...z).multiplyScalar(2.35).project(e);return Math.max(Math.abs(I.x),Math.abs(I.y))}))<.87);U++)e.position.sub(s).multiplyScalar(1.1).add(s),e.updateMatrixWorld();a.target.copy(s),a.update()},b=function(){for(let T of document.querySelectorAll("[data-camera]")){let U=T.dataset.camera===c;T.setAttribute("aria-pressed",String(U)),T.classList.toggle("active",U)}},R=function(T){c=T,l=T==="stage";let U={stage:nd(yt.stages[u.stageIndex]),front:[0,2.5,7.5],left:[-6.4,2.6,-3.8],right:[6.4,2.6,-3.8],back:[0,2.5,-7.5],bottom:[0,-8,.02]};f(U[T]||U.stage),b()},E=function(){let T=n.puzzle,U=yt.frames[u.index],N=new Set(U.highlightIds),z=[["B","front",["U","L","R"]],["L","right",["U","R","B"]],["R","left",["U","B","L"]],["U","bottom",["B","R","L"]]],I=[[60,16],[13,98],[107,98]];ke("faceMaps").replaceChildren(...z.map(([O,Z,W])=>{let se=ln("button",void 0,"face-map");se.type="button",se.setAttribute("aria-label",`Nh\xECn m\u1EB7t ${Cn[O].name}, m\xE0u \u0111\xEDch ${Cn[O].color}`),se.onclick=()=>R(Z);let q=Nc("svg",{viewBox:"0 0 120 112",role:"img","aria-label":`M\u1EB7t ${Cn[O].name} t\u1EA1i tr\u1EA1ng th\xE1i ${u.index}`});for(let ee of vt.filter(te=>te.face===O)){let te=T.state[ee.id],Me=vt[te],Te=ee.barycentric.map(J=>I.reduce((le,_e,Be)=>[le[0]+_e[0]*J[pt.indexOf(W[Be])]/3,le[1]+_e[1]*J[pt.indexOf(W[Be])]/3],[0,0]));q.append(Nc("polygon",{points:Te.map(J=>J.join(",")).join(" "),fill:Cn[Me.face].hex,stroke:N.has(te)?"#ffffff":"#0c1927","stroke-width":N.has(te)?2.1:1.3,"stroke-linejoin":"round"}))}for(let ee=0;ee<3;ee++){let[te,Me]=I[ee],Te=Nc("text",{x:te,y:ee===0?Me-6:Me+11,"text-anchor":"middle",fill:"#c5d8e8","font-size":9,"font-family":"system-ui"});Te.textContent=W[ee],q.append(Te)}return se.append(q,ln("span",Cn[O].name[0].toUpperCase()+Cn[O].name.slice(1))),se}))},A=function(){n.setState(new rs(yt.frames[u.index].state),{highlightPieceIds:yt.frames[u.index].highlightPieceIds}),E()},w=function(){let T=u.index===u.count&&!u.motion,U=u.paused;ke("play").textContent=u.running?"\u2161 T\u1EA1m d\u1EEBng":U?"\u25B6 Ti\u1EBFp t\u1EE5c":"\u25B6 Ph\xE1t",ke("play").setAttribute("aria-label",u.running?"T\u1EA1m d\u1EEBng chuy\u1EC3n \u0111\u1ED9ng":U?"Ti\u1EBFp t\u1EE5c chuy\u1EC3n \u0111\u1ED9ng":"Ph\xE1t \u0111\u1EBFn h\u1EBFt h\xE0nh tr\xECnh"),ke("play").setAttribute("aria-pressed",String(u.running)),ke("play").disabled=T,ke("prev").disabled=u.index===0,ke("next").disabled=u.index===u.count,ke("prevGroup").disabled=u.index===0,ke("nextGroup").disabled=u.index===u.count,ke("seek").value=u.index,ke("position").textContent=`${u.index} / ${u.count}`,ke("playbackStatus").textContent=T?"\u0110\xE3 ho\xE0n th\xE0nh: c\u1EA3 b\u1ED1n m\u1EB7t \u0111\u1ED3ng m\xE0u.":U?"\u0110ang t\u1EA1m d\u1EEBng gi\u1EEFa n\u01B0\u1EDBc. B\u1EA5m Ti\u1EBFp t\u1EE5c \u0111\u1EC3 ho\xE0n t\u1EA5t; ch\u1ECDn m\u1ED1c kh\xE1c s\u1EBD tr\u1EDF v\u1EC1 tr\u1EA1ng th\xE1i \u0111\xFAng t\u1EA1i m\u1ED1c \u0111\xF3.":u.running?"\u0110ang ph\xE1t. C\xF3 th\u1EC3 t\u1EA1m d\u1EEBng, \u0111\u1ED5i t\u1ED1c \u0111\u1ED9 ho\u1EB7c ch\u1ECDn m\u1ED9t m\u1ED1c b\u1EA5t k\u1EF3.":`\u0110ang \u1EDF tr\u1EA1ng th\xE1i d\u1EEBng ${u.index}. M\u1ED7i s\u1ED1 li\u1EC7u v\xE0 h\xECnh b\u1ED1n m\u1EB7t \u0111\u01B0\u1EE3c t\xEDnh t\u1EEB \u0111\xFAng tr\u1EA1ng th\xE1i n\xE0y.`},_=function(){let T=yt.frames[u.index],U=yt.stages[T.stageIndex],N=u.index===u.count;if(ke("stageNumber").textContent=N?"Ho\xE0n t\u1EA5t h\xE0nh tr\xECnh":`Ch\u1EB7ng ${U.index+1} / ${yt.stages.length}`,ke("stepCounter").textContent=N?"39 / 39 n\u01B0\u1EDBc":`${u.index-U.start} / ${U.moves.length} n\u01B0\u1EDBc c\u1EE7a ch\u1EB7ng`,ke("stageSelect").value=U.index,ke("stageTitle").textContent=N?"B\u1ED1n m\u1EB7t \u0111\u1ED3ng m\xE0u. \u0110\xE3 xong.":U.title,ke("goal").textContent=N?"\u0110\u1EE7 4 ch\xF3p, 4 c\u1EE5m t\xE2m v\xE0 6 c\u1EA1nh \u0111\xFAng.":U.goal,ke("nextMove").textContent=N?"\u2713":T.nextMove,N)ke("moveExplanation").textContent="Kh\xF4ng c\xF2n n\u01B0\u1EDBc ph\u1EA3i xoay. Nh\xECn c\u1EA3 \u0111\xE1y v\xE0 m\u1EB7t sau \u0111\u1EC3 t\u1EF1 ki\u1EC3m tra.";else{let z=oi(T.nextMove);ke("moveExplanation").textContent=`${z.tip?"Ch\u1EC9 ch\xF3p nh\u1ECF":"Hai l\u1EDBp"} quanh \u0111\u1EC9nh ${z.axis}. Xoay 120\xB0 ${z.power===1?"thu\u1EADn":"ng\u01B0\u1EE3c"} chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3 khi nh\xECn t\u1EEB ch\xEDnh \u0111\u1EC9nh ${z.axis} v\xE0o l\xF5i.`}for(let z of["find","why","check"])ke(z).textContent=x0(T[z]);ke("nextText").textContent=T.next,ke("endCheck").textContent=U.check,ke("preserve").textContent=U.preserve,ke("moveRail").replaceChildren(...U.moves.map((z,I)=>{let O=U.start+I,Z=ln("button",z,u.index===O?"current":u.index>O?"done":"");return Z.title=`Xem tr\u1EA1ng th\xE1i ${O}, tr\u01B0\u1EDBc n\u01B0\u1EDBc ${z}`,Z.setAttribute("aria-label",`V\u1EC1 tr\u1EA1ng th\xE1i ${O}, tr\u01B0\u1EDBc n\u01B0\u1EDBc ${z}`),Z.onclick=()=>u.seek(O),Z})),ke("metrics").replaceChildren(...[["Ch\xF3p kh\u1EDBp t\xE2m",T.metrics.tipsAligned.length,4],["C\u1EE5m t\xE2m \u0111\xFAng",T.metrics.solvedCenters.length,4],["C\u1EA1nh \u0111\xFAng",T.metrics.solvedEdges.length,6]].map(([z,I,O])=>{let Z=ln("div",void 0,"metric"+(I===O?" full":""));return Z.append(ln("strong",`${I}/${O}`),ln("span",z)),Z}));for(let z of ke("checkpointRow").children){let I=Number(z.dataset.index);z.classList.toggle("current",N?I===u.count:I===U.start),z.classList.toggle("completed",I<u.index)}w()},M=function(){e.updateMatrixWorld();for(let[T,U]of p){let N=new D(...Ln[T]).multiplyScalar(2.3).project(e);U.style.left=`${(N.x+1)*.5*t.clientWidth}px`,U.style.top=`${(1-N.y)*.5*t.clientHeight}px`,U.hidden=N.z>1||N.z<-1,U.classList.toggle("active",u.motion?oi(u.motion.token).axis===T:!!yt.frames[u.index].nextMove&&oi(yt.frames[u.index].nextMove).axis===T)}ke("motionBadge").textContent=u.motion?`${u.motion.token} \xB7 ${u.paused?"t\u1EA1m d\u1EEBng \xB7 ":""}${Math.round(u.fraction*100)}%`:""},k=function(T){let U=T-h;h=T,u.tick(U),a.update(),M(),r.render(i,e),requestAnimationFrame(k)},i=new bs;i.background=new We("#13283b");let e=new Gt(38,1,.1,100),t=ke("viewport"),n=new ra({scale:2});i.add(n.root);let s=new D(0,.1,0),r,o,a,c="stage",l=!0,d=-1,m,h=performance.now(),p=new Map(pt.map(T=>{let U=ln("span",T,"axis-label");return ke("axisLabels").append(U),[T,U]})),u=new oa(yt,{onChange:T=>{if(["seek","cancel","commit"].includes(T))A(),_(),u.stageIndex!==d&&l&&R("stage"),d=u.stageIndex;else if(T==="motion"){let U=u.fraction;n.previewMove(u.motion.token,U*U*(3-2*U))}else w()}});ke("stageSelect").replaceChildren(...yt.stages.map(T=>{let U=ln("option",`${T.index+1}. ${T.title}`);return U.value=T.index,U})),ke("stageSelect").onchange=()=>{l=!0,u.seek(yt.stages[Number(ke("stageSelect").value)].start),R("stage")},ke("checkpointRow").replaceChildren(...[...yt.stages.map(T=>({index:T.start,label:String(T.index+1),title:T.title})),{index:yt.moves.length,label:"\u2713",title:"K\u1EBFt qu\u1EA3 \u0111\xE3 gi\u1EA3i"}].map(T=>{let U=ln("button",T.label);return U.dataset.index=T.index,U.title=T.title,U.setAttribute("aria-label",`\u0110\u1EBFn ${T.title}`),U.onclick=()=>u.seek(T.index),U})),ke("play").onclick=()=>u.toggle(),ke("prev").onclick=()=>u.step(-1),ke("next").onclick=()=>u.step(1),ke("prevGroup").onclick=()=>u.group(-1),ke("nextGroup").onclick=()=>u.group(1),ke("reset").onclick=()=>{l=!0,u.seek(0),R("stage")},ke("speed").onchange=()=>u.setSpeed(Number(ke("speed").value)),ke("seek").max=yt.moves.length,ke("seek").oninput=()=>u.seek(Number(ke("seek").value));for(let T of document.querySelectorAll("[data-camera]"))T.onclick=()=>R(T.dataset.camera);ke("disclosure").textContent=yt.disclosure,ke("notation").textContent=yt.notation,ke("scramble").textContent="T\u1EEB kh\u1ED1i \u0111\xE3 gi\u1EA3i, d\xF9ng chu\u1ED7i sau \u0111\u1EC3 t\u1EA1o \u0111\xFAng tr\u1EA1ng th\xE1i \u0111\u1EA7u: "+yt.scrambleAlgorithm,ke("branches").replaceChildren(...yt.branchNotes.map(T=>ln("li",`${T.condition}: ${T.action}`))),ke("sources").replaceChildren(...yt.sources.map(T=>{let U=ln("li"),N=ln("a",T.title);return N.href=T.url,N.target="_blank",N.rel="noopener noreferrer",U.append(N),U})),document.addEventListener("keydown",T=>{if(T.target.closest("input,select,button,a,summary,[contenteditable]")||T.altKey||T.ctrlKey||T.metaKey)return;let U={" ":()=>u.toggle(),ArrowRight:()=>T.shiftKey?u.group(1):u.step(1),ArrowLeft:()=>T.shiftKey?u.group(-1):u.step(-1),Home:()=>u.seek(0),End:()=>u.seek(u.count)};U[T.key]&&(T.preventDefault(),U[T.key]())}),S(new URLSearchParams(location.search).get("renderer")==="svg"),A(),_(),R("stage"),d=u.stageIndex,m=new ResizeObserver(g),m.observe(t),requestAnimationFrame(k),window.pyraminxQA={get stateIndex(){return u.index},get solved(){return n.puzzle.isSolved()},get signature(){return n.puzzle.signature()},get renderer(){return o},get running(){return u.running},get fraction(){return u.fraction},get motion(){return u.motion?{...u.motion}:null},get data(){return yt},seek:T=>u.seek(T),play:()=>u.play(),pause:()=>u.pause(),next:()=>u.step(1),previous:()=>u.step(-1),nextGroup:()=>u.group(1),previousGroup:()=>u.group(-1)}}catch(i){console.error(i),ke("fatalError").hidden=!1,ke("fatalError").textContent="M\xF4 h\xECnh ch\u01B0a kh\u1EDFi \u0111\u1ED9ng \u0111\u01B0\u1EE3c. H\xE3y t\u1EA3i l\u1EA1i trang. N\u1EBFu l\u1ED7i ti\u1EBFp di\u1EC5n, quay l\u1EA1i CLB Rubik \u0111\u1EC3 \u0111\u1ECDc t\xE0i li\u1EC7u; kh\xF4ng coi m\xE0n h\xECnh tr\u1ED1ng l\xE0 m\u1ED9t b\xE0i \u0111\xE3 ho\xE0n t\u1EA5t."}
/*! For license information please see app.bundle.js.LEGAL.txt */
