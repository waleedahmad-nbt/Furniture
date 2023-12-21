"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { publicRequest } from "@/requestMethods";

import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import like from "@/app/assets/icons/like.svg";
import messages from "@/app/assets/icons/messages.svg";

const ProductReviews = () => {

  const { id } = useParams();

  const [product, setProduct] = useState<any>({});
  const [reviews, setReviews] = useState<any>({});

  useEffect(() => {
    const getProductsReview = async () => {
      try {
        const res = await publicRequest.get(`/review/product/${id}`);
  
        if(res.status === 200) {
          console.log(res.data.data);
          setReviews(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    const getProducts = async () => {
      try {
        const res = await publicRequest.get(`/product/${id}`);
  
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

  return product?.title !== undefined ? (
    <div className="w-full">
      <div className="w-1/2 py-4 m-auto">
        <div className="w-full bg-white rounded-lg shadow-md">
          <div className="p-4 flex flex-wrap gap-5">
            <Image src={product?.Images[0]} alt="product" width={200} height={200} className="w-[30%] h-auto"/>
            <div>
              <h1 className="text-gray-900 text-2xl">{product?.title}</h1>
              <div className="flex my-4">
                {Array.from({ length: 4 })?.map((_, index) => (
                  <Image
                    src={starFill}
                    alt="product"
                    width={24}
                    height={24}
                    key={index}
                  />
                ))}
                <Image src={star} alt="product" width={24} height={24} />
              </div>
              <h2 className="text-[24px] font-medium text-gray-900 mb-4">
                AED {product?.price}
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-lg shadow-md mt-4">
          <div className="p-4">
            {reviews?.reviews.length > 0 && reviews?.reviews?.map((item: any, index: number) => (
              <div className="mb-10" key={index}>
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
                <p className="text-gray-400 mt-2 mb-5">{item?.description}</p>
                <div className="flex gap-8 px-5 py-2 items-center">
                  <button className="flex items-center gap-1 text-gray-100"><Image src={like} alt="icon" width={24} height={24}/>Like</button>
                  <button className="flex items-center gap-1 text-gray-100"><Image src={messages} alt="icon" width={24} height={24}/>Reply</button>
                </div>
              </div>
            ))}
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
