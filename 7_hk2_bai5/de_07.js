export function veDe07(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 6, 8, -5], axis: false, showCopyright: false, keepaspectratio: true
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
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // PHÂN GIÁC BD & ĐIỂM E
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const pD = board.create('intersection', [bisectorB, segAC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [5, 15]}});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pE = board.create('perpendicularpoint', [lineBC, pD], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [10, 10]}});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const angleE = board.create('angle', [pD, pE, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // M LÀ GIAO CỦA AB VÀ DE
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const lineDE = board.create('line', [pD, pE], {visible: false});
    const pM = board.create('intersection', [lineAB, lineDE, 0], {name: 'M', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const segDM = board.create('segment', [pD, pM], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const segMC = board.create('segment', [pM, pC], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, visible: false});

    // KÝ HIỆU
    const angleB1 = board.create('angle', [pA, pB, pD], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleB2 = board.create('angle', [pD, pB, pC], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const subBE = board.create('segment', [pB, pE], {visible: false});
    const hatchBE = board.create('hatch', [subBE, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subAD = board.create('segment', [pA, pD], {visible: false});
    const hatchAD = board.create('hatch', [subAD, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const hatchDE = board.create('hatch', [segDE, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    const hatchAM = board.create('hatch', [segAM, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    const subEC = board.create('segment', [pE, pC], {visible: false});
    const hatchEC = board.create('hatch', [subEC, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});

    // MẢNG MÀU
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEBD = board.create('polygon', [pE, pB, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    
    // Mảng màu cho câu b (2 cách)
    const polyBAC = board.create('polygon', [pB, pA, pC], {fillColor: '#fbcfe8', fillOpacity: 0.3, borders: {visible: false}, visible: false});
    const polyBME = board.create('polygon', [pB, pM, pE], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {visible: false}, visible: false});
    const polyADM = board.create('polygon', [pA, pD, pM], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEDC = board.create('polygon', [pE, pD, pC], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segBD.setAttribute({visible: true}); angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác BD và kẻ $DE \\perp BC$.</div>`); step++;
            } 
            else if (step === 2) {
                polyABD.setAttribute({visible: true}); polyEBD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét 2 tam giác vuông $\\Delta ABD$ (vàng) và $\\Delta EBD$ (xanh lá). Tìm cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABD.setAttribute({visible: false}); polyEBD.setAttribute({visible: false}); hatchAB.setAttribute({visible: true}); hatchBE.setAttribute({visible: true}); hatchAD.setAttribute({visible: true}); hatchDE.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABD = \\Delta EBD$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ vuông tại A và $\\Delta EBD$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BD \\text{ chung} \\\\\\\\ \\widehat{ABD} = \\widehat{EBD} \\text{ (do } BD \\text{ là phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABD = \\Delta EBD$ (cạnh huyền - góc nhọn).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\begin{cases} BA = BE \\\\\\\\ DA = DE \\end{cases}$ (các cặp cạnh tương ứng).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true}); segDM.setAttribute({visible: true}); segMC.setAttribute({visible: true});
                polyBAC.setAttribute({visible: true}); polyBME.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $\\Delta BCM$ cân tại B, ta cần chứng minh $BM = BC$.<br>- <b>Cách 1:</b> Xét trực tiếp hai tam giác vuông lớn $\\Delta BAC$ và $\\Delta BME$.<br>- <b>Cách 2:</b> Xét $\\Delta ADM$ và $\\Delta EDC$ để lấy cạnh $AM = EC$ rồi cộng đoạn thẳng.</div>`); step++;
            }
            else if (step === 5) {
                polyBAC.setAttribute({visible: false}); polyBME.setAttribute({visible: false});
                hatchAM.setAttribute({visible: true}); hatchEC.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $\\Delta BCM$ cân tại B (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-pink-400">Cách 1 (Xét tam giác lớn):</b><br>
                   - Xét $\\Delta BAC$ vuông tại A và $\\Delta BME$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BA = BE \\text{ (cmt)} \\\\\\\\ \\widehat{B} \\text{ là góc chung} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta BAC = \\Delta BME$ (cgv-gnk) $\\Rightarrow BC = BM$ (hai cạnh tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta BCM$ cân tại B (tính chất).</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-pink-400">Cách 2 (Cộng đoạn thẳng):</b><br>
                   - Xét $\\Delta ADM$ vuông tại A và $\\Delta EDC$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} DA = DE \\text{ (cmt)} \\\\\\\\ \\widehat{ADM} = \\widehat{EDC} \\text{ (hai góc đối đỉnh)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ADM = \\Delta EDC$ (cgv-gnk) $\\Rightarrow AM = EC$ (hai cạnh tương ứng).<br>
                   - Ta có: $\\begin{cases} BM = BA + AM \\\\\\\\ BC = BE + EC \\end{cases}$. Mà $\\begin{cases} BA = BE \\text{ (cmt)} \\\\\\\\ AM = EC \\text{ (cmt)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BM = BC \\Rightarrow \\Delta BCM$ cân tại B.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                polyADM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Để chứng minh $AD + EC > DM$, hãy áp dụng <b>Bất đẳng thức tam giác</b> trong $\\Delta ADM$ (màu hồng) sau đó dùng tính chất bắt cầu (thay thế $AM$ bằng $EC$).</div>`); step++;
            }
            else if (step === 7) {
                polyADM.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh $AD + EC > DM$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta ADM$, áp dụng bất đẳng thức tam giác ta có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$AD + AM > DM$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Theo chứng minh ở câu b, ta đã có $AM = EC$.</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thay $AM$ bằng $EC$ vào bất đẳng thức trên, ta được:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$AD + EC > DM$ (điều phải chứng minh).</li>
                </ul>`); step++;
            }
        }
    };
}