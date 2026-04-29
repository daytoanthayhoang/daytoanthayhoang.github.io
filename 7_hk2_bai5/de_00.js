export function veDe00(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 8, 9, -3], axis: false, showCopyright: false, keepaspectratio: true
    });

    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [3.5, 6], B: [0.5, 0], C: [6.5, 0] }; 

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0], y = baseCoords[ptName][1];
        let cx = 3.5, cy = 3; 
        let nx = x - cx, ny = y - cy;
        if (state.flipX) nx = -nx; if (state.flipY) ny = -ny;
        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad), ry = nx * Math.sin(rad) + ny * Math.cos(rad);
        return [rx + cx, ry + cy];
    }

    // 1. Tạo các điểm gốc (Tam giác cân ABC)
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    const polyABC = board.create('polygon', [pA, pB, pC], {borders: {strokeWidth: 2, strokeColor: '#1e293b'}});
    
    // Ký hiệu AB = AC
    const hatchAB = board.create('hatch', [polyABC.borders[0], 1], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const hatchAC = board.create('hatch', [polyABC.borders[2], 1], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});

    // 2. Đường cao BE và CF
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const pE = board.create('perpendicularpoint', [lineAC, pB], {name: 'E', size: 3, color: '#dc2626', visible: false});
    const segBE = board.create('segment', [pB, pE], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleE = board.create('angle', [pB, pE, pA], {type: 'square', size: 0.3, strokeColor: '#dc2626', visible: false});

    const lineAB = board.create('line', [pA, pB], {visible: false});
    const pF = board.create('perpendicularpoint', [lineAB, pC], {name: 'F', size: 3, color: '#dc2626', visible: false});
    const segCF = board.create('segment', [pC, pF], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleF = board.create('angle', [pA, pF, pC], {type: 'square', size: 0.3, strokeColor: '#dc2626', visible: false});

    // 3. Trực tâm H và giao điểm I
    const pH = board.create('intersection', [segBE, segCF, 0], {name: 'H', size: 3, color: '#9333ea', visible: false});
    
    const lineAI = board.create('line', [pA, pH], {visible: false});
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pI = board.create('intersection', [lineAI, lineBC, 0], {name: 'I', size: 3, color: '#16a34a', visible: false});
    const segAI = board.create('segment', [pA, pI], {strokeWidth: 2, strokeColor: '#16a34a', dash: 2, withLabel: false, visible: false});
    const angleI = board.create('angle', [pA, pI, pC], {type: 'square', size: 0.3, strokeColor: '#16a34a', visible: false});

    function executeTransform() { pA.moveTo(getTransformed('A'), 300); pB.moveTo(getTransformed('B'), 300); pC.moveTo(getTransformed('C'), 300); }

    let step = 1;
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); }, flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        nextStep: function() {
            if (step === 1) {
                pE.setAttribute({visible: true}); segBE.setAttribute({visible: true}); angleE.setAttribute({visible: true});
                pF.setAttribute({visible: true}); segCF.setAttribute({visible: true}); angleF.setAttribute({visible: true});
                pH.setAttribute({visible: true});
                
                let barem1 = `
                <div class="mb-2 text-teal-300"><b>Bước 1: Chứng minh $\\Delta ABE = \\Delta ACF$ và H là trực tâm</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét $\\Delta ABE$ và $\\Delta ACF$ vuông tại $E$ và $F$ có: <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- $AB = AC$ (gt), $\\widehat{A}$ chung $\\Rightarrow \\Delta ABE = \\Delta ACF$ (ch-gn). <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Xét $\\Delta ABC$ có hai đường cao $BE$ và $CF$ cắt nhau tại $H$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Suy ra $H$ là <b>trực tâm</b> của $\\Delta ABC$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(barem1); step++;
            } 
            else if (step === 2) {
                segAI.setAttribute({visible: true}); angleI.setAttribute({visible: true}); pI.setAttribute({visible: true});
                let barem2 = `
                <div class="mb-2 text-pink-300"><b>Bước 2: Chứng minh $AH \\perp BC$ và tính chất tam giác cân</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Vì $H$ là trực tâm nên $AH$ là đường cao thứ ba $\\Rightarrow AH \\perp BC$ tại $I$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Xét $\\Delta ABC$ cân tại $A$ có $AI$ là đường cao nên $AI$ đồng thời là đường trung trực của $BC$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Suy ra $A, H, I$ đều nằm trên đường trung trực của đoạn thẳng $BC$. <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(barem2); step++;
            }
            else if (step === 3) {
                let barem3 = `
                <div class="mb-2 text-purple-300"><b>Bước 3: Kết luận Thẳng hàng</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Vì $A, H, I$ cùng thuộc một đường thẳng (đường trung trực của $BC$). <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400">- Vậy ba điểm $A, H, I$ thẳng hàng. (đpcm) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(barem3); step++;
            }
        }
    };
}