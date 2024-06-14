import React from "react";
import styles from "../style";
import { Ratings } from "../components";
import { feedback } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <Slider {...settings}>
        {feedback.map((item, index) => {
          const { profileImg, profileName, position, content, ratings } = item;
          return (
            <div key={index} className="testimonial">
              <img
                src={profileImg}
                alt={profileName}
                className="w-[100px] h-[100px] object-cover border-[3px] border-[#B8E4DA] rounded-full"
              />
              <Ratings ratings={ratings} />
              <p className="text-sm sm:text-base font-normal text-dark max-w-[580px]">
                {content}
              </p>
              <div className={`flex flex-col justify-center items-center `}>
                <h4 className="text-lg sm:text-2xl font-bold text-primary capitalize">
                  {profileName}
                </h4>
                <p className="text-sm sm:text-base text-dark font-normal capitalize">
                  {position}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};
export default Testimonials;
