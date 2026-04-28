import { veDe01 } from './de_01.js';

const DB_DE = {
    "1": {
        text: `Cho $\\Delta ABC$ vuông tại A ($AB < AC$) có $AH$ là đường cao. Trên cạnh $HC$, vẽ điểm $D$ sao cho $AD = AB$. <br><br>
        <b>a)</b> Chứng minh: $\\Delta AHB = \\Delta AHD$.<br>
        <b>b)</b> Qua $C$ vẽ đường thẳng vuông góc với $AD$ và cắt đường thẳng $AH$ tại $E$. Chứng minh: $ED \\parallel AB$.<br>
        <b>c)</b> Biết $\\Delta ACE$ đều. Tính số đo góc $\\widehat{ABD}$ và tỉ số giữa hai đoạn thẳng $AB$ với $BC$.`
    }
};

// Biến lưu trữ controller của bảng vẽ hiện tại
window.currentBoardCtrl = null;

function renderSolutionLog(htmlContent, isFirst = false) {
    const board = document.getElementById('solution-board');
    if (!board) return;
    if (isFirst) board.innerHTML = '';
    
    const div = document.createElement('div');
    div.className = 'p-3 bg-slate-800 rounded-lg border-l-4 border-teal-500 mt-2';
    div.innerHTML = htmlContent;
    board.appendChild(div);
    board.scrollTop = board.scrollHeight;
    if (window.MathJax) MathJax.typesetPromise([div]);
}

function loadDe(maDe) {
    document.getElementById('problem-content').innerHTML = DB_DE[maDe]?.text || "";
    if (window.MathJax) MathJax.typesetPromise([document.getElementById('problem-content')]);

    if (JXG.boards['box']) JXG.JSXGraph.freeBoard(JXG.boards['box']);
    renderSolutionLog(`<div class="text-slate-400 italic text-center">Bắt đầu vẽ hình. Hãy nhấn "Vẽ bước tiếp theo".</div>`, true);

    if (maDe === '1') {
        window.currentBoardCtrl = veDe01('box', renderSolutionLog);
    }
}

// Bắt sự kiện Dropdown & Nút Vẽ
document.getElementById('chonDe').addEventListener('change', (e) => loadDe(e.target.value));
document.getElementById('btnStep').addEventListener('click', () => {
    if (window.currentBoardCtrl) window.currentBoardCtrl.nextStep();
});

// Bắt sự kiện Xoay/Lật
document.getElementById('btnFlipX').addEventListener('click', () => { if(window.currentBoardCtrl) window.currentBoardCtrl.flipX(); });
document.getElementById('btnFlipY').addEventListener('click', () => { if(window.currentBoardCtrl) window.currentBoardCtrl.flipY(); });
document.getElementById('btnRot30').addEventListener('click', () => { if(window.currentBoardCtrl) window.currentBoardCtrl.rotate(30); });
document.getElementById('btnRot45').addEventListener('click', () => { if(window.currentBoardCtrl) window.currentBoardCtrl.rotate(45); });
document.getElementById('btnRot90').addEventListener('click', () => { if(window.currentBoardCtrl) window.currentBoardCtrl.rotate(90); });

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => loadDe('1'), 200);
});