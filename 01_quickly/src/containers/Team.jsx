import React from "react";
import styles from "../style";
import { SectionHeading, Person } from "../components";
import { people } from "../constants";
const Team = () => (
  <section
    className={`w-full bg-[#FAFAFA] ${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col text-center gap-12`}
  >
    <SectionHeading title="A team of exceptional people" />
    <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-12">
      {people.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </div>
  </section>
);
export default Team;
