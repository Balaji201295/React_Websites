import React from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
const Ratings = ({ ratings }) => {
  const maxRating = 5;
  const fullStars = Math.floor(ratings); // math.floor(4.5); // 4
  const halfStars = ratings % 1 >= 0.5; // 4.5 % 1 = 0.5 >= 0.5 // true
  const emptyStars = maxRating - fullStars - (halfStars ? 1 : 0); // 5 - 4 - (1) = 0

  Ratings.prototype = {
    rating: PropTypes.number.isRequired,
  };

  return (
    <div className="flex">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} color="#ff8a58" />
      ))}
      {halfStars && <FaStarHalfAlt color="#ff8a58" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={index} color="#ff8a58" />
      ))}
    </div>
  );
};
export default Ratings;
