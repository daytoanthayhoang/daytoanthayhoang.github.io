export function veDe04(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 10, -5], 
        axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { B: [0, 0], A: [0, 4], C: [7, 0] }; // Vuông tại B, AB < BC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0];
        let y = baseCoords[ptName][1];
        let cx = 3, cy = 2; 
        let nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx;
        if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad);
        let ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pA, pB, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // BƯỚC 1: Phân giác AM
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const bisectorA = board.create('bisectorlines', [pB, pA, pC], {visible: false});
    const pM = board.create('intersection', [bisectorA.line1, lineBC, 0], {name: 'M', size: 3, color: '#2563eb', visible: false});
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    const a1 = board.create('angle', [pB, pA, pM], {radius: 0.8, withLabel: false, visible: false});
    const a2 = board.create('angle', [pM, pA, pC], {radius: 1.0, withLabel: false, visible: false});

    // BƯỚC 2: MD vuông góc AC
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const pD = board.create('perpendicularpoint', [lineAC, pM], {name: 'D', size: 3, color: '#dc2626', visible: false});
    const segMD = board.create('segment', [pM, pD], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleD = board.create('angle', [pA, pD, pM], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // BƯỚC 3: DM cắt AB tại E
    const lineDM = board.create('line', [pD, pM], {visible: false});
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const pE = board.create('intersection', [lineDM, lineAB, 0], {name: 'E', size: 3, color: '#16a34a', visible: false});
    
    // Các đoạn nét đứt kéo dài
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, withLabel: false, visible: false});
    const segME = board.create('segment', [pM, pE], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#16a34a', withLabel: false, visible: false});

    function executeTransform() {
        pB.moveTo(getTransformed('B'), 300);
        pA.moveTo(getTransformed('A'), 300);
        pC.moveTo(getTransformed('C'), 300);
    }

    let step = 1;

    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); },
        flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true});
                a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                
                pD.setAttribute({visible: true}); segMD.setAttribute({visible: true}); angleD.setAttribute({visible: true});
                
                let baremA = `
                <div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta ABM = \\Delta ADM$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét hai tam giác vuông $ABM$ và $ADM$ có: <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- $AM$ là cạnh huyền chung <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- $\\widehat{BAM} = \\widehat{DAM}$ (do $AM$ là tia phân giác góc A) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Vậy $\\Delta ABM = \\Delta ADM$ (ch-gn) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremA);
                step++;
            } 
            else if (step === 2) {
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true});
                segME.setAttribute({visible: true}); segCE.setAttribute({visible: true});
                
                let baremB = `
                <div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $AM \\perp CE$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ACE$, ta có $CB \\perp AE$ tại B (do tam giác ABC vuông tại B). Vậy $CB$ là đường cao. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Lại có $ED \\perp AC$ tại D (gt). Vậy $ED$ là đường cao. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Hai đường cao $CB$ và $ED$ cắt nhau tại M. Suy ra M là trực tâm của $\\Delta ACE$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Do đó $AM$ là đường thẳng chứa đường cao thứ ba, suy ra $AM \\perp CE$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremB);
                step++;
            }
            else if (step === 3) {
                let baremC = `
                <div class="mb-2 text-purple-300"><b>Câu c) So sánh BE với DM (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ câu a ta có $BM = MD$. Xét $\\Delta MBE$ và $\\Delta MDC$ có: $\\widehat{B}=\\widehat{D}=90^\\circ$, $BM = MD$, $\\widehat{BME} = \\widehat{DMC}$ (đối đỉnh).<br> $\\Rightarrow \\Delta MBE = \\Delta MDC$ (cgv-gnk) $\\Rightarrow BE = DC$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Trong $\\Delta ABC$ vuông tại B, do $AB < BC \\Rightarrow \\widehat{C} < \\widehat{A}$. Suy ra $\\widehat{C} < 45^\\circ$. <br>
                   Trong $\\Delta MDC$ vuông tại D, do $\\widehat{C} < 45^\\circ \\Rightarrow \\widehat{DMC} > 45^\\circ$. Do đó $\\widehat{DMC} > \\widehat{C}$.</li>
                   <li class="font-bold text-emerald-400 pt-1">- Quan hệ giữa góc và cạnh đối diện trong $\\Delta MDC$: Cạnh $DC$ (đối diện góc lớn hơn) $>$ cạnh $MD$. <br>
                   Mà $BE = DC$, suy ra $BE > MD$ (hay $BE > DM$). <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremC);
                step++;
            }
        }
    };
}