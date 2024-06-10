import React from "react";
import styles, { layout } from "../style";
import { Check_Square, Image_4 } from "../assets";
import { SectionHeading } from "../components";

const featureContent = [
  {
    title: "Roadmap support",
    content:
      "Need to assign a designer to your new project, that’s easy with quickly",
  },
  {
    title: "Track progress and map your roadmap flexibly",
    content:
      "Track project progress with swim lanes, road maps and other tools",
  },
];

const FeatureInfo = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${layout.sectionReverse}`}
  >
    <div className={layout.sectionImgReverse}>
      <img src={Image_4} alt="Image" className="w-full h-full object-contain" />
    </div>
    <div className={layout.sectionInfo}>
      <SectionHeading
        title="The source of truth for all of your
product decisions"
        content="Not only can you create and track projects, you can also 
work on road maps, map them to your OKRs and ensure your
entire team is aligned on the most important work."
      />
      <ul className="flex flex-col justify-start items-start gap-4 mt-12">
        {featureContent.map((item, index) => (
          <li
            key={index}
            className={`${styles.flexStart} md:max-w-[400px] gap-4`}
          >
            <img
              src={Check_Square}
              alt="Check"
              className="w-6 h-6 object-contain mt-1"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-dark pb-2">
                {item.title}
              </h3>
              <p className={`${styles.paragraph}`}>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
export default FeatureInfo;
