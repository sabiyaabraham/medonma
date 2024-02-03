/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/02/2024 - 12:52:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/02/2024
    * - Author          : 
    * - Modification    : 
**/
import { useRoutes } from "react-router-dom";
import React, { lazy } from "react";

// project imports
import Loadable from "../components/Loadable";
import Navbar from "../Navbar";
// routes]
// ==============================|| ROUTING RENDER ||============================== //

// maintenance routing
// const MaintenanceError = Loadable(
//   lazy(() => import("views/pages/maintenance/Error"))
// );

export default function ThemeRoutes() {
  return useRoutes([
    // LoginRoutes,
    // DashboardRoutes,
    // ServerRoutes,
    {
      // Wildcard route for unmatched paths
      path: "*",
      element: <Navbar />,
    },
  ]);
}