"use client"
import { useSelector } from "react-redux";
import { ProductCard } from "../components";
import { RootState } from "@/lib/store";

const wishlist = () => {

  const wishList: any = useSelector((state: RootState) => state.wishList);

  return (
    <>
      <div className="wishlistBg">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-5xl font-bold">Wish list</h1>
          <p className="text-white text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or <br /> web designs. The passage is
            attributed to an unknown typesetter in.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="w-full my-10">
          <h1 className="text-gray-900 text-[38px] text-center">Your <span className="text-primary">Wishlist</span></h1>
          <div className="relative flex gap-7 my-16">
            {wishList.length > 0 && wishList?.map((item: any, index: number) => (
              <ProductCard item={item} key={index} className="shrink-0 w-[213px]" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default wishlist;
