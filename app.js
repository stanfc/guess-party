import { decks } from './decks.js';
import { connectInstallButton } from './pwa.js';
import { categories, filterDecks, allDeck } from './catalog.js';
import { shuffle, screenTilt, TiltGate, parseDuration } from './game.js';
const app = document.querySelector('#app');
let durationMode = 'preset', customDuration = '150';
let searchQuery = '', activeCategory = '全部題庫';
let selected = decks.find(deck => deck.id === 'daily'), duration = 180, phase = 'home', queue = [], answers = [], deadline = 0;
let sessionId = 0;
let ticker, countdownTimer, feedbackTimer, index = 0, busy = false, gate = new TiltGate(), motionEnabled = false, wakeLock, audio;
const $ = selector => app.querySelector(selector);
function bind(selector, callback) { $(selector)?.addEventListener('click', callback); }
function home() {
  cleanup(); phase = 'home';
  app.innerHTML = `<header><div class="brand"><span class="brand-icon">?</span>猜猜俱樂部</div><div class="header-actions"><span class="tag">GOOD FRIENDS. GREAT GUESSES.</span><button class="secondary" id="install-app" hidden>安裝到桌面 ↗</button></div></header><main class="home"><div class="hero"><div><div class="eyebrow"><span class="dot"></span>聚在一起，就開一局</div><h1>手機舉高，<br>把<span>默契玩出來。</span></h1><p class="intro">你來猜，朋友來提示。<br>一支手機就能開始，派對上讓大家笑開懷的好遊戲。</p></div><div class="art" aria-hidden="true"><div class="orbit"></div><span class="spark">✦</span><div class="phone-art"><div class="phone-screen">珍珠奶茶</div></div><div class="bubble one">這個你每天都喝！</div><div class="bubble two">猜對了！ ↘</div></div></div><div class="steps"><span class="step"><b>1</b>選個題庫</span><span class="step"><b>2</b>手機橫放額頭</span><span class="step"><b>3</b>向下猜對・向上跳過</span></div><div class="section-head"><h2>今天想挑戰什麼？</h2><span class="muted">${decks.length} 個題庫 · ${decks.reduce((n,d)=>n+d.words.length,0)} 道題目</span></div><div class="catalog-tools"><label class="search-box"><span aria-hidden="true">⌕</span><input id="deck-search" type="search" placeholder="搜尋題庫，例如：法律、恐龍、金曲" aria-label="搜尋題庫" autocomplete="off"><button id="clear-search" type="button" aria-label="清除搜尋" hidden>×</button></label><div class="categories" role="group" aria-label="題庫分類">${categories.map(category => `<button data-category="${category}" aria-pressed="${category === activeCategory}" class="${category === activeCategory ? 'active' : ''}">${category}</button>`).join('')}</div></div><p class="catalog-status" id="catalog-status" role="status"></p><div class="decks" id="deck-grid"></div><div class="catalog-empty" id="catalog-empty" hidden><p>沒有符合的題庫，換個關鍵字試試。</p><button class="secondary" id="reset-filters">顯示全部題庫</button></div><div class="settings"><div class="selection-summary"><span class="muted">本回合題庫</span><strong id="selected-deck-name">${selected.name}</strong></div><div class="duration"><span>每回合時間</span><div class="segments" role="group" aria-label="每回合時間">${[60,90,120,180].map(n=>`<button data-duration="${n}" class="${durationMode==='preset'&&duration===n?'active':''}" aria-pressed="${durationMode==='preset'&&duration===n}">${n} 秒</button>`).join('')}<button id="custom-mode" class="${durationMode==='custom'?'active':''}" aria-pressed="${durationMode==='custom'}">自訂</button></div><div class="custom-duration" ${durationMode==='custom'?'':'hidden'}><label for="custom-seconds">自訂秒數</label><input id="custom-seconds" type="number" inputmode="numeric" min="1" max="3600" step="1" aria-describedby="duration-error"><span>秒（1～3600）</span><p id="duration-error" role="status"></p></div></div><button class="primary" id="prepare">就位，準備開猜 <span>↗</span></button></div><footer class="footer"><span>MADE FOR THE MOMENTS TOGETHER</span><span>不用下載，不用登入。</span></footer></main>`;
  connectInstallButton();
  $('#deck-search').value = searchQuery;
  $('#deck-search').addEventListener('input', event => { searchQuery = event.target.value; renderCatalog(); });
  bind('#clear-search', () => { searchQuery = ''; $('#deck-search').value = ''; renderCatalog(); $('#deck-search').focus(); });
  app.querySelectorAll('[data-category]').forEach(el => el.onclick = () => {
    activeCategory = el.dataset.category;
    app.querySelectorAll('[data-category]').forEach(button => {
      button.classList.toggle('active', button.dataset.category === activeCategory);
      button.setAttribute('aria-pressed', String(button.dataset.category === activeCategory));
    });
    renderCatalog();
  });
  bind('#reset-filters', () => { searchQuery = ''; activeCategory = '全部題庫'; home(); });
  $('#deck-grid').addEventListener('click', event => {
    const button = event.target.closest('[data-deck]');
    if (!button) return;
    selected = button.dataset.deck === allDeck.id ? allDeck : decks.find(deck => deck.id === button.dataset.deck);
    renderCatalog();
    $('#selected-deck-name').textContent = selected.name;
    $(`[data-deck="${selected.id}"]`)?.focus({ preventScroll: true });
  });
  renderCatalog();
  app.querySelectorAll('[data-duration]').forEach(el=>el.onclick=()=>{durationMode='preset';duration=Number(el.dataset.duration);home();});
  bind('#custom-mode', () => { durationMode = 'custom'; home(); $('#custom-seconds').focus(); });
  $('#custom-seconds').value = customDuration;
  $('#custom-seconds').addEventListener('input', event => { customDuration = event.target.value; updateDuration(); });
  updateDuration();
  bind('#prepare', prepare);
}
function updateDuration() {
  const value = durationMode === 'custom' ? parseDuration(customDuration) : duration;
  const invalid = value === null;
  if (!invalid) duration = value;
  $('#prepare').disabled = invalid;
  $('#custom-seconds').setAttribute('aria-invalid', String(invalid));
  $('#duration-error').textContent = invalid ? '請輸入 1～3600 的整數秒數。' : '';
}
function renderCatalog() {
  const visible = filterDecks(searchQuery, activeCategory);
  $('#deck-grid').innerHTML = visible.map(d => `<button class="deck ${d.id === selected.id ? 'selected' : ''}" data-deck="${d.id}" aria-pressed="${d.id === selected.id}" style="--deck-color:${d.color}"><div class="deck-top"><span class="deck-icon" aria-hidden="true">${d.icon}</span><span class="deck-count">${d.words.length} 道題目</span></div><h3>${d.name}</h3><p>${d.description}</p>${d.id === selected.id ? '<span class="check" aria-hidden="true">✓</span>' : ''}</button>`).join('');
  $('#catalog-status').textContent = `顯示 ${visible.length} 個題庫 · 每個題庫至少 150 題`;
  $('#catalog-empty').hidden = visible.length > 0;
  $('#clear-search').hidden = !searchQuery;
}
function prepare() {
  if (durationMode === 'custom' && parseDuration(customDuration) === null) return;
  phase = 'prepare';
  app.innerHTML = `<main class="center-page"><div class="eyebrow">${selected.name} · ${duration} 秒</div><h1>讓朋友看見題目！</h1><p class="instructions">把手機橫拿，螢幕朝外放在額頭前。<br>朋友可以說明、比動作，但不能直接說出答案。</p><div class="motion-guide"><div><strong>↘ 向下翻</strong>螢幕朝地板，猜對！</div><div><strong>↗ 向上翻</strong>螢幕朝天空，跳過</div></div><p class="notice">每次翻轉後，請把手機立回額頭前再繼續。<br>按下開始後有 3 秒準備時間。若有提示，請允許動作感測權限。<br>也可以點螢幕按鈕，或用鍵盤 ↓ 猜對、↑ 跳過。</p><button class="primary" id="start">開始這一回合 →</button><p class="notice" id="sensor-status" role="status"></p><button class="back" id="back">← 返回選題庫</button></main>`;
  bind('#back', home); bind('#start', start);
}
async function start() {
  if (phase !== 'prepare') return;
  const session = ++sessionId;
  phase = 'starting';
  $('#start').disabled = true;
  $('#sensor-status').textContent = '正在準備；若有權限提示，請選擇是否允許動作感測。';
  let permitted = false;
  try {
    if (typeof DeviceOrientationEvent !== 'undefined') {
      permitted = typeof DeviceOrientationEvent.requestPermission === 'function'
        ? await DeviceOrientationEvent.requestPermission() === 'granted' : true;
    }
  } catch {}
  if (session !== sessionId || phase !== 'starting') return;
  motionEnabled = permitted;
  phase = 'countdown'; queue = shuffle(selected.words); answers = []; index = 0; busy = false; gate = new TiltGate();
  let count = 3;
  const draw = () => {app.innerHTML = `<main class="center-page"><div class="eyebrow">手機橫放額頭，螢幕朝外</div><div class="countdown" role="status">${count}</div><p class="notice">${motionEnabled?'翻轉手機，或點擊按鈕作答':'使用螢幕按鈕作答（動作感測未開啟）'}</p></main>`;beep(500,.08);};
  draw(); countdownTimer = setInterval(()=>{count--;if(count===0){clearInterval(countdownTimer);begin();}else draw();},1000);
  // Browser conveniences are optional. Never await them before starting the timer.
  enableRoundEnvironment(session);
}
function enableRoundEnvironment(session) {
  const current = () => session === sessionId && (phase === 'countdown' || phase === 'play');
  try {
    audio ||= new (window.AudioContext || window.webkitAudioContext)();
    Promise.resolve(audio.resume()).catch(() => {});
  } catch { audio = null; }
  try {
    Promise.resolve(document.documentElement.requestFullscreen?.()).then(() => {
      if (current()) {
        try { Promise.resolve(screen.orientation?.lock?.('landscape')).catch(() => {}); } catch {}
      } else if (document.fullscreenElement && phase !== 'countdown' && phase !== 'play') {
        try { Promise.resolve(document.exitFullscreen?.()).catch(() => {}); } catch {}
      }
    }).catch(() => {});
  } catch {}
  try {
    Promise.resolve(navigator.wakeLock?.request('screen')).then(lock => {
      if (current()) wakeLock = lock;
      else { try { Promise.resolve(lock?.release()).catch(() => {}); } catch {} }
    }).catch(() => {});
  } catch {}
}
function begin() {
  phase = 'play'; deadline = performance.now() + duration * 1000;
  window.addEventListener('deviceorientation', orientation);
  renderPlay(); ticker = setInterval(tick,100);
}
function renderPlay(feedback) {
  const seconds = Math.max(0, Math.ceil((deadline-performance.now())/1000));
  app.innerHTML = `<main class="play ${feedback||''}"><div class="progress"><div style="width:${seconds/duration*100}%"></div></div><div class="play-top"><span>${selected.name} · ✓ ${answers.filter(a=>a.status==='correct').length}</span><span class="timer ${seconds<=10?'urgent':''}" role="timer">${seconds}<small> 秒</small></span><button class="end" id="end">結束回合</button></div><div>${feedback?`<div class="feedback" role="status">${feedback==='correct'?'✓ 猜對了！':'↗ 跳過'}</div>`:`<div class="word ${[...queue[index]].length > 12 ? 'word-long' : [...queue[index]].length > 7 ? 'word-medium' : ''}">${queue[index]}</div>`}<p class="rotate-hint">↔ 請把手機橫過來，讓朋友更容易看見</p></div><div class="play-bottom"><button id="skip" ${busy?'disabled':''}>↑ 跳過</button><span>${feedback?'把手機立回來，繼續下一題':motionEnabled?'向上跳過 · 向下猜對':'點擊按鈕，或使用方向鍵'}</span><button id="correct" ${busy?'disabled':''}>猜對 ↓</button></div></main>`;
  bind('#correct',()=>answer('correct'));bind('#skip',()=>answer('skip'));bind('#end',confirmEnd);
}
function tick() {
  if (performance.now() >= deadline) { finish('time'); return; }
  const seconds = Math.ceil((deadline-performance.now())/1000);
  const el = $('.timer'); if(el){el.innerHTML=`${seconds}<small> 秒</small>`;el.classList.toggle('urgent',seconds<=10);}
  const bar = $('.progress div');if(bar)bar.style.width=`${(deadline-performance.now())/(duration*1000)*100}%`;
}
function orientation(event) {
  if (!motionEnabled || phase !== 'play' || busy || document.hidden || $('.end-confirm')) return;
  const action = gate.update(screenTilt(event.beta,event.gamma),performance.now());
  if(action)answer(action);
}
function answer(status) {
  if (phase !== 'play' || busy || $('.end-confirm')) return;
  if (performance.now() >= deadline) { finish('time'); return; }
  busy = true; gate = new TiltGate(); answers.push({word:queue[index],status});index++;
  beep(status==='correct'?880:300,.14);navigator.vibrate?.(status==='correct'?70:[30,50,30]);renderPlay(status);
  feedbackTimer = setTimeout(()=>{if(phase!=='play')return;if(index>=queue.length){finish('all');return;}busy=false;renderPlay();},650);
}
function confirmEnd() {
  if($('.end-confirm'))return;
  const modal=document.createElement('div');modal.className='end-confirm';modal.innerHTML='<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><h2 id="dialog-title">要結束這回合嗎？</h2><p>計時仍在進行，已作答的題目會保留。</p><div class="dialog-actions"><button class="secondary" id="continue">繼續玩</button><button class="primary" id="finish">查看成績</button></div></div>';app.append(modal);
  bind('#continue',()=>{modal.remove();gate=new TiltGate();$('#end')?.focus();});bind('#finish',()=>finish('manual'));$('#continue').focus();
  modal.addEventListener('keydown',e=>{if(e.key==='Escape')$('#continue').click();if(e.key==='Tab'){e.preventDefault();(document.activeElement===$('#continue')?$('#finish'):$('#continue')).focus();}});
}
function finish(reason) {
  if(phase!=='play')return;
  phase='results';cleanup();beep(660,.3);
  const correct=answers.filter(a=>a.status==='correct'),skipped=answers.filter(a=>a.status==='skip');
  const pending=queue[index];
  app.innerHTML=`<main class="result"><div class="result-heading"><div class="eyebrow" style="justify-content:center">${selected.name} · ${reason==='all'?'題庫全部挑戰完成':reason==='manual'?'提前結束':duration+' 秒挑戰完成'}</div><h1>${correct.length>=10?'默契大爆發！':correct.length>=5?'你們很有默契耶！':'快樂就是最佳戰績！'}</h1><div class="score">${correct.length} <small>題猜對</small></div><div class="stats"><span>↗ ${skipped.length} 題跳過</span><span>◎ ${answers.length?Math.round(correct.length/answers.length*100):0}% 答對率</span></div>${pending?`<p class="notice" style="margin:15px auto">最後未作答：${pending}（不計入成績）</p>`:''}</div><div class="results-list"><section><h2>✓ 猜對了 · ${correct.length}</h2>${correct.map(a=>`<div class="result-word">${a.word}<span>✓</span></div>`).join('')||'<p class="empty">下一輪一定可以！</p>'}</section><section><h2>↗ 跳過了 · ${skipped.length}</h2>${skipped.map(a=>`<div class="result-word skipped">${a.word}<span>↗</span></div>`).join('')||'<p class="empty">這回合沒有跳過的題目</p>'}</section></div><div class="result-actions"><button class="secondary" id="home">換個題庫</button><button class="primary" id="again">再玩一回合 ↗</button></div></main>`;
  bind('#home',home);bind('#again',prepare);
}
function beep(frequency,length){if(!audio)return;try{const oscillator=audio.createOscillator(),gain=audio.createGain();oscillator.connect(gain);gain.connect(audio.destination);oscillator.frequency.value=frequency;gain.gain.setValueAtTime(.06,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+length);oscillator.start();oscillator.stop(audio.currentTime+length);}catch{}}
function cleanup() {
  sessionId++;
  clearInterval(ticker); clearInterval(countdownTimer); clearTimeout(feedbackTimer);
  window.removeEventListener('deviceorientation', orientation);
  try { Promise.resolve(wakeLock?.release()).catch(() => {}); } catch {}
  wakeLock = null;
  try { screen.orientation?.unlock?.(); } catch {}
  if (document.fullscreenElement) {
    try { Promise.resolve(document.exitFullscreen?.()).catch(() => {}); } catch {}
  }
}
window.addEventListener('keydown',e=>{if(phase!=='play'||e.repeat||$('.end-confirm'))return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();answer(e.key==='ArrowDown'?'correct':'skip');}});
document.addEventListener('visibilitychange',()=>{gate=new TiltGate();if(!document.hidden&&phase==='play')tick();});
home();
