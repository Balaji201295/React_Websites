import React from "react";
import { Footer, Navbar } from "./containers";
import { Outlet } from "react-router-dom";
const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
export default App;
