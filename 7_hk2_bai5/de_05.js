export function veDe05(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 10, -4], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { C: [0, 0], A: [0, 4], E: [7, 0] }; // Vuông tại C, CE > AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3.5, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ACE
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pE = board.create('point', getTransformed('E'), {name: 'E', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAE = board.create('segment', [pA, pE], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pA, pC, pE], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // PHÂN GIÁC AD & ĐIỂM B
    const bisectorA = board.create('bisector', [pC, pA, pE], {visible: false});
    const pD = board.create('intersection', [bisectorA, segCE, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [5, -15]}});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const lineAE = board.create('line', [pA, pE], {visible: false});
    const pB = board.create('perpendicularpoint', [lineAE, pD], {name: 'B', size: 3, color: '#dc2626', visible: false, label: {offset: [10, 10]}});
    const segDB = board.create('segment', [pD, pB], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const angleB = board.create('angle', [pA, pB, pD], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // TIA BD CẮT AC TẠI H
    const lineDB = board.create('line', [pD, pB], {visible: false});
    const pH = board.create('intersection', [lineDB, lineAC, 0], {name: 'H', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, 10]}});
    const segCH = board.create('segment', [pC, pH], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const segDH = board.create('segment', [pD, pH], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    // NỐI BC VÀ HE
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, visible: false});
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});

    // KÝ HIỆU
    const angleA1 = board.create('angle', [pC, pA, pD], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleA2 = board.create('angle', [pD, pA, pB], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    
    const hatchAC = board.create('hatch', [segAC, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const subAB = board.create('segment', [pA, pB], {visible: false});
    const hatchAB = board.create('hatch', [subAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subCD = board.create('segment', [pC, pD], {visible: false});
    const hatchCD = board.create('hatch', [subCD, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const hatchBD = board.create('hatch', [segDB, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    // MẢNG MÀU
    const polyACD = board.create('polygon', [pA, pC, pD], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyDCH = board.create('polygon', [pD, pC, pH], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyDBE = board.create('polygon', [pD, pB, pE], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});

    function executeTransform() { pC.moveTo(getTransformed('C'), 300); pA.moveTo(getTransformed('A'), 300); pE.moveTo(getTransformed('E'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true}); angleA1.setAttribute({visible: true}); angleA2.setAttribute({visible: true});
                pB.setAttribute({visible: true}); segDB.setAttribute({visible: true}); angleB.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác AD và kẻ $DB \\perp AE$.</div>`); step++;
            } 
            else if (step === 2) {
                polyACD.setAttribute({visible: true}); polyABD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét 2 tam giác vuông $\\Delta ACD$ (vàng) và $\\Delta ABD$ (xanh lá). Tìm cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyACD.setAttribute({visible: false}); polyABD.setAttribute({visible: false}); hatchAC.setAttribute({visible: true}); hatchAB.setAttribute({visible: true}); hatchCD.setAttribute({visible: true}); hatchBD.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ACD = \\Delta ABD$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ACD$ vuông tại C và $\\Delta ABD$ vuông tại B có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AD \\text{ chung} \\\\\\\\ \\widehat{CAD} = \\widehat{BAD} \\text{ (do } AD \\text{ là phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ACD = \\Delta ABD$ (cạnh huyền - góc nhọn).<br>
                   </li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pH.setAttribute({visible: true}); segCH.setAttribute({visible: true}); segDH.setAttribute({visible: true}); segBE.setAttribute({visible: true});
                polyDCH.setAttribute({visible: true}); polyDBE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $\\Delta DHE$ cân, hãy xét $\\Delta DCH$ (hồng) và $\\Delta DBE$ (xanh). Từ đó suy ra $DH = DE$.</div>`); step++;
            }
            else if (step === 5) {
                polyDCH.setAttribute({visible: false}); polyDBE.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $\\Delta DHE$ cân</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta DCH$ vuông tại C và $\\Delta DBE$ vuông tại B có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} CD = BD  (\\Delta ACD = \\Delta ABD) \\\\\\\\ \\widehat{CDH} = \\widehat{BDE} \\text{ (hai góc đối đỉnh)} \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta DCH = \\Delta DBE$ (cgv-gnk) $\\Rightarrow DH = DE$ (hai cạnh tương ứng).</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy $\\Delta DHE$ cân tại D.<br>
                   <i>(Lưu ý thêm: Do $\\Delta DCH = \\Delta DBE \\Rightarrow CH = BE$)</i>.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                segBC.setAttribute({visible: true}); segHE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b><br>- <b>Cách 1:</b> Chứng minh D là trực tâm của $\\Delta AHE$ để có $AD \\perp HE$, và AD là trung trực của BC để có $AD \\perp BC$.<br>- <b>Cách 2:</b> Chứng minh $\\Delta ABC$ và $\\Delta AHE$ cùng cân tại A để suy ra 2 góc ở đáy bằng nhau (đồng vị).</div>`); step++;
            }
            else if (step === 7) {
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh $BC \\parallel HE$ (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-purple-400">Cách 1 (Trực tâm & Trung trực):</b><br>
                   - Xét $\\Delta AHE$ có: $\\begin{cases} EC \\perp AH \\text{ (do } AC \\perp CE) \\\\\\\\ HB \\perp AE \\text{ (do } DB \\perp AE) \\\\\\\\ EC \\text{ cắt } HB \\text{ tại } D \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow D$ là trực tâm của $\\Delta AHE \\Rightarrow AD \\perp HE$ (1).<br>
                   - Mặt khác, ta có $\\begin{cases} AC = AB \\text{ (cmt)} \\\\\\\\ CD = BD \\text{ (cmt)} \\end{cases} \\Rightarrow AD$ là đường trung trực của đoạn thẳng $BC \\Rightarrow AD \\perp BC$ (2).<br>
                   - Từ (1) và (2) $\\Rightarrow BC \\parallel HE$ (cùng vuông góc với $AD$).</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-purple-400">Cách 2 (Góc đồng vị):</b><br>
                   - Ta có $\\begin{cases} AH = AC + CH \\\\\\\\ AE = AB + BE \\end{cases}$. Mà $\\begin{cases} AC = AB \\text{ (cmt)} \\\\\\\\ CH = BE \\text{ (cmt)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AH = AE \\Rightarrow \\Delta AHE$ cân tại A $\\Rightarrow \\widehat{AHE} = \\frac{180^\\circ - \\widehat{A}}{2}$ (*).<br>
                   - Lại có $AC = AB \\text{ (cmt)} \\Rightarrow \\Delta ABC$ cân tại A $\\Rightarrow \\widehat{ACB} = \\frac{180^\\circ - \\widehat{A}}{2}$ (**).<br>
                   - Từ (*) và (**) $\\Rightarrow \\widehat{AHE} = \\widehat{ACB}$. Mà hai góc này nằm ở vị trí đồng vị $\\Rightarrow BC \\parallel HE$.</li>
                </ul>`); step++;
            }
        }
    };
}