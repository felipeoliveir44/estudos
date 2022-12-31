// For of

// Um objeto é iterável (iterable), se ele define seu comportamento de iteração, 
// como no caso de quais valores percorridos em um laço do tipo for..of . 
// Alguns tipos embutidos, como o Array , ou o Map , têm um comportamento iterável padrão, 
// enquanto outros tipos (como o Object ) não possuem.

// For classico - Geralmente com iteraveis (array ou strings)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (Iteraveis, arrays ou strings)
const nome = 'Luiz';
const array = ['Luiz', 'Felipe', 'Oliveira'];

for (let valor of nome) {
    console.log(valor)
};


for (let arrays of array) {
    console.log(arrays)
}