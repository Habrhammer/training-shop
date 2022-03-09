import { useState } from "react";
import Star from "./Star.jsx";
const StarRating = ({ ratingCount, isChange = true }) => {
  const [rating = ratingCount, setRating] = useState();
  const changeRating = (newRating) => {
    isChange && setRating(newRating);
  };
  return (
    <>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </>
  );
};
export default StarRating;
