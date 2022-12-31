// String
// Para usar aspas duplas em uma string, é necessario estar em aspas simples
// String são indexadas, o texto é interavel. Cada caracter tem um indice (0,1,2,3,4,5,6...)


let umaString = 'Um "texto"';
// Para escapar um caracterer utilizar \

// let umaString = "um \"texto"";
console.log(umaString);

umaString = "Um 'texto'";
console.log(umaString);

// Achar indice 6
let string = "O rato roeu a roupa do rei de roma";

// Achar o indice
console.log(string[3]);

console.log(string.charAt(4));
// Concatenar strings

console.log(string.concat(' ', 'em um lindo dia'));

console.log(`${string} em um lindo dia`);

// Saber em que indice começa a palavra "texto"

console.log(string.indexOf('texto'));

// Achar a letra o começando do indice 3

console.log(string.indexOf('o', 3));

// Achar o ultimo indice
console.log(string.lastIndexOf('o'));

// Expressoes regulares

// O /g transforma a busca em array

console.log(string.match(/[a-z]/g));

// Retorna o indice do que foi encontrado
console.log(string.search(/[a-z]/g)); // encontrou o m

// Substituir uma palavra por outra
console.log(string.replace('Um', 'outra'));
// Utilizando expressoes regulares / Desse modo irá substituir apenas uma letra, para substituir tudo é necessario utilizar o g
console.log(string.replace(/r/, '#'));
// console.log(string.replace(/r/g, '#'));

// Verificar o tamanho da string

console.log(string.length); // 34

// Pegar um trecho da string
// Utilizando - seria algo parecido com console.log(string.length - 3);
console.log(string.slice(2, 6)); // rato
console.log(string.slice(-4)); // roma

// Utilizando substring
console.log(string.substring(string.length -4));

// Dividir a string
console.log(string.split(' ', 2));

// String toda maiuscula

console.log(string.toUpperCase());

// String toda minuscula

console.log(string.toLowerCase());

