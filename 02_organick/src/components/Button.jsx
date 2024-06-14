import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import styles from "../style";
const Button = ({ label, type, customStyle, height, icon = true, onClick }) => (
  <button
    type={type ? type : "button"}
    onClick={onClick}
    className={`${styles.flexCenter} ${
      height && height
    } gap-2 text-base font-bold border capitalize rounded-2xl py-4 px-6 transition-all duration-300 ease-in-out ${
      customStyle
        ? "text-primary bg-yellow border-yellow hover:text-yellow hover:bg-primary"
        : "text-white bg-primary border-primary hover:text-primary hover:bg-white"
    }`}
  >
    {label}
    {icon && <FaCircleArrowRight />}
  </button>
);
export default Button;
