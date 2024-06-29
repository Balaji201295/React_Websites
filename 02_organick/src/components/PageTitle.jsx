import React from "react";
import styles from "../style";
const PageTitle = ({ title }) => {
  return (
    <section
      className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} w-full bg-[#E3F1E9] min-h-[30vh]`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
        {title}
      </h2>
    </section>
  );
};
export default PageTitle;
