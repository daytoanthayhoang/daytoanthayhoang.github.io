export function veDe01(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-5, 8, 12, -5], // Mở rộng khung viền để khi xoay hình không bị cắt
        axis: false, showCopyright: false, keepaspectratio: true
    });

    // --- LOGIC TOÁN HỌC ĐỂ XOAY/LẬT ---
    let state = { angle: 0, flipX: false, flipY: false };
    const baseCoords = { A: [0, 4], B: [0, 0], C: [7, 4] };

    function getTransformed(ptName) {
        let x = baseCoords[ptName][0];
        let y = baseCoords[ptName][1];
        
        let cx = 3.5, cy = 2; // Tâm xoay (trọng tâm giả định)
        let nx = x - cx;
        let ny = y - cy;

        if (state.flipX) nx = -nx;
        if (state.flipY) ny = -ny;

        let rad = state.angle * Math.PI / 180;
        let rx = nx * Math.cos(rad) - ny * Math.sin(rad);
        let ry = nx * Math.sin(rad) + ny * Math.cos(rad);

        return [rx + cx, ry + cy];
    }

    // --- BƯỚC 0: TẠO HÌNH CƠ BẢN ---
    const pA = board.create('point', getTransformed('A'), {name: 'A', size: 3, color: '#1e293b'});
    const pB = board.create('point', getTransformed('B'), {name: 'B', size: 3, color: '#1e293b'});
    const pC = board.create('point', getTransformed('C'), {name: 'C', size: 3, color: '#1e293b'});
    
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.5, withLabel: false, strokeColor: '#1e293b'});

    // --- CÁC ĐỐI TƯỢNG ẨN ---
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, color: '#dc2626', visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#dc2626', visible: false});

    const circleA = board.create('circle', [pA, pB], {visible: false});
    const segHC = board.create('segment', [pH, pC], {visible: false});
    const pD = board.create('intersection', [circleA, segHC, 0], {name: 'D', size: 3, color: '#2563eb', visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1,1], withLabel: false, visible: false});
    const hatchAD = board.create('hatch', [segAD, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1,1], withLabel: false, visible: false});

    const lineAD = board.create('line', [pA, pD], {visible: false});
    const lineCE = board.create('perpendicular', [lineAD, pC], {visible: false});
    const lineAH = board.create('line', [pA, pH], {visible: false});
    
    const pE = board.create('intersection', [lineCE, lineAH, 0], {name: 'E', size: 3, color: '#16a34a', visible: false});
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    const pF = board.create('intersection', [lineCE, lineAD, 0], {name: '', size: 0, visible: false});
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#2563eb', dash: 2, withLabel: false, visible: false});
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#16a34a', withLabel: false, visible: false});
    const angleF = board.create('angle', [pA, pF, pC], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#16a34a', visible: false});
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});

    // --- HÀM ANIMATION XOAY LẬT ---
    function executeTransform() {
        // Dùng moveTo(tọa độ, thời gian ms) để tạo hiệu ứng chuyển động mượt mà
        pA.moveTo(getTransformed('A'), 300);
        pB.moveTo(getTransformed('B'), 300);
        pC.moveTo(getTransformed('C'), 300);
    }

    let step = 1;

    // --- RETURN CONTROLLER VỀ MAIN ---
    return {
        flipX: function() { state.flipX = !state.flipX; executeTransform(); },
        flipY: function() { state.flipY = !state.flipY; executeTransform(); },
        rotate: function(deg) { state.angle = (state.angle + deg) % 360; executeTransform(); },
        
        nextStep: function() {
            if (step === 1) {
                pH.setAttribute({visible: true}); segAH.setAttribute({visible: true}); angleH.setAttribute({visible: true});
                renderLog("<b>Bước 1:</b> Vẽ đường cao $AH \\perp BC$.");
                step++;
            } 
            else if (step === 2) {
                pD.setAttribute({visible: true}); segAD.setAttribute({visible: true});
                hatchAB.setAttribute({visible: true}); hatchAD.setAttribute({visible: true});
                
                // Trình bày chuẩn Barem
                let barem = `
                <div class="mb-2 text-teal-300"><b>Câu a) Chứng minh $\\Delta AHB = \\Delta AHD$ (1.0đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Xét hai tam giác vuông $AHB$ và $AHD$ có: <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- $AB = AD$ (gt) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- $AH$ là cạnh chung <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li class="font-bold text-emerald-400 pt-1">- Vậy $\\Delta AHB = \\Delta AHD$ (ch-cgv) <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(barem);
                step++;
            } 
            else if (step === 3) {
                pE.setAttribute({visible: true}); segHE.setAttribute({visible: true});
                segDF.setAttribute({visible: true}); segCE.setAttribute({visible: true});
                angleF.setAttribute({visible: true}); segDE.setAttribute({visible: true});
                
                let barem2 = `
                <div class="mb-2 text-pink-300"><b>Câu b) Chứng minh $ED \\parallel AB$ (0.75đ)</b></div>
                <ul class="list-none space-y-2 pl-2 text-sm border-l-2 border-slate-600 ml-1">
                   <li>- Trong $\\Delta ACD$ có: $AH$ và $CE$ là hai đường cao cắt nhau tại $E$ <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Nên $DE$ là đường cao thứ 3 $\\Rightarrow ED \\perp AC$ <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                   <li>- Mà $AB \\perp AC$ (do $\\Delta ABC$ vuông tại A) <br><br>
                   <span class="font-bold text-emerald-400">- Do đó $ED \\parallel AB$.</span> <span class="float-right text-amber-400 font-bold">0.25đ</span></li>
                </ul>`;
                renderLog(barem2);
                step++;
            }
        }
    };
}