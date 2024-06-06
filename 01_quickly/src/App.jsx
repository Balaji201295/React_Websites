import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./containers";
const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
export default App;
