import React from "react";
import { PageHeading } from "../components";
import { CTA, PricingInfo } from "../containers";
const Pricing = () => (
  <>
    <PageHeading
      title="Our Pricing Plans"
      subHeading="Smart plans for growing businesses"
    />
    <PricingInfo />
    <CTA />
  </>
);
export default Pricing;
