(() => {
  const main = document.querySelector('.wf');
  if (!main) return;
  const panels = Array.from(main.querySelectorAll('[data-stem-panel]'));
  const steps = Array.from(main.querySelectorAll('[data-stem-step]'));
  const topSteps = [...document.querySelectorAll('[data-timeline-step]')];
  const controls = Array.from(main.querySelectorAll('[data-stem-control]'));
  const launch = document.querySelector('[data-stem-launch]');
  const key = 'stem2627-shadow-stage-progress-v1';
  if (panels.length !== 4 || steps.length !== 4 || !launch) return;
  let state = {step: 1, completed: []};
  try {
    const previous = JSON.parse(window.localStorage.getItem(key) || 'null');
    if (previous && Number.isInteger(previous.step) && previous.step >= 1 && previous.step <= 4 && Array.isArray(previous.completed)) {
      state = {step: previous.step, completed: [...new Set(previous.completed.filter(n => Number.isInteger(n) && n >= 1 && n <= 4))]};
    }
  } catch {}
  const preserve = () => { try { window.localStorage.setItem(key, JSON.stringify(state)); } catch {} };
  const getNext = () => [1, 2, 3, 4].find(n => !state.completed.includes(n)) || 4;
  const hashStep = () => /^#buoc-([1-4])$/.test(location.hash) ? Number(location.hash.slice(-1)) : null;
  const toggleButtons = [];
  function render() {
    const count = state.completed.length;
    main.querySelector('[data-stem-count]').textContent = count + '/4 bước đã xong';
    main.querySelector('[data-stem-progress]').value = count;
    panels.forEach((panel, i) => panel.hidden = i + 1 !== state.step);
    steps.forEach((a, i) => {
      if (i + 1 === state.step) a.setAttribute('aria-current', 'step');
      else a.removeAttribute('aria-current');
      a.querySelector('[data-stem-status]').textContent = state.completed.includes(i + 1) ? '✓ Xong' : '';
    });
    topSteps.forEach((a,i) => {
      if (i + 1 === state.step) a.setAttribute('aria-current','step');
      else a.removeAttribute('aria-current');
      a.classList.toggle('is-done',state.completed.includes(i + 1));
    });
    toggleButtons.forEach((button, i) => {
      const done = state.completed.includes(i + 1);
      button.setAttribute('aria-pressed', String(done));
      button.textContent = done ? '✓ Đã xong · Bấm để bỏ dấu' : 'Đánh dấu đã xong';
    });
    launch.href = '#buoc-' + getNext();
    const names = ['Chọn câu chuyện', 'Làm sân khấu', 'Thử A/B', 'Mang đến lớp'];
    launch.textContent = count === 4 ? 'Xem lại lộ trình' : count === 0 ? 'Bắt đầu: Chọn câu chuyện' : 'Tiếp tục: ' + names[getNext() - 1];
  }
  function navigate(step, scroll, setHash) {
    if (!Number.isInteger(step) || step < 1 || step > 4) return;
    state.step = step; preserve(); render();
    if (setHash && location.hash !== '#buoc-' + step) window.history.pushState(null, '', '#buoc-' + step);
    if (scroll) {
      const heading = panels[step - 1].querySelector('h3');
      if (heading) heading.focus({preventScroll: true});
      panels[step - 1].scrollIntoView({block: 'start'});
    }
  }
  function makeButton(label, action, attribute) {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
    if (attribute) b.setAttribute(attribute, '');
    b.addEventListener('click', action); return b;
  }
  panels.forEach((panel, i) => {
    const n = i + 1, container = panel.querySelector('.wf-controls');
    const toggle = makeButton('Đánh dấu đã xong', () => {
      state.completed = state.completed.includes(n) ? state.completed.filter(x => x !== n) : [...state.completed, n];
      preserve(); render();
    }, 'data-stem-toggle');
    toggleButtons.push(toggle);
    container.append(toggle);
    if (n > 1) container.append(makeButton('← Bước trước', () => navigate(n - 1, true, true)));
    if (n < 4) {
      container.append(makeButton('Xong bước này → Sang bước ' + (n + 1), () => {
        if (!state.completed.includes(n)) state.completed.push(n);
        navigate(n + 1, true, true);
      }, 'data-stem-next'));
      container.append(makeButton('Xem bước sau, chưa đánh dấu', () => navigate(n + 1, true, true), 'data-stem-skip'));
    }
  });
  [...steps, ...topSteps].forEach((a,i) => a.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); navigate(Number(a.dataset.stemStep || a.dataset.timelineStep), true, true);
  }));
  launch.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); navigate(getNext(), true, true);
  });
  function followHash() {
    const hash = location.hash.slice(1);
    const node = document.getElementById(hash);
    if (hash === 'minh-chung') {
      navigate(2, false, false);
      requestAnimationFrame(() => node.scrollIntoView({block:'start'}));
      return true;
    }
    const album = node && (node.matches('details.album') ? node : node.closest('details.album,.wf-archive'));
    if (album) {
      album.open = true;
      requestAnimationFrame(() => node.scrollIntoView({block:'start'}));
    }
    return false;
  }
  window.addEventListener('hashchange', () => {
    if (followHash()) return;
    const step = hashStep(); if (step) navigate(step, true, false);
  });
  controls.forEach(control => control.hidden = false);
  const initial = hashStep();
  if (initial) {navigate(initial, false, false); requestAnimationFrame(() => panels[initial - 1].scrollIntoView({block:'start'}));}
  else {render(); followHash();}
})();