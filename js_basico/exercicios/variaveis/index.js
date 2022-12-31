// Variaveis

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varAux = varA; // A

varA = varB;
varB = varC;
varC = varAux;

console.log(varA, varB, varC);

// Outro jeito de se resolver sem a necessidade de criar uma variavel auxiliar

[varA, varB, varC] = [varB, varC, varA];

