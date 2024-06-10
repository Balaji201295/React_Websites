import React from "react";
const Button = ({ label, styles, width, onClick, type }) => (
  <button
    type={type ? type : "button"}
    className={`text-base font-normal py-[10px] px-4 rounded-lg transition-all duration-300 ease-linear border ${
      width && width
    } ${
      styles
        ? styles
        : "text-light bg-primary border-primary hover:bg-light hover:text-dark"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);
export default Button;
