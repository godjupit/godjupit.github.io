const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
function updateThemeButton() {
  const dark = root.dataset.theme === "dark";
  themeButton.setAttribute("aria-label", `切换至${dark ? "浅色" : "深色"}模式`);
  themeButton.title = dark ? "切换至浅色模式" : "切换至深色模式";
}
themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("portfolio-theme", root.dataset.theme); } catch {}
  updateThemeButton();
});
updateThemeButton();
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
systemTheme.addEventListener("change", (event) => {
  let saved = null;
  try { saved = localStorage.getItem("portfolio-theme"); } catch {}
  if (!saved) {
    root.dataset.theme = event.matches ? "dark" : "light";
    updateThemeButton();
  }
});
