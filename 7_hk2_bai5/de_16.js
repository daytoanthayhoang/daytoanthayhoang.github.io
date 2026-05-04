export function veDe16(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 6, 8, -4], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 4], C: [6, 0] }; // Vuông tại A, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 2.5, cy = 1, nx = x - cx, ny = y - cy;
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
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const lineBC = board.create('line', [pB, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // LẤY D TRÊN BC SAO CHO BD = BA
    const circleB = board.create('circle', [pB, pA], {visible: false});
    const pD = board.create('intersection', [circleB, segBC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [10, 15]}});
    
    // ĐƯỜNG VUÔNG GÓC TỪ D VỚI BC CẮT AC TẠI E, CẮT AB TẠI F
    const lineDE = board.create('perpendicular', [lineBC, pD], {visible: false});
    const pE = board.create('intersection', [lineDE, lineAC, 0], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [5, -15]}});
    const pF = board.create('intersection', [lineDE, lineAB, 0], {name: 'F', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, 15]}});
    
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    board.create('angle', [pE, pD, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    // CÁC ĐOẠN THẲNG CỦA F VÀ G
    const segAF = board.create('segment', [pA, pF], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segCF = board.create('segment', [pC, pF], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    
    const lineBE = board.create('line', [pB, pE], {visible: false});
    const pG = board.create('intersection', [lineBE, segCF, 0], {name: 'G', size: 3, color: '#16a34a', visible: false, label: {offset: [10, 10]}});
    const segEG = board.create('segment', [pE, pG], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, visible: false});
    const angleG = board.create('angle', [pC, pG, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#16a34a', visible: false});

    // KÝ HIỆU BẰNG NHAU
    const subBA = board.create('segment', [pB, pA], {visible: false});
    const subBD = board.create('segment', [pB, pD], {visible: false});
    const hatchBA = board.create('hatch', [subBA, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchBD = board.create('hatch', [subBD, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyABE = board.create('polygon', [pA, pB, pE], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyDBE = board.create('polygon', [pD, pB, pE], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyBAC = board.create('polygon', [pB, pA, pC], {fillColor: '#fbcfe8', fillOpacity: 0.3, borders: {visible: false}, visible: false});
    const polyBDF = board.create('polygon', [pB, pD, pF], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyBFC = board.create('polygon', [pB, pF, pC], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); hatchBA.setAttribute({visible: true}); hatchBD.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true}); segBE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Lấy D trên BC sao cho $BD = BA$. Kẻ $DE \\perp BC$ tại D cắt AC tại E.</div>`); step++;
            } 
            else if (step === 2) {
                polyABE.setAttribute({visible: true}); polyDBE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABE$ (vàng) và $\\Delta DBE$ (xanh lá). Hãy tìm cạnh huyền chung và cạnh góc vuông bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABE.setAttribute({visible: false}); polyDBE.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABE = \\Delta DBE$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABE$ vuông tại A và $\\Delta DBE$ vuông tại D có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BE \\text{ chung} \\\\\\\\ BA = BD \\text{ (gt)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABE = \\Delta DBE$ (cạnh huyền - cạnh góc vuông).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pF.setAttribute({visible: true}); segAF.setAttribute({visible: true}); segDF.setAttribute({visible: true});
                polyBAC.setAttribute({visible: true}); polyBDF.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $BF = BC$, ta xét 2 tam giác vuông lớn là $\\Delta BDF$ (xanh dương) và $\\Delta BAC$ (hồng). Dễ dàng thấy chúng có cạnh góc vuông $BD=BA$ và góc B chung.</div>`); step++;
            }
            else if (step === 5) {
                polyBAC.setAttribute({visible: false}); polyBDF.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $BF = BC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta BDF$ vuông tại D và $\\Delta BAC$ vuông tại A có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\widehat{B} \\text{ là góc chung} \\\\\\\\ BD = BA \\text{ (gt)} \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta BDF = \\Delta BAC$ (cgv-gnk).</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BF = BC$ (hai cạnh tương ứng).</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pG.setAttribute({visible: true}); segCF.setAttribute({visible: true}); segEG.setAttribute({visible: true});
                polyBFC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b><br>- <b>Cách 1:</b> Sử dụng <b>Tam giác bằng nhau</b>. Xét $\\Delta BFG$ và $\\Delta BCG$ để suy ra hai góc tại G bằng nhau, kết hợp kề bù để có $90^\\circ$.<br>- <b>Cách 2:</b> Sử dụng <b>Trực tâm</b>. Giao điểm của 2 đường cao trong $\\Delta BFC$ (màu tím) là điểm E.</div>`); step++;
            }
            else if (step === 7) {
                polyBFC.setAttribute({visible: false}); angleG.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh $BG \\perp CF$ (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-purple-400">Cách 1 (Sử dụng Tam giác bằng nhau & Kề bù):</b><br>
                   - Xét $\\Delta BFG$ và $\\Delta BCG$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BF = BC \\text{ (chứng minh câu b)} \\\\\\\\ \\widehat{FBG} = \\widehat{CBG} \\text{ (do } \\Delta ABE = \\Delta DBE) \\\\\\\\ BG \\text{ là cạnh chung} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta BFG = \\Delta BCG$ (c.g.c).<br>
                   - $\\Rightarrow \\widehat{BGF} = \\widehat{BGC}$ (hai góc tương ứng).<br>
                   - Mà $\\widehat{BGF} + \\widehat{BGC} = 180^\\circ$ (hai góc kề bù) $\\Rightarrow \\widehat{BGC} = \\frac{180^\\circ}{2} = 90^\\circ$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BG \\perp CF$ (điều phải chứng minh).</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-purple-400">Cách 2 (Sử dụng Trực tâm):</b><br>
                   - Xét tam giác $\\Delta BFC$, ta có hai đường cao là:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} CA \\perp BF \\text{ (do } \\Delta ABC \\text{ vuông tại A)} \\\\\\\\ FD \\perp BC \\text{ (do } ED \\perp BC) \\end{cases}$<br>
                   - Hai đường cao $CA$ và $FD$ cắt nhau tại E $\\Rightarrow E$ là <b>trực tâm</b> của $\\Delta BFC$.<br>
                   - $\\Rightarrow BE$ là đường cao thứ ba của $\\Delta BFC \\Rightarrow BE \\perp CF$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay $BG \\perp CF$ (điều phải chứng minh).</li>
                </ul>`); step++;
            }
        }
    };
}