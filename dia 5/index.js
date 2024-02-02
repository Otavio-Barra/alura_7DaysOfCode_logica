// Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

// O programa deverá imprimir, por exemplo:

// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho

let menu = prompt(
  "deseja acrescentar uma comida?\n1- sim\n2- nao\nResponda somente com numeros"
);
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (menu === "1") {
  const nomeComida = prompt("qual comida quer adicionar?");
  const categoriaComida = prompt(
    `Em qual categoria ${nomeComida} se encaixa\n1- frutas\n2- laticinios\n3- congelados\n4- doces\nResponda com o numero equivalente a categoria`
  );
  if (categoriaComida === "1") {
    alert(`adicionado ${nomeComida} em frutas`);
    frutas.push(nomeComida);
  } else if (categoriaComida === "2") {
    alert(`adicionado ${nomeComida} em laticinios`);
    laticinios.push(nomeComida);
  } else if (categoriaComida === "3") {
    alert(`adicionado ${nomeComida} em congelados`);
    congelados.push(nomeComida);
  } else if (categoriaComida === "4") {
    alert(`adicionado ${nomeComida} em doces`);
    doces.push(nomeComida);
  } else {
    alert("categoria nao encontrada selecione um numero valido");
  }
  menu = prompt(
    "deseja acrescentar mais comida?\n1- sim\n2- nao\nResponda somente com numeros"
  );
}

alert(
  `sua lista de compras\nfrutas: ${frutas.join(
    ", "
  )}\nlaticinios: ${laticinios.join(", ")}\ncongelados: ${congelados.join(
    ", "
  )}\ndoces: ${doces.join(", ")}`
);
