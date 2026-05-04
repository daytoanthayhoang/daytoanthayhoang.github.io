export function veDe09(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 6, 8, -6], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 4], C: [6, 0] }; // Vuông tại A

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 0, nx = x - cx, ny = y - cy;
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

    // PHÂN GIÁC BE VÀ ĐIỂM H
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const pE = board.create('intersection', [bisectorB, segAC, 0], {name: 'E', size: 3, color: '#2563eb', visible: false, label: {offset: [5, 15]}});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const angleB1 = board.create('angle', [pA, pB, pE], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleB2 = board.create('angle', [pE, pB, pC], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});

    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pE], {name: 'H', size: 3, color: '#dc2626', visible: false, label: {offset: [10, 10]}});
    const segEH = board.create('segment', [pE, pH], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const angleH = board.create('angle', [pE, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // ĐOẠN AH
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, visible: false});
    
    // GIAO ĐIỂM K CỦA BA VÀ EH
    const lineBA = board.create('line', [pB, pA], {visible: false});
    const lineEH = board.create('line', [pE, pH], {visible: false});
    const pK = board.create('intersection', [lineBA, lineEH, 0], {name: 'K', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const segAK = board.create('segment', [pA, pK], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segEK = board.create('segment', [pE, pK], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const segBK = board.create('segment', [pB, pK], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    // KÝ HIỆU
    const subAB = board.create('segment', [pA, pB], {visible: false});
    const subHB = board.create('segment', [pH, pB], {visible: false});
    const hatchAB = board.create('hatch', [subAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchHB = board.create('hatch', [subHB, 1], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subAE = board.create('segment', [pA, pE], {visible: false});
    const hatchAE = board.create('hatch', [subAE, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const hatchHE = board.create('hatch', [segEH, 2], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    // MẢNG MÀU
    const polyABE = board.create('polygon', [pA, pB, pE], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyHBE = board.create('polygon', [pH, pB, pE], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAEK = board.create('polygon', [pA, pE, pK], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pH.setAttribute({visible: true}); segEH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ tia phân giác BE và kẻ $EH \\perp BC$ tại H.</div>`); step++;
            } 
            else if (step === 2) {
                polyABE.setAttribute({visible: true}); polyHBE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta AEB$ (vàng) và $\\Delta HEB$ (xanh lá). Dễ dàng nhận ra cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABE.setAttribute({visible: false}); polyHBE.setAttribute({visible: false});
                hatchAB.setAttribute({visible: true}); hatchHB.setAttribute({visible: true}); hatchAE.setAttribute({visible: true}); hatchHE.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta AEB = \\Delta HEB$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta AEB$ vuông tại A và $\\Delta HEB$ vuông tại H có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BE \\text{ chung} \\\\\\\\ \\widehat{ABE} = \\widehat{HBE} \\text{ (do } BE \\text{ là tia phân giác của } \\widehat{B}) \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta AEB = \\Delta HEB$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                segAH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh BE là trung trực của AH, ta dùng định lý: Tập hợp các điểm cách đều hai mút của một đoạn thẳng thì nằm trên đường trung trực của đoạn thẳng đó.</div>`); step++;
            }
            else if (step === 5) {
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh BE là đường trung trực của AH</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có: $BA = BH$ (do $\\Delta AEB = \\Delta HEB$) $\\Rightarrow B$ cách đều hai điểm A và H.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow B$ thuộc đường trung trực của đoạn thẳng $AH$ (1).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có: $EA = EH$ (do $\\Delta AEB = \\Delta HEB$) $\\Rightarrow E$ cách đều hai điểm A và H.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow E$ thuộc đường trung trực của đoạn thẳng $AH$ (2).</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Từ (1) và (2) suy ra $BE$ là đường trung trực của đoạn thẳng $AH$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pK.setAttribute({visible: true}); segAK.setAttribute({visible: true}); segEK.setAttribute({visible: true}); segBK.setAttribute({visible: true});
                polyAEK.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Để so sánh $EK$ với $HE$, ta có thể bắc cầu thông qua cạnh $EA$. Hãy xét $\\Delta AEK$ (màu hồng) vuông tại A để thấy được cạnh nào là lớn nhất.</div>`); step++;
            }
            else if (step === 7) {
                polyAEK.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) So sánh EK và HE</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AEK$ vuông tại A có cạnh $EK$ là cạnh huyền.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trong tam giác vuông, cạnh huyền là cạnh lớn nhất nên: $EK > EA$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mặt khác, ta có $EA = EH$ (chứng minh ở câu b).</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Áp dụng tính chất bắc cầu, thay $EA$ bằng $EH$ vào bất đẳng thức trên, ta được:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\mathbf{EK > HE}$ (điều phải chứng minh).</li>
                </ul>`); step++;
            }
        }
    };
}