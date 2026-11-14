/* cube.js MIT: see vendor/LICENSE.cubejs.txt. Runs off the UI thread. */
importScripts('vendor/cube.js','vendor/solve.js');
let ready=false;
self.onmessage=({data})=>{
 try {
  if(!ready){self.postMessage({type:'initializing'});Cube.initSolver();ready=true;}
  const cube=Cube.fromString(data.facelets);
  const algorithm=cube.solve(22);
  if(typeof algorithm!=='string'||!cube.clone().move(algorithm).isSolved())throw new Error('Lời giải chưa đạt kiểm tra.');
  self.postMessage({type:'solution',algorithm,id:data.id});
 } catch(e){self.postMessage({type:'error',message:String(e.message||e),id:data.id});}
};
