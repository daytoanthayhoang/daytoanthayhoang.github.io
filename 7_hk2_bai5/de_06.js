export function veDe06(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 7, 10, -3], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [2, 5], B: [0, 0], C: [8, 0] }; // Tam giác nhọn, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 4, cy = 2.5, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ABC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-5, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});

    // PHÂN GIÁC AD & ĐIỂM E
    const bisectorA = board.create('bisector', [pB, pA, pC], {visible: false});
    const pD = board.create('intersection', [bisectorA, segBC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [5, -15]}});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const circleA = board.create('circle', [pA, pB], {visible: false});
    const pE = board.create('intersection', [circleA, lineAC, 0], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [15, 10]}});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    // F LÀ GIAO CỦA AB VÀ ED
    const lineED = board.create('line', [pE, pD], {visible: false});
    const pF = board.create('intersection', [lineAB, lineED, 0], {name: 'F', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segBF = board.create('segment', [pB, pF], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segFC = board.create('segment', [pF, pC], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});

    // M LÀ TRUNG ĐIỂM FC
    const pM = board.create('midpoint', [pF, pC], {name: 'M', size: 3, color: '#9333ea', visible: false, label: {offset: [10, 15]}});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});

    // KÝ HIỆU BẰNG NHAU
    const angleA1 = board.create('angle', [pB, pA, pD], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleA2 = board.create('angle', [pD, pA, pC], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const subAE = board.create('segment', [pA, pE], {visible: false});
    const hatchAE = board.create('hatch', [subAE, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subBD = board.create('segment', [pB, pD], {visible: false});
    const hatchBD = board.create('hatch', [subBD, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const hatchED = board.create('hatch', [segDE, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    const subFM = board.create('segment', [pF, pM], {visible: false});
    const subMC = board.create('segment', [pM, pC], {visible: false});
    const hatchFM = board.create('hatch', [subFM, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    const hatchMC = board.create('hatch', [subMC, 3], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});

    // MẢNG MÀU
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAED = board.create('polygon', [pA, pE, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyFBD = board.create('polygon', [pF, pB, pD], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyCED = board.create('polygon', [pC, pE, pD], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyFAC = board.create('polygon', [pA, pF, pC], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true}); angleA1.setAttribute({visible: true}); angleA2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true}); hatchAB.setAttribute({visible: true}); hatchAE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác AD và điểm E sao cho $AB = AE$.</div>`); step++;
            } 
            else if (step === 2) {
                polyABD.setAttribute({visible: true}); polyAED.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABD$ (vàng) và $\\Delta AED$ (xanh lá). Hãy tìm yếu tố Cạnh - Góc - Cạnh.</div>`); step++;
            } 
            else if (step === 3) {
                polyABD.setAttribute({visible: false}); polyAED.setAttribute({visible: false}); hatchBD.setAttribute({visible: true}); hatchED.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABD = \\Delta AED$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ và $\\Delta AED$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AB = AE \\text{ (gt)} \\\\\\\\ \\widehat{BAD} = \\widehat{EAD} \\text{ (do } AD \\text{ là phân giác)} \\\\\\\\ AD \\text{ là cạnh chung} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABD = \\Delta AED$ (c.g.c).<br>
                   </li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pF.setAttribute({visible: true}); segBF.setAttribute({visible: true}); segDF.setAttribute({visible: true}); segFC.setAttribute({visible: true});
                polyFBD.setAttribute({visible: true}); polyCED.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $\\Delta FAC$ cân tại A, hãy chứng minh $AF=AC$.<br>- <b>Cách 1:</b> Xét trực tiếp $\\Delta AFE$ và $\\Delta ACB$ theo trường hợp (g.c.g).<br>- <b>Cách 2:</b> Xét $\\Delta FBD$ và $\\Delta CED$ để lấy cạnh $BF=EC$, sau đó cộng đoạn thẳng.</div>`); step++;
            }
            else if (step === 5) {
                polyFBD.setAttribute({visible: false}); polyCED.setAttribute({visible: false}); polyFAC.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $\\Delta FAC$ cân (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-pink-400">Cách 1 (Xét tam giác lớn):</b><br>
                   - Do $\\Delta ABD = \\Delta AED \\Rightarrow \\widehat{ABD} = \\widehat{AED} \\Rightarrow \\widehat{ABC} = \\widehat{AEF}$.<br>
                   - Xét $\\Delta AFE$ và $\\Delta ACB$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\widehat{BAC} \\text{ chung} \\\\\\\\ AE = AB \\text{ (gt)} \\\\\\\\ \\widehat{AEF} = \\widehat{ABC} \\text{ (cmt)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta AFE = \\Delta ACB$ (g.c.g) $\\Rightarrow AF = AC$ (hai cạnh tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta FAC$ cân tại A.</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-pink-400">Cách 2 (Cộng đoạn thẳng):</b><br>
                   - Ta có: $\\begin{cases} \\widehat{ABD} + \\widehat{FBD} = 180^\\circ \\text{ (kề bù)} \\\\\\\\ \\widehat{AED} + \\widehat{CED} = 180^\\circ \\text{ (kề bù)} \\end{cases}$. Mà $\\widehat{ABD} = \\widehat{AED} \\text{ (cmt)} \\Rightarrow \\widehat{FBD} = \\widehat{CED}$.<br>
                   - Xét $\\Delta FBD$ và $\\Delta CED$ có: $\\begin{cases} \\widehat{FBD} = \\widehat{CED} \\text{ (cmt)} \\\\\\\\ BD = ED \\text{ (cmt)} \\\\\\\\ \\widehat{BDF} = \\widehat{EDC} \\text{ (đối đỉnh)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta FBD = \\Delta CED$ (g.c.g) $\\Rightarrow BF = EC$ (hai cạnh tương ứng).<br>
                   - Ta có $\\begin{cases} AF = AB + BF \\\\\\\\ AC = AE + EC \\end{cases}$. Mà $\\begin{cases} AB = AE \\text{ (gt)} \\\\\\\\ BF = EC \\text{ (cmt)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AF = AC \\Rightarrow \\Delta FAC$ cân tại A.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true}); hatchFM.setAttribute({visible: true}); hatchMC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b><br>- <b>Cách 1:</b> Sử dụng tính chất các điểm cách đều để suy ra A, D, M cùng nằm trên đường trung trực của FC.<br>- <b>Cách 2:</b> Xét $\\Delta AFM = \\Delta ACM$ để chứng minh AM là phân giác trùng với AD.</div>`); step++;
            }
            else if (step === 7) {
                polyFAC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh 3 điểm A, D, M thẳng hàng (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-purple-400">Cách 1 (Đường trung trực):</b><br>
                   - Ta có: $\\begin{cases} AF = AC \\text{ (cmt)} \\Rightarrow A \\text{ thuộc trung trực của } FC \\\\\\\\ MF = MC \\text{ (gt)} \\Rightarrow M \\text{ thuộc trung trực của } FC \\end{cases}$<br>
                   - Theo cm ở câu b cách 2 $(\\Delta FBD = \\Delta CED)$ có $DF=DC$ hoặc chứng minh lại từ $\\Delta AFE = \\Delta ACB$), ta có $EF = BC$. Mà $ED = BD \\text{ (cmt)}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow DF = EF - ED = BC - BD = DC \\Rightarrow D \\text{ thuộc trung trực của } FC$.<br>
                   $\\Rightarrow A, D, M$ cùng nằm trên đường trung trực của đoạn $FC$ nên thẳng hàng.</li>
                   <hr class=\"border-slate-600 my-2\">
                   <li><b class=\"text-purple-400\">Cách 2 (Đường phân giác):</b><br>
                   - Xét $\\Delta AFM$ và $\\Delta ACM$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AF = AC \\text{ (cmt)} \\\\\\\\ MF = MC \\text{ (gt)} \\\\\\\\ AM \\text{ là cạnh chung} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta AFM = \\Delta ACM$ (c.c.c) $\\Rightarrow \\widehat{FAM} = \\widehat{CAM}$ (hai góc tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AM$ là tia phân giác của $\\widehat{FAC}$.<br>
                   - Mặt khác, $AD$ cũng là tia phân giác của $\\widehat{FAC}$ (gt).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra tia $AM$ trùng với tia $AD$. Vậy ba điểm A, D, M thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}