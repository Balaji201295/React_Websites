import React, { useEffect, useState } from "react";
import { useShop } from "../hooks";
import { Button, PageHeading, Ratings, ProductCards, CTA } from "../components";
import { useLoaderData } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import styles, { layout } from "../style";

const SingleShop = () => {
  const products = useShop();
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const data = useLoaderData();
  const {
    id,
    imgUrl,
    productName,
    ratings,
    retailPrice,
    offerPrice,
    content,
    description,
    info,
  } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.boxWidth}>
      <PageHeading bgImage="bg_singleShop" heading={productName} />
      <div className={`${styles.padding}`}>
        {/* Product Info */}
        <div className={layout.sectionReverse}>
          <div className={layout.sectionImgReverse}>
            <img src={imgUrl} alt={productName} />
          </div>
          <div
            className={`${layout.sectionInfo} ${styles.flexStart} flex-col gap-2 bg-[#F9F8F8] p-6 rounded`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-primary capitalize">
              {productName}
            </h3>
            <Ratings ratings={ratings} />
            <div
              className={`${styles.flexStart} text-base sm:text-lg font-bold gap-2`}
            >
              <p className="text-[#B8B8B8] line-through">${retailPrice}.00</p>
              <p className="text-primary">${offerPrice}.00</p>
            </div>
            <p className={`${styles.paragraph} mt-4`}>{content}</p>
            <div className="flex flex-col xs:flex-row justify-start items-center gap-4">
              <div className="flex items-center">
                <label
                  htmlFor={`quantity-${id}`}
                  className="text-base sm:text-lg font-bold text-primary"
                >
                  Quantity:
                </label>
                <div className="relative" onClick={toggleOpen}>
                  <select
                    id={`quantity-${id}`}
                    value={quantity}
                    className="text-base text-primary font-medium outline-none py-2 pl-4 pr-6 border-2 border-primary rounded ml-4 cursor-pointer appearance-none"
                    onChange={handleQuantityChange}
                  >
                    {Array.from({ length: 10 }, (_, index) => index + 1).map(
                      (qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      )
                    )}
                  </select>
                  <TiArrowSortedDown
                    className={`absolute right-2 top-4 transition-all duration-300 ease-linear text-primary ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <Button label="Add To Cart" icon={true} />
            </div>
          </div>
        </div>
        {/* Description and Info */}
        <div className={`${styles.flexCenter} flex-col gap-6`}>
          <div
            className={`w-full ${styles.flexCenter} flex-col xs:flex-row gap-5`}
          >
            {["description", "info"].map((tab) => (
              <button
                key={tab}
                className={`rounded-2xl py-4 px-8 w-full max-w-[240px] text-center capitalize text-base sm:text-lg font-bold font-sans ${
                  activeTab === tab
                    ? "bg-primary text-[#EEF6F1]"
                    : "text-primary bg-[#EFF6F1]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-full max-w-[900px]">
            <p className={`${styles.paragraph} text-center`}>
              {activeTab === "description" ? description : info}
            </p>
          </div>
        </div>
        {/* related product */}
        <div
          className={`${styles.flexCenter} ${styles.paddingY} flex-col text-center`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Related Products
          </h2>
          <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
            {products.slice(8, 12).map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        </div>
        {/* cta */}
        <CTA />
      </div>
    </section>
  );
};

export default SingleShop;
