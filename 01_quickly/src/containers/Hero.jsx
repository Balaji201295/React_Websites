import React from "react";
import { Button } from "../components";
import { Image_1 } from "../assets";
import styles, { layout } from "../style";
const Hero = () => (
  <header
    className={`w-full ${styles.boxWidth} ${styles.paddingX} ${layout.section} mt-20`}
  >
    <div className={`${layout.sectionInfo} gap-6`}>
      <h5 className="text-base sm:text-lg font-bold text-primary">
        The new way to work online
      </h5>
      <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] leading-snug font-bold">
        Get the important work done faster
      </h1>
      <p className="text-base sm:text-lg font-normal text-dark max-w-[450px]">
        With Quickly, you can get more productive work done in far less time
        than ever before.
      </p>
      <div className="flex justify-start items-center gap-4">
        <Button label="Sign Up" width="w-full min-w-[120px] text-center" />
        <Button
          label="Learn more"
          width="w-full min-w-[120px] text-center"
          styles="text-dark hover:text-light bg-white hover:bg-primary border-dark hover:border-light "
        />
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img
        src={Image_1}
        alt="Image"
        className="w-full ss:w-[80%] h-full object-contain"
      />
    </div>
  </header>
);
export default Hero;
