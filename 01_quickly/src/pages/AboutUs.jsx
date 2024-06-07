import React from "react";
import {
  OurStory,
  Stats,
  Team,
  Testimonials,
  Trial,
  Work,
} from "../containers";
import { Image_3 } from "../assets";
import styles from "../style";
const AboutUs = () => (
  <>
    <section
      className={`w-full ${styles.boxWidth} flex flex-col justify-between items-center md:flex-row gap-12 ${styles.padding} mt-20`}
    >
      <div className="flex-1 flex flex-col justify-center items-start">
        <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
          We wanted to build a company that you will love to work with and
          connect to
        </h1>
        <p className={`${styles.paragraph} max-w-[600px]`}>
          We’re doing things bigly, I mean really quite big. The way we operate
          is different from other companies because we disrupt. We break the
          code, we crack the code as well.
        </p>
      </div>
      <div className="flex-[0.75] w-full flex justify-center md:justify-end items-center">
        <img
          src={Image_3}
          alt="Image"
          className="w-full ss:w-[80%] h-full object-contain"
        />
      </div>
    </section>
    <Stats />
    <OurStory />
    <Work />
    <Team />
    <Testimonials />
    <Trial />
  </>
);
export default AboutUs;
