// Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

const name = prompt('Qual seu nome?')
const age = prompt('Qual sua idade?')
const language = prompt('Qual linguagem de programação você está estudando?')

alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`)

const likeLanguage = prompt(`Você gosta de estudar ${language}?\nResponda com o número 1 para SIM ou 2 para NÃO.`)

if (likeLanguage == "1") {
  alert(`Muito bom! Continue estudando e você terá muito sucesso.`)
} else if (likeLanguage == "2") {
  alert('Ahh que pena... Já tentou aprender outras linguagens?')
} else {
  alert("numero invalido")
}