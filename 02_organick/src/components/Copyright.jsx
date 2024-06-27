import React from "react";
import styles from "../style";
const Copyright = () => {
  return (
    <div
      className={`${styles.boxWidth} border-t border-[#D4D4D4] ${styles.flexCenter}`}
    >
      <p className="text-base sm:text-lg font-normal text-[#525C60] py-4">
        Copyright © <span className="font-bold">Organick</span>
      </p>
    </div>
  );
};
export default Copyright;
