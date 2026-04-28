export function veDe01(containerId, renderLog) {
    // Khởi tạo Bảng vẽ với tọa độ rộng hơn để chứa điểm E nằm tít dưới
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 6, 9, -5], 
        axis: false, 
        showCopyright: false,
        keepaspectratio: true
    });

    // --- BƯỚC 0: Khởi tạo Tam giác ABC vuông tại A ---
    // Tùy chỉnh vị trí nhãn (label) để không đè lên hình
    const pA = board.create('point', [0, 4], {name: 'A', size: 3, color: '#1e293b', label: {offset: [-15, 15]}});
    const pB = board.create('point', [0, 0], {name: 'B', size: 3, color: '#1e293b', label: {offset: [-15, -15]}});
    const pC = board.create('point', [7, 4], {name: 'C', size: 3, color: '#1e293b', label: {offset: [15, 15]}});
    
    // Thêm withLabel: false để tắt các chữ a, b, c tự động
    const segAB = board.create('segment', [pA, pB], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segBC = board.create('segment', [pB, pC], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    const segCA = board.create('segment', [pC, pA], {strokeWidth: 2, strokeColor: '#1e293b', withLabel: false});
    
    // Ký hiệu góc vuông tại A
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.4, withLabel: false, strokeColor: '#1e293b'});


    // --- BƯỚC 1: Đường cao AH (Ẩn) ---
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pH = board.create('perpendicularpoint', [lineBC, pA], {name: 'H', size: 3, color: '#dc2626', label: {offset: [5, -15]}, visible: false});
    const segAH = board.create('segment', [pA, pH], {strokeWidth: 2, strokeColor: '#dc2626', withLabel: false, visible: false});
    const angleH = board.create('angle', [pA, pH, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#dc2626', visible: false});


    // --- BƯỚC 2: Điểm D và đoạn AD (Ẩn) ---
    const circleA = board.create('circle', [pA, pB], {visible: false});
    const segHC = board.create('segment', [pH, pC], {visible: false});
    const pD = board.create('intersection', [circleA, segHC, 0], {name: 'D', size: 3, color: '#2563eb', label: {offset: [5, 15]}, visible: false});
    const segAD = board.create('segment', [pA, pD], {strokeWidth: 2, strokeColor: '#2563eb', withLabel: false, visible: false});
    
    // Ký hiệu 1 gạch bằng nhau cho AB và AD
    const hatchAB = board.create('hatch', [segAB, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], withLabel: false, visible: false});
    const hatchAD = board.create('hatch', [segAD, 1], {strokeWidth: 2, strokeColor: '#dc2626', tickEndings: [1, 1], withLabel: false, visible: false});


    // --- BƯỚC 3: Điểm E là trực tâm (Ẩn) ---
    const lineAD = board.create('line', [pA, pD], {visible: false});
    const lineCE = board.create('perpendicular', [lineAD, pC], {visible: false});
    const lineAH = board.create('line', [pA, pH], {visible: false});
    
    // Điểm E (giao của AH và CE kéo dài)
    const pE = board.create('intersection', [lineCE, lineAH, 0], {name: 'E', size: 3, color: '#16a34a', label: {offset: [15, -5]}, visible: false});
    
    // Kéo dài AH xuống E (nét đứt)
    const segHE = board.create('segment', [pH, pE], {strokeWidth: 2, strokeColor: '#dc2626', dash: 2, withLabel: false, visible: false});
    
    // Chân đường vuông góc từ C xuống AD (gọi ẩn là F để vẽ ký hiệu vuông góc)
    const pF = board.create('intersection', [lineCE, lineAD, 0], {name: '', size: 0, visible: false});
    
    // Kéo dài AD xuống F (nét đứt)
    const segDF = board.create('segment', [pD, pF], {strokeWidth: 2, strokeColor: '#2563eb', dash: 2, withLabel: false, visible: false});
    
    // Đường cao thứ hai CE
    const segCE = board.create('segment', [pC, pE], {strokeWidth: 2, strokeColor: '#16a34a', withLabel: false, visible: false});
    
    // Ký hiệu góc vuông tại F (chỗ CE vuông góc AD)
    const angleF = board.create('angle', [pA, pF, pC], {type: 'square', size: 0.3, withLabel: false, strokeColor: '#16a34a', visible: false});
    
    // Đoạn thẳng DE song song AB
    const segDE = board.create('segment', [pD, pE], {strokeWidth: 2, strokeColor: '#9333ea', withLabel: false, visible: false});


    let step = 1;

    // --- HÀM ĐIỀU KHIỂN CÁC BƯỚC VẼ ---
    return function nextStep() {
        if (step === 1) {
            pH.setAttribute({visible: true}); 
            segAH.setAttribute({visible: true});
            angleH.setAttribute({visible: true});
            
            renderLog("<b>Bước 1:</b> Vẽ đường cao AH vuông góc BC. <br><i class='text-amber-400'>💡 Gợi ý câu a:</i> Hãy quan sát hai tam giác vuông $\\Delta AHB$ và $\\Delta AHD$. Chúng có chung cạnh góc vuông nào?");
            step++;
        } 
        else if (step === 2) {
            pD.setAttribute({visible: true}); 
            segAD.setAttribute({visible: true});
            hatchAB.setAttribute({visible: true});
            hatchAD.setAttribute({visible: true});
            
            renderLog("<b>Bước 2 (Giải câu a):</b> Lấy D trên HC sao cho $AD = AB$. <br>Kết hợp với cạnh $AH$ chung, ta suy ra $\\Delta AHB = \\Delta AHD$ (Cạnh huyền - Cạnh góc vuông).");
            step++;
        } 
        else if (step === 3) {
            // Hiện toàn bộ cụm trực tâm
            pE.setAttribute({visible: true});
            segHE.setAttribute({visible: true}); // Nét đứt kéo dài AH
            segDF.setAttribute({visible: true}); // Nét đứt kéo dài AD
            segCE.setAttribute({visible: true});
            angleF.setAttribute({visible: true});
            segDE.setAttribute({visible: true});
            
            renderLog("<b>Bước 3 (Giải câu b):</b> Vẽ $CE \\perp AD$ cắt đường thẳng $AH$ tại E. <br><i class='text-amber-400'>💡 Phân tích trực tâm:</i> Xét $\\Delta ACD$, có $AH \\perp CD$ và $CE \\perp AD$. Hai đường cao này cắt nhau tại $E$, nên $E$ là trực tâm. <br>Suy ra $DE$ là đường cao thứ ba, tức là $DE \\perp AC$. <br>Mà $AB \\perp AC$, do đó $DE \\parallel AB$.");
            step++;
        }
        else {
            // Có thể thêm tính năng reset hình ở đây nếu muốn
            renderLog("<span class='text-emerald-400 font-bold'>Đã hoàn thành toàn bộ hình vẽ và gợi ý cho Đề 1!</span>");
        }
    };
}