// Lorenzo Ambrosini — portfolio 2026
// Theme toggle (follows the system by default, remembers a manual choice)
// and the weekday in the homepage greeting.

(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.dataset.theme || (media.matches ? "dark" : "light");
  }

  function updateToggle() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    var theme = currentTheme();
    var next = theme === "dark" ? "light" : "dark";
    btn.querySelector(".text").textContent = theme === "dark" ? "Dark" : "Light";
    btn.setAttribute("aria-label", "Switch to " + next + " theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#141417" : "#f7f6f3");
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (err) {}
    updateToggle();
  });

  if (media.addEventListener) {
    media.addEventListener("change", updateToggle);
  }

  function setDay() {
    var el = document.getElementById("day");
    if (!el) return;
    el.textContent = new Date().toLocaleDateString("en-GB", { weekday: "long" });
  }

  // Age from birth date in the page (data-born="YYYY-MM-DD"), so it updates by itself
  function setAge() {
    var el = document.getElementById("age");
    if (!el) return;
    var parts = (el.getAttribute("data-born") || "").split("-").map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return;
    var now = new Date();
    var age = now.getFullYear() - parts[0];
    var hadBirthday =
      now.getMonth() + 1 > parts[1] ||
      (now.getMonth() + 1 === parts[1] && now.getDate() >= parts[2]);
    if (!hadBirthday) age -= 1;
    el.textContent = age;
  }

  function init() {
    setAge();
    updateToggle();
    setDay();
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
