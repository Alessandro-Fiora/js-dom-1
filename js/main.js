// * Funzione che accende la luce
const turnOn = () => {
  imgEl.src = onUrl;
  buttonEl.innerText = "Spegni";
  buttonEl.classList.replace("btn-warning", "btn-dark");
};

// * Funzione che spegne la luce
const turnOff = () => {
  imgEl.src = offUrl;
  buttonEl.innerText = "Accendi";
  buttonEl.classList.replace("btn-dark", "btn-warning");
};
// * prendo il nodo del bottone
const buttonEl = document.querySelector("button");

// * prendo il nodo dell'immagine
const imgEl = document.querySelector("img");

const onUrl = "img/yellow_lamp.png";
const offUrl = "img/white_lamp.png";

// * quando clicco sul bottone
buttonEl.addEventListener("click", () => {
  let isOn = imgEl.src.includes(onUrl);
  // * se l'immagine ha la clase 'spenta' invoco la funzione per accenderla, altrimenti quella per spegnerla
  isOn ? turnOff() : turnOn();
  console.log(imgEl.src, isOn);
});
