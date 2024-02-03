// Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

// A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

// Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

// Por fim, ele voltará para o ciclo inicial de perguntas.

// Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

// Por exemplo: “Não foi possível encontrar o item dentro da lista!”

let menu = prompt(
  "deseja acrescentar uma comida?\n1- sim\n2- nao\nResponda somente com numeros"
);
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (menu != "2") {
  if (menu === "1") {
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
  } else if (menu === "2") {
    alert("obrigado por anotar");
  } else if (menu === "3") {
    const removerComida = prompt(
      `sua lista de compras\nfrutas: ${frutas.join(
        ", "
      )}\nlaticinios: ${laticinios.join(", ")}\ncongelados: ${congelados.join(
        ", "
      )}\ndoces: ${doces.join(", ")}\nDigite qual deseja remover`
    );
    if (frutas.indexOf(removerComida) != -1) {
      frutas.splice(frutas.indexOf(removerComida), 1);
      alert(`o item ${removerComida} foi removido com sucesso`);
    } else if (laticinios.indexOf(removerComida) != -1) {
      laticinios.splice(laticinios.indexOf(removerComida), 1);
      alert(`o item ${removerComida} foi removido com sucesso`);
    } else if (congelados.indexOf(removerComida) != -1) {
      congelados.splice(congelados.indexOf(removerComida), 1);
      alert(`o item ${removerComida} foi removido com sucesso`);
    } else if (doces.indexOf(removerComida) != -1) {
      doces.splice(doces.indexOf(removerComida), 1);
      alert(`o item ${removerComida} foi removido com sucesso`);
    }
  }

  menu = prompt(
    "deseja acrescentar mais comida?\n1- sim\n2- nao\n3- remover item\nResponda somente com numeros"
  );
}

alert(
  `sua lista de compras\nfrutas: ${frutas.join(
    ", "
  )}\nlaticinios: ${laticinios.join(", ")}\ncongelados: ${congelados.join(
    ", "
  )}\ndoces: ${doces.join(", ")}`
);
