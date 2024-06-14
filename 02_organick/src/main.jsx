import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import {
  About,
  Blog,
  ChangeLog,
  Contact,
  Error,
  Home,
  License,
  PasswordProtector,
  Portfolio,
  Shop,
  Service,
  Team,
  SingleBlog,
  SinglePortfolio,
  SingleService,
  SingleShop,
} from "./pages";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/single-shop",
        element: <SingleShop />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/single-service",
        element: <SingleService />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/single-portfolio",
        element: <SinglePortfolio />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://192.168.1.2:3000/blogs/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/licenses",
        element: <License />,
      },
      {
        path: "/changelog",
        element: <ChangeLog />,
      },
      {
        path: "/password-protector",
        element: <PasswordProtector />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
