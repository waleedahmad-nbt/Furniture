import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
const SendReview = ({ productId, getProductsReview }: any) => {
  const [value, setValue] = useState(0);
  const userData = useSelector((state: any) => state.user);
  const orderId = useSelector((state: any) => state.orderId);

  const [formData, setFormData] = useState({
    orderId: orderId,
    reviewById: userData._id,
    productId: productId,
    rating: 0,
    description: "",
  });

  useEffect(() => {
    setFormData({ ...formData, rating: value });
  }, [value]);

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const [isShow, setIsShow] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/review/add`,
        formData
      );
      if (res.data.success) {
        getProductsReview();
        setIsShow(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isShow ? (
        <div>
          <p>Add Your Review</p>
          <div className="flex items-center gap-2 mt-5">
            <h2>Rating:</h2>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {stars.map((star) => (
                  <button
                    key={star}
                    onClick={() => setValue(star)}
                    className={star <= value ? "text-primary" : "text-gray-100"}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-white shadow-sm mt-2">
            <textarea
              className="h-[177px] p-5 w-full outline-none"
              placeholder="Write your review here...."
              value={formData.description}
              onChange={(e: any) => {
                setFormData((prev) => {
                  return { ...prev, description: e.target.value };
                });
              }}
            ></textarea>
          </div>
          <button
            className="text-white bg-primary px-3 py-2 mt-2"
            onClick={handleSubmit}
          >
            Send Review
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SendReview;
