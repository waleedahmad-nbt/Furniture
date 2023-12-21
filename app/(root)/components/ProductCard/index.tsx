"use client";
import Image from "next/image";
import { MultiProductView } from "..";

import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import Link from "next/link";

const ProductCard = ({ item, className, offer }: any) => {
  return (
    <div className={className}>
      <div className="h-[203px]">
        <MultiProductView item={item} />
      </div>
      <div className="flex mt-3 gap-1">
        <div className="flex">
          {Array.from({ length: 4 })?.map((_, index) => (
            <Image
              src={starFill}
              alt="product"
              width={10}
              height={10}
              key={index}
            />
          ))}
          <Image src={star} alt="product" width={10} height={10} />
        </div>
        <span className="text-gray-500 text-[14px]">3</span>
      </div>
      <Link href="/products/details/">
        <h3 className="font-medium text-gray-300 mt-1">{item?.title}</h3>
      </Link>
      <div className="flex flex-items gap-3">
        <span className="text-gray-500 line-through">${item?.price}</span>
        <span className="text-primary">${item?.price}</span>
      </div>
      <p className="text-gray-300 text-[14px]">
        {item?.quantity > 0 ? (
          <span className="text-green">In Stock</span>
        ) : (
          <span className="text-secondary">Out Of Stock</span>
        )}
      </p>
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
  );
};

export default ProductCard;
