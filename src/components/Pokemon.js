import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PokeCard } from "./Cards";
import { PokeService } from "../services/PokeService";
import { Box, CircularProgress, Grid } from "@mui/material";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      loaded: false,
      limit: 30,
    };
  }

  componentDidMount = () => {
    window.onscroll = (e) => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 300
      ) {
        this.setState({ limit: this.state.limit + 30 });
      }
    };

    PokeService.fetchFullPokemons().then((res) => {
      this.setState({ pokemons: res, loaded: true });
    });
  };

  PokeCards = () => {
    const { pokemons, limit } = this.state;
    return (
      pokemons &&
      pokemons.slice(0, limit).map((pokemon) => (
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
          <Link
            className="linkpokemon"
            to="/details"
            state={{ pokemondetails: pokemon }}
          >
            <PokeCard pokemon={pokemon} />
          </Link>
        </Grid>
      ))
    );
  };

  render() {
    console.log(this);
    const { loaded } = this.state;

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
          <this.PokeCards />
        </Grid>
      );
    }
  }
}

export default Pokemon;
