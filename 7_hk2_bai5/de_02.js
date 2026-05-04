export function veDe02(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 6, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 4], C: [6, 0] }; // Vuông tại A

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    // TAM GIÁC ABC
    const segAB = board.create('segment', [pB, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pB, pA, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // PHÂN GIÁC BD & GÓC BẰNG NHAU
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const pD = board.create('intersection', [bisectorB, segCA, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [10, 10]}});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const angleB1 = board.create('angle', [pA, pB, pD], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', withLabel: false, visible: false});
    const angleB2 = board.create('angle', [pD, pB, pC], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', withLabel: false, visible: false});

    // ĐƯỜNG VUÔNG GÓC DE
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pE = board.create('perpendicularpoint', [lineBC, pD], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [5, -15]}});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const angleE = board.create('angle', [pD, pE, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // GIAO ĐIỂM M VÀ TRUNG ĐIỂM K
    const lineED = board.create('line', [pE, pD], {visible: false});
    const lineBA = board.create('line', [pB, pA], {visible: false});
    const pM = board.create('intersection', [lineED, lineBA, 0], {name: 'M', size: 3, color: '#9333ea', label: {offset: [-15, -15]}, visible: false});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, visible: false});
    const segDM = board.create('segment', [pD, pM], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, visible: false});
    const segMC = board.create('segment', [pM, pC], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});

    const pK = board.create('midpoint', [pM, pC], {name: 'K', size: 3, color: '#ea580c', visible: false, label: {offset: [15, -5]}});
    const segBK = board.create('segment', [pB, pK], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    
    // KÝ HIỆU CẠNH BẰNG NHAU (Tạo các đoạn ẩn để gạch đúng giữa trung điểm)
    const subBA = board.create('segment', [pB, pA], {visible: false});
    const subBE = board.create('segment', [pB, pE], {visible: false});
    const hatchBA = board.create('hatch', [subBA, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchBE = board.create('hatch', [subBE, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subAD = board.create('segment', [pA, pD], {visible: false});
    const subED = board.create('segment', [pE, pD], {visible: false});
    const hatchAD = board.create('hatch', [subAD, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchED = board.create('hatch', [subED, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const subMK = board.create('segment', [pM, pK], {visible: false});
    const subKC = board.create('segment', [pK, pC], {visible: false});
    const hatchMK = board.create('hatch', [subMK, 3], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});
    const hatchKC = board.create('hatch', [subKC, 3], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEBD = board.create('polygon', [pE, pB, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyADM = board.create('polygon', [pA, pD, pM], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEDC = board.create('polygon', [pE, pD, pC], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyMBC = board.create('polygon', [pM, pB, pC], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});

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
                pD.setAttribute({visible: true}); segBD.setAttribute({visible: true});
                angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác BD và đường vuông góc DE.</div>`);
                step++;
            } 
            else if (step === 2) {
                polyABD.setAttribute({visible: true}); polyEBD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu a:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- Xét hai tam giác vuông $\\Delta ABD$ (vàng) và $\\Delta EBD$ (xanh lá). Hãy tìm cạnh chung và góc bằng nhau.</li></ul>`); step++;
            } 
            else if (step === 3) {
                polyABD.setAttribute({visible: false}); polyEBD.setAttribute({visible: false});
                hatchBA.setAttribute({visible: true}); hatchBE.setAttribute({visible: true});
                hatchAD.setAttribute({visible: true}); hatchED.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABD = \\Delta EBD$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ vuông tại A và $\\Delta EBD$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BD \\text{ chung} \\\\\\\\ \\widehat{ABD} = \\widehat{EBD} \\text{ (do } BD \\text{ là tia phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABD = \\Delta EBD$ (cạnh huyền - góc nhọn).<br>
                   </li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true}); 
                segDM.setAttribute({visible: true}); segMC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu b:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- Để chứng minh $\\Delta MBC$ cân, ta chứng minh $MB = BC$.</li><li>- <b>Cách 1:</b> Cộng đoạn thẳng $MB = AB + AM$ và $BC = EB + EC$.</li><li>- <b>Cách 2:</b> Xét hai tam giác vuông lớn $\\Delta BEM$ và $\\Delta BAC$.</li></ul>`); step++;
            }
            else if (step === 5) {
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $\\Delta MBC$ cân (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-pink-400">Cách 1 (Cộng đoạn thẳng):</b><br>
                   - Xét $\\Delta ADM$ và $\\Delta EDC$ vuông tại A và E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AD = ED  (\\Delta ABD = \\Delta EBD) \\\\\\\\ \\widehat{ADM} = \\widehat{EDC} \\text{ (hai góc đối đỉnh)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ADM = \\Delta EDC$ (cgv-gnk) $\\Rightarrow AM = EC$ (hai cạnh tương ứng).<br>
                   - Ta có: $\\begin{cases} BM = BA + AM \\\\\\\\ BC = BE + EC \\end{cases}$. Mà $\\begin{cases} BA = BE \\text{ (cmt)} \\\\\\\\ AM = EC \\text{ (cmt)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BM = BC \\Rightarrow \\Delta MBC$ cân tại B (tính chất).</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-pink-400">Cách 2 (Xét tam giác lớn):</b><br>
                   - Xét $\\Delta BAC$ vuông tại A và $\\Delta BEM$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BA = BE (\\Delta ABD = \\Delta EBD) \\\\\\\\ \\widehat{B} \\text{ chung} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta BAC = \\Delta BEM$ (cgv-gnk) $\\Rightarrow BC = BM$ (hai cạnh tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta MBC$ cân tại B.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pK.setAttribute({visible: true}); segBK.setAttribute({visible: true});
                hatchMK.setAttribute({visible: true}); hatchKC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu c:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- <b>Cách 1:</b> Dùng tính chất đường trung trực. Tìm các điểm cách đều M và C.</li><li>- <b>Cách 2:</b> Chứng minh $\\Delta MBK = \\Delta CBK$ để suy ra BK cũng là phân giác.</li></ul>`); step++;
            }
            else if (step === 7) {
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh ba điểm B, D, K thẳng hàng (2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-purple-400">Cách 1 (Đường trung trực):</b><br>
                   - Ta có: $\\begin{cases} BM = BC \\text{ (cmt)} \\Rightarrow B \\text{ thuộc trung trực của } MC \\\\\\\\ DM = DC \\text{ (do } \\Delta ADM = \\Delta EDC) \\Rightarrow D \\text{ thuộc trung trực của } MC \\\\\\\\ MK = KC \\text{ (K là trung điểm MC)} \\Rightarrow K \\text{ thuộc trung trực của } MC \\end{cases}$<br>
                   $\\Rightarrow B, D, K$ cùng nằm trên đường trung trực của $MC$ nên thẳng hàng.</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-purple-400">Cách 2 (Đường phân giác):</b><br>
                   - Xét $\\Delta MBK$ và $\\Delta CBK$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BM = BC \\text{ (cmt)} \\\\\\\\ MK = KC \\text{ (K là trung điểm MC)} \\\\\\\\ BK \\text{ là cạnh chung} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta MBK = \\Delta CBK$ (c.c.c) $\\Rightarrow \\widehat{MBK} = \\widehat{CBK}$ (hai góc tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BK$ là tia phân giác của $\\widehat{MBC}$.<br>
                   - Ta có $\\begin{cases} BK \\text{ là phân giác } \\widehat{MBC} \\text{ (cmt)} \\\\\\\\ BD \\text{ là phân giác } \\widehat{MBC} \\text{ (gt)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow$ Hai tia $BK$ và $BD$ trùng nhau $\\Rightarrow B, D, K$ thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}