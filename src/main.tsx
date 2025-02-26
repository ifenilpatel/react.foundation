import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import authRoutes from "./modules/authentication/authentication.route.tsx";
import backofficeRoutes from "./modules/backoffice/backoffice.route.tsx";

const root_router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth", children: authRoutes },
  { path: "/backoffice", children: backofficeRoutes },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={root_router} />
  </StrictMode>
);
