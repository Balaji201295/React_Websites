import React from "react";
import styles from "../style";
const SectionHeading = ({ title, content, align, width }) => (
  <div
    className={` flex-col gap-4 max-w-[550px] ${width} ${
      align ? `${align} ${styles.flexCenter}` : `${styles.flexStart}`
    }
  `}
  >
    <h2 className={styles.heading}>{title}</h2>
    {content && <p className={styles.paragraph}>{content}</p>}
  </div>
);
export default SectionHeading;
