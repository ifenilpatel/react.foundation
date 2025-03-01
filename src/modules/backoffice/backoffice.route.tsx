import { Navigate } from "react-router-dom";
// backoffice
import Backoffice from "./backoffice";
// components
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Settings from "./components/setting/Settings";
import Reports from "./components/Reports";
import Profile from "./components/Profile";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

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
      { path: "profile", element: <Profile /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "terms", element: <TermsOfService /> },
    ],
  },
];

export default backofficeRoutes;
