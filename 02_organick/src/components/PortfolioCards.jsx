import React from "react";
import styles from "../style";
import { Link } from "react-router-dom";
import { usePortfolio } from "../hooks";
import { IoIosArrowForward } from "react-icons/io";
const PortfolioCards = () => {
  const portfolioData = usePortfolio();
  return (
    <section
      className={`w-full ${styles.boxWidth} ${styles.padding} grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 gap-6`}
    >
      {portfolioData.map((item, index) => (
        <article
          key={index}
          className={`flex-1 ${styles.flexStart} flex-col gap-1 portfolio_card transition-all duration-500 ease-linear`}
        >
          <figure className="relative">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="w-full h-full rounded-3xl"
            />
            <div className="bg-white/80 absolute w-[80%] h-[80%] rounded-3xl flex justify-center items-center portfolio_card-link transition-all duration-500 ease-linear">
              <Link
                to={`/portfolio/${item.id}`}
                className="w-12 h-12 flex justify-center items-center bg-green rounded-full cursor-pointer"
              >
                <IoIosArrowForward className="text-white text-lg" />
              </Link>
            </div>
          </figure>
          <h3 className="text-lg sm:text-xl font-bold text-primary capitalize">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base font-tail text-green capitalize">
            {item.category}
          </p>
        </article>
      ))}
    </section>
  );
};
export default PortfolioCards;
