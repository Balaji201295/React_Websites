import React from "react";
import { Location_Img } from "../assets";
import { SectionHeading } from "../components";
import styles from "../style";
const locationDetails = [
  {
    city: "New York, USA:",
    address: "299 Park Avenue New York, New York 10171",
  },
  {
    city: "London, UK:",
    address: "30 Stamford Street, London SE1 9LQ",
  },
];
const Location = () => (
  <section className={`${styles.boxWidth} ${styles.padding}`}>
    <div className="bg__img bg_location rounded-3xl p-4 ss:p-6 sm:p-8 md:p-12 lg:p-16">
      <div className="w-full ml-auto sm:max-w-[450px] bg-white rounded-[30px] p-4 sm:p-6 md:p-8">
        <SectionHeading title="Our Farms" subtitle="Location" />
        <p className={`${styles.paragraph} mt-4`}>
          Established fact that a reader will be distracted by the readable
          content of a page when looking a layout. The point of using.
        </p>
        <ul className={`${styles.flexStart} flex-col gap-4 mt-4`}>
          {locationDetails.map((item, index) => (
            <li key={index} className={`${styles.flexStart} gap-4`}>
              <img src={Location_Img} alt="Location" className="w-8 h-8" />
              <div className={`${styles.flexStart} flex-col max-w-48`}>
                <h4 className="text-base sm:text-lg font-semibold text-primary">
                  {item.city}
                </h4>
                <p className={`${styles.paragraph}`}>{item.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
export default Location;
