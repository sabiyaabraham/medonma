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
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import API from "../../API";
import Navbar from "../../Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
  };

  const yourApiCall = async (data) => {
    try {
      const deviceInfoResponse = await fetch(
        'https://api.ipregistry.co/?key=avx02aeoi63vo3vt'
      );
      const deviceInfo = await deviceInfoResponse.json();

      // Construct the URL with query parameters
      const queryParams = {
        'email': data.email,
        'password': data.password,
        'deviceData[publicIP]': deviceInfo.ip,
        'deviceData[timeZone]': deviceInfo.time_zone.id,
        'deviceData[location][latitude]': deviceInfo.location.latitude,
        'deviceData[location][longitude]': deviceInfo.location.longitude,
        'deviceData[location_]': `${deviceInfo.location.city}, ${deviceInfo.location.region.name}`,
        'deviceData[browser][isBrowser]': true,
        'deviceData[browser][isMobile]': navigator.userAgentData.mobile,
        'deviceData[browser][userAgent]': deviceInfo.user_agent.header,
        'deviceData[browser][browserName]': deviceInfo.user_agent.name,
        'deviceData[browser][browserVersion]':
          deviceInfo.user_agent.version,
        'deviceData[os]': deviceInfo.user_agent.os.name,
        'deviceData[device]': deviceInfo.user_agent.device.name,
        'deviceData[deviceID]':
          'fyuusvjhatsyudyguyjcmkdksajdasidjydfudsiufbd',
      };

      const res = await API.get("auth/login", queryParams);
      if (res.error) {
        setError(res.message);
      } else {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);

      }
    } catch (error) {
      setError(error.message); // Store the error message
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await yourApiCall(formData);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <Typography variant="h3">Login</Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div>
            <TextField
              required
              id="email"
              name="email"
						  value={formData.email}
              label="Email"
              onChange={handleChange}
              variant="filled"
            />
            <br />
            <br />
            <TextField
              required
              value={formData.password}
              id="password"
              name="password"
              label="Password"
              onChange={handleChange}
              variant="filled"
            />
          </div>

          <Button type="submit" style={{ marginTop: "20px" }}>
            Login
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
      </div>
    </>
  );
};

export default Login;
