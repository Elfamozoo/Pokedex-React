import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "yellow" }} className="navbar" position="static">
        <Toolbar>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/"}
          >
            <Typography color={"black"} variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Pokedex
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
