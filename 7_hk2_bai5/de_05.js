export function veDe05(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    // Vuông tại C, CE > AC
    const baseCoords = { C: [0, 0], A: [0, 4], E: [6, 0] };

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pE = board.create('point', getTransformed('E'), {name: 'E', size: 3, color: '#1e293b'});
    
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segEA = board.create('segment', [pE, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pE, pC, pA], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // Phân giác góc A cắt CE tại D
    const bisectorA = board.create('bisector', [pC, pA, pE], {visible: false});
    const pD = board.create('intersection', [bisectorA, segCE, 0], {name: 'D', size: 3, color: '#2563eb', visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    const a1 = board.create('angle', [pC, pA, pD], {radius: 0.8, withLabel: false, visible: false});
    const a2 = board.create('angle', [pD, pA, pE], {radius: 1.0, withLabel: false, visible: false});

    // DB vuông góc AE tại B
    const pB = board.create('perpendicularpoint', [segEA, pD], {name: 'B', size: 3, color: '#dc2626', visible: false});
    const segDB = board.create('segment', [pD, pB], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleB = board.create('angle', [pD, pB, pA], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // Tia BD cắt AC tại H
    const lineBD = board.create('line', [pB, pD], {visible: false});
    const lineAC_ext = board.create('line', [pA, pC], {visible: false});
    const pH = board.create('intersection', [lineBD, lineAC_ext, 0], {name: 'H', size: 3, color: '#16a34a', visible: false});
    
    const segCH = board.create('segment', [pC, pH], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, withLabel: false, visible: false});
    const segDH = board.create('segment', [pD, pH], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#ea580c', withLabel: false, visible: false});

    function executeTransform() { pC.moveTo(getTransformed('C'), 300); pA.moveTo(getTransformed('A'), 300); pE.moveTo(getTransformed('E'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true});
                a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                pB.setAttribute({visible: true}); segDB.setAttribute({visible: true}); angleB.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta ACD = \\Delta ABD$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét 2 tam giác vuông $ACD$ và $ABD$ có: $AD$ là cạnh huyền chung.</li>
                   <li>- $\\widehat{CAD} = \\widehat{BAD}$ (do $AD$ là phân giác).</li>
                   <li class="font-bold text-emerald-400">- Vậy $\\Delta ACD = \\Delta ABD$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 2) {
                pH.setAttribute({visible: true}); segCH.setAttribute({visible: true}); segDH.setAttribute({visible: true}); segHE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $\\Delta DHE$ cân (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ câu a ta có $CD = BD$. Xét $\\Delta HCD$ và $\\Delta EBD$ vuông tại C và B.</li>
                   <li>- Có $CD = BD$ và $\\widehat{HDC} = \\widehat{EDB}$ (đối đỉnh) $\\Rightarrow \\Delta HCD = \\Delta EBD$ (cgv-gnk).</li>
                   <li class="font-bold text-emerald-400">- Suy ra $DH = DE$ (2 cạnh tương ứng). Vậy $\\Delta DHE$ cân tại D.</li>
                </ul>`); step++;
            }
            else if (step === 3) {
                segBC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu c) Chứng minh $BC \\parallel HE$ (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ $\\Delta ACD = \\Delta ABD \\Rightarrow AC = AB$. Từ $\\Delta HCD = \\Delta EBD \\Rightarrow CH = BE$.</li>
                   <li>- Cộng đoạn thẳng: $AH = AC+CH$, $AE = AB+BE \\Rightarrow AH = AE \\Rightarrow \\Delta AHE$ cân tại A.</li>
                   <li>- Trong $\\Delta AHE$ cân, phân giác $AD$ đồng thời là đường cao $\\Rightarrow AD \\perp HE$.</li>
                   <li class="font-bold text-emerald-400">- Chứng minh tương tự $AD \\perp BC$. Từ đó suy ra $BC \\parallel HE$. (đpcm)</li>
                </ul>`); step++;
            }
        }
    };
}