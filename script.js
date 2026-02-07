// active nav highlight + timestamps
const navLinks = Array.from(document.querySelectorAll(".navlink"));
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

function setActive() {
  let current = sections[0];
  for (const s of sections) {
    const rect = s.getBoundingClientRect();
    if (rect.top <= 140) current = s;
  }
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current.id}`));
}
document.addEventListener("scroll", setActive, { passive: true });
setActive();

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("updated").textContent = `Last updated ${new Date().toLocaleDateString()}`;
