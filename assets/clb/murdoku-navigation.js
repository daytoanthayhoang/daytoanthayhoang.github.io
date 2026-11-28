/* Thêm đợt/ván vào registry, giữ ID cũ để giữ các liên kết. */
const registry={
  "batches": [
    {
      "id": "2026-11-28",
      "title": "Đợt 01 · 28/11/2026",
      "print": "assets/clb/murdoku-2026-11-28.pdf",
      "rounds": [
        {
          "id": "van-01",
          "title": "Khởi động 1 · Bí ẩn phòng thí nghiệm",
          "page": "clb-murdoku-khoi-dong.html"
        },
        {
          "id": "van-02",
          "title": "Khởi động 2 · Bí ẩn phòng nhạc",
          "page": "clb-murdoku-khoi-dong.html"
        },
        {
          "id": "case-01",
          "title": "Hồ sơ 01 · Vụ án đầu tiên của bạn",
          "page": "clb-murdoku.html"
        },
        {
          "id": "case-02",
          "title": "Hồ sơ 02 · Chỗ ở kỳ nghỉ",
          "page": "clb-murdoku.html"
        }
      ]
    }
  ]
};

(()=>{
 const b=document.getElementById('murdoku-batch'),v=document.getElementById('murdoku-case'),p=document.getElementById('murdoku-print');
 if(!b||!v)return;
 const initial=new URLSearchParams(location.search).get('van');
 const here=location.pathname.split('/').pop();
 const chosen=registry.batches.flatMap(g=>g.rounds.map(r=>[g,r])).find(([,r])=>r.id===initial);
 if(chosen && chosen[1].page!==here){
   const next=new URL(chosen[1].page,location.href);next.searchParams.set('van',initial);next.hash=location.hash;location.replace(next.href);return;
 }
 function options(g,active){
   v.replaceChildren(...g.rounds.map(r=>new Option(r.title,r.id)));
   if(active)v.value=active;
   p.classList.toggle('hidden',!g.print);if(g.print)p.href=g.print;
 }
 const first=chosen||registry.batches.flatMap(g=>g.rounds.map(r=>[g,r])).find(([,r])=>r.page===here);
 const [g,r]=first||[registry.batches[0],registry.batches[0].rounds[0]];
 b.replaceChildren(...registry.batches.map(x=>new Option(x.title,x.id)));b.value=g.id;options(g,r.id);
 function go(id){
  const [g,r]=registry.batches.flatMap(g=>g.rounds.map(r=>[g,r])).find(([,r])=>r.id===id);
  if(r.page===here&&typeof window.murdokuSelectEmbeddedCase==='function'&&window.murdokuSelectEmbeddedCase(id))return;
  const next=new URL(r.page,location.href);next.searchParams.set('van',id);location.assign(next.href);
 }
 b.addEventListener('change',()=>{const g=registry.batches.find(g=>g.id===b.value);options(g);go(g.rounds[0].id);});
 v.addEventListener('change',()=>go(v.value));
 window.addEventListener('murdoku:case',e=>{
  const match=registry.batches.find(g=>g.rounds.some(r=>r.id===e.detail));if(!match)return;
  b.value=match.id;options(match,e.detail);
  const u=new URL(location.href);u.searchParams.set('van',e.detail);
  if(u.href!==location.href)history.replaceState(null,'',u);
 });
})();
