import React from "react";
import { PageHeading } from "../components";
import { FeatureInfo, Journey, ProductWorks, ProjectInfo } from "../containers";
const Features = () => (
  <>
    <PageHeading
      title="The future of features"
      subHeading="Are you really really ready for the boom box?"
    />
    <FeatureInfo />
    <ProductWorks />
    <ProjectInfo />
    <Journey />
  </>
);
export default Features;
