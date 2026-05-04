export function veDe03(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 6, 8, -3], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [3, 5], B: [0, 0], C: [6, 0] }; // Cân tại A

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2.5, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // ĐIỂM VÀ CẠNH TAM GIÁC ABC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-5, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b'});

    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const hatchAC = board.create('hatch', [segCA, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    // ĐƯỜNG CAO AH
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, color: '#dc2626', visible: false, label: {offset: [5, -15]}});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});
    
    const subHB = board.create('segment', [pH, pB], {visible: false});
    const subHC = board.create('segment', [pH, pC], {visible: false});
    const hatchHB = board.create('hatch', [subHB, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchHC = board.create('hatch', [subHC, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    // ĐIỂM M (Gần B hơn) VÀ N (Song song BC)
    const ratio = 0.75; // Điểm M nằm ở vị trí 75% từ A đến B (gần B)
    const pM = board.create('point', [
        () => getTransformed('A')[0]*(1 - ratio) + getTransformed('B')[0]*ratio, 
        () => getTransformed('A')[1]*(1 - ratio) + getTransformed('B')[1]*ratio
    ], {name: 'M', size: 3, color: '#2563eb', visible: false, label: {offset: [-15, 5]}});
    
    const lineMN = board.create('parallel', [lineBC, pM], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const pN = board.create('intersection', [lineMN, lineAC, 0], {name: 'N', size: 3, color: '#2563eb', visible: false, label: {offset: [15, 5]}});
    const segMN = board.create('segment', [pM, pN], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const subAM = board.create('segment', [pA, pM], {visible: false});
    const subAN = board.create('segment', [pA, pN], {visible: false});
    const hatchAM = board.create('hatch', [subAM, 3], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchAN = board.create('hatch', [subAN, 3], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    // GIAO ĐIỂM P CỦA AH VÀ MN
    const lineAH = board.create('line', [pA, pH], {visible: false});
    const pP = board.create('intersection', [lineMN, lineAH, 0], {name: 'P', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, 10]}});
    const angleP = board.create('angle', [pA, pP, pN], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#ea580c', visible: false});

    // PHÂN GIÁC CẮT TẠI Q
    const bisectorM = board.create('bisector', [pB, pM, pN], {visible: false});
    const bisectorN = board.create('bisector', [pM, pN, pC], {visible: false});
    const pQ = board.create('intersection', [bisectorM, bisectorN, 0], {name: 'Q', size: 3, color: '#9333ea', visible: false, label: {offset: [10, -10]}});
    const segMQ = board.create('segment', [pM, pQ], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, visible: false});
    const segNQ = board.create('segment', [pN, pQ], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, visible: false});
    const segAQ = board.create('segment', [pA, pQ], {strokeWidth: 1.5, strokeColor: '#16a34a', dash: 2, visible: false});

    const angleM1 = board.create('angle', [pB, pM, pQ], {radius: 0.5, fillColor: '#9333ea', strokeColor: '#9333ea', visible: false});
    const angleM2 = board.create('angle', [pQ, pM, pN], {radius: 0.6, fillColor: '#9333ea', strokeColor: '#9333ea', visible: false});
    const angleN1 = board.create('angle', [pM, pN, pQ], {radius: 0.6, fillColor: '#9333ea', strokeColor: '#9333ea', visible: false});
    const angleN2 = board.create('angle', [pQ, pN, pC], {radius: 0.5, fillColor: '#9333ea', strokeColor: '#9333ea', visible: false});

    // MẢNG MÀU
    const polyAMN = board.create('polygon', [pA, pM, pN], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyQMN = board.create('polygon', [pQ, pM, pN], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});

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
                hatchAB.setAttribute({visible: true}); hatchAC.setAttribute({visible: true});
                pH.setAttribute({visible: true}); segAH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Kẻ đường cao AH trong $\\Delta ABC$ cân tại A.</div>`); step++;
            } 
            else if (step === 2) {
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu a:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- Xét hai $\\Delta AHB$ và $\\Delta AHC$ vuông tại H. Hãy tìm cạnh huyền và cạnh góc vuông chung.</li></ul>`); step++;
            } 
            else if (step === 3) {
                hatchHB.setAttribute({visible: true}); hatchHC.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta AHB = \\Delta AHC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta AHB$ và $\\Delta AHC$ vuông tại H có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AB = AC \\text{ (do } \\Delta ABC \\text{ cân tại A)} \\\\\\\\ AH \\text{ là cạnh chung} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta AHB = \\Delta AHC$ (cạnh huyền - cạnh góc vuông).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pM.setAttribute({visible: true}); pN.setAttribute({visible: true}); segMN.setAttribute({visible: true});
                polyAMN.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu b:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- Từ $MN \\parallel BC$, sử dụng tính chất góc đồng vị để bắc cầu chứng minh $\\widehat{AMN} = \\widehat{ANM}$.</li></ul>`); step++;
            }
            else if (step === 5) {
                polyAMN.setAttribute({visible: false});
                hatchAM.setAttribute({visible: true}); hatchAN.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $\\Delta AMN$ cân</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $MN \\parallel BC$ (gt) $\\Rightarrow \\begin{cases} \\widehat{AMN} = \\widehat{ABC} \\text{ (hai góc đồng vị)} \\\\\\\\ \\widehat{ANM} = \\widehat{ACB} \\text{ (hai góc đồng vị)} \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mà $\\widehat{ABC} = \\widehat{ACB}$ (do $\\Delta ABC$ cân tại A) $\\Rightarrow \\widehat{AMN} = \\widehat{ANM}$.</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy $\\Delta AMN$ cân tại A $\\Rightarrow AM = AN$ (tính chất tam giác cân).</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pP.setAttribute({visible: true}); pQ.setAttribute({visible: true}); 
                segMQ.setAttribute({visible: true}); segNQ.setAttribute({visible: true});
                angleM1.setAttribute({visible: true}); angleM2.setAttribute({visible: true});
                angleN1.setAttribute({visible: true}); angleN2.setAttribute({visible: true});
                polyQMN.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu c:</b></div><ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4"><li>- Gọi P là giao điểm AH và MN. Xét $\\Delta AMP = \\Delta ANP$ để chứng minh AH là đường trung trực của MN.</li><li>- Chứng minh $\\Delta QMN$ cân để suy ra Q cũng nằm trên trung trực của MN.</li></ul>`); step++;
            }
            else if (step === 7) {
                polyQMN.setAttribute({visible: false}); segAQ.setAttribute({visible: true}); angleP.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh 3 điểm A, H, Q thẳng hàng</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Gọi P là giao điểm của AH và MN. Xét $\\Delta AMP$ và $\\Delta ANP$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AM = AN \\text{ (cmt)} \\\\\\\\ AP \\text{ là cạnh chung} \\\\\\\\ \\widehat{MAP} = \\widehat{NAP} \\text{ (do } \\Delta AHB = \\Delta AHC) \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta AMP = \\Delta ANP$ (c.g.c) $\\Rightarrow \\begin{cases} MP = NP \\text{ (hai cạnh tương ứng)} \\\\\\\\ \\widehat{APM} = \\widehat{APN} \\text{ (hai góc tương ứng)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà $\\widehat{APM} + \\widehat{APN} = 180^\\circ$ (hai góc kề bù) $\\Rightarrow \\widehat{APM} = 90^\\circ \\Rightarrow AH \\perp MN$ tại trung điểm P.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow$ <b>AH là trung trực của đoạn thẳng MN (1)</b>.</li>
                   <hr class="border-slate-600 my-2">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có: $\\begin{cases} \\widehat{AMN} + \\widehat{BMN} = 180^\\circ \\text{ (hai góc kề bù)} \\\\\\\\ \\widehat{ANM} + \\widehat{CNM} = 180^\\circ \\text{ (hai góc kề bù)} \\\\\\\\ \\widehat{AMN} = \\widehat{ANM} \\text{ (cmt)} \\end{cases} \\Rightarrow \\widehat{BMN} = \\widehat{CNM}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do MQ, NQ là các tia phân giác (gt) $\\Rightarrow \\widehat{QMN} = \\frac{\\widehat{BMN}}{2} = \\frac{\\widehat{CNM}}{2} = \\widehat{QNM}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta QMN$ cân tại Q $\\Rightarrow QM = QN$ (tính chất).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow$ <b>Q thuộc đường trung trực của đoạn thẳng MN (2)</b>.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Từ (1) và (2) suy ra điểm Q nằm trên đường thẳng AH. Vậy 3 điểm A, H, Q thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}