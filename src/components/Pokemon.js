import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PokeCard } from "./Cards";
import { PokeService } from "../services/PokeService";
import {
  CircularProgress,
  Typography,
  appBar,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  CardActionArea,
  Box,
  button,
} from "@mui/material";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    PokeService.fetchFullPokemons().then((res) => {
      setPokemons(res);
      setLoaded(true);
    });
  }, []);

  const PokeCards =
    pokemons &&
    pokemons.map((pokemon) => (
      <Grid
        item
        xl={2}
        xs={12}
        sm={6}
        md={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/details" state={{ pokemondetails: pokemon }}>
          <PokeCard pokemon={pokemon} />
        </Link>
      </Grid>
    ));

  if (loaded === false) {
    return (
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <Grid container spacing={2}>
        {PokeCards}
      </Grid>
    );
  }
};

export default Pokemon;
