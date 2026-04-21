(function() {
  function addFooter() {
    var main = document.querySelector('main');
    if (!main) return;
    if (document.getElementById('site-footer')) return;
    var footer = document.createElement('footer');
    footer.id = 'site-footer';
    footer.innerHTML =
      '<nav>' +
        '<a href="https://gameguidejp.com/">GameGuide JP</a>' +
        '<span class="sep">|</span>' +
        '<a href="https://gameguidejp.com/privacy.html">プライバシーポリシー</a>' +
        '<span class="sep">|</span>' +
        '<a href="https://gameguidejp.com/about.html">運営者情報</a>' +
        '<span class="sep">|</span>' +
        '<a href="https://gameguidejp.com/contact.html">お問い合わせ</a>' +
      '</nav>' +
      '<p class="copyright">&copy; 2025 GameGuide JP</p>';
    main.appendChild(footer);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addFooter);
  } else {
    addFooter();
  }
  var observer = new MutationObserver(function() { addFooter(); });
  observer.observe(document.body, { childList: true, subtree: true });
})();
