import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-wrap  gap-12`}
  >
    {stats.map((item, index) => (
      <div
        key={index}
        className={`${styles.flexCenter} flex-col text-center w-[150px] h-[150px]  outline outline-4 outline-offset-[6px] outline-green rounded-full bg-light`}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-primary">
          {item.value}
        </h3>
        <p className="text-sm sm:text-base text-primary font-medium">
          {item.text}
        </p>
      </div>
    ))}
  </section>
);
export default Stats;
