import React from "react";
import { PageHeading } from "../components";
import { OrganicOnly, WhatWeGrow } from "../containers";
import styles from "../style";

const Service = () => (
  <section className={`${styles.boxWidth}`}>
    <PageHeading bgImage="bg_services" heading="Services" />
    <WhatWeGrow />
    <OrganicOnly />
  </section>
);
export default Service;
