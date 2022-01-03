import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import NotFound from "./pages/NotFound/NotFound";
import Pokemon from "./components/Pokemon";
import { Pokemondetails } from "./components/Pokemondetails";
import ButtonAppBar from "./components/Header";

const App = () => {
  return (
    <Router>
      <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<Pokemon />}></Route>
        <Route path="/details/:id" element={<Pokemondetails />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default App;
