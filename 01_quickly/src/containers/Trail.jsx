import React from "react";
import { Button } from "../components";
import styles from "../style";
import { Check_Square } from "../assets";

const points = [
  "No obligation",
  "Free onboarding",
  "14 day free trial",
  "14 day free trial",
];

const Trail = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left gap-12 bg-primary`}
  >
    <div className="flex-1">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Sign up for your free trial, with the world’s best product tool
      </h2>
      <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8 md:mt-12">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex justify-start items-center gap-4 min-w-[160px]"
          >
            <img src={Check_Square} alt="Check" />
            <span className="text-sm font-normal text-white">{point}</span>
          </li>
        ))}
      </ul>
    </div>
    <Button label="Start your trail" styles="bg-white text-primary" />
  </section>
);
export default Trail;
