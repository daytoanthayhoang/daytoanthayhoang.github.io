export function veDe21(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-5, 7, 5, -3], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { H: [0, 0], A: [0, 5], B: [-2.5, 0], C: [2.5, 0] }; // AH = 5, BH = 2.5 (BH < AH)

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 0, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ABC
    const pH = board.create('point', getTransformed('H'), {name: 'H', size: 3, color: '#1e293b', label: {offset: [-5, -15]}});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-5, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});

    const lineBC = board.create('line', [pB, pC], {visible: false});

    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const segBH = board.create('segment', [pB, pH], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segCH = board.create('segment', [pC, pH], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    
    const angleH1 = board.create('angle', [pA, pH, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#1e293b'});
    const angleH2 = board.create('angle', [pC, pH, pA], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#1e293b', visible: false});

    // M LÀ TRUNG ĐIỂM AC, N LÀ TRUNG ĐIỂM AB
    const pM = board.create('midpoint', [pA, pC], {name: 'M', size: 3, color: '#ea580c', visible: false, label: {offset: [15, 10]}});
    const pN = board.create('midpoint', [pA, pB], {name: 'N', size: 3, color: '#2563eb', visible: false, label: {offset: [-20, 10]}});

    const segBM = board.create('segment', [pB, pM], {strokeWidth: 1.5, strokeColor: '#ea580c', visible: false});
    const segBN = board.create('segment', [pB, pN], {strokeWidth: 1.5, strokeColor: '#2563eb', visible: false});

    // G LÀ GIAO CỦA AH VÀ BN
    const lineAH = board.create('line', [pA, pH], {visible: false});
    const lineBN = board.create('line', [pB, pN], {visible: false});
    const pG = board.create('intersection', [lineAH, lineBN, 0], {name: 'G', size: 3, color: '#9333ea', visible: false, label: {offset: [10, -10]}});

    // KÝ HIỆU BẰNG NHAU VÀ VUÔNG GÓC
    const subBH = board.create('segment', [pB, pH], {visible: false});
    const subCH = board.create('segment', [pC, pH], {visible: false});
    const hatchBH = board.create('hatch', [subBH, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const hatchCH = board.create('hatch', [subCH, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    const angleM = board.create('angle', [pA, pM, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#ea580c', visible: false});

    // MẢNG MÀU
    const polyAHB = board.create('polygon', [pA, pH, pB], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAHC = board.create('polygon', [pA, pH, pC], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAMB = board.create('polygon', [pA, pM, pB], {fillColor: '#fbcfe8', fillOpacity: 0.4, borders: {visible: false}, visible: false});
    const polyCMB = board.create('polygon', [pC, pM, pB], {fillColor: '#bfdbfe', fillOpacity: 0.4, borders: {visible: false}, visible: false});

    function executeTransform() { pH.moveTo(getTransformed('H'), 300); pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                segCH.setAttribute({visible: true}); segAC.setAttribute({visible: true}); angleH2.setAttribute({visible: true});
                hatchBH.setAttribute({visible: true}); hatchCH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ $\\Delta ABH$ vuông tại H. Lấy C trên tia đối của HB sao cho $BH = CH$. Nối AC.</div>`); step++;
            } 
            else if (step === 2) {
                polyAHB.setAttribute({visible: true}); polyAHC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét hai tam giác vuông $\\Delta AHB$ (vàng) và $\\Delta AHC$ (xanh lá). Dễ dàng nhận ra chúng có cạnh AH chung và hai cạnh đáy bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyAHB.setAttribute({visible: false}); polyAHC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta AHB = \\Delta AHC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta AHB$ vuông tại H và $\\Delta AHC$ vuông tại H có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AH \\text{ là cạnh chung} \\\\\\\\ BH = CH \\text{ (gt)} \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta AHB = \\Delta AHC$ (2 cạnh góc vuông).</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow AB = AC$ (hai cạnh tương ứng).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pN.setAttribute({visible: true}); segBN.setAttribute({visible: true}); pG.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Trong $\\Delta ABC$, ta đã có $H$ là trung điểm của $BC$. $N$ ngầm hiểu là trung điểm của $AB$. Giao điểm của hai đường trung tuyến gọi là gì?</div>`); step++;
            }
            else if (step === 5) {
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh G là trọng tâm của $\\Delta ABC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét tam giác $\\Delta ABC$, ta có:<br>
                   - $H$ là trung điểm của $BC$ (do $BH = CH$) $\\Rightarrow AH$ là đường trung tuyến thứ nhất.<br>
                   - $N$ là trung điểm của $AB$ (theo giả thiết) $\\Rightarrow BN$ là đường trung tuyến thứ hai.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mà hai đường trung tuyến $AH$ và $BN$ cắt nhau tại điểm $G$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.5)</span> $\\Rightarrow G$ là trọng tâm của $\\Delta ABC$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pM.setAttribute({visible: true}); segBM.setAttribute({visible: true}); angleM.setAttribute({visible: true});
                polyAMB.setAttribute({visible: true}); polyCMB.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Giả sử $BM \\perp AC$. Hãy xét hai tam giác vuông $\\Delta AMB$ (hồng) và $\\Delta CMB$ (xanh) để chứng minh $BA = BC$. Kết hợp với câu a để suy ra tam giác đều.</div>`); step++;
            }
            else if (step === 7) {
                polyAMB.setAttribute({visible: false}); polyCMB.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Tính số đo $\\widehat{ABC}$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Giả sử $BM \\perp AC \\Rightarrow \\widehat{AMB} = \\widehat{CMB} = 90^\\circ$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AMB$ vuông tại M và $\\Delta CMB$ vuông tại M có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BM \\text{ là cạnh chung} \\\\\\\\ AM = CM \\text{ (do } M \\text{ là trung điểm } AC) \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta AMB = \\Delta CMB$ (2 cạnh góc vuông).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BA = BC$ (hai cạnh tương ứng).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mà $AB = AC$ (do $\\Delta AHB = \\Delta AHC$ chứng minh ở câu a).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AB = BC = AC$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta ABC$ là tam giác đều.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\widehat{ABC} = 60^\\circ$.</li>
                </ul>`); step++;
            }
        }
    };
}