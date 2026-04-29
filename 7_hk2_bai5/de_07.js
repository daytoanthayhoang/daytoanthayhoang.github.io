export function veDe07(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    // Bố trí A tại (0,0) vuông góc. AB nằm trên trục Oy, AC nằm trên trục Ox.
    const baseCoords = { B: [0, 4], A: [0, 0], C: [6, 0] }; 

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // Phân giác BD
    const bisectorB = board.create('bisector', [pA, pB, pC], {visible: false});
    const segAC = board.create('segment', [pA, pC], {visible: false});
    const pD = board.create('intersection', [bisectorB, segAC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    const a1 = board.create('angle', [pA, pB, pD], {radius: 0.8, withLabel: false, visible: false});
    const a2 = board.create('angle', [pD, pB, pC], {radius: 1.0, withLabel: false, visible: false});

    // DE vuông góc BC
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pE = board.create('perpendicularpoint', [lineBC, pD], {name: 'E', size: 3, color: '#dc2626', visible: false});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleE = board.create('angle', [pD, pE, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    // Giao điểm M của AB và DE
    const lineAB = board.create('line', [pA, pB], {visible: false});
    const lineDE = board.create('line', [pD, pE], {visible: false});
    const pM = board.create('intersection', [lineAB, lineDE, 0], {name: 'M', size: 3, color: '#16a34a', visible: false});
    
    // Nét đứt kéo dài
    const segAM = board.create('segment', [pA, pM], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const segEM = board.create('segment', [pE, pM], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const segCM = board.create('segment', [pM, pC], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});

    function executeTransform() { pB.moveTo(getTransformed('B'), 300); pA.moveTo(getTransformed('A'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pD.setAttribute({visible: true}); segBD.setAttribute({visible: true});
                a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                pE.setAttribute({visible: true}); segDE.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta ABD = \\Delta EBD$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét 2 tam giác vuông $ABD$ (vuông tại A) và $EBD$ (vuông tại E) có: $BD$ là cạnh huyền chung.</li>
                   <li>- $\\widehat{ABD} = \\widehat{EBD}$ (do $BD$ là phân giác $\\widehat{ABC}$).</li>
                   <li class="font-bold text-emerald-400">- Vậy $\\Delta ABD = \\Delta EBD$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 2) {
                pM.setAttribute({visible: true}); segAM.setAttribute({visible: true}); segEM.setAttribute({visible: true}); segCM.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $\\Delta BCM$ cân tại B (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ $\\Delta ABD = \\Delta EBD \\Rightarrow AD = ED$ và $AB = EB$.</li>
                   <li>- Xét $\\Delta ADM$ (vuông tại A) và $\\Delta EDC$ (vuông tại E) có: $AD = ED$ (cmt), $\\widehat{ADM} = \\widehat{EDC}$ (đối đỉnh). <br>$\\Rightarrow \\Delta ADM = \\Delta EDC$ (cgv-gnk) $\\Rightarrow AM = EC$.</li>
                   <li>- Ta có $BM = AB + AM$ và $BC = EB + EC$. <br>Mà $AB = EB$ và $AM = EC$ nên $BM = BC$.</li>
                   <li class="font-bold text-emerald-400">- Vậy $\\Delta BCM$ cân tại B.</li>
                </ul>`); step++;
            }
            else if (step === 3) {
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu c) Chứng minh $AD + EC > DM$ (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ADM$ vuông tại A. Áp dụng bất đẳng thức trong tam giác: Cạnh huyền luôn lớn hơn cạnh góc vuông $\\Rightarrow DM < AD + AM$. (1)</li>
                   <li>- Mà $AM = EC$ (chứng minh từ câu b). (2)</li>
                   <li>- Thay (2) vào (1) ta được: $DM < AD + EC$.</li>
                   <li class="font-bold text-emerald-400">- Hay nói cách khác: $AD + EC > DM$. (đpcm)</li>
                </ul>`); step++;
            }
        }
    };
}