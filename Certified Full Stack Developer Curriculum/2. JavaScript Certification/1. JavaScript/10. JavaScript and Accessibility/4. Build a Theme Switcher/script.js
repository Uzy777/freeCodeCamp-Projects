
const themes = [
  { name: "light", message: "Hello sunshine — Light theme is on!" },
  { name: "dark", message: "The night is yours — Dark theme is on!" }
];

let currentContent = ""

const themeSwitcherEl = document.getElementById("theme-switcher-button");
const dropdownEl = document.getElementById("theme-dropdown");
const statusEl = document.getElementById("status");
const bodyEl = document.body;


function openMenu() {
  dropdownEl.hidden = false;
  themeSwitcherEl.setAttribute("aria-expanded", true)
}

function closeMenu() {
  dropdownEl.hidden = true
  themeSwitcherEl.setAttribute("aria-expanded", false)
}

themeSwitcherEl.addEventListener("click", () => {
  if (dropdownEl.hidden) {
    openMenu();
  } else {
    closeMenu();
  }
})


dropdownEl.addEventListener("click", (e) => {
  const item = e.target.closest('li[role="menuitem"]');
  if (!item) return;

  const chosenName = item.textContent.trim().toLowerCase();

  const theme = themes.find(t => t.name === chosenName);
  if (!theme) return;

  const prevThemeClasses = [...bodyEl.classList].filter(c => c.startsWith("theme-"));
  if (prevThemeClasses.length) {
    bodyEl.classList.remove(...prevThemeClasses);
  }

  bodyEl.classList.add(`theme-${theme.name}`);

  statusEl.textContent = theme.message;

  closeMenu();
  themeSwitcherEl.focus();
});