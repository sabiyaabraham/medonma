/**
 * @description      : Main routing configuration for the application
 * @author           :
 * @group            :
 * @created          : 03/02/2024 - 17:52:52
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/02/2024
 * - Author          :
 * - Modification    :
 **/

import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// Import components/pages
import Loadable from "../components/Loadable";

// Lazy-loaded components
const Login = Loadable(() => import("../pages/Auth/Login"));

const Home = Loadable(() => import("../pages/Home/Home"));

const Signup = Loadable(() => import("../pages/Auth/create"));

const Contact = Loadable(() => import("../pages/Home/Contact"));

const About = Loadable(() => import("../pages/Home/About"));

const Verify = Loadable(() => import("../pages/Auth/Verify"));

// ==============================|| ROUTING COMPONENT ||============================== //

const ThemeRoutes = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        }, {
          path: "verify",
          element: <Verify />,
        }
      ],
    },
    {
      path: "/error",
      // element: <Navbar />,
    },
  ]);
};

export default ThemeRoutes;
