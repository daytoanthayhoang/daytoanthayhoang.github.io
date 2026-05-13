export function veDe19(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 6, 8, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 4], C: [6, 0] }; // Vuông tại A

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 2.5, cy = 0.5, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ABC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 10]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});

    const lineBA = board.create('line', [pB, pA], {visible: false});
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // TIA PHÂN GIÁC BI
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const pI = board.create('intersection', [bisectorB, segAC, 0], {name: 'I', size: 3, color: '#2563eb', visible: false, label: {offset: [5, 15]}});
    const segBI = board.create('segment', [pB, pI], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const angleB1 = board.create('angle', [pA, pB, pI], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleB2 = board.create('angle', [pI, pB, pC], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});

    // KẺ IK VUÔNG GÓC BC TẠI K
    const pK = board.create('perpendicularpoint', [lineBC, pI], {name: 'K', size: 3, color: '#dc2626', visible: false, label: {offset: [10, 15]}});
    const segIK = board.create('segment', [pI, pK], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    board.create('angle', [pI, pK, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // E LÀ GIAO CỦA IK VÀ BA
    const lineIK = board.create('line', [pI, pK], {visible: false});
    const pE = board.create('intersection', [lineIK, lineBA, 0], {name: 'E', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segAE = board.create('segment', [pA, pE], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, visible: false});
    const segIE = board.create('segment', [pI, pE], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});

    // M VÀ N
    const segAK = board.create('segment', [pA, pK], {strokeWidth: 1.5, strokeColor: '#9333ea', visible: false});
    const segEC = board.create('segment', [pE, pC], {strokeWidth: 1.5, strokeColor: '#16a34a', visible: false});
    
    const lineBI = board.create('line', [pB, pI], {visible: false});
    const pM = board.create('intersection', [lineBI, segAK, 0], {name: 'M', size: 3, color: '#9333ea', visible: false, label: {offset: [-5, -15]}});
    const pN = board.create('intersection', [lineBI, segEC, 0], {name: 'N', size: 3, color: '#16a34a', visible: false, label: {offset: [10, 10]}});
    const segIN = board.create('segment', [pI, pN], {strokeWidth: 2, strokeColor: '#2563eb', dash: 2, visible: false});
    board.create('angle', [pE, pN, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#16a34a', visible: false});

    // MẢNG MÀU
    const polyABI = board.create('polygon', [pA, pB, pI], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyKBI = board.create('polygon', [pK, pB, pI], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyBEC = board.create('polygon', [pB, pE, pC], {fillColor: '#fbcfe8', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pI.setAttribute({visible: true}); segBI.setAttribute({visible: true}); angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pK.setAttribute({visible: true}); segIK.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segAE.setAttribute({visible: true}); segIE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác BI. Kẻ $IK \\perp BC$ tại K, cắt đường thẳng BA tại E.</div>`); step++;
            } 
            else if (step === 2) {
                polyABI.setAttribute({visible: true}); polyKBI.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABI$ (vàng) và $\\Delta KBI$ (xanh lá). Hãy tìm cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABI.setAttribute({visible: false}); polyKBI.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABI = \\Delta KBI$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABI$ vuông tại A và $\\Delta KBI$ vuông tại K có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BI \\text{ chung} \\\\\\\\ \\widehat{ABI} = \\widehat{KBI} \\text{ (do } BI \\text{ là phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABI = \\Delta KBI$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                segEC.setAttribute({visible: true}); pN.setAttribute({visible: true}); segIN.setAttribute({visible: true});
                polyBEC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Xét tam giác lớn $\\Delta BEC$ (màu hồng). Hãy tìm hai đường cao của tam giác này và chỉ ra I là trực tâm. Từ đó suy ra $BI$ là đường cao thứ ba.</div>`); step++;
            }
            else if (step === 5) {
                polyBEC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $BN \\perp EC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta BEC$, ta có:<br>
                   - $CA \\perp BE$ tại A (do $\\Delta ABC$ vuông tại A) $\\Rightarrow CA$ là đường cao.<br>
                   - $EK \\perp BC$ tại K (do $IK \\perp BC$) $\\Rightarrow EK$ là đường cao.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mà hai đường cao $CA$ và $EK$ cắt nhau tại I.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow I$ là trực tâm của $\\Delta BEC$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Do đó, đường thẳng $BI$ (chứa đỉnh B và trực tâm I) chính là đường cao thứ ba của $\\Delta BEC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BI \\perp EC$ hay $BN \\perp EC$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pM.setAttribute({visible: true}); segAK.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Để so sánh AI và IC, ta dùng tính chất bắc cầu. Từ câu a, hãy xem AI bằng cạnh nào. Sau đó so sánh cạnh đó với IC trong một tam giác vuông chứa cả hai cạnh.</div>`); step++;
            }
            else if (step === 7) {
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) So sánh AI và IC</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $\\Delta ABI = \\Delta KBI$ (chứng minh câu a).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AI = IK$ (hai cạnh tương ứng) (1).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta IKC$ vuông tại K (do $IK \\perp BC$):<br>
                   Trong tam giác vuông, cạnh huyền là cạnh lớn nhất nên ta có $IC > IK$ (2).</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Từ (1) và (2) suy ra: $\\mathbf{IC > AI}$ (hay $AI < IC$).</li>
                </ul>`); step++;
            }
        }
    };
}