import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Pokemon from './components/Pokemon';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pokemon' element={<Pokemon />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default App;
