import React from "react";
// eslint-disable-next-line
import { AppBar, Box, Button, Toolbar, Typography, Avatar } from "@mui/material";
import LOGO from "../assets/images/medonma.png"

const Navbar = () => {
  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Toolbar>
        <Avatar src={LOGO} sx={{ width: 30, height: 30 }} alt="MEDONMA"/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          &nbsp;&nbsp;&nbsp;MEDONMA LIFE CARE
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/home")}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/about")}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/signup")}
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
