// Array

// Array é como uma lista
// Arrays tambem sao indexados
// São indexados por elementos
                //0        1         2

const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

// Editar valores do array

alunos[0] = 'Eduardo';

console.log(alunos[0]);

//  Adicionar mais valores no array - Utilizando array.push coloca +1 valor no final do array


alunos[3] = 'Otávio';

alunos.push('Teste');

console.log(alunos);

// Adicionar no começo

alunos.unshift('Teste2');

console.log(alunos);

// Remover ultimo elemento do array

// é possivel guardar em uma variavel 

const removido = alunos.pop();

alunos.pop();

console.log(alunos);

console.log(removido);

// Remover primeiro elemento do array

const primeiro = alunos.shift();

console.log(primeiro);
console.log(alunos);
alunos.push('Teste');
alunos.push('Teste2');

// Fatiar o array
console.log(alunos);
console.log(alunos.slice(0,2)); // Eduardo até Maria
console.log(alunos.slice(0,-1)); // Eduardo até Teste

console.log(alunos instanceof Array); // Verifica se alunos é um array

/* Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable. */
