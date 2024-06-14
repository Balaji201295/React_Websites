import React from "react";
import { Button, SectionHeading } from "../components";
import { Icon_1, Icon_2, Image_3 } from "../assets";
import styles, { layout } from "../style";

const aboutItem = [
  {
    icon: Icon_1,
    title: "Organic Foods Only",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    icon: Icon_2,
    title: "Quality Standards",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

const AboutUs = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${layout.sectionReverse} bg-light`}
  >
    <div className={layout.sectionImgReverse}>
      <img src={Image_3} alt="Image" className="w-full h-full object-contain" />
    </div>
    <div className={layout.sectionInfo}>
      <SectionHeading
        title="We Believe in Working Accredited Farmers"
        subtitle="About Us"
      />
      <p className={`${styles.paragraph} max-w-[690px] mt-4`}>
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <ul className={`${styles.flexCenter} flex-col gap-6 max-w-[420px] my-10`}>
        {aboutItem.map((item, index) => (
          <li key={index} className={`${styles.flexCenter} gap-4`}>
            <img src={item.icon} alt={item.title} className="w-20 h-20" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-primary">
                {item.title}
              </h3>
              <p className="text-sm font-normal text-dark">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button label="Shop Now" />
    </div>
  </section>
);
export default AboutUs;
