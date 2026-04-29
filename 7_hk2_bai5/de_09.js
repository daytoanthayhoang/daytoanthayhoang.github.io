export function veDe09(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { B: [0, 4], A: [0, 0], C: [6, 0] }; // Vuông tại A

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

    // Tọa độ toán học E (Tính chất phân giác: EA/EC = AB/BC)
    const pE = board.create('point', [
        () => (pA.X() * pB.Dist(pC) + pC.X() * pA.Dist(pB)) / (pB.Dist(pC) + pA.Dist(pB)),
        () => (pA.Y() * pB.Dist(pC) + pC.Y() * pA.Dist(pB)) / (pB.Dist(pC) + pA.Dist(pB))
    ], {name: 'E', size: 3, color: '#2563eb', visible: false});

    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    const a1 = board.create('angle', [pA, pB, pE], {radius: 0.8, withLabel: false, visible: false});
    const a2 = board.create('angle', [pE, pB, pC], {radius: 1.0, withLabel: false, visible: false});

    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pE], {name: 'H', size: 3, color: '#dc2626', visible: false});
    const segEH = board.create('segment', [pE, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pE, pH, pB], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});

    const lineBA = board.create('line', [pB, pA], {visible: false});
    const lineEH = board.create('line', [pE, pH], {visible: false});
    const pK = board.create('intersection', [lineBA, lineEH, 0], {name: 'K', size: 3, color: '#16a34a', visible: false});

    const segAK = board.create('segment', [pA, pK], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const segHK = board.create('segment', [pH, pK], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const segCK = board.create('segment', [pC, pK], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, withLabel: false, visible: false});

    function executeTransform() { pB.moveTo(getTransformed('B'), 300); pA.moveTo(getTransformed('A'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
                pH.setAttribute({visible: true}); segEH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu b) Chứng minh $\\Delta AEB = \\Delta HEB$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta AEB$ (vuông tại A) và $\\Delta HEB$ (vuông tại H) có: $BE$ là cạnh huyền chung.</li>
                   <li>- $\\widehat{ABE} = \\widehat{HBE}$ (do $BE$ là phân giác $\\widehat{ABC}$).</li>
                   <li class="font-bold text-emerald-400">- Vậy $\\Delta AEB = \\Delta HEB$ (cạnh huyền - góc nhọn).</li>
                </ul>`); step++;
            } 
            else if (step === 2) {
                segAH.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu c) Chứng minh BE là trung trực của AH (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ $\\Delta AEB = \\Delta HEB \\Rightarrow BA = BH$ và $EA = EH$ (các cạnh tương ứng).</li>
                   <li>- Vì $BA = BH$ nên B nằm trên đường trung trực của $AH$.</li>
                   <li>- Vì $EA = EH$ nên E nằm trên đường trung trực của $AH$.</li>
                   <li class="font-bold text-emerald-400">- Do đó, $BE$ chính là đường trung trực của đoạn thẳng $AH$.</li>
                </ul>`); step++;
            }
            else if (step === 3) {
                pK.setAttribute({visible: true}); segAK.setAttribute({visible: true}); segHK.setAttribute({visible: true}); segCK.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu d) So sánh EK với HE (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta KAE$ (vuông tại A) và $\\Delta CHE$ (vuông tại H) có: $EA = EH$ (cmt), $\\widehat{AEK} = \\widehat{HEC}$ (đối đỉnh).<br> $\\Rightarrow \\Delta KAE = \\Delta CHE$ (cgv-gnk) $\\Rightarrow EK = EC$.</li>
                   <li>- Xét $\\Delta EHC$ vuông tại H. Trong tam giác vuông, cạnh huyền lớn hơn cạnh góc vuông $\\Rightarrow EC > HE$.</li>
                   <li class="font-bold text-emerald-400">- Vì $EK = EC$ (cmt) nên suy ra $EK > HE$.</li>
                </ul>`); step++;
            }
        }
    };
}