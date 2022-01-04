import * as React from "react";
import { useParams } from "react-router-dom";
import "../styles/Pokemondetails.scss";
import { useState, useEffect } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(Stats, Valeurs) {
  return { Stats, Valeurs };
}

export const Pokemondetails = (props) => {
  const { id } = useParams();

  const [pokemonPage, setPokemonPage] = useState({
    pokemondetails: {},
    loaded: false,
  });

  useEffect(() => {
    PokeService.fetchPokeDetails(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    ).then((res) => {
      setPokemonPage({pokemondetails: res.data, loaded: true});
    });
  }, [id, pokemonPage]);

  const { pokemondetails, loaded } = pokemonPage

  if (!loaded) {
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
    const rows = [
      createData(
        pokemondetails.stats[0].stat.name,
        pokemondetails.stats[0].base_stat
      ),
      createData(
        pokemondetails.stats[1].stat.name,
        pokemondetails.stats[1].base_stat
      ),
      createData(
        pokemondetails.stats[2].stat.name,
        pokemondetails.stats[2].base_stat
      ),
      createData(
        pokemondetails.stats[3].stat.name,
        pokemondetails.stats[3].base_stat
      ),
      createData(
        pokemondetails.stats[4].stat.name,
        pokemondetails.stats[4].base_stat
      ),
      createData(
        pokemondetails.stats[5].stat.name,
        pokemondetails.stats[5].base_stat
      ),
    ];
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xl={4} xs={12} sm={6} md={6}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={pokemondetails.sprites.other.home.front_default}
                />
                <div className="formepokemon"> Forme Normal</div>
                <CardMedia
                  component="img"
                  height="400"
                  image={pokemondetails.sprites.other.home.front_shiny}
                />
                <div className="formepokemon"> Forme Shiney</div>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xl={5} xs={12} sm={8} md={6}>
            <div className="nompokemon">Nom : {pokemondetails.name}</div>
            <div className="typepokemon">
              Type : {pokemondetails.types[0].type.name}
              <span> </span>
              {pokemondetails.types[1] && pokemondetails.types[1].type.name}
            </div>
            <div className="abilitypokemon">
              Talents : {pokemondetails.abilities[0].ability.name}
              <span> </span>
              {pokemondetails.abilities[1] &&
                pokemondetails.abilities[1].ability.name}
            </div>
            <TableContainer sx={{ mt: "10rem" }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: "3rem" }}>Stats</TableCell>
                    <TableCell sx={{ fontSize: "3rem" }}>Valeurs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ fontSize: "2rem" }}
                        component="th"
                        scope="row"
                      >
                        {row.Stats}
                      </TableCell>
                      <TableCell sx={{ fontSize: "2rem" }}>
                        {row.Valeurs}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </>
    );
  }
};
