// Imprimir coisas no console:
// console.log("Hello, world!")

// Declarando variáveis:

var umaVar = "global"  // variável global
console.log(umaVar)
umaVar = "sou mutável :D"
console.log(umaVar)

let outraVar = "escopada :D"  // variável escopada mutável
console.log(outraVar)
outraVar = "e mutável tbm :D"
console.log(outraVar)

const constante = "Eu sou escopada. E fixa."  // variável escopada e fixa.
console.log(constante)
// constante = "outro valor :("  // não funciona!!! Erro: Assignment to constant variable.
// console.log(constante)


// Condições:

let isRaining = true

if (isRaining) {
  console.log("Pega o guarda-chuva!")
} else {
  console.log("Pega o óculos de Sol!")
}

// No JS, valores diferentes de True ou False, que são considerados verdadeiro ou falso em determinadas situações
// truthy: qualquer num diferente de 0, string com algum valor
// falsy: 0, string vazia
// https://medium.com/swlh/what-are-truthy-and-falsy-values-in-javascript-21f117442c58
// switch-case:


// Loops:

for (let i = 0; i < 5; i++) {
  console.log("Número:", i)
}

let i = "5"
while (i === 5) { // comparação estrita
  console.log("Número:", i)
  i--
}

let j = 1
do {
  console.log("Número:", j)
  j++
} while(j < 0)

// Arrays:

const array = [1, 2, 3, 4, 5] // usar const para não mudar o tipo!
console.log(array)
array.push(6)
array.unshift(0)
console.log(array)

const fruits = ['maca', 'banana', 'lagrimas']
console.log(fruits)

const coisasAleatorias = ['martelo', 5, 'marte']
console.log(coisasAleatorias)

const objetos = [{name: 'gabs', age: 19}, {name: 'isa', age: 20}]
console.log(objetos)


// Objetos:

const gabi = {
  name: 'Gabriella',
  age: 19,
  graduation: 'Engenharia Computacional',
  hometown: 'Tombos'
}

console.log(gabi)

class Pessoa {
  name = ''
  age = 0
  graduation = ''
  hometown = ''

  calculateBirthYear() {
    return (new Date().getFullYear() - this.age)
  }

  constructor(name, age, graduation, hometown) {
    this.name = name
    this.age = age
    this.graduation = graduation
    this.hometown = hometown
  }
}

const isadora = new Pessoa('Isadora', 20, 'CC', 'JF')
console.log(isadora)
console.log(isadora.calculateBirthYear())


// Funções:

function sum(a, b) {
  return a + b
}

const subtract = (a,b) => a - b

const multiply = function (a, b) {
  return a*b
}

console.log(sum(5,2))
console.log(subtract(6, 2))
console.log(multiply(6, 2))


// DOM:

const titulo = document.querySelector('#titulo')
const lista = document.getElementById('lista')

titulo.innerText = 'AAA'

lista.innerHTML = '<li>Gabi é legal :D</li>'
lista.innerHTML += '<li>Isa tbm é legal :D</li>'
