import { useEffect, useState } from "react";
import Star from "./Star.jsx";
const StarRating = ({ ratingCount = 1, isChange = true, returnRating }) => {
  const [rating = ratingCount, setRating] = useState();
  const changeRating = (newRating) => {
    isChange && setRating(newRating);
  };
  useEffect(() => {
    returnRating && returnRating(rating);
  }, [returnRating, rating]);

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
