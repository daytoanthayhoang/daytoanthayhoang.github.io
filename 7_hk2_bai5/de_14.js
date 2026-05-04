export function veDe14(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-3, 7, 9, -2], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [3, 5], B: [0, 0], C: [6, 0] }; // Cân tại A

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2, nx = x - cx, ny = y - cy;
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

    // D LÀ TRUNG ĐIỂM BC, E LÀ TRUNG ĐIỂM AC
    const pD = board.create('midpoint', [pB, pC], {name: 'D', size: 3, color: '#2563eb', visible: false, label: {offset: [5, -15]}});
    const pE = board.create('midpoint', [pA, pC], {name: 'E', size: 3, color: '#dc2626', visible: false, label: {offset: [10, 15]}});
    
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    // H LÀ GIAO CỦA AD VÀ BE (TRỌNG TÂM)
    const pH = board.create('intersection', [segAD, segBE, 0], {name: 'H', size: 3, color: '#ea580c', visible: false, label: {offset: [-15, 10]}});

    // KẺ C SONG SONG VỚI AD CẮT TIA BE TẠI F
    const lineAD = board.create('line', [pA, pD], {visible: false});
    const lineCF = board.create('parallel', [lineAD, pC], {visible: false});
    const lineBE = board.create('line', [pB, pE], {visible: false});
    const pF = board.create('intersection', [lineCF, lineBE, 0], {name: 'F', size: 3, color: '#9333ea', visible: false, label: {offset: [10, 15]}});
    
    const segCF = board.create('segment', [pC, pF], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    const segEF = board.create('segment', [pE, pF], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, visible: false});
    const segBF = board.create('segment', [pB, pF], {visible: false}); // Ẩn để không chèn lên BE, EF

    // GIAO ĐIỂM G CỦA FD VÀ CH
    const segFD = board.create('segment', [pF, pD], {strokeWidth: 1.5, strokeColor: '#16a34a', visible: false});
    const lineCH = board.create('line', [pC, pH], {visible: false});
    const segCH = board.create('segment', [pC, pH], {strokeWidth: 1.5, strokeColor: '#16a34a', visible: false});
    const pG = board.create('intersection', [segFD, lineCH, 0], {name: 'G', size: 3, color: '#eab308', visible: false, label: {offset: [-15, 10]}});

    // KÝ HIỆU BẰNG NHAU
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const hatchAC = board.create('hatch', [segAC, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    const subBD = board.create('segment', [pB, pD], {visible: false});
    const subDC = board.create('segment', [pD, pC], {visible: false});
    const hatchBD = board.create('hatch', [subBD, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const hatchDC = board.create('hatch', [subDC, 2], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});

    const subAE = board.create('segment', [pA, pE], {visible: false});
    const subEC = board.create('segment', [pE, pC], {visible: false});
    const hatchAE = board.create('hatch', [subAE, 3], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchEC = board.create('hatch', [subEC, 3], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    const subHE = board.create('segment', [pH, pE], {visible: false});
    const hatchHE = board.create('hatch', [subHE, 4], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});
    const hatchEF = board.create('hatch', [segEF, 4], {strokeWidth: 2, strokeColor: '#9333ea', visible: false});

    // MẢNG MÀU TƯ DUY
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyACD = board.create('polygon', [pA, pC, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyAHE = board.create('polygon', [pA, pH, pE], {fillColor: '#fbcfe8', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyCFE = board.create('polygon', [pC, pF, pE], {fillColor: '#bfdbfe', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyBFC = board.create('polygon', [pB, pF, pC], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true}); hatchBD.setAttribute({visible: true}); hatchDC.setAttribute({visible: true}); hatchAB.setAttribute({visible: true}); hatchAC.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); hatchAE.setAttribute({visible: true}); hatchEC.setAttribute({visible: true});
                pH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ hai trung tuyến AD và BE cắt nhau tại H.</div>`); step++;
            } 
            else if (step === 2) {
                polyABD.setAttribute({visible: true}); polyACD.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta ABD$ (vàng) và $\\Delta ACD$ (xanh lá). Dễ dàng nhận ra trường hợp bằng nhau c.c.c nhờ vào giả thiết tam giác cân và trung tuyến.</div>`); step++;
            } 
            else if (step === 3) {
                polyABD.setAttribute({visible: false}); polyACD.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta ABD = \\Delta ACD$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ và $\\Delta ACD$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} AB = AC \\text{ (do } \\Delta ABC \\text{ cân tại A)} \\\\\\\\ BD = CD \\text{ (do AD là trung tuyến)} \\\\\\\\ AD \\text{ là cạnh chung} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta ABD = \\Delta ACD$ (c.c.c).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pF.setAttribute({visible: true}); segCF.setAttribute({visible: true}); segEF.setAttribute({visible: true});
                polyAHE.setAttribute({visible: true}); polyCFE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $EH = EF$, hãy xét 2 tam giác nhỏ $\\Delta AHE$ (hồng) và $\\Delta CFE$ (xanh dương). Sử dụng tính chất đường thẳng song song (so le trong) và góc đối đỉnh.</div>`); step++;
            }
            else if (step === 5) {
                polyAHE.setAttribute({visible: false}); polyCFE.setAttribute({visible: false}); hatchHE.setAttribute({visible: true}); hatchEF.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $EH = EF$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $CF \\parallel AD \\text{ (gt)} \\Rightarrow \\widehat{DAE} = \\widehat{FCE}$ (hai góc so le trong).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay viết gọn là $\\widehat{HAE} = \\widehat{FCE}$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AHE$ và $\\Delta CFE$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\widehat{HAE} = \\widehat{FCE} \\text{ (cmt)} \\\\\\\\ AE = CE \\text{ (do E là trung điểm AC)} \\\\\\\\ \\widehat{AEH} = \\widehat{CEF} \\text{ (hai góc đối đỉnh)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> $\\Rightarrow \\Delta AHE = \\Delta CFE$ (g.c.g).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow EH = EF$ (hai cạnh tương ứng).</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                pG.setAttribute({visible: true}); segFD.setAttribute({visible: true}); segCH.setAttribute({visible: true});
                polyBFC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Câu chốt cực hay! Hãy nhìn vào tam giác lớn $\\Delta BFC$ (màu tím). Ta đã biết D là trung điểm BC. Vậy H có phải là trung điểm BF không? Nếu đúng, thì G chính là trọng tâm của $\\Delta BFC$.</div>`); step++;
            }
            else if (step === 7) {
                polyBFC.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Chứng minh $HG = \\frac{2}{3}HE$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> $\\Delta ABC$ có hai trung tuyến AD, BE cắt nhau tại H $\\Rightarrow$ <b>H là trọng tâm</b> của $\\Delta ABC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BH = 2HE$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lại có $EH = EF \\text{ (cmt)} \\Rightarrow HF = HE + EF = 2HE$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow BH = HF \\Rightarrow$ <b>H là trung điểm của BF</b>.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét tam giác $\\Delta BFC$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} D \\text{ là trung điểm } BC \\Rightarrow FD \\text{ là trung tuyến.} \\\\\\\\ H \\text{ là trung điểm } BF \\Rightarrow CH \\text{ là trung tuyến.} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà $FD$ và $CH$ cắt nhau tại G $\\Rightarrow$ <b>G là trọng tâm của $\\Delta BFC$</b>.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow HG = \\frac{1}{3}HC$ (*).</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Mặt khác, $\\Delta ABC$ cân tại A $\\Rightarrow$ trung tuyến AD đồng thời là trung trực của BC $\\Rightarrow AD \\perp BC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vì điểm $H \\in AD$ nên $H$ cũng nằm trên đường trung trực của BC $\\Rightarrow HB = HC$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà $BH = 2HE \\Rightarrow HC = 2HE$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thay $HC = 2HE$ vào (*), ta được: $\\mathbf{HG = \\frac{1}{3}(2HE) = \\frac{2}{3}HE}$ (đpcm).</li>
                </ul>`); step++;
            }
        }
    };
}