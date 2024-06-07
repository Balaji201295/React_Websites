import React from "react";
import { footerLinks } from "../constants";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../style";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <footer
      className={`w-full ${styles.boxWidth} pt-16 ${styles.flexCenter} flex-col bg-dark`}
    >
      <div
        className={`w-full flex flex-col md:flex-row flex-wrap justify-between items-start gap-12 ${styles.paddingX} pb-12`}
      >
        {/* logo */}
        <div>
          <p className="text-2xl font-bold text-white mb-10">
            Quickly<span className="text-light">.</span>
          </p>
          <address className="text-base text-[#DCF2ED] leading-loose">
            32 - 44 Upper Rupert Street,
            <br />
            W12 8DY Kensington,
            <br />
            United Kingdom
          </address>
        </div>
        {/* links */}
        <div className="flex-1 flex flex-wrap justify-start sm:justify-end items-start gap-12">
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className={`${styles.flexStart} flex-col min-w-[125px]`}
            >
              <h3 className="text-lg font-bold text-white mb-6">
                {footerLink.title}
              </h3>
              <ul className="flex flex-col gap-5">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-sm sm:text-base font-normal text-[#DCF2ED] capitalize hover:text-white transition-all duration-300 ease-linear"
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => handleNavLinkClick(link.path)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-full ${styles.flexCenter} border-t border-[#B8E4DA]/20 py-4`}
      >
        <p className="text-sm font-normal text-[#DCF2ED]">
          &copy;&nbsp;Copyright 2024 Quickly LTD
        </p>
      </div>
    </footer>
  );
};
export default Footer;
