import React from "react";
import { Icon_13, Icon_14, Image_5 } from "../assets";
import { Button, SectionHeading } from "../components";
import styles, { layout } from "../style";

const createThings = [
  {
    icon: Icon_13,
    title: "Modern Agriculture Equipment",
  },
  {
    icon: Icon_14,
    title: "No growth hormones are used",
  },
];

const AboutInfo = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${layout.sectionReverse}`}
  >
    <div className={layout.sectionImgReverse}>
      <img src={Image_5} alt="Image" className="w-full h-full object-contain" />
    </div>
    <div className={layout.sectionInfo}>
      <SectionHeading
        title="We do Creative Things for Success"
        subtitle="About Us"
      />
      <p className={`${styles.paragraph} mt-4`}>
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley. <br />
        <br /> Simply dummy text of the printing and typesetting industry. Lorem
        had ceased to been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley.
      </p>
      <div
        className={`w-full ${styles.flexStart} flex-wrap gap-4 md:gap-8 my-4`}
      >
        {createThings.map((item, index) => (
          <div
            key={index}
            className={`${styles.flexStart} flex-1 gap-2 min-w-[200px]`}
          >
            <img src={item.icon} alt={item.title} />
            <h4 className="text-base sm:text-lg font-medium text-primary max-w-[180px]">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
      <Button label="Explore More" />
    </div>
  </section>
);
export default AboutInfo;
