// ==========================================
// MODULE DẠNG 1: ĐƯỜNG TRUNG TRỰC - BẢN CHUẨN
// Đã fix lỗi cấu trúc ngoặc vuông của JSXGraph Text
// Đã fix ký hiệu cạnh và tọa độ tam giác thường
// ==========================================

let selectedSubtypes = ['1.1', '1.2', '1.3'];

export function renderConfigUI(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="bg-slate-800 p-3 rounded-lg border border-slate-600 shadow-sm text-sm">
            <h3 class="text-teal-400 font-bold mb-2"><i class="fa-solid fa-filter"></i> Trộn ngẫu nhiên các tiểu dạng:</h3>
            <div class="flex flex-col gap-2 text-slate-200">
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="1.1" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 1.1:</b> Nằm trên đường, cách đều 2 điểm</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="1.2" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 1.2:</b> Cách đều 3 điểm (Giao 3 trung trực)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="1.3" class="subtype-checkbox w-4 h-4 text-teal-600 bg-slate-700 border-slate-500 rounded" checked>
                    <span><b>Dạng 1.3:</b> Khôi phục tâm đường tròn bị mất</span>
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
    const pts = ['A', 'B', 'C', 'M', 'N', 'P', 'E', 'F', 'G'].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let data, html;

    if (subtype === '1.1') {
        const lines = ['quốc lộ 1A', 'con suối', 'bờ sông', 'tuyến đường sắt'];
        const targets = ['trạm y tế', 'trạm lấy nước', 'nhà ga', 'trạm bơm'];
        data = { subtype: '1.1', pts: pts, line: lines[Math.floor(Math.random()*lines.length)], target: targets[Math.floor(Math.random()*targets.length)] };
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 1.1: Điểm nằm trên đường và cách đều 2 điểm</h3>
            Có một ${data.line} (gọi là đường thẳng $d$) và hai điểm $${pts[0]}, ${pts[1]}$ nằm cùng một phía so với ${data.line}.<br><br>
            <b>Yêu cầu:</b> Cần tìm một vị trí trên ${data.line} để xây dựng <b>${data.target}</b> sao cho khoảng cách từ <b>${data.target}</b> này đến $${pts[0]}$ và $${pts[1]}$ là bằng nhau.<br><br>
            Em hãy xác định vị trí đó và giải thích cách làm.
        </div>`;
    } else if (subtype === '1.2') {
        const places = ['khu dân cư', 'ngôi làng', 'cửa hàng', 'tòa nhà'];
        const targets = ['trạm phát sóng 5G', 'trường học', 'kho hàng', 'giếng nước'];
        data = { subtype: '1.2', pts: pts, place: places[Math.floor(Math.random()*places.length)], target: targets[Math.floor(Math.random()*targets.length)] };
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 1.2: Điểm cách đều 3 điểm (Tâm ngoại tiếp)</h3>
            Chính quyền địa phương đang quy hoạch ba ${data.place} $${pts[0]}, ${pts[1]}, ${pts[2]}$ không cùng thẳng hàng.<br><br>
            <b>Yêu cầu:</b> Cần tìm vị trí $O$ để xây dựng <b>${data.target}</b> sao cho khoảng cách từ <b>${data.target}</b> đến 3 ${data.place} là hoàn toàn bằng nhau.<br><br>
            Em hãy xác định vị trí $O$ và giải thích cách làm.
        </div>`;
    } else {
        const items = ['mặt bàn gỗ tròn', 'cái đĩa cổ', 'nắp cống', 'biển báo giao thông'];
        data = { subtype: '1.3', pts: pts, item: items[Math.floor(Math.random()*items.length)] };
        html = `<div class="bg-teal-50 p-3 rounded-lg border border-teal-200 text-slate-800">
            <h3 class="font-bold text-teal-800 mb-2 underline">Dạng 1.3: Khôi phục tâm hình tròn</h3>
            Một bác thợ mộc đang cần khôi phục lại tâm của một <b>${data.item}</b> nhưng đường tròn viền ngoài đã bị mất dấu tâm.<br><br>
            <b>Yêu cầu:</b> Bằng kiến thức hình học, em hãy hướng dẫn bác thợ mộc cách xác định lại chính xác tâm của <b>${data.item}</b> đó.
        </div>`;
    }

    return { type: 'trung_truc', text: html, data: data };
}

export function initBoard(boardId, logFunction, data) {
    let board = JXG.JSXGraph.initBoard(boardId, {
        boundingbox: [-6, 6, 6, -5], 
        axis: false, showNavigation: false, keepaspectratio: true
    });

    let step = 0;
    let p1, p2, p3, line_d, segment1, segment2;
    let mid1, mid2, bisector1, bisector2, targetPoint;

    // Hàm tiện ích tạo góc vuông
    const createRightAngle = (pA, pMid, pB) => {
        let pPerp = board.create('point', [
            () => pMid.X() - (pB.Y() - pA.Y()), 
            () => pMid.Y() + (pB.X() - pA.X())
        ], {visible: false});
        board.create('angle', [pB, pMid, pPerp], { radius: 0.4, rightAngle: true, strokeColor: '#f59e0b', strokeWidth: 2 });
    };

    const addEqualityMark = (pA, pB, markStr, color) => {
        board.create('text', [
            () => (pA.X() + pB.X())/2, 
            () => (pA.Y() + pB.Y())/2,
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
            
            // --- DẠNG 1.1 ---
            if (data.subtype === '1.1') {
                let [A, B] = data.pts;
                
                if (step === 1) {
                    line_d = board.create('line', [[-5, -2], [5, -1]], {strokeColor: '#3b82f6', strokeWidth: 2, name: 'd', withLabel: true});
                    p1 = board.create('point', [-3, 3], {name: A, size: 4, color: '#0f766e'});
                    p2 = board.create('point', [3, 2], {name: B, size: 4, color: '#0f766e'});
                    segment1 = board.create('segment', [p1, p2], {strokeColor: '#333333', strokeWidth: 2, dash: 0});
                    
                    logStep("BƯỚC 1: Gọi tên điểm", "Gắn thực tế vào mô hình toán học.", `Gọi $${A}, ${B}$ là vị trí hai điểm và đường thẳng $d$ là ${data.line} (như hình vẽ).`);
                } else if (step === 2) {
                    mid1 = board.create('midpoint', [p1, p2], {name: '', visible: true, size: 2});
                    let h_bisect = board.create('perpendicular', [segment1, mid1], {visible: false});
                    targetPoint = board.create('intersection', [line_d, h_bisect, 0], {name: 'M', size: 5, color: '#ef4444'});
                    
                    board.create('segment', [targetPoint, p1], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    board.create('segment', [targetPoint, p2], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    
                    // Ký hiệu khoảng cách M đến A, B dùng "="
                    addEqualityMark(targetPoint, p1, '=', '#ef4444'); addEqualityMark(targetPoint, p2, '=', '#ef4444');

                    logStep("BƯỚC 2 & 3: Lập mô hình toán học", "Phân tích chữ 'nằm trên đường' và 'cách đều 2 điểm'.", `Vì ${data.target} cần nằm trên $d$ và cách đều $${A}$ và $${B}$.<br>Nên điểm $M$ (vị trí cần xây) thỏa mãn: $M \\in d$ và $M${A} = M${B}$.`);
                } else if (step === 3) {
                    bisector1 = board.create('perpendicular', [segment1, mid1], {strokeColor: '#f59e0b', strokeWidth: 2, dash: 0});
                    createRightAngle(p1, mid1, p2);
                    
                    // Ký hiệu 2 nửa của đoạn AB dùng 1 gạch "/"
                    addEqualityMark(p1, mid1, '/', '#333'); addEqualityMark(p2, mid1, '/', '#333');

                    logStep("BƯỚC 4: Giải quyết mô hình", "Dùng định lý đường trung trực.", `- Từ $M${A} = M${B}$, suy ra $M$ nằm trên <b>đường trung trực</b> của đoạn thẳng $${A}${B}$.<br>- Vẽ đường trung trực của đoạn $${A}${B}$. Giao điểm của đường trung trực này với đường thẳng $d$ chính là vị trí $M$ cần tìm.`);
                }
            }

            // --- DẠNG 1.2 ---
            else if (data.subtype === '1.2') {
                let [A, B, C] = data.pts;
                
                if (step === 1) {
                    p1 = board.create('point', [0, 4], {name: A, size: 4, color: '#0f766e'});
                    p2 = board.create('point', [-4, -2], {name: B, size: 4, color: '#0f766e'});
                    p3 = board.create('point', [4, -1], {name: C, size: 4, color: '#0f766e'});
                    segment1 = board.create('segment', [p1, p2], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    segment2 = board.create('segment', [p2, p3], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    board.create('segment', [p3, p1], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    board.create('polygon', [p1, p2, p3], {fillColor: '#ccfbf1', fillOpacity: 0.3, borders:{visible:false}});
                    
                    logStep("BƯỚC 1: Gọi tên điểm", "Hình dung 3 địa điểm tạo thành một tam giác trên mặt phẳng.", `Gọi $${A}, ${B}, ${C}$ là ba ${data.place} (như đề bài). Nối lại ta được tam giác $${A}${B}${C}$.`);
                } else if (step === 2) {
                    mid1 = board.create('midpoint', [p1, p2], {visible: true, name: '', size: 2});
                    mid2 = board.create('midpoint', [p2, p3], {visible: true, name: '', size: 2});
                    let h1 = board.create('perpendicular', [segment1, mid1], {visible: false});
                    let h2 = board.create('perpendicular', [segment2, mid2], {visible: false});
                    targetPoint = board.create('intersection', [h1, h2, 0], {name: 'O', size: 5, color: '#ef4444'});
                    
                    board.create('segment', [targetPoint, p1], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    board.create('segment', [targetPoint, p2], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    board.create('segment', [targetPoint, p3], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    
                    // Ký hiệu nối đến tâm dùng "x"
                    addEqualityMark(targetPoint, p1, 'x', '#ef4444'); addEqualityMark(targetPoint, p2, 'x', '#ef4444'); addEqualityMark(targetPoint, p3, 'x', '#ef4444');

                    logStep("BƯỚC 2 & 3: Lập mô hình toán học", "Từ khóa 'cách đều 3 điểm' tương đương với khoảng cách tới 3 đỉnh bằng nhau.", `Vì ${data.target} cần cách đều 3 ${data.place} $${A}, ${B}, ${C}$.<br>Nên điểm $O$ (vị trí cần tìm) cách đều 3 đỉnh của tam giác $${A}${B}${C}$ hay thỏa mãn: $O${A} = O${B} = O${C}$.`);
                } else if (step === 3) {
                    bisector1 = board.create('perpendicular', [segment1, mid1], {strokeColor: '#f59e0b', strokeWidth: 2, dash: 0});
                    bisector2 = board.create('perpendicular', [segment2, mid2], {strokeColor: '#f59e0b', strokeWidth: 2, dash: 0});
                    
                    createRightAngle(p1, mid1, p2); createRightAngle(p2, mid2, p3);
                    
                    // Cạnh 1 dùng 1 gạch "/", Cạnh 2 dùng 2 gạch "//"
                    addEqualityMark(p1, mid1, '/', '#333'); addEqualityMark(p2, mid1, '/', '#333');
                    addEqualityMark(p2, mid2, '//', '#333'); addEqualityMark(p3, mid2, '//', '#333');

                    logStep("BƯỚC 4: Giải quyết mô hình", "Điểm cách đều 3 đỉnh của tam giác là Tâm đường tròn ngoại tiếp.", `- Suy ra $O$ là giao điểm của 3 đường trung trực của $\\Delta ${A}${B}${C}$.<br>- Vẽ đường trung trực của hai cạnh $${A}${B}$ và $${B}${C}$. Chúng cắt nhau tại $O$.<br>- Vậy $O$ chính là vị trí xây ${data.target} lý tưởng nhất.`);
                }
            }

            // --- DẠNG 1.3 ---
            else if (data.subtype === '1.3') {
                let [A, B, C] = data.pts;
                
                if (step === 1) {
                    let cHidden = board.create('point', [0,0], {visible: false});
                    let pRad = board.create('point', [0,5], {visible: false}); // Đổi bán kính thành 5 để lấy tọa độ đẹp
                    board.create('circle', [cHidden, pRad], {strokeColor: '#64748b', strokeWidth: 3, dash: 0, fillColor: '#e2e8f0', fillOpacity: 0.3});
                    
                    // Cập nhật điểm thành tam giác thường nằm trên đường tròn bán kính R=5
                    p1 = board.create('point', [-3, 4], {name: A, size: 4, color: '#0f766e'}); 
                    p2 = board.create('point', [-4, -3], {name: B, size: 4, color: '#0f766e'});
                    p3 = board.create('point', [5, 0], {name: C, size: 4, color: '#0f766e'});
                    
                    segment1 = board.create('segment', [p1, p2], {strokeColor: '#333', dash: 0, strokeWidth: 2});
                    segment2 = board.create('segment', [p2, p3], {strokeColor: '#333', dash: 0, strokeWidth: 2});

                    logStep("BƯỚC 1: Khởi tạo điểm trên viền", "Lấy 3 điểm bất kỳ trên viền để tạo thành tam giác.", `Coi viền ngoài của ${data.item} là một đường tròn.<br> Lấy 3 điểm phân biệt $${A}, ${B}, ${C}$ bất kỳ nằm trên đường tròn đó.`);
                } else if (step === 2) {
                    mid1 = board.create('midpoint', [p1, p2], {visible: true, name: '', size: 2});
                    mid2 = board.create('midpoint', [p2, p3], {visible: true, name: '', size: 2});
                    let h1 = board.create('perpendicular', [segment1, mid1], {visible: false});
                    let h2 = board.create('perpendicular', [segment2, mid2], {visible: false});
                    targetPoint = board.create('intersection', [h1, h2, 0], {name: 'I', size: 5, color: '#ef4444'});
                    
                    board.create('segment', [targetPoint, p1], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    board.create('segment', [targetPoint, p2], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    board.create('segment', [targetPoint, p3], {strokeColor: '#ef4444', dash: 2, strokeWidth: 2});
                    
                    // Ký hiệu nối đến tâm là R
                    addEqualityMark(targetPoint, p1, 'R', '#ef4444'); addEqualityMark(targetPoint, p2, 'R', '#ef4444'); addEqualityMark(targetPoint, p3, 'R', '#ef4444');

                    logStep("BƯỚC 2 & 3: Lập mô hình toán học", "Tâm đường tròn luôn có khoảng cách đến mọi điểm trên viền bằng nhau.", `Vì tâm đường tròn phải cách đều mọi điểm nằm trên viền của nó.<br>Nên tâm $I$ cần tìm cách đều 3 đỉnh của tam giác $${A}${B}${C}$ hay thỏa mãn: $I${A} = I${B} = I${C}$ (bằng bán kính).`);
                } else if (step === 3) {
                    bisector1 = board.create('perpendicular', [segment1, mid1], {strokeColor: '#f59e0b', strokeWidth: 2, dash: 0});
                    bisector2 = board.create('perpendicular', [segment2, mid2], {strokeColor: '#f59e0b', strokeWidth: 2, dash: 0});
                    
                    createRightAngle(p1, mid1, p2); createRightAngle(p2, mid2, p3);
                    
                    // Cạnh 1 dùng 1 gạch "/", Cạnh 2 dùng 2 gạch "//"
                    addEqualityMark(p1, mid1, '/', '#333'); addEqualityMark(p2, mid1, '/', '#333');
                    addEqualityMark(p2, mid2, '//', '#333'); addEqualityMark(p3, mid2, '//', '#333');

                    logStep("BƯỚC 4: Giải quyết mô hình", "Tính chất giao điểm các đường trung trực.", `- Suy ra $I$ là giao điểm của 3 đường trung trực của $\\Delta ${A}${B}${C}$ hay chính là tâm đường tròn ngoại tiếp $\\Delta ${A}${B}${C}$.<br>- Vẽ đường trung trực của đoạn $${A}${B}$ và $${B}${C}$. Hai đường thẳng này cắt nhau tại $I$.<br>- Điểm $I$ chính là tâm bị mất dấu của ${data.item}.`);
                }
            }
        }
    };
}