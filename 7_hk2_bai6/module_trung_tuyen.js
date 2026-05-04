// ==========================================
// MODULE DẠNG 3: ĐƯỜNG TRUNG TUYẾN & TRỌNG TÂM
// Yêu cầu bắt buộc: Xuất phát từ AG = 2/3 AM.
// ==========================================

let selectedSubtypes = ['3.1', '3.2'];

export function renderConfigUI(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="bg-slate-800 p-3 rounded-lg border border-slate-600 shadow-sm text-sm">
            <h3 class="text-teal-400 font-bold mb-2"><i class="fa-solid fa-filter"></i> Trộn ngẫu nhiên các tiểu dạng (Trung Tuyến):</h3>
            <div class="flex flex-col gap-2 text-slate-200">
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="3.1" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 3.1:</b> Cho chiều dài trung tuyến, tính các đoạn nhỏ.</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="3.2" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 3.2:</b> Cho khoảng cách đỉnh-trọng tâm, tính phần còn lại.</span>
                </label>
            </div>
        </div>
    `;

    const checkboxes = container.querySelectorAll('.subtype-checkbox');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            selectedSubtypes = Array.from(checkboxes).filter(i => i.checked).map(i => i.value);
            if (selectedSubtypes.length === 0) {
                cb.checked = true; 
                selectedSubtypes = [cb.value];
            }
        });
    });
}

function getRandEven(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num % 2 === 0 ? num : num + 1;
}

export function generateProblem() {
    const subtype = selectedSubtypes[Math.floor(Math.random() * selectedSubtypes.length)];
    const pts = ['A', 'B', 'C', 'M', 'N', 'P', 'X', 'Y', 'Z'].sort(() => 0.5 - Math.random()).slice(0, 3);
    const midPt = ['M', 'D', 'E', 'F'].find(m => !pts.includes(m)); // Chọn điểm trung điểm không trùng đỉnh
    
    let data, html;

    if (subtype === '3.1') {
        // Cho trung tuyến AM chia hết cho 3
        let lengthAM = Math.floor(Math.random() * 5 + 2) * 3; // 6, 9, 12, 15...
        data = { subtype: '3.1', pts: pts, midPt: midPt, lengthAM: lengthAM, lengthAG: lengthAM * 2 / 3, lengthGM: lengthAM / 3 };
        
        // Đã FIX: MathJax hiển thị lỗi do thừa dấu $ ở giữa các biến
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 3.1: Ứng dụng tính chất Trọng tâm</h3>
            Trên một khu vực hình tam giác $${pts[0]}${pts[1]}${pts[2]}$, điểm $${midPt}$ là trung điểm của đoạn $${pts[1]}${pts[2]}$. Người ta xác định được $G$ là trọng tâm của khu vực.<br><br>
            Biết khoảng cách thực tế của đoạn đường thẳng từ $${pts[0]}$ đến $${midPt}$ dài <b>${lengthAM} km</b>.<br><br>
            <b>Yêu cầu:</b> Dựa vào tính chất toán học, em hãy lập luận để tính khoảng cách từ đỉnh $${pts[0]}$ đến trọng tâm $G$ và từ trọng tâm $G$ đến $${midPt}$.
        </div>`;
    } else {
        // Cho AG chia hết cho 2
        let lengthAG = Math.floor(Math.random() * 6 + 2) * 2; // 4, 6, 8, 10, 12...
        data = { subtype: '3.2', pts: pts, midPt: midPt, lengthAG: lengthAG, lengthAM: lengthAG * 3 / 2, lengthGM: lengthAG / 2 };
        
        // Đã FIX: MathJax hiển thị lỗi do thừa dấu $ ở giữa các biến
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 3.2: Khôi phục tỉ lệ Trọng tâm</h3>
            Một trạm kiểm lâm $G$ được đặt tại <b>trọng tâm</b> của khu rừng hình tam giác $${pts[0]}${pts[1]}${pts[2]}$. Gọi $${midPt}$ là trung điểm của bìa rừng $${pts[1]}${pts[2]}$.<br><br>
            Trên bản đồ, người ta đo được khoảng cách từ trạm $${pts[0]}$ đến trọng tâm $G$ là <b>${lengthAG} km</b>.<br><br>
            <b>Yêu cầu:</b> Em hãy tính khoảng cách từ trọng tâm $G$ đến bìa rừng $${midPt}$ và tổng chiều dài đoạn thẳng $${pts[0]}${midPt}$.
        </div>`;
    }

    return { type: 'trung_tuyen', text: html, data: data };
}

export function initBoard(boardId, logFunction, data) {
    let board = JXG.JSXGraph.initBoard(boardId, {
        boundingbox: [-6, 6, 6, -3], 
        axis: false, showNavigation: false, keepaspectratio: true
    });

    let step = 0;
    let pA, pB, pC, pM, pG, pMidAG;
    let segBC, segAM, segBG;

    const addTextMark = (p1, p2, markStr, color) => {
        board.create('text', [
            () => (p1.X() + p2.X())/2, 
            () => (p1.Y() + p2.Y())/2,
            markStr
        ], { anchorX: 'middle', anchorY: 'middle', fontSize: 16, color: color, cssClass: 'font-bold bg-white/70 px-1 rounded' });
    };

    const logStep = (stepName, suyLuan, trinhBay) => {
        logFunction(`
            <div class="mb-4 shadow-sm rounded-lg overflow-hidden border border-slate-600">
                <div class="bg-teal-700 px-3 py-2 text-teal-100 text-sm font-bold uppercase tracking-wider border-b border-teal-600">
                    <i class="fa-solid fa-shoe-prints mr-2 text-amber-400"></i> ${stepName}
                </div>
                <div class="bg-slate-700 p-3 border-b border-slate-600 text-amber-100 text-sm">
                    <i class="fa-solid fa-lightbulb text-amber-400 mr-1"></i> <b>Hướng tư duy:</b> ${suyLuan}
                </div>
                <div class="bg-slate-800 p-4 text-white text-base leading-relaxed border-l-4 border-teal-500 font-serif">
                    <b>Trình bày bài giải:</b><br>
                    <div class="mt-2 pl-2 border-l-2 border-slate-500">${trinhBay}</div>
                </div>
            </div>
        `);
    }

    return {
        nextStep: () => {
            step++;
            let [A, B, C] = data.pts;
            let M = data.midPt;

            if (step === 1) {
                pA = board.create('point', [0, 4], {name: A, size: 4, color: '#0f766e'}); 
                pB = board.create('point', [-4, -1], {name: B, size: 4, color: '#0f766e'});
                pC = board.create('point', [4, -1], {name: C, size: 4, color: '#0f766e'});
                
                board.create('segment', [pA, pB], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                board.create('segment', [pA, pC], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                segBC = board.create('segment', [pB, pC], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                board.create('polygon', [pA, pB, pC], {fillColor: '#ccfbf1', fillOpacity: 0.3, borders:{visible:false}});
                
                logStep("BƯỚC 1: Lập mô hình hình học", 
                    "Vẽ tam giác theo dữ kiện đề bài.", 
                    `Ta có mô hình tam giác $${A}${B}${C}$.`);
            } 
            else if (step === 2) {
                pM = board.create('midpoint', [pB, pC], {name: M, size: 3, color: '#ef4444'});
                segAM = board.create('segment', [pA, pM], {strokeColor: '#f59e0b', strokeWidth: 2});
                
                addTextMark(pB, pM, '//', '#333');
                addTextMark(pM, pC, '//', '#333');

                logStep("BƯỚC 2: Xác định đường trung tuyến", 
                    "Vì điểm nối từ đỉnh tới trung điểm cạnh đối diện, nên nó là đường trung tuyến.", 
                    `Vì $${M}$ là trung điểm của $${B}${C}$ nên $${A}${M}$ là <b>đường trung tuyến</b> của $\\Delta ${A}${B}${C}$.`);
            } 
            else if (step === 3) {
                let midAC = board.create('midpoint', [pA, pC], {visible: false});
                let medB = board.create('segment', [pB, midAC], {visible: false});
                pG = board.create('intersection', [segAM, medB, 0], {name: 'G', size: 5, color: '#ef4444'});
                
                // Đã FIX: Vẽ nét đứt trải dài tới trung điểm AC để thấy rõ ràng đường trung tuyến thứ 2
                segBG = board.create('segment', [pB, midAC], {strokeColor: '#94a3b8', dash: 2});

                pMidAG = board.create('midpoint', [pA, pG], {name: '', size: 2, color: '#333'});
                
                // Đã FIX: Đổi '\\\\' (bị lỗi hiển thị) thành '|' để làm ký hiệu đoạn thẳng bằng nhau
                addTextMark(pA, pMidAG, '|', '#ef4444');
                addTextMark(pMidAG, pG, '|', '#ef4444');
                addTextMark(pG, pM, '|', '#ef4444');

                if (data.subtype === '3.1') {
                    board.create('text', [() => pA.X() + 0.5, () => (pA.Y() + pM.Y())/2, `${data.lengthAM} km`], {fontSize: 16, color: '#f59e0b', cssClass: 'bg-white/70 px-1'});
                } else {
                    board.create('text', [() => pA.X() + 0.5, () => (pA.Y() + pG.Y())/2, `${data.lengthAG} km`], {fontSize: 16, color: '#ef4444', cssClass: 'bg-white/70 px-1'});
                }

                // Đã FIX: Chuyển \mathbf có chứa phân số sang dùng thẻ HTML <b> để tránh lỗi render MathJax
                logStep("BƯỚC 3: Phân tích tỉ lệ Trọng tâm", 
                    "Mẹo nhớ: Trung tuyến được chia làm 3 phần bằng nhau. Từ Đỉnh đến Trọng tâm chiếm 2 phần. Từ Trọng tâm đến đáy chiếm 1 phần.", 
                    `Vì $G$ là trọng tâm của $\\Delta ${A}${B}${C}$. Theo tính chất đường trung tuyến, ta luôn có:<br>
                    <b>$${A}G = \\frac{2}{3} ${A}${M}$</b><br>
                    Nên đoạn còn lại <b>$G${M} = \\frac{3-2}{3} ${A}${M} = \\frac{1}{3} ${A}${M}$</b>.`);
            } 
            else if (step === 4) {
                if (data.subtype === '3.1') {
                    logStep("BƯỚC 4: Giải quyết mô hình & Tính toán", 
                        "Thay số liệu tổng (AM) vào công thức gốc đã ghi ở trên.", 
                        `- Ta có $${A}G = \\frac{2}{3} ${A}${M}$.<br>
                        $\\Rightarrow ${A}G = \\frac{2}{3} \\cdot ${data.lengthAM} = $ <b>${data.lengthAG}</b> (km).<br><br>
                        - Ta có $G${M} = \\frac{1}{3} ${A}${M}$.<br>
                        $\\Rightarrow G${M} = \\frac{1}{3} \\cdot ${data.lengthAM} = $ <b>${data.lengthGM}</b> (km).`);
                } else {
                    logStep("BƯỚC 4: Giải quyết mô hình & Tính toán", 
                        "Lưu ý: Luôn bắt đầu thay số từ công thức gốc AG = 2/3 AM để tìm AM trước. Sau đó dùng phép chia phân số lập tỉ lệ để tìm GM.", 
                        `- Ta có $${A}G = \\frac{2}{3} ${A}${M}$.<br>
                        $\\Rightarrow ${A}${M} = ${A}G : \\frac{2}{3} = ${data.lengthAG} \\cdot \\frac{3}{2} = $ <b>${data.lengthAM}</b> (km).<br><br>
                        - Để tính $GM$ theo $AG$, ta lập tỉ lệ:<br>
                        $\\frac{G${M}}{${A}G} = \\frac{\\frac{1}{3} ${A}${M}}{\\frac{2}{3} ${A}${M}} = \\frac{1}{2}$<br>
                        $\\Rightarrow G${M} = \\frac{1}{2} ${A}G = \\frac{1}{2} \\cdot ${data.lengthAG} = $ <b>${data.lengthGM}</b> (km).`);
                }
            }
        },

        flipX: () => {
            let T = board.create('transform', [1, 0, 0, 0, -1, 0, 0, 0, 1], {type: 'generic'});
            if(pA && pB && pC) T.applyOnce([pA, pB, pC]); 
            board.update();
        },
        flipY: () => {
            let T = board.create('transform', [1, 0, 0, 0, 1, 0, 0, 0, -1], {type: 'generic'});
            if(pA && pB && pC) T.applyOnce([pA, pB, pC]);
            board.update();
        }
    };
}