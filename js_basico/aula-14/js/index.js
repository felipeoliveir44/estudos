// Numbers
let num1 = 10.3232189321; //number
let num2 = 2.5; // number

// console.log(num1.toString() + num2);
// console.log(typeof num1);
// num1 = num1.toString();
// console.log(typeof num1);

console.log(num1.toFixed(2)); // Para arrendoar casas decimais

console.log(Number.isInteger(num1)); // Verificar se o numero é inteiro - retorna true ou false

num1 = 10;

console.log(Number.isInteger(num1));

let temp = num1 * '5';

if (Number.isNaN(temp)) {
    alert('Conta inválida');
}
else {
    alert(`O resultado é: ${temp}`);
}

