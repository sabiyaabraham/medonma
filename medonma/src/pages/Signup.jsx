import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, CardContent, Card,CardMedia, Grid,Typography} from '@mui/material';
import Navbar from './Navbar';

export const Signup = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    showPassword: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const togglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };
 
    return (
      <Grid container justifyContent={"center"} maxHeight={100}>
        <Card style={{maxHeight: 600}}>
          <CardContent>
          <div
    style={{
      backgroundImage: `url(https://www.nidirect.gov.uk/sites/default/files/images/news/blood-donation.jpg)`, // Replace with the correct URL
    }}>
      <Navbar />
            <form onSubmit={handleSubmit} style={{ textAlign: 'center', width: 'fit-content' }}>

            <Typography variant="h2"style={{fontFamily:"initial"}}>REGISTER</Typography>
            
              <TextField required id={formData.firstName} label="First Name" onChange={handleChange} variant="filled"/> {''}
              
              <TextField required id={formData.lastName} label="Last Name" onChange={handleChange} variant="filled" />
              <br /><br />
              <TextField required id={formData.email} type="email" fullWidth label="Email"  onChange={handleChange} variant="filled" />
              <br /><br />
              <TextField required id={formData.phoneNumber} fullWidth label="Phone Number"  onChange={handleChange} variant="filled" />
              <br /><br />
              <TextField required type={formData.showPassword ? 'text' : 'password'} id={formData.password} fullWidth label="Password" onChange={handleChange} variant="filled" />&nbsp;
              <TextField required type={formData.showPassword ? 'text' : 'password'} id={formData.confirmPassword} fullWidth label="Confirm Password" onChange={handleChange} variant="filled" /><br /><br/>
              <label>
                <input type='checkbox' color='secondary' name='termsAccepted' checked={formData.termsAccepted} onChange={handleChange} required /> Terms and conditions <br />
              </label>
              <br />
              <Button
                type=""
                disabled={!formData.termsAccepted}
                variant='contained'
              >
                Signup
              </Button>
            </form>
          </div>
        </CardContent>
      </Card></Grid>
  );
};

export default Signup;
