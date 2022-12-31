const tarefas = document.querySelector('#add-tarefa');
const botao = document.querySelector('.add');
const divTarefas = document.querySelector('.tarefas');
const criaP = document.createElement('p');
const criaBotao = document.createElement('button');

const elementos = {
    tag: 'p',
    texto: 'Frase 1'
}

const teste = {
    tag: 'p',
    tarefa: tarefas.value
};

function CriarTarefa() {
    const tarefa = tarefas.value;
    const tag = teste.tag;

    let tagCriada = document.createElement('p');

    let botaoCriado = document.createElement('button');
    
    tagCriada.innerText = tarefa;
    divTarefas.appendChild(tagCriada);
    divTarefas.appendChild(botaoCriado);

    // // let TextoCriado = document.createTextNode(texto)
    // // tagCriada.appendChild(textoCriado)
    // tagCriada.innerText = texto;
    // div.appendChild(tagCriada);
}



botao.addEventListener('click', function (e) {
    console.log(CriarTarefa());

    //     // let {tag, texto} = teste[i];
    //     let tagCriada = divTarefas.createElement(tag);
    //     // let TextoCriado = document.createTextNode(texto)
    //     // tagCriada.appendChild(textoCriado)
    //     tagCriada.innerText = texto;
    //     divTarefas.appendChild(tagCriada);

    // divTarefas.appendChild(div);
})