// Loaded in <head> on every page, before anything is drawn.
(function () {
  var root = document.documentElement;

  // Light/dark mode: follow the system setting until the visitor picks one with the toggle.
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch (e) {}

  var systemDark = matchMedia("(prefers-color-scheme: dark)");
  function isDark() {
    return root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (button) {
      var label = function () {
        button.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
        button.title = button.getAttribute("aria-label");
      };
      label();
      systemDark.addEventListener("change", label);
      button.addEventListener("click", function () {
        var next = isDark() ? "light" : "dark";
        root.dataset.theme = next;
        try {
          localStorage.setItem("theme", next);
        } catch (e) {}
        label();
      });
    }

    // Opened straight from the folder (file://)? Point folder links at their index.html.
    if (location.protocol === "file:") {
      for (var i = 0; i < document.links.length; i++) {
        var a = document.links[i];
        var href = a.getAttribute("href");
        if (href.slice(-1) === "/" && !/^[a-z]+:/i.test(href)) a.href = href + "index.html";
      }
    }
  });
})();
