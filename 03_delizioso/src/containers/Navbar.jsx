import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components";
import { navItems } from "../constants";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "../style";
import { Logo } from "../assets";
const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);

  // Fixed Navbar Scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 120);
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
  const NavItem = ({ path, title }) => {
    return (
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "text-orange" : "")}
        onClick={() => handleNavLinkClick(path)}
      >
        {title}
      </NavLink>
    );
  };

  return (
    <nav
      className={`${styles.boxWidth} ${
        styles.paddingX
      } w-full fixed top-0 left-0 right-0 z-[999] bg-white flex justify-between items-center transition-all duration-500 ease-linear ${
        isScrolled ? "text-light py-3 shadow-md" : "text-dark py-4"
      }`}
    >
      {/* logo */}
      <div className="flex justify-start items-center">
        <img src={Logo} alt="Delizioso" className="w-[132px] h-[51px]" />
      </div>
      {/* links */}
      <ul className="md:flex hidden flex-1 justify-center items-center gap-8">
        {navItems.map(({ path, title }) => (
          <li key={title} className="text-sm font-medium text-dark capitalize">
            <NavItem path={path} title={title} />
          </li>
        ))}
      </ul>
      {/* others */}
      <div className="sm:flex hidden justify-end items-center w-full md:w-max mr-8 md:mr-0 gap-6">
        <div
          className={`bg-light/20 rounded-full w-[48px] h-[48px] ${styles.flexCenter} cursor-pointer relative`}
        >
          <MdOutlineShoppingCart fontSize={20} className="text-dark" />
          <span className="bg-[#FF3838] text-white text-[8px] px-[4px] rounded-full py-[1px] absolute right-2 top-2">
            3
          </span>
        </div>
        <Button label="log in" color={true} />
      </div>
      {/* responsive */}
      <div className="md:hidden block">
        <FaBars
          fontSize={30}
          className="text-orange cursor-pointer"
          onClick={() => setToggleOpen(true)}
        />
        {toggleOpen && (
          <div className="w-full fixed top-0 left-0 right-0 z-[30] flex flex-col justify-center items-center min-h-screen bg-white transition-all duration-500 ease-linear slide-bottom">
            <IoClose
              fontSize={30}
              className="text-orange absolute top-5 right-5 sm:right-10 cursor-pointer"
              onClick={() => setToggleOpen(false)}
            />
            <ul className="flex flex-col justify-center items-center gap-5">
              {navItems.map(({ path, title }) => (
                <li
                  key={title}
                  className="text-lg sm:text-2xl font-semibold text-dark capitalize"
                >
                  <NavItem path={path} title={title} />
                </li>
              ))}
            </ul>
            <div className="flex sm:hidden justify-center items-center gap-6 mt-6">
              <div
                className={`bg-light/20 rounded-full w-[48px] h-[48px] ${styles.flexCenter} cursor-pointer relative`}
              >
                <MdOutlineShoppingCart fontSize={20} className="text-dark" />
                <span className="bg-[#FF3838] text-white text-[8px] px-[4px] rounded-full py-[1px] absolute right-2 top-2">
                  3
                </span>
              </div>
              <Button label="log in" color={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
