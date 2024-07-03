import React from "react";
import { Navbar, Footer } from "./containers";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
export default App;
