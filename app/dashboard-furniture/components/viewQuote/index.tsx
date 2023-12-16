import Image from "next/image";
import { FiX } from "react-icons/fi";

const ViewQuote = ({ quote, handleClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#00000096]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[700px] bg-white p-16 relative rounded-md">
          <button className="text-xl absolute top-5 right-5" onClick={handleClose}>
            <FiX />
          </button>
          <h1 className="text-[26px] text-gray-900 font-medium mb-5">
            Quote
          </h1>
          <div className="flex gap-4">
            <div className="space-y-2 w-1/2">
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Name</p>
                <p className="text-[14px] text-gray-200 font-normal capitalize">{quote?.name}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Email</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.email}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Phone</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.phone}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Country</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.country}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">City</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.city}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Category</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.category}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Size</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.size}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Color</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.color}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Stuff</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.stuff}</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[16px] text-gray-300 font-medium">Material</p>
                <p className="text-[14px] text-gray-200 font-normal">{quote?.material}</p>
              </div>
              <div>
                <p className="text-[16px] text-gray-300 font-medium">Description</p>
                <p className="text-[14px] text-gray-200 font-normal mt-2">{quote?.description}</p>
              </div>
            </div>
            <div className="w-1/2 flex items-end justify-start flex-col">
              <p className="mb-3 text-gray-300 inline-block">Visual representation or image:</p>
              <Image src={quote?.file} width={100} height={100} alt="media" className="w-3/4 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewQuote;
