!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.stop.disabled=!0,t.start.addEventListener("click",(function(){interval=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearTimeout(interval),t.start.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.d8c59032.js.map
