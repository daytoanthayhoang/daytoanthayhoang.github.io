export function veDe02(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 9, -3], 
        axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 5], C: [7, 0] }; // Vuông tại A, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0];
        let y = baseCoords[ptName][1];
        let cx = 3.5, cy = 2.5; 
        let nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx;
        if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad);
        let ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pB, pA, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // Phân giác BD
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const bisectorB = board.create('bisectorlines', [pA, pB, pC], {visible: false});
    const pD = board.create('intersection', [bisectorB.line1, lineAC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    const a1 = board.create('angle', [pA, pB, pD], {radius: 0.8, withLabel: false, visible: false});
    const a2 = board.create('angle', [pD, pB, pC], {radius: 1.0, withLabel: false, visible: false});

    // DE vuông góc BC
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pE = board.create('perpendicularpoint', [lineBC, pD], {name: 'E', size: 3, color: '#dc2626', visible: false});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleE = board.create('angle', [pD, pE, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // ED cắt BA tại M
    const lineED = board.create('line', [pE, pD], {visible: false});
    const lineBA = board.create('line', [pB, pA], {visible: false});
    const pM = board.create('intersection', [lineED, lineBA, 0], {name: 'M', size: 3, color: '#16a34a', visible: false});
    
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const segDM = board.create('segment', [pD, pM], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const segMC = board.create('segment', [pM, pC], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});

    // K là trung điểm MC
    const pK = board.create('midpoint', [pM, pC], {name: 'K', size: 3, color: '#ea580c', visible: false});
    const segBK = board.create('segment', [pB, pK], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, withLabel: false, visible: false});

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
                pD.setAttribute({visible: true}); segBD.setAttribute({visible: true});
                a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                renderLog("<b>Bước 1:</b> Vẽ đường phân giác $BD$ cắt $AC$ tại $D$.");
                step++;
            } 
            else if (step === 2) {
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                let baremA = `
                <div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta ABD = \\Delta EBD$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét hai tam giác vuông $ABD$ và $EBD$ có: $BD$ là cạnh huyền chung. <span class="float-right text-amber-400 font-bold">0.5đ</span></li>
                   <li>- $\\widehat{ABD} = \\widehat{EBD}$ (do $BD$ là phân giác) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Vậy $\\Delta ABD = \\Delta EBD$ (cạnh huyền - góc nhọn) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremA);
                step++;
            } 
            else if (step === 3) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true});
                segDM.setAttribute({visible: true}); segMC.setAttribute({visible: true});
                let baremB = `
                <div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $\\Delta MBC$ cân (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ADM$ và $\\Delta EDC$ có: $AD = ED$ (cmt), $\\widehat{ADM} = \\widehat{EDC}$ (đối đỉnh) <br>$\\Rightarrow \\Delta ADM = \\Delta EDC$ (cgv-gnk) $\\Rightarrow AM = EC$. <span class="float-right text-amber-400 font-bold">0.5đ</span></li>
                   <li>- Lại có $BA = BE$ (từ $\\Delta ABD = \\Delta EBD$) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- $BM = BA + AM$, $BC = BE + EC \\Rightarrow BM = BC$<br>
                   <span class="font-bold text-emerald-400">- Vậy $\\Delta MBC$ cân tại B.</span> <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremB);
                step++;
            }
            else if (step === 4) {
                pK.setAttribute({visible: true}); segBK.setAttribute({visible: true});
                let baremC = `
                <div class="mb-2 text-purple-300"><b>Câu c) Chứng minh B, D, K thẳng hàng (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- $\\Delta MBC$ cân tại B có $K$ là trung điểm $MC$ $\\Rightarrow BK$ là trung tuyến đồng thời là phân giác $\\widehat{MBC}$ <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Mà $BD$ cũng là phân giác $\\widehat{MBC}$ (gt) $\\Rightarrow BK$ và $BD$ trùng nhau.<br>
                   <span class="font-bold text-emerald-400">- Vậy ba điểm B, D, K thẳng hàng.</span> <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremC);
                step++;
            }
        }
    };
}