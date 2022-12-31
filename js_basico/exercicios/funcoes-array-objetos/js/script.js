// Função, array e objetos

function meuEscopo() { // Criar objeto e colocar dentro do array
    const form = document.querySelector('.form');
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const resultado = document.querySelector('.resultado');
    const pessoa = [];

        function recebeEventoForm (evento){
            evento.preventDefault();

            pessoa.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value

            });

            console.log(pessoa);
            
            resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
        }
    form.addEventListener('submit', recebeEventoForm); 
    
}

meuEscopo();

