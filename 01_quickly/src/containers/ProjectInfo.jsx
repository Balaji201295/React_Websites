import React from "react";
import { projectInfoItems } from "../constants";
import { SectionHeading } from "../components";
import styles from "../style";
const ProjectInfo = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${styles.flexStart} flex-col`}
  >
    <SectionHeading
      title="What Quickly can do for you"
      content="We’re more than just another project management software."
    />
    <div
      className={`w-full ${styles.flexStart} flex-wrap gap-6 lg:gap-4 mt-12`}
    >
      {projectInfoItems.map((item, index) => (
        <article
          key={index}
          className={`${styles.flexStart} flex-1 flex-col gap-4 min-w-[240px]`}
        >
          <img src={item.icon} alt={item.title} />
          <h4 className="text-base sm:text-lg font-bold text-dark">
            {item.title}
          </h4>
          <p className={`${styles.paragraph} xs:max-w-[260px]`}>
            {item.content}
          </p>
        </article>
      ))}
    </div>
  </section>
);
export default ProjectInfo;
