import { Navigate } from "react-router-dom";
// backoffice
import Backoffice from "./backoffice";
// components
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Settings from "./components/Settings";
import Reports from "./components/Reports";

const backofficeRoutes = [
  {
    path: "",
    element: <Backoffice />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "reports", element: <Reports /> },
    ],
  },
];

export default backofficeRoutes;
