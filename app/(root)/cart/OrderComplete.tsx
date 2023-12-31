import React from "react";
import Image from "next/image";
import Link from "next/link";
import thankYouNote from "@/app/assets/images/thank-you-note.png";

const OrderComplete = ({ orderData, successMsg }: any) => {
  // console.log(orderData);

  return (
    <>
      {orderData &&
        [orderData].map((item: any, index: any) => {
          var date = new Date(item.createdAt);

          var options: any = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };

          var formattedDate = date.toLocaleString("en-US", options);
          return (
            <div
              className="bg-white grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 w-[100%] mt-6 py-10 px-10 shadow-md"
              key={index}
            >
              <div className="w-[70%] hidden lg:block">
                <Image
                  src={thankYouNote}
                  alt="Thank You Note"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" flex flex-col items-center justify-center gap-3 sm:gap-5">
                {successMsg ? (
                  <div>
                    <p className="text-green text-center">{successMsg}</p>{" "}
                    <p className="text-green text-center">
                      Please Login to your account to view you order details
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <h2 className="text-[28px] font-medium text-gray-200">
                  Thank you! 🎉
                </h2>
                <h1 className=" text-center text-[40px] font-medium">
                  Your order has been received
                </h1>
                <div className="flex justify-center gap-5">
                  {item.products.map((item: any, index: any) => {
                    return (
                      <div className="relative w-[80px] h-[96px]">
                        <Image
                          className="w-full h-full object-cover"
                          src={item.image}
                          alt="Product"
                          width={100}
                          height={100}
                        />
                        <div className="absolute -top-2 -right-2 w-[30px] h-[30px] rounded-full bg-black text-white flex justify-center items-center">
                          {item?.qty}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-5">
                  <h2 className="text-gray-200 max-sm:col-span-full">
                    Order code:
                  </h2>
                  <p className="font-medium max-sm:col-span-full">
                    {item.orderCode}
                  </p>
                  <h2 className="text-gray-200 max-sm:col-span-full">Date:</h2>
                  <p className="font-medium max-sm:col-span-full">
                    {formattedDate}
                  </p>
                  <h2 className="text-gray-200 max-sm:col-span-full">Total:</h2>
                  <p className="font-medium max-sm:col-span-full">
                    ${item.total}
                  </p>
                  <h2 className="text-gray-200 max-sm:col-span-full">
                    Payment method:
                  </h2>
                  <p className="font-medium max-sm:col-span-full">
                    {item.paymentMethod}
                  </p>
                </div>
                <Link
                  href="/products"
                  className="bg-primary text-white mt-5 w-[70%] h-[44px] outline-primary cursor-pointer flex justify-center items-center"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/myorders"
                  className="bg-white text-primary border border-primary mt-1 w-[70%] h-[44px] outline-primary cursor-pointer  flex justify-center items-center"
                >
                  My Orders
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default OrderComplete;
