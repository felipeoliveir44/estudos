// While
let controle = 0;
let i = 0;

const nome = 'Luiz';

while (controle <= 10) {
    console.log(controle);
    controle++;
}

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

while (rand != 1) {
    rand = random(min, max);
    console.log(rand);
}