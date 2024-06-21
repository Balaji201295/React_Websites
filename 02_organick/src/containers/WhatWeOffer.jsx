import React from "react";
import { groceries } from "../constants";
import { SectionHeading } from "../components";
import styles from "../style";

const WhatWeOffer = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col text-center bg-primary`}
  >
    <SectionHeading
      title="What We Offer for You"
      subtitle="about us"
      color="text-white"
    />
    <div className="w-full flex flex-wrap justify-center items-center gap-6 mt-8">
      {groceries.map(({ imgUrl, text }, index) => (
        <div
          key={index}
          className="flex-1 flex justify-center items-center flex-col text-center gap-2 min-w-full xs:min-w-[240px] max-w-[240px]"
        >
          <img
            src={imgUrl}
            alt={text}
            className="w-full h-full object-contain rounded-[24px]"
          />
          <h5 className="text-base sm:text-lg font-medium text-white capitalize">
            {text}
          </h5>
        </div>
      ))}
    </div>
  </section>
);
export default WhatWeOffer;
