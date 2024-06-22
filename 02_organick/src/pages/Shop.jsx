import React from "react";
import { CTA, PageHeading } from "../components";
import OurProducts from "../containers/OurProducts";

const Shop = () => (
  <>
    <PageHeading bgImage="bg_shop" heading="Shop" />
    <OurProducts />
    <CTA />
  </>
);
export default Shop;
