(() => {
  'use strict';
  const main = document.querySelector('main');
  if (!main || !window.HTMLDialogElement) return;
  const picture = /\.(?:avif|gif|jpe?g|png|svg|webp)(?:\?[^#]*)?(?:#.*)?$/i;
  const candidates = [...main.querySelectorAll('img, a[href]')];
  const entries = [];
  for (const node of candidates) {
    if (node.tagName === 'A' && !picture.test(node.getAttribute('href') || '')) continue;
    if (node.tagName === 'IMG' && node.closest('a,button')) continue;
    if (node.tagName === 'IMG' && !node.getAttribute('src')) continue;
    const img = node.tagName === 'IMG' ? node : node.querySelector('img');
    const figure = node.closest('figure') || img?.closest('figure');
    const caption = figure?.querySelector('figcaption')?.textContent.trim() || img?.alt || node.textContent.trim() || 'Hình minh họa';
    const group = node.closest('[data-lightbox-group], [data-stem-panel], .gallery, section') || main;
    const href = node.tagName === 'A' ? node.href : img.currentSrc || img.src;
    let trigger = node;
    if (node.tagName === 'IMG') {
      trigger = document.createElement('button');
      trigger.type = 'button';
      node.before(trigger);
      trigger.append(node);
    } else {
      node.removeAttribute('target');
    }
    trigger.classList.add('stem-lb-trigger');
    trigger.setAttribute('aria-haspopup','dialog');
    trigger.setAttribute('aria-label','Phóng to: ' + caption);
    entries.push({trigger, href, caption, group, alt: img?.alt || caption});
  }
  if (!entries.length) return;
  const dialog = Object.assign(document.createElement('dialog'), {className:'stem-lb'});
  dialog.setAttribute('aria-label','Xem ảnh phóng to');
  dialog.innerHTML = '<div class="stem-lb-body"><div class="stem-lb-top"><span class="stem-lb-count" aria-live="polite"></span><button type="button" class="stem-lb-close" aria-label="Đóng ảnh" autofocus>Đóng ×</button></div><figure><img alt=""><figcaption></figcaption></figure><div class="stem-lb-nav"><button type="button" data-shift="-1">← Ảnh trước</button><button type="button" data-shift="1">Ảnh sau →</button></div></div>';
  document.body.append(dialog);
  const image = dialog.querySelector('img'), caption = dialog.querySelector('figcaption'), count = dialog.querySelector('.stem-lb-count');
  const close = dialog.querySelector('.stem-lb-close'), nav = dialog.querySelector('.stem-lb-nav');
  let shown = [], index = 0, origin, scroll = [0,0], touchStart, pointerDown;
  function render() {
    const item = shown[index];
    image.alt = item.alt;
    image.src = item.href;
    caption.textContent = item.caption;
    count.textContent = shown.length > 1 ? 'Ảnh ' + (index + 1) + '/' + shown.length : '';
    nav.hidden = shown.length < 2;
  }
  function move(amount) {
    if (shown.length < 2) return;
    index = (index + amount + shown.length) % shown.length;
    render();
  }
  for (const item of entries) item.trigger.addEventListener('click', event => {
    if (event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    shown = entries.filter(entry => entry.group === item.group && entry.trigger.getClientRects().length);
    if (!shown.includes(item)) shown = [item];
    index = shown.indexOf(item);
    origin = item.trigger;
    scroll = [window.scrollX,window.scrollY];
    render();
    dialog.showModal();
    document.documentElement.classList.add('stem-lb-lock');
    close.focus({preventScroll:true});
  });
  nav.addEventListener('click', event => { const button = event.target.closest('[data-shift]'); if (button) move(Number(button.dataset.shift)); });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('pointerdown', event => { pointerDown = event.target; });
  dialog.addEventListener('click', event => { if (event.target === dialog && pointerDown === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (['ArrowLeft','ArrowRight'].includes(event.key) && shown.length > 1) {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  image.addEventListener('touchstart', event => { touchStart = [event.changedTouches[0].clientX,event.changedTouches[0].clientY]; }, {passive:true});
  image.addEventListener('touchend', event => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart[0], dy = event.changedTouches[0].clientY - touchStart[1];
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1);
    touchStart = undefined;
  }, {passive:true});
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('stem-lb-lock');
    origin?.focus({preventScroll:true});
    if (window.scrollX !== scroll[0] || window.scrollY !== scroll[1]) window.scrollTo({left:scroll[0], top:scroll[1], behavior:'instant'});
    image.removeAttribute('src');
  });
})();