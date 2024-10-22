const buttonEl = document.querySelector("button");

const imgEl = document.querySelector("img");

buttonEl.addEventListener("click", () => {
  if (imgEl.classList.contains("spenta")) {
    imgEl.setAttribute("src", "./img/yellow_lamp.png");
    imgEl.classList = "accesa";
  } else {
    imgEl.setAttribute("src", "./img/white_lamp.png");
    imgEl.classList = "spenta";
  }
});
