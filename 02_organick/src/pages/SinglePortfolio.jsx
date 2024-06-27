import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CTA } from "../components";
import styles from "../style";
const SinglePortfolio = () => {
  const data = useLoaderData();
  const {
    imgUrl,
    title,
    category,
    intro,
    date,
    client,
    service,
    aboutContent,
    farmContent,
    conclusion,
  } = data;
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <section className={styles.boxWidth}>
      <div className="mt-20">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-[800px] object-cover"
        />
        <div className={`${styles.padding}`}>
          <div
            className={`${styles.flexBetween} pb-16 flex-col md:flex-row -mt-48`}
          >
            <div className="single_portfolio-intro flex-1 bg-white md:rounded-tl-[30px] md:rounded-bl-[30px] p-4 sm:p-8 min-h-60">
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold text-primary">
                {title}
              </h3>
              <p className={`${styles.paragraph}`}>{intro}</p>
            </div>
            <ul className="w-full bg-[#fafafa] flex-[0.5] flex flex-col gap-5 p-4 sm:p-8 min-h-60 md:rounded-tr-[30px] md:rounded-br-[30px]">
              <li className="flex justify-start items-center text-base sm:text-lg font-medium text-primary">
                <p className="min-w-24 flex justify-between items-center">
                  Date <span className="px-2">:</span>
                </p>
                <span className="text-[#525C60] text-sm sm:text-base font-normal">
                  {date}
                </span>
              </li>
              <li className="flex justify-start items-center text-base sm:text-lg font-medium text-primary">
                <p className="min-w-24 flex justify-between items-center">
                  Client <span className="px-2">:</span>
                </p>
                <span className="text-[#525C60] text-sm sm:text-base font-normal">
                  {client}
                </span>
              </li>
              <li className="flex justify-start items-center text-base sm:text-lg font-medium text-primary">
                <p className="min-w-24 flex justify-between items-center">
                  Category <span className="px-2">:</span>
                </p>
                <span className="text-[#525C60] text-sm sm:text-base font-normal">
                  {category}
                </span>
              </li>
              <li className="flex justify-start items-center text-base sm:text-lg font-medium text-primary">
                <p className="min-w-24 flex justify-between items-center">
                  Service <span className="px-2">:</span>
                </p>
                <span className="text-[#525C60] text-sm sm:text-base font-normal">
                  {service}
                </span>
              </li>
            </ul>
            <div></div>
          </div>

          <div
            className={`${styles.flexStart} flex-col gap-4 w-full max-w-[900px] mx-auto`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              About The Farm:
            </h3>
            <ul
              className={`${styles.paragraph} ${styles.flexStart} flex-col gap-4 mt-2 max-w-[750px]`}
            >
              {aboutContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
            <figure className="w-full">
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-[420px] object-cover rounded-[30px]"
              />
              <figcaption className="text-sm text-center text-[#525C60] my-4">
                {title}
              </figcaption>
            </figure>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              How to Farm:
            </h3>
            <ul
              className={`${styles.paragraph} ${styles.flexStart} flex-col gap-4  mt-2  max-w-[750px]`}
            >
              {farmContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Conclusion:
            </h3>

            <ul
              className={`${styles.paragraph} ${styles.flexStart} flex-col gap-4  mt-2  max-w-[750px]`}
            >
              {conclusion.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
};
export default SinglePortfolio;
