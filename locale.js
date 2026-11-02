// Pages are written in UK English. For US visitors, swap each element marked
// data-us="…" to its US wording. ?lang=en-US or ?lang=en-GB forces a version.
(function () {
  var forced = new URLSearchParams(location.search).get("lang");
  var language = forced || (navigator.languages && navigator.languages[0]) || navigator.language || "";
  if (!/^en-US$/i.test(language)) return;

  document.documentElement.lang = "en-US";
  document.querySelectorAll("[data-us]").forEach(function (el) {
    el.textContent = el.getAttribute("data-us");
  });
})();
