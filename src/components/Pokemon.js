import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokeCard } from "./Cards";
import { PokeService } from "../services/PokeService";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    PokeService.fetchFullPokemons().then((res) => {
      setPokemons(res);
      setLoaded(true);
    });
  }, []);

  if (loaded === false) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="countries">
        <ul className="countries-list">
          {pokemons.map((pokemon) => (
            <PokeCard pokemon={pokemon} />
          ))}
        </ul>
      </div>
    );
  }
};

export default Pokemon;
