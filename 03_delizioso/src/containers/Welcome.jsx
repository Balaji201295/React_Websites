import React from "react";
import { Button, SectionHeading } from "../components";
import { Image_2 } from "../assets";
import styles, { layout } from "../style";
const Welcome = () => (
  <section className={`bg-[#3FC66E]/10 ${styles.boxWidth}`}>
    <div className={`${styles.padding} ${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img
          src={Image_2}
          alt="Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className={layout.sectionInfo}>
        <SectionHeading text="Welcome to" spanText="delizioso" />
        <p className={`${styles.paragraph} my-6 max-w-[400px]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam
        </p>
        <Button label="See our menu" />
      </div>
    </div>
  </section>
);
export default Welcome;
