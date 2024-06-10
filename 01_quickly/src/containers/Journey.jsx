import React from "react";
import { Image_6 } from "../assets";
import styles from "../style";
import { Button, SectionHeading } from "../components";
const Journey = () => (
  <section
    className={` ${styles.boxWidth} w-full flex flex-col md:flex-row justify-center items-center gap-6 pt-6 sm:pt-16`}
  >
    <div
      className={`flex-1 flex flex-col justify-between items-start ${styles.paddingX}`}
    >
      <SectionHeading
        title="Let’s start your journey towards winning"
        content="Time is scarce, so let’s get the show on the road and start your amazing free trial today"
        width="max-w-[400px]"
      />
      <div className="mt-16 sm:mt-24 md:mt-40">
        <Button label="Start your trail" />
      </div>
    </div>
    <div className="flex-1">
      <img src={Image_6} alt="Image" className="w-full h-full" />
    </div>
  </section>
);
export default Journey;
