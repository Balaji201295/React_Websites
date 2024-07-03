import React from "react";
import {
  Feedback,
  Footer,
  GreatestChef,
  Hero,
  MenuItems,
  ReserveTable,
  ShopTimings,
  Welcome,
} from "../containers";
const Home = () => (
  <>
    <Hero />
    <Welcome />
    <MenuItems />
    <ReserveTable />
    <GreatestChef />
    <Feedback />
    <ShopTimings />
    <Footer />
  </>
);
export default Home;
