import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote_1 } from "../assets";
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
    <section
      className={`w-full ${styles.boxWidth} ${styles.paddingX} pt-16 pb-24`}
    >
      <Slider {...settings}>
        {feedback.map((item, index) => {
          const { profileImg, profileName, position, content } = item;
          return (
            <div key={index} className="testimonial">
              <img
                src={Quote_1}
                alt="Quote"
                className="w-[31px] h-[25px] object-contain"
              />
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark max-w-4xl">
                {content}
              </p>
              <div className={`flex justify-center items-center gap-4`}>
                <img
                  src={profileImg}
                  alt={profileName}
                  className="w-[53px] h-[53px] object-cover border-[3px] border-[#B8E4DA] rounded-full"
                />

                <div className={`${styles.flexStart} flex-col`}>
                  <h4 className="text-sm sm:text-base font-bold text-dark">
                    {profileName}
                  </h4>
                  <p className="text-sm text-primary font-normal">{position}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};
export default Testimonials;
