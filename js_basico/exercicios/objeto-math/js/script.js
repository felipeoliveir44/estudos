const numero = Number(prompt('Digite seu número: '));

const raizQuadrada = numero ** 0.5;
const inteiro = Number.isInteger(numero);
const nan = Number.isNaN(numero);
const arredondandoBaixo = Math.floor(numero);
const arredondandoCima = Math.ceil(numero);
const duasCasasDecimais = numero.toFixed(2);

document.body.innerHTML += `Seu número é: ${numero}<br />`;
document.body.innerHTML += `Raiz quadrada: ${raizQuadrada}<br />`;
document.body.innerHTML += `${numero} é inteiro?:  ${inteiro} <br />`;
document.body.innerHTML += `É NaN?: ${nan}<br />`;
document.body.innerHTML += `Arredondando para baixo: ${arredondandoBaixo}<br />`;
document.body.innerHTML += `Arredondando para cima: ${arredondandoCima} <br />`;
document.body.innerHTML += `Com duas casas decimais: ${duasCasasDecimais}<br />`;



