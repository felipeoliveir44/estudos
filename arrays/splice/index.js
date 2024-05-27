const nomes = ['Luiz', 'Felipe', 'Ana'];

// nomes.splice(indice, delete)
// Indice - A partir de qual elemento começar
// Delete - Quantos indices remover
nomes.splice(0, 1);

console.log(nomes)


// Utilizando numeros negativos, a contagem começa de trás para frente, inves da frente para trás

const frutas = ['Maça', 'Pera', 'Morango', 'Manga']

frutas.splice(-1, 1)

console.log(frutas)