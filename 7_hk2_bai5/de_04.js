export function veDe04(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { B: [0, 0], A: [0, 4], C: [6, 0] }; 

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pC, pB, pA], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // Cách giải quyết lỗi: Đổi 'bisectorlines' thành 'bisector' chuẩn
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const bisectorA = board.create('bisector', [pB, pA, pC], {visible: false});
    const pM = board.create('intersection', [bisectorA, lineBC, 0], {name: 'M', size: 3, color: '#2563eb', visible: false});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    const a1 = board.create('angle', [pB, pA, pM], {radius: 0.8, withLabel: false, visible: false});
    const a2 = board.create('angle', [pM, pA, pC], {radius: 1.0, withLabel: false, visible: false});

    const lineAC = board.create('line', [pA, pC], {visible: false});
    const pD = board.create('perpendicularpoint', [lineAC, pM], {name: 'D', size: 3, color: '#dc2626', label: {offset: [15, 15]}, visible: false});
    const segMD = board.create('segment', [pM, pD], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleD = board.create('angle', [pA, pD, pM], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    const lineDM = board.create('line', [pD, pM], {visible: false});
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const pE = board.create('intersection', [lineDM, lineAB, 0], {name: 'E', size: 3, color: '#16a34a', visible: false});
    
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, withLabel: false, visible: false});
    const segME = board.create('segment', [pM, pE], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#16a34a', withLabel: false, visible: false});

    function executeTransform() { pB.moveTo(getTransformed('B'), 300); pA.moveTo(getTransformed('A'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true}); a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                pD.setAttribute({visible: true}); segMD.setAttribute({visible: true}); angleD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu a)</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1"><li>- $\\Delta ABM = \\Delta ADM$ (ch-gn) do $AM$ chung và $\\widehat{BAM} = \\widehat{DAM}$.</li></ul>`); step++;
            } 
            else if (step === 2) {
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); segME.setAttribute({visible: true}); segCE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu b)</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1"><li>- Trong $\\Delta ACE$, có đường cao $CB$ và $ED$ cắt nhau tại M $\\Rightarrow$ M là trực tâm $\\Rightarrow AM \\perp CE$.</li></ul>`); step++;
            }
            else if (step === 3) {
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu c)</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1"><li>- Chứng minh $\\Delta MBE = \\Delta MDC \\Rightarrow BE = DC$. Trong $\\Delta MDC$ vuông, góc $\\widehat{DMC} > \\widehat{C} \\Rightarrow DC > MD \\Rightarrow BE > DM$.</li></ul>`); step++;
            }
        }
    };
}