import React, { useState } from "react";
import {
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Link,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import API from "../../API";

const defaultTheme = createTheme();

// eslint-disable-next-line
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://medonma.me/">
        MEDONMA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Form = ({ formType, submitBtn, formTitle }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "donor",
    dob: "",
    name: "",
    organisationName: "",
    hospitalName: "",
    website: "",
    address: "",
    phone: "",
  });

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

    // Example: You can add your API call logic here
    // For demonstration purposes, an error message is set if the email is not provided.
    if (!formData.email) {
      setError("Please provide an email address.");
      setOpenSnackbar(true);
    } else {
      // Clear error if present
      setError(null);

      if (formType === "login") {
        try {
          const deviceInfoResponse = await fetch(
            "https://api.ipregistry.co/?key=avx02aeoi63vo3vt",
          );
          const deviceInfo = await deviceInfoResponse.json();

          // Construct the URL with query parameters
          const queryParams = {
            email: formData.email,
            password: formData.password,
            "deviceData[publicIP]": deviceInfo.ip,
            "deviceData[timeZone]": deviceInfo.time_zone.id,
            "deviceData[location][latitude]": deviceInfo.location.latitude,
            "deviceData[location][longitude]": deviceInfo.location.longitude,
            "deviceData[location_]": `${deviceInfo.location.city}, ${deviceInfo.location.region.name}`,
            "deviceData[browser][isBrowser]": true,
            "deviceData[browser][isMobile]": navigator.userAgentData.mobile,
            "deviceData[browser][userAgent]": deviceInfo.user_agent.header,
            "deviceData[browser][browserName]": deviceInfo.user_agent.name,
            "deviceData[browser][browserVersion]":
              deviceInfo.user_agent.version,
            "deviceData[os]": deviceInfo.user_agent.os.name,
            "deviceData[device]": deviceInfo.user_agent.device.name,
            "deviceData[deviceID]":
              "fyuusvjhatsyudyguyjcmkdksajdasidjydfudsiufbd",
          };

          const res = await API.get("auth/login", queryParams);
          if (res.error) {
            setError(res.message);
            setOpenSnackbar(true);
          } else {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("role", formData.role);
            window.location.href = "/" + formData.role + "/dashboard";
          }
        } catch (error) {
          setError(error.message);
          setOpenSnackbar(true);
        }
      } else {
        try {
          const res = await API.get("auth/create", formData);
          if (res.error) {
            setError(res.message);
            setOpenSnackbar(true);
          } else {
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("verify", true);
            window.location.href = "/verify";
          }
        } catch (error) {
          setError(error.message);
          setOpenSnackbar(true);
        }
      }

      
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
            backgroundImage:
              formType === "login"
                ? `url(https://medonma.me/assets/images/banner1.jpg)`
                : `url(https://medonma.me/assets/images/banner2.jpg)`,
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
              {formTitle}
            </Typography>
            <hr />

            <Grid item xs={12}>
              <RadioGroup
                row
                value={formData.role}
                name="role"
                onChange={handleChange}
              >
                <FormControlLabel
                  value="donor"
                  control={<Radio />}
                  label="Donor"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="hospital"
                  control={<Radio />}
                  label="Hospital"
                />
                <FormControlLabel
                  value="organisation"
                  control={<Radio />}
                  label="Organisation"
                />
              </RadioGroup>
            </Grid>

            {formType === "login" ? (
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
                  name="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box
                component="form"
                noValidate
                onSubmit={handleFormSubmit}
                sx={{ mt: 1 }}
              >
                {(formData.role === "admin" || formData.role === "donor") && (
                  <>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Name"
                      inputType="text"
                      name="name"
                      autoComplete="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Date of Birth"
                      inputType="Date"
                      name="dob"
                      autoComplete="dob"
                      id="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </>
                )}
                {formData.role === "organisation" && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Organisation Name"
                    inputType="text"
                    name="organisationName"
                    value={formData.organisationName}
                    onChange={handleChange}
                  />
                )}
                {formData.role === "hospital" && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Hospital Name"
                    inputType="text"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                  />
                )}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  inputType="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  inputType="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Website"
                  inputType="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Address"
                  inputType="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Phone"
                  inputType="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign UP
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Do you have an account? Sign in"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}

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
