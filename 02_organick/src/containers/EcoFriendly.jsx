import React from "react";
import { SectionHeading } from "../components";
import styles from "../style";
import { Image_4 } from "../assets";

const data = [
  {
    title: "Start with Our Company First",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    title: "Learn How to Grow Yourself",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    title: "Farming Strategies of Today",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
];
const EcoFriendly = () => (
  <section
    className={`${styles.boxWidth} ${styles.flexCenter} flex-col md:flex-row`}
  >
    <div className="flex-1">
      <img src={Image_4} alt="Image" className="w-full h-full" />
    </div>
    <div className={`flex-1`}>
      <div className="flex flex-col justify-start items-start bg-white md:-ml-20 rounded-lg py-6 px-12">
        <SectionHeading
          subtitle="Eco Friendly"
          title="Eco is a Friendly Organic Store"
        />
        <div className={`${styles.flexStart} flex-col gap-2 mt-4`}>
          {data.map(({ title, content }, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h4 className="text-lg sm:text-xl font-medium text-primary">
                {title}
              </h4>
              <p className={`${styles.paragraph} max-w-[550px]`}>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default EcoFriendly;
