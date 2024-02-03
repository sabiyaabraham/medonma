import { useRoutes } from "react-router-dom";
import React, { lazy } from "react";

// project imports
import Loadable from "../components/Loadable";
// routes]
// ==============================|| ROUTING RENDER ||============================== //

// maintenance routing
const MaintenanceError = Loadable(
  lazy(() => import("views/pages/maintenance/Error"))
);

export default function ThemeRoutes() {
  return useRoutes([
    // LoginRoutes,
    // DashboardRoutes,
    // ServerRoutes,
    {
      // Wildcard route for unmatched paths
      path: "*",
      element: <MaintenanceError />,
    },
  ]);
}