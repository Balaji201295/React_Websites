import React from "react";
import { Button } from "../components";
import styles from "../style";
const CTA = () => (
  <section
    className={`w-full ${styles.boxWidth} ${styles.flexCenter} ${styles.padding} flex-col text-center gap-4 sm:gap-6`}
  >
    <p className="text-base sm:text-lg font-bold text-primary">
      Stop wasting time, start saving it
    </p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark max-w-4xl mb-6">
      Sign up for your free trial, with the world’s best product tool
    </h2>
    <Button label="Start your trial" />
  </section>
);
export default CTA;
