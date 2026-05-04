export function veDe13(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 6, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
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
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 10]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const angleA = board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // PHÂN GIÁC BD CẮT AC TẠI D
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const pD = board.create('intersection', [bisectorB, segAC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [5, 15]}});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const angleB1 = board.create('angle', [pA, pB, pD], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleB2 = board.create('angle', [pD, pB, pC], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});

    // LẤY E TRÊN BC SAO CHO BE = BA
    const circleB = board.create('circle', [pB, pA], {visible: false});
    const pE = board.create('intersection', [circleB, segBC, 0], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [5, -15]}});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const angleE = board.create('angle', [pD, pE, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // K LÀ GIAO CỦA ED VÀ BA
    const lineED = board.create('line', [pE, pD], {visible: false});
    const pK = board.create('intersection', [lineED, lineAB, 0], {name: 'K', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segAK = board.create('segment', [pA, pK], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segDK = board.create('segment', [pD, pK], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});

    // NỐI AE VÀ KC
    const segAE = board.create('segment', [pA, pE], {strokeWidth: 1.5, strokeColor: '#9333ea', visible: false});
    const segKC = board.create('segment', [pK, pC], {strokeWidth: 1.5, strokeColor: '#9333ea', visible: false});

    // KÝ HIỆU BẰNG NHAU
    const subBA = board.create('segment', [pB, pA], {visible: false});
    const subBE = board.create('segment', [pB, pE], {visible: false});
    const hatchBA = board.create('hatch', [subBA, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchBE = board.create('hatch', [subBE, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const subDA = board.create('segment', [pD, pA], {visible: false});
    const hatchDA = board.create('hatch', [subDA, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchDE = board.create('hatch', [segDE, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const hatchAK = board.create('hatch', [segAK, 3], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const subEC = board.create('segment', [pE, pC], {visible: false});
    const hatchEC = board.create('hatch', [subEC, 3], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEBD = board.create('polygon', [pE, pB, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyADK = board.create('polygon', [pA, pD, pK], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEDC = board.create('polygon', [pE, pD, pC], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyBKC = board.create('polygon', [pB, pK, pC], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});
    const polyBAE = board.create('polygon', [pB, pA, pE], {fillColor: '#fbcfe8', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segBD.setAttribute({visible: true}); angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); hatchBA.setAttribute({visible: true}); hatchBE.setAttribute({visible: true}); segDE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác BD. Lấy E trên BC sao cho $BA = BE$. Nối DE.</div>`); step++;
            } 
            else if (step === 2) {
                polyABD.setAttribute({visible: true}); polyEBD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABD$ (vàng) và $\\Delta EBD$ (xanh lá). Dễ dàng chứng minh bằng nhau theo trường hợp (c.g.c).</div>`); step++;
            } 
            else if (step === 3) {
                polyABD.setAttribute({visible: false}); polyEBD.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABD = \\Delta EBD$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ và $\\Delta EBD$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BA = BE \\text{ (gt)} \\\\\\\\ \\widehat{ABD} = \\widehat{EBD} \\text{ (do } BD \\text{ là phân giác)} \\\\\\\\ BD \\text{ là cạnh chung} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABD = \\Delta EBD$ (c.g.c).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pK.setAttribute({visible: true}); segAK.setAttribute({visible: true}); segDK.setAttribute({visible: true});
                polyADK.setAttribute({visible: true}); polyEDC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Lấy góc $90^\\circ$ và cạnh $DA=DE$ (từ câu a) để xét $\\Delta ADK = \\Delta EDC$. Sau đó dùng BĐT tam giác $DB+KD > BK$ để so sánh.</div>`); step++;
            }
            else if (step === 5) {
                polyADK.setAttribute({visible: false}); polyEDC.setAttribute({visible: false});
                hatchDA.setAttribute({visible: true}); hatchDE.setAttribute({visible: true}); hatchAK.setAttribute({visible: true}); hatchEC.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $DB + KD > BC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $\\widehat{BAD} = \\widehat{BED}$ (do $\\Delta ABD = \\Delta EBD$). Mà $\\widehat{BAD} = 90^\\circ$ (do $\\Delta ABC$ vuông tại A) $\\Rightarrow \\widehat{BED} = 90^\\circ$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta ADK$ vuông tại A và $\\Delta EDC$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} DA = DE \\text{ (do } \\Delta ABD = \\Delta EBD) \\\\\\\\ \\widehat{ADK} = \\widehat{EDC} \\text{ (hai góc đối đỉnh)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ADK = \\Delta EDC$ (cgv-gnk).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AK = EC$ (hai cạnh tương ứng).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $\\begin{cases} BK = BA + AK \\\\\\\\ BC = BE + EC \\end{cases}$. Mà $\\begin{cases} BA = BE \\text{ (gt)} \\\\\\\\ AK = EC \\text{ (cmt)} \\end{cases} \\Rightarrow BK = BC$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta BDK$, theo bất đẳng thức tam giác ta có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$DB + KD > BK$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thay $BK = BC$ vào, ta được: $\\mathbf{DB + KD > BC}$ (đpcm).</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                segAE.setAttribute({visible: true}); segKC.setAttribute({visible: true});
                polyBKC.setAttribute({visible: true}); polyBAE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b><br>- <b>Cách 1:</b> Sử dụng Trực tâm. Xét $\\Delta BKC$ lớn (tím), chứng minh $BD$ là đường cao. Kết hợp BD là trung trực của AE.<br>- <b>Cách 2:</b> Sử dụng Góc đồng vị của 2 tam giác cân chung đỉnh.</div>`); step++;
            }
            else if (step === 7) {
                polyBKC.setAttribute({visible: false}); polyBAE.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh $AE \\parallel KC$ (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-purple-400">Cách 1 (Sử dụng Trực tâm):</b><br>
                   - Xét $\\Delta BKC$, ta có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} CA \\perp BK \\text{ (do } \\Delta ABC \\text{ vuông tại A)} \\\\\\\\ KE \\perp BC \\text{ (do } \\widehat{BED} = 90^\\circ) \\\\\\\\ CA \\text{ cắt } KE \\text{ tại } D \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow D$ là trực tâm của $\\Delta BKC \\Rightarrow BD \\perp KC$ (1).<br>
                   - Mặt khác, ta có $\\begin{cases} BA = BE \\text{ (gt)} \\\\\\\\ DA = DE \\text{ (do } \\Delta ABD = \\Delta EBD) \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BD$ là đường trung trực của đoạn thẳng $AE \\Rightarrow BD \\perp AE$ (2).<br>
                   - Từ (1) và (2) $\\Rightarrow AE \\parallel KC$ (cùng vuông góc với $BD$).</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-purple-400">Cách 2 (Góc đồng vị):</b><br>
                   - Ta có $BK = BC \\text{ (cmt)} \\Rightarrow \\Delta BKC$ cân tại B $\\Rightarrow \\widehat{BKC} = \\frac{180^\\circ - \\widehat{B}}{2}$ (*).<br>
                   - Lại có $BA = BE \\text{ (gt)} \\Rightarrow \\Delta BAE$ cân tại B $\\Rightarrow \\widehat{BAE} = \\frac{180^\\circ - \\widehat{B}}{2}$ (**).<br>
                   - Từ (*) và (**) $\\Rightarrow \\widehat{BKC} = \\widehat{BAE}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà hai góc này nằm ở vị trí đồng vị $\\Rightarrow AE \\parallel KC$.</li>
                </ul>`); step++;
            }
        }
    };
}