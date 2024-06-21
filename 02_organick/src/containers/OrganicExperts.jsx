import React from "react";
import styles from "../style";
import { experts } from "../constants";
import { SectionHeading, TeamCard } from "../components";
const OrganicExperts = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col text-center gap-8`}
  >
    <div>
      <SectionHeading title="Our Organic Experts" subtitle="team" />
      <p className={`${styles.paragraph} max-w-[750px] mt-4`}>
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
    </div>
    <div className="w-full flex flex-wrap justify-center items-center gap-6 ">
      {experts.slice(0, 3).map((expert, index) => (
        <TeamCard key={index} expert={expert} />
      ))}
    </div>
  </section>
);
export default OrganicExperts;
