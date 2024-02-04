/**
 * @description      : create component with asynchronous API call handling
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

// eslint-disable-next-line
import React, { useEffect } from "react";
import Navbar from "../../Navbar";
import Form from "../../components/Form/Form";

const Create = () => {
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

      <Form
        formTitle={"Register"}
        submitBtn={"Register"}
        formType={"register"}
      />
    </>
  );
};

export default Create;
