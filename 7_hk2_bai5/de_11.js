export function veDe11(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 6, 8, -6], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 3], C: [6, 0] }; // Vuông tại A, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 2.5, cy = 0.5, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ABC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // ĐIỂM D TRÊN BC SAO CHO BD = BA
    const circleB = board.create('circle', [pB, pA], {visible: false});
    const pD = board.create('intersection', [circleB, segBC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [10, 15]}});
    
    // ĐƯỜNG VUÔNG GÓC TỪ D CẮT AC TẠI M, CẮT BA TẠI N
    const pD_temp = board.create('perpendicularpoint', [lineBC, pD], {name: '', size: 0, visible: false});
    const lineMD = board.create('line', [pD, pD_temp], {visible: false});
    const pM = board.create('intersection', [lineMD, lineAC, 0], {name: 'M', size: 3, color: '#dc2626', visible: false, label: {offset: [5, -15]}});
    const pN = board.create('intersection', [lineMD, lineAB, 0], {name: 'N', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    
    const segDM = board.create('segment', [pD, pM], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    board.create('angle', [pC, pD, pM], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});
    const segBM = board.create('segment', [pB, pM], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const segAN = board.create('segment', [pA, pN], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segDN = board.create('segment', [pD, pN], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segNC = board.create('segment', [pN, pC], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});

    // I LÀ TRUNG ĐIỂM NC
    const pI = board.create('midpoint', [pN, pC], {name: 'I', size: 3, color: '#9333ea', visible: false, label: {offset: [15, 10]}});
    const segBI = board.create('segment', [pB, pI], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});

    // KÝ HIỆU BẰNG NHAU
    const subBA = board.create('segment', [pB, pA], {visible: false});
    const subBD = board.create('segment', [pB, pD], {visible: false});
    const hatchBA = board.create('hatch', [subBA, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchBD = board.create('hatch', [subBD, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const subMA = board.create('segment', [pM, pA], {visible: false});
    const hatchMA = board.create('hatch', [subMA, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchMD = board.create('hatch', [segDM, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subNI = board.create('segment', [pN, pI], {visible: false});
    const subIC = board.create('segment', [pI, pC], {visible: false});
    const hatchNI = board.create('hatch', [subNI, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    const hatchIC = board.create('hatch', [subIC, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyABM = board.create('polygon', [pA, pB, pM], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyDBM = board.create('polygon', [pD, pB, pM], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAMN = board.create('polygon', [pA, pM, pN], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyDMC = board.create('polygon', [pD, pM, pC], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyNBC = board.create('polygon', [pN, pB, pC], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); hatchBA.setAttribute({visible: true}); hatchBD.setAttribute({visible: true});
                pM.setAttribute({visible: true}); segDM.setAttribute({visible: true}); segBM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Lấy D trên BC sao cho $BD=BA$. Kẻ $DM \\perp BC$ tại D.</div>`); step++;
            } 
            else if (step === 2) {
                polyABM.setAttribute({visible: true}); polyDBM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABM$ (vàng) và $\\Delta DBM$ (xanh lá). Hãy tìm cạnh huyền chung và cạnh góc vuông bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABM.setAttribute({visible: false}); polyDBM.setAttribute({visible: false}); hatchMA.setAttribute({visible: true}); hatchMD.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABM = \\Delta DBM$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABM$ vuông tại A và $\\Delta DBM$ vuông tại D có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BM \\text{ chung} \\\\\\\\ BA = BD \\text{ (gt)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABM = \\Delta DBM$ (cạnh huyền - cạnh góc vuông).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\begin{cases} MA = MD \\text{ (hai cạnh tương ứng)} \\\\\\\\ \\widehat{ABM} = \\widehat{DBM} \\text{ (hai góc tương ứng)} \\end{cases}$</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pN.setAttribute({visible: true}); segAN.setAttribute({visible: true}); segDN.setAttribute({visible: true});
                polyAMN.setAttribute({visible: true}); polyDMC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $\\Delta MNC$ cân tại M, ta chứng minh $MN = MC$. Hãy xét 2 tam giác vuông nhỏ $\\Delta AMN$ và $\\Delta DMC$.</div>`); step++;
            }
            else if (step === 5) {
                polyAMN.setAttribute({visible: false}); polyDMC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $\\Delta MNC$ cân</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AMN$ vuông tại A và $\\Delta DMC$ vuông tại D có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} MA = MD \\text{ (do } \\Delta ABM = \\Delta DBM) \\\\\\\\ \\widehat{AMN} = \\widehat{DMC} \\text{ (hai góc đối đỉnh)} \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta AMN = \\Delta DMC$ (cgv-gnk).</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow MN = MC$ (hai cạnh tương ứng) $\\Rightarrow \\Delta MNC$ cân tại M.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pI.setAttribute({visible: true}); segBI.setAttribute({visible: true}); segNC.setAttribute({visible: true}); hatchNI.setAttribute({visible: true}); hatchIC.setAttribute({visible: true});
                polyNBC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Để chứng minh B, M, I thẳng hàng:<br>- <b>Cách 1:</b> Chứng minh B, M, I cùng nằm trên đường trung trực của đoạn NC.<br>- <b>Cách 2:</b> Chứng minh BM và BI cùng là tia phân giác của một góc (sử dụng $\\Delta NBI = \\Delta CBI$).</div>`); step++;
            }
            else if (step === 7) {
                polyNBC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh 3 điểm B, M, I thẳng hàng (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-purple-400">Cách 1 (Tính chất đường trung trực):</b><br>
                   - Ta có $MN = MC$ (cmt) $\\Rightarrow M$ thuộc đường trung trực của $NC$.<br>
                   - Lại có $I$ là trung điểm $NC$ (gt) $\\Rightarrow I$ thuộc đường trung trực của $NC$.<br>
                   - Mặt khác, $\\Delta AMN = \\Delta DMC \\Rightarrow AN = DC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ta có $\\begin{cases} BN = BA + AN \\\\\\\\ BC = BD + DC \\end{cases}$. Mà $\\begin{cases} BA = BD \\text{ (gt)} \\\\\\\\ AN = DC \\text{ (cmt)} \\end{cases} \\Rightarrow BN = BC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow B$ thuộc đường trung trực của $NC$.<br>
                   $\\Rightarrow B, M, I$ cùng nằm trên đường trung trực của đoạn thẳng $NC$ nên thẳng hàng.</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-purple-400">Cách 2 (Đường phân giác):</b><br>
                   - Kế thừa chứng minh $BN = BC$ ở Cách 1.<br>
                   - Xét $\\Delta NBI$ và $\\Delta CBI$ có: $\\begin{cases} BN = BC \\text{ (cmt)} \\\\\\\\ NI = CI \\text{ (gt)} \\\\\\\\ BI \\text{ là cạnh chung} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta NBI = \\Delta CBI$ (c.c.c) $\\Rightarrow \\widehat{NBI} = \\widehat{CBI}$ (hai góc tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BI$ là tia phân giác của $\\widehat{NBC}$.<br>
                   - Mà theo câu a ta đã có $\\widehat{ABM} = \\widehat{DBM} \\Rightarrow BM$ cũng là tia phân giác của $\\widehat{NBC}$.<br>
                   $\\Rightarrow$ Hai tia $BM$ và $BI$ trùng nhau. Vậy 3 điểm B, M, I thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}