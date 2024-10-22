// * Funzione che accende la luce
const turnOn = (light, button) => {
  light.setAttribute("src", "./img/yellow_lamp.png");
  light.classList = "accesa";
  button.innerText = "Spegni";
  button.classList.replace("btn-warning", "btn-dark");
};

// * Funzione che spegne la luce
const turnOff = (light, button) => {
  light.setAttribute("src", "./img/white_lamp.png");
  light.classList = "spenta";
  button.innerText = "Accendi";
  button.classList.replace("btn-dark", "btn-warning");
};

// * prendo il nodo del bottone
const buttonEl = document.querySelector("button");

// * prendo il nodo dell'immagine
const imgEl = document.querySelector("img");

// * quando clicco sul bottone
buttonEl.addEventListener("click", () => {
  // * se l'immagine ha la clase 'spenta' invoco la funzione per accenderla, altrimenti quella per spegnerla
  let isOff = !imgEl.classList.contains("accesa");
  isOff ? turnOn(imgEl, buttonEl) : turnOff(imgEl, buttonEl);
});
