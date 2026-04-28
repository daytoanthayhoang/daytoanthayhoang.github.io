export function veDe01(containerId) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 7, 8, -3], // Canh lề để hình nằm giữa, chừa chỗ ghi text
        axis: false, 
        showCopyright: false,
        keepaspectratio: true // Giữ đúng tỉ lệ hình học
    });

    // --- BƯỚC 1: Tam giác ABC vuông tại A ---
    const pA = board.create('point', [0, 4], {name: 'A', size: 3});
    const pC = board.create('point', [6, 4], {name: 'C', size: 3});
    // B nằm dưới A để BC tạo thành tam giác hướng xuống (hoặc tùy ý)
    const pB = board.create('point', [0, 0], {name: 'B', size: 3});
    
    const polyABC = board.create('polygon', [pA, pB, pC], {
        borders: {strokeWidth: 2, strokeColor: '#000'}
    });
    // Ký hiệu góc vuông tại A
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.5});

    // --- BƯỚC 2: Đường cao AH ---
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeColor: 'red', visible: false, dash: 0});
    const angleH1 = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.4, visible: false});
    const angleH2 = board.create('angle', [pB, pH, pA], {type: 'square', size: 0.4, visible: false});

    // --- BƯỚC 3: Điểm D trên HC sao cho AD = AB ---
    // Dùng đường tròn tâm A bán kính AB cắt HC
    const circleA = board.create('circle', [pA, pB], {visible: false});
    const segHC = board.create('segment', [pH, pC], {visible: false});
    const pD = board.create('intersection', [circleA, segHC, 0], {name: 'D', size: 3, visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeColor: 'blue', visible: false});
    // Ký hiệu bằng nhau cho cạnh AB và AD
    const markAB = board.create('hatch', [polyABC.borders[2], 2], {visible: false}); // borders[2] là AB
    const markAD = board.create('hatch', [segAD, 2], {visible: false});

    // --- BƯỚC 4: Điểm E (Trực tâm tam giác ACD) ---
    // Đường thẳng CE vuông góc AD
    const lineAD = board.create('line', [pA, pD], {visible: false});
    const perpCE = board.create('perpendicular', [lineAD, pC], {strokeColor: 'green', dash: 2, visible: false});
    const lineAH = board.create('line', [pA, pH], {visible: false});
    const pE = board.create('intersection', [perpCE, lineAH, 0], {name: 'E', size: 3, visible: false});
    
    // Giao điểm F của CE và AD để đánh dấu góc vuông
    const pF = board.create('intersection', [perpCE, lineAD, 0], {name: 'F', size: 0, visible: false, withLabel: false});
    const angleF = board.create('angle', [pC, pF, pD], {type: 'square', size: 0.3, visible: false});
    
    // Nối ED
    const segED = board.create('segment', [pE, pD], {strokeColor: 'purple', strokeWidth: 2, visible: false});

let step = 1;
    return function nextStep() {
        if (step === 1) {
            pH.setAttribute({visible: true}); segAH.setAttribute({visible: true});
            angleH1.setAttribute({visible: true}); angleH2.setAttribute({visible: true});
            renderLog("<b>Bước 1:</b> Vẽ đường cao AH vuông góc BC. <br><i class='text-amber-400'>💡 Gợi ý câu a:</i> Hãy quan sát hai tam giác vuông $\\Delta AHB$ và $\\Delta AHD$. Chúng có chung cạnh góc vuông nào?");
            step++;
        } 
        else if (step === 2) {
            pD.setAttribute({visible: true}); segAD.setAttribute({visible: true});
            markAB.setAttribute({visible: true}); markAD.setAttribute({visible: true});
            renderLog("<b>Bước 2 (Giải câu a):</b> Lấy D trên HC sao cho $AD = AB$. <br>Kết hợp với cạnh $AH$ chung, ta suy ra $\\Delta AHB = \\Delta AHD$ (Cạnh huyền - Cạnh góc vuông).");
            step++;
        } 
        else if (step === 3) {
            perpCE.setAttribute({visible: true}); pE.setAttribute({visible: true});
            angleF.setAttribute({visible: true}); segED.setAttribute({visible: true});
            renderLog("<b>Bước 3 (Giải câu b):</b> Vẽ $CE \\perp AD$ cắt $AH$ tại E. <br><i class='text-amber-400'>💡 Phân tích trực tâm:</i> Trong $\\Delta ACD$, có $AH$ và $CE$ là hai đường cao cắt nhau tại $E$. Vậy $E$ là trực tâm. Suy ra $DE$ là đường cao thứ ba, tức là $DE \\perp AC$. <br>Mà $AB \\perp AC$, do đó $DE \\parallel AB$.");
            step++;
        }
    };
}