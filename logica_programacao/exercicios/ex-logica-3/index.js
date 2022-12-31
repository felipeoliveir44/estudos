// Escreva uma funcao que recebe um numero e retorne:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero não é divisivel por 3 e 5 = Retorna o proprio numero
// Checar se o numero é realmente um numero = retorna o proprio numero
// Use a funcao com numeros de 0 a 100


function retorna(a) {
    if (typeof a !== 'number') return a;
    if (a % 3 === 0 && a % 5 === 0 ) return 'FizzBuzz';
    if (a % 3 === 0) return 'Fizz';
    if (a % 5 === 0 ) return 'Buzz';
    return a;

}

console.log('a', retorna('a'));
for(let i = 0; i <= 100;i++) {
    console.log(i, retorna(i))
}