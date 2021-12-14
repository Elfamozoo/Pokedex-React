import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const PokeCard = (props) => {
  const [pokedetails, setPokedetails] = useState({});

  useEffect(() => {
    axios.get(props.url).then((res) => setPokedetails(res.data));
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={pokedetails.sprites.front_default}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pokedetails.types[0].type.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
