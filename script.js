alert("Bem vindo(a) ao jogo de números");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
  numeroChute = prompt(`Digite um número de 1 a ${numeroMaximo}`);

  if (numeroChute == numeroSecreto) {
    break;
  } else {
    if (numeroChute > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroChute}`);
    } else {
      alert(`O número secreto é maior que ${numeroChute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns, você acertou! o numero secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`
);
