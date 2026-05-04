// ==========================================
// MODULE DẠNG 4: ĐƯỜNG CAO & KHOẢNG CÁCH NGẮN NHẤT
// Bao gồm:
// 4.1: Đường vuông góc là khoảng cách ngắn nhất
// 4.2: Tính chất đồng quy tại Trực tâm
// ==========================================

let selectedSubtypes = ['4.1', '4.2'];

export function renderConfigUI(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="bg-slate-800 p-3 rounded-lg border border-slate-600 shadow-sm text-sm">
            <h3 class="text-teal-400 font-bold mb-2"><i class="fa-solid fa-filter"></i> Trộn ngẫu nhiên các tiểu dạng (Đường Cao):</h3>
            <div class="flex flex-col gap-2 text-slate-200">
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="4.1" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 4.1:</b> Tìm khoảng cách ngắn nhất (Đường vuông góc)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="4.2" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 4.2:</b> Ứng dụng tính chất Trực tâm (Giao 3 đường cao)</span>
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

export function generateProblem() {
    const subtype = selectedSubtypes[Math.floor(Math.random() * selectedSubtypes.length)];
    const pts = ['A', 'B', 'C', 'M', 'N', 'P', 'H', 'K', 'E'].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    let data, html;

    if (subtype === '4.1') {
        const lines = ['đường dây điện cao thế', 'đường ống nước sạch', 'trục đường quốc lộ', 'bờ sông'];
        const items = ['dây điện', 'ống nước', 'đường nhựa', 'kênh dẫn nước'];
        const people = ['bác An', 'chú Bình', 'ông Cường', 'cô Dung'];
        
        data = { subtype: '4.1', pt: pts[0], pt2: pts[1], line: lines[Math.floor(Math.random()*lines.length)], item: items[Math.floor(Math.random()*items.length)], person: people[Math.floor(Math.random()*people.length)] };
        
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 4.1: Khoảng cách ngắn nhất</h3>
            Nhà ${data.person} (vị trí $${data.pt}$) nằm cách xa một ${data.line} (gọi là đường thẳng $d$).<br><br>
            <b>Yêu cầu:</b> ${data.person} muốn kéo ${data.item} từ ${data.line} vào nhà. Hỏi bác phải chọn kéo theo hướng nào để <b>tiết kiệm ${data.item} nhất</b> (đoạn đường ngắn nhất)?<br><br>
            Dựa vào kiến thức toán học về quan hệ giữa đường vuông góc và đường xiên, em hãy giải thích cách làm.
        </div>`;
    } else {
        // Dạng 4.2
        data = { subtype: '4.2', pts: pts.slice(0,3), ptH: 'H' };
        
        // Đã FIX: Gộp chuỗi các điểm để không bị thừa ký tự $ (Vd: $ABC$ thay vì $A$B$C$)
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 4.2: Ứng dụng Trực tâm</h3>
            Trong một khu vực hình tam giác $${data.pts[0]}${data.pts[1]}${data.pts[2]}$, người thợ xây đã dựng hai rào chắn từ $${data.pts[1]}$ vuông góc với $${data.pts[0]}${data.pts[2]}$, và từ $${data.pts[2]}$ vuông góc với $${data.pts[0]}${data.pts[1]}$. Hai rào chắn này cắt nhau tại $${data.ptH}$.<br><br>
            <b>Yêu cầu:</b> Từ vị trí $${data.pts[0]}$, người thợ căng một sợi dây đi qua điểm $${data.ptH}$ và chạm đến cạnh $${data.pts[1]}${data.pts[2]}$. Không cần dùng thước eke để đo, em hãy dùng tính chất hình học để chứng minh sợi dây này vuông góc với $${data.pts[1]}${data.pts[2]}$.
        </div>`;
    }

    return { type: 'duong_cao', text: html, data: data };
}

export function initBoard(boardId, logFunction, data) {
    let board = JXG.JSXGraph.initBoard(boardId, {
        boundingbox: [-6, 6, 6, -3], 
        axis: false, showNavigation: false, keepaspectratio: true
    });

    let step = 0;
    
    // Biến cho 4.1
    let pA, line_d, pH, pM, segAH, segAM;
    
    // Biến cho 4.2
    let p1, p2, p3, pIntH, pF1, pF2, pF3;
    let alt1, alt2, alt3;

    const addTextMark = (p1, p2, markStr, color) => {
        board.create('text', [
            () => (p1.X() + p2.X())/2, () => (p1.Y() + p2.Y())/2, markStr
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
            
            // ==========================================
            // XỬ LÝ DẠNG 4.1: ĐƯỜNG VUÔNG GÓC NGẮN NHẤT
            // ==========================================
            if (data.subtype === '4.1') {
                if (step === 1) {
                    pA = board.create('point', [0, 4], {name: data.pt, size: 4, color: '#0f766e'});
                    line_d = board.create('line', [[-5, -1], [5, -1]], {strokeColor: '#3b82f6', strokeWidth: 2, name: 'd', withLabel: true});
                    
                    logStep("BƯỚC 1: Lập mô hình", 
                        "Chuyển đổi các đối tượng thực tế thành hình học (nhà là điểm, đường ống là đường thẳng).", 
                        `Gọi $${data.pt}$ là vị trí nhà ${data.person} và đường thẳng $d$ là ${data.line}.`);
                } 
                else if (step === 2) {
                    // Đã FIX: Sửa lỗi dùng hàm 'perpendicularpoint' không tồn tại
                    let perp_d = board.create('perpendicular', [line_d, pA], {visible: false});
                    pH = board.create('intersection', [perp_d, line_d, 0], {name: 'H', size: 4, color: '#ef4444'});
                    segAH = board.create('segment', [pA, pH], {strokeColor: '#ef4444', strokeWidth: 3});
                    
                    let pPerp = board.create('point', [() => pH.X() + 1, () => pH.Y()], {visible: false});
                    board.create('angle', [pPerp, pH, pA], {radius: 0.4, rightAngle: true, strokeColor: '#ef4444', strokeWidth: 2});
                    
                    logStep("BƯỚC 2: Phân tích từ khóa", 
                        "Từ khóa 'ngắn nhất/tiết kiệm nhất' liên quan trực tiếp đến quan hệ giữa đường vuông góc và đường xiên.", 
                        `Vì ${data.person} cần kéo ${data.item} sao cho quãng đường là ngắn nhất.<br>
                        Theo toán học, khoảng cách ngắn nhất từ một điểm đến một đường thẳng chính là độ dài <b>đoạn vuông góc</b>.`);
                } 
                else if (step === 3) {
                    pM = board.create('point', [4, -1], {name: 'M', size: 3, color: '#94a3b8'});
                    segAM = board.create('segment', [pA, pM], {strokeColor: '#f59e0b', dash: 2, strokeWidth: 2});
                    
                    board.create('text', [2, 1, 'Đường xiên'], {color: '#f59e0b', fontSize: 14});
                    board.create('text', [-1.5, 1.5, 'Đường vuông góc'], {color: '#ef4444', fontSize: 14});

                    logStep("BƯỚC 3 & 4: Giải quyết mô hình & Kết luận", 
                        "Vẽ đường vuông góc AH và lấy điểm M bất kỳ để tạo đường xiên AM làm cơ sở so sánh.", 
                        `Từ điểm $${data.pt}$, ta kẻ đường vuông góc $${data.pt}H \\perp d$ (với $H \\in d$).<br>
                        Lấy một điểm $M$ bất kỳ trên $d$ ($M \\neq H$). Khi đó $${data.pt}H$ là đường vuông góc, còn $${data.pt}M$ là đường xiên.<br>
                        Theo định lý, ta luôn có $${data.pt}H < ${data.pt}M$.<br>
                        <b>Suy ra:</b> ${data.person} cần kéo ${data.item} theo hướng vuông góc từ nhà đến ${data.line} (tức là đoạn $${data.pt}H$) để tiết kiệm nhất.`);
                }
            }

            // ==========================================
            // XỬ LÝ DẠNG 4.2: TRỰC TÂM
            // ==========================================
            else if (data.subtype === '4.2') {
                let [A, B, C] = data.pts;
                let H = data.ptH;

                if (step === 1) {
                    p1 = board.create('point', [0, 4], {name: A, size: 4, color: '#0f766e'}); 
                    p2 = board.create('point', [-3, -1], {name: B, size: 4, color: '#0f766e'});
                    p3 = board.create('point', [4, -1], {name: C, size: 4, color: '#0f766e'});
                    
                    board.create('segment', [p1, p2], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    board.create('segment', [p2, p3], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    board.create('segment', [p3, p1], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    board.create('polygon', [p1, p2, p3], {fillColor: '#ccfbf1', fillOpacity: 0.3, borders:{visible:false}});
                    
                    logStep("BƯỚC 1: Lập mô hình", 
                        "Vẽ tam giác tạo bởi 3 vị trí đề bài cho.", 
                        `Gọi 3 vị trí là các đỉnh của tam giác $\\Delta ${A}${B}${C}$.`);
                } 
                else if (step === 2) {
                    let lineAC = board.create('line', [p1, p3], {visible: false});
                    let lineAB = board.create('line', [p1, p2], {visible: false});
                    
                    // Đã FIX: Dùng tổ hợp đường vuông góc (perpendicular) và giao điểm (intersection)
                    let perp1 = board.create('perpendicular', [lineAC, p2], {visible: false});
                    pF1 = board.create('intersection', [perp1, lineAC, 0], {name: 'D', size: 3});
                    
                    let perp2 = board.create('perpendicular', [lineAB, p3], {visible: false});
                    pF2 = board.create('intersection', [perp2, lineAB, 0], {name: 'E', size: 3});
                    
                    alt1 = board.create('segment', [p2, pF1], {strokeColor: '#f59e0b', strokeWidth: 2});
                    alt2 = board.create('segment', [p3, pF2], {strokeColor: '#f59e0b', strokeWidth: 2});
                    
                    board.create('angle', [p1, pF1, p2], {radius: 0.4, rightAngle: true, strokeColor: '#f59e0b'});
                    board.create('angle', [p2, pF2, p3], {radius: 0.4, rightAngle: true, strokeColor: '#f59e0b'});
                    
                    pIntH = board.create('intersection', [alt1, alt2, 0], {name: H, size: 5, color: '#ef4444'});

                    logStep("BƯỚC 2: Phân tích dữ kiện", 
                        "Nhận diện 2 đường vuông góc đã cho chính là 2 đường cao của tam giác.", 
                        `Vì rào chắn từ $${B}$ vuông góc với $${A}${C}$ (đường cao thứ nhất).<br>
                        Và rào chắn từ $${C}$ vuông góc với $${A}${B}$ (đường cao thứ hai).<br>
                        Hai rào chắn này cắt nhau tại $${H}$.`);
                } 
                else if (step === 3) {
                    let rayAH = board.create('ray', [p1, pIntH], {visible: false});
                    let lineBC = board.create('line', [p2, p3], {visible: false});
                    pF3 = board.create('intersection', [rayAH, lineBC, 0], {name: 'K', size: 3});
                    
                    alt3 = board.create('segment', [p1, pF3], {strokeColor: '#ef4444', strokeWidth: 2, dash: 2});

                    logStep("BƯỚC 3 & 4: Giải quyết mô hình & Kết luận", 
                        "Sử dụng tính chất đồng quy của 3 đường cao (Trực tâm) để chứng minh đường thứ 3 cũng phải là đường cao.", 
                        `- Do $${H}$ là giao điểm của 2 đường cao, nên theo tính chất tam giác, $${H}$ chính là <b>Trực tâm</b> của $\\Delta ${A}${B}${C}$.<br>
                        - Khi đó, sợi dây căng từ đỉnh $${A}$ đi qua trực tâm $${H}$ chắc chắn phải chứa đường cao thứ ba.<br>
                        - <b>Suy ra:</b> Sợi dây đi qua $${H}$ sẽ luôn vuông góc với cạnh $${B}${C}$ (đã chứng minh xong).`);
                } 
                else if (step === 4) {
                    board.create('angle', [p1, pF3, p3], {radius: 0.4, rightAngle: true, strokeColor: '#ef4444', strokeWidth: 2});
                    
                    // Đã FIX: Bọc điều kiện để tránh gây lỗi nếu UI không có phần tử này
                    const btnStep = document.getElementById('btnStep');
                    if (btnStep) {
                        btnStep.style.display = 'none';
                    }
                }
            }
        },

        flipX: () => {
            let T = board.create('transform', [1, 0, 0, 0, -1, 0, 0, 0, 1], {type: 'generic'});
            if(data.subtype==='4.1') { if(pA && pM && pH) T.applyOnce([pA, pM, pH]); }
            else { if(p1 && p2 && p3) T.applyOnce([p1, p2, p3]); }
            board.update();
        },
        flipY: () => {
            let T = board.create('transform', [1, 0, 0, 0, 1, 0, 0, 0, -1], {type: 'generic'});
            if(data.subtype==='4.1') { if(pA && pM && pH) T.applyOnce([pA, pM, pH]); }
            else { if(p1 && p2 && p3) T.applyOnce([p1, p2, p3]); }
            board.update();
        }
    };
}