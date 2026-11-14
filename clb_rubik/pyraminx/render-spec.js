/** Oblique teaching cameras show at least two faces. Explicit face views remain square-on. */
export function stageCamera(stage){if(stage.id==='edge-lb')return[-3,3.1,-7.2];if(stage.id==='edge-rb')return[3,3.1,-7.2];return[5.1,2.7,6.3];}
export const CAMERA_SPEC={fov:38,near:.1,far:100,worldScale:2,target:[0,.1,0]};
