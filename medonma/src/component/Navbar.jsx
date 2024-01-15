 import {Appbar,Box,Button,IconButton, Toolbar, Typography } from '@mui/material'
 import React from 'react'

 const Navbar = () => {
    return (
      <div><Box >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}align='left'>
            Home Page
          </Typography><br />
          <Button color="inherit"onClick={() => window.location.href = '/login'}>Login</Button>
          <Button color="inherit"onClick={() => window.location.href = '/'}>Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
  
  </div>
    )
  }
  
  export default Navbar