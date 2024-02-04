import React, { useState } from "react";
import { Button, Grid, Radio, RadioGroup, FormControlLabel, Typography, Link, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import InputType from "./InputType";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Example: You can add your API call logic here
    // For demonstration purposes, an error message is set if the email is not provided.
    if (!email) {
      setError("Please provide an email address.");
      setOpenSnackbar(true);
    } else {
      // Clear error if present
      setError(null);

      // Example: You can perform your API call or other logic here
      console.log("Form submitted:", { email, password, role, name, organisationName, hospitalName, website, address, phone });

      // Reset form fields
      setEmail("");
      setPassword("");
      setRole("donar");
      setName("");
      setOrganisationName("");
      setHospitalName("");
      setWebsite("");
      setAddress("");
      setPhone("");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          {formTitle}
        </Typography>
        <hr />
      </Grid>

      <Grid item xs={12}>
        <RadioGroup
          row
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <FormControlLabel value="donar" control={<Radio />} label="Donar" />
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
          <FormControlLabel value="organisation" control={<Radio />} label="Organisation" />
        </RadioGroup>
      </Grid>

      {formType === "login" ? (
        <>
          <Grid item xs={12}>
            <InputType
              labelText="Email"
              inputType="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputType
              labelText="Password"
              inputType="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </>
      ) : (
        <>
          {(role === "admin" || role === "donar") && (
            <Grid item xs={12}>
              <InputType
                labelText="Name"
                inputType="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
          )}
          {role === "organisation" && (
            <Grid item xs={12}>
              <InputType
                labelText="Organisation Name"
                inputType="text"
                name="organisationName"
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
              />
            </Grid>
          )}
          {role === "hospital" && (
            <Grid item xs={12}>
              <InputType
                labelText="Hospital Name"
                inputType="text"
                name="hospitalName"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <InputType
              labelText="Email"
              inputType="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputType
              labelText="Password"
              inputType="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputType
              labelText="Website"
              inputType="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputType
              labelText="Address"
              inputType="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputType
              labelText="Phone"
              inputType="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </>
      )}

      <Grid item xs={12}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {formType === "login" ? (
            <Typography variant="body1">
              Not registered yet? Register
              <Link to="/register"> Here!</Link>
            </Typography>
          ) : (
            <Typography variant="body1">
              Already a user? Please
              <Link to="/login"> Login!</Link>
            </Typography>
          )}
          <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
            {submitBtn}
          </Button>
        </div>
      </Grid>

      {/* Error Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
          {error}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

export default Form;
