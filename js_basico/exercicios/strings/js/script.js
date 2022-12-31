// Strings

const nome = prompt('Digite seu nome completo: ');

const letrasDoNome = nome.length;
const segundaLetraDoNome = nome.slice(1, 2);
const indiceLetra = nome.indexOf('i');
const ultimoIndiceLetra = nome.lastIndexOf('i');
const ultimasTresLetras = nome.slice(-3);
const palavrasNome = nome.split(' ');
const letrasMaisculas = nome.toUpperCase();
const letrasMinusculas = nome.toLowerCase();


// Luiz Felipe da Silva Oliveira

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${letrasDoNome} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetraDoNome}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra i  no seu nome? ${indiceLetra}<br />`;
document.body.innerHTML += `Qual o último índice da letra i no seu nome? ${ultimoIndiceLetra} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTresLetras}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${letrasMaisculas} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${letrasMinusculas} <br />`;
