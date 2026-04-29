export function veDe06(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 8, 10, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [3, 6], B: [0, 0], C: [8, 0] }; // Nhọn, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 4, cy = 3, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});

    // Phân giác AD
    const bisectorA = board.create('bisector', [pB, pA, pC], {visible: false});
    const pD = board.create('intersection', [bisectorA, segBC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    const a1 = board.create('angle', [pB, pA, pD], {radius: 1.0, withLabel: false, visible: false});
    const a2 = board.create('angle', [pD, pA, pC], {radius: 1.2, withLabel: false, visible: false});

    // Lấy E trên AC sao cho AE = AB (Sử dụng đường tròn)
    const circleA = board.create('circle', [pA, pB], {visible: false});
    const pE = board.create('intersection', [circleA, segCA, 0], {name: 'E', size: 3, color: '#dc2626', visible: false});
    const segED = board.create('segment', [pE, pD], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], visible: false, withLabel: false});
    const hatchAE = board.create('hatch', [board.create('segment',[pA,pE],{visible:false}), 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], visible: false, withLabel: false});

    // AB cắt ED tại F
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const lineED = board.create('line', [pE, pD], {visible: false});
    const pF = board.create('intersection', [lineAB, lineED, 0], {name: 'F', size: 3, color: '#16a34a', visible: false});
    
    const segBF = board.create('segment', [pB, pF], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, withLabel: false, visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    const segFC = board.create('segment', [pF, pC], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});

    // M là trung điểm FC
    const pM = board.create('midpoint', [pF, pC], {name: 'M', size: 3, color: '#ea580c', visible: false});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, withLabel: false, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true});
                a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segED.setAttribute({visible: true});
                hatchAB.setAttribute({visible: true}); hatchAE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta ABD = \\Delta AED$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ABD$ và $\\Delta AED$ có: $AB = AE$ (gt), $\\widehat{BAD} = \\widehat{EAD}$ (do $AD$ là phân giác), cạnh $AD$ chung.</li>
                   <li class="font-bold text-emerald-400">- Vậy $\\Delta ABD = \\Delta AED$ (c-g-c).</li>
                </ul>`); step++;
            } 
            else if (step === 2) {
                pF.setAttribute({visible: true}); segBF.setAttribute({visible: true}); segDF.setAttribute({visible: true}); segFC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $\\Delta FAC$ cân (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ $\\Delta ABD = \\Delta AED \\Rightarrow \\widehat{ABD} = \\widehat{AED} \\Rightarrow \\widehat{FBD} = \\widehat{CED}$ (hai góc kề bù tương ứng).</li>
                   <li>- Xét $\\Delta FBD$ và $\\Delta CED$ có: $\\widehat{FBD} = \\widehat{CED}$, $BD = ED$ (cmt), $\\widehat{BDF} = \\widehat{EDC}$ (đối đỉnh). $\\Rightarrow \\Delta FBD = \\Delta CED$ (g-c-g).</li>
                   <li class="font-bold text-emerald-400">- Suy ra $BF = EC$. Lại có $AB = AE$, cộng lại ta được $AF = AC$. Vậy $\\Delta FAC$ cân tại A.</li>
                </ul>`); step++;
            }
            else if (step === 3) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu c) Chứng minh 3 điểm A, D, M thẳng hàng (0.5đ)</b></div>
                <div class="text-xs text-amber-500 italic mb-2">*Lưu ý: Đề gốc gõ nhầm điểm C thành điểm M.</div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta FAC$ cân tại A có $M$ là trung điểm cạnh đáy $FC$.</li>
                   <li>- Trong tam giác cân, đường trung tuyến xuất phát từ đỉnh đồng thời là đường phân giác $\\Rightarrow AM$ là phân giác $\\widehat{FAC}$.</li>
                   <li class="font-bold text-emerald-400">- Mà $AD$ cũng là phân giác $\\widehat{FAC}$ (gt). Do đó $AD$ và $AM$ trùng nhau, hay 3 điểm A, D, M thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}