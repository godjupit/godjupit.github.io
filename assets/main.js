// Add a public repository URL to show its link on the matching project card.
// Keep a value empty until the project is ready to share.
const projectLinks = {
  llm: "",
  cuda: "",
  agent: "",
  xv6: "",
};

for (const [project, url] of Object.entries(projectLinks)) {
  if (!url) continue;
  const link = document.querySelector(`[data-project="${project}"] .project-link`);
  if (link) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.hidden = false;
  }
}

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = savedTheme || (systemPrefersDark ? "dark" : "light");

function updateThemeButton() {
  const dark = root.dataset.theme === "dark";
  themeButton.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
  themeButton.querySelector(".theme-icon").textContent = dark ? "☼" : "◐";
}

themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", root.dataset.theme);
  updateThemeButton();
});

updateThemeButton();
document.querySelector("#year").textContent = new Date().getFullYear();
