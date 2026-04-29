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
                
                let barem1 = `
                <div class="mb-2 text-teal-300"><b>a) $(0.5 \\times 2)$ Chứng minh $\\Delta ABD = \\Delta AED$ và $\\Delta BDF = \\Delta EDC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta ABD$ vuông tại $B$ và $\\Delta AED$ vuông tại $E$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$AD$ là cạnh huyền chung, $\\widehat{BAD} = \\widehat{EAD}$ (do $AD$ là phân giác).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra $\\Delta ABD = \\Delta AED$ (cạnh huyền - góc nhọn).</li>
                   <li><span class="text-amber-400 font-bold">(0.5)</span> Xét $\\Delta BDF$ vuông tại $B$ và $\\Delta EDC$ vuông tại $E$ có:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$BD = ED$ (cmt), $\\widehat{BDF} = \\widehat{EDC}$ (đối đỉnh).<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra $\\Delta BDF = \\Delta EDC$ (cạnh góc vuông - góc nhọn kề).</li>
                </ul>`;
                renderLog(barem1); step++;
            } 
            else if (step === 2) {
                segBE.setAttribute({visible: true}); segFC.setAttribute({visible: true});
                let barem2 = `
                <div class="mb-2 text-pink-300"><b>b) Chứng minh $BE \\parallel FC$</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold"><u>(0.25)</u></span> Ta có: $\\begin{cases} AB + BF = AF \\\\ AE + EC = AC \\end{cases}$, mà $AB = AE, BF = EC$ nên $AF = AC$.</li>
                   <li><span class="text-amber-400 font-bold"><u>(0.25)</u></span> Ta có: $\\begin{cases} AB = AE \\\\ DB = DE \\end{cases}$, nên $AD$ là đường trung trực của $BE$. Suy ra $AD \\perp BE$.</li>
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Xét $\\Delta AFC$ có: $CB$ là đường cao ($CB \\perp AF$), $FE$ là đường cao ($FE \\perp AC$), $CB$ và $FE$ cắt nhau tại $D$.<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nên $D$ là trực tâm của $\\Delta AFC$, suy ra $AD$ là đường cao còn lại của $\\Delta AFC$.</li>
                   <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do đó, $AD \\perp FC$, mà $AD \\perp BE$ (cmt) nên $BE \\parallel FC$.</li>
                </ul>`;
                renderLog(barem2); step++;
            }
            else if (step === 3) {
                pG.setAttribute({visible: true}); segDG.setAttribute({visible: true});
                let barem3 = `
                <div class="mb-2 text-purple-300"><b>c) Chứng minh $A, D, G$ thẳng hàng</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li><span class="text-amber-400 font-bold">(0.25)</span> Ta có: $\\begin{cases} AF = AC \\text{ (cmt)} \\\\ DF = DC \\text{ (}\\Delta BDF = \\Delta EDC\\text{)} \\end{cases}$ nên $AD$ là đường trung trực của $FC$.</li>
                   <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suy ra $AD \\perp FC$ tại $G$ là trung điểm của $FC$.</li>
                   <li class="font-bold text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vậy $A, D, G$ thẳng hàng.</li>
                </ul>`;
                renderLog(barem3); step++;
            }
        }
    };
}