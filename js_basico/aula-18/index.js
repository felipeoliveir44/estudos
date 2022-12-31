// Objeto
// Array = []
// Objeto = {}

const pessoa = {
    nome: 'Teste',
    sobrenome: 'Teste2',
    idade: 19,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

function criaPessoa(nome, sobrenome, idade) { // Funcão factory
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Luiz', 'Felipe', 19);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 33);
const pessoa3 = criaPessoa('Junior', 'Otávio', 49);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome); 



