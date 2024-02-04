/**
 * @description      : Login component with asynchronous API call handling
 * @author           : Your Name
 * @group            : Your Group
 * @created          : 03/02/2024 - 17:59:35
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/02/2024
 * - Author          : Your Name
 * - Modification    : Updated API call handling
 **/
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useEffect } from "react";
import Navbar from "../../Navbar";
import Form from "../../components/Form/Form";

const Login = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");

    if (token) {
      const role = localStorage.getItem("role");
      window.location.href = "/" + role + "/dashboard";
    }
  }, []);

  return (
    <>
      <Navbar />
      <Grid container>
        {isMobile ? (
          <>
            <Grid item xs={12} className="form-container">
              <Form
                formTitle={"Login Page"}
                submitBtn={"Login"}
                formType={"login"}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={8} className="form-banner">
              <img
                src="./assets/images/banner1.jpg"
                alt="loginImage"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item md={4} className="form-container">
              <Form
                formTitle={"Login Page"}
                submitBtn={"Login"}
                formType={"login"}
              />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Login;
