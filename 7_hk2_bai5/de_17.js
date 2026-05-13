export function veDe17(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 7, 8, -4], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 4], C: [6, 0] }; // Vuông tại A, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 2.5, cy = 1.5, nx = x - cx, ny = y - cy;
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

    // PHÂN GIÁC BE VÀ ĐƯỜNG VUÔNG GÓC EH
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const pE = board.create('intersection', [bisectorB, lineAC, 0], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [5, 15]}});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    
    const angleB1 = board.create('angle', [pA, pB, pE], {radius: 0.6, fillColor: '#dc2626', strokeColor: '#dc2626', visible: false});
    const angleB2 = board.create('angle', [pE, pB, pC], {radius: 0.7, fillColor: '#dc2626', strokeColor: '#dc2626', visible: false});

    const pE_perp = board.create('perpendicularpoint', [lineBC, pE], {visible: false});
    const lineEH = board.create('line', [pE, pE_perp], {visible: false});
    const pH = board.create('intersection', [lineEH, lineBC, 0], {name: 'H', size: 3, color: '#2563eb', visible: false, label: {offset: [10, 15]}});
    const segEH = board.create('segment', [pE, pH], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    board.create('angle', [pE, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#2563eb', visible: false});

    // NỐI AH
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});

    // GIAO ĐIỂM K
    const pK = board.create('intersection', [lineAB, lineEH, 0], {name: 'K', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segAK = board.create('segment', [pA, pK], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const segEK = board.create('segment', [pE, pK], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    // MẢNG MÀU
    const polyABE = board.create('polygon', [pA, pB, pE], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyHBE = board.create('polygon', [pH, pB, pE], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAEK = board.create('polygon', [pA, pE, pK], {fillColor: '#fbcfe8', fillOpacity: 0.4, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pH.setAttribute({visible: true}); segEH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác BE của góc B. Kẻ $EH \\perp BC$ tại H.</div>`); step++;
            } 
            else if (step === 2) {
                polyABE.setAttribute({visible: true}); polyHBE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta AEB$ (vàng) và $\\Delta HEB$ (xanh lá) là hai tam giác vuông. Hãy tìm cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABE.setAttribute({visible: false}); polyHBE.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta AEB = \\Delta HEB$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta AEB$ vuông tại A và $\\Delta HEB$ vuông tại H có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BE \\text{ chung} \\\\\\\\ \\widehat{ABE} = \\widehat{HBE} \\text{ (do } BE \\text{ là phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta AEB = \\Delta HEB$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                segAH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Sử dụng tính chất đường trung trực. Chứng minh B và E cách đều hai đầu mút A, H dựa vào kết quả hai tam giác bằng nhau ở câu a.</div>`); step++;
            }
            else if (step === 5) {
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh BE là đường trung trực của AH</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $\\Delta AEB = \\Delta HEB$ (chứng minh trên) suy ra:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BA = BH \\Rightarrow B \\text{ thuộc đường trung trực của } AH \\\\\\\\ EA = EH \\Rightarrow E \\text{ thuộc đường trung trực của } AH \\end{cases}$</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow BE$ là đường trung trực của đoạn thẳng $AH$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pK.setAttribute({visible: true}); segAK.setAttribute({visible: true}); segEK.setAttribute({visible: true});
                polyAEK.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Xét $\\Delta EAK$ vuông tại A. Dùng quan hệ giữa đường xiên ($EK$) và đường vuông góc ($EA$), sau đó thay $EA$ bằng $EH$.</div>`); step++;
            }
            else if (step === 7) {
                polyAEK.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) So sánh EK và HE</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta EAK$ vuông tại A (do $\\widehat{KAE}$ kề bù với $\\widehat{BAC} = 90^\\circ$).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Trong $\\Delta EAK$ vuông, $EK$ là cạnh huyền, $EA$ là cạnh góc vuông.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow EK > EA$ (cạnh huyền lớn hơn cạnh góc vuông).</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Mà $EA = EH$ (do $\\Delta AEB = \\Delta HEB$).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\mathbf{EK > HE}$.</li>
                </ul>`); step++;
            }
        }
    };
}