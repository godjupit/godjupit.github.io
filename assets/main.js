// 填写真实公开仓库地址后，对应的项目详情页会显示“查看源码”。
const projectLinks = {
  llm: "",
  cuda: "",
  agent: "",
  xv6: "",
};

for (const [project, url] of Object.entries(projectLinks)) {
  if (!url) continue;
  for (const link of document.querySelectorAll(`[data-project="${project}"] .repository-link`)) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.hidden = false;
  }
}

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
document.querySelector("#year").textContent = new Date().getFullYear();
