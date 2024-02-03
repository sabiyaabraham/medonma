import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
    <Box
    style={{
      backgroundColor: 'blue',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <AppBar position="static" style={{ background: 'transparent ', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* Add your menu icon here if needed */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            MEDONMA LIFE CARE
          </Typography>
          <Button color="inherit" onClick={() => window.location.href = '/home'}>
            Home
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/about'}>
            About
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/contact'}>
            Contact
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/login'}>
            Login
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/signup'}>
            Signup
          </Button>
        </Toolbar>
      </AppBar>
      
    </Box>
    <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align='center'>
    MEDONMA LIFE CARE
  </Typography>
  </>
  );
}

export default Navbar;
