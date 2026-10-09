// Runs in <head> before the page is drawn, so there's no flash of the wrong theme.
// Uses the visitor's saved choice from the theme toggle, or else their OS setting.
(function () {
  var saved = null;
  try {
    saved = localStorage.getItem('theme');
  } catch (error) {
    // Storage can be blocked (e.g. some private modes); fall back to the OS setting.
  }
  var theme =
    saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  document.documentElement.dataset.theme = theme;
})();
