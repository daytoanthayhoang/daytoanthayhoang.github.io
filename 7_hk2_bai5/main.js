import { veDe01 } from './de_01.js';

// DATABASE Đề bài
const DB_DE = {
    "1": {
        text: `Cho $\\Delta ABC$ vuông tại A ($AB < AC$) có $AH$ là đường cao. Trên cạnh $HC$, vẽ điểm $D$ sao cho $AD = AB$. <br><br>
        <b>a)</b> Chứng minh: $\\Delta AHB = \\Delta AHD$.<br>
        <b>b)</b> Qua $C$ vẽ đường thẳng vuông góc với $AD$ và cắt đường thẳng $AH$ tại $E$. Chứng minh: $ED \\parallel AB$.<br>
        <b>c)</b> Biết $\\Delta ACE$ đều. Tính số đo góc $\\widehat{ABD}$ và tỉ số giữa hai đoạn thẳng $AB$ với $BC$.`
    }
};

// Biến lưu trữ controller của bảng vẽ hiện tại
let currentBoardCtrl = null;

// Hàm in HTML ra bảng đen và gọi MathJax
function renderSolutionLog(htmlContent, isFirst = false) {
    const board = document.getElementById('solution-board');
    if (!board) return;
    
    if (isFirst) board.innerHTML = '';
    
    const div = document.createElement('div');
    div.className = 'p-3 bg-slate-800 rounded-lg border-l-4 border-teal-500 mt-2 text-sm md:text-base shadow-sm';
    div.innerHTML = htmlContent;
    board.appendChild(div);
    
    // Tự động cuộn xuống dưới
    board.scrollTop = board.scrollHeight;

    // Render Toán học
    if (window.MathJax) {
        MathJax.typesetPromise([div]);
    }
}

// Hàm reset và tải đề mới
function loadDe(maDe) {
    // 1. Cập nhật Text đề bài
    document.getElementById('problem-content').innerHTML = DB_DE[maDe]?.text || "Lỗi nội dung";
    if (window.MathJax) MathJax.typesetPromise([document.getElementById('problem-content')]);

    // 2. Xóa sạch bảng vẽ JSXGraph an toàn
    if (JXG.boards['box']) {
        JXG.JSXGraph.freeBoard(JXG.boards['box']);
    }
    document.getElementById('box').innerHTML = ''; // Đảm bảo sạch DOM

    // 3. Khởi tạo hình vẽ
    renderSolutionLog(`<div class="text-slate-400 italic text-center">Bắt đầu vẽ hình. Hãy nhấn "Vẽ bước tiếp theo".</div>`, true);

    if (maDe === '1') {
        currentBoardCtrl = veDe01('box', renderSolutionLog);
    }
}

// Bắt sự kiện thay đổi Dropdown
document.getElementById('chonDe').addEventListener('change', (e) => {
    loadDe(e.target.value);
});

// Bắt sự kiện nút Vẽ
document.getElementById('btnStep').addEventListener('click', () => {
    if (currentBoardCtrl) currentBoardCtrl.nextStep();
});

// Bắt sự kiện các nút Xoay / Lật
document.getElementById('btnFlipX').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.flipX(); });
document.getElementById('btnFlipY').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.flipY(); });
document.getElementById('btnRot30').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.rotate(30); });
document.getElementById('btnRot45').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.rotate(45); });
document.getElementById('btnRot90').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.rotate(90); });

// Khởi chạy khi load xong HTML
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadDe('1');
    }, 200);
});