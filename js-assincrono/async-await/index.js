/* São usados para escrever codigo assincrono que parece sincrono, tornando
mais legivel e facil de entender

Async - Usado para declarar uma função assincrona, ela sempre retorna uma promise
Se a função retornar um valor, esse valor será uma promise resolvida

Await - So pode ser usado dentro de uma funcao async. É usada para pausar a execução de uma funcao async ate que a promise
seja resolvida ou rejeitada */

async function obterDadosDaAPI() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    if (!response.ok) {
      throw new Error('Erro ao obter dados da API');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
  }
}

obterDadosDaAPI();
