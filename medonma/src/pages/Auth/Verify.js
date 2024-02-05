import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import API from "../../API";

const defaultTheme = createTheme();

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  useEffect(() => {
    // Check if token exists in local storage
    const email = localStorage.getItem("email");
    const isVerify = localStorage.getItem("verify");
  
    if (!isVerify) {
      window.location.href = "/home";
    }
  
    if (email) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: email,
      }));
    }
  }, [setFormData]);  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setError("Please provide an email address.");
      setOpenSnackbar(true);
    } else {
      // Clear error if present
      setError(null);

          try {
            const res = await API.post("auth/create", formData);
            if (res.error) {
              setError(res.message);
              setOpenSnackbar(true);
            } else {
                localStorage.removeItem("verify");
              localStorage.setItem("role", formData.role);
            window.location.href = "/" + formData.role + "/dashboard";
            }
          } catch (error) {

        }

      // Reset form fields
      setFormData({
        otp: "",
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "95vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(https://medonma.me/assets/images/banner1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              {"Verify otp"}
            </Typography>
            <hr />

            <Box
              component="form"
              noValidate
              onSubmit={handleFormSubmit}
              sx={{ mt: 5 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="otp"
                label="otp"
                type="number"
                value={formData.otp}
                onChange={handleChange}
                id="otp"
                autoComplete="otp"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>

            {/* Error Snackbar */}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                severity="error"
                onClose={handleSnackbarClose}
              >
                {error}
              </MuiAlert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Form;
