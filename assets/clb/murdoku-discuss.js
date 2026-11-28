(() => {
  'use strict';
  const host = document.querySelector('#suy-luan');
  if (!host) return;
  const titles = ['Chiếc cúp ở đâu?', 'Hai ô bắt buộc', 'Ba câu hỏi Có/Không', 'Đồng xu nặng hơn', 'Ai giấu thẻ?'];
  const prompts = [
    'A ghi “Cúp ở tủ B”; B ghi “Cúp không ở tủ C”; C ghi “Cúp không ở tủ B”. Chỉ một nhãn viết đúng. Cả lớp chọn một tủ, rồi kiểm tra từng nhãn.',
    'Mỗi hàng và mỗi cột có đúng một dấu. Chạm các ô được phép để tìm một cách xếp đủ bốn dấu. Sau đó thử đổi chỗ để tìm cách thứ hai.',
    'Máy đã giấu thẻ trong một trong tám ngăn. Hỏi Có/Không để chắc chắn tìm được thẻ sau nhiều nhất ba lượt.',
    'Một trong chín đồng nặng hơn. Chọn hai nhóm để cân lần đầu. Sau đó chọn hai đồng trong nhóm còn nghi ngờ. Hãy dự đoán trước khi bấm cân.',
    'An nói “Bình giấu”. Bình nói “Chi giấu”. Chi nói “Bình nói sai”. Đúng một người giấu thẻ và chỉ một người nói đúng. Chọn tất cả người có thể đã giấu thẻ.'
  ];
  const abc = ['A','B','C'];
  const names = ['An','Bình','Chi'];
  const answers = [
    'Nhãn A và C phủ định nhau, nên chắc chắn đã có một nhãn đúng trong hai nhãn này. Do đó nhãn B phải sai: cúp ở tủ C.',
    'Hàng 1 và 2 chiếm hai cột A, C, nên D3 và B4 bắt buộc. Có đúng hai cách: A1, C2, D3, B4 hoặc C1, A2, D3, B4.',
    'Chia đôi giúp giảm từ 8 còn 4, rồi 2, rồi 1. Ba câu Có/Không có tối đa 8 chuỗi kết quả; nếu có 9 ngăn, không thể bảo đảm phân biệt hết.',
    'Cân 3 với 3. Nếu cân bằng, xét nhóm ngoài; nếu lệch, xét nhóm nặng hơn. Trong nhóm còn 3 đồng, cân 1 với 1. Cân bằng thì lấy đồng còn lại.',
    'Bình và Chi luôn có đúng một người nói đúng. Vậy lời An sai: không phải Bình giấu. Còn An hoặc Chi. Hỏi “Có phải Chi giấu không?” là đủ để phân biệt.'
  ];
  const fresh = i => ({ chosen: [], ok: [], notes: [], tip: '', turn: 0, min: 1, max: 8, secret: 1 + Math.floor(Math.random()*(i === 3 ? 9 : 8)), group: [] });
  const state = titles.map((_,i) => fresh(i));
  let active=0;
  function button(label, cmd, picked=false, disabled=false, press=false) {
    return '<button type="button" data-mdk="'+cmd+'" '+(press?'aria-pressed="'+picked+'" ':'')+(disabled?'disabled ':'')+'>'+label+'</button>';
  }
  function text(s) { return '<p>'+s+'</p>'; }
  function render(focus) {
    const s=state[active];
    let ui='';
    if(active===0){
      ui='<div class="mdq-controls">'+abc.map(k=>button('Tủ '+k,'pick:'+k,s.chosen.includes(k),false,true)).join('')+button('Kiểm tra giả thuyết','check')+'</div>';
    } else if(active===1){
      const allow=['AC','AC','ACD','BD'];
      ui='<div class="mdq-grid" aria-label="Bảng bốn hàng và bốn cột"><span></span>'+Array.from('ABCD',x=>'<b>'+x+'</b>').join('')+
        allow.map((row,r)=>'<b>'+(r+1)+'</b>'+Array.from('ABCD',col=>{const cell=col+(r+1);return row.includes(col)?button(cell,'pick:'+cell,s.chosen.includes(cell),false,true):'<span class="mdq-closed" aria-label="'+cell+' bị chặn">—</span>';}).join('')).join('')+
        '</div><div class="mdq-controls">'+button('Kiểm tra cách xếp','check')+button('Xóa ô đang chọn','clear')+'</div>'+text('Số cách khác nhau đã tìm: <strong>'+s.ok.length+'</strong>');
    } else if(active===2){
      const mid=Math.floor((s.min+s.max)/2);
      const ns=Array.from({length:8},(_,i)=>i+1);
      ui='<div class="mdq-controls">'+ns.map(k=>'<span class="mdq-slot '+(k<s.min||k>s.max?'mdq-out':'')+'">'+k+'</span>').join('')+'</div>';
      ui+=s.min<s.max?button('Hỏi: Thẻ có ở ngăn '+s.min+' đến '+mid+' không?','split'):text('<strong>Đã xác định: ngăn '+s.min+' sau '+s.turn+' câu hỏi.</strong>');
      ui+=s.min===s.max?'<div class="mdq-controls">'+button('Thử thêm ngăn thứ chín','nine')+'</div>':'';
    } else if(active===3){
      const pool=s.turn===0?[1,2,3]:s.group;
      if(s.turn<2){
        ui=text(s.turn===0?'Lần cân 1: Chọn hai nhóm (theo thứ tự đĩa trái, đĩa phải).':'Lần cân 2: Chọn hai đồng trong nhóm còn nghi.')+
          '<div class="mdq-controls">'+pool.map(k=>button(s.turn===0?'Nhóm '+k+' ('+(k*3-2)+'–'+(k*3)+')':'Đồng '+k,'pick:'+k,s.chosen.includes(String(k)),false,true)).join('')+button('Thực hiện cân','check')+'</div>';
      } else ui='<div class="mdq-controls" aria-label="Chọn đồng nặng">'+pool.map(k=>button('Đồng '+k,'pick:'+k,s.chosen.includes(String(k)),false,true)).join('')+button('Chốt đồng nặng','check')+'</div>';
    } else {
      ui='<div class="mdq-controls">'+names.map(k=>button(k+' giấu','pick:'+k,s.chosen.includes(k),false,true)).join('')+button('Kiểm tra hai kịch bản','check')+'</div>';
      if(s.ok.length)ui+='<div class="mdq-controls">'+button('Hỏi: Có phải Chi giấu không?','ask')+'</div>';
    }
    const bar=titles.map((title,i)=>button(String(i+1)+'. '+title,'tab:'+i,active===i,false,true)).join('');
    const notes=s.notes.length?'<ul class="mdq-log">'+s.notes.map(n=>'<li>'+n+'</li>').join('')+'</ul>':'';
    host.innerHTML='<div class="mdq-kicker">CLB TOÁN · CHƠI CẢ LỚP</div><h2>Thử thách suy luận tương tác</h2><nav class="mdq-controls" aria-label="Chọn thử thách">'+bar+'</nav><div class="mdq-card"><h3>'+titles[active]+'</h3>'+text(prompts[active])+ui+
      '<div class="mdq-feedback" role="status" aria-live="polite">'+(s.tip||'')+'</div>'+notes+
      '<div class="mdq-controls mdq-footer">'+button('Chơi lại câu này','reset')+button(s.reveal?'Ẩn lời giải':'Mở lời giải sau thảo luận','reveal')+'<a href="#murdoku-navigation">↑ Về bàn chơi</a></div>'+
      (s.reveal?'<div class="mdq-answer"><strong>Lời giải.</strong> '+answers[active]+'</div>':'')+'</div>';
    const matching=[...host.querySelectorAll('button')].find(b=>b.dataset.mdk===focus);
    if(matching)matching.focus({preventScroll:true});
  }
  function execute(cmd){
    const [action,k]=cmd.split(':');
    const s=state[active];
    if(action==='tab'){ active=Number(k);return; }
    if(action==='reset'){ state[active]=fresh(active);return; }
    if(action==='reveal'){ s.reveal=!s.reveal;return; }
    if(action==='clear'){s.chosen=[];s.tip='';return;}
    if(action==='pick'){
      s.tip='';
      if(active===0 || (active===3 && s.turn===2))s.chosen=[k];
      else if(s.chosen.includes(k))s.chosen=s.chosen.filter(x=>x!==k);
      else if(active!==3 || s.chosen.length<2)s.chosen.push(k);
      else s.tip='Bỏ chọn một mục trước khi chọn mục khác.';
      return;
    }
    if(action==='split'){
      if(s.min>=s.max)return;
      const prev=s.min, mid=Math.floor((s.min+s.max)/2), yes=s.secret<=mid;
      s.turn++;
      if(yes)s.max=mid;else s.min=mid+1;
      s.notes.push('Câu '+s.turn+': Trong ngăn '+prev+'–'+mid+'? <strong>'+(yes?'Có':'Không')+'</strong>.');
      return;
    }
    if(action==='nine'){s.tip='Thử đếm số nhánh: mỗi câu có hai kết quả. Ba câu phân biệt tối đa bao nhiêu ngăn?';return;}
    if(action==='ask'){
      const yes=s.secret%2===0;
      s.tip='Trong tình huống máy chọn: '+(yes?'Có. Thẻ do Chi giấu.':'Không. Thẻ do An giấu.');
      return;
    }
    if(action!=='check')return;
    if(active===0){
      const x=s.chosen[0];
      if(!x){s.tip='Chọn một tủ trước.';return;}
      const results=[x==='B',x!=='C',x!=='B'];
      s.tip=abc.map((j,i)=>'Nhãn '+j+': '+(results[i]?'đúng':'sai')).join(' · ')+'. '+(x==='C'?'Khớp điều kiện đúng một nhãn.':'Có hai nhãn đúng, chưa khớp điều kiện.');
    } else if(active===1){
      if(s.chosen.length!==4 || new Set(s.chosen.map(x=>x[0])).size!==4 || new Set(s.chosen.map(x=>x[1])).size!==4){
        s.tip='Cần bốn dấu, đúng một ở mỗi hàng và mỗi cột. Xem lại các hàng hoặc cột trùng.';return;
      }
      const code=[...s.chosen].sort().join(', ');
      if(!s.ok.includes(code)){s.ok.push(code);s.notes.push('Cách '+s.ok.length+': '+code+'.');}
      s.tip=s.ok.length===2?'Đã tìm được cả hai cách. Hai ô nào chung cho cả hai?':'Xếp hợp lệ. Em có thể đổi hai dấu mà vẫn giữ luật không?';
    } else if(active===3){
      if(s.turn===2){
        s.tip=Number(s.chosen[0])===s.secret?'Chính xác! Đồng '+s.secret+' nặng hơn.':'Đọc lại hai kết quả cân trước khi chọn.';
        return;
      }
      if(s.chosen.length!==2){s.tip='Hãy chọn đúng hai mục để đưa lên cân.';return;}
      const [l,r]=s.chosen.map(Number);
      const target=s.turn===0?Math.ceil(s.secret/3):s.secret;
      const result=l===target?'đĩa trái nặng hơn':r===target?'đĩa phải nặng hơn':'cân bằng';
      s.notes.push('Lần '+(s.turn+1)+': '+(s.turn===0?'nhóm ':'đồng ')+l+' bên trái và '+r+' bên phải: <strong>'+result+'</strong>.');
      if(s.turn===0){
        const g=[1,2,3].find(j=>j!==l && j!==r);
        const chosen=l===target?l:r===target?r:g;
        s.group=[3*chosen-2,3*chosen-1,3*chosen];
      }
      s.turn++;s.chosen=[];s.tip=s.turn===2?'Dựa vào lần cân thứ hai, chạm vào đồng nặng.':'Giải thích vì sao chỉ còn nghi ngờ nhóm này.';
    } else {
      if(s.chosen.length===2 && s.chosen.includes('An') && s.chosen.includes('Chi')){
        s.ok=['An','Chi'];
        s.tip='Cả hai kịch bản đều hợp lệ. Giờ hỏi thêm một câu để phân biệt.';
      } else {
        s.ok=[];s.tip='Chưa đủ. Xét lần lượt ba người và đếm số lời đúng trong mỗi kịch bản.';
      }
    }
  }
  host.addEventListener('click',e=>{
    const el=e.target.closest('button[data-mdk]');
    if(!el || el.disabled || !host.contains(el))return;
    execute(el.dataset.mdk);
    render(el.dataset.mdk);
  });
  render();
})();
