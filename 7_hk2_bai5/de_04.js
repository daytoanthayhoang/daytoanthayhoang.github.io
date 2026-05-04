export function veDe04(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 6, 8, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 3], B: [0, 0], C: [5, 0] }; // Vuông tại B, AB < BC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 2.5, cy = 1.5, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ABC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, 10]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pA, pB, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#1e293b'});

    // TIA PHÂN GIÁC AM VÀ ĐIỂM M
    const bisectorA = board.create('bisector', [pB, pA, pC], {visible: false});
    const pM = board.create('intersection', [bisectorA, lineBC, 0], {name: 'M', size: 3, color: '#2563eb', visible: false, label: {offset: [-10, -15]}});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const angleA1 = board.create('angle', [pB, pA, pM], {radius: 0.5, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleA2 = board.create('angle', [pM, pA, pC], {radius: 0.6, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});

    // ĐIỂM D VÀ ĐƯỜNG MD VUÔNG GÓC AC
    const pD = board.create('perpendicularpoint', [lineAC, pM], {name: 'D', size: 3, color: '#dc2626', visible: false, label: {offset: [10, 10]}});
    const lineMD = board.create('line', [pM, pD], {visible: false});
    const segMD = board.create('segment', [pM, pD], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const angleD = board.create('angle', [pM, pD, pA], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // KÉO DÀI CẮT NHAU TẠI E
    const pE = board.create('intersection', [lineAB, lineMD, 0], {name: 'E', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segME = board.create('segment', [pM, pE], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});
    
    // GIAO ĐIỂM H CỦA AM VÀ CE
    const lineAM = board.create('line', [pA, pM], {visible: false});
    const lineCE = board.create('line', [pC, pE], {visible: false});
    const pH = board.create('intersection', [lineAM, lineCE, 0], {name: 'H', size: 0, visible: false});
    const segMH = board.create('segment', [pM, pH], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#9333ea', visible: false});

    // KÝ HIỆU BẰNG NHAU
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const subAD = board.create('segment', [pA, pD], {visible: false});
    const hatchAD = board.create('hatch', [subAD, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subMB = board.create('segment', [pM, pB], {visible: false});
    const hatchMB = board.create('hatch', [subMB, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchMD = board.create('hatch', [segMD, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const hatchBE = board.create('hatch', [segBE, 3], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const subDC = board.create('segment', [pD, pC], {visible: false});
    const hatchDC = board.create('hatch', [subDC, 3], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyABM = board.create('polygon', [pA, pB, pM], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyADM = board.create('polygon', [pA, pD, pM], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyBEM = board.create('polygon', [pB, pE, pM], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyDCM = board.create('polygon', [pD, pC, pM], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});

    function executeTransform() {
        pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300);
    }

    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); },
        flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true});
                angleA1.setAttribute({visible: true}); angleA2.setAttribute({visible: true});
                pD.setAttribute({visible: true}); segMD.setAttribute({visible: true}); angleD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ tia phân giác AM và kẻ đường vuông góc MD.</div>`);
                step++;
            } 
            else if (step === 2) {
                polyABM.setAttribute({visible: true}); polyADM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu a:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- Xét hai tam giác vuông $\\Delta ABM$ (vàng) và $\\Delta ADM$ (xanh lá). Chú ý cạnh huyền chung.</li></ul>`); step++;
            } 
            else if (step === 3) {
                polyABM.setAttribute({visible: false}); polyADM.setAttribute({visible: false});
                hatchAB.setAttribute({visible: true}); hatchAD.setAttribute({visible: true});
                hatchMB.setAttribute({visible: true}); hatchMD.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABM = \\Delta ADM$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABM$ vuông tại B và $\\Delta ADM$ vuông tại D có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } AM \\text{ chung} \\\\\\\\ \\widehat{BAM} = \\widehat{DAM} \\text{ (do } AM \\text{ là phân giác của } \\widehat{A}) \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABM = \\Delta ADM$ (cạnh huyền - góc nhọn).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\begin{cases} AB = AD \\\\\\\\ MB = MD \\end{cases}$ (các cặp cạnh tương ứng).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); 
                segME.setAttribute({visible: true}); segCE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu b:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- Nhận diện <b>Trực tâm</b>. Hãy xét tam giác lớn $\\Delta AEC$, quan sát các đường cao CB và ED cắt nhau tại đâu?</li></ul>`); step++;
            }
            else if (step === 5) {
                pH.setAttribute({visible: true}); segMH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $AM \\perp CE$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta AEC$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} CB \\perp AE \\text{ (do } \\Delta ABC \\text{ vuông tại B)} \\\\\\\\ ED \\perp AC \\text{ (gt)} \\\\\\\\ CB \\text{ và } ED \\text{ cắt nhau tại } M \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow M$ là trực tâm của $\\Delta AEC$ (tính chất ba đường cao).</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AM$ là đường cao thứ ba của $\\Delta AEC \\Rightarrow AM \\perp CE$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                polyBEM.setAttribute({visible: true}); polyDCM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu c:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- <b>Bước 1:</b> Xét $\\Delta BEM$ và $\\Delta DCM$ để chứng minh $BE = DC$.</li><li>- <b>Bước 2:</b> Trong tam giác vuông, góc lớn hơn thì đối diện cạnh lớn hơn. Góc $\\widehat{C}$ hay $\\widehat{DMC}$ lớn hơn?</li></ul>`); step++;
            }
            else if (step === 7) {
                polyBEM.setAttribute({visible: false}); polyDCM.setAttribute({visible: false});
                hatchBE.setAttribute({visible: true}); hatchDC.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) So sánh $BE$ và $DM$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta BEM$ vuông tại B và $\\Delta DCM$ vuông tại D có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} MB = MD \\text{ (cmt)} \\\\\\\\ \\widehat{BME} = \\widehat{DMC} \\text{ (hai góc đối đỉnh)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta BEM = \\Delta DCM$ (cgv-gnk) $\\Rightarrow BE = DC$ (hai cạnh tương ứng).</li>
                   <hr class="border-slate-600 my-2">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta ABC$ vuông tại B có $AB < BC$ (gt) $\\Rightarrow \\widehat{ACB} < \\widehat{BAC}$ (quan hệ góc và cạnh đối diện).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trong $\\Delta MDC$ vuông tại D, ta có $\\widehat{DMC} + \\widehat{ACB} = 90^\\circ$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mặt khác $\\widehat{BAC} + \\widehat{ACB} = 90^\\circ$ (do $\\Delta ABC$ vuông tại B).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\widehat{DMC} = \\widehat{BAC}$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Vì $\\widehat{ACB} < \\widehat{BAC} \\text{ nên } \\widehat{MCD} < \\widehat{DMC}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trong $\\Delta MDC$, góc $\\widehat{C}$ đối diện cạnh $DM$, góc $\\widehat{DMC}$ đối diện cạnh $DC$ và $\\widehat{MCD} < \\widehat{DMC}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nên $DM < DC$ (quan hệ giữa cạnh và góc đối diện).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà $BE = DC$ (cmt) $\\Rightarrow DM < BE$ hay $\\mathbf{BE > DM}$.</li>
                </ul>`); step++;
            }
        }
    };
}