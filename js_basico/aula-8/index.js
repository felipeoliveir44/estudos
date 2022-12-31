/* Ex - Luiz otavio miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC =e de 25.95
luiz otativo nasceu em 1980
*/

const nome = 'Luiz';
const sobrenome = 'Felipe';
const idade = 19;
const peso = 84;
const alturaEmCm = 1.70;

let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2022 - idade;

// template strings - uma string q pode colocar variaveis dentro dela

console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);