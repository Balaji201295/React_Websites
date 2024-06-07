import React from "react";
import { statsInfo } from "../constants";
import styles from "../style";
const StatsItems = () => (
  <div className="flex flex-wrap justify-start md:justify-center items-start gap-10">
    {statsInfo.map((item, index) => (
      <article
        key={index}
        className="flex-1 flex flex-col justify-start items-start min-w-[200px] max-w-[220px]"
      >
        <p className="text-4xl md:text-5xl font-bold text-primary mb-6">
          {item.value}
        </p>
        <h4 className="text-base sm:text-lg font-bold text-dark pb-2">
          {item.title}
        </h4>
        <p className={styles.paragraph}>{item.content}</p>
      </article>
    ))}
  </div>
);
export default StatsItems;
