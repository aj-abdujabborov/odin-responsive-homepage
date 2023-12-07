import "./index.scss";

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
