export function veDe15(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 8, -4], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [3, 6], B: [0, 0], C: [6, 0] }; // Cân tại A, AB > BC

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
    
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});

    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segAC = board.create('segment', [pA, pC], {strokeWidth: 2, strokeColor: '#1e293b'});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b'});

    // ĐƯỜNG CAO AM
    const pM = board.create('midpoint', [pB, pC], {name: 'M', size: 3, color: '#2563eb', visible: false, label: {offset: [5, -15]}});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#2563eb', visible: false});
    const angleM1 = board.create('angle', [pC, pM, pA], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#2563eb', visible: false});

    // PHÂN GIÁC GÓC C CẮT AM TẠI N
    const bisectorC = board.create('bisector', [pA, pC, pB], {visible: false});
    const pN = board.create('intersection', [bisectorC, segAM, 0], {name: 'N', size: 3, color: '#dc2626', visible: false, label: {offset: [-15, 0]}});
    const segCN = board.create('segment', [pC, pN], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    
    const angleC1 = board.create('angle', [pA, pC, pN], {radius: 0.7, fillColor: '#dc2626', strokeColor: '#dc2626', visible: false});
    const angleC2 = board.create('angle', [pN, pC, pB], {radius: 0.8, fillColor: '#dc2626', strokeColor: '#dc2626', visible: false});

    // KẺ ND VUÔNG GÓC VỚI AC TẠI D, CẮT BC TẠI E
    const pD_temp = board.create('perpendicularpoint', [lineAC, pN], {visible: false});
    const lineND = board.create('line', [pN, pD_temp], {visible: false});
    const pD = board.create('intersection', [lineND, lineAC, 0], {name: 'D', size: 3, color: '#ea580c', visible: false, label: {offset: [10, 10]}});
    const pE = board.create('intersection', [lineND, lineBC, 0], {name: 'E', size: 3, color: '#ea580c', visible: false, label: {offset: [-10, -15]}});
    
    const segND = board.create('segment', [pN, pD], {strokeWidth: 2, strokeColor: '#ea580c', visible: false});
    const segNE = board.create('segment', [pN, pE], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, visible: false});
    const angleD = board.create('angle', [pN, pD, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#ea580c', visible: false});

    // NỐI MD, AE
    const segMD = board.create('segment', [pM, pD], {strokeWidth: 1.5, strokeColor: '#9333ea', visible: false});
    const segAE = board.create('segment', [pA, pE], {strokeWidth: 1.5, strokeColor: '#9333ea', dash: 2, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});

    // KÝ HIỆU
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const hatchAC = board.create('hatch', [segAC, 1], {strokeWidth: 2, strokeColor: '#1e293b', visible: false});
    const subCD = board.create('segment', [pC, pD], {visible: false});
    const subCM = board.create('segment', [pC, pM], {visible: false});
    const hatchCD = board.create('hatch', [subCD, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});
    const hatchCM = board.create('hatch', [subCM, 2], {strokeWidth: 2, strokeColor: '#dc2626', visible: false});

    // MẢNG MÀU
    const polyCDN = board.create('polygon', [pC, pD, pN], {fillColor: '#fef08a', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyCMN = board.create('polygon', [pC, pM, pN], {fillColor: '#bbf7d0', fillOpacity: 0.5, borders: {visible: false}, visible: false});
    const polyACE = board.create('polygon', [pA, pC, pE], {fillColor: '#e9d5ff', fillOpacity: 0.3, borders: {visible: false}, visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }
    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); }, rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true}); angleM1.setAttribute({visible: true});
                pN.setAttribute({visible: true}); segCN.setAttribute({visible: true}); angleC1.setAttribute({visible: true}); angleC2.setAttribute({visible: true});
                pD.setAttribute({visible: true}); segND.setAttribute({visible: true}); angleD.setAttribute({visible: true});
                hatchAB.setAttribute({visible: true}); hatchAC.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-slate-300"><b>Bước 1:</b> Vẽ đường cao AM, phân giác CN cắt AM tại N. Kẻ $ND \\perp AC$.</div>`); step++;
            } 
            else if (step === 2) {
                polyCDN.setAttribute({visible: true}); polyCMN.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu a:</b> Xét $\\Delta CDN$ (vàng) và $\\Delta CMN$ (xanh lá). Hãy tìm cạnh huyền chung và góc nhọn bằng nhau.</div>`); step++;
            } 
            else if (step === 3) {
                polyCDN.setAttribute({visible: false}); polyCMN.setAttribute({visible: false}); hatchCD.setAttribute({visible: true}); hatchCM.setAttribute({visible: true});
                renderLog(`
                <div class="mb-2 text-teal-300"><b>a) Chứng minh $\\Delta CDN = \\Delta CMN$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta CDN$ vuông tại D và $\\Delta CMN$ vuông tại M (do $AM \\perp BC$) có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} \\text{Cạnh huyền } CN \\text{ chung} \\\\\\\\ \\widehat{DCN} = \\widehat{MCN} \\text{ (do } CN \\text{ là phân giác)} \\end{cases}$</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\Delta CDN = \\Delta CMN$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 4) {
                pE.setAttribute({visible: true}); segNE.setAttribute({visible: true}); segCE.setAttribute({visible: true});
                segMD.setAttribute({visible: true}); segAE.setAttribute({visible: true}); polyACE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu b:</b><br>- <b>Cách 1:</b> Dùng tính chất Trực tâm trong $\\Delta ACE$ (tím) để suy ra $CN \\perp AE$. Dùng <b>Tính chất đường trung trực</b> để chứng minh $CN \\perp MD$.<br>- <b>Cách 2:</b> Bắt cầu thông qua việc chứng minh $\\Delta AND = \\Delta ENM$ để suy ra $\\Delta CAE$ và $\\Delta CMD$ là hai tam giác cân có chung góc đỉnh C.</div>`); step++;
            }
            else if (step === 5) {
                polyACE.setAttribute({visible: false});
                renderLog(`
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $MD \\parallel AE$ (Trình bày 2 cách)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><b class="text-pink-400">Cách 1 (Trực tâm & Trung trực):</b><br>
                   - Xét $\\Delta ACE$, ta có 2 đường cao $AM \\perp CE$ và $ED \\perp CA$ cắt nhau tại N $\\Rightarrow N$ là trực tâm $\\Delta ACE$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow CN$ là đường cao thứ ba $\\Rightarrow CN \\perp AE$ (1).<br>
                   - Ta có $\\begin{cases} CD = CM \\text{ (do } \\Delta CDN = \\Delta CMN) \\Rightarrow C \\text{ thuộc trung trực của } MD \\\\\\\\ ND = NM \\text{ (do } \\Delta CDN = \\Delta CMN) \\Rightarrow N \\text{ thuộc trung trực của } MD \\end{cases}$<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow CN$ là đường trung trực của đoạn thẳng $MD \\Rightarrow CN \\perp MD$ (2).<br>
                   - Từ (1) và (2) $\\Rightarrow MD \\parallel AE$ (cùng vuông góc với $CN$).</li>
                   <hr class="border-slate-600 my-2">
                   <li><b class="text-pink-400">Cách 2 (Tam giác cân & Góc đồng vị):</b><br>
                   - Xét $\\Delta AND$ và $\\Delta ENM$ vuông tại D và M có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\begin{cases} ND = NM \\text{ (do } \\Delta CDN = \\Delta CMN) \\\\\\\\ \\widehat{AND} = \\widehat{ENM} \\text{ (đối đỉnh)} \\end{cases} \\Rightarrow \\Delta AND = \\Delta ENM$ (cgv-gnk) $\\Rightarrow AD = EM$.<br>
                   - Ta có $\\begin{cases} CA = CD + AD \\\\\\\\ CE = CM + EM \\end{cases}$. Mà $\\begin{cases} CD = CM \\text{ (cmt)} \\\\\\\\ AD = EM \\text{ (cmt)} \\end{cases} \\Rightarrow CA = CE \\Rightarrow \\Delta CAE$ cân tại C.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\widehat{CAE} = \\frac{180^\\circ - \\widehat{C}}{2}$. Mặt khác, $CD=CM \\Rightarrow \\Delta CMD$ cân tại C $\\Rightarrow \\widehat{CDM} = \\frac{180^\\circ - \\widehat{C}}{2}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\widehat{CAE} = \\widehat{CDM}$. Mà hai góc này ở vị trí đồng vị $\\Rightarrow MD \\parallel AE$.</li>
                </ul>`); step++;
            }
            else if (step === 6) {
                renderLog(`<div class="mb-2 text-amber-300"><i class="fa-solid fa-lightbulb"></i> <b>Hướng dẫn câu c:</b> Chia làm 3 bước so sánh:<br>- So sánh $AN$ và $AD$ trong tam giác vuông.<br>- So sánh $AD$ và $BM$ thông qua $ME$ và quan hệ điểm nằm giữa.<br>- So sánh $BM$ và $NM$ dựa vào so sánh góc nhọn - góc tù.</div>`); step++;
            }
            else if (step === 7) {
                renderLog(`
                <div class="mb-2 text-purple-300"><b>c) Sắp xếp tăng dần: $NM, BM, AD, AN$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> <b>So sánh AN và AD:</b><br>
                   - Xét $\\Delta AND$ vuông tại D, có $AN$ là cạnh huyền $\\Rightarrow \\mathbf{AN > AD}$ (1).</li>
                   
                   <hr class="border-slate-600 my-2">
                   
                   <li><span class="text-amber-400 font-bold">(0.25)</span> <b>So sánh AD và BM:</b><br>
                   - Ta có $\\Delta CDN = \\Delta CMN$ (câu a) $\\Rightarrow CD = CM$.<br>
                   - Ta có $\\Delta AND = \\Delta ENM$ (câu b) $\\Rightarrow AD = EM$.<br>
                   - Từ đó: $CE = CM + EM = CD + AD = CA$.<br>
                   - Mà $\\Delta ABC$ cân tại A nên $CA = AB$. Theo giả thiết $AB > BC \\Rightarrow CE > BC$.<br>
                   - Trên tia $CB$, ta có $CB < CE$ nên điểm $B$ nằm giữa $C$ và $E$.<br>
                   - Do $M$ là trung điểm $BC$ nên vị trí các điểm theo thứ tự là $C - M - B - E$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow B$ nằm giữa $M$ và $E \\Rightarrow ME > MB$.<br>
                   - Mà $ME = AD$ và $MB = BM$ $\\Rightarrow \\mathbf{AD > BM}$ (2).</li>

                   <hr class="border-slate-600 my-2">

                   <li><span class="text-amber-400 font-bold">(0.25)</span> <b>So sánh BM và NM:</b><br>
                   - Ta có $\\widehat{AND}$ là góc nhọn (trong $\\Delta AND$ vuông).<br>
                   - Vì $A, N, M$ thẳng hàng nên $\\widehat{MND}$ kề bù với $\\widehat{AND} \\Rightarrow \\widehat{MND}$ là góc tù.<br>
                   - Lại có $\\widehat{ACM}$ là góc nhọn (trong $\\Delta AMC$ vuông tại M).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\widehat{MND} > \\widehat{ACM}$ (góc tù > góc nhọn).<br>
                   - Vì $\\Delta CDN = \\Delta CMN \\Rightarrow \\widehat{CND} = \\widehat{CNM} \\Rightarrow \\widehat{MNC} = \\frac{1}{2} \\widehat{MND}$.<br>
                   - Vì $CN$ là phân giác góc C $\\Rightarrow \\widehat{NCM} = \\frac{1}{2} \\widehat{ACM}$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\Rightarrow \\widehat{MNC} > \\widehat{NCM}$.<br>
                   - Xét $\\Delta MNC$ có $\\widehat{MNC} > \\widehat{NCM} \\Rightarrow MC > NM$ (quan hệ giữa góc và cạnh đối diện).<br>
                   - Mà $MC = BM$ (do M là trung điểm) $\\Rightarrow \\mathbf{BM > NM}$ (3).</li>

                   <hr class="border-slate-600 my-2">

                   <li class="font-bold text-emerald-400"><span class="text-amber-400 font-bold">(0.25)</span> Kết luận: Từ (1), (2) và (3) ta có thứ tự tăng dần là: $\\mathbf{NM < BM < AD < AN}$.</li>
                </ul>`); step++;
            }
        }
    };
}