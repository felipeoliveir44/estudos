// Variaveis constantes nao mudam seu valor

// Nao pode modificar o valor de uma constante

const nome = 'Luiz';

console.log(nome);

console.log(typeof nome);

// + é concatenação no js

let numero = 5;
let numero2 = 10;

console.log(numero + numero2);

numero = '5';

// No caso o js, junta o '5' com 10 dando o resultado de 510
// JS começa a considerar o 10 como string dando o resultado de string ao utilizar o typeof
console.log( numero + numero2);
console.log( typeof (numero + numero2));
