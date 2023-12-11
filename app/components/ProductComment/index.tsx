import Image from "next/image";

import User from "@/app/assets/users/user.png";
import starFill from "@/app/assets/icons/star_fill.svg";
import like from "@/app/assets/icons/like.svg";
import messages from "@/app/assets/icons/messages.svg";

const ProductComment = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <Image src={User} alt="product" width={48} height={48} className="rounded-full"/>
        <div>
          <p className="text-gray-900 font-medium">Ralph Edwards</p>
          <span className="block my-1 text-[12px] text-[#858585]">October 20, 2020</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 })?.map((_, index) => (
              <Image src={starFill} alt="product" width={18} height={18} key={index}/>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-primary bg-[#F3EFE5] px-5 py-1 font-medium text-[12px] rounded-md shrink-0">Purchased by 247 supplier</div>
          <div className="text-primary bg-[#F3EFE5] px-5 py-1 font-medium text-[12px] rounded-md shrink-0">Gold color</div>
        </div>
      </div>
      <p className="text-gray-400 mt-2 mb-5">Watch the movie very loud, very sharp. Paper wrap - protect the environment. There is a stamp on fragile goods, but the more it is - the more the courier will throw ...: D</p>
      <div className="flex gap-8 px-5 py-2 items-center">
        <button className="flex items-center gap-1 text-gray-100"><Image src={like} alt="icon" width={24} height={24}/>Like</button>
        <button className="flex items-center gap-1 text-gray-100"><Image src={messages} alt="icon" width={24} height={24}/>Reply</button>
      </div>
    </div>
  )
}

export default ProductComment
