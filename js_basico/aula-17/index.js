// Funções

function saudacao() {
    console.log('Olá');
}

saudacao();

function soma(a, b) { // Com parametros e return (Com return podemos adicionar o resultado da funcao em uma variavel)

    let resultado = a + b;
    
        if (resultado % 2 == 0 ) {
            return `O número ${resultado} é par!`;
        }else {
            return `O número ${resultado} é ímpar!`;
        }

}

const resultadoFuncao = soma(1,5);

console.log(resultadoFuncao);

// Função anonima

// const raiz = function(n) {
//     return n ** 0.5;
// };

// console.log(raiz(9)); // 3
// console.log(raiz(16)); // 4
// console.log(raiz(25)); // 5


// Utilizando arrow function

const raiz = n => n ** 0.5;

console.log(raiz(9));



