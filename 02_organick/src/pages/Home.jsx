import React from "react";
import {
  AboutUs,
  Benefits,
  EcoFriendly,
  Hero,
  News,
  Offers,
  OrganicItems,
  Testimonials,
} from "../containers";
import styles from "../style";
import OurProducts from "../containers/OurProducts";
import { CTA, Stats } from "../components";
const Home = () => (
  <>
    <Hero />
    <Benefits />
    <AboutUs />
    <OurProducts />
    <div className={`${styles.boxWidth} bg__img bg-testimonial`}>
      <Testimonials />
      <div className="w-[75%] ss:w-[60%] h-[1px] bg-[#E0E0E0] my-16 mx-auto" />
      <Stats />
    </div>
    <Offers />
    <EcoFriendly />
    <OrganicItems />
    <News />
    <CTA />
  </>
);
export default Home;
