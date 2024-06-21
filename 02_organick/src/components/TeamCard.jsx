import React from "react";
import styles from "../style";
const TeamCard = ({
  expert: { profileImg, profileName, position, socialLinks },
}) => (
  <article className="flex-1 xs:min-w-[280px] max-w-[300px] bg-[#F9F8F8] rounded-b-[24px] hover:bg-white team_card transition-all duration-500 ease-in-out">
    <img
      src={profileImg}
      alt={profileName}
      className="w-full h-full object-contain rounded-t-[24px]"
    />
    <div className="flex justify-between items-end gap-4 p-4">
      <div className={`${styles.flexStart} flex-col`}>
        <h3 className="text-base sm:text-lg font-bold text-primary">
          {profileName}
        </h3>
        <p className="text-sm sm:text-base font-tail text-green capitalize">
          {position}
        </p>
      </div>
      <ul className={`${styles.flexStart} gap-2`}>
        {socialLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="text-primary/80 hover:text-primary transition-all duration-300 ease-linear"
            >
              <a href={item.link} target="_blank">
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </article>
);
export default TeamCard;
