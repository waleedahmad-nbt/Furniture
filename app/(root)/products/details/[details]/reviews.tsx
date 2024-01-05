"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import starhalf from "@/app/assets/icons/starhalf.svg";
import { ProductComment, useRequestMethods } from "@/app/(root)/components";
// import { publicRequest } from "@/requestMethods";

const Reviews = ({ id }: { id: string }) => {
  const { publicRequest } = useRequestMethods();

  const [reviews, setReviews] = useState<any>([]);

  useEffect(() => {
    const getProductsReview = async () => {
      try {
        const res = await publicRequest.get(`/review/product/${id}`);

        if (res.status === 200) {
          console.log(res.data.data);
          setReviews(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getProductsReview();
  }, [id]);

  const getPercent = (rating: number) => {
    const width = (rating / reviews?.length) * 100;

    return `${width}%`;
  };

  return reviews.averageRating !== undefined ? (
    <div>
      <h2 className="font-medium text-gray-900 my-4 mr-10">Reviews</h2>
      <div className="flex gap-6">
        <div className="text-center">
          <p className="text-[20px]">{reviews?.averageRating || 0}</p>
          <span className="block mb-2">{reviews?.length || 0}</span>
          <div className="flex mb-4">
            {Array.from({ length: 5 }, (_, index) => {
              let number = index + 0.5;
              return (
                <p>
                  {reviews?.averageRating >= index + 1 ? (
                    <Image
                      src={starFill}
                      alt="product"
                      width={24}
                      height={24}
                      key={index}
                    />
                  ) : reviews?.averageRating >= number ? (
                    <Image
                      src={starhalf}
                      alt="product"
                      width={21}
                      height={21}
                    />
                  ) : (
                    <Image src={star} alt="product" width={24} height={24} />
                  )}
                </p>
              );
            })}
          </div>
        </div>

        <div className="grow">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {Array.from({ length: 5 })?.map((_, index) => (
                <Image
                  src={starFill}
                  alt="product"
                  width={18}
                  height={18}
                  key={index}
                />
              ))}
            </div>
            <div className="relative grow hidden sm:block md:hidden lg:block">
              <span className="block h-[8px] w-full bg-[#E3E4E4] rounded-md"></span>
              <span
                className={`block absolute inset-0 w-[0%] bg-[#3CB242] rounded-md`}
                style={{ width: getPercent(reviews?.ratingCounts[1]) }}
              ></span>
            </div>
            <p className="text-[12px] min-w-[80px]">
              {reviews?.ratingCounts[1] || 0} Stars
            </p>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="flex items-center">
              {Array.from({ length: 4 })?.map((_, index) => (
                <Image
                  src={starFill}
                  alt="product"
                  width={18}
                  height={18}
                  key={index}
                />
              ))}
              <Image src={star} alt="product" width={18} height={18} />
            </div>
            <div className="relative grow hidden sm:block md:hidden lg:block">
              <span className="block h-[8px] w-full bg-[#E3E4E4] rounded-md"></span>
              <span
                className={`block absolute inset-0 w-[0%] bg-[#3CB242] rounded-md`}
                style={{ width: getPercent(reviews?.ratingCounts[2]) }}
              ></span>
            </div>
            <p className="text-[12px] min-w-[80px]">
              {reviews?.ratingCounts[2] || 0} Stars
            </p>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="flex items-center">
              {Array.from({ length: 3 })?.map((_, index) => (
                <Image
                  src={starFill}
                  alt="product"
                  width={18}
                  height={18}
                  key={index}
                />
              ))}
              <Image src={star} alt="product" width={18} height={18} />
              <Image src={star} alt="product" width={18} height={18} />
            </div>
            <div className="relative grow hidden sm:block md:hidden lg:block">
              <span className="block h-[8px] w-full bg-[#E3E4E4] rounded-md"></span>
              <span
                className={`block absolute inset-0 w-[0%] bg-[#3CB242] rounded-md`}
                style={{ width: getPercent(reviews?.ratingCounts[3]) }}
              ></span>
            </div>
            <p className="text-[12px] min-w-[80px]">
              {reviews?.ratingCounts[3] || 0} Stars
            </p>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="flex items-center">
              {Array.from({ length: 2 })?.map((_, index) => (
                <Image
                  src={starFill}
                  alt="product"
                  width={18}
                  height={18}
                  key={index}
                />
              ))}
              {Array.from({ length: 3 })?.map((_, index) => (
                <Image
                  src={star}
                  alt="product"
                  width={18}
                  height={18}
                  key={index}
                />
              ))}
            </div>
            <div className="relative grow hidden sm:block md:hidden lg:block">
              <span className="block h-[8px] w-full bg-[#E3E4E4] rounded-md"></span>
              <span
                className={`block absolute inset-0 w-[0%] bg-[#3CB242] rounded-md`}
                style={{ width: getPercent(reviews?.ratingCounts[4]) }}
              ></span>
            </div>
            <p className="text-[12px] min-w-[80px]">
              {reviews?.ratingCounts[4] || 0} Stars
            </p>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div className="flex items-center">
              <Image src={starFill} alt="product" width={18} height={18} />
              {Array.from({ length: 4 })?.map((_, index) => (
                <Image
                  src={star}
                  alt="product"
                  width={18}
                  height={18}
                  key={index}
                />
              ))}
            </div>
            <div className="relative grow hidden sm:block md:hidden lg:block">
              <span className="block h-[8px] w-full bg-[#E3E4E4] rounded-md"></span>
              <span
                className={`block absolute inset-0 w-[0%] bg-[#3CB242] rounded-md`}
                style={{ width: getPercent(reviews?.ratingCounts[5]) }}
              ></span>
            </div>
            <p className="text-[12px] min-w-[80px]">
              {reviews?.ratingCounts[5] || 0} Stars
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-medium text-gray-900 my-4 mr-10">Reviews</h2>
      <div>
        {reviews?.reviews.length > 0 &&
          reviews?.reviews?.map((item: any, index: number) => (
            <ProductComment key={index} item={item} />
          ))}
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="Loader w-[50px] border-[6px] border-gray-900 mt-10"></div>
    </div>
  );
};

export default Reviews;
