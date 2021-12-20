import * as React from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { pokemondetails } = location.state;

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
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={pokemondetails.sprites.other.home.front_default}
          />
        </CardActionArea>
      </Card>
      <div>{pokemondetails.name}</div>
      <div>
        {pokemondetails.types[0].type.name}
        <span> </span>
        {pokemondetails.types[1] && pokemondetails.types[1].type.name}
      </div>
      <div>
        {pokemondetails.abilities[0].ability.name}
        <span> </span>
        {pokemondetails.abilities[1] &&
          pokemondetails.abilities[1].ability.name}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Stats</TableCell>
              <TableCell>Valeurs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Stats}
                </TableCell>
                <TableCell>{row.Valeurs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

// <ul>
// <li>
//   {pokemondetails.stats[0].stat.name} :<span> </span>
//   {pokemondetails.stats[0].base_stat}
// </li>
// <li>
//   {pokemondetails.stats[1].stat.name} :<span> </span>
//   {pokemondetails.stats[1].base_stat}
// </li>
// <li>
//   {pokemondetails.stats[2].stat.name} :<span> </span>
//   {pokemondetails.stats[2].base_stat}
// </li>
// <li>
//   {pokemondetails.stats[3].stat.name} :<span> </span>
//   {pokemondetails.stats[3].base_stat}
// </li>
// <li>
//   {pokemondetails.stats[4].stat.name} :<span> </span>
//   {pokemondetails.stats[4].base_stat}
// </li>
// <li>
//   {pokemondetails.stats[5].stat.name} :<span> </span>
//   {pokemondetails.stats[5].base_stat}
// </li>
// </ul>
