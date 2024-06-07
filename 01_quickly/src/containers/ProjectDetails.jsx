import React from "react";
import { SectionHeading } from "../components";
import { projectDetailsItems } from "../constants";
import styles from "../style";
const ProjectDetails = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col text-center`}
  >
    <SectionHeading
      title="The source of truth for all of your
product decisions"
      align="text-center"
    />
    <div className={`${styles.flexCenter} flex-wrap gap-6 mt-8`}>
      {projectDetailsItems.map((item, index) => (
        <article
          key={index}
          className={`${styles.flexCenter} flex-1 flex-col gap-6 min-w-full xs:min-w-[300px]`}
        >
          <figure className="bg-primary rounded-full flex justify-center items-center xs:min-h-[360px]">
            <img src={item.imgUrl} alt={item.title} />
          </figure>
          <h3 className="text-xl sm:text-2xl font-bold text-dark">
            {item.title}
          </h3>
          <p className={`${styles.paragraph} max-w-[285px]`}>{item.content}</p>
        </article>
      ))}
    </div>
  </section>
);
export default ProjectDetails;
