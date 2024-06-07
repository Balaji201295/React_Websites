import React from "react";
import { brands } from "../constants";
import styles from "../style";
const Brands = () => (
  <section
    className={`w-full ${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col gap-8 text-center`}
  >
    <p className="text-base sm:text-lg font-normal text-primary">
      We work with some of the world’s&nbsp;
      <span className="font-bold">leading</span> companies
    </p>
    <div className={`w-full ${styles.flexCenter} flex-wrap gap-8 sm:gap-12`}>
      {brands.map(({ imgUrl }, index) => (
        <figure
          key={index}
          className="flex justify-center items-center min-w-[80px]"
        >
          <img src={imgUrl} alt="Brand" />
        </figure>
      ))}
    </div>
  </section>
);
export default Brands;
