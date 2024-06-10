import React from "react";
import { pricingItems } from "../constants";
import styles from "../style";
import { SectionHeading, PricingItems } from "../components";
const PricingInfo = () => (
  <section className={`w-full ${styles.boxWidth} ${styles.padding}`}>
    <SectionHeading
      title="Pricing plans for every team"
      content="Democracy. It’s what we see, it’s how we live and what we breathe. Here is a cup of tea, please won’t you drink it with me."
    />
    <PricingItems />
  </section>
);
export default PricingInfo;
