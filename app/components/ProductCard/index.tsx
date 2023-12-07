import Image from "next/image";


import Heart from "@/app/assets/icons/heart_dark.svg";

const ProductCard = ({ item }: any) => {

  const count = ["", "", "", ""];

  return (
    <div>
      <div className="bg-white h-[203px] flex items-center justify-center relative">
        <span className="absolute top-2 left-3 rounded-2xl px-2 py-1 bg-secondary text-white font-bold text-[10px]">SALE</span>
        <button className="absolute top-2 right-3 bg-white border rounded-full w-[30px] h-[30px] flex items-center justify-center">
          <Image src={Heart} alt="product"/>
        </button>
        <Image src={item?.image} alt="product" className="mx-auto"/>
      </div>
      <div className="flex gap-2">
        {count?.map((item: any, index: number) => (
          <div className="flex h-[4px] w-full bg-gray-300"></div>
        ))}
      </div>
      <h3 className="font-medium text-gray-300 mt-3">{item?.name}</h3>
      <div className="flex flex-items gap-4">
        <span>{item?.priceWas}</span>
        <span>{item?.priceNow}</span>
      </div>
      <p className="text-gray-300 text-[14px]">{item?.quantity} Products</p>
    </div>
  )
}

export default ProductCard
