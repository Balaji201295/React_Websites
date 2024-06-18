import React from "react";
import { SectionHeading } from "../components";
import styles, { layout } from "../style";
import { Icon_15, Image_6 } from "../assets";

const points = [
  {
    title: "100% Natural Product",
    content:
      "Simply dummy text of the printing and typesetting industry Lorem Ipsum",
  },
  {
    title: "Increases resistance",
    content:
      "Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing",
  },
];

const WhyChooseUs = () => (
  <section className={`${styles.paddingY} ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <SectionHeading
        title="We do not buy from the open market & traders."
        subtitle="Why Choose us?"
      />
      <p className={`${styles.paragraph} my-4`}>
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard the 1500s, when an unknown
      </p>
      <div className={`${styles.flexStart} flex-col gap-4`}>
        {points.map((item, index) => (
          <div key={index}>
            <div
              className={`w-full max-w-max flex justify-start items-center gap-4 bg-[#ECECEC] rounded-[60px] py-4 px-6`}
            >
              <img src={Icon_15} alt="Icon" />
              <h4 className="text-base sm:text-lg font-medium text-primary">
                {item.title}
              </h4>
            </div>
            <p className={`${styles.paragraph} max-w-[400px] md:ml-14 mt-3`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={Image_6} alt="Image" className="w-full h-full object-contain" />
    </div>
  </section>
);
export default WhyChooseUs;
