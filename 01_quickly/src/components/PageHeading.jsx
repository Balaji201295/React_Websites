import React from "react";
import styles from "../style";
const PageHeading = ({ title, subHeading }) => (
  <div
    className={`w-full ${styles.flexCenter} ${styles.boxWidth} ${styles.paddingX} bg-[#FAFAFA] flex-col text-center gap-6 pt-32 pb-16`}
  >
    <p className="text-base font-bold text-primary">{subHeading}</p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
      {title}
    </h2>
  </div>
);
export default PageHeading;
