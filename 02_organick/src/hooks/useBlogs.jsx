import React, { useState, useEffect } from "react";
import api from "../api/json";
const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetching Data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    fetchBlogs();
  }, []);
  return blogs;
};

export default useBlogs;
