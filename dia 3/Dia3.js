// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

const areaActivity = Number(prompt('Qual area quer seguir?\n1- Front-end\n2- Back-end\nResponda somente com numeros'));

if (areaActivity == 1) {
  prompt("Tem interesse em?\n1- React\n2- Vue");
} else if (areaActivity == 2) {
  prompt("Tem interesse em?\n1- C#\n2- Java");
}

const area = areaActivity == 1 ? 'front-end' : 'back-end';

const choiceSpecialty = Number(prompt(`que legal que foi por esse caminho de ${area}, voce deseja se especializar na area ou quer ser full-stack?\n1- Especializar\n2- Full-stack`));

if (choiceSpecialty == 1) {
  alert(`Bacana sua escolha de seguir esse caminho de ${area} espero que de certo`);
} else if (choiceSpecialty == 2) {
  alert("Bacana sua escolha de ser full-stack espero que de certo");
}

let quest = confirm("gostaria de aprender mais alguma tecnologia?");
let technology;
let technologyList = [];

do {
  technology = prompt("Qual o nome dessa tecnologia?");
  technologyList.push(technology)
  quest = confirm('Tem mais alguma tecnologia que você gostaria de aprender?');
} while (quest);

alert(`legal voce quer conhecer as seguintes tecnologias\n${technologyList}`)