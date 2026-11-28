/* Chỉ bổ sung điều hướng và bố cục; không can thiệp dữ liệu hoặc nước đi. */
(() => {
  const nav=document.getElementById('murdoku-navigation');
  const board=document.getElementById('boardGrid');
  const clues=document.getElementById('clueCardsList')||document.getElementById('cluesList');
  if(!nav||!board||!clues)return;
  const left=board.closest('section'), right=clues.closest('section'), main=nav.closest('main');
  const wrap=(document.getElementById('rowLabels')||document.getElementById('rowHeaders')).parentElement.parentElement;
  const boardPanel=wrap.closest('section > div');
  const cluePanel=clues.parentElement;
  const palette=document.getElementById('charPalette')||document.getElementById('paletteContainer');
  const warm=Boolean(document.getElementById('boardFrame'));
  main.classList.add('mdk-main');
  left.parentElement.classList.add('mdk-columns');
  left.classList.add('mdk-left');right.classList.add('mdk-right');
  wrap.classList.add('mdk-board-wrap');
  if(warm)main.classList.add('mdk-warm');
  boardPanel.classList.add('mdk-board-panel');cluePanel.classList.add('mdk-clue-panel');
  boardPanel.tabIndex=-1;cluePanel.tabIndex=-1;
  palette.classList.add('mdk-palette');
  document.getElementById('caseSelectorGrid')?.parentElement.classList.add('mdk-duplicate');
  const button=(label,className)=>{
    const el=document.createElement('button');el.type='button';el.textContent=label;el.className=className;return el;
  };
  const toggle=button('Trình chiếu TV','mdk-button mdk-tv');
  toggle.setAttribute('aria-pressed','false');
  nav.append(toggle);
  const jumps=document.createElement('nav');jumps.className='mdk-jumps';
  jumps.setAttribute('aria-label','Di chuyển trong ván chơi');
  const go=(target)=>{
    target.focus({preventScroll:true});
    target.scrollIntoView({block:'start',behavior:'auto'});
  };
  [['Bàn chơi',boardPanel],['Manh mối',cluePanel]].forEach(([label,target])=>{
    const el=button(label,'mdk-button');jumps.append(el);
    el.addEventListener('click',()=>go(target));
  });
  document.body.append(jumps);
  document.body.classList.add('mdk-ready');
  const key='nak-murdoku-projector', wide=matchMedia('(min-width: 1024px)');
  let wanted=false;
  try{wanted=sessionStorage.getItem(key)==='on';}catch{}
  function render(){
    const on=wanted&&wide.matches;
    document.body.classList.toggle('mdk-present',on);
    toggle.setAttribute('aria-pressed',String(on));
    toggle.textContent=on?'Thoát trình chiếu':'Trình chiếu TV';
  }
  toggle.addEventListener('click',()=>{
    wanted=!document.body.classList.contains('mdk-present');
    try{sessionStorage.setItem(key,wanted?'on':'off');}catch{}
    render(); nav.scrollIntoView({block:'start',behavior:'auto'});
  });
  if(wide.addEventListener)wide.addEventListener('change',render);
  else if(wide.addListener)wide.addListener(render);
  render();
})();
