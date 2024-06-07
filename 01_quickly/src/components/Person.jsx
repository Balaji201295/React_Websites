import React from "react";
import styles from "../style";

const Person = ({ person }) => {
  const { profileImg, profileName, position, socialLinks } = person;
  return (
    <article
      className={`${styles.flexCenter} flex-col min-w-[200px] max-w-[240px]`}
    >
      <img
        src={profileImg}
        alt={profileName}
        className="w-[195px] h-[195px] object-contain"
      />
      <h3 className="text-lg sm:text-xl font-bold text-dark mt-6">
        {profileName}
      </h3>
      <p className="text-sm sm:text-base font-normal text-primary my-2">
        {position}
      </p>
      <ul className={`${styles.flexCenter} gap-3`}>
        {socialLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="text-primary hover:text-white bg-white hover:bg-primary border border-primary/20 rounded-full cursor-pointer transition-all duration-500 ease-in-out p-3"
            >
              <Icon />
            </li>
          );
        })}
      </ul>
    </article>
  );
};
export default Person;
