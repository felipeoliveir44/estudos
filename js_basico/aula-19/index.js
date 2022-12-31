// Dados primitivos (Imutaveis) - String, number, boolean, undefined, null(bigint, symbol) - Valores copiados

// Referência (mutavel) - array, object, function - Passados por referencia

let a = [1,2,3];
let b = [...a];
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop()
console.log(a,b);

a.push('Luiz');
console.log(c);


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Felipe'
};

const bb = pessoa;

b.nome = 'Joao';

console.log(pessoa);
console.log(bb);

