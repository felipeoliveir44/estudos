// Alert, confirm e prompt

//alert('Mensagem');

const confirma = confirm('Realmente deseja apagar?');

// alert(confirma);

if (confirma != true) {
    alert('Resultado foi false');
}
else {
    let num1 = prompt('Digite um numero');
    let num2 = prompt('Digite um numero');
    alert(num1 + num2);
    // O retorno do prompt retorna string, para fazer contas com o resultado é necessario converter para inteiros (Ou float)

    // Ex aula 12

    let num3 = prompt('Digite um numero');
    let num4 = prompt('Digite um numero');

    // Outro jeito de se fazer a conversao para numeros
    // num3 = Number(num3);
    // num4 = Number(num4);
    // const resultado = num3 + num4;

    const resultado = parseInt(num3) + parseInt(num4);
    // O jeito moderno de se fazer concatenacao de strings é utilizando template string

    alert(`O resultado da sua conta foi: ${resultado}`);
    
}

