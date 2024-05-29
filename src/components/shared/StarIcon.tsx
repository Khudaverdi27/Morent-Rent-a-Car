import { FaStar } from "react-icons/fa6";

interface IStarProps {
  reviewCount: number;
}

function StarIcon({ reviewCount }: IStarProps) {
  const totalStars = 5;
  const emptyStars = totalStars - reviewCount;

  // Generate filled stars

  const filledStars = Array.from({ length: reviewCount }, (_, i) => (
    <FaStar key={`filled-${i}`} fill="#FBAD39" />
  ));

  // Generate empty stars
  const emptyStarsArray = Array.from({ length: emptyStars }, (_, i) => (
    <FaStar key={`empty-${i}`} fill="#E0E0E0" />
  ));

  const stars = [...filledStars, ...emptyStarsArray];
  return stars;
}

export default StarIcon;
