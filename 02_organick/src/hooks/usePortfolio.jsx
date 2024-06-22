import React, { useState, useEffect } from "react";
import api from "../api/json";
const usePortfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  // Fetching Data
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await api.get("/portfolios");
        setPortfolioData(response.data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    fetchPortfolioData();
  }, []);
  return portfolioData;
};
export default usePortfolio;
