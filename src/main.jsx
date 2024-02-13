import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import queryClient from "./services/queryClient.js";

import Home from "./pages/Home.jsx";
import Coutries from "./pages/Coutries.jsx";
import App from "./App.jsx";
import ErrorPage from "./pages/Error.jsx";
import "./styles/styles.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/rest-countries-api", element: <Home /> },
      {
        path: "/rest-countries-api/:id",
        element: <Coutries />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
