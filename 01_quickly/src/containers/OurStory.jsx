import React from "react";
import { SectionHeading } from "../components";
import styles, { layout } from "../style";

const storyContent = [
  "We’re doing things bigly, I mean really quite big. The way we operate is different from other companies because we disrupt. We break the code, we crack the code as well.",
  "Get to know how we work, who we are and what we value on this all inclusive beautiful web page that we put together.",
  "With a new approach to product design, management and even human resources we’ve transformed the market  of digital goods and created something that is really great if you understand why.",
];

const OurStory = () => (
  <section
    className={`w-full ${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center md:justify-between items-start gap-12`}
  >
    <div className="flex-1">
      <h5 className="text-base sm:text-lg font-bold text-dark mb-6">
        Not your typical startup story
      </h5>
      <SectionHeading
        title="Our story isn’t usual but it is extra ordinary learn about it."
        width="md:max-w-[375px]"
      />
    </div>
    <div className={`flex-1 ${styles.flexStart} flex-col gap-6`}>
      {storyContent.map((content, index) => (
        <p key={index} className={styles.paragraph}>
          {content}
        </p>
      ))}
    </div>
  </section>
);
export default OurStory;
