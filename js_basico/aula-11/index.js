/* 
Operadores Aritmeticos, de atribuição e incremento
 + adicao / concatenacao
 - / *
 ** - Potenciação
 % resto de divisao
*/

const num1 = 2;
const num2 = 10;

console.log(num1 + num2);


let contador = 1;
contador++; // 2
contador++; // 3

console.log(++contador); // 4

let contador1 = 0;
contador1 += 2 // contador = contador +2
contador1 += 2 // contador = contador +2
contador1 += 2 // contador = contador +2

console.log(contador1);

// NaN - not a number

let num3 = 10;
let num4 = '5';
console.log(num3 + num4);

console.log(typeof num4);

// Utilizando parseInt, a variavel num4 é convertida para inteiro
// JS nao faz distinção de numeros inteiros para floats

num4 = parseInt('5');

console.log(typeof num4);

// Utilizando parseFloat, a variavel num4 é convertida para float (Numero com casas decimais)

num3 = 15;
num4 = parseFloat('5.10');

console.log(num3 + num4);
console.log(typeof num4);

// Utilizando number, O js irá se 'virar' para converter

num4 = Number('5');

console.log(num4);






