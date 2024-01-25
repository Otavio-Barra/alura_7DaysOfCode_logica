// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.


alert("Bem vindo ao adivinhe o numero");
let tentativas = 3;
let numeroAleatorio = parseInt(Math.random() * 10 + 1);
let chute;
console.log(numeroAleatorio);
while (tentativas >= 0) {
  chute = Number(prompt("chute um numero"));
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  if (chute == numeroAleatorio) {
    alert(`voce acertou o numero era ${numeroAleatorio}`);
    break
  } else if (tentativas > 0) {
    alert(`errou! restam ${tentativas} ${palavraTentativa}`);
    tentativas--;
  } else {
    alert(`infelizmente nao foi dessa vez o numero era ${numeroAleatorio}`);
    tentativas--;
  };
};


