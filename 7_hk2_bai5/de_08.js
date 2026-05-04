export function veDe08(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 7, 12, -7], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [2, 5], B: [0, 0], C: [8, 0] }; // Tam giác nhọn, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 4, cy = 0, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ABC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-5, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});

    // TRUNG ĐIỂM M & ĐIỂM D (Đối xứng)
    const pM = board.create('midpoint', [pA, pC], {name: 'M', size: 3, color: '#2563eb', visible: false, label: {offset: [5, 15]}});
    const pD = board.create('point', [
        () => 2 * pM.X() - pB.X(), 
        () => 2 * pM.Y() - pB.Y()
    ], {name: 'D', size: 3, color: '#dc2626', visible: false, label: {offset: [15, 15]}});
    
    const segBM = board.create('segment', [pB, pM], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const segMD = board.create('segment', [pM, pD], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const segCD = board.create('segment', [pC, pD], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    // ĐƯỜNG CAO AH & ĐIỂM E (Đối xứng)
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, color: '#ea580c', visible: false, label: {offset: [5, 15]}});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    board.create('angle', [pA, pH, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#ea580c', visible: false});
    
    const pE = board.create('point', [
        () => 2 * pH.X() - pA.X(), 
        () => 2 * pH.Y() - pA.Y()
    ], {name: 'E', size: 3, color: '#9333ea', visible: false, label: {offset: [-15, -15]}});
    
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    // GIAO ĐIỂM K VÀ TRUNG ĐIỂM I
    const lineEM = board.create('line', [pE, pM], {visible: false});
    const pK = board.create('intersection', [lineEM, lineBC, 0], {name: 'K', size: 3, color: '#16a34a', visible: false, label: {offset: [5, 15]}});
    const segEM = board.create('segment', [pE, pM], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});
    
    const pI = board.create('midpoint', [pE, pC], {name: 'I', size: 3, color: '#0284c7', visible: false, label: {offset: [15, -15]}});
    const segAI = board.create('segment', [pA, pI], {strokeWidth: 1.5, strokeColor: '#0284c7', dash: 2, visible: false});

    // KÝ HIỆU
    const hatchAM = board.create('hatch', [board.create('segment',[pA,pM],{visible:false}), 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchMC = board.create('hatch', [board.create('segment',[pM,pC],{visible:false}), 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const hatchBM = board.create('hatch', [segBM, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchMD = board.create('hatch', [segMD, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const hatchAH = board.create('hatch', [segAH, 3], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const hatchHE = board.create('hatch', [segHE, 3], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    const hatchEI = board.create('hatch', [board.create('segment',[pE,pI],{visible:false}), 4], {strokeWidth: 2, strokeColor: '#0284c7', visible: false});
    const hatchIC = board.create('hatch', [board.create('segment',[pI,pC],{visible:false}), 4], {strokeWidth: 2, strokeColor: '#0284c7', visible: false});

    // MẢNG MÀU
    const polyABM = board.create('polygon', [pA, pB, pM], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyCDM = board.create('polygon', [pC, pD, pM], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAEC = board.create('polygon', [pA, pE, pC], {fillColor: '#e9d5ff', fillOpacity: 0.2, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pM.setAttribute({visible: true}); hatchAM.setAttribute({visible: true}); hatchMC.setAttribute({visible: true});
                pD.setAttribute({visible: true}); segBM.setAttribute({visible: true}); segMD.setAttribute({visible: true}); segCD.setAttribute({visible: true}); hatchBM.setAttribute({visible: true}); hatchMD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ trung điểm M của AC và lấy điểm D sao cho $MD = MB$.</div>`); step++;
            } 
            else if (step === 2) {
                polyABM.setAttribute({visible: true}); polyCDM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABM$ (vàng) và $\\Delta CDM$ (xanh lá). Dễ dàng nhận thấy trường hợp bằng nhau Cạnh-Góc-Cạnh (c-g-c) thông qua góc đối đỉnh.</div>`); step++;
            } 
            else if (step === 3) {
                polyABM.setAttribute({visible: false}); polyCDM.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABM = \\Delta CDM$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABM$ và $\\Delta CDM$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} MA = MC \\text{ (do M là trung điểm AC)} \\\\\\\\ \\widehat{AMB} = \\widehat{CMD} \\text{ (hai góc đối đỉnh)} \\\\\\\\ MB = MD \\text{ (gt)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABM = \\Delta CDM$ (c.g.c).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AB = CD$ (hai cạnh tương ứng).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pH.setAttribute({visible: true}); segAH.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segHE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); hatchAH.setAttribute({visible: true}); hatchHE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Kẻ đường cao AH và điểm E. Hãy quan sát $BC$, vì $BC \\perp AE$ tại $H$ và $HA = HE$ nên $BC$ đóng vai trò là <b>đường trung trực</b> của đoạn thẳng $AE$.</div>`); step++;
            }
            else if (step === 5) {
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $CD = BE$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $\\begin{cases} AH \\perp BC \\text{ tại H (gt)} \\\\\\\\ HA = HE \\text{ (gt)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BC$ là đường trung trực của đoạn thẳng $AE$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Vì điểm $B$ nằm trên đường trung trực $BC$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BA = BE$ (tính chất điểm cách đều 2 mút).</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà $AB = CD$ (chứng minh ở câu a).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra: $CD = BE$ (tính chất bắc cầu).</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pK.setAttribute({visible: true}); segCE.setAttribute({visible: true}); segEM.setAttribute({visible: true});
                pI.setAttribute({visible: true}); hatchEI.setAttribute({visible: true}); hatchIC.setAttribute({visible: true}); segAI.setAttribute({visible: true});
                polyAEC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Để chứng minh A, K, I thẳng hàng, hãy xét tam giác lớn $\\Delta AEC$ (màu tím nhạt). Tìm hiểu xem điểm K đóng vai trò là gì trong tam giác này (Giao của các đường trung tuyến).</div>`); step++;
            }
            else if (step === 7) {
                polyAEC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh A, K, I thẳng hàng</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AEC$, ta có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} M \\text{ là trung điểm của } AC \\Rightarrow EM \\text{ là đường trung tuyến.} \\\\\\\\ H \\text{ là trung điểm của } AE \\text{ (do } HA = HE) \\Rightarrow CH \\text{ là đường trung tuyến.} \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mà $EM$ cắt $CH$ tại K (do $K \\in BC \\Rightarrow K \\in CH$).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow K$ là <b>trọng tâm</b> của $\\Delta AEC$.</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lại có I là trung điểm của EC (gt) $\\Rightarrow AI$ là đường trung tuyến thứ ba của $\\Delta AEC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vì 3 đường trung tuyến của tam giác đồng quy tại trọng tâm, nên $AI$ phải đi qua $K$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy 3 điểm A, K, I thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}