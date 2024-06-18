import React from "react";
import styles from "../style";
const PageHeading = ({ bgImage, heading }) => {
  return (
    <div
      className={`${bgImage} bg__img min-h-[50vh] mt-20 ${styles.flexCenter}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary capitalize">
        {heading}
      </h2>
    </div>
  );
};
export default PageHeading;
