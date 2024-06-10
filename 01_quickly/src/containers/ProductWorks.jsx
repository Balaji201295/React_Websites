import React from "react";
import styles from "../style";
import { productWorksItems } from "../constants";
import { Image_5 } from "../assets";
import { Button, SectionHeading } from "../components";
const ProductWorks = () => (
  <section className={`${styles.boxWidth} ${styles.padding} bg-[#FAFAFA]`}>
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-12 text-center mb-12 border-b border-primary/10 pb-12">
      <SectionHeading
        title="How the product works"
        content="I want to fly like an angel flare on a ten feet snare I want to dance until the sun comes up I want to fight your cousin."
        align="text-center sm:text-left"
      />
      <Button label="Start your trial" />
    </div>
    <div className=" flex flex-col md:flex-row justify-center sm:justify-between items-start gap-6">
      <ul className="w-full flex-1 flex flex-col justify-start items-start text-white gap-4 mt-4">
        {productWorksItems.map((item, index) => (
          <li
            key={index}
            className="w-full max-w-[400px] bg-primary rounded-lg py-6 px-8 "
          >
            <h3 className="text-sm sm:text-base font-bold pb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm">{item.content}</p>
          </li>
        ))}
      </ul>
      <div className="w-full flex-[1.5] flex justify-center md:justify-end items-center">
        <img
          src={Image_5}
          alt="Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
);
export default ProductWorks;
