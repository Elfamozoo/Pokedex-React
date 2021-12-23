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
  let listPokemons = [];
  listPokemons = await getPokemons().then((res) => res.data.results);
  return Promise.all(
    listPokemons.map((pokemon) =>
      getPokeDetails(pokemon.url).then((res) => res.data)
    )
  );
};
