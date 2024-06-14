import React, { useState } from "react";
import { Button, Ratings } from "../components";
import styles from "../style";
const ProductCards = ({
  product: { category, imgUrl, productName, retailPrice, offerPrice, ratings },
}) => {
  return (
    <article
      className={`${styles.flexStart} flex-col rounded-3xl bg-white shadow border border-light pt-4 sm:pt-6 px-4 sm:px-6 pb-4`}
    >
      <p className="text-xs font-semibold text-white py-1 px-3 rounded-lg bg-primary capitalize">
        {category}
      </p>
      <img
        src={imgUrl}
        alt={productName}
        className="w-[240px] h-[240px] object-contain bg-transparent"
      />
      <h3 className="w-full text-base font-semibold capitalize text-left text-primary pb-2 border-b border-[#DEDDDD]">
        {productName}
      </h3>
      <div className={`w-full ${styles.flexBetween} pt-2`}>
        <div className={`${styles.flexStart} gap-2`}>
          <p className="text-sm font-medium text-[#B8B8B8] line-through">
            ${retailPrice}.00
          </p>
          <p className="text-sm font-medium text-primary">${offerPrice}.00</p>
        </div>
        <Ratings ratings={ratings} />
      </div>
    </article>
  );
};

export default ProductCards;
