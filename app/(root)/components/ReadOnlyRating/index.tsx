import { FaStar } from "react-icons/fa";

const ReadOnlyRating = ({ value }: any) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {stars.map((star) => (
          <div className={star <= value ? "text-primary" : "text-gray-100"}>
            <FaStar />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadOnlyRating;
