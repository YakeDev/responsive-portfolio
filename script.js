function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");
  htmlElement.setAttribute(
    "data-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
}
