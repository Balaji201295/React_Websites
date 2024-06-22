import React from "react";
import { BG_1 } from "../assets";
import { Button, SectionHeading } from "../components";
import styles from "../style";
const Hero = () => (
  <header
    className={`${styles.boxWidth} ${styles.padding} section_height flex flex-col justify-center items-start bg_hero bg__img mt-20 relative`}
  >
    <div className="absolute w-full h-full top-0 left-0 z-[1]">
      <img src={BG_1} alt="Image" className="w-full h-full object-cover" />
    </div>
    <div
      className={`w-full max-w-[600px] ${styles.flexStart} ${styles.paddingX} flex-col gap-4 relative z-10`}
    >
      <SectionHeading
        title="Choose the best healthier way of life"
        subtitle="100% Natural Food"
        headtext="text-4xl sm:text-5xl md:text-6xl max-w-[440px]"
      />
      <Button label="Explore Now" customStyle={true} />
    </div>
  </header>
);
export default Hero;
