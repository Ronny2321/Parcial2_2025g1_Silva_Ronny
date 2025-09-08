document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleTheme");
  let isLight = false;
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    isLight = !isLight;
    if (isLight) {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
      toggle.innerHTML = '<i class="bi bi-moon"></i>';
      toggle.title = "Cambiar a modo oscuro";
    } else {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      toggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
      toggle.title = "Cambiar a modo claro";
    }
  });
  document.body.classList.add("theme-dark");
});
