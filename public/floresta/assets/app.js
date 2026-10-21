(function(){
  var FILMS = [
    {t:'Diários da Floresta', y:'2017', m:'Série de ficção · 5 episódios · TV Cultura-PA e Canal Brasil', s:'Série de ficção · 2017 · TV Cultura-PA', c:['#3F5C34','#1A2616'], vid:{id:'236498139', h:'969a106fa8'}, img:'https://i.vimeocdn.com/video/758432100-5e027dce93a87355c00c590cc0a3114ab3fe969aac3e60e8351c3d60dc3e0062-d_1920x1080'},
    {t:'Aikewara', y:'2017', m:'Telefilme documental · 80 min · TV Cultura-PA', s:'Telefilme documental · 2017', c:['#6A4423','#2A1B0F'], vid:{id:'235022483', h:'09bc510bdf'}, img:'https://i.vimeocdn.com/video/758431441-0d5fc919c9674adf45bbb4608199f627eeff7d9a0d231fe084b28d7ca5f34b1f-d_1920x1080'},
    {t:'Transamazônica, Utopias na Selva', y:'2016', m:'Projeto · PRODAV', s:'Projeto · 2016', c:['#6B3B2A','#2B1812']},
    {t:'Chupa-Chupa, a história que veio do céu', y:'2007', m:'Documentário · DOCTV', s:'Documentário · DOCTV · 2007', c:['#24395A','#111A2A']},
    {t:'A Descoberta da Amazônia pelos Turcos Encantados', y:'2006', m:'Documentário · DOCTV', s:'Documentário · DOCTV · 2006', c:['#4A3352','#1F1624']}
  ];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DUR = 5000;

  function pad(n){ return (n < 10 ? '0' : '') + n; }
  function grad(c, pos){ return 'radial-gradient(120% 95% at ' + pos + ', ' + c[0] + ' 0%, ' + c[1] + ' 48%, #0B0D0A 100%)'; }
  function bgFor(film, pos){
    var g = grad(film.c, pos);
    return film.img ? 'url("' + film.img + '") center / cover no-repeat, ' + g : g;
  }

  function makeFader(root, pos){
    var layers = root.querySelectorAll('[data-layer]'), front = 0, first = true;
    return function(film){
      var g = bgFor(film, pos);
      if (first){ layers[0].style.background = g; first = false; return; }
      var next = 1 - front;
      layers[next].style.background = g;
      layers[next].style.opacity = 1;
      layers[front].style.opacity = 0;
      front = next;
    };
  }

  /* Vimeo teasers: mounted while the hero is on screen, shown only once actually playing */
  function makeVideo(root){
    var host = root.querySelector('[data-layer]').parentNode, box = null, frames = {}, current = 0;
    function vis(){ Object.keys(frames).forEach(function(k){ var f = frames[k]; f.classList.toggle('on', +k === current && f.dataset.ready === '1'); }); }
    function mount(){
      if (box) return;
      box = document.createElement('div'); box.className = 'vid'; box.setAttribute('aria-hidden', 'true');
      host.insertBefore(box, host.firstChild);
      FILMS.forEach(function(film, k){
        if (!film.vid) return;
        var fr = document.createElement('iframe');
        fr.src = 'https://player.vimeo.com/video/' + film.vid.id + '?h=' + film.vid.h + '&background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1';
        fr.allow = 'autoplay; fullscreen; picture-in-picture';
        fr.title = film.t; fr.tabIndex = -1;
        box.appendChild(fr); frames[k] = fr;
        if (window.Vimeo && Vimeo.Player){
          try { new Vimeo.Player(fr).on('playing', function(){ fr.dataset.ready = '1'; vis(); }); } catch(e){}
        }
      });
    }
    function unmount(){ if (!box) return; box.remove(); box = null; frames = {}; }
    if (!reduce && 'IntersectionObserver' in window){
      new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting ? mount() : unmount(); }); }).observe(root);
    }
    return { set: function(i){ current = i; vis(); } };
  }

  function swapText(el, fn){
    if (!el || reduce){ fn(); return; }
    el.classList.add('out');
    setTimeout(function(){ fn(); el.classList.remove('out'); }, 450);
  }
  function buildSegs(root){
    var box = root.querySelector('[data-segs]'); if (!box) return [];
    box.innerHTML = '';
    return FILMS.map(function(){ var s = document.createElement('div'); s.className = 'seg'; box.appendChild(s); return s; });
  }
  function setSegs(segs, i){
    segs.forEach(function(s, k){
      s.classList.remove('run'); s.classList.toggle('done', k < i);
      if (k === i){ void s.offsetWidth; s.style.setProperty('--dur', DUR + 'ms'); s.classList.add(reduce ? 'done' : 'run'); }
    });
  }

  /* A — showreel */
  function initA(root){
    var fade = makeFader(root, '70% 32%'), segs = buildSegs(root), video = makeVideo(root);
    var swap = root.querySelector('[data-swap]'), i = 0;
    function show(){
      var f = FILMS[i];
      fade(f); video.set(i); setSegs(segs, i);
      swapText(swap, function(){
        root.querySelector('[data-title]').textContent = f.t;
        root.querySelector('[data-short]').textContent = f.s;
        root.querySelector('[data-count]').textContent = pad(i + 1) + ' / ' + pad(FILMS.length);
      });
    }
    show();
    if (!reduce) setInterval(function(){ i = (i + 1) % FILMS.length; show(); }, DUR);
  }

  /* B — cinema */
  function initB(root){
    var fade = makeFader(root, '30% 70%'), segs = buildSegs(root), video = makeVideo(root);
    var swap = root.querySelector('[data-swap]'), tc = root.querySelector('[data-tc]'), i = 1;
    function show(){
      var f = FILMS[i];
      fade(f); video.set(i); setSegs(segs, i);
      swapText(swap, function(){
        var h = root.querySelector('[data-title]');
        h.textContent = f.t.toUpperCase();
        h.classList.toggle('long', f.t.length > 16);
        root.querySelector('[data-meta]').textContent = (f.m + ' · ' + f.y).toUpperCase();
      });
    }
    show();
    if (!reduce){
      setInterval(function(){ i = (i + 1) % FILMS.length; show(); }, DUR);
      var t0 = performance.now();
      (function tick(now){
        var fr = Math.floor((now - t0) / (1000 / 24)), s = Math.floor(fr / 24);
        tc.textContent = '00:' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60) + ':' + pad(fr % 24);
        requestAnimationFrame(tick);
      })(t0);
    }
  }

  /* C — índice */
  function initC(root){
    var fade = makeFader(root, '78% 45%'), video = makeVideo(root);
    var list = root.querySelector('[data-list]'), preview = root.querySelector('[data-preview]');
    var meta = root.querySelector('[data-meta]'), cta = root.querySelector('[data-cta]');
    var active = -1, timer = null;
    var btns = FILMS.map(function(f, k){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'film';
      b.innerHTML = '<span class="y"></span><span class="t"></span>';
      b.querySelector('.y').textContent = f.y;
      b.querySelector('.t').textContent = f.t;
      function pick(){ if (timer){ clearInterval(timer); timer = null; } select(k); }
      b.addEventListener('mouseenter', pick);
      b.addEventListener('focus', pick);
      b.addEventListener('click', pick);
      list.appendChild(b);
      return b;
    });
    function select(k){
      if (k === active) return;
      active = k;
      var f = FILMS[k];
      btns.forEach(function(b, j){ b.classList.toggle('on', j === k); b.setAttribute('aria-pressed', j === k ? 'true' : 'false'); });
      fade(f); video.set(k);
      swapText(preview, function(){ preview.textContent = 'PRÉVIA EM VÍDEO · ' + f.t.toUpperCase(); });
      meta.textContent = f.y + ' · ' + f.m;
      cta.textContent = 'Ver a produção →';
    }
    select(0);
    if (!reduce) timer = setInterval(function(){ select((active + 1) % FILMS.length); }, 4000);
  }

  var INIT = { a: initA, b: initB, c: initC };
  document.querySelectorAll('[data-hero]').forEach(function(el){ var fn = INIT[el.getAttribute('data-hero')]; if (fn) fn(el); });
})();
