export function veDe20(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 6, 8, -6], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [2, 5], B: [0, 0], C: [6, 0] }; // Tam giác nhọn

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 0, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // CÁC ĐIỂM GỐC VÀ TAM GIÁC ABC
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-5, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, -15]}});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});

    // TRUNG TUYẾN AD VÀ ĐIỂM M
    const pD = board.create('midpoint', [pB, pC], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [10, 10]}});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    
    // M đối xứng với A qua D
    const pM = board.create('point', [
        () => 2*pD.X() - pA.X(), () => 2*pD.Y() - pA.Y()
    ], {name: 'M', size: 3, color: '#dc2626', visible: false, label: {offset: [5, -15]}});
    const segDM = board.create('segment', [pD, pM], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    
    const segBM = board.create('segment', [pB, pM], {strokeWidth: 1.5, strokeColor: '#9333ea', visible: false});
    const segCM = board.create('segment', [pC, pM], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});

    // TRUNG ĐIỂM N CỦA AC VÀ GIAO ĐIỂM K
    const pN = board.create('midpoint', [pA, pC], {name: 'N', size: 3, color: '#ea580c', visible: false, label: {offset: [10, 15]}});
    const lineND = board.create('line', [pN, pD], {visible: false});
    const pK = board.create('intersection', [lineND, segBM, 0], {name: 'K', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, -15]}});
    
    const segNK = board.create('segment', [pN, pK], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});

    // TRUNG ĐIỂM I VÀ E, ĐỒNG QUY TẠI G
    const pI = board.create('midpoint', [pA, pK], {name: 'I', size: 3, color: '#16a34a', visible: false, label: {offset: [-15, 15]}});
    const pE = board.create('midpoint', [pA, pB], {name: 'E', size: 3, color: '#16a34a', visible: false, label: {offset: [-15, 10]}});
    
    const segAK = board.create('segment', [pA, pK], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 1.5, strokeColor: '#16a34a', visible: false});
    const segNI = board.create('segment', [pN, pI], {strokeWidth: 1.5, strokeColor: '#16a34a', visible: false});

    // GIAO ĐIỂM G
    const lineAD = board.create('line', [pA, pD], {visible: false});
    const lineCE = board.create('line', [pC, pE], {visible: false});
    const pG = board.create('intersection', [lineAD, lineCE, 0], {name: 'G', size: 3, color: '#eab308', visible: false, label: {offset: [10, 10]}});

    // KÝ HIỆU
    const subBD = board.create('segment', [pB, pD], {visible: false});
    const subDC = board.create('segment', [pD, pC], {visible: false});
    const hatchBD = board.create('hatch', [subBD, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchDC = board.create('hatch', [subDC, 1], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const hatchAD = board.create('hatch', [segAD, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchDM = board.create('hatch', [segDM, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    // MẢNG MÀU
    const polyADC = board.create('polygon', [pA, pD, pC], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyMDB = board.create('polygon', [pM, pD, pB], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyBDK = board.create('polygon', [pB, pD, pK], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyCDN = board.create('polygon', [pC, pD, pN], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAKN = board.create('polygon', [pA, pK, pN], {fillColor: '#e9d5ff', fillOpacity: 0.2, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true}); hatchBD.setAttribute({visible: true}); hatchDC.setAttribute({visible: true});
                pM.setAttribute({visible: true}); segDM.setAttribute({visible: true}); hatchAD.setAttribute({visible: true}); hatchDM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ trung tuyến AD. Lấy điểm M sao cho D là trung điểm AM.</div>`); step++;
            } 
            else if (step === 2) {
                polyADC.setAttribute({visible: true}); polyMDB.setAttribute({visible: true}); segBM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ADC$ (vàng) và $\\Delta MDB$ (xanh lá). Hãy chỉ ra trường hợp bằng nhau (c.g.c) dựa vào 2 cặp trung điểm và góc đối đỉnh.</div>`); step++;
            } 
            else if (step === 3) {
                polyADC.setAttribute({visible: false}); polyMDB.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ADC = \\Delta MDB$ và $BM \\parallel AC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ADC$ và $\\Delta MDB$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} DA = DM \\text{ (do D là trung điểm AM)} \\\\\\\\ \\widehat{ADC} = \\widehat{MDB} \\text{ (hai góc đối đỉnh)} \\\\\\\\ DC = DB \\text{ (do D là trung điểm BC)} \\end{cases}$</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta ADC = \\Delta MDB$ (c.g.c).</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\widehat{DAC} = \\widehat{DMB}$ (hai góc tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà hai góc này nằm ở vị trí so le trong $\\Rightarrow BM \\parallel AC$.</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pN.setAttribute({visible: true}); pK.setAttribute({visible: true}); segNK.setAttribute({visible: true});
                polyBDK.setAttribute({visible: true}); polyCDN.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh D là trung điểm KN, hãy xét $\\Delta BDK$ (hồng) và $\\Delta CDN$ (xanh dương). Chú ý sử dụng góc so le trong từ giả thiết song song ở câu a.</div>`); step++;
            }
            else if (step === 5) {
                polyBDK.setAttribute({visible: false}); polyCDN.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh D là trung điểm KN</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $BM \\parallel AC$ (chứng minh câu a) $\\Rightarrow \\widehat{KBD} = \\widehat{NCD}$ (hai góc so le trong).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta BDK$ và $\\Delta CDN$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\widehat{KBD} = \\widehat{NCD} \\text{ (cmt)} \\\\\\\\ DB = DC \\text{ (gt)} \\\\\\\\ \\widehat{BDK} = \\widehat{CDN} \\text{ (hai góc đối đỉnh)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta BDK = \\Delta CDN$ (g.c.g).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow DK = DN$ (hai cạnh tương ứng).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vì K, D, N thẳng hàng nên D là trung điểm của đoạn thẳng KN.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pI.setAttribute({visible: true}); pE.setAttribute({visible: true}); pG.setAttribute({visible: true});
                segAK.setAttribute({visible: true}); segCE.setAttribute({visible: true}); segNI.setAttribute({visible: true});
                polyAKN.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Câu chốt cực hay! Hãy chứng minh Giao điểm G của 2 trung tuyến trong $\\Delta ABC$ (là $AD$ và $CE$) <b>cũng chính là Trọng tâm</b> của $\\Delta AKN$ (màu tím nhạt). Từ đó NI bắt buộc phải đi qua G.</div>`); step++;
            }
            else if (step === 7) {
                polyAKN.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh AD, CE, NI đồng quy</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta ABC$ có AD và CE là hai đường trung tuyến (do D, E là trung điểm BC, AB).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gọi G là giao điểm của AD và CE $\\Rightarrow$ <b>G là trọng tâm</b> của $\\Delta ABC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow G \\in AD$ và $AG = \\frac{2}{3}AD$ (1).</li>
                   
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AKN$, ta có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D là trung điểm của KN (chứng minh câu b) $\\Rightarrow$ AD là đường trung tuyến của $\\Delta AKN$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kết hợp với (1), ta thấy điểm G nằm trên trung tuyến AD và chia đoạn AD theo tỉ lệ $\\frac{2}{3}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow$ <b>G cũng là trọng tâm</b> của $\\Delta AKN$.</li>

                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Mặt khác, I là trung điểm của AK (gt) $\\Rightarrow$ NI là đường trung tuyến thứ hai của $\\Delta AKN$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vì G là trọng tâm của $\\Delta AKN$ nên trung tuyến NI phải đi qua G.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nói cách khác, 3 đường thẳng AD, CE và NI cùng đi qua điểm G. Vậy chúng <b>đồng quy</b>.</li>
                </ul>`); step++;
            }
        }
    };
}