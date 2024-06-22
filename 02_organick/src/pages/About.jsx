import React from "react";
import { Benefits, CTA, PageHeading } from "../components";
import {
  AboutInfo,
  OrganicExperts,
  WhatWeOffer,
  WhyChooseUs,
} from "../containers";
import styles from "../style";
const About = () => (
  <>
    <PageHeading bgImage="bg_about" heading="About us" />
    <AboutInfo />
    <div className={`${styles.boxWidth} ${styles.padding} bg-[#F9F8F8]`}>
      <WhyChooseUs />
      <Benefits />
    </div>
    <OrganicExperts />
    <WhatWeOffer />
    <CTA />
  </>
);
export default About;
