import React from "react";
import {
  Brands,
  CTA,
  Customers,
  Hero,
  ProjectDetails,
  ProjectInfo,
  ProjectSource,
} from "../containers";
const Home = () => (
  <>
    <Hero />
    <Brands />
    <ProjectSource />
    <ProjectDetails />
    <ProjectInfo />
    <Customers />
    <CTA />
  </>
);
export default Home;
