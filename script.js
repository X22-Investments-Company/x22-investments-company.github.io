const html = document.documentElement;
const toggle = document.getElementById("themeToggle");
const logoX = document.getElementById("logoX");

function setTheme(mode) {
  const isDark = mode === "dark";
  html.classList.toggle("dark", isDark);
  toggle.textContent = isDark ? "Light" : "Dark";

  logoX.src = isDark
    ? "./assets/X22_logo_abstract_white.svg"
    : "./assets/X22_logo_abstract_black.svg";
}

const saved = localStorage.getItem("x22-theme");
if (saved) {
  setTheme(saved);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

toggle.addEventListener("click", () => {
  const next = html.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("x22-theme", next);
  setTheme(next);
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));