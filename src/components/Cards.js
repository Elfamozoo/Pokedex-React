import * as React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";

export const PokeCard = (props) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.pokemon.sprites.other.home.front_default}
        />
        <CardContent className={`${props.pokemon.types[0].type.name}`}>
          <Typography gutterBottom variant="h6" component="div">
            #{props.pokemon.id}
          </Typography>
          <Typography className="namepokemon" gutterBottom variant="h5" component="div">
            {props.pokemon.name}
          </Typography>
          <Typography className="typespokemon" variant="body1" color="text.primary">
            {props.pokemon.types[0].type.name}
            <span> </span>
            {props.pokemon.types[1] && props.pokemon.types[1].type.name }

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
