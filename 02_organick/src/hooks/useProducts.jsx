import React, { useState, useEffect } from "react";
import api from "../api/json";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  // Fetching Data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    fetchProducts();
  }, []);
  return products;
};
export default useProducts;
