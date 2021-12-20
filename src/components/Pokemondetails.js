import * as React from "react";
import { useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
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

export const Pokemondetails = (props) => {
  const location = useLocation();
  const { pokemondetails } = location.state;

  const rows: GridRowsProp = [
    {
      id: 1,
      col1: pokemondetails.stats[0].stat.name,
      col2: pokemondetails.stats[0].base_stat,
    },
    {
      id: 2,
      col1: pokemondetails.stats[1].stat.name,
      col2: pokemondetails.stats[1].base_stat,
    },
    {
      id: 3,
      col1: pokemondetails.stats[2].stat.name,
      col2: pokemondetails.stats[2].base_stat,
    },
    {
      id: 4,
      col1: pokemondetails.stats[3].stat.name,
      col2: pokemondetails.stats[3].base_stat,
    },
    {
      id: 5,
      col1: pokemondetails.stats[4].stat.name,
      col2: pokemondetails.stats[4].base_stat,
    },
    {
      id: 6,
      col1: pokemondetails.stats[5].stat.name,
      col2: pokemondetails.stats[5].base_stat,
    },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Stats", width: 150 },
    { field: "col2", headerName: "Valeur", width: 150 },
  ];

  return (
    <>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
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
      <div style={{ height: 500, width: "25%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
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
