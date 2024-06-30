import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "./containers";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logOut } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = async (e) => {
      await logOut();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.log("Logged Out");
        setIsAuthenticated(false);
        navigate("/login");
      }
    });
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      unsubscribe();
    };
  }, [navigate]);
  return (
    <>
      <ToastContainer />
      <Navbar isAuthenticated={isAuthenticated} />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
