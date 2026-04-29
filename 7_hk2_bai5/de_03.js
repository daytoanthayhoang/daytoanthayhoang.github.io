export function veDe03(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 8, 9, -2], 
        axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [3.5, 6], B: [0.5, 0], C: [6.5, 0] }; 

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0];
        let y = baseCoords[ptName][1];
        let cx = 3.5, cy = 3; 
        let nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx;
        if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad);
        let ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const polyABC = board.create('polygon', [pA, pB, pC], {borders: {strokeWidth: 2, strokeColor: '#1e293b'}});
    
    const hatchAB = board.create('hatch', [polyABC.borders[0], 1], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const hatchAC = board.create('hatch', [polyABC.borders[2], 1], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});

    // Đường cao AH
    const pH = board.create('midpoint', [pB, pC], {name: 'H', size: 3, color: '#dc2626', visible: false}); 
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#dc2626', visible: false});

    // Điểm M, N
    const pM = board.create('point', [() => pB.X() + 0.45 * (pA.X() - pB.X()), () => pB.Y() + 0.45 * (pA.Y() - pB.Y())], {name: 'M', size: 3, color: '#2563eb', visible: false});
    const pN = board.create('point', [() => pC.X() + 0.45 * (pA.X() - pC.X()), () => pC.Y() + 0.45 * (pA.Y() - pC.Y())], {name: 'N', size: 3, color: '#2563eb', visible: false});
    const segMN = board.create('segment', [pM, pN], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});

    // Phân giác Q
    const bisectM = board.create('bisectorlines', [pN, pM, pB], {visible: false});
    const bisectN = board.create('bisectorlines', [pC, pN, pM], {visible: false});
    const pQ = board.create('intersection', [bisectM.line1, bisectN.line1, 0], {name: 'Q', size: 3, color: '#9333ea', visible: false});
    
    const segMQ = board.create('segment', [pM, pQ], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, withLabel: false, visible: false});
    const segNQ = board.create('segment', [pN, pQ], {strokeWidth: 2, strokeColor: '#9333ea', dash: 2, withLabel: false, visible: false});
    const segHQ = board.create('segment', [pH, pQ], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});

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
                let baremA = `
                <div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta AHB = \\Delta AHC$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét hai tam giác vuông $AHB$ và $AHC$ có: $AB = AC$ (gt), $AH$ là cạnh chung <span class="float-right text-amber-400 font-bold">0.75đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Vậy $\\Delta AHB = \\Delta AHC$ (ch-cgv) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremA);
                step++;
            } 
            else if (step === 2) {
                pM.setAttribute({visible: true}); pN.setAttribute({visible: true}); segMN.setAttribute({visible: true});
                let baremB = `
                <div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $\\Delta AMN$ cân (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Vì $MN \\parallel BC$ nên $\\widehat{AMN} = \\widehat{ABC}$ và $\\widehat{ANM} = \\widehat{ACB}$ (đồng vị) <span class="float-right text-amber-400 font-bold">0.5đ</span></li>
                   <li>- Mà $\\widehat{ABC} = \\widehat{ACB}$ (do $\\Delta ABC$ cân tại A) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Suy ra $\\widehat{AMN} = \\widehat{ANM}$. Vậy $\\Delta AMN$ cân tại A. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremB);
                step++;
            } 
            else if (step === 3) {
                pQ.setAttribute({visible: true}); segMQ.setAttribute({visible: true}); segNQ.setAttribute({visible: true}); segHQ.setAttribute({visible: true});
                let baremC = `
                <div class="mb-2 text-purple-300"><b>Câu c) Chứng minh 3 điểm A, H, Q thẳng hàng (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Do $\\widehat{AMN} = \\widehat{ANM}$ nên góc kề bù $\\widehat{BMN} = \\widehat{CNM}$. Lại có $MQ, NQ$ là phân giác $\\Rightarrow \\widehat{QMN} = \\widehat{QNM} \\Rightarrow QM = QN$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Ta lại có $MB = NC$ (chứng minh qua phép trừ đoạn thẳng). <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Chứng minh được $\\Delta MBQ = \\Delta NCQ$ (c-g-c) $\\Rightarrow QB = QC \\Rightarrow$ Q nằm trên trung trực BC. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Mà $\\Delta ABC$ cân có $AH \\perp BC$ $\\Rightarrow A, H$ cũng thuộc trung trực BC. Vậy A, H, Q thẳng hàng. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(baremC);
                step++;
            }
        }
    };
}