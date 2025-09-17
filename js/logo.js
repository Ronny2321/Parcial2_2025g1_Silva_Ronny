document.addEventListener("DOMContentLoaded", () => {
  const closingBrace = document.getElementById("closing");
  const letters = document.querySelectorAll(".reveal-char");

  function checkPosition() {
    const transformMatrix = closingBrace.getCTM();
    const braceX = transformMatrix.e; 

    letters.forEach((letter) => {
      const letterX = letter.getBBox().x;

      if (braceX > letterX + 5) {
        letter.classList.add("visible");
      }
    });

    requestAnimationFrame(checkPosition);
  }

  requestAnimationFrame(checkPosition);
});
