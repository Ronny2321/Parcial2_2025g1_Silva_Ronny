document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  ["nombre", "correo", "asunto", "mensaje"].forEach(function (id) {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.classList.add("is-invalid");
      valid = false;
    } else {
      el.classList.remove("is-invalid");
    }
  });
  const msg = document.getElementById("formMsg");
  if (valid) {
    msg.innerHTML =
      '<div class="alert alert-success">¡Mensaje enviado correctamente!</div>';
    this.reset();
  } else {
    msg.innerHTML =
      '<div class="alert alert-danger">Por favor, completa todos los campos.</div>';
  }
});
