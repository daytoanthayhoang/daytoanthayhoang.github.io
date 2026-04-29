export function veDe10(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-4, 7, 9, -5], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 0], B: [0, 4], C: [7, 0] }; // Vuông tại A, AB < AC

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3, cy = 2, nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});

    // Tọa độ toán học E trên BC sao cho BE = BA
    const pE = board.create('point', [
        () => pB.X() + (pA.Dist(pB) / pC.Dist(pB)) * (pC.X() - pB.X()),
        () => pB.Y() + (pA.Dist(pB) / pC.Dist(pB)) * (pC.Y() - pB.Y())
    ], {name: 'E', size: 3, color: '#2563eb', visible: false});

    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#2563eb', tickEndings: [1, 1], visible: false, withLabel: false});
    const hatchBE = board.create('hatch', [board.create('segment', [pB, pE], {visible: false}), 1], {strokeWidth: 2, strokeColor: '#2563eb', tickEndings: [1, 1], visible: false, withLabel: false});

    // D là giao điểm của đường vuông góc tại E và AC
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const linePerpE = board.create('perpendicular', [lineBC, pE], {visible: false});
    const pD = board.create('intersection', [linePerpE, lineAC, 0], {name: 'D', size: 3, color: '#dc2626', visible: false});

    const segED = board.create('segment', [pE, pD], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleE = board.create('angle', [pD, pE, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});
    const segBD = board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});

    // Kéo dài ED cắt BA tại F
    const lineBA = board.create('line', [pB, pA], {visible: false});
    const pF = board.create('intersection', [linePerpE, lineBA, 0], {name: 'F', size: 3, color: '#16a34a', visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    const segAF = board.create('segment', [pA, pF], {strokeWidth: 2, strokeColor: '#1e293b', dash: 2, withLabel: false, visible: false});

    const segFC = board.create('segment', [pF, pC], {strokeWidth: 2, strokeColor: '#ea580c', withLabel: false, visible: false});
    const pI = board.create('midpoint', [pF, pC], {name: 'I', size: 3, color: '#ea580c', visible: false});
    const segBI = board.create('segment', [pB, pI], {strokeWidth: 2, strokeColor: '#ea580c', dash: 2, withLabel: false, visible: false});

    function executeTransform() { pB.moveTo(getTransformed('B'), 300); pA.moveTo(getTransformed('A'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pE.setAttribute({visible: true}); pD.setAttribute({visible: true}); segED.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                segBD.setAttribute({visible: true}); hatchAB.setAttribute({visible: true}); hatchBE.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta ADB = \\Delta EDB$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ADB$ (vuông tại A) và $\\Delta EDB$ (vuông tại E) có: $BD$ là cạnh huyền chung.</li>
                   <li>- $BA = BE$ (giả thiết).</li>
                   <li class="font-bold text-emerald-400">- Vậy $\\Delta ADB = \\Delta EDB$ (cạnh huyền - cạnh góc vuông).</li>
                </ul>`); step++;
            } 
            else if (step === 2) {
                renderLog(`<div class="mb-2 text-pink-300"><b>Câu b) So sánh DA và DC (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Từ $\\Delta ADB = \\Delta EDB \\Rightarrow DA = DE$ (hai cạnh tương ứng).</li>
                   <li>- Xét $\\Delta DEC$ vuông tại E. Trong tam giác vuông, cạnh huyền lớn hơn cạnh góc vuông $\\Rightarrow DC > DE$.</li>
                   <li class="font-bold text-emerald-400">- Thay $DE = DA$ vào, ta được $DC > DA$ (hay $DA < DC$).</li>
                </ul>`); step++;
            }
            else if (step === 3) {
                pF.setAttribute({visible: true}); segDF.setAttribute({visible: true}); segAF.setAttribute({visible: true});
                segFC.setAttribute({visible: true}); pI.setAttribute({visible: true}); segBI.setAttribute({visible: true});
                renderLog(`<div class="mb-2 text-purple-300"><b>Câu c) Chứng minh 3 điểm B, D, I thẳng hàng (0.5đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta DAF$ và $\\Delta DEC$ vuông tại A và E có: $DA = DE$ (cmt), $\\widehat{ADF} = \\widehat{EDC}$ (đối đỉnh). <br>$\\Rightarrow \\Delta DAF = \\Delta DEC \\Rightarrow AF = EC$.</li>
                   <li>- Ta có $BF = BA + AF$ và $BC = BE + EC \\Rightarrow BF = BC \\Rightarrow \\Delta BFC$ cân tại B.</li>
                   <li>- I là trung điểm $FC \\Rightarrow BI$ là đường trung tuyến $\\Rightarrow BI$ đồng thời là phân giác $\\widehat{FBC}$.</li>
                   <li class="font-bold text-emerald-400">- Mà $BD$ cũng là phân giác $\\widehat{FBC}$ (do $\\Delta ADB = \\Delta EDB$). Vậy tia $BI$ và $BD$ trùng nhau $\\Rightarrow B, D, I$ thẳng hàng.</li>
                </ul>`); step++;
            }
        }
    };
}