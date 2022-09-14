let annoNascita = Number(prompt("Inserisci il tuo anno di nascita"));
let price;
let x = calcoloEta(2022, annoNascita);
function calcoloEta(a, b) {
  return a - b;
}
console.log(x);
let prezzoBiglietto = prompt("In che stagione intendi visitare il parco?");
if (prezzoBiglietto == "estate" || prezzoBiglietto == "primavera") {
  price = 35;
} else {
  price = 20;
}
if (x < 10) {
  price = 0;
} else if ((x > 10 && x < 18) || x >= 65) {
  price = price - (price * 20) / 100;
}
console.log(`Alla cassa pagherai ${price}€`);
