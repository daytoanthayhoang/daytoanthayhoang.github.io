import {inverse} from './megaminx-engine.js';
/** Exact-state transport. Fractional motion is display-only until it completes. */
export class JourneyPlayer {
 constructor(data,{onChange=()=>{},turnMs=900,gapMs=450}={}){this.data=data;this.index=0;this.target=null;this.running=false;this.motion=null;this.gap=0;this.speed=1;this.turnMs=turnMs;this.gapMs=gapMs;this.onChange=onChange;}
 get count(){return this.data.moves.length;}
 get paused(){return !this.running&&!!this.motion;}
 get stageIndex(){return this.data.frames[this.index].stageIndex;}
 get fraction(){return this.motion?Math.max(0,Math.min(1,this.motion.elapsed/this.turnMs)):0;}
 emit(kind){this.onChange(kind,this);}
 seek(index){if(!Number.isFinite(Number(index)))throw Error('Invalid state index');this.index=Math.max(0,Math.min(this.count,Math.round(Number(index))));this.target=null;this.running=false;this.motion=null;this.gap=0;this.emit('seek');}
 setSpeed(speed){if(!Number.isFinite(speed)||speed<.25||speed>3)throw Error('Invalid playback speed');this.speed=speed;this.emit('status');}
 play(){if(this.index===this.count&&!this.motion)return;if(this.target===null||this.target===this.index)this.target=this.count;this.running=true;this.emit('status');}
 pause(){this.running=false;this.emit('status');}
 toggle(){this.running?this.pause():this.play();}
 go(target){this.target=Math.max(0,Math.min(this.count,target));this.motion=null;this.gap=0;this.running=this.target!==this.index;this.emit('cancel');if(this.running)this.emit('status');}
 step(direction){this.go(this.index+(direction<0?-1:1));}
 group(direction){const starts=this.data.stages.map(s=>s.start),bounds=[...starts,this.count];const target=direction<0?[...bounds].reverse().find(x=>x<this.index):bounds.find(x=>x>this.index);this.go(target??this.index);}
 tick(elapsedMs){if(!this.running)return;let remaining=Math.max(0,Math.min(120,elapsedMs))*this.speed;
  if(this.gap>0){const n=Math.min(this.gap,remaining);this.gap-=n;remaining-=n;if(!remaining)return;}
  if(!this.motion){if(this.target===null||this.index===this.target){this.running=false;this.target=null;this.emit('status');return;}const direction=Math.sign(this.target-this.index);this.motion={from:this.index,to:this.index+direction,token:direction>0?this.data.moves[this.index]:inverse(this.data.moves[this.index-1]),elapsed:0};this.emit('motion-start');}
  this.motion.elapsed=Math.min(this.turnMs,this.motion.elapsed+remaining);this.emit('motion');
  if(this.motion.elapsed>=this.turnMs){this.index=this.motion.to;this.motion=null;this.gap=this.gapMs;if(this.index===this.target){this.running=false;this.target=null;this.gap=0;}this.emit('commit');}
 }
}
