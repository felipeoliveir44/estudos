// Atribuicao via desestruturacao - Objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Felipe',
    idade: 19,
    endereco: {
        rua: 'Av Brasil',
        numero: 200
    }
}

const {nome} = pessoa;

console.log(nome);

const {nome: teste, sobrenome} = pessoa;

console.log(teste,sobrenome); 

const {endereco: {rua, numero} } = pessoa;

console.log(rua, numero);

const {endereco: {rua: r }} = pessoa;

console.log(r);

const {nome: nome1, ...resto } = pessoa;
console.log(nome1, resto);