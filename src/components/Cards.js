import * as React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";

export const PokeCard = (props) => {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={props.pokemon.sprites.other.home.front_default}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.pokemon.id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.pokemon.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.pokemon.types[0].type.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
