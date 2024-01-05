"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRequestMethods } from "../../components";
import Image from "next/image";
import { AiOutlineExclamation } from "react-icons/ai";
import ProductPageSkeleton from "@/app/(root)/components/Skeletons/ProductPageSkeleton";
import { FaStar } from "react-icons/fa";
import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import starhalf from "@/app/assets/icons/starhalf.svg";
import { ReadOnlyRating } from "../../components";
import SendReview from "../SendReview";

const AddReview = () => {
  const { addreview } = useParams();
  const { publicRequest } = useRequestMethods();
  const [reviews, setReviews] = useState<any>({});
  const [product, setProduct] = useState<any>("");
  const [loading, setLoading] = useState(true);

  console.log(reviews);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  const getProduct = async () => {
    try {
      const res = await publicRequest.get(`/product/${addreview}`);

      if (res.status === 200) {
        setProduct(res.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getProductsReview = async () => {
    try {
      const res = await publicRequest.get(`/review/product/${addreview}`);

      if (res.status === 200) {
        setReviews(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
    getProductsReview();
  }, [addreview]);

  const getPercent = (rating: number) => {
    const width = (rating / reviews?.length) * 100;

    return `${width}%`;
  };

  const formatDateString = (dateString: string): string => {
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      {loading ? (
        <div className="container">
          <ProductPageSkeleton />
        </div>
      ) : (
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 place-items-start py-10">
          <div>
            <div className="w-full">
              <Image
                src={product?.Images[0]}
                alt="Product Image"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <p className="text-[20px] text-gray-300 bg-white p-3">
              {product?.title}
            </p>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="bg-white w-full">
              <div className="border-b-2 flex justify-start items-center gap-5 pt-8 pb-5 w-full px-5">
                <div className="h-[20px] w-[20px] rounded-full text-white bg-[#A9A9A9] grid place-items-center text-[20px] font-bold">
                  <AiOutlineExclamation />
                </div>
                <p className="text-gray-200">Report this product</p>
              </div>
              {reviews.averageRating !== undefined ? (
                <div className="px-5">
                  <h2 className="font-medium text-gray-900 my-4 mr-10">
                    Reviews
                  </h2>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-[20px]">
                        {reviews?.averageRating || 0}
                      </p>
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
                                <Image
                                  src={star}
                                  alt="product"
                                  width={24}
                                  height={24}
                                />
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
                            style={{
                              width: getPercent(reviews?.ratingCounts[1]),
                            }}
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
                          <Image
                            src={star}
                            alt="product"
                            width={18}
                            height={18}
                          />
                        </div>
                        <div className="relative grow hidden sm:block md:hidden lg:block">
                          <span className="block h-[8px] w-full bg-[#E3E4E4] rounded-md"></span>
                          <span
                            className={`block absolute inset-0 w-[0%] bg-[#3CB242] rounded-md`}
                            style={{
                              width: getPercent(reviews?.ratingCounts[2]),
                            }}
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
                          <Image
                            src={star}
                            alt="product"
                            width={18}
                            height={18}
                          />
                          <Image
                            src={star}
                            alt="product"
                            width={18}
                            height={18}
                          />
                        </div>
                        <div className="relative grow hidden sm:block md:hidden lg:block">
                          <span className="block h-[8px] w-full bg-[#E3E4E4] rounded-md"></span>
                          <span
                            className={`block absolute inset-0 w-[0%] bg-[#3CB242] rounded-md`}
                            style={{
                              width: getPercent(reviews?.ratingCounts[3]),
                            }}
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
                            style={{
                              width: getPercent(reviews?.ratingCounts[4]),
                            }}
                          ></span>
                        </div>
                        <p className="text-[12px] min-w-[80px]">
                          {reviews?.ratingCounts[4] || 0} Stars
                        </p>
                      </div>
                      <div className="flex items-center gap-3 my-3">
                        <div className="flex items-center">
                          <Image
                            src={starFill}
                            alt="product"
                            width={18}
                            height={18}
                          />
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
                            style={{
                              width: getPercent(reviews?.ratingCounts[5]),
                            }}
                          ></span>
                        </div>
                        <p className="text-[12px] min-w-[80px]">
                          {reviews?.ratingCounts[5] || 0} Stars
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="w-full">
              <SendReview
                productId={addreview}
                getProductsReview={getProductsReview}
              />
            </div>

            <div className="w-full">
              {reviews?.reviews.length > 0 && (
                <div>
                  <p>Reviews:</p>
                  {reviews.reviews.map((item: any, index: any) => {
                    return (
                      <div className="w-full  bg-white py-2 px-5 flex items-start justify-start gap-10 my-5">
                        <div className="w-[80px] h-[80px] rounded-full shrink-0">
                          <Image
                            src={item?.reviewByDetails?.profilePic}
                            alt="img"
                            width={100}
                            height={100}
                            className="w-full h-full rounded-full"
                          />
                        </div>
                        <div className="w-full flex flex-col justify-start items-start">
                          <div className="w-full flex justify-between items-center">
                            <p>
                              {item?.reviewByDetails?.firstName}{" "}
                              {item?.reviewByDetails?.lastName}
                            </p>
                            <div>
                              <ReadOnlyRating value={item?.rating} />
                            </div>
                          </div>
                          <p className="text-gray-100 text-[14px]">
                            {item?.description}
                          </p>
                          <p className="text-[12px] text-gray-100">
                            {formatDateString(item?.createdAt)}
                          </p>

                          {item?.adminReply ? (
                            <div>
                              <p className="text-gray-100 text-[16px] mt-5">
                                Reply:
                              </p>
                              <div className="flex items-center gap-3">
                                <div className="w-[25px] h-[25px] rounded-full">
                                  <Image
                                    src={item?.adminReply?.profilePic}
                                    alt="pic"
                                    width={100}
                                    height={100}
                                    className="w-full h-full rounded-full"
                                  />
                                </div>
                                <div>
                                  <h2 className="text-[14px] mt-2">
                                    {item?.adminReply?.firstName}{" "}
                                    {item?.adminReply?.lastName}
                                  </h2>
                                  <p className="text-[12px] text-gray-100">
                                    {formatDateString(item?.updatedAt)}
                                  </p>
                                  <p className="text-[14px] text-gray-100">
                                    {item?.adminReply?.message}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReview;
