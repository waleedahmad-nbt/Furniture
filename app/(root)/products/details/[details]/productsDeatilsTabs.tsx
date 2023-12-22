"use client";
import Image from "next/image";
import { useState } from "react";
import Reviews from "./reviews";

const ProductsDeatilsTabs = ({ product }: any) => {
  const Tabs = ["Description", "Features", "Reviews"];
  const [tab, setTab] = useState<string>(Tabs[0]);

  const imagesSlice =
    tab === Tabs[0]
      ? product?.Images?.slice(0, 3)
      : tab === Tabs[2]
      ? product?.Images?.slice(0, 2)
      : product?.Images?.slice(0, 1);

  const features = product?.features;


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
              <div className="text-gray-200" dangerouslySetInnerHTML={{ __html: product?.description }}></div>
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
                      {index !== product.features.materials.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex border-b py-5">
                <div className="w-1/2">General dimensions</div>
                <div className="w-1/2 flex justify-end text-gray-100">
                  {features?.gDimensions?.height
                    ? features?.gDimensions?.height + " H"
                    : ""}
                  {features?.gDimensions?.width
                    ? " " + features?.gDimensions?.width + " W"
                    : ""}
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
                  {features?.bDimensions?.height
                    ? features?.bDimensions?.height + " H"
                    : ""}
                  {features?.bDimensions?.width
                    ? " " + features?.bDimensions?.width + " W"
                    : ""}
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
            tab === Tabs[2] && (<Reviews id={product?._id} />)
          )}
        </div>
      </div>

      {tab === Tabs[2] ? (
        <div>
          {imagesSlice?.map((item: any, index: number) => (
            <div className="w-full mb-10" key={index}>
              <Image src={item} alt="product" className="w-full h-full" width={100} height={100} />
            </div>
          ))}
        </div>
      ) : (
        <>
          {imagesSlice?.map((item: any, index: number) => (
            <div className="w-full" key={index}>
              <Image src={item} alt="product" className="w-full h-full" width={100} height={100} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsDeatilsTabs;
