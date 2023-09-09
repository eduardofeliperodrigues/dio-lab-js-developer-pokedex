'use strict'

let url = ''
const limit = 12;
const offset = 0;

const getPokemons = async () => {
  if (url === '') {
    url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  }
  const [pokemons, nextURL] = await PokeAPI.fetchPokemons(url)
  url = nextURL
  const htmlListOfPokemons = document.getElementById('pokemons')

  const convertoToLI = (pokemon) => {
    return `
      <li class="pokemon ${pokemon.types[0].type.name}" >
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}">
        </div>
      </li>
    `
  }

  htmlListOfPokemons.innerHTML += pokemons.map(convertoToLI).join('')
}

getPokemons()