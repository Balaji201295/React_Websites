import React from "react";
import { CTA, PageHeading, PortfolioCards } from "../components";
const Portfolio = () => {
  return (
    <>
      <PageHeading bgImage="bg_portfolio" heading="Portfolio Standard" />
      <PortfolioCards />
      <CTA />
    </>
  );
};
export default Portfolio;
