const form = document.querySelector('.form');

// const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const pesoInput = e.target.querySelector('.peso');
    const alturaInput = e.target.querySelector('.altura');

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso) {
        resultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        resultado('altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const statusIMC = getStatusIMC(imc);

    const msg = `Seu IMC é ${imc} (${statusIMC}).`;

    resultado(msg, true);
});

function getStatusIMC (imc) {
    const status = ['Abaixo do peso', 'Peso normal','Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) {
        return status[5];
    }
    if(imc >= 34.9) {
        return status[4];
    }
    if(imc >= 29.9) {
        return status[3];
    }
    if(imc >= 24.9) {
        return status[2];
    }
    if(imc >= 18.5) {
        return status[1];
    }
    if(imc < 18.5) {
        return status[0];
    }
}
function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function resultado(msg, valido) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(valido) {
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

