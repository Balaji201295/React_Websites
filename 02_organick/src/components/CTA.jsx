import React from "react";
import { Button } from "../components";
import styles from "../style";
const CTA = () => (
  <section
    className={`w-full ${styles.boxWidth} ${styles.padding} flex-col sm:flex-row gap-8`}
  >
    <div
      className={`w-full ${styles.padding} flex flex-col md:flex-row justify-between items-center gap-6 bg-cta bg__img rounded-[30px]`}
    >
      <h2 className="flex-1 text-2xl sm:text-3xl md:text-4xl text-white font-bold">
        Subscribe to <br className="md:block hidden" /> our Newsletter
      </h2>
      <form
        className={`flex-1 w-full ${styles.flexCenter} flex-col sm:flex-row gap-2`}
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          className="w-full max-w-sm h-12 sm:h-16 text-base font-normal text-primary placeholder:text-[#ABABAB] rounded-2xl px-4 outline-none"
        />
        <Button label="Subscribe" type="submit" height="h-12 sm:h-16" />
      </form>
    </div>
  </section>
);
export default CTA;
