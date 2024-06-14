import React from "react";
const ProductsFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => (
  <div className="flex flex-wrap justify-center items-center gap-4 my-8">
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => setSelectedCategory(category)}
        className={`border border-primary text-sm font-medium ${
          selectedCategory === category
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } py-2 px-4 rounded cursor-pointer uppercase`}
      >
        {category}
      </button>
    ))}
  </div>
);
export default ProductsFilter;
