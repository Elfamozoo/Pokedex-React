import axios from "axios";

const pokemonsList = "https://pokeapi.co/api/v2/pokemon/?limit=1200";

export const PokeService = {
  fetchPokemons: () => getPokemons(),
  fetchPokeDetails: (url) => getPokeDetails(url),
  fetchFullPokemons: () => getFullPokemons(),
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
