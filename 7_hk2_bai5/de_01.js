export function veDe01(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-5, 8, 12, -5], 
        axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 4], B: [0, 0], C: [7, 4] };

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0];
        let y = baseCoords[ptName][1];
        let cx = 3.5, cy = 2; 
        let nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx;
        if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad);
        let ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, 15]}});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, color: '#dc2626', label: {offset: [5, -15]}, visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    const circleA = board.create('circle', [pA, pB], {visible: false});
    const segHC = board.create('segment', [pH, pC], {visible: false});
    const pD = board.create('intersection', [circleA, segHC, 0], {name: 'D', size: 3, color: '#2563eb', label: {offset: [5, 15]}, visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], withLabel: false, visible: false});
    const hatchAD = board.create('hatch', [segAD, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], withLabel: false, visible: false});

    const lineAD = board.create('line', [pA, pD], {visible: false});
    const lineCE = board.create('perpendicular', [lineAD, pC], {visible: false});
    const lineAH = board.create('line', [pA, pH], {visible: false});
    
    const pE = board.create('intersection', [lineCE, lineAH, 0], {name: 'E', size: 3, color: '#16a34a', label: {offset: [15, -5]}, visible: false});
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    
    const pF = board.create('intersection', [lineCE, lineAD, 0], {name: '', size: 0, visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#2563eb', dash: 2, withLabel: false, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#16a34a', withLabel: false, visible: false});
    const angleF = board.create('angle', [pA, pF, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#16a34a', visible: false});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});

    // CÁC MẢNG MÀU ĐỂ HƯỚNG DẪN TƯ DUY (MẶC ĐỊNH ẨN)
    const polyAHB = board.create('polygon', [pA, pH, pB], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false}); // Vàng
    const polyAHD = board.create('polygon', [pA, pH, pD], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false}); // Xanh lá
    const polyAEC = board.create('polygon', [pA, pE, pC], {fillColor: '#fbcfe8', fillOpacity: 0.3, borders: {visible: false}, visible: false}); // Hồng
    const polyABD = board.create('polygon', [pA, pB, pD], {fillColor: '#bfdbfe', fillOpacity: 0.4, borders: {visible: false}, visible: false}); // Xanh dương
    const polyADC = board.create('polygon', [pA, pD, pC], {fillColor: '#e9d5ff', fillOpacity: 0.4, borders: {visible: false}, visible: false}); // Tím

    function executeTransform() {
        pA.moveTo(getTransformed('A'), 300);
        pB.moveTo(getTransformed('B'), 300);
        pC.moveTo(getTransformed('C'), 300);
    }

    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); },
        flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pH.setAttribute({visible: true}); segAH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Kẻ đường cao $AH \\perp BC$.</div>`);
                step++;
            } 
            // ============ HƯỚNG DẪN CÂU A ============
            else if (step === 2) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true});
                hatchAB.setAttribute({visible: true}); hatchAD.setAttribute({visible: true});
                
                polyAHB.setAttribute({visible: true}); polyAHD.setAttribute({visible: true});
                let hintA = `
                <div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu a:</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4">
                   <li>- Quan sát hai vùng tô màu: $\\Delta AHB$ (vàng) và $\\Delta AHD$ (xanh lá).</li>
                   <li>- Cả hai đều là <b>tam giác vuông</b> tại $H$. Đã có cạnh huyền $AB = AD$ (đánh dấu đỏ) và cạnh góc vuông $AH$ chung.</li>
                   <li>$\\Rightarrow$ Hãy dùng trường hợp bằng nhau nào của tam giác vuông để kết luận?</li>
                </ul>`;
                renderLog(hintA);
                step++;
            } 
            // ============ LỜI GIẢI CÂU A ============
            else if (step === 3) {
                polyAHB.setAttribute({visible: false}); polyAHD.setAttribute({visible: false});
                
                let baremA = `
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta AHB = \\Delta AHD$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AHB$ vuông tại $H$ và $\\Delta AHD$ vuông tại $H$ có:</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$AB = AD$ (giả thiết).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$AH$ là cạnh chung.</li>
                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy $\\Delta AHB = \\Delta AHD$ (cạnh huyền - cạnh góc vuông).</li>
                </ul>`;
                renderLog(baremA);
                step++;
            } 
            // ============ HƯỚNG DẪN CÂU B ============
            else if (step === 4) {
                pE.setAttribute({visible: true}); segHE.setAttribute({visible: true});
                segDF.setAttribute({visible: true}); segCE.setAttribute({visible: true});
                angleF.setAttribute({visible: true}); segDE.setAttribute({visible: true});
                
                polyAEC.setAttribute({visible: true});
                let hintB = `
                <div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu b:</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4">
                   <li>- Mục tiêu: Chứng minh $ED \\parallel AB$. Vì $AB \\perp AC$, ta hãy thử tìm cách chứng minh <b>$ED \\perp AC$</b>.</li>
                   <li>- Quan sát $\\Delta AEC$ (vùng màu hồng). Ta có hai đường cao nào đã giao nhau tại $D$?</li>
                   <li>$\\Rightarrow$ Dựa vào tính chất <b>trực tâm</b>, ta suy ra được gì về đoạn $ED$ chứa đường cao thứ 3?</li>
                </ul>`;
                renderLog(hintB);
                step++;
            }
            // ============ LỜI GIẢI CÂU B ============
            else if (step === 5) {
                polyAEC.setAttribute({visible: false});
                
                let baremB = `
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $ED \\parallel AB$ (0.75đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AEC$ có: $AD$ là đường cao ($AD \\perp CE$), $CB$ là đường cao ($CB \\perp AE$ tại $H$), $AD$ và $CB$ cắt nhau tại $D$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nên <b>$D$ là trực tâm của $\\Delta AEC$</b>.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Suy ra <b>$ED$ là đường cao còn lại của $\\Delta AEC$</b>. Do đó $ED \\perp AC$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Mà $AB \\perp AC$ (do $\\Delta ABC$ vuông tại $A$) nên <b>$ED \\parallel AB$</b>.</li>
                </ul>`;
                renderLog(baremB);
                step++;
            }
            // ============ HƯỚNG DẪN CÂU C ============
            else if (step === 6) {
                polyABD.setAttribute({visible: true}); polyADC.setAttribute({visible: true});
                
                let hintC = `
                <div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn suy luận câu c:</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-amber-500 ml-1 text-slate-300 mb-4">
                   <li>- $\\Delta ACE$ đều nên $\\widehat{CAE} = 60^\\circ$. Suy ra góc $\\widehat{C}$ và $\\widehat{B}$ bằng bao nhiêu độ?</li>
                   <li>- Nhìn vào vùng màu xanh ($\\Delta ABD$): Đã có $AB = AD$, nếu $\\widehat{B} = 60^\\circ$ thì là tam giác gì?</li>
                   <li>- Nhìn vào vùng màu tím ($\\Delta ADC$): Dùng phép trừ góc để tìm $\\widehat{DAC}$, so sánh với $\\widehat{C}$ để kết luận tam giác cân.</li>
                   <li>$\\Rightarrow$ Bắc cầu các cạnh bằng nhau để tìm ra được tỉ số cuối cùng.</li>
                </ul>`;
                renderLog(hintC);
                step++;
            }
            // ============ LỜI GIẢI CÂU C ============
            else if (step === 7) {
                polyABD.setAttribute({visible: false}); polyADC.setAttribute({visible: false});
                
                let baremC = `
                <div class="mb-2 text-purple-300"><b>c) Tính số đo $\\widehat{ABD}$ và tỉ số giữa $AB$ với $BC$ (0.75đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Vì $\\Delta ACE$ đều nên $\\widehat{CAE} = 60^\\circ$. Trong $\\Delta AHC$ vuông tại $H$ có $\\widehat{C} = 90^\\circ - 60^\\circ = 30^\\circ$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trong $\\Delta ABC$ vuông tại $A$ có $\\widehat{C} = 30^\\circ \\Rightarrow \\widehat{B} = 60^\\circ \\Rightarrow \\widehat{ABD} = 60^\\circ$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có $AB = AD$ và $\\widehat{B} = 60^\\circ \\Rightarrow \\Delta ABD$ đều $\\Rightarrow AB = BD = AD$ (1).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lại có $\\widehat{DAC} = \\widehat{HAC} - \\widehat{HAD} = 60^\\circ - 30^\\circ = 30^\\circ = \\widehat{C} \\Rightarrow \\Delta ADC$ cân tại $D \\Rightarrow AD = DC$ (2).</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Từ (1) và (2) suy ra $AB = BD = DC$. Mà $BC = BD + DC = 2AB$.<br>
                   <span class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy tỉ số $\\frac{AB}{BC} = \\frac{1}{2}$.</span></li>
                </ul>`;
                renderLog(baremC);
                step++;
            }
        }
    };
}