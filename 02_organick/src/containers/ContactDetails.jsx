import React from "react";
import styles, { layout } from "../style";
import { socialLinks } from "../constants";
import { Image_11, Mail, Phone } from "../assets";
const contactInfo = [
  {
    icon: Mail,
    title: "Message",
    link: "support@organic.com",
  },
  {
    icon: Phone,
    title: "Contact Us",
    link: "+01 123 456 789",
  },
];
const ContactDetails = () => {
  return (
    <div
      className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} ${layout.sectionReverse} flex-col`}
    >
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={Image_11}
          alt="Image"
          className="w-full max-w-[600px] h-full object-contain rounded-3xl"
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h3 className={`${styles.heading} mb-4`}>
          We'd love to talk about how we can work together.
        </h3>
        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <ul className={`${styles.flexStart} flex-col gap-4 my-6`}>
          {contactInfo.map((item, index) => (
            <li
              key={index}
              className="flex justify-start items-center gap-4 bg-[#fff] rounded-2xl border border-[#eee] min-w-[275px] p-3"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[60px] h-[60px]"
              />
              <div className={`${styles.flexStart} flex-col`}>
                <h5 className="text-base sm:text-xl font-bold text-primary">
                  {item.title}
                </h5>
                <p className={styles.paragraph}>{item.link}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={`${styles.flexCenter} gap-4`}>
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className={`w-[48px] h-[48px] bg-[#EFF6F1] text-primary hover:text-[#EFF6F1] hover:bg-primary transition-all duration-300 ease-in-out ${styles.flexCenter} rounded-full`}
              >
                <Icon fontSize={20} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
