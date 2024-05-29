// é uma interface moderna do JavaScript para fazer requisições HTTP de forma assíncrona, simplificando a interação com servidores web.
// Utilizar o fetch ja retorna uma promise

fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

  })
  .catch(error => {
    console.error('Erro:', error);
  });
