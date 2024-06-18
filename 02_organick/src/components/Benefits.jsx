import React from "react";
import styles from "../style";
import { benefitItems } from "../constants";
const Benefits = () => (
  <section
    className={`w-full ${styles.flexCenter} pb-6 sm:pb-16 flex-wrap gap-4`}
  >
    {benefitItems.map((item, index) => (
      <article
        key={index}
        className={`${styles.flexCenter} bg-white flex-col text-center gap-2 min-w-[240px] max-w-[260px] rounded-[30px] px-4 py-8 sm:px-6`}
      >
        <img
          src={item.icon}
          alt={item.title}
          className="w-20 h-20 object-contain"
        />
        <h3 className="text-base sm:text-lg font-bold text-primary">
          {item.title}
        </h3>
        <p className={`${styles.paragraph} max-w-[180px]`}>{item.content}</p>
      </article>
    ))}
  </section>
);
export default Benefits;
