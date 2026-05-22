(function () {
  var PREFIXES = ["talentMarkupV2:", "talentMarkup"];

  function clearAllSavedMarkups() {
    var keys = [];
    var i;
    var k;
    var p;
    for (i = 0; i < localStorage.length; i++) {
      k = localStorage.key(i);
      if (!k) continue;
      for (p = 0; p < PREFIXES.length; p++) {
        if (k.indexOf(PREFIXES[p]) === 0) {
          keys.push(k);
          break;
        }
      }
    }
    keys.forEach(function (key) {
      localStorage.removeItem(key);
    });
    return keys.length;
  }

  function mountFab() {
    if (document.getElementById("fab-reset-markup")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "fab-reset-markup";
    btn.className = "fab-reset";
    btn.setAttribute("aria-label", "Сбросить изменения");
    btn.textContent = "Сбросить изменения";
    btn.addEventListener("click", function () {
      clearAllSavedMarkups();
      window.location.reload();
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFab);
  } else {
    mountFab();
  }
})();
