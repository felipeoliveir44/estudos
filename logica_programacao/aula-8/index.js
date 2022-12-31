// Mais diferenças entre var e let/const

const verdadeira = true;

// Let tem escopo de bloco { ... bloco}
// var so tem escopo de funcao

let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeira) {
    let nome = 'Felipe'; 
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}