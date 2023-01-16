// Parametros da funcao

// argumentos que sustenta todos os argumentos enviados
function funcao(a,b,c) {
    console.log('oie');

    
    console.log(arguments[5]); // Caso envie um argumento sem um parametro, ele sera salvo na variavel arguments

    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total,a,b,c);
}


funcao('Valor', 1, 2, 3, 4 ,5);

function funcao2(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao2(2,10,3)
// Para pegar o valor de b padrao
funcao2(2,undefined,3)

// rest operador = ...numeros
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }
    console.log(acumulador);
}

conta('+', 0, 1,2,3);