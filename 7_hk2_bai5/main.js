import { veDe01 } from './de_01.js';

const DB_DE = {
    "1": {
        text: `Cho $\\Delta ABC$ vuông tại A ($AB < AC$) có $AH$ là đường cao. Trên cạnh $HC$, vẽ điểm $D$ sao cho $AD = AB$. <br><br>
        <b>a)</b> Chứng minh: $\\Delta AHB = \\Delta AHD$.<br>
        <b>b)</b> Qua $C$ vẽ đường thẳng vuông góc với $AD$ và cắt đường thẳng $AH$ tại $E$. Chứng minh: $ED \\parallel AB$.<br>
        <b>c)</b> Biết $\\Delta ACE$ đều. Tính số đo góc $\\widehat{ABD}$ và tỉ số giữa hai đoạn thẳng $AB$ với $BC$.`
    }
};

let nextStepFunc = null;

// Hàm in dòng text hướng dẫn ra bảng đen
function renderSolutionLog(htmlContent, isFirst = false) {
    const board = document.getElementById('solution-board');
    if (!board) return;
    
    if (isFirst) board.innerHTML = '';
    
    const div = document.createElement('div');
    div.className = 'p-3 bg-slate-800 rounded-lg border-l-4 border-teal-500 mt-2';
    div.innerHTML = htmlContent;
    board.appendChild(div);
    
    board.scrollTop = board.scrollHeight;

    // Render MathJax
    if (window.MathJax) {
        MathJax.typesetPromise([div]);
    }
}

// Hàm tải đề và reset bảng vẽ
function loadDe(maDe) {
    console.log("Đang tải đề số:", maDe);
    
    // 1. Cập nhật Text đề bài
    document.getElementById('problem-content').innerHTML = DB_DE[maDe]?.text || "Lỗi nội dung";
    if (window.MathJax) MathJax.typesetPromise([document.getElementById('problem-content')]);

    // 2. Xóa sạch bảng vẽ JSXGraph an toàn
    if (JXG.boards['box']) {
        JXG.JSXGraph.freeBoard(JXG.boards['box']);
    }

    // 3. Khởi tạo hình vẽ
    renderSolutionLog(`<div class="text-slate-400 italic text-center">Bắt đầu phân tích hình vẽ. Hãy nhấn "Vẽ bước tiếp theo".</div>`, true);

    try {
        if (maDe === '1') {
            nextStepFunc = veDe01('box', renderSolutionLog);
            console.log("Khởi tạo JSXGraph thành công!");
        }
    } catch (error) {
        console.error("Lỗi khi vẽ hình:", error);
        renderSolutionLog("<span class='text-red-500'>Lỗi khởi tạo thư viện vẽ hình. Vui lòng F5 (tải lại trang).</span>", false);
    }
}

// Bắt sự kiện
document.getElementById('chonDe').addEventListener('change', (e) => {
    loadDe(e.target.value);
});

document.getElementById('btnStep').addEventListener('click', () => {
    if (nextStepFunc) {
        nextStepFunc();
    } else {
        console.log("Chưa có hàm vẽ bước tiếp theo.");
    }
});

// Chờ HTML load xong mới chạy để tránh lỗi
window.addEventListener('DOMContentLoaded', () => {
    // Đợi thêm 200ms để chắc chắn div #box đã sẵn sàng
    setTimeout(() => {
        loadDe('1');
    }, 200);
});