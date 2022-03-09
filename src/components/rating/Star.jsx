import star_gray from "./assets/star_gray.svg";
import star_yellow from "./assets/star_yellow.svg";
const Star = ({ filled, onClick }) => {
  return (
    <img src={filled ? star_yellow : star_gray} alt="star" onClick={onClick} />
  );
}
export default Star;