import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Maintenance from "./components/Maintenance.tsx";
import NotFound from "./components/NotFound.tsx";
import "./index.css";
import authRoutes from "./modules/authentication/authentication.route.tsx";
import backofficeRoutes from "./modules/backoffice/backoffice.route.tsx";
import { store } from "./redux/store.ts";

const root_router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth", children: authRoutes },
  { path: "/backoffice", children: backofficeRoutes },
  { path: "maintenance", element: <Maintenance /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={root_router} />
    </Provider>
  </StrictMode>
);
