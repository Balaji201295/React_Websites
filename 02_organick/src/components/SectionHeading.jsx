import React from "react";
import styles from "../style";
const SectionHeading = ({ title, subtitle, headtext, align, color }) => (
  <div
    className={`flex flex-col justify-start gap-2 ${
      align ? "text-center sm:text-left items-center sm:items-start" : ""
    }`}
  >
    <p className="text-xl sm:text-2xl font-tail font-normal text-green capitalize">
      {subtitle}
    </p>
    {title && (
      <h2
        className={`font-bold ${color ? color : "text-primary"} ${
          headtext ? headtext : "text-3xl sm:text-4xl md:text-5xl"
        }`}
      >
        {title}
      </h2>
    )}
  </div>
);
export default SectionHeading;
