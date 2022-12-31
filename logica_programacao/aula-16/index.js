// Break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero == 2) { // No momento que voce encontrar a palavra continue, ele pula para a proxima interação
        continue;
    }

    if (numero == 8) { // No momento que encontrar a condicao, sai do laço
        break;
    }
    console.log(numero);
}