export function veDe03(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 8, 9, -2], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [3.5, 6], B: [0.5, 0], C: [6.5, 0] }; 

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3.5, cy = 3, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const polyABC = board.create('polygon', [pA, pB, pC], {borders: {strokeWidth: 2, strokeColor: '#1e293b'}});
    const hatchAB = board.create('hatch', [polyABC.borders[0], 1], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const hatchAC = board.create('hatch', [polyABC.borders[2], 1], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});

    const pH = board.create('midpoint', [pB, pC], {name: 'H', size: 3, color: '#dc2626', visible: false}); 
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#dc2626', visible: false});

    const pM = board.create('point', [() => pB.X() + 0.45 * (pA.X() - pB.X()), () => pB.Y() + 0.45 * (pA.Y() - pB.Y())], {name: 'M', size: 3, color: '#2563eb', visible: false});
    const pN = board.create('point', [() => pC.X() + 0.45 * (pA.X() - pC.X()), () => pC.Y() + 0.45 * (pA.Y() - pC.Y())], {name: 'N', size: 3, color: '#2563eb', visible: false});
    const segMN = board.create('segment', [pM, pN], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});

    // Cách giải quyết lỗi: Đổi 'bisectorlines' thành 'bisector' chuẩn
    const bisectM = board.create('bisector', [pN, pM, pB], {visible: false});
    const bisectN = board.create('bisector', [pC, pN, pM], {visible: false});
    const pQ = board.create('intersection', [bisectM, bisectN, 0], {name: 'Q', size: 3, color: '#9333ea', visible: false});
    
    const segMQ = board.create('segment', [pM, pQ], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, withLabel: false, visible: false});
    const segNQ = board.create('segment', [pN, pQ], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, withLabel: false, visible: false});
    const segHQ = board.create('segment', [pH, pQ], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pH.setAttribute({visible: true}); segAH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu a)</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1"><li>- Xét hai $\\Delta AHB$ và $\\Delta AHC$ vuông có $AB = AC$, $AH$ chung $\\Rightarrow \\Delta AHB = \\Delta AHC$ (ch-cgv).</li></ul>`); step++;
            } 
            else if (step === 2) {
                pM.setAttribute({visible: true}); pN.setAttribute({visible: true}); segMN.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu b)</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1"><li>- $MN \\parallel BC \\Rightarrow \\widehat{AMN} = \\widehat{ABC}$ và $\\widehat{ANM} = \\widehat{ACB}$ (đồng vị). Mà $\\widehat{ABC} = \\widehat{ACB}$ $\\Rightarrow \\widehat{AMN} = \\widehat{ANM} \\Rightarrow \\Delta AMN$ cân.</li></ul>`); step++;
            } 
            else if (step === 3) {
                pQ.setAttribute({visible: true}); segMQ.setAttribute({visible: true}); segNQ.setAttribute({visible: true}); segHQ.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu c)</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1"><li>- Chứng minh được $MB = NC$ và $\\widehat{QMB} = \\widehat{QNC} \\Rightarrow \\Delta MBQ = \\Delta NCQ \\Rightarrow QB = QC$. Do đó Q thuộc trung trực BC. Mà A, H cũng thuộc trung trực BC $\\Rightarrow A, H, Q$ thẳng hàng.</li></ul>`); step++;
            }
        }
    };
}