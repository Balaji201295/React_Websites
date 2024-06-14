import React from "react";
import { organicItems } from "../constants";
import styles from "../style";
const OrganicItems = () => (
  <section
    className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter} flex-col sm:flex-row flex-wrap gap-4 bg-[#F1F8F4]`}
  >
    {organicItems.map(({ imgUrl, text }, index) => (
      <div
        key={index}
        className={`${styles.flexCenter} flex-1 sm:min-w-[280px] sm:max-w-[280px] md:max-w-full min-h-[320px] bg__img`}
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "100%",
        }}
      >
        <p className="text-base font-medium text-primary rounded-lg bg-white py-3 px-10">
          {text}
        </p>
      </div>
    ))}
  </section>
);
export default OrganicItems;
