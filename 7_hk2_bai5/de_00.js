export function veDe00(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 8, 12, -5], 
        axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 4], B: [0, 0], C: [7, 4] }; // Tam giác vuông tại A

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0];
        let y = baseCoords[ptName][1];
        let cx = 3.5, cy = 2; 
        let nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx;
        if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad);
        let ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, 15]}});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // Bước 1: Đường cao AH và điểm D
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, color: '#dc2626', label: {offset: [5, -15]}, visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    const pD = board.create('reflection', [pB, pH], {name: 'D', size: 3, color: '#2563eb', label: {offset: [5, 15]}, visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    const segBH = board.create('segment', [pB, pH], {visible: false});
    const segHD = board.create('segment', [pH, pD], {visible: false});
    const hatchHB = board.create('hatch', [segBH, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], visible: false, withLabel: false});
    const hatchHD = board.create('hatch', [segHD, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], visible: false, withLabel: false});

    // Bước 2: CE vuông góc AD tại E
    const lineAD = board.create('line', [pA, pD], {visible: false});
    const pE = board.create('perpendicularpoint', [lineAD, pC], {name: 'E', size: 3, color: '#16a34a', label: {offset: [15, -5]}, visible: false});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, withLabel: false, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#16a34a', withLabel: false, visible: false});
    const angleE = board.create('angle', [pC, pE, pA], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#16a34a', visible: false});

    function executeTransform() {
        pA.moveTo(getTransformed('A'), 300);
        pB.moveTo(getTransformed('B'), 300);
        pC.moveTo(getTransformed('C'), 300);
    }

    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); },
        flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pH.setAttribute({visible: true}); segAH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true});
                segBH.setAttribute({visible: true}); segHD.setAttribute({visible: true});
                hatchHB.setAttribute({visible: true}); hatchHD.setAttribute({visible: true});
                
                let baremA = `
                <div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta AHB = \\Delta AHD$ và $\\Delta ABD$ cân (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta AHB$ và $\\Delta AHD$ vuông tại H có: $AH$ chung, $HB = HD$ (gt) <span class="float-right text-amber-400 font-bold">0.5đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Vậy $\\Delta AHB = \\Delta AHD$ (2 cạnh góc vuông) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Suy ra $AB = AD$ (hai cạnh tương ứng), do đó $\\Delta ABD$ cân tại A. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremA);
                step++;
            } 
            else if (step === 2) {
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true});
                segCE.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                
                let baremB = `
                <div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $\\widehat{BAH} = \\widehat{ACB}$ và $\\widehat{ECD} = \\widehat{ACB}$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Trong $\\Delta ABC$ (vuông tại A): $\\widehat{ACB} + \\widehat{B} = 90^\\circ$. Trong $\\Delta AHB$ (vuông tại H): $\\widehat{BAH} + \\widehat{B} = 90^\\circ$. Suy ra $\\widehat{BAH} = \\widehat{ACB}$. <span class="float-right text-amber-400 font-bold">0.5đ</span></li>
                   <li>- Lại có $\\widehat{CDE} = \\widehat{ADB}$ (đối đỉnh) và $\\widehat{ADB} = \\widehat{B}$ (do $\\Delta ABD$ cân) $\\Rightarrow \\widehat{CDE} = \\widehat{B}$.<br>
                   Trong $\\Delta CDE$ vuông tại E: $\\widehat{ECD} + \\widehat{CDE} = 90^\\circ \\Rightarrow \\widehat{ECD} + \\widehat{B} = 90^\\circ$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Kết hợp với $\\widehat{ACB} + \\widehat{B} = 90^\\circ$, suy ra $\\widehat{ECD} = \\widehat{ACB}$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremB);
                step++;
            }
            else if (step === 3) {
                let baremC = `
                <div class="mb-2 text-purple-300"><b>Câu c) Chứng minh $CB$ là tia phân giác của $\\widehat{ACE}$ (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Ta có $\\widehat{ECD} = \\widehat{ACB}$ (chứng minh trên). <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Mà tia $CB$ (chứa điểm D) nằm giữa hai tia $CA$ và $CE$. Vậy $CB$ là tia phân giác của góc $\\widehat{ACE}$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremC);
                step++;
            }
        }
    };
}