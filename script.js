// update active nav link on scroll + last updated
const links = Array.from(document.querySelectorAll(".nav a"));
const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

const setActive = () => {
  let current = sections[0];
  for (const s of sections) {
    const rect = s.getBoundingClientRect();
    if (rect.top <= 120) current = s;
  }
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current.id}`));
};

document.addEventListener("scroll", setActive, { passive: true });
setActive();

document.getElementById("updated").textContent = new Date().toLocaleString();
