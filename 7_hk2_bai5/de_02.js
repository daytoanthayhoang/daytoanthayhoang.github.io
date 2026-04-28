export function veDe02(containerId, renderLog) {
    const board = JXG.JSXGraph.initBoard(containerId, {
        boundingbox: [-2, 8, 10, -2], 
        axis: false, showCopyright: false, keepaspectratio: true
    });

    // --- BƯỚC 1: Tam giác ABC vuông tại A ---
    const pA = board.create('point', [0, 6], {name: 'A', size: 3});
    const pB = board.create('point', [0, 0], {name: 'B', size: 3});
    const pC = board.create('point', [8, 0], {name: 'C', size: 3});
    
    const polyABC = board.create('polygon', [pA, pB, pC], {borders: {strokeWidth: 2, strokeColor: '#000'}});
    board.create('angle', [pC, pA, pB], {type: 'square', size: 0.5}); // Vuông tại A

    // --- BƯỚC 2: Phân giác BD ---
    const lineAC = board.create('line', [pA, pC], {visible: false});
    const bisectorB = board.create('bisectorlines', [pC, pB, pA], {visible: false});
    const pD = board.create('intersection', [bisectorB.line1, lineAC, 0], {name: 'D', size: 3, visible: false});
    const segBD = board.create('segment', [pB, pD], {strokeColor: 'blue', visible: false});
    
    // Ký hiệu 2 góc phân giác bằng nhau
    const a1 = board.create('angle', [pC, pB, pD], {radius: 1, visible: false});
    const a2 = board.create('angle', [pD, pB, pA], {radius: 1.2, visible: false});

    // --- BƯỚC 3: Vẽ DE vuông góc BC ---
    const lineBC = board.create('line', [pB, pC], {visible: false});
    const pE = board.create('perpendicularpoint', [lineBC, pD], {name: 'E', size: 3, visible: false});
    const segDE = board.create('segment', [pD, pE], {strokeColor: 'red', visible: false});
    const angleE = board.create('angle', [pB, pE, pD], {type: 'square', size: 0.4, visible: false});

    // --- BƯỚC 4: Tia ED cắt BA tại M ---
    const lineED = board.create('line', [pE, pD], {visible: false});
    const lineBA = board.create('line', [pB, pA], {visible: false});
    const pM = board.create('intersection', [lineED, lineBA, 0], {name: 'M', size: 3, visible: false});
    
    // Nối các đoạn kéo dài (nét đứt hoặc màu khác để phân biệt)
    const segAM = board.create('segment', [pA, pM], {strokeColor: '#64748b', dash: 2, visible: false});
    const segDM = board.create('segment', [pD, pM], {strokeColor: '#64748b', dash: 2, visible: false});
    const segMC = board.create('segment', [pM, pC], {strokeColor: 'purple', strokeWidth: 2, visible: false});

    // --- BƯỚC 5: K là trung điểm MC ---
    const pK = board.create('midpoint', [pM, pC], {name: 'K', size: 3, color: 'orange', visible: false});
    const segBK = board.create('segment', [pB, pK], {strokeColor: 'green', dash: 2, visible: false});

    let step = 1;

    return function nextStep() {
        if (step === 1) {
            pD.setAttribute({visible: true});
            segBD.setAttribute({visible: true});
            a1.setAttribute({visible: true}); a2.setAttribute({visible: true});
            renderLog("<b>Bước 1:</b> Vẽ đường phân giác $BD$ cắt $AC$ tại $D$.");
            step++;
        } 
        else if (step === 2) {
            pE.setAttribute({visible: true});
            segDE.setAttribute({visible: true});
            angleE.setAttribute({visible: true});
            renderLog("<b>Bước 2 (Giải câu a):</b> Từ $D$ kẻ $DE \\perp BC$. <br>Xét $\\Delta ABD$ (vuông tại A) và $\\Delta EBD$ (vuông tại E), ta có cạnh huyền $BD$ chung và góc nhọn $\\widehat{ABD} = \\widehat{EBD}$. <br>$\\Rightarrow \\Delta ABD = \\Delta EBD$ (Cạnh huyền - góc nhọn).");
            step++;
        } 
        else if (step === 3) {
            pM.setAttribute({visible: true});
            segAM.setAttribute({visible: true});
            segDM.setAttribute({visible: true});
            segMC.setAttribute({visible: true});
            renderLog("<b>Bước 3 (Giải câu b):</b> Tia $ED$ cắt tia $BA$ tại $M$. <br><i class='text-amber-400'>💡 Chứng minh $\\Delta MBC$ cân:</i> Xét $\\Delta ADM$ và $\\Delta EDC$ có $AD = ED$ (từ câu a) và hai góc đối đỉnh bằng nhau. <br>Suy ra $\\Delta ADM = \\Delta EDC$ $\\Rightarrow AM = EC$. <br>Cộng đoạn thẳng: $BM = BA + AM$, $BC = BE + EC$. Do $BA = BE$ (từ câu a) nên $BM = BC$. Vậy $\\Delta MBC$ cân tại $B$.");
            step++;
        }
        else if (step === 4) {
            pK.setAttribute({visible: true});
            segBK.setAttribute({visible: true});
            renderLog("<b>Bước 4 (Giải câu c):</b> Gọi $K$ là trung điểm $MC$. Cần chứng minh $B, D, K$ thẳng hàng. <br><i class='text-amber-400'>💡 Tư duy đường trung tuyến:</i> Trong $\\Delta MBC$ cân tại $B$, $BK$ là đường trung tuyến ứng với cạnh đáy $MC$ nên $BK$ đồng thời là phân giác của góc $\\widehat{MBC}$. <br>Mà $BD$ cũng là phân giác của $\\widehat{MBC}$ (giả thiết). <br>$\\Rightarrow$ Hai tia $BK$ và $BD$ trùng nhau. Hay $B, D, K$ thẳng hàng. (Đpcm)");
            step++;
        }
    };
}