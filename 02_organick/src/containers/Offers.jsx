import React from "react";
import { SectionHeading, Button, ProductCards } from "../components";
import { useProducts } from "../hooks";
import styles from "../style";
const Offers = () => {
  const products = useProducts();
  return (
    <section className={`${styles.boxWidth} ${styles.padding} bg-primary`}>
      <div
        className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8`}
      >
        <SectionHeading
          title="We Offer Organic For You"
          subtitle="Offer"
          color="text-white"
          align={true}
        />
        <Button label="View All Product" customStyle={true} />
      </div>
      <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
        {products.slice(8, 12).map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default Offers;
