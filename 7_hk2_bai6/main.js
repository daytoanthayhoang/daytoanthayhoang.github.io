// ==========================================
// BỘ ĐIỀU KHIỂN TRUNG TÂM (MAIN CONTROLLER) - BẢN FIX LỖI
// ==========================================

let currentModule = null;
let currentBoardCtrl = null;
let currentType = 'trung_truc';

function renderSolutionLog(htmlContent, isFirst = false) {
    const board = document.getElementById('solution-board');
    if (!board) return;
    if (isFirst) board.innerHTML = '';
    
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    board.appendChild(div);
    board.scrollTop = board.scrollHeight;

    if (window.MathJax) MathJax.typesetPromise([div]).catch(err => console.log(err));
}

async function loadModule(type) {
    try {
        currentModule = await import(`./module_${type}.js`);
        if (currentModule.renderConfigUI) {
            currentModule.renderConfigUI('config-panel');
        } else {
            document.getElementById('config-panel').innerHTML = '';
        }
    } catch (error) {
        console.warn(`Lỗi load module_${type}:`, error);
        document.getElementById('config-panel').innerHTML = `<div class="text-amber-400 font-bold p-2 text-sm bg-slate-800 rounded border border-slate-600">⚠️ Đang phát triển tính năng cho dạng này...</div>`;
        currentModule = null;
    }
}

function generateAndLoad() {
    try {
        if (!currentModule || !currentModule.generateProblem) {
            document.getElementById('problem-content').innerHTML = '<div class="text-amber-600 font-bold">Vui lòng chờ hoặc tạo file module tương ứng!</div>';
            if (JXG.boards['box']) JXG.JSXGraph.freeBoard(JXG.boards['box']);
            document.getElementById('box').innerHTML = '';
            renderSolutionLog('');
            return;
        }

        let problemData = currentModule.generateProblem();

        document.getElementById('problem-content').innerHTML = problemData.text;
        if (window.MathJax) MathJax.typesetPromise([document.getElementById('problem-content')]);

        if (JXG.boards['box']) JXG.JSXGraph.freeBoard(JXG.boards['box']);
        document.getElementById('box').innerHTML = ''; 

        renderSolutionLog(`
            <div class="text-slate-200 mb-2 p-3 bg-slate-800 rounded-lg border-l-4 border-teal-500 shadow-sm text-sm md:text-base">
                <b class="text-amber-400">HỆ THỐNG ĐÃ TẠO ĐỀ MỚI NGẪU NHIÊN:</b><br>
                Dữ liệu thực tế đã được gán tự động vào mô hình hình học.<br>
                Hãy nhấn nút <b class="text-amber-400">"Phân tích Mô hình & Xem gợi ý"</b> ở cột trái để bắt đầu xem giải mã.
            </div>
        `, true);

        if (currentModule.initBoard) {
            currentBoardCtrl = currentModule.initBoard('box', renderSolutionLog, problemData.data);
        }
    } catch (error) {
        console.error("Lỗi trong quá trình sinh đề/vẽ đồ thị: ", error);
        renderSolutionLog(`<div class="text-red-400 font-bold p-3">⚠️ Đã xảy ra lỗi trong hệ thống vẽ: ${error.message}</div>`, true);
    }
}

// Hàm gán sự kiện an toàn (tránh lỗi null nếu mất HTML)
function addEvent(id, type, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(type, handler);
}

addEvent('chonDang', 'change', async (e) => {
    currentType = e.target.value;
    await loadModule(currentType);
    generateAndLoad();
});

addEvent('btnGenType', 'click', generateAndLoad);

addEvent('btnRandomAll', 'click', async () => {
    const types = ['trung_truc', 'phan_giac', 'trung_tuyen', 'duong_cao'];
    currentType = types[Math.floor(Math.random() * types.length)];
    const select = document.getElementById('chonDang');
    if(select) select.value = currentType;
    await loadModule(currentType);
    generateAndLoad();
});

addEvent('btnStep', 'click', () => { 
    try {
        if (currentBoardCtrl && currentBoardCtrl.nextStep) currentBoardCtrl.nextStep(); 
    } catch (err) {
        console.error("Lỗi khi Next Step: ", err);
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    await loadModule(currentType);
    setTimeout(generateAndLoad, 200); 
});