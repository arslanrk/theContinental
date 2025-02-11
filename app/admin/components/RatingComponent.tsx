import { FaRegStar } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

const RatingComponent = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="flex items-center gap-1">
      {stars.map((isFilled, index) =>
        isFilled ? (
          <IoIosStar key={index} className="text-yellow-400" />
        ) : (
          <FaRegStar key={index} className="text-gray-400" />
        )
      )}
    </div>
  );
};

export default RatingComponent;
