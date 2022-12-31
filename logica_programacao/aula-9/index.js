// Atribuicao via desestruturacao - Arrays

let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b,c,a];
// Desestruturacao / Atribuicao
[a,b,c] = letras;

console.log(a,b,c);
// --------------------

const numeros = [10 , 20 , 30, 40 , 50, 60, 70, 80 ,90];

// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

// ... =  Pegar resto de alguma coisa - rest/ Usar distribuir alguma coisa  - Spread
const [primeiroNumero, segundoNumero, ...resto ] = numeros; // 10 20
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const [um, , , quarto] = numeros;
console.log(um, quarto);

// Indice             0        1        2
//                  0 1 2    0 1 2    0 1 2

const numeros1 = [ [1,2,3], [4,5,6], [7,8,9]];

console.log(numeros1[1][1]); // 5

const [lista1, lista2, lista3] = numeros1;

console.log(lista2[1]); //5