import React from "react";
import { pricingItems } from "../constants";
import { Check_Square } from "../assets";
import { Button } from "../components";
const PricingItems = () => (
  <div className="w-full grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4 mt-12">
    {pricingItems.map((item, index) => {
      const { type, content, description, price } = item;
      return (
        <article
          key={index}
          className={`w-full flex-1 flex flex-col justify-start items-start gap-4 border border-primary/20 rounded-md shadow-sm p-6 max-w-[300] relative ${
            index === pricingItems.length - 1
              ? "bg-primary text-white"
              : "bg-white text-dark"
          }`}
        >
          {content && (
            <p className="text-xs text-white bg-dark py-1 px-2 rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase">
              {content}
            </p>
          )}
          <p className="text-sm sm:text-base font-bold text-[#B8E4DA] uppercase pb-4">
            {type}
          </p>
          <p className="text-xl sm:text-2xl font-bold">${price}</p>
          <p className="text-xs sm:text-sm font-normal pb-2">{description}</p>
          <Button
            label="Get Started"
            width="w-full"
            styles={`${
              index !== pricingItems.length - 1
                ? "text-white bg-primary"
                : "text-primary bg-light"
            }`}
          />
          <ul className="flex flex-col justify-start items-start gap-4">
            {item.benefits.map((point, index) => (
              <li
                key={index}
                className={`flex justify-start items-center gap-4`}
              >
                <img src={Check_Square} alt="Mark" className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-normal">{point}</span>
              </li>
            ))}
          </ul>
        </article>
      );
    })}
  </div>
);
export default PricingItems;
