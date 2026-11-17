(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Highlight the Fluo step whose chapter is in the middle of the screen
  var links = document.querySelectorAll('.steps a');
  var stepObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('on', a.dataset.step === e.target.id); });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  document.querySelectorAll('#fluo .chapter').forEach(function (c) { stepObs.observe(c); });

  // Count up research numbers the first time they appear
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      countObs.unobserve(e.target);
      if (reduce) return;
      var el = e.target, end = +el.dataset.count, t0 = null;
      function tick(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / 1100, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v + '%';
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: .6 });
  document.querySelectorAll('[data-count]').forEach(function (el) { countObs.observe(el); });

  // Funnel bars grow in
  var funnel = document.querySelector('.funnel');
  if (funnel) new IntersectionObserver(function (entries, o) {
    if (entries[0].isIntersecting) { funnel.classList.add('in'); o.disconnect(); }
  }, { threshold: .4 }).observe(funnel);

  if (document.querySelector('.phone')) (function () {
  // Chat demo: play the conversation when the phone comes into view
    var ask = document.querySelector('.screen[data-panel="ask"]');
    var items = Array.prototype.slice.call(ask.children);
    var typing = ask.querySelector('.typing');
    var timers = [];
    function playChat() {
      timers.forEach(clearTimeout); timers = [];
      items.forEach(function (el) { el.classList.remove('show'); });
      if (reduce) { items.forEach(function (el) { if (el !== typing) el.classList.add('show'); }); typing.hidden = true; return; }
      typing.hidden = false;
      var plan = [[0, 0], [600, 1], [1900, 2], [2400, 3], [2700, 4], [3000, 5], [3400, 6]];
      plan.forEach(function (s) {
        timers.push(setTimeout(function () {
          if (s[1] === 2) typing.hidden = true;
          items[s[1]].classList.add('show');
        }, s[0]));
      });
    }
    var played = false;
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !played) { played = true; playChat(); }
    }, { threshold: .5 }).observe(document.querySelector('.phone'));

    // Demo tabs
    var tabs = document.querySelectorAll('.tabs button');
    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabs.forEach(function (b) { b.setAttribute('aria-selected', b === btn ? 'true' : 'false'); });
        document.querySelectorAll('.phone .screen').forEach(function (s) { s.hidden = s.dataset.panel !== btn.dataset.panel; });
        if (btn.dataset.panel === 'ask') playChat();
      });
    });
  })();

  if (document.getElementById('interests')) (function () {
  // Interests: the pinned frame shows the photo of the row in the middle of the screen
    var frameImgs = document.querySelectorAll('.frame img');
    var likeRows = document.querySelectorAll('.likes [data-like]');
    function showLike(key) {
      frameImgs.forEach(function (img) { img.classList.toggle('on', img.dataset.like === key); });
      likeRows.forEach(function (row) { row.classList.toggle('on', row.dataset.like === key); });
    }
    var likesSec = document.getElementById('interests');
    var likesStage = likesSec.querySelector('.likes-stage');
    var likesIntro = likesSec.querySelector('.likes-intro');
    var frame = likesSec.querySelector('.frame');
    var likesList = likesSec.querySelector('.likes');
    var navEl = document.querySelector('nav');
    var desktop = window.matchMedia('(min-width: 921px)');
    var dial = null;
    var ease = function (t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
    var clamp = function (v) { return Math.max(0, Math.min(1, v)); };

    function layoutDial() {
      [likesIntro, frame, likesList].forEach(function (el) { el.style.transform = ''; el.style.opacity = ''; });
      frame.style.width = frame.style.height = '';
      likesList.classList.remove('dialing');
      if (!desktop.matches) { root.classList.remove('dial'); likesSec.style.removeProperty('--track'); dial = null; showLike('roots'); return; }
      root.classList.add('dial');
      root.style.setProperty('--nav-h', navEl.offsetHeight + 'px');
      var stageH = likesStage.clientHeight;
      var colW = frame.parentNode.clientWidth;
      var h = Math.min(stageH * .64, colW * 1.25);
      frame.style.height = h + 'px';
      frame.style.width = h * .8 + 'px';
      var introTop = 48, introH = likesIntro.offsetHeight;
      var centers = Array.prototype.map.call(likeRows, function (r) { return r.offsetTop + r.offsetHeight / 2; });
      dial = {
        introH: introH,
        frameFrom: introTop + introH + 28,
        frameTo: (stageH - h) / 2,
        listTo: stageH / 2 - centers[0],
        centers: centers,
        stageH: stageH,
        lead: stageH * .9,                                   // scroll spent lifting the intro and centring
        roll: centers[centers.length - 1] - centers[0],     // scroll spent turning the dial
        hold: stageH * .35,                                 // a beat on Wander before the page moves on
        slow: 1.6                                           // scroll per pixel of dial travel
      };
      likesSec.style.setProperty('--track', stageH + dial.lead + dial.roll * dial.slow + dial.hold + 'px');
      runDial();
    }

    function runDial() {
      if (!dial) return;
      var s = navEl.offsetHeight - likesSec.getBoundingClientRect().top;
      var p = ease(clamp(s / dial.lead));
      var d = Math.max(0, Math.min(dial.roll, (s - dial.lead) / dial.slow));
      likesIntro.style.transform = 'translateY(' + (-p * (dial.introH + 80)) + 'px)';
      likesIntro.style.opacity = 1 - clamp(p * 1.4);
      frame.style.transform = 'translateY(' + (dial.frameFrom + (dial.frameTo - dial.frameFrom) * p) + 'px)';
      // the list rises in from below the screen, arriving as the photo settles in the centre
      var enter = ease(clamp((p - .3) / .7));
      likesList.style.opacity = '';
      likesList.style.transform = 'translateY(' + (dial.listTo + (1 - enter) * (dial.stageH - dial.listTo) - d) + 'px)';
      // Smell takes over the frame the moment it lines up with the photo's middle (within a few pixels)
      var fr = frame.getBoundingClientRect(), first = likeRows[0].getBoundingClientRect();
      var dialing = Math.abs(first.top + first.height / 2 - (fr.top + fr.height / 2)) < 14 || d > 0;
      likesList.classList.toggle('dialing', dialing);
      if (!dialing) { showLike('roots'); return; }
      var at = dial.centers[0] + d, best = 0;
      dial.centers.forEach(function (c, k) { if (Math.abs(c - at) < Math.abs(dial.centers[best] - at)) best = k; });
      showLike(likeRows[best].dataset.like);
    }

    addEventListener('scroll', runDial, { passive: true });
    addEventListener('resize', layoutDial);
    document.fonts.ready.then(layoutDial);
    layoutDial();
  })();

  // Copy email
  var copyBtn = document.getElementById('copy-email');
  if (copyBtn) copyBtn.addEventListener('click', function () {
    var btn = this, label = btn.textContent;
    function done(msg) { btn.textContent = msg; setTimeout(function () { btn.textContent = label; }, 1600); }
    try { navigator.clipboard.writeText(btn.dataset.email).then(function () { done('Copied'); }, function () { done(btn.dataset.email); }); } catch (e) { done(btn.dataset.email); }
  });
})();
