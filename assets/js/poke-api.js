class PokeAPI {
  static fetchDetails = async (pokemonsList) => {
    const pokemonsWithDetails = []
    for (let pokemon of pokemonsList) {
      const response = await fetch(pokemon.url)
      const pokemonDetails = await response.json()
      pokemonsWithDetails.push(pokemonDetails)
    };

    return pokemonsWithDetails

  }

  static fetchPokemons = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const pokemonsWithoutDetails = data.results
      const pokemons = await this.fetchDetails(pokemonsWithoutDetails)

      return [pokemons, data.next]

    } catch (error) {
      console.error(error)
    }
  }

}