import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const PokeCard = (props) => {
console.log(props)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={props.pokemon.sprites.front_default}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.pokemon.height}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
