import Image from "next/image";
import starFill from "@/app/assets/icons/star_fill.svg";
import star from "@/app/assets/icons/star.svg";

const ProductComment = ({ item }: any) => {

  const formatDateString = (dateString: string): string => {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="mb-10">
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
    </div>
  )
}

export default ProductComment
