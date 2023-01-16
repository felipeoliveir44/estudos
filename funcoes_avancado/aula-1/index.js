// As varias maneiras de declarar funcoes em JS

// Declaracao de funcao (function hoisting - vai elevar as funcoes e varaiveis ao topo do JS) 


falaOi();


function falaOi() {
    console.log('Oi');
}
falaOi();

// First-class objects - Funcao pode ser tratada como dados

const nome = 'Luiz';

// function expression

const souUmDado = function () {
    console.log('Sou um dado');
}

souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua funcao abaixo: ')
    funcao();
}

executaFuncao(souUmDado);

// Arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando');
    }
    // Ou falar() {
    // console.log('Estou falando');
    // }
};

obj.falar();