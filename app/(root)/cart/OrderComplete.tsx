import React from "react";
import Image from "next/image";
import Link from "next/link";

const OrderComplete = ({ orderData }: any) => {
  console.log(orderData);

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
              className="bg-white flex flex-col items-center justify-center gap-5 mt-6 py-10 shadow-md"
              key={index}
            >
              <h2 className="text-[28px] font-medium text-gray-200">
                Thank you! 🎉
              </h2>
              <h1 className="text-center text-[40px] font-medium">
                Your order has been <br /> received
              </h1>
              <div className="flex justify-center gap-5">
                {item.products.map((item: any, index: any) => {
                  return (
                    <div className="relative w-[80px] h-[96px]">
                      <Image
                        className="w-full h-full"
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

              <div className="grid grid-cols-2 gap-5">
                <h2 className="text-gray-200">Order code:</h2>
                <p className="font-medium">{item.orderCode}</p>
                <h2 className="text-gray-200">Date:</h2>
                <p className="font-medium">{formattedDate}</p>
                <h2 className="text-gray-200">Total:</h2>
                <p className="font-medium">${item.total}</p>
                <h2 className="text-gray-200">Payment method:</h2>
                <p className="font-medium">{item.paymentMethod}</p>
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
          );
        })}
    </>
  );
};

export default OrderComplete;
