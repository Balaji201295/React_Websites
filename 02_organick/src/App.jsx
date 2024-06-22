import React from "react";
import { Footer, Navbar } from "./containers";
import { Outlet } from "react-router-dom";
import { Copyright } from "./components";
const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
    <Copyright />
  </>
);
export default App;
