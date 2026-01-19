
  const favButtons = document.querySelectorAll(".favorite-icon");

  favButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("filled")) {
        btn.classList.remove("filled");
        btn.innerHTML = "&#9825;"; // ♡
      } else {
        btn.classList.add("filled");
        btn.innerHTML = "&#10084;"; // ❤
      }
    });
  });
