export function veDe10(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 6, 8, -6], axis: false, showCopyright: false, keepaspectratio: true
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
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // ĐIỂM E TRÊN BC SAO CHO BA = BE
    const circleB = board.create('circle', [pB, pA], {visible: false});
    const pE = board.create('intersection', [circleB, segBC, 0], {name: 'E', size: 3, color: '#2563eb', visible: false, label: {offset: [10, 15]}});
    
    // ĐƯỜNG VUÔNG GÓC TỪ E CẮT AC TẠI D
    const pD_temp = board.create('perpendicularpoint', [lineBC, pE], {name: '', size: 0, visible: false});
    const lineED = board.create('line', [pE, pD_temp], {visible: false});
    const pD = board.create('intersection', [lineED, lineAC, 0], {name: 'D', size: 3, color: '#dc2626', visible: false, label: {offset: [5, -15]}});
    
    const segED = board.create('segment', [pE, pD], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const angleE = board.create('angle', [pC, pE, pD], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    // KÉO DÀI ED CẮT BA TẠI F
    const pF = board.create('intersection', [lineED, lineAB, 0], {name: 'F', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segAF = board.create('segment', [pA, pF], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segFC = board.create('segment', [pF, pC], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});

    // I LÀ TRUNG ĐIỂM CF
    const pI = board.create('midpoint', [pF, pC], {name: 'I', size: 3, color: '#9333ea', visible: false, label: {offset: [15, 10]}});
    const segBI = board.create('segment', [pB, pI], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});
    const segDI = board.create('segment', [pD, pI], {strokeWidth: 1.5, strokeColor: '#ea580c', dash: 2, visible: false});

    // KÝ HIỆU BẰNG NHAU
    const subBA = board.create('segment', [pB, pA], {visible: false});
    const subBE = board.create('segment', [pB, pE], {visible: false});
    const hatchBA = board.create('hatch', [subBA, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchBE = board.create('hatch', [subBE, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const subDA = board.create('segment', [pD, pA], {visible: false});
    const hatchDA = board.create('hatch', [subDA, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchDE = board.create('hatch', [segED, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subFI = board.create('segment', [pF, pI], {visible: false});
    const subIC = board.create('segment', [pI, pC], {visible: false});
    const hatchFI = board.create('hatch', [subFI, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    const hatchIC = board.create('hatch', [subIC, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyADB = board.create('polygon', [pA, pD, pB], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEDB = board.create('polygon', [pE, pD, pB], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyDEC = board.create('polygon', [pD, pE, pC], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyFBC = board.create('polygon', [pF, pB, pC], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pE.setAttribute({visible: true}); hatchBA.setAttribute({visible: true}); hatchBE.setAttribute({visible: true});
                pD.setAttribute({visible: true}); segED.setAttribute({visible: true}); angleE.setAttribute({visible: true}); segBD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Lấy E trên BC sao cho $BA=BE$, kẻ $ED \\perp BC$ cắt AC tại D.</div>`); step++;
            } 
            else if (step === 2) {
                polyADB.setAttribute({visible: true}); polyEDB.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ADB$ (vàng) và $\\Delta EDB$ (xanh lá). Dễ dàng nhận ra trường hợp bằng nhau dựa vào cạnh huyền chung và giả thiết $AB = BE$.</div>`); step++;
            } 
            else if (step === 3) {
                polyADB.setAttribute({visible: false}); polyEDB.setAttribute({visible: false}); hatchDA.setAttribute({visible: true}); hatchDE.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ADB = \\Delta EDB$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ADB$ vuông tại A và $\\Delta EDB$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BD \\text{ chung} \\\\\\\\ AB = EB \\text{ (gt)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ADB = \\Delta EDB$ (cạnh huyền - cạnh góc vuông).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                polyDEC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để so sánh $DA$ và $DC$, ta dùng tính chất bắc cầu thông qua cạnh $DE$. Hãy nhìn vào tam giác vuông $\\Delta DEC$ (màu hồng).</div>`); step++;
            }
            else if (step === 5) {
                polyDEC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) So sánh DA và DC</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta DEC$ vuông tại E có cạnh $DC$ là cạnh huyền.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trong tam giác vuông, cạnh huyền luôn là cạnh lớn nhất nên $DC > DE$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mặt khác, ta có $DA = DE$ (do $\\Delta ADB = \\Delta EDB$).</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Áp dụng tính chất bắc cầu, ta suy ra được: $DC > DA$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pF.setAttribute({visible: true}); segAF.setAttribute({visible: true}); segDF.setAttribute({visible: true}); segFC.setAttribute({visible: true});
                pI.setAttribute({visible: true}); segBI.setAttribute({visible: true}); hatchFI.setAttribute({visible: true}); hatchIC.setAttribute({visible: true});
                polyFBC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Để chứng minh B, D, I thẳng hàng:<br>- <b>Cách 1:</b> Chứng minh 3 điểm cùng nằm trên đường trung trực của đoạn FC.<br>- <b>Cách 2:</b> Chứng minh BD và BI cùng là tia phân giác của một góc (sử dụng $\\Delta FBI = \\Delta CBI$).</div>`); step++;
            }
            else if (step === 7) {
                polyFBC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh 3 điểm B, D, I thẳng hàng (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-purple-400">Cách 1 (Tính chất đường trung trực):</b><br>
                   - Xét $\\Delta ADF$ và $\\Delta EDC$ vuông tại A và E có: $\\begin{cases} DA = DE \\text{ (do } \\Delta ADB = \\Delta EDB) \\\\\\\\ \\widehat{ADF} = \\widehat{EDC} \\text{ (hai góc đối đỉnh)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ADF = \\Delta EDC$ (cgv-gnk) $\\Rightarrow \\begin{cases} DF = DC \\text{ (hai cạnh tương ứng)} \\\\\\\\ AF = EC \\text{ (hai cạnh tương ứng)} \\end{cases}$<br>
                   - Ta có $\\begin{cases} BF = BA + AF \\\\\\\\ BC = BE + EC \\end{cases}$. Mà $\\begin{cases} BA = BE \\text{ (gt)} \\\\\\\\ AF = EC \\text{ (cmt)} \\end{cases} \\Rightarrow BF = BC$.<br>
                   - Từ các chứng minh trên, ta có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BF = BC \\Rightarrow B \\text{ thuộc đường trung trực của } FC \\\\\\\\ DF = DC \\Rightarrow D \\text{ thuộc đường trung trực của } FC \\\\\\\\ IF = IC \\text{ (gt)} \\Rightarrow I \\text{ thuộc đường trung trực của } FC \\end{cases}$<br>
                   $\\Rightarrow B, D, I$ cùng nằm trên đường trung trực của đoạn thẳng $FC$ nên thẳng hàng.</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-purple-400">Cách 2 (Đường phân giác):</b><br>
                   - Kế thừa chứng minh $BF = BC$ ở Cách 1.<br>
                   - Xét $\\Delta FBI$ và $\\Delta CBI$ có: $\\begin{cases} BF = BC \\text{ (cmt)} \\\\\\\\ FI = CI \\text{ (gt)} \\\\\\\\ BI \\text{ là cạnh chung} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta FBI = \\Delta CBI$ (c.c.c) $\\Rightarrow \\widehat{FBI} = \\widehat{CBI}$ (hai góc tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BI$ là tia phân giác của $\\widehat{FBC}$.<br>
                   - Lại có $\\widehat{ABD} = \\widehat{EBD}$ (do $\\Delta ADB = \\Delta EDB$) $\\Rightarrow BD$ cũng là tia phân giác của $\\widehat{FBC}$.<br>
                   $\\Rightarrow$ Hai tia $BD$ và $BI$ trùng nhau. Vậy 3 điểm B, D, I thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}