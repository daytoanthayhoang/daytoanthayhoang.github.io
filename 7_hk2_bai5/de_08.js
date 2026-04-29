export function veDe08(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 8, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { B: [0, 0], A: [1, 4], C: [6, 0] }; // Nhọn, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});

    // M trung điểm AC
    const pM = board.create('midpoint', [pA, pC], {name: 'M', size: 3, color: '#2563eb', visible: false});
    const segBM = board.create('segment', [pB, pM], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    const hatchAM = board.create('hatch', [board.create('segment',[pA,pM],{visible:false}), 1], {strokeWidth: 2, strokeColor: '#2563eb', tickEndings: [1, 1], visible: false, withLabel: false});
    const hatchCM = board.create('hatch', [board.create('segment',[pC,pM],{visible:false}), 1], {strokeWidth: 2, strokeColor: '#2563eb', tickEndings: [1, 1], visible: false, withLabel: false});

    // Điểm D (M là trung điểm BD)
    const pD = board.create('point', [
        () => 2 * pM.X() - pB.X(),
        () => 2 * pM.Y() - pB.Y()
    ], {name: 'D', size: 3, color: '#2563eb', visible: false});
    
    const segMD = board.create('segment', [pM, pD], {strokeWidth: 2, strokeColor: '#2563eb', dash: 2, withLabel: false, visible: false});
    const segCD = board.create('segment', [pC, pD], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});
    const hatchBM = board.create('hatch', [segBM, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false, withLabel: false});
    const hatchMD = board.create('hatch', [segMD, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false, withLabel: false});

    // Đường cao AH và điểm E (H là trung điểm AE)
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, color: '#dc2626', visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    const pE = board.create('point', [
        () => 2 * pH.X() - pA.X(),
        () => 2 * pH.Y() - pA.Y()
    ], {name: 'E', size: 3, color: '#dc2626', visible: false});
    
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#ea580c', withLabel: false, visible: false});
    const segEC = board.create('segment', [pE, pC], {strokeWidth: 2, strokeColor: '#16a34a', withLabel: false, visible: false});

    // I trung điểm EC, K giao BC và EM
    const pI = board.create('midpoint', [pE, pC], {name: 'I', size: 3, color: '#16a34a', visible: false});
    const lineEM = board.create('line', [pE, pM], {visible: false});
    const pK = board.create('intersection', [lineBC, lineEM, 0], {name: 'K', size: 3, color: '#16a34a', visible: false});
    
    const segEM = board.create('segment', [pE, pM], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const segAI = board.create('segment', [pA, pI], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});

    function executeTransform() { pB.moveTo(getTransformed('B'), 300); pA.moveTo(getTransformed('A'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pM.setAttribute({visible: true}); segBM.setAttribute({visible: true}); hatchAM.setAttribute({visible: true}); hatchCM.setAttribute({visible: true});
                pD.setAttribute({visible: true}); segMD.setAttribute({visible: true}); segCD.setAttribute({visible: true}); hatchBM.setAttribute({visible: true}); hatchMD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta ABM = \\Delta CDM$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ABM$ và $\\Delta CDM$ có: $AM = CM$ (gt), $\\widehat{AMB} = \\widehat{CMD}$ (đối đỉnh), $BM = DM$ (gt).</li>
                   <li class="font-bold text-emerald-400">- Vậy $\\Delta ABM = \\Delta CDM$ (c-g-c).</li>
                </ul>`); step++;
            } 
            else if (step === 2) {
                pH.setAttribute({visible: true}); segAH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segHE.setAttribute({visible: true}); segBE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $CD = BE$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ $\\Delta ABM = \\Delta CDM \\Rightarrow CD = AB$ (hai cạnh tương ứng). (1)</li>
                   <li>- Xét $\\Delta AHB$ và $\\Delta EHB$ vuông tại H có: $HB$ chung, $HA = HE$ (gt) $\\Rightarrow \\Delta AHB = \\Delta EHB$ (2 cgv).</li>
                   <li>- Suy ra $AB = BE$ (hai cạnh tương ứng). (2)</li>
                   <li class="font-bold text-emerald-400">- Từ (1) và (2) suy ra $CD = BE$ (cùng bằng $AB$).</li>
                </ul>`); step++;
            }
            else if (step === 3) {
                segEC.setAttribute({visible: true}); pI.setAttribute({visible: true}); pK.setAttribute({visible: true}); segEM.setAttribute({visible: true}); segAI.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu c) Chứng minh A, K, I thẳng hàng (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ACE$, do $H \\in BC$ và $H$ là trung điểm $AE$, nên $CB$ là đường trung tuyến xuất phát từ $C$.</li>
                   <li>- Mặt khác, $M$ là trung điểm $AC \\Rightarrow EM$ là đường trung tuyến xuất phát từ $E$.</li>
                   <li>- Hai đường trung tuyến $CB$ và $EM$ cắt nhau tại $K$. Do đó $K$ là <b>trọng tâm</b> của $\\Delta ACE$.</li>
                   <li>- Vì $I$ là trung điểm $EC$, nên $AI$ là đường trung tuyến thứ ba của $\\Delta ACE$.</li>
                   <li class="font-bold text-emerald-400">- Do $K$ là trọng tâm nên đường trung tuyến $AI$ bắt buộc phải đi qua $K$. Vậy A, K, I thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}