// Pagefind 検索 UI に差し替える（mdBook 標準の elasticlunr は日本語の部分一致に弱いため）
(function () {
  const PAGEFIND_UI_JS = "/pagefind/pagefind-ui.js";
  const PAGEFIND_UI_CSS = "/pagefind/pagefind-ui.css";

  function injectStyle() {
    const style = document.createElement("style");
    style.textContent = `
      #pagefind-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        z-index: 10000;
        padding: 5vh 16px 16px;
        overflow-y: auto;
      }
      #pagefind-overlay.open { display: block; }
      #pagefind-box {
        max-width: 760px;
        margin: 0 auto;
        background: var(--bg, #fff);
        color: var(--fg, #000);
        padding: 20px 24px 24px;
        border-radius: 10px;
        box-shadow: 0 12px 50px rgba(0, 0, 0, 0.45);
        border: 1px solid var(--sidebar-bg, #888);

        /* Pagefind UI の色を mdBook テーマに合わせる */
        --pagefind-ui-primary: var(--links, #5cb1ff);
        --pagefind-ui-text: var(--fg, #e6e6e6);
        --pagefind-ui-background: var(--bg, #161923);
        --pagefind-ui-border: var(--sidebar-bg, #3a3f4e);
        --pagefind-ui-tag: var(--sidebar-bg, #3a3f4e);
        --pagefind-ui-border-width: 1px;
        --pagefind-ui-border-radius: 6px;
        --pagefind-ui-font: inherit;
      }
      #pagefind-box .pagefind-ui__search-input {
        color: var(--fg, #e6e6e6) !important;
        background: var(--bg, #161923) !important;
        border-color: var(--sidebar-bg, #3a3f4e) !important;
      }
      #pagefind-box .pagefind-ui__search-input::placeholder {
        color: var(--fg, #888) !important;
        opacity: 0.55;
      }
      #pagefind-box .pagefind-ui__search-clear {
        background: transparent !important;
        color: var(--fg, #e6e6e6) !important;
      }
      #pagefind-box .pagefind-ui__result-title a {
        color: var(--links, #5cb1ff) !important;
      }
      #pagefind-box .pagefind-ui__result-excerpt,
      #pagefind-box .pagefind-ui__message,
      #pagefind-box .pagefind-ui__result-link {
        color: var(--fg, #e6e6e6) !important;
      }
      #pagefind-box mark {
        background: var(--links, #5cb1ff) !important;
        color: var(--bg, #161923) !important;
        padding: 0 2px;
        border-radius: 2px;
      }
      #pagefind-close {
        float: right;
        background: transparent;
        border: 0;
        color: inherit;
        font-size: 1.4rem;
        cursor: pointer;
        line-height: 1;
        padding: 0 4px;
      }
      .pagefind-ui__search-input {
        font-size: 1.05rem !important;
      }
      .pagefind-ui__result-title a {
        color: var(--links, #0074d9) !important;
      }
      /* mdBook 標準検索 UI を隠す */
      #searchbar-outer, #searchresults-outer,
      #mdbook-searchbar-outer, #mdbook-searchresults-outer,
      #mdbook-search-wrapper { display: none !important; }
    `;
    document.head.appendChild(style);
  }

  function buildOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "pagefind-overlay";
    overlay.innerHTML = `
      <div id="pagefind-box">
        <button id="pagefind-close" aria-label="閉じる">×</button>
        <div id="pagefind-ui"></div>
      </div>`;
    document.body.appendChild(overlay);

    function open() {
      overlay.classList.add("open");
      setTimeout(() => {
        const input = overlay.querySelector(".pagefind-ui__search-input");
        if (input) input.focus();
      }, 80);
    }
    function close() {
      overlay.classList.remove("open");
    }

    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.getElementById("pagefind-close").addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if ((e.key === "s" || e.key === "/") && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        open();
      }
    });

    // mdBook 検索ボタンを乗っ取る（新旧ID両対応）
    const btn = document.getElementById("mdbook-search-toggle") || document.getElementById("search-toggle");
    if (btn) {
      const clone = btn.cloneNode(true);
      btn.parentNode.replaceChild(clone, btn);
      clone.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        open();
      });
    }

    return { open, close };
  }

  function loadPagefind() {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = PAGEFIND_UI_CSS;
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.src = PAGEFIND_UI_JS;
    script.onload = () => {
      if (typeof PagefindUI === "undefined") return;
      new PagefindUI({
        element: "#pagefind-ui",
        showImages: false,
        showSubResults: true,
        resetStyles: false,
        translations: {
          placeholder: "サイト内を検索...",
          clear_search: "クリア",
          load_more: "さらに表示",
          search_label: "検索",
          filters_label: "絞り込み",
          zero_results: "[SEARCH_TERM] に該当する結果はありません",
          many_results: "[COUNT] 件ヒット: [SEARCH_TERM]",
          one_result: "[COUNT] 件ヒット: [SEARCH_TERM]",
          alt_search: "[SEARCH_TERM] の結果なし。代わりに [DIFFERENT_TERM] を表示",
          search_suggestion: "[SEARCH_TERM] の結果なし。別のキーワードをお試しください",
          searching: "[SEARCH_TERM] を検索中...",
        },
      });
    };
    document.head.appendChild(script);
  }

  function init() {
    injectStyle();
    buildOverlay();
    loadPagefind();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
