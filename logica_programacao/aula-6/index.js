// Data
// ano / mes / dia / hora / minuto / milissegundos
// Os meses vao de 0 até 11
const data = new Date(2022, 11, 1, 12, 04);

console.log(data.toString());


const data1 = new Date('2022-12-01 12:10');

console.log(data1.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sabado
console.log(Date.now());

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const sec = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${sec}`;
}

const data2 = new Date();
const dataBrasil = formataData(data2);
console.log(dataBrasil);