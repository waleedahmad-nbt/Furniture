"use client";
import Image from "next/image";
import { MultiProductView } from "..";

import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import starhalf from "@/app/assets/icons/starhalf.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import {
  setRecentViews,
  setUpdateRecentViews,
} from "@/lib/store/slices/Allslices";

import { RootState } from "@/lib/store";
import { Fragment } from "react";

const ProductCard = ({ item, className, offer, isGrid }: any) => {
  // console.log(item, "itemmm");

  const dispatch = useDispatch();

  const recentViews: any = useSelector((state: RootState) => state.recentViews);

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the date and time as YYYY-MM-DD HH:MM:SS
    const formattedDateTime = `${year}-${String(month).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")} ${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return formattedDateTime;
  };

  const addRecent = () => {
    const exist = recentViews.find((pro: any) => pro?._id === item?._id);

    if (!exist && recentViews?.length < 20) {
      dispatch(setRecentViews({ ...item, time: getCurrentDateTime() }));
    } else {
      dispatch(
        setUpdateRecentViews({
          id: item?._id,
          updatedTime: getCurrentDateTime(),
        })
      );
    }
  };

  return (
    <div
      className={`${className} flex ${
        isGrid
          ? "flex-col"
          : "flex-col items-start xs:flex-row gap-5 xs:items-center"
      }`}
    >
      <div className="h-[203px] w-[200px] shrink-0">
        <MultiProductView item={item} />
      </div>
      <div className="w-full">
        <div
          className={
            isGrid
              ? "flex flex-col"
              : " flex flex-col items-start sm:flex-row-reverse sm:items-center justify-between"
          }
        >
          <div className="flex mt-3 gap-1">
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => {
                let number = index + 0.5;
                return (
                  <Fragment key={index}>
                    {item?.averageRating >= index + 1 ? (
                      <Image
                        src={starFill}
                        alt="product"
                        width={10}
                        height={10}
                      />
                    ) : item?.averageRating >= number ? (
                      <Image
                        src={starhalf}
                        alt="product"
                        width={10}
                        height={10}
                      />
                    ) : (
                      <Image
                        src={star}
                        alt="product"
                        width={10}
                        height={10}
                      />
                    )}
                  </Fragment>
                );
              })}
            </div>
            <span className="text-gray-500 text-[14px]">
              {item?.totalReviews || "No Reviews"}
            </span>
          </div>
          <div>
            <Link href={`/products/details/${item?._id}`} onClick={addRecent}>
              <h3 className="font-medium text-gray-300 mt-1">{item?.title}</h3>
            </Link>
          </div>
        </div>
        <div
          className={
            isGrid
              ? "flex flex-col"
              : " flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2"
          }
        >
          <div>
            {item?.discount?.discountedPrice ? (
              <div className="flex items-center gap-3">
                <s className="text-gray-200">AED {item?.price}</s>
                <span className="text-primary">
                  AED {item?.discount?.discountedPrice}
                </span>
              </div>
            ) : (
              <span className="text-primary">AED {item?.price}</span>
            )}
          </div>
          <p className="text-gray-300 text-[14px]">
            {item?.qty > 0 ? (
              <span className="text-green">In Stock</span>
            ) : (
              <span className="text-secondary">Out Of Stock</span>
            )}
          </p>
        </div>

        {!isGrid ? (
          <div
            className="text-gray-200 mt-2"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          ></div>
        ) : (
          ""
        )}

        {offer && (
          <>
            <div className="flex text-gray-blue gap-1 mt-1">
              <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
                38
              </p>
              :
              <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
                38
              </p>
              :
              <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
                38
              </p>
              :
              <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
                38
              </p>
            </div>
            <span className="text-gray-blue text-[12px]">
              Time remaining until the end of the offer
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
