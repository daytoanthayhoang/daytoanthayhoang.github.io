'use strict';
(() => {
 const host=document.getElementById('club-sessions'); if(!host)return;
 const search=document.getElementById('club-search'),kind=document.getElementById('club-kind');
 const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
 const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n};
 function render(){
  const all=window.CLB_SESSIONS||[],query=norm(search.value.trim());
  const rows=all.filter(s=>(kind.value==='all'||s.kind===kind.value)&&norm([s.title,s.date||'',s.description,...s.activities.map(a=>a.title+' '+a.description)].join(' ')).includes(query)).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  host.replaceChildren();document.getElementById('club-count').textContent=rows.length+' buổi / bộ hoạt động';
  if(!rows.length){host.append(node('p','Chưa có nội dung phù hợp. Thử xóa từ khóa hoặc chọn Tất cả.'));return}
  rows.forEach(s=>{const article=node('article',null,'club-session');article.id='buoi-'+s.id;
   article.append(node('p',s.date?s.date.split('-').reverse().join('/'):'KHO XEM LẠI','club-kicker'),node('h4',s.title),node('p',s.description));
   const grid=node('div',null,'club-activities');
   s.activities.forEach(a=>{const card=node('div',null,'club-activity');card.append(node('p',a.phase,'club-kicker'),node('h5',a.title),node('p',a.description));const actions=node('div',null,'club-actions');const b=node('button','Chiếu tại đây','tool-trigger');b.type='button';b.dataset.src=a.url;const link=node('a','Mở riêng ↗');link.href=a.url;actions.append(b,link);card.append(actions);grid.append(card)});
   article.append(grid);if(s.url){const a=node('a','Bắt đầu cả buổi →','club-start');a.href=s.url;article.append(a)}host.append(article);
  });
 }
 search.addEventListener('input',render);kind.addEventListener('change',render);render();
})();
