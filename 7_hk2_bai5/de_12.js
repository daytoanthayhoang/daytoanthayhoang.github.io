export function veDe12(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 6, 8, -4], axis: false, showCopyright: false, keepaspectratio: true
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
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const lineBC = board.create('line', [pB, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // TIA PHÂN GIÁC BD CẮT AC TẠI D
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const pD = board.create('intersection', [bisectorB, segAC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [5, 15]}});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    const angleB1 = board.create('angle', [pA, pB, pD], {radius: 0.7, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});
    const angleB2 = board.create('angle', [pD, pB, pC], {radius: 0.8, fillColor: '#2563eb', strokeColor: '#2563eb', visible: false});

    // KẺ DE VUÔNG GÓC VỚI BC TẠI E
    const pE = board.create('perpendicularpoint', [lineBC, pD], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [10, 15]}});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    board.create('angle', [pD, pE, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // BD CẮT AE TẠI M
    const segAE = board.create('segment', [pA, pE], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const pM = board.create('intersection', [segBD, segAE, 0], {name: 'M', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    const angleM = board.create('angle', [pE, pM, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#ea580c', visible: false});

    // F LÀ TRUNG ĐIỂM BE
    const pF = board.create('midpoint', [pB, pE], {name: 'F', size: 3, color: '#9333ea', visible: false, label: {offset: [15, 15]}});
    
    // K TRÊN TIA BA SAO CHO BK = BF (Sử dụng vector để đảm bảo K luôn nằm trên đoạn BA)
    const pK = board.create('point', [
        () => pB.X() + (pA.X() - pB.X()) * (pB.Dist(pF) / pB.Dist(pA)),
        () => pB.Y() + (pA.Y() - pB.Y()) * (pB.Dist(pF) / pB.Dist(pA))
    ], {name: 'K', size: 3, color: '#16a34a', visible: false, label: {offset: [-15, 10]}});
    
    // G LÀ GIAO CỦA AF VÀ BM
    const lineAF = board.create('line', [pA, pF], {visible: false});
    const segAF = board.create('segment', [pA, pF], {strokeWidth: 1.5, strokeColor: '#9333ea', visible: false});
    const pG = board.create('intersection', [lineAF, segBD, 0], {name: 'G', size: 3, color: '#16a34a', visible: false, label: {offset: [10, -15]}});
    
    // NỐI E, G, K
    const segEK = board.create('segment', [pE, pK], {strokeWidth: 1.5, strokeColor: '#16a34a', visible: false});

    // KÝ HIỆU BẰNG NHAU
    const subBA = board.create('segment', [pB, pA], {visible: false});
    const subBE = board.create('segment', [pB, pE], {visible: false});
    const hatchBA = board.create('hatch', [subBA, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchBE = board.create('hatch', [subBE, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const subDA = board.create('segment', [pD, pA], {visible: false});
    const hatchDA = board.create('hatch', [subDA, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchDE = board.create('hatch', [segDE, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subBK = board.create('segment', [pB, pK], {visible: false});
    const subBF = board.create('segment', [pB, pF], {visible: false});
    const hatchBK = board.create('hatch', [subBK, 3], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});
    const hatchBF = board.create('hatch', [subBF, 3], {strokeWidth: 2, strokeColor: '#16a34a', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyEBD = board.create('polygon', [pE, pB, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyABE = board.create('polygon', [pA, pB, pE], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segBD.setAttribute({visible: true}); angleB1.setAttribute({visible: true}); angleB2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác BD. Kẻ $DE \\perp BC$ tại E.</div>`); step++;
            } 
            else if (step === 2) {
                polyABD.setAttribute({visible: true}); polyEBD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABD$ (vàng) và $\\Delta EBD$ (xanh lá). Dễ dàng nhận ra cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyABD.setAttribute({visible: false}); polyEBD.setAttribute({visible: false});
                hatchBA.setAttribute({visible: true}); hatchBE.setAttribute({visible: true}); hatchDA.setAttribute({visible: true}); hatchDE.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABD = \\Delta EBD$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ vuông tại A và $\\Delta EBD$ vuông tại E có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } BD \\text{ chung} \\\\\\\\ \\widehat{ABD} = \\widehat{EBD} \\text{ (do } BD \\text{ là phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABD = \\Delta EBD$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pM.setAttribute({visible: true}); segAE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $BD \\perp AE$ và $M$ là trung điểm $AE$, ta sử dụng tính chất đường trung trực của đoạn thẳng, dựa vào các cặp cạnh bằng nhau đã có ở câu a.</div>`); step++;
            }
            else if (step === 5) {
                angleM.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $BD \\perp AE$ và M là trung điểm AE</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có: $BA = BE$ (do $\\Delta ABD = \\Delta EBD$) $\\Rightarrow B$ thuộc đường trung trực của đoạn thẳng $AE$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có: $DA = DE$ (do $\\Delta ABD = \\Delta EBD$) $\\Rightarrow D$ thuộc đường trung trực của đoạn thẳng $AE$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow BD$ là đường trung trực của đoạn thẳng $AE$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do $M$ là giao điểm của $BD$ và $AE$ nên $BD \\perp AE$ tại $M$, và $M$ là trung điểm của $AE$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pF.setAttribute({visible: true}); pK.setAttribute({visible: true}); hatchBK.setAttribute({visible: true}); hatchBF.setAttribute({visible: true}); 
                segAF.setAttribute({visible: true}); pG.setAttribute({visible: true}); segEK.setAttribute({visible: true});
                polyABE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Quan sát tam giác lớn $\\Delta ABE$ (tím). Từ câu b, M là trung điểm AE nên BM là đường gì? F là trung điểm BE nên AF là đường gì? Giao điểm G của chúng gọi là gì? Cuối cùng, chứng minh K là trung điểm AB để EK đi qua G.</div>`); step++;
            }
            else if (step === 7) {
                polyABE.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh E, G, K thẳng hàng</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta ABE$, ta có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} M \\text{ là trung điểm } AE \\text{ (cmt)} \\Rightarrow BM \\text{ là đường trung tuyến.} \\\\\\\\ F \\text{ là trung điểm } BE \\text{ (gt)} \\Rightarrow AF \\text{ là đường trung tuyến.} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà $BM$ cắt $AF$ tại G $\\Rightarrow G$ là <b>trọng tâm</b> của $\\Delta ABE$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $BA = BE$ (cmt). Mà $F$ là trung điểm $BE \\Rightarrow BF = \\frac{1}{2}BE$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lại có $BK = BF$ (gt) $\\Rightarrow BK = \\frac{1}{2}BE = \\frac{1}{2}BA$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow K$ là trung điểm của $BA \\Rightarrow EK$ là đường trung tuyến thứ ba của $\\Delta ABE$.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Vì ba đường trung tuyến của một tam giác đồng quy tại trọng tâm, nên $EK$ phải đi qua trọng tâm $G$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy 3 điểm E, G, K thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}