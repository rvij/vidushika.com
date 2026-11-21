(function () {
  const FORMATS = [
    { name: 'Dashboard',  file: 'index.html',           icon: '▦' },
    { name: 'Newspaper',  file: 'index_newspaper.html', icon: '≡' },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const style = document.createElement('style');
  style.textContent = `
    #fmt-toggle {
      position: fixed;
      top: 58px; right: 12px;
      z-index: 9999;
      width: 34px; height: 34px;
      background: rgba(17, 24, 39, 0.82);
      border: 1px solid rgba(255,255,255,0.13);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      color: rgba(255,255,255,0.8);
      font-size: 15px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      transition: background 0.15s, border-color 0.15s;
      user-select: none;
    }
    #fmt-toggle:hover, #fmt-toggle.open {
      background: rgba(33, 85, 204, 0.75);
      border-color: rgba(100, 150, 250, 0.4);
      color: #fff;
    }
    #fmt-panel {
      position: fixed;
      top: 100px; right: 12px;
      z-index: 9998;
      background: rgba(13, 17, 28, 0.96);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 6px;
      min-width: 180px;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      box-shadow: 0 12px 36px rgba(0,0,0,0.5);
      opacity: 0;
      transform: translateY(-6px) scale(0.97);
      pointer-events: none;
      transition: opacity 0.15s ease, transform 0.15s ease;
      font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
    }
    #fmt-panel.open { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }
    #fmt-panel-label {
      font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
      text-transform: uppercase; color: rgba(255,255,255,0.28);
      padding: 4px 10px 8px; display: block;
    }
    .fmt-item {
      display: flex; align-items: center; gap: 10px;
      padding: 7px 10px; border-radius: 6px;
      text-decoration: none; color: rgba(255,255,255,0.62);
      font-size: 13px; font-weight: 500;
      transition: background 0.12s, color 0.12s; white-space: nowrap;
    }
    .fmt-item:hover { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.92); }
    .fmt-item.active { background: rgba(33,85,204,0.2); color: #7aabff; }
    .fmt-item .fmt-icon { font-size: 12px; width: 18px; text-align: center; opacity: 0.65; flex-shrink: 0; }
  `;
  document.head.appendChild(style);

  const toggle = document.createElement('div');
  toggle.id = 'fmt-toggle';
  toggle.title = 'Switch resume format';
  toggle.setAttribute('role', 'button');
  toggle.setAttribute('aria-label', 'Switch resume format');
  toggle.innerHTML = '&#9776;';

  const panel = document.createElement('div');
  panel.id = 'fmt-panel';
  panel.innerHTML = '<span id="fmt-panel-label">Resume Style</span>' +
    FORMATS.map(f => {
      const active = current === f.file || (current === '' && f.file === 'index.html');
      return `<a href="${f.file}" class="fmt-item${active ? ' active' : ''}">` +
             `<span class="fmt-icon">${f.icon}</span>${f.name}</a>`;
    }).join('');

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = panel.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
  });
  document.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.classList.remove('open');
  });
  panel.addEventListener('click', e => e.stopPropagation());

  document.body.appendChild(toggle);
  document.body.appendChild(panel);
})();
