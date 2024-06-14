import React from "react";
import styles from "../style";
import { benefits } from "../constants";
const Benefits = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col md:flex-row gap-8`}
  >
    {benefits.map((item, index) => (
      <article
        key={index}
        className={`flex-1 ${styles.ItemStart} flex-col gap-2 rounded-xl p-4 sm:p-6 md:p-8 min-h-64`}
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <p
          className={`text-xl sm:text-2xl font-normal font-tail ${
            index === benefits.length - 1 ? "text-green" : "text-white"
          }`}
        >
          {item.type}
        </p>
        <h3
          className={`text-2xl sm:text-3xl font-bold ${
            index === benefits.length - 1 ? "text-primary" : "text-white"
          }`}
        >
          {item.title}
        </h3>
      </article>
    ))}
  </section>
);
export default Benefits;
