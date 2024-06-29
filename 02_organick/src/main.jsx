import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import {
  About,
  Blog,
  Contact,
  Error,
  Home,
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
        path: "/shop/:id",
        element: <SingleShop />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://192.168.1.2:3000/shop/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Fetch error: ", error);
            throw new Error("Failed to load shop data");
          }
        },
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
        path: "/portfolio/:id",
        element: <SinglePortfolio />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://192.168.1.2:3000/portfolios/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Fetch error: ", error);
            throw new Error("Failed to load shop data");
          }
        },
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
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://192.168.1.2:3000/blogs/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Fetch error: ", error);
            throw new Error("Failed to load shop data");
          }
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
