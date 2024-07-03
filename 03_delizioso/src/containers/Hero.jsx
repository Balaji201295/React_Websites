import React from "react";
import { Button } from "../components";
import { Image_1 } from "../assets";
import styles, { layout } from "../style";
const Hero = () => (
  <header
    className={`${styles.boxWidth} ${styles.padding} ${layout.section} mt-24`}
  >
    <div className={layout.sectionInfo}>
      <p className="text-sm sm:text-base text-orange font-raleway bg-orange/20 py-2 px-8 rounded-[50px]">
        Restaurant
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-raleway text-dark my-6">
        Italian Cuisine
      </h1>
      <p className={`${styles.paragraph} max-w-[420px]`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
        senectus dictum arcu sit tristique donec eget.
      </p>
      <div className={`${styles.flexStart} flex-col ss:flex-row gap-6 my-8`}>
        <Button label="order now" width={true} />
        <Button label="reservation" color={true} width={true} />
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={Image_1} alt="Image" className="w-full h-full object-contain" />
    </div>
  </header>
);
export default Hero;
