/* O que é síncrona e assíncrona? 
Na programação eses termos se referem a diferentes maneiras de executar operações 
relacionadas ao tempo e órdem de execuções como chamadas a APIs 

Na execução síncrona, as operações são realizadas uma apos a outra, em sequencia. Cada operação deve ser concluidas antes da proxima ser executada, o que pode levar a tempos
de respostas mais lentos se alguma operação demorar para ser concluida

Na execução assincrona, as operação podem ser iniciadas e continuar em segundo plano, permitindo que outras operações sejam executadas antes da primeira ser concluida
Geralmente é utilizada em requisções HTTP, operações de leitura/escrita em arquivos grandes e espera por entrada do usuário (como cliques em botões).
*/
//Promise (promessa) é um objeto usado para representar a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. 



function timer(milissegundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Esperou por ${milissegundos} ms`);
        }, milissegundos);
    });
}

async function executar() {
    console.log("Início");
    const resultado = await timer(2000);
    console.log(resultado); // "Esperou por 2000 ms"
    console.log("Fim");
}

executar();
// Saída:
// Início
// (2 segundos depois)
// Esperou por 2000 ms
// Fim