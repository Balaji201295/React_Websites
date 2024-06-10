import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { navItems } from "../constants";
import { Button } from "../components";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "../style";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);
  const navigate = useNavigate();

  // Fixed navbar scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top after navigation
  const handleNavLinkClick = (path) => {
    setToggleOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  // NavLink Item
  const NavItem = ({ path, title }) => (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "text-white " : "")}
        onClick={() => handleNavLinkClick(path)}
      >
        {title}
      </NavLink>
    </>
  );

  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <nav
      className={`${styles.boxWidth} ${
        styles.paddingX
      } w-full fixed left-0 top-0 right-0 z-[999] flex justify-between items-center text-white bg-primary transition-all duration-500 ease-in-out ${
        isScrolled ? "py-3 shadow-md" : "py-5"
      }`}
    >
      {/* logo */}
      <p className="text-2xl font-bold text-white">
        Quickly<span className="text-light">.</span>
      </p>
      {/* links */}
      <ul className="md:flex hidden flex-1 justify-center items-center gap-8">
        {navItems.map(({ path, title }) => (
          <li
            key={title}
            className="text-base font-medium text-light hover:text-white capitalize transition-all duration-300 ease-linear"
          >
            <NavItem path={path} title={title} />
          </li>
        ))}
      </ul>
      {/* buttons */}
      <div className="hidden sm:flex justify-end items-center w-full md:w-max mr-8 md:mr-0 gap-4">
        <Button
          label="Sign up"
          styles="text-dark hover:text-light bg-light hover:bg-transparent border-dark hover:border-light"
          onClick={handleButtonClick}
        />
      </div>
      {/* responsive */}
      <div className="md:hidden block">
        <FaBars
          fontSize={30}
          className="text-light cursor-pointer"
          onClick={() => setToggleOpen(true)}
        />
        {toggleOpen && (
          <div className="w-full fixed top-0 left-0 right-0 z-[30] flex flex-col justify-center items-center min-h-screen bg-primary transition-all duration-500 ease-in-out slide-bottom">
            <IoClose
              fontSize={30}
              className="absolute top-5 right-5 sm:right-10 cursor-pointer"
              onClick={() => setToggleOpen(false)}
            />
            <ul className="flex flex-col justify-center items-center gap-8">
              {navItems.map(({ path, title }) => (
                <li
                  key={title}
                  className="text-lg ss:text-xl sm:2xl font-bold text-light hover:text-white capitalize transition-all duration-300 ease-linear"
                >
                  <NavItem path={path} title={title} />
                </li>
              ))}
            </ul>
            <div
              className="flex sm:hidden justify-center items-center gap-4 mt-8"
              onClick={() => setToggleOpen(false)}
            >
              <Button
                label="Sign up"
                styles="text-dark hover:text-light bg-light hover:bg-transparent border-dark hover:border-light"
                onClick={handleButtonClick}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
