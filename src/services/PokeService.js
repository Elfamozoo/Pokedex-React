import axios from "axios";

const pokemonsList = "https://pokeapi.co/api/v2/pokemon/?limit=1200";

const pokemonsSpecies = `https://pokeapi.co/api/v2/pokemon-species/`;

const pokemonsEvolution = `https://pokeapi.co/api/v2/evolution-chain/`;

export const PokeService = {
  fetchPokemons: () => getPokemons(),
  fetchPokeDetails: (url) => getPokeDetails(url),
  fetchFullPokemons: () => getFullPokemons(),
  fetchPokemonsSpecies: (id) => getPokemonsSpecies(id),
  fetchPokemonsEvolutions: (idEvo) => getPokemonsEvolutions(idEvo),
};

const getPokemonsSpecies = async (id) => {
  return axios.get(pokemonsSpecies + id);
};

const getPokemonsEvolutions = async (idEvo) => {
  return axios.get(pokemonsEvolution + idEvo);
};

const getPokemons = async () => {
  return axios.get(pokemonsList);
};

const getPokeDetails = async (url) => {
  return axios.get(url);
};

const getFullPokemons = async () => {
  let listPokemons = JSON.parse(localStorage.getItem("listepok"));
  if (!listPokemons) {
    listPokemons = await getPokemons().then((res) => res.data.results);
    let promisePok = await Promise.all(
      listPokemons.map((pokemon) =>
        getPokeDetails(pokemon.url).then((res) => res.data)
      )
    );
    listPokemons = promisePok.map((pokemonCache) => {
      return {
        id: pokemonCache.id,
        name: pokemonCache.name,
        sprites: pokemonCache.sprites.other.home.front_default,
        types: pokemonCache.types,
      };
    });
  }
  localStorage.setItem("listepok", JSON.stringify(listPokemons));
  return listPokemons;
};
