// Objeto math

let num1 = 9;
// let num2 = Math.floor(num1); // Arredondando para baixo
// let num2 = Math.ceil(num1); // Arredondando para cima
let num2 = Math.round(num1); // Arredondamento automático

console.log(num2); // + de 50 = 10 / - de 50 = 9

console.log(Math.max(1,2,3,4,-10, -335, 35, 20, 321, 9,8)); // Retorna o maior número da sequencia
console.log(Math.min(1,2,3,4,-10, -335, 35, 20, 321, 9,8)); // Retorna o menor número da sequencia

const aleatorio = Math.random(); // Numeros aleatorios entre 0 e 1

const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5); // Numeros aleatorios entre 10 e 5

console.log(aleatorio2);

console.log(Math.PI); // Valor de PI
console.log(Math.pow(2,10)); // Potenciação
console.log(2 ** 10); // É melhor realizar a conta desse jeito do que utilizar pow

console.log(num1 ** (1/2)); // Para saber a raiz quadrada de 9
console.log(num1 ** 0.5); // Raiz quadrada
