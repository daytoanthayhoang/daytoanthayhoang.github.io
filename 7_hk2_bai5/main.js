import { veDe00 } from './de_00.js';
import { veDe01 } from './de_01.js';
import { veDe02 } from './de_02.js';
import { veDe03 } from './de_03.js';
import { veDe04 } from './de_04.js';

const DB_DE = {
    "0": {
        text: `Cho $\\Delta ABC$ vuông tại A ($AB < AC$) có $AH$ là đường cao. Trên tia $HC$ lấy điểm $D$ sao cho $HD = HB$. Kẻ $CE \\perp AD$ tại $E$. <br><br>
        <b>a)</b> Chứng minh $\\Delta AHB = \\Delta AHD$ và $\\Delta ABD$ cân.<br>
        <b>b)</b> Chứng minh $\\widehat{BAH} = \\widehat{ACB}$ và $\\widehat{ECD} = \\widehat{ACB}$.<br>
        <b>c)</b> Chứng minh $CB$ là tia phân giác của $\\widehat{ACE}$.`
    },
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
    },
    "3": {
        text: `Cho $\\Delta ABC$ cân tại A, vẽ AH là đường cao của $\\Delta ABC$. <br><br>
        <b>a)</b> Chứng minh: $\\Delta AHB = \\Delta AHC$.<br>
        <b>b)</b> Lấy điểm M nằm giữa A và B. Qua M vẽ đường thẳng song song với BC, đường thẳng này cắt AC tại N. Chứng minh: $\\Delta AMN$ cân.<br>
        <b>c)</b> Tia phân giác của $\\widehat{BMN}$ cắt tia phân giác của $\\widehat{CNM}$ tại Q. Chứng minh: 3 điểm A, H, Q thẳng hàng.`
    },
    "4": {
        text: `Cho $\\Delta ABC$ vuông tại B ($AB < BC$). Vẽ tia phân giác góc A cắt BC tại M. Qua M, vẽ đường thẳng vuông góc với AC tại D. <br><br>
        <b>a)</b> Chứng minh: $\\Delta ABM = \\Delta ADM$.<br>
        <b>b)</b> Hai đường thẳng AB và DM cắt nhau tại E. Chứng minh: $AM \\perp CE$.<br>
        <b>c)</b> So sánh: $BE$ với $DM$.`
    }
};

let currentBoardCtrl = null;

function renderSolutionLog(htmlContent, isFirst = false) {
    const board = document.getElementById('solution-board');
    if (!board) return;
    if (isFirst) board.innerHTML = '';
    
    const div = document.createElement('div');
    div.className = 'p-3 bg-slate-800 rounded-lg border-l-4 border-teal-500 mt-2 text-sm md:text-base shadow-sm';
    div.innerHTML = htmlContent;
    board.appendChild(div);
    board.scrollTop = board.scrollHeight;

    if (window.MathJax) MathJax.typesetPromise([div]);
}

function loadDe(maDe) {
    document.getElementById('problem-content').innerHTML = DB_DE[maDe]?.text || "Lỗi nội dung";
    if (window.MathJax) MathJax.typesetPromise([document.getElementById('problem-content')]);

    if (JXG.boards['box']) JXG.JSXGraph.freeBoard(JXG.boards['box']);
    document.getElementById('box').innerHTML = ''; 

    renderSolutionLog(`<div class="text-slate-400 italic text-center">Bắt đầu vẽ hình. Hãy nhấn "Vẽ bước tiếp / Xem gợi ý".</div>`, true);

    if (maDe === '0') currentBoardCtrl = veDe00('box', renderSolutionLog);
    else if (maDe === '1') currentBoardCtrl = veDe01('box', renderSolutionLog);
    else if (maDe === '2') currentBoardCtrl = veDe02('box', renderSolutionLog);
    else if (maDe === '3') currentBoardCtrl = veDe03('box', renderSolutionLog);
    else if (maDe === '4') currentBoardCtrl = veDe04('box', renderSolutionLog);
}

document.getElementById('chonDe').addEventListener('change', (e) => loadDe(e.target.value));
document.getElementById('btnStep').addEventListener('click', () => { if (currentBoardCtrl) currentBoardCtrl.nextStep(); });

document.getElementById('btnFlipX').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.flipX(); });
document.getElementById('btnFlipY').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.flipY(); });
document.getElementById('btnRot30').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.rotate(30); });
document.getElementById('btnRot45').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.rotate(45); });
document.getElementById('btnRot90').addEventListener('click', () => { if(currentBoardCtrl) currentBoardCtrl.rotate(90); });

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { loadDe('0'); }, 200); // Mặc định mở Đề 0
});