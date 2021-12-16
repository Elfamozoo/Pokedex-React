import * as React from "react";
import { useLocation } from "react-router-dom";

export const Pokemondetails = (props) => {
  const location = useLocation();
  const { pokemondetails } = location.state;


  return (
    <div>{pokemondetails.name}</div>
    
    
    
    ) 
};
