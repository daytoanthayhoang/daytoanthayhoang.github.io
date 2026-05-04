export function veDe00(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 6, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { B: [0, 0], A: [0, 4], C: [6, 0] }; // Vuông tại B, AB < BC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 1, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, 15]}});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pA, pB, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // Phân giác AD
    const bisectorA = board.create('bisector', [pB, pA, pC], {visible: false});
    const pD = board.create('intersection', [bisectorA, segBC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    const a1 = board.create('angle', [pB, pA, pD], {radius: 0.8, withLabel: false, visible: false});
    const a2 = board.create('angle', [pD, pA, pC], {radius: 1.0, withLabel: false, visible: false});

    // DE vuông góc AC
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const pE = board.create('perpendicularpoint', [lineAC, pD], {name: 'E', size: 3, color: '#dc2626', visible: false});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleE = board.create('angle', [pD, pE, pA], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // F là giao của DE và AB
    const lineDE = board.create('line', [pD, pE], {visible: false});
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const pF = board.create('intersection', [lineDE, lineAB, 0], {name: 'F', size: 3, color: '#9333ea', label: {offset: [-15, -15]}, visible: false});

    const segBF = board.create('segment', [pB, pF], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, withLabel: false, visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});

    // G là trung điểm FC
    const segFC = board.create('segment', [pF, pC], {strokeWidth: 2, strokeColor: '#ea580c', withLabel: false, visible: false});
    const pG = board.create('midpoint', [pF, pC], {name: 'G', size: 3, color: '#16a34a', visible: false});
    const segDG = board.create('segment', [pD, pG], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, withLabel: false, visible: false});

    // ================= MẢNG MÀU TƯ DUY =================
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#3b82f6', fillOpacity: 0.2, borders: {visible: false}, visible: false});
    const polyAED = board.create('polygon', [pA, pE, pD], {fillColor: '#ef4444', fillOpacity: 0.2, borders: {visible: false}, visible: false});
    
    const polyBDF = board.create('polygon', [pB, pD, pF], {fillColor: '#8b5cf6', fillOpacity: 0.2, borders: {visible: false}, visible: false});
    const polyEDC = board.create('polygon', [pE, pD, pC], {fillColor: '#10b981', fillOpacity: 0.2, borders: {visible: false}, visible: false});
    
    const polyAEF = board.create('polygon', [pA, pE, pF], {fillColor: '#f59e0b', fillOpacity: 0.2, borders: {visible: false}, visible: false});
    const polyABC = board.create('polygon', [pA, pB, pC], {fillColor: '#06b6d4', fillOpacity: 0.15, borders: {visible: false}, visible: false});
    // ===================================================

    function executeTransform() { pB.moveTo(getTransformed('B'), 300); pA.moveTo(getTransformed('A'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true}); a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                pF.setAttribute({visible: true}); segBF.setAttribute({visible: true}); segDF.setAttribute({visible: true});
                
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ phân giác AD, kẻ DE $\\perp$ AC và DF cắt AB tại F.</div>`); step++;
            } 
            else if (step === 2) {
                polyABD.setAttribute({visible: true}); polyAED.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a (Ý 1):</b> Xét $\\Delta ABD$ (màu lam) và $\\Delta AED$ (màu đỏ). Dễ thấy đây là hai tam giác vuông có chung cạnh huyền và một góc nhọn bằng nhau.</div>`); step++;
            }
            else if (step === 3) {
                polyABD.setAttribute({visible: false}); polyAED.setAttribute({visible: false});
                polyBDF.setAttribute({visible: true}); polyEDC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a (Ý 2):</b> Tiếp tục xét $\\Delta BDF$ (màu tím) và $\\Delta EDC$ (màu lục). Dựa vào các cạnh bằng nhau từ ý trước và cặp góc đối đỉnh.</div>`); step++;
            }
            else if (step === 4) {
                polyBDF.setAttribute({visible: false}); polyEDC.setAttribute({visible: false});
                let barem1 = `
                <div class="mb-2 text-teal-300"><b>a) $(0.5 \\times 2)$ Chứng minh $\\Delta ABD = \\Delta AED$ và $\\Delta BDF = \\Delta EDC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ vuông tại $B$ và $\\Delta AED$ vuông tại $E$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } AD \\text{ chung} \\\\\\\\ \\widehat{BAD} = \\widehat{EAD} \\text{ (do } AD \\text{ là tia phân giác của } \\widehat{BAC}) \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra $\\Delta ABD = \\Delta AED$ (cạnh huyền - góc nhọn).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow AB = AE$ và $BD = ED$ (hai cạnh tương ứng).</li>
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta BDF$ vuông tại $B$ và $\\Delta EDC$ vuông tại $E$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} BD = ED \\text{ (chứng minh trên)} \\\\\\\\ \\widehat{BDF} = \\widehat{EDC} \\text{ (hai góc đối đỉnh)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra $\\Delta BDF = \\Delta EDC$ (cạnh góc vuông - góc nhọn kề).</li>
                </ul>`;
                renderLog(barem1); step++;
            }
            else if (step === 5) {
                segBE.setAttribute({visible: true}); segFC.setAttribute({visible: true});
                polyAEF.setAttribute({visible: true}); polyABC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b> Để chứng minh $AF = AC$, ngoài cách cộng đoạn thẳng, ta có thể xét trực tiếp $\\Delta AEF$ (màu cam) và $\\Delta ABC$ (màu xanh). Sau đó dùng tính chất trực tâm để chứng minh $BE \\parallel FC$.</div>`); step++;
            }
            else if (step === 6) {
                polyAEF.setAttribute({visible: false}); polyABC.setAttribute({visible: false});
                let barem2 = `
                <div class="mb-2 text-pink-300"><b>b) Điền tiếp nội dung các chứng minh</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold"><u>(0.25)</u></span> Chứng minh $AF = AC$ (Học sinh chọn 1 trong 2 cách):<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Cách 1:</b> Ta có: $\\begin{cases} AB + BF = AF \\\\\\\\ AE + EC = AC \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mà $AB = AE \\text{ } (\\Delta ABD = \\Delta AED), BF = EC \\text{ } (\\Delta BDF = \\Delta EDC)$ nên <b>$AF = AC$</b>.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Cách 2:</b> Xét $\\Delta AEF$ vuông tại $E$ và $\\Delta ABC$ vuông tại $B$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\widehat{A} \\text{ là góc chung} \\\\\\\\ AE = AB \\text{ (chứng minh trên)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nên <b>$\\Delta AEF = \\Delta ABC$ (cạnh góc vuông - góc nhọn)</b>, suy ra <b>$AF = AC$</b>.</li>
                   <li><span class="text-amber-400 font-bold"><u>(0.25)</u></span> Ta có: $\\begin{cases} AB = AE \\text{ (cmt)} \\\\\\\\ DB = DE \\text{ } (\\Delta ABD = \\Delta AED) \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nên $AD$ là đường trung trực của $BE$. Suy ra <b>$AD \\perp BE$</b>.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AFC$ có: $CB$ là đường cao ($CB \\perp AF$), $FE$ là đường cao ($FE \\perp AC$), $CB$ và $FE$ cắt nhau tại $D$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nên <b>$D$ là trực tâm của $\\Delta AFC$</b>, suy ra <b>$AD$ là đường cao còn lại của $\\Delta AFC$</b>.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Do đó, $AD \\perp FC$, mà $AD \\perp BE$ (cmt) nên <b>$BE \\parallel FC$</b>.</li>
                </ul>`;
                renderLog(barem2); step++;
            }
            else if (step === 7) {
                pG.setAttribute({visible: true}); segDG.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Chứng minh $A, D, G$ thẳng hàng. Điểm $A$ và $D$ đều cách đều $F$ và $C$, vậy $AD$ là đường gì của đoạn $FC$?</div>`); step++;
            }
            else if (step === 8) {
                let barem3 = `
                <div class="mb-2 text-purple-300"><b>c) Chứng minh $A, D, G$ thẳng hàng</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có: $\\begin{cases} AF = AC \\text{ (cmt)} \\\\\\\\ DF = DC \\text{ (}\\Delta BDF = \\Delta EDC\\text{)} \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nên $AD$ là đường trung trực của $FC$.</li>
                   <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra <b>$AD \\perp FC$ tại $G$ là trung điểm của $FC$</b>.</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy <b>$A, D, G$ thẳng hàng</b>.</li>
                </ul>`;
                renderLog(barem3); step++;
            }
        }
    };
}