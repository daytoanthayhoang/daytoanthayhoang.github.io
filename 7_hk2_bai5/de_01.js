export function veDe01(containerId, renderLog) {
    // 1. Khởi tạo Bảng vẽ
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 6, 8, -2], 
        axis: false, 
        showCopyright: false,
        keepaspectratio: true
    });

    // --- BƯỚC 1: Tam giác ABC vuông tại A ---
    // Hiển thị ngay lập tức khi load trang
    const pA = board.create('point', [0, 4], {name: 'A', size: 3, color: 'blue'});
    const pC = board.create('point', [6, 4], {name: 'C', size: 3, color: 'blue'});
    const pB = board.create('point', [0, 0], {name: 'B', size: 3, color: 'blue'});
    
    const polyABC = board.create('polygon', [pA, pB, pC], {
        borders: {strokeWidth: 2, strokeColor: '#000'}
    });
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.5});

    // --- CÁC ĐỐI TƯỢNG ẨN (Chờ bấm nút mới hiện) ---
    // Đường cao AH
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeColor: 'red', visible: false});
    const angleH1 = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.4, visible: false});

    // Điểm D
    const circleA = board.create('circle', [pA, pB], {visible: false});
    const segHC = board.create('segment', [pH, pC], {visible: false});
    const pD = board.create('intersection', [circleA, segHC, 0], {name: 'D', size: 3, color: 'blue', visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeColor: 'blue', visible: false});

    // Điểm E
    const lineAD = board.create('line', [pA, pD], {visible: false});
    const perpCE = board.create('perpendicular', [lineAD, pC], {strokeColor: 'green', dash: 2, visible: false});
    const lineAH = board.create('line', [pA, pH], {visible: false});
    const pE = board.create('intersection', [perpCE, lineAH, 0], {name: 'E', size: 3, color: 'green', visible: false});
    const segED = board.create('segment', [pE, pD], {strokeColor: 'purple', strokeWidth: 2, visible: false});

    let step = 1;

    // Hàm thực thi khi bấm nút
    return function nextStep() {
        if (step === 1) {
            pH.setAttribute({visible: true}); 
            segAH.setAttribute({visible: true});
            angleH1.setAttribute({visible: true});
            renderLog("<b>Bước 1:</b> Vẽ đường cao AH vuông góc BC. <br><i class='text-amber-400'>💡 Gợi ý:</i> Chú ý $\\Delta AHB$ và $\\Delta AHD$ có chung cạnh góc vuông $AH$.");
            step++;
        } 
        else if (step === 2) {
            pD.setAttribute({visible: true}); 
            segAD.setAttribute({visible: true});
            renderLog("<b>Bước 2:</b> Lấy D trên HC sao cho $AD = AB$. <br>$\\Rightarrow \\Delta AHB = \\Delta AHD$ (Cạnh huyền - Cạnh góc vuông).");
            step++;
        } 
        else if (step === 3) {
            perpCE.setAttribute({visible: true}); 
            pE.setAttribute({visible: true});
            segED.setAttribute({visible: true});
            renderLog("<b>Bước 3:</b> E là giao điểm của hai đường cao AH và CE trong $\\Delta ACD$. <br>Vậy E là trực tâm $\\Rightarrow DE \\perp AC$. Mà $AB \\perp AC \\Rightarrow DE \\parallel AB$.");
            step++;
        }
        else {
            alert("Đã vẽ xong hình cơ bản của Đề 1!");
        }
    };
}