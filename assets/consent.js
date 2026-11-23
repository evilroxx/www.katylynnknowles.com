(function () {
  'use strict';
  var GTM_ID = 'GTM-KVHGN4ND';
  var CLARITY_ID = 'zhvmk45kdj';
  var PRIVACY_URL = '/privacy/';
  var TEXT = 'This site uses cookies to understand how it is used (Google Analytics and Microsoft Clarity). Accept?';
  var KEY = 'ameya-consent';
  var VERSION = 1;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  function readChoice() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.v === VERSION && (s.choice === 'granted' || s.choice === 'denied')) return s.choice;
    } catch (e) { /* storage unavailable or malformed */ }
    return null;
  }
  function saveChoice(choice) {
    try { localStorage.setItem(KEY, JSON.stringify({ choice: choice, v: VERSION })); } catch (e) { /* ignore */ }
  }

  var stored = readChoice();
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
  if (stored === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' });

  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  var gtm = document.createElement('script');
  gtm.async = true;
  gtm.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
  document.head.appendChild(gtm);

  var clarityLoaded = false;
  function loadClarity() {
    if (clarityLoaded) return;
    clarityLoaded = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  function apply(choice) {
    if (choice === 'granted') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
      loadClarity();
    } else {
      gtag('consent', 'update', { analytics_storage: 'denied' });
      if (clarityLoaded && typeof window.clarity === 'function') window.clarity('consent', false);
    }
  }

  if (stored === 'granted') loadClarity();

  var banner = null;
  function close() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }
  function choose(choice) {
    saveChoice(choice);
    apply(choice);
    close();
  }
  function button(label, kind, choice) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'consent-btn consent-btn--' + kind;
    b.textContent = label;
    b.addEventListener('click', function () { choose(choice); });
    return b;
  }
  function show(focus) {
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    var p = document.createElement('p');
    p.className = 'consent-text';
    p.textContent = TEXT + ' ';
    if (PRIVACY_URL) {
      var a = document.createElement('a');
      a.className = 'consent-link';
      a.href = PRIVACY_URL;
      a.textContent = 'Privacy';
      p.appendChild(a);
    }
    var actions = document.createElement('div');
    actions.className = 'consent-actions';
    var accept = button('Accept', 'accept', 'granted');
    actions.appendChild(accept);
    actions.appendChild(button('Decline', 'decline', 'denied'));
    banner.appendChild(p);
    banner.appendChild(actions);
    document.body.appendChild(banner);
    if (focus) accept.focus();
  }

  function init() {
    if (!stored) show(false);
    document.addEventListener('click', function (e) {
      var t = e.target;
      var el = t && t.closest ? t.closest('[data-consent-open]') : null;
      if (!el) return;
      e.preventDefault();
      show(true);
    });
  }
  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
