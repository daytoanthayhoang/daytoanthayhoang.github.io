export function veDe18(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 7, -4], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 5], C: [4, 0] }; // Vuông tại A, AB > AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 2, cy = 1.5, nx = x - cx, ny = y - cy;
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

    // PHÂN GIÁC BH VÀ ĐƯỜNG VUÔNG GÓC HE
    const bisectorB = board.create('bisector', [pC, pB, pA], {visible: false});
    const pH = board.create('intersection', [bisectorB, lineAC, 0], {name: 'H', size: 3, color: '#dc2626', visible: false, label: {offset: [5, 15]}});
    const segBH = board.create('segment', [pB, pH], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    
    const angleB1 = board.create('angle', [pA, pB, pH], {radius: 0.6, fillColor: '#dc2626', strokeColor: '#dc2626', visible: false});
    const angleB2 = board.create('angle', [pH, pB, pC], {radius: 0.7, fillColor: '#dc2626', strokeColor: '#dc2626', visible: false});

    const pH_perp = board.create('perpendicularpoint', [lineBC, pH], {visible: false});
    const lineHE = board.create('line', [pH, pH_perp], {visible: false});
    const pE = board.create('intersection', [lineHE, lineBC, 0], {name: 'E', size: 3, color: '#2563eb', visible: false, label: {offset: [15, 10]}});
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    board.create('angle', [pC, pE, pH], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#2563eb', visible: false});

    // GIAO ĐIỂM I VÀ NỐI CI
    const pI = board.create('intersection', [lineAB, lineHE, 0], {name: 'I', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segAI = board.create('segment', [pA, pI], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segHI = board.create('segment', [pH, pI], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    
    const segCI = board.create('segment', [pC, pI], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});

    // MẢNG MÀU
    const polyABH = board.create('polygon', [pA, pB, pH], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEBH = board.create('polygon', [pE, pB, pH], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyIBC = board.create('polygon', [pI, pB, pC], {fillColor: '#fbcfe8', fillOpacity: 0.2, borders: {visible: false}, visible: false});
    const polyIAH = board.create('polygon', [pI, pA, pH], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pH.setAttribute({visible: true}); segBH.setAttribute({visible: true}); angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segHE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác BH. Kẻ $HE \\perp BC$ tại E.</div>`); step++;
            } 
            else if (step === 2) {
                polyABH.setAttribute({visible: true}); polyEBH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABH$ (vàng) và $\\Delta EBH$ (xanh lá) là hai tam giác vuông. Hãy tìm cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABH.setAttribute({visible: false}); polyEBH.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABH = \\Delta EBH$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABH$ vuông tại A và $\\Delta EBH$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BH \\text{ chung} \\\\\\\\ \\widehat{ABH} = \\widehat{EBH} \\text{ (do } BH \\text{ là phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABH = \\Delta EBH$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pI.setAttribute({visible: true}); segAI.setAttribute({visible: true}); segHI.setAttribute({visible: true}); segCI.setAttribute({visible: true});
                polyIBC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $BH \\perp CI$, hãy chứng minh H là <b>trực tâm</b> của $\\Delta IBC$ (tím nhạt). Nhìn vào hai đường cao $CA$ và $IE$ của tam giác này.</div>`); step++;
            }
            else if (step === 5) {
                polyIBC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $BH \\perp CI$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét tam giác lớn $\\Delta IBC$, ta có:<br>
                   - $CA \\perp BI$ tại A (do $\\Delta ABC$ vuông tại A). Suy ra $CA$ là đường cao của $\\Delta IBC$.<br>
                   - $IE \\perp BC$ tại E (do $HE \\perp BC$). Suy ra $IE$ là đường cao thứ hai của $\\Delta IBC$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mà $CA$ và $IE$ cắt nhau tại H.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow H$ là trực tâm của $\\Delta IBC$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Do đó, đường thẳng đi qua B và H chính là đường cao thứ ba.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BH \\perp CI$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                polyIAH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Để so sánh $AI$ và $EH$, ta chuyển qua so sánh $AI$ và $AH$ trong $\\Delta IAH$ (xanh dương). Hãy chứng minh $\\widehat{AIH} > \\widehat{IHA}$ bằng cách liên hệ chúng với hai góc C và B của tam giác ABC ban đầu.</div>`); step++;
            }
            else if (step === 7) {
                polyIAH.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) So sánh AI và EH</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Trong $\\Delta ABC$ vuông tại A có $AB > AC \\Rightarrow \\widehat{C} > \\widehat{B}$ (quan hệ góc và cạnh đối diện).<br>
                   Mặt khác, trong $\\Delta ABC$ vuông tại A: $\\widehat{C} + \\widehat{B} = 90^\\circ$ (1).</li>
                   
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta EHC$ vuông tại E: $\\widehat{EHC} + \\widehat{C} = 90^\\circ$<br>
                   Kết hợp với (1) suy ra: $\\widehat{EHC} = \\widehat{B}$.<br>
                   Mà $\\widehat{IHA} = \\widehat{EHC}$ (đối đỉnh) $\\Rightarrow \\mathbf{\\widehat{IHA} = \\widehat{B}}$.</li>

                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta IAH$ vuông tại A: $\\widehat{AIH} + \\widehat{IHA} = 90^\\circ$<br>
                   $\\Rightarrow \\widehat{AIH} + \\widehat{B} = 90^\\circ$. Kết hợp với (1) suy ra: $\\mathbf{\\widehat{AIH} = \\widehat{C}}$.</li>
                   
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Do $\\widehat{C} > \\widehat{B}$ nên $\\widehat{AIH} > \\widehat{IHA}$.<br>
                   Xét $\\Delta IAH$ có $\\widehat{AIH} > \\widehat{IHA} \\Rightarrow AH > AI$ (quan hệ giữa cạnh và góc đối diện).<br>
                   Mà $AH = EH$ (do $\\Delta ABH = \\Delta EBH$ ở câu a).<br>
                   $\\Rightarrow \\mathbf{EH > AI}$.</li>
                </ul>`); step++;
            }
        }
    };
}