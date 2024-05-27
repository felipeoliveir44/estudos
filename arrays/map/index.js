// Map -> cria um novo array com os resultados da chamada de uma função

const numeros = [5,3,1,321,32, 12, 34]

const numerosDobro = numeros.map((valor) => {
    return valor * 2
})

console.log(numerosDobro)

const pessoas = [
    {nome: 'Luiz', idade: 10},
    {nome: 'Maria', idade: 30},
    {nome: 'Eduardo', idade: 22},
    {nome: 'Léticia', idade: 40},
    {nome: 'Wendel', idade: 23}
]

const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade)

const adicionandoId = pessoas.map((obj, indice) => {
    obj.id = indice;
    return obj;
})

console.log(adicionandoId)