const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João'
console.log(nomes);

delete nomes[2];
console.log(nomes);

// Outro jeito de criar array

const frutas = new Array('Maça', 'Banana')
console.log(frutas)

// Spread operator é usado para expandir elementos de arrays ou objetos em locais onde múltiplos elementos ou argumentos são esperados.

// Rest operator é usado para coletar todos os argumentos restantes em uma função ou para capturar o restante dos elementos/propriedades em desestruturações.

// Uso comum do spread operator é copiar arrays

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

// Concatenar arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Adicionar elementos a um array

const array = [3, 4, 5];
const newArray = [1, 2, ...array, 6, 7];

console.log(newArray); // [1, 2, 3, 4, 5, 6, 7]

// Remover o ultimo elemento do array

console.log('--------------------------------')

const teste = [1,2,3];
console.log(teste)
const removido = teste.pop()
console.log(removido)

// Remover o primeiro elemento do array

const teste2 = [1,2,3]
const removido1 = teste2.shift()
console.log(removido1)

// Adicionar elemento ao array

teste.push(4)
console.log("Adicionado: " + teste)

// Adicionar no começo do array

teste.unshift(5)
console.log("Adicionado: " + teste)
