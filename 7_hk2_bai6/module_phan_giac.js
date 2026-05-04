// ==========================================
// MODULE DẠNG 2: ĐƯỜNG PHÂN GIÁC
// Cập nhật: Chuẩn hóa ký hiệu, Dạng 2.2 chia Xuôi/Ngược, Thêm đường tròn nội tiếp, Xóa nhãn góc thừa
// Đã fix: Tam giác thường, phân biệt góc 1 cung / 2 cung, chuẩn góc vuông
// ==========================================

let selectedSubtypes = ['2.1', '2.2'];

export function renderConfigUI(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="bg-slate-800 p-3 rounded-lg border border-slate-600 shadow-sm text-sm">
            <h3 class="text-teal-400 font-bold mb-2"><i class="fa-solid fa-filter"></i> Trộn ngẫu nhiên các tiểu dạng (Phân Giác):</h3>
            <div class="flex flex-col gap-2 text-slate-200">
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="2.1" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 2.1:</b> Cách đều 3 con đường/cạnh (Tâm nội tiếp)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="2.2" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 2.2:</b> Tính góc tạo bởi giao điểm (Random Xuôi/Ngược)</span>
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

// Hàm hỗ trợ random chẵn
function getRandEven(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num % 2 === 0 ? num : num + 1;
}

export function generateProblem() {
    const subtype = selectedSubtypes[Math.floor(Math.random() * selectedSubtypes.length)];
    const pts = ['A', 'B', 'C', 'M', 'N', 'P', 'X', 'Y', 'Z'].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let data, html;

    if (subtype === '2.1') {
        const lines = ['xa lộ', 'con đường', 'kênh đào', 'ranh giới'];
        const targets = ['sân bay', 'đài phun nước', 'cột đèn chiếu sáng', 'trạm kiểm soát'];
        data = { subtype: '2.1', pts: pts, line: lines[Math.floor(Math.random()*lines.length)], target: targets[Math.floor(Math.random()*targets.length)] };
        
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 2.1: Điểm cách đều 3 đường/cạnh</h3>
            Ba vị trí $${pts[0]}, ${pts[1]}, ${pts[2]}$ được nối với nhau bởi ba ${data.line} tạo thành một hình tam giác.<br><br>
            <b>Yêu cầu:</b> Người ta muốn tìm một địa điểm $I$ để xây dựng <b>${data.target}</b> sao cho địa điểm này phải <b>cách đều cả ba ${data.line}</b> đó.<br><br>
            Dựa vào kiến thức hình học, em hãy xác định vị trí của <b>${data.target}</b> thỏa mãn điều kiện trên và giải thích cách làm.
        </div>`;
    } else {
        const isXuoi = Math.random() > 0.5;
        let angleTop, angleI;

        if (isXuoi) {
            angleTop = getRandEven(50, 80); 
            angleI = 90 + angleTop / 2;
            data = { subtype: '2.2', calcType: 'xuoi', pts: pts, angleTop, angleI };
            
            html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
                <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 2.2: Tính góc (Dạng Xuôi)</h3>
                Ba vị trí $${pts[0]}, ${pts[1]}, ${pts[2]}$ tạo thành tam giác. Góc tạo bởi hai con đường giao tại $${pts[0]}$ là $\\widehat{${pts[1]} ${pts[0]} ${pts[2]}} = ${angleTop}^\\circ$.<br><br>
                Người ta tìm được một địa điểm $I$ là giao điểm của hai đường phân giác góc $${pts[1]}$ và góc $${pts[2]}$ của tam giác $${pts[0]}$${pts[1]}$${pts[2]}$.<br><br>
                <b>Yêu cầu:</b> Bằng tính toán, em hãy tìm số đo góc $\\widehat{${pts[1]} I ${pts[2]}}$.
            </div>`;
        } else {
            angleI = getRandEven(110, 135); 
            angleTop = (angleI - 90) * 2;
            data = { subtype: '2.2', calcType: 'nguoc', pts: pts, angleTop, angleI };
            
            html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
                <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 2.2: Tính góc (Dạng Ngược)</h3>
                Ba vị trí $${pts[0]}, ${pts[1]}, ${pts[2]}$ tạo thành tam giác. Điểm $I$ là giao điểm của hai đường phân giác góc $${pts[1]}$ và góc $${pts[2]}$ của tam giác $${pts[0]}$${pts[1]}$${pts[2]}$.<br><br>
                Người ta đo được góc $\\widehat{${pts[1]} I ${pts[2]}} = ${angleI}^\\circ$.<br><br>
                <b>Yêu cầu:</b> Em hãy tính số đo góc tạo bởi hai con đường giao tại $${pts[0]}$ (tức là góc $\\widehat{${pts[1]} ${pts[0]} ${pts[2]}}$).
            </div>`;
        }
    }

    return { type: 'phan_giac', text: html, data: data };
}

export function initBoard(boardId, logFunction, data) {
    let board = JXG.JSXGraph.initBoard(boardId, {
        boundingbox: [-6, 6, 6, -3], 
        axis: false, showNavigation: false, keepaspectratio: true
    });

    let step = 0;
    let p1, p2, p3, segment1, segment2, segment3;
    let targetPoint;

    const addTextMark = (x, y, markStr, color) => {
        board.create('text', [x, y, markStr], { anchorX: 'middle', anchorY: 'middle', fontSize: 16, color: color, cssClass: 'font-bold bg-white/70 px-1 rounded' });
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
            // XỬ LÝ DẠNG 2.1: CÁCH ĐỀU 3 CẠNH
            // ==========================================
            if (data.subtype === '2.1') {
                let [A, B, C] = data.pts;
                
                if (step === 1) {
                    // Chỉnh tọa độ để tam giác rõ ràng là tam giác thường (Scalene)
                    p1 = board.create('point', [0, 4], {name: A, size: 4, color: '#0f766e'});
                    p2 = board.create('point', [-4, -1], {name: B, size: 4, color: '#0f766e'});
                    p3 = board.create('point', [5, -2], {name: C, size: 4, color: '#0f766e'});
                    
                    segment1 = board.create('segment', [p1, p2], {strokeColor: '#333', dash: 0, strokeWidth: 2}); 
                    segment2 = board.create('segment', [p2, p3], {strokeColor: '#333', dash: 0, strokeWidth: 2}); 
                    segment3 = board.create('segment', [p3, p1], {strokeColor: '#333', dash: 0, strokeWidth: 2}); 
                    board.create('polygon', [p1, p2, p3], {fillColor: '#ccfbf1', fillOpacity: 0.3, borders:{visible:false}});
                    
                    logStep("BƯỚC 1: Mô hình hóa", "Gắn 3 vị trí giao lộ vào mặt phẳng thành 3 đỉnh của một tam giác.", `Gọi $${A}, ${B}, ${C}$ là ba vị trí và 3 đoạn thẳng $${A}${B}, ${B}${C}, ${C}${A}$ là ba ${data.line}.`);
                } else if (step === 2) {
                    let b1 = board.create('bisector', [p1, p2, p3], {visible: false});
                    let b2 = board.create('bisector', [p2, p3, p1], {visible: false});
                    targetPoint = board.create('intersection', [b1, b2, 0], {name: 'I', size: 5, color: '#ef4444'});
                    
                    // Vẽ các đường thẳng chứa 3 cạnh (ẩn) để tìm chân đường vuông góc chuẩn xác
                    let line1 = board.create('line', [p1, p2], {visible: false});
                    let line2 = board.create('line', [p2, p3], {visible: false});
                    let line3 = board.create('line', [p3, p1], {visible: false});

                    // Kẻ đường vuông góc từ I xuống 3 cạnh
                    let perp1 = board.create('perpendicular', [line1, targetPoint], {visible: false});
                    let perp2 = board.create('perpendicular', [line2, targetPoint], {visible: false});
                    let perp3 = board.create('perpendicular', [line3, targetPoint], {visible: false});
                    
                    // Lấy giao điểm (chân đường cao)
                    let foot1 = board.create('intersection', [line1, perp1, 0], {name: '', size: 0});
                    let foot2 = board.create('intersection', [line2, perp2, 0], {name: '', size: 0});
                    let foot3 = board.create('intersection', [line3, perp3, 0], {name: '', size: 0});
                    
                    board.create('segment', [targetPoint, foot1], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    board.create('segment', [targetPoint, foot2], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    board.create('segment', [targetPoint, foot3], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    
                    // Ký hiệu góc vuông đúng định dạng (thêm name: '' để bỏ nhãn chữ cái Hy Lạp)
                    board.create('angle', [targetPoint, foot1, p1], {radius: 0.3, rightAngle: true, strokeColor: '#ef4444', name: ''});
                    board.create('angle', [targetPoint, foot2, p2], {radius: 0.3, rightAngle: true, strokeColor: '#ef4444', name: ''});
                    board.create('angle', [targetPoint, foot3, p3], {radius: 0.3, rightAngle: true, strokeColor: '#ef4444', name: ''});
                    
                    // Ký hiệu khoảng cách bằng nhau thống nhất
                    addTextMark(() => (targetPoint.X() + foot1.X())/2, () => (targetPoint.Y() + foot1.Y())/2, '=', '#ef4444');
                    addTextMark(() => (targetPoint.X() + foot2.X())/2, () => (targetPoint.Y() + foot2.Y())/2, '=', '#ef4444');
                    addTextMark(() => (targetPoint.X() + foot3.X())/2, () => (targetPoint.Y() + foot3.Y())/2, '=', '#ef4444');

                    // Bổ sung đường tròn nét đứt thể hiện tiếp xúc (nội tiếp)
                    board.create('circle', [targetPoint, foot1], {strokeColor: '#94a3b8', dash: 2, strokeWidth: 1.5, fillOpacity: 0});

                    logStep("BƯỚC 2 & 3: Phân tích từ khóa", "Khoảng cách từ 1 điểm đến 1 đường thẳng là đoạn vuông góc. Cách đều nghĩa là 3 đoạn vuông góc này bằng nhau.", `Vì ${data.target} cần cách đều 3 ${data.line} $${A}${B}, ${B}${C}, ${C}${A}$.<br>Nên điểm $I$ (cần tìm) cách đều 3 cạnh của $\\Delta ${A}${B}${C}$.`);
                } else if (step === 3) {
                    board.create('segment', [p2, targetPoint], {strokeColor: '#f59e0b', strokeWidth: 2});
                    board.create('segment', [p3, targetPoint], {strokeColor: '#f59e0b', strokeWidth: 2});
                    
                    // Ký hiệu góc B bằng nhau: 1 vòng cung (thêm name: '')
                    board.create('angle', [p3, p2, targetPoint], {radius: 0.8, fillColor: '#f59e0b', strokeColor: '#f59e0b', fillOpacity: 0.3, name: ''});
                    board.create('angle', [targetPoint, p2, p1], {radius: 0.8, fillColor: '#f59e0b', strokeColor: '#f59e0b', fillOpacity: 0.3, name: ''});
                    
                    // Ký hiệu góc C bằng nhau: 2 vòng cung (thêm name: '')
                    board.create('angle', [p1, p3, targetPoint], {radius: 0.8, fillColor: '#3b82f6', strokeColor: '#3b82f6', fillOpacity: 0.3, name: ''});
                    board.create('angle', [p1, p3, targetPoint], {radius: 0.7, strokeColor: '#3b82f6', strokeWidth: 2, fillOpacity: 0, name: ''}); 
                    board.create('angle', [targetPoint, p3, p2], {radius: 0.8, fillColor: '#3b82f6', strokeColor: '#3b82f6', fillOpacity: 0.3, name: ''});
                    board.create('angle', [targetPoint, p3, p2], {radius: 0.7, strokeColor: '#3b82f6', strokeWidth: 2, fillOpacity: 0, name: ''}); 

                    logStep("BƯỚC 4: Giải quyết mô hình", "Điểm cách đều 3 cạnh chính là Tâm đường tròn nội tiếp (giao 3 đường phân giác).", `- Suy ra, $I$ là giao điểm của 3 đường phân giác trong $\\Delta ${A}${B}${C}$.<br>- Ta vẽ đường phân giác của góc $${B}$ và góc $${C}$. Chúng cắt nhau tại $I$.<br>- Vậy $I$ chính là vị trí xây ${data.target} thỏa mãn.`);
                }
            }

            // ==========================================
            // XỬ LÝ DẠNG 2.2: TÍNH GÓC (XUÔI & NGƯỢC)
            // ==========================================
            else if (data.subtype === '2.2') {
                let [A, B, C] = data.pts;
                
                if (step === 1) {
                    p1 = board.create('point', [0, 3], {name: A, size: 4, color: '#0f766e'}); 
                    p2 = board.create('point', [-3, -1], {name: B, size: 4, color: '#0f766e'});
                    p3 = board.create('point', [4, -1], {name: C, size: 4, color: '#0f766e'});
                    
                    segment1 = board.create('segment', [p1, p2], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    segment2 = board.create('segment', [p2, p3], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    segment3 = board.create('segment', [p3, p1], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    
                    let b1 = board.create('bisector', [p1, p2, p3], {visible: false});
                    let b2 = board.create('bisector', [p2, p3, p1], {visible: false});
                    targetPoint = board.create('intersection', [b1, b2, 0], {name: 'I', size: 5, color: '#ef4444'});
                    
                    board.create('segment', [p2, targetPoint], {strokeColor: '#f59e0b', strokeWidth: 2});
                    board.create('segment', [p3, targetPoint], {strokeColor: '#f59e0b', strokeWidth: 2});
                    
                    // Góc B - 1 vòng cung (thêm name: '')
                    board.create('angle', [p3, p2, targetPoint], {radius: 0.8, fillColor: '#f59e0b', strokeColor: '#f59e0b', fillOpacity: 0.3, name: ''});
                    board.create('angle', [targetPoint, p2, p1], {radius: 0.8, fillColor: '#f59e0b', strokeColor: '#f59e0b', fillOpacity: 0.3, name: ''});
                    
                    // Góc C - 2 vòng cung (thêm name: '')
                    board.create('angle', [p1, p3, targetPoint], {radius: 0.8, fillColor: '#3b82f6', strokeColor: '#3b82f6', fillOpacity: 0.3, name: ''});
                    board.create('angle', [p1, p3, targetPoint], {radius: 0.7, strokeColor: '#3b82f6', strokeWidth: 2, fillOpacity: 0, name: ''});
                    board.create('angle', [targetPoint, p3, p2], {radius: 0.8, fillColor: '#3b82f6', strokeColor: '#3b82f6', fillOpacity: 0.3, name: ''});
                    board.create('angle', [targetPoint, p3, p2], {radius: 0.7, strokeColor: '#3b82f6', strokeWidth: 2, fillOpacity: 0, name: ''});

                    if (data.calcType === 'xuoi') {
                        board.create('angle', [p2, p1, p3], {radius: 0.6, fillColor: '#10b981', fillOpacity: 0.4, name: ''});
                        addTextMark(() => p1.X(), () => p1.Y() - 0.7, `${data.angleTop}^\\circ`, '#10b981');
                        
                        let angleI = board.create('angle', [p2, targetPoint, p3], {radius: 0.6, fillColor: '#ef4444', fillOpacity: 0.2, name: ''});
                        addTextMark(() => targetPoint.X(), () => targetPoint.Y() - 0.5, `?`, '#ef4444');

                        logStep("BƯỚC 1: Vẽ hình & Gắn giả thiết", "Ta có góc đỉnh, cần tìm góc ở giao điểm I.", `Xét $\\Delta ${A}${B}${C}$, tia phân giác góc $${B}$ và $${C}$ cắt nhau tại $I$.<br>Theo đề bài: $\\widehat{${A}} = ${data.angleTop}^\\circ$. Cần tính $\\widehat{${B} I ${C}}$.`);
                    } else {
                        board.create('angle', [p2, p1, p3], {radius: 0.6, fillColor: '#10b981', fillOpacity: 0.4, name: ''});
                        addTextMark(() => p1.X(), () => p1.Y() - 0.7, `?`, '#10b981');
                        
                        let angleI = board.create('angle', [p2, targetPoint, p3], {radius: 0.6, fillColor: '#ef4444', fillOpacity: 0.2, name: ''});
                        addTextMark(() => targetPoint.X(), () => targetPoint.Y() - 0.5, `${data.angleI}^\\circ`, '#ef4444');

                        logStep("BƯỚC 1: Vẽ hình & Gắn giả thiết", "Ta có góc ở giao điểm I, cần tính ngược lên góc đỉnh.", `Xét $\\Delta ${A}${B}${C}$, tia phân giác góc $${B}$ và $${C}$ cắt nhau tại $I$.<br>Theo đề bài: $\\widehat{${B} I ${C}} = ${data.angleI}^\\circ$. Cần tính $\\widehat{${A}}$.`);
                    }
                } else if (step === 2) {
                    if (data.calcType === 'xuoi') {
                        let sumBC_out = 180 - data.angleTop;
                        logStep("BƯỚC 2: Xét tam giác lớn", "Dùng định lý tổng 3 góc để tìm tổng 2 góc ở đáy.", `Xét $\\Delta ${A}${B}${C}, ta có:<br> $\\widehat{${A}} + \\widehat{${A}${B}${C}} + \\widehat{${A}${C}${B}} = 180^\\circ$<br>$\\Rightarrow \\widehat{${A}${B}${C}} + \\widehat{${A}${C}${B}} = 180^\\circ - ${data.angleTop}^\\circ = ${sumBC_out}^\\circ$`);
                    } else {
                        let sumBC_in = 180 - data.angleI;
                        logStep("BƯỚC 2: Xét tam giác nhỏ bên trong", "Dùng định lý tổng 3 góc để tìm tổng 2 nửa góc ở đáy.", `Xét $\\Delta ${B} I ${C}$, ta có:<br> $\\widehat{I${B}${C}} + \\widehat{I${C}${B}} + \\widehat{${B}I${C}} = 180^\\circ$<br>$\\Rightarrow \\widehat{I${B}${C}} + \\widehat{I${C}${B}} = 180^\\circ - ${data.angleI}^\\circ = ${sumBC_in}^\\circ$`);
                    }
                } else if (step === 3) {
                    if (data.calcType === 'xuoi') {
                        let sumBC_in = (180 - data.angleTop) / 2;
                        logStep("BƯỚC 3: Dùng tính chất tia phân giác", "Mỗi góc nhỏ bằng một nửa góc lớn, nên tổng 2 góc nhỏ bằng một nửa tổng 2 góc lớn.", `Vì $I${B}, I${C}$ là tia phân giác của $\\widehat{${A}${B}${C}}$ và $\\widehat{${A}${C}${B}}$, nên:<br>$\\widehat{I${B}${C}} + \\widehat{I${C}${B}} = \\frac{\\widehat{${A}${B}${C}} + \\widehat{${A}${C}${B}}}{2} = \\frac{${180 - data.angleTop}^\\circ}{2} = ${sumBC_in}^\\circ$`);
                    } else {
                        let sumBC_out = (180 - data.angleI) * 2;
                        logStep("BƯỚC 3: Dùng tính chất tia phân giác", "Góc lớn gấp đôi góc nhỏ, nên tổng 2 góc lớn gấp đôi tổng 2 góc nhỏ.", `Vì $I${B}, I${C}$ là tia phân giác của $\\widehat{${A}${B}${C}}$ và $\\widehat{${A}${C}${B}}$, nên:<br>$\\widehat{${A}${B}${C}} = 2 \\cdot \\widehat{I${B}${C}}$ và $\\widehat{${A}${C}${B}} = 2 \\cdot \\widehat{I${C}${B}}$<br>$\\Rightarrow \\widehat{${A}${B}${C}} + \\widehat{${A}${C}${B}} = 2 \\cdot (\\widehat{I${B}${C}} + \\widehat{I${C}${B}}) = 2 \\cdot ${180 - data.angleI}^\\circ = ${sumBC_out}^\\circ$`);
                    }
                } else if (step === 4) {
                    if (data.calcType === 'xuoi') {
                        logStep("BƯỚC 4: Xét tam giác nhỏ để tính góc I", "Đã biết tổng 2 góc nhỏ, lấy 180 trừ đi là ra góc I.", `Xét $\\Delta ${B} I ${C}$, ta có:<br>$\\widehat{${B}I${C}} = 180^\\circ - (\\widehat{I${B}${C}} + \\widehat{I${C}${B}})$<br>$\\Rightarrow \\widehat{${B}I${C}} = 180^\\circ - ${(180 - data.angleTop) / 2}^\\circ = \\mathbf{${data.angleI}^\\circ}$.<br><br>Vậy số đo góc cần tìm là $${data.angleI}^\\circ$.`);
                    } else {
                        logStep("BƯỚC 4: Xét tam giác lớn để tính góc ở đỉnh", "Đã biết tổng 2 góc ở đáy, lấy 180 trừ đi là ra góc đỉnh.", `Xét $\\Delta ${A}${B}${C}$, ta có:<br>$\\widehat{${A}} = 180^\\circ - (\\widehat{${A}${B}${C}} + \\widehat{${A}${C}${B}})$<br>$\\Rightarrow \\widehat{${A}} = 180^\\circ - ${(180 - data.angleI) * 2}^\\circ = \\mathbf{${data.angleTop}^\\circ}$.<br><br>Vậy số đo góc cần tìm là $${data.angleTop}^\\circ$.`);
                    }
                }
            }
        },

        flipX: () => {
            let T = board.create('transform', [1, 0, 0, 0, -1, 0, 0, 0, 1], {type: 'generic'});
            if(p1 && p2 && p3) T.applyOnce([p1, p2, p3]); 
            board.update();
        },
        flipY: () => {
            let T = board.create('transform', [1, 0, 0, 0, 1, 0, 0, 0, -1], {type: 'generic'});
            if(p1 && p2 && p3) T.applyOnce([p1, p2, p3]);
            board.update();
        }
    };
}