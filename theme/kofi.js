(function() {
  function addKofiLink() {
    var sidebar = document.querySelector('.sidebar-scrollbox, mdbook-sidebar-scrollbox');
    if (!sidebar) return;
    if (document.getElementById('kofi-sidebar')) return;
    var div = document.createElement('div');
    div.id = 'kofi-sidebar';
    div.innerHTML = '<a href="https://ko-fi.com/gameguidejp" target="_blank" rel="noopener">☕ サポートする</a>';
    sidebar.appendChild(div);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addKofiLink);
  } else {
    addKofiLink();
  }
  var observer = new MutationObserver(function() { addKofiLink(); });
  observer.observe(document.body, { childList: true, subtree: true });
})();
