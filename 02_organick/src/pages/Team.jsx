import React from "react";
import { experts } from "../constants";
import styles from "../style";
import { CTA, PageHeading, SectionHeading, TeamCard } from "../components";
const Team = () => (
  <>
    <PageHeading bgImage="bg_team" heading="Our Team" />
    <div
      className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col text-center`}
    >
      <div>
        <SectionHeading title="Our Organic Experts" subtitle="team" />
        <p className={`${styles.paragraph} max-w-[750px] mt-4`}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-6 mt-12">
        {experts.map((expert, index) => (
          <TeamCard key={index} expert={expert} />
        ))}
      </div>
    </div>
    <CTA />
  </>
);
export default Team;
