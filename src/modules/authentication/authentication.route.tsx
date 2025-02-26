import { Navigate } from "react-router-dom";
// master
import Authentication from "./authentication";
// components
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

const authRoutes = [
  {
    path: "",
    element: <Authentication />,
    children: [
      { index: true, element: <Navigate to="signin" replace /> },
      { path: "signin", element: <SignIn /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "change-password", element: <ChangePassword /> },
    ],
  },
];

export default authRoutes;
