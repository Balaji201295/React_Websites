import React from "react";
const Button = ({ label, type, color, width }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`text-sm font-semibold rounded-[48px] px-8 py-4 capitalize transition-all duration-300 ease-in-out border-2 text-white hover:bg-white ${
        color
          ? "bg-green hover:text-green border-green "
          : "bg-orange hover:text-orange border-orange"
      } ${width ? "w-full min-w-[200px]" : "w-max"}`}
    >
      {label}
    </button>
  );
};
export default Button;
