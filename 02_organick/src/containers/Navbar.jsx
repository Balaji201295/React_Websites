import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { navItems } from "../constants";
import styles from "../style";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Logo } from "../assets";

const NavbarLinks = ({ dropdownOpen, toggleDropdown, handleNavLinkClick }) => (
  <ul className="md:flex hidden flex-1 justify-start items-center gap-8 ml-12">
    {navItems.map((item, index) => (
      <NavbarDropdown
        key={index}
        index={index}
        item={item}
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
        handleNavLinkClick={handleNavLinkClick}
      />
    ))}
  </ul>
);

const NavbarDropdown = ({
  item,
  index,
  dropdownOpen,
  toggleDropdown,
  handleNavLinkClick,
  customStyle,
}) => (
  <li
    className={`capitalize relative ${
      customStyle ? customStyle : "text-base font-bold"
    }`}
    onMouseEnter={() => item.subtitle && toggleDropdown(index)}
    onMouseLeave={() => item.subtitle && toggleDropdown(null)}
  >
    <NavLink
      to={item.path || ""}
      className={styles.flexCenter}
      onClick={(e) => {
        e.preventDefault();
        handleNavLinkClick(item.path);
      }}
    >
      {item.title}
      {item.subtitle && (
        <TiArrowSortedDown
          className={`transition-all duration-300 ease-linear ${
            dropdownOpen === index ? "rotate-180" : "rotate-0"
          }`}
        />
      )}
    </NavLink>
    {item.subtitle && (
      <ul className={`dropdown-menu ${dropdownOpen === index ? "show" : ""}`}>
        {item.subtitle.map((subItem, subIndex) => (
          <li key={subIndex}>
            <NavLink
              to={subItem.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(subItem.path);
              }}
            >
              {subItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (path) => {
    setToggleMenu(false);
    setDropdownOpen(null);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(index === dropdownOpen ? null : index);
  };

  return (
    <nav
      className={`${styles.boxWidth} ${
        styles.paddingX
      } w-full fixed top-0 left-0 right-0 z-[999] ${
        styles.flexBetween
      } transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-primary text-light py-3" : "text-primary bg-white py-4"
      }`}
    >
      <p className={`${styles.flexCenter} gap-2`}>
        <img
          src={Logo}
          alt="Organick"
          className="w-[36px] h-[53px] object-contain"
        />
        <span className="text-2xl sm:text-3xl font-bold">Organick</span>
      </p>
      <NavbarLinks
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
        handleNavLinkClick={handleNavLinkClick}
      />
      <div className="md:flex hidden justify-end items-center gap-4">
        <form
          className={`${styles.flexBetween} bg-[#fafafa] rounded-[36px] w-full max-w-[240px] p-2`}
        >
          <input
            type="text"
            className={`w-full bg-transparent outline-none text-primary`}
          />
          <button type="submit" className="bg-green p-2 rounded-full">
            <FaSearch color="#fff" />
          </button>
        </form>
        <div
          className={`${styles.flexBetween} border border-[#e0e0e0] p-2 rounded-[36px] gap-2`}
        >
          <div
            className={`${
              isScrolled ? "bg-white" : "bg-primary"
            } p-2 rounded-full`}
          >
            <MdOutlineShoppingCart
              className={`${isScrolled ? "text-primary" : "text-white"}`}
            />
          </div>
          <p>Cart(0)</p>
        </div>
      </div>
      <div className="md:hidden block">
        <FaBars
          fontSize={30}
          className="cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div
            className={`w-full fixed top-0 left-0 right-0 z-[30] ${styles.flexCenter} flex-col min-h-screen bg-light transition-all duration-500 ease-in-out slide-bottom`}
          >
            <IoClose
              fontSize={30}
              className="absolute top-5 right-5 sm:right-10 cursor-pointer text-primary"
              onClick={() => setToggleMenu(false)}
            />
            <ul className={`${styles.flexCenter} flex-col mt-8 gap-6`}>
              {navItems.map((item, index) => (
                <NavbarDropdown
                  key={index}
                  index={index}
                  item={item}
                  customStyle="text-2xl text-primary font-medium"
                  dropdownOpen={dropdownOpen}
                  toggleDropdown={toggleDropdown}
                  handleNavLinkClick={handleNavLinkClick}
                />
              ))}
            </ul>
            <div className="md:hidden flex flex-col justify-center items-center gap-4 my-12">
              <form
                className={`${styles.flexBetween} bg-primary rounded-[36px] w-full max-w-[240px] p-2 gap-2`}
              >
                <input
                  type="text"
                  className="w-full bg-white rounded-[36px] py-1 px-4 outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-green p-2 rounded-full"
                >
                  <FaSearch />
                </button>
              </form>
              <div
                className={`${styles.flexBetween} border border-[#e0e0e0] text-primary p-2 rounded-[36px] gap-2`}
              >
                <div className="bg-primary p-2 rounded-full">
                  <MdOutlineShoppingCart color="#fff" />
                </div>
                <p>Cart(0)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
