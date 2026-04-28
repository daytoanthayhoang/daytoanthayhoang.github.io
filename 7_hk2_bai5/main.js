// Import các hàm vẽ hình
import { veDe01 } from './de_01.js';
import { veDe02 } from './de_02.js';
// (Sau này thêm de_03.js, de_04.js... vào đây)

// DATABASE Đề bài
const DB_DE = {
    "1": {
        text: `Cho $\\Delta ABC$ vuông tại A ($AB < AC$) có $AH$ là đường cao. Trên cạnh $HC$, vẽ điểm $D$ sao cho $AD = AB$. <br><br>
        <b>a)</b> Chứng minh: $\\Delta AHB = \\Delta AHD$.<br>
        <b>b)</b> Qua $C$ vẽ đường thẳng vuông góc với $AD$ và cắt đường thẳng $AH$ tại $E$. Chứng minh: $ED \\parallel AB$.<br>
        <b>c)</b> Biết $\\Delta ACE$ đều. Tính số đo góc $\\widehat{ABD}$ và tỉ số giữa hai đoạn thẳng $AB$ với $BC$.`
    },
    "2": {
        text: `Cho $\\Delta ABC$ vuông tại A, đường phân giác của góc $\\widehat{ABC}$ cắt AC tại D. Từ D vẽ $DE \\perp BC$. <br><br>
        <b>a)</b> Chứng minh $\\Delta ABD = \\Delta EBD$.<br>
        <b>b)</b> Tia ED cắt tia BA tại M. Chứng minh $\\Delta MBC$ cân.<br>
        <b>c)</b> Gọi K là trung điểm của MC. Chứng minh ba điểm B, D, K thẳng hàng.`
    }
};

let nextStepFunc = null;

function renderSolutionLog(htmlContent, isFirst = false) {
    const board = document.getElementById('solution-board');
    if (isFirst) board.innerHTML = '';
    
    const div = document.createElement('div');
    div.className = 'p-3 bg-slate-800 rounded-lg border-l-4 border-teal-500 opacity-0 transform translate-y-2 transition-all duration-300';
    div.innerHTML = htmlContent;
    board.appendChild(div);
    
    // Animation fade-in
    setTimeout(() => {
        div.classList.remove('opacity-0', 'translate-y-2');
        board.scrollTop = board.scrollHeight;
    }, 50);

    // Báo cho MathJax render lại công thức Toán trong dòng log mới
    MathJax.typesetPromise([div]);
}

function loadDe(maDe) {
    // 1. Render lại text Đề bài
    document.getElementById('problem-content').innerHTML = DB_DE[maDe]?.text || "Đang cập nhật nội dung đề...";
    MathJax.typesetPromise([document.getElementById('problem-content')]);

    // 2. Xóa hình cũ và log cũ
    JXG.JSXGraph.freeBoard(document.getElementById('box'));
    renderSolutionLog(`<div class="text-slate-400 italic text-center">Bắt đầu phân tích hình vẽ. Hãy nhấn "Vẽ bước tiếp theo".</div>`, true);

    // 3. Khởi tạo hình mới
    if (maDe === '1') {
        nextStepFunc = veDe01('box', renderSolutionLog);
    } else if (maDe === '2') {
        nextStepFunc = veDe02('box', renderSolutionLog);
    } else {
        nextStepFunc = null;
        renderSolutionLog("<i>Module vẽ hình cho đề này đang được cập nhật.</i>", true);
    }
}

// Bắt sự kiện
document.getElementById('chonDe').addEventListener('change', (e) => loadDe(e.target.value));

document.getElementById('btnStep').addEventListener('click', () => {
    if (nextStepFunc) nextStepFunc();
});

// Chạy lần đầu
window.onload = () => loadDe('1');