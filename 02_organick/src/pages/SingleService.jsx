import React from "react";
import styles from "../style";
import { CTA, PageHeading } from "../components";
import { Image_10, Image_8, Image_9 } from "../assets";

const ImageData = [
  {
    imgUrl: Image_9,
    title: "Why Organic",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.",
  },
  {
    imgUrl: Image_10,
    title: "Speciality Produce",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.",
  },
];

const SingleService = () => {
  return (
    <section className={styles.boxWidth}>
      <PageHeading bgImage="bg_singleService" heading="quantity standard" />
      <div className={`${styles.padding}`}>
        <figure>
          <img
            src={Image_8}
            alt="Image"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="w-full max-w-4xl mx-auto">
          {/* intro */}
          <div className={`${styles.paddingY}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
              Organic Store Services
            </h2>
            <p className={styles.paragraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
              <br />
              <br />
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and cover many web sites
              still in their infancy. Various versions have evolved over the
              years
            </p>
          </div>
          {/* image content */}
          <div className="w-full flex flex-col gap-6">
            {ImageData.map(({ imgUrl, title, content }, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row justify-between items-center gap-4 sm:h-[225px] ${
                  index === ImageData.length - 1 ? " sm:flex-row-reverse" : ""
                }`}
              >
                <figure className="sm:flex-[0.75] h-full">
                  <img
                    src={imgUrl}
                    alt={title}
                    className="xs:w-[360px] h-full object-cover rounded-md" // Ensure the image fits the container height
                  />
                </figure>
                <div className="sm:flex-1 gap-2 bg-[#F9F8F8] rounded-2xl md:px-10 sm:px-8 px-6 md:py-12 sm:py-10 py-8 h-full flex flex-col justify-center">
                  <h3 className="text-base ss:text-lg md:text-xl font-bold text-primary">
                    {title}
                  </h3>
                  <p className={`${styles.paragraph} max-w-[400px]`}>
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* farm land */}
          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">
              We farm your land
            </h2>
            <p className={styles.paragraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <ul className="w-full flex flex-wrap justify-center items-center gap-6 my-8">
              {["Best quality support", "Money back guarantee"].map(
                (title, index) => (
                  <li
                    key={index}
                    className="flex-1 flex justify-start items-center gap-5 bg-[#F9F8F8] rounded-[100px] p-4 min-w-[260px] max-w-max"
                  >
                    <p className="bg-green text-white font-bold rounded-full w-10 h-10 flex justify-center items-center">
                      {index < 10 ? `0${index + 1}` : index}
                    </p>
                    <h5 className="text-base sm:text-xl font-semibold text-primary">
                      {title}
                    </h5>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* cta */}
        </div>
      </div>
      <CTA />
    </section>
  );
};
export default SingleService;
