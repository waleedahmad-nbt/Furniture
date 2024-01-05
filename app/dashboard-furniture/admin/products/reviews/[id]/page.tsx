"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import messages from "@/app/assets/icons/messages.svg";
import starhalf from "@/app/assets/icons/starhalf.svg";
import axios from "axios";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const ProductReviews = () => {

  const { id } = useParams();

  const [product, setProduct] = useState<any>({});
  const [reviews, setReviews] = useState<any>({});
  const [replyId, setReplyId] = useState<string>("");
  const [replyVal, setReplyVal] = useState<string>("");

  useEffect(() => {
    const getProductsReview = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/review/product/${id}`);
  
        if(res.status === 200) {
          setReviews(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`);
  
        if(res.status === 200) {
          setProduct(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getProductsReview();
    getProducts();
  }, [])

  const formatDateString = (dateString: string): string => {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const User: any = useSelector((state: RootState) => state.user);

  const handleSubmit = async (id: string) => {
    if(replyVal) {
      const data = {
        reviewId: id,
        replyById: User?._id,
        message: replyVal,
      }

      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/review/reply`, data);

        if(res.status === 201) {
          setReviews((prev: any) => {
            return {
              ...prev,
              reviews: prev.reviews.map((item: any) => {
                return item?._id === id ? res.data.data : item;
              }),
            };
          });
          setReplyId("");
          setReplyVal("");
        }

      } catch (error) {
        console.log(error)
      }
    }
  }

  return product?.title !== undefined ? (
    <div className="w-full">
      <div className="w-1/2 py-4 m-auto">
        <div className="w-full bg-white rounded-lg shadow-md">
          <div className="p-4 flex flex-wrap gap-5">
            <Image src={product?.Images[0]} alt="product" width={200} height={200} className="w-[30%] h-auto"/>
            <div>
              <h1 className="text-gray-900 text-2xl">{product?.title}</h1>
              <div className="flex my-4">
                {Array.from({ length: 5 }, (_, index) => {
                  let number = index + 0.5;
                  return (
                    <>
                      {product?.averageRating >= index + 1 ? (
                        <Image
                          src={starFill}
                          alt="product"
                          width={24}
                          height={24}
                          key={index}
                        />
                      ) : product?.averageRating >= number ? (
                        <Image
                          src={starhalf}
                          alt="product"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src={star}
                          alt="product"
                          width={24}
                          height={24}
                        />
                      )}
                    </>
                  );
                })}
              </div>
              <h2 className="text-[24px] font-medium text-gray-900 mb-1">
                {product?.discount?.discountedPrice ? (
                  <>
                    <span className="line-through text-gray-300 mr-3">AED {product?.price}</span>
                    <span className="text-primary">
                      AED {product?.discount?.discountedPrice}
                    </span>
                  </>
                ) : (
                  <>
                    AED {product?.price}
                  </>
                )}
              </h2>
              <p className="text-gray-300">
                {product?.qty > 0 ? (
                  <span className="text-green">In Stock</span>
                ) : (
                  <span className="text-secondary">Out Of Stock</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-lg shadow-md mt-4">
          <div className="p-4">
            {reviews?.reviews?.length > 0 ? reviews?.reviews?.map((item: any, index: number) => (
              <div key={index}>
                <div className="flex justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Image src={item?.reviewByDetails?.profilePic} alt="product" width={48} height={48} className="rounded-full"/>
                    <div>
                      <p className="text-gray-900 font-medium">{item?.reviewByDetails?.firstName + " " + item?.reviewByDetails?.lastName}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }, (_, index) => {
                          return (
                            <p>
                              {item.rating >= index + 1 ? (
                                <Image
                                  src={starFill}
                                  alt="product"
                                  width={18}
                                  height={18}
                                  key={index}
                                />
                              ) : (
                                <Image src={star} alt="product" width={18} height={18} />
                              )}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <span className="block text-[12px] text-[#858585]">{formatDateString(item?.createdAt)}</span>
                </div>
                <p className="text-gray-400 mt-2 mb-3">{item?.description}</p>
                {item.adminReply ? (
                  <div className="ml-14">
                    <p className="text-gray-400 mt-2 mb-3">Reply:</p>
                    <div className="flex justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Image src={item?.adminReply?.profilePic} alt="product" width={40} height={40} className="rounded-full"/>
                        <div>
                          <p className="text-gray-900 font-medium">{item?.adminReply?.firstName + " " + item?.adminReply?.lastName}</p>
                          <p className="text-gray-300 text-xs">{formatDateString(item?.updatedAt)}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2 mb-3">{item?.adminReply?.message}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setReplyId((prev: string) => prev === item?._id ? "" : item?._id)}
                    className="flex items-center gap-1 text-gray-100 mb-3"
                  ><Image src={messages} alt="icon" width={24} height={24}/>Reply</button>
                )}
                <div className={`bg-white duration-150 overflow-hidden flex flex-col ${replyId === item?._id ? "h-[177px]" : "h-0"}`}>
                  <textarea
                    className="w-full resize-none px-4 py-3 outline-none border focus:border-primary overflow-y-hidden grow mb-5"
                    placeholder="Write your reply here...."
                    value={replyVal}
                    onChange={(e: any) => setReplyVal(e.target.value)}
                  >
                  </textarea>
                  <div className="flex justify-end shrink-0">
                    <button onClick={() => handleSubmit(item?._id)} className="bg-gray-900 text-white px-5 py-1 rounded-md">Reply</button>
                  </div>
                </div>
              </div>
            )) : (
              <div>
                <p>No Reviews</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  ) : ( 
    <div className="flex justify-center">
      <div className="Loader w-[50px] border-[6px] border-gray-900 mt-10"></div>
    </div> 
  );
}

export default ProductReviews;
