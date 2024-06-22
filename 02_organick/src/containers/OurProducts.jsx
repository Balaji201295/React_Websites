import React, { useEffect, useState } from "react";
import {
  SectionHeading,
  ProductsFilter,
  ProductCards,
  Button,
} from "../components";
import { useShop } from "../hooks";
import styles from "../style";
const OurProducts = () => {
  const products = useShop();
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [itemToShow, setItemToShow] = useState(8);
  const initialItemToShow = 8;
  const itemIncrement = 4;

  // Set initial filtered products
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Get all categories
  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Update filtered products based on selected category
  useEffect(() => {
    setFilterProducts(
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory)
    );
  }, [selectedCategory, products]);

  // Toggle item count
  const handleToggleItems = () => {
    if (itemToShow >= filterProducts.length) {
      setItemToShow(initialItemToShow);
    } else {
      setItemToShow((prev) =>
        Math.min(prev + itemIncrement, filterProducts.length)
      );
    }
  };
  return (
    <section
      className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col text-center`}
    >
      <>
        <SectionHeading title="Our Products" subtitle="Categories" />
        <ProductsFilter
          categories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </>

      <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
        {filterProducts.slice(0, itemToShow).map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
      {initialItemToShow < filterProducts.length && (
        <div>
          <Button
            label={
              itemToShow >= filterProducts.length ? "Load less" : "Load more"
            }
            icon={false}
            onClick={handleToggleItems}
          />
        </div>
      )}
    </section>
  );
};
export default OurProducts;
