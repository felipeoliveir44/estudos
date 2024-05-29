

const inputPokemon = document.getElementById('search')
const button = document.getElementById('button')
const divPokemons = document.querySelector('.pokemons')


async function getPokemon() {
    pokemons = []
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        pokemons = response.data.results;
        mostrarPokemons(pokemons);
    
    } catch (error) {
        console.error(error);
    }
}

async function mostrarPokemons(pokemons) {
    divPokemons.innerHTML = '';

    for(const pokemon of pokemons) {
        try {
            const response = await axios.get(pokemon.url);
            const pokemonData = response.data;
            console.log(pokemonData);
            const p = document.createElement('p')
            const img = document.createElement('img')
            const divPoke = document.createElement('div')
            p.innerHTML = pokemonData.name
            img.src = pokemonData.sprites.front_default
            divPoke.appendChild(p)
            divPoke.appendChild(img)
            divPokemons.appendChild(divPoke);
        }
        catch (error) {
            console.error(`Erro: ${pokemon.name}:`, error);
          }
    }
    
}

button.addEventListener('click', () => {
    getPokemon();
});
