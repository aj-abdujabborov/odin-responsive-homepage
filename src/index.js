import "./styles/index.scss";

const projects = [...document.querySelectorAll(".project .info h2")];
const projectCardLinksTemplate = document.querySelector(
  ".templates .external-links",
);

projects.forEach((node) => {
  const inst = projectCardLinksTemplate.cloneNode(true);
  node.after(inst);

  const projectTitle = node.textContent;
  const githubIcon = inst.querySelector("a.github-icon");
  const newTabIcon = inst.querySelector("a.new-tab-icon");

  githubIcon.setAttribute("aria-label", `See ${projectTitle} on Github`);
  newTabIcon.setAttribute("aria-label", `See ${projectTitle}`);
});

// Color modes
const colorModeButton = document.querySelector("button.power-button");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark-theme") {
  document.body.classList.toggle("dark-theme");
} else if (savedTheme === "light-theme") {
  document.body.classList.toggle("light-theme");
}

colorModeButton.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const bodyClassList = document.body.classList;
  if (prefersDark) {
    bodyClassList.toggle("light-theme");
    bodyClassList.remove("dark-theme");
  } else {
    bodyClassList.toggle("dark-theme");
    bodyClassList.remove("light-theme");
  }

  console.log();
  localStorage.setItem("theme", bodyClassList[0] || "");
});
