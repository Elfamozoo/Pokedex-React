import React, { useEffect, useState } from "react";
import { PokeCard } from "./Cards";
import { PokeService } from "../services/PokeService";
import CircularProgress from "@mui/material/CircularProgress";
import {
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
      <Grid item xs={12} sm={6} md={4}>
        <PokeCard pokemon={pokemon} />
      </Grid>
    ));

  if (loaded === false) {
    return (
      <Box sx={{ display: "flex" }}>
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
