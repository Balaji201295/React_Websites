import React from "react";
import { contactDetails, footerLinks, socialLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";
import styles from "../style";
import { Logo } from "../assets";
const Footer = () => (
  <footer
    className={`${styles.boxWidth} ${styles.padding} ${styles.ItemStart} flex-col md:flex-row gap-12`}
  >
    <div
      className={`w-full flex-1 flex flex-col justify-center md:justify-start items-center md:items-end text-center md:text-right`}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">
        Contact Us
      </h3>
      <ul>
        {contactDetails.map((item, index) => (
          <li
            key={index}
            className={`${index !== contactDetails.length ? "mb-4" : ""}`}
          >
            <h4 className="text-base sm:text-lg font-semibold text-dark">
              {item.title}
            </h4>
            <p className="text-base font-normal text-dark">{item.link}</p>
          </li>
        ))}
      </ul>
    </div>
    <div
      className={`flex-[1.25] flex ${styles.paddingX} flex-col text-center gap-4 md:border-x border-[#D4D4D4] min-h-full self-stretch`}
    >
      <p className={`${styles.flexCenter} gap-2`}>
        <img
          src={Logo}
          alt="Organick"
          className="w-[36px] h-[53px] object-contain"
        />
        <span className="text-2xl sm:text-3xl font-bold text-primary">
          Organick
        </span>
      </p>
      <p className={styles.paragraph}>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing
      </p>
      <div className={`${styles.flexCenter} gap-4 my-8`}>
        {socialLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className={`w-[48px] h-[48px] bg-[#EFF6F1] text-primary hover:text-[#EFF6F1] hover:bg-primary transition-all duration-300 ease-in-out ${styles.flexCenter} rounded-full`}
            >
              <Icon fontSize={20} />
            </a>
          );
        })}
      </div>
    </div>
    <div className="w-full flex-1 flex flex-col justify-center md:justify-start md:items-start items-center text-center md:text-left">
      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">
        Utility Pages
      </h3>
      <ul>
        {footerLinks.map((item, index) => (
          <li
            key={index}
            className={`text-base font-normal text-dark ${
              index !== footerLinks.length ? "mb-4" : ""
            }`}
          >
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
export default Footer;
