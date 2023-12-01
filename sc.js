function flipCoin() {
    const coin = document.querySelector(".coin");
    const result = document.querySelector("#result");
    const flipButton = document.querySelector(".flip");
    const random = Math.floor(Math.random() * 2);
    coin.classList.toggle("flip");
    flipButton.disabled = true;
    setTimeout(() => {
      if (random === 0) {
        coin.classList.remove("flip");
        result.textContent = "Small";
      } else {
        coin.classList.remove("flip");
        result.textContent = "BIG";
      }
      result.style.display = "block";
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
      flipButton.disabled = false;
    }, 3000);
  }
  