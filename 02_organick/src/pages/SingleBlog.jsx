import React, { useEffect } from "react";
import { CTA } from "../components";
import { FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import styles from "../style";
const SingleBlog = () => {
  const data = useLoaderData();
  const {
    createdDate,
    imgUrl,
    title,
    content,
    author,
    intro,
    explanation,
    vitaminPoints,
    quotes,
    productsIntro,
    productPoints,
  } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.boxWidth}>
      <div className="mt-20">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
        <div
          className={`w-full max-w-[90%] sm:max-w-[80%] mx-auto ${styles.flexStart} flex-col gap-2 sm:py-6 md:py-10 md:px-10 sm:px-8 p-4 bg-white shadow-md rounded-[30px] -mt-48 relative`}
        >
          <div className={`${styles.flexStart} flex-col sm:flex-row gap-6`}>
            <p className="text-sm sm:text-base font-bold text-primary">
              Posted on: <span className="font-normal">{createdDate}</span>
            </p>
            <p
              className={`${styles.flexCenter} text-sm text-primary font-normal gap-2`}
            >
              <FaUser className="text-green" />
              <span>By&nbsp;{author}</span>
            </p>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            {title}
          </h3>
          <p className={`${styles.paragraph} max-w-[600px] mt-2`}>{content}</p>
        </div>
      </div>
      <div
        className={`w-full max-w-[900px] mx-auto ${styles.padding} ${styles.flexStart} flex-col gap-4`}
      >
        <p className={styles.paragraph}>{intro}</p>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-6">
          Preferred Form of Vitamin D?
        </h3>
        <p className={styles.paragraph}>{explanation}</p>
        <ul>
          {vitaminPoints.map((point, index) => (
            <li
              key={index}
              className={`list-disc list-inside ${styles.paragraph} ${
                index !== vitaminPoints.length ? "mb-3" : ""
              }`}
            >
              {point}
            </li>
          ))}
        </ul>
        <blockquote className="w-full bg-[#F1EDEA] rounded-[24px] p-4 sm:p-8 md:p-12 text-center my-8">
          <q className="text-base sm:text-lg font-bold text-primary">
            {quotes}
          </q>
        </blockquote>
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mt-6">
          Make perfect organic product with us
        </h4>
        <p className={styles.paragraph}>{productsIntro}</p>
        <ol>
          {productPoints.map((point, index) => (
            <li
              key={index}
              className={` list-decimal list-inside ${styles.paragraph} ${
                index !== vitaminPoints.length ? "mb-3" : ""
              }`}
            >
              {point}
            </li>
          ))}
        </ol>
      </div>
      <CTA />
    </section>
  );
};
export default SingleBlog;
