import React from "react";
import { projectSourceItems } from "../constants";
import { SectionHeading } from "../components";
import styles, { layout } from "../style";
import { Image_2 } from "../assets";
const ProjectSource = () => (
  <section
    className={`w-full ${styles.boxWidth} ${styles.ItemStart} ${styles.padding} ${layout.section} bg-[#FAFAFA]`}
  >
    <div className={`${layout.sectionInfo} gap-6`}>
      <SectionHeading
        title="The source of truth for all of your
product decisions"
        content="This goes further than what you expected, here you can communicate two really important product features with icons."
      />
      <div className="w-full flex flex-wrap justify-start items-start gap-6">
        {projectSourceItems.map((item, index) => (
          <article
            key={index}
            className="w-full flex-1 flex flex-col justify-start items-start gap-2 min-w-[200px]"
          >
            <img src={item.icon} alt={item.title} />
            <h4 className="text-base sm:text-lg font-bold text-dark">
              {item.title}
            </h4>
            <p className={`${styles.paragraph}`}>{item.content}</p>
          </article>
        ))}
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={Image_2} alt="Image" className="w-full h-full object-contain" />
    </div>
  </section>
);
export default ProjectSource;
