/**
    * @description      : Index.js
    * @author           : Sreehari k p, Sabiya Abraham
    * @group            : Team MEDONMA
    * @created          : 03/02/2024 - 11:34:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/02/2024
    * - Author          : Sreehari k p, Sabiya Abraham
    * - Modification    : create
**/
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { SnackbarProvider } from "notistack";

import HelmetProviderMode from "contexts/HelmetContext";
import Router from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <HelmetProviderMode>
      <BrowserRouter>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Router />
        </SnackbarProvider>
      </BrowserRouter>
      </HelmetProviderMode>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();