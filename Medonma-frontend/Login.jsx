import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  

  return (
    <div
    style={{
      backgroundImage: `url(https://www.nidirect.gov.uk/sites/default/files/images/news/blood-donation.jpg)`, // Replace with the correct URL
    }}>
      <Navbar/>
    <div
      style={{
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      
      <Typography variant='h3'>Login</Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div>
          <TextField
            required
            id={formData.email}
            label='Email'
            onChange={handleChange}
            variant='filled'
          />
          <br />
          <br />
          <TextField
            required
            id={formData.password}
            label='Password'
            onChange={handleChange}
            variant='filled'
          />
        </div>

        <Button type='submit' style={{ marginTop: '20px' }}>
          Login
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Login;
