import React from "react";
import styles from "../style";
const SectionHeading = ({ text, spanText }) => (
  <h2 className={`${styles.heading}`}>
    {text}&nbsp;<span className="text-orange">{spanText}</span>
  </h2>
);
export default SectionHeading;
