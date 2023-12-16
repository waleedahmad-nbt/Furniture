"use client";
import Image from "next/image";
import { useState } from "react";

import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import { ProductComment } from "../../../components";

const ProductsDeatilsTabs = ({ product }: any) => {
  const Tabs = ["Description", "Features", "Comment"];
  const [tab, setTab] = useState<string>(Tabs[0]);

  const imagesSlice =
    tab === Tabs[0]
      ? product?.Images?.slice(0, 3)
      : tab === Tabs[2]
      ? product?.Images?.slice(0, 2)
      : product?.Images?.slice(0, 1);

  
  const features = product?.features;
  console.log(product?.colors)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <div className="flex">
          {Tabs?.map((item: string, index: number) => (
            <button
              onClick={() => setTab(item)}
              className={`font-medium px-5 py-2 border-b-[3px] border-transparent ${
                tab === item
                  ? "bg-white border-b-primary text-primary"
                  : "text-[#858585]"
              }`}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="col-start-1 col-end-2">
          {tab === Tabs[0] ? (
            <div>
              <h2 className="font-medium text-gray-900 my-4 mr-10">
                Description:
              </h2>
              <p className="text-gray-200">
                {product?.description}
              </p>
            </div>
          ) : tab === Tabs[1] ? (
            <div>
              <h2 className="font-medium text-gray-900 my-4 mr-10">Features</h2>
              <div className="flex border-b py-5">
                <div className="w-1/2">Brand</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {features?.brand}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">Collection</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {product?.category}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">Color</div>
                <div className="w-1/2 flex gap-3 justify-end text-gray-100">
                  {product?.colors?.map((item: string, index: any) => (
                    <button
                      className="rounded-full border border-gray-900 p-1"
                      key={index}
                    >
                      <span
                        className="block rounded-full w-[18px] h-[18px]"
                        style={{ backgroundColor: item }}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">Materials</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {features?.materials?.map((item: string, index: number) => (
                    <span key={index}>
                      &nbsp;
                      {item}
                      {index !== product.features.materials.length - 1 && ','}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">General dimensions</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {features?.gDimensions?.height ? (features?.gDimensions?.height + " H") : ""}
                  {features?.gDimensions?.width ? (" " + features?.gDimensions?.width + " W") : ""}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">Product weight</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {features?.weight}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">Box dimensions</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {features?.bDimensions?.height ? (features?.bDimensions?.height + " H") : ""}
                  {features?.bDimensions?.width ? (" " + features?.bDimensions?.width + " W") : ""}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">Warranty</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {features?.warrenty}
                </div>
              </div>
            </div>
          ) : (
            tab === Tabs[2] && (
              <div>
                <h2 className="font-medium text-gray-900 my-4 mr-10">Review</h2>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-[20px]">4.5</p>
                    <span className="block mb-2">832 review</span>
                    <div className="flex mb-4">
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
                          className={`block absolute inset-0 w-[50%] bg-[#3CB242] rounded-md`}
                        ></span>
                      </div>
                      <p className="text-[12px] min-w-[80px]">750 Stars</p>
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
                          className={`block absolute inset-0 w-[50%] bg-[#3CB242] rounded-md`}
                        ></span>
                      </div>
                      <p className="text-[12px] min-w-[80px]">52 Stars</p>
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
                          className={`block absolute inset-0 w-[50%] bg-[#3CB242] rounded-md`}
                        ></span>
                      </div>
                      <p className="text-[12px] min-w-[80px]">24 Stars</p>
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
                          className={`block absolute inset-0 w-[50%] bg-[#3CB242] rounded-md`}
                        ></span>
                      </div>
                      <p className="text-[12px] min-w-[80px]">6 Stars</p>
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
                          className={`block absolute inset-0 w-[50%] bg-[#3CB242] rounded-md`}
                        ></span>
                      </div>
                      <p className="text-[12px] min-w-[80px]">0 Stars</p>
                    </div>
                  </div>
                </div>

                <h2 className="font-medium text-gray-900 my-4 mr-10">
                  Comment
                </h2>

                <div>
                  {Array.from({ length: 3 })?.map((_, index) => (
                    <ProductComment />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {tab === Tabs[2] ? (
        <div>
          {imagesSlice?.map((item: any, index: number) => (
            <div className="w-full mb-10" key={index}>
              <Image src={item} alt="product" className="w-full" width={100} height={100} />
            </div>
          ))}
        </div>
      ) : (
        <>
          {imagesSlice?.map((item: any, index: number) => (
            <div className="w-full" key={index}>
              <Image src={item} alt="product" className="w-full" width={100} height={100} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsDeatilsTabs;
