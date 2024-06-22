import React from "react";
import { agricultureItems } from "../constants";
import { Button, SectionHeading } from "../components";
import { Image_7 } from "../assets";
import styles from "../style";
import { Link } from "react-router-dom";
const WhatWeGrow = () => {
  return (
    <section
      className={`${styles.padding} ${styles.flexCenter} flex-col text-center`}
    >
      <SectionHeading
        title="Better Agriculture for Better Future"
        subtitle="What we Grow"
      />
      <div
        className={`w-full ${styles.flexCenter} flex-col md:flex-row gap-4 md:gap-0 my-12`}
      >
        <ul className="w-full flex-[0.75] flex flex-col justify-start items-end text-right gap-4">
          {agricultureItems
            .slice(0, 3)
            .map(({ icon, title, content }, index) => (
              <li key={index} className="flex flex-col items-end gap-1">
                <img src={icon} alt={title} className="w-[42px] h-[42px]" />
                <h4 className="text-base sm:text-lg font-medium text-primary">
                  {title}
                </h4>
                <p className={`${styles.paragraph} max-w-[340px]`}>{content}</p>
              </li>
            ))}
        </ul>
        <figure className="flex-1">
          <img
            src={Image_7}
            alt="Image"
            className="w-full h-full object-contain"
          />
        </figure>
        <ul className="w-full flex-[0.75] flex flex-col justify-start items-start text-left gap-4">
          {agricultureItems
            .slice(3, 6)
            .map(({ icon, title, content }, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-start gap-1"
              >
                <img src={icon} alt={title} className="w-[42px] h-[42px]" />
                <h4 className="text-base sm:text-lg font-medium text-primary">
                  {title}
                </h4>
                <p className={`${styles.paragraph} max-w-[340px]`}>{content}</p>
              </li>
            ))}
        </ul>
      </div>
      <Link to="/single-service">
        <Button label="Explore More" icon={true} />
      </Link>
    </section>
  );
};
export default WhatWeGrow;
