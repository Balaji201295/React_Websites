import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Home,
  Error,
  Menu,
  AboutUs,
  OrderOnline,
  Reservation,
  ContactUs,
  Checkout,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "order-online",
        element: <OrderOnline />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
