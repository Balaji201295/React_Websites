import React from "react";
import { Button, SectionHeading, StatsItems } from "../components";
import styles, { layout } from "../style";
const Stats = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${layout.section} ${styles.flexCenter}`}
  >
    <div className={`${layout.sectionInfo} ${styles.flexStart} flex-col gap-6`}>
      <SectionHeading
        title="When we get to work we really make things happen fast and powerfully"
        content="I want to fly like an angel flare on a ten feet snare I want to dance until the sun comes up I want to fight your cousin."
      />

      <Button label="Sign up" />
    </div>
    <div className={`${layout.sectionImg}`}>
      <StatsItems />
    </div>
  </section>
);
export default Stats;
