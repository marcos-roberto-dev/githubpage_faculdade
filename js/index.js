import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
const html = document.querySelector("html");
const theme = document.querySelector("#theme");

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (!document.body.classList.contains("dark")) {
    theme.innerHTML = "light_mode";
    html.setAttribute("data-bs-theme", "dark");
  } else {
    theme.innerHTML = "dark_mode";
    html.setAttribute("data-bs-theme", "light");
  }
});
