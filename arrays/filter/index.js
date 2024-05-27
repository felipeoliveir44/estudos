// Filter - Filtrar o array, irá sempre retornar um array, com a mesma quantidade de elementos ou menos
// Map - Modificar o array
// Reduce - Reduzir em um único valor

// Retornar os numeros maiores que 10
const numeros = [31, 4512, 21, 1, 4, 6, 1312, 65, 2312, 64, 312, 12]
// Chamar uma função de callback
// Utilizando uma função anonima dentro do filter
// Filter precisa de um true ou false para fazer a validação
const filtro = numeros.filter(function(valor) {
    return valor > 10;
});

// Utilizando arrow function

const filtro2 = numeros.filter((valor) => {
    return valor > 10;
})

// Outro método de utilizar arrow function
// const filtro2 = numeros.filter(valor => valor > 10)

console.log(filtro)
console.log(filtro2)

// Retornar pessoas que tem o nome com 5 letras ou mais
// Retornar pessoas com mais de 30 anos
// Retornar pessoas cujo nome termine com a letra a
const pessoas = [
    {nome: 'Luiz', idade: 10},
    {nome: 'Maria', idade: 30},
    {nome: 'Eduardo', idade: 22},
    {nome: 'Léticia', idade: 40},
    {nome: 'Wendel', idade: 23}
]

const filtroLetras = pessoas.filter((args) => {
    return args.nome.length >= 5
})

const filtroAnos = pessoas.filter((args) => {
    return args.idade >= 30
})

const filtroLetraA = pessoas.filter((args) => {
    return args.nome.toLowerCase().endsWith('a')
})

console.log( filtroLetras)
console.log(filtroAnos)
console.log(filtroLetraA)