import React from "react";
import { Button, SectionHeading } from "../components";
import { customerItems } from "../constants";
import styles from "../style";
import { Quote } from "../assets";
const Customers = () => (
  <section
    className={`w-full ${styles.boxWidth} ${styles.padding} ${styles.flexStart} flex-col bg-[#FAFAFA]`}
  >
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-12 text-center mb-12">
      <SectionHeading
        title="Our customers keep talking"
        content="Listen to what they say about our product offering right here"
        align="text-center"
      />
      <Button label="Find out more" />
    </div>
    <div className={`w-full ${styles.flexCenter} flex-wrap gap-6`}>
      {customerItems.map((item, index) => (
        <article
          key={index}
          className={`flex-1 ${styles.flexStart} flex-col min-w-full xs:min-w-[300px] max-w-[350px] min-h-[400px] gap-4 bg-white rounded-xl p-4 sm:p-6 md:p-8`}
        >
          <img src={Quote} alt="Quote" className="w-[31px] h-[25px]" />
          <p className="text-lg sm:text-xl text-dark font-normal">
            {item.content}
          </p>
          <div className={`${styles.flexStart} flex-col mt-auto`}>
            <h4 className="text-base sm:text-lg font-bold text-dark">
              {item.customerName}
            </h4>
            <p className="text-sm text-primary font-normal">{item.position}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default Customers;
