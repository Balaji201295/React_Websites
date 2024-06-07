import React from "react";
import { SectionHeading } from "../components";
import { workImages } from "../constants";
import styles from "../style";
const Work = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col`}
  >
    <SectionHeading
      title="Work shouldn’t be boring"
      content="I want to fly like an angel flare on a ten feet snare I want to dance until the sun comes I want to fight your cousin."
      align="text-center"
      width="max-w-[420px]"
    />
    <div
      className={`flex justify-center items-start flex-col xs:flex-row flex-wrap gap-6 mt-12`}
    >
      {workImages.map(({ imgUrl }, index) => (
        <div
          key={index}
          className={`w-full flex-1 min-w-[250px] max-w-[250px] ${
            index % 2 != 0 ? "sm:mt-24" : "sm:mt-0"
          }`}
        >
          <img src={imgUrl} alt="Image" />
        </div>
      ))}
    </div>
  </section>
);
export default Work;
