"use client"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const CreateCoupons = () => {

  const fields = {
    description: null,
    couponCode: "",
    discountType: "Fixed cart discount",
    amount: "",
    expdate: "",
    usageLimit: "",
    perUserLimit: "",
    minSpend: "",
    maxSpend: "",
    productsIncluded: [],
  }

  const [formErrors, setFormErrors] = useState<any>({});
  const [formData, setFormData] = useState<any>(fields);
  const [data, setData] = useState<any>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } })
  }

  const  handleChangeArray = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: [ ...prev[name], value ] } })
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product`);
  
        console.log(res);
        if(res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, [])  

  return (
    <div className="w-full p-2">
      <div className="xl:w-[950px] w-full m-auto">
        <div className="py-5 flex items-center">
          <Link href={'/dashboard-furniture/admin'}>
            <div className="p-1 cursor-pointer mr-3 rounded w-max bg-transparent hover:bg-gray-300">
              <BsArrowLeft />
            </div>
          </Link>
          <p className="text-xl font-bold text-text-gray-300">
            Add Coupon
          </p>
        </div>
      </div>

      <div className="xl:w-[950px] w-full m-auto">
        <div className="bg-white rounded-lg border p-3 mb-3">
          <div>
            <label className="block text-xs mb-1 mt-2" htmlFor="couponCode">Coupon code</label>
            <input
              name="couponCode"
              id="couponCode"
              type="text"
              className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
              value={formData?.couponCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-xs mb-1 mt-2" htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="h-full w-full border outline-none rounded-md px-3 py-2 text-sm"
              value={formData?.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label className="block text-xs mb-1 mt-2" htmlFor="discountType">Discount type</label>
            <select
              id="discountType"
              name="discountType"
              value={formData?.discountType}
              className="w-full text-xs border p-2 px-2 outline-none rounded-lg focus:border-black bg-white"
              onChange={handleChange}
            >
              <option value="Percentage discount">Percentage discount</option>
              <option value="Fixed cart discount">Fixed cart discount</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-3">
            <div>
              <label className="block text-xs mb-1 mt-2" htmlFor="amount">Coupon amount</label>
              <input
                name="amount"
                id="amount"
                type="number"
                className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                value={formData?.amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs mb-1 mt-2" htmlFor="expdate">Coupon expiry date</label>
              <input
                name="expdate"
                id="expdate"
                type="date"
                className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                value={formData?.expdate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs mb-1 mt-2" htmlFor="usageLimit">Usage limit per coupon</label>
              <input
                name="usageLimit"
                id="usageLimit"
                type="number"
                className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                value={formData?.usageLimit}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs mb-1 mt-2" htmlFor="perUserLimit">Usage limit per user</label>
              <input
                name="perUserLimit"
                id="perUserLimit"
                type="number"
                className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                value={formData?.perUserLimit}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
            <div>
              <label className="block text-xs mb-1 mt-2" htmlFor="minSpend">Minimum spend</label>
              <input
                name="minSpend"
                id="minSpend"
                type="number"
                className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                value={formData?.minSpend}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs mb-1 mt-2" htmlFor="maxSpend">Maximum spend</label>
              <input
                name="maxSpend"
                id="maxSpend"
                type="number"
                className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                value={formData?.maxSpend}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-xs mb-1 mt-2" htmlFor="productsIncluded">Products</label>
              <select
                id="productsIncluded"
                name="productsIncluded"
                value={formData?.products}
                className="w-full text-xs border p-2 px-2 outline-none rounded-lg focus:border-black bg-white"
                onChange={handleChangeArray}
              >
                <option value="">Select a product</option>
                {data?.map((item: any, index: number) => (
                  <option key={index} value={item?.title}>{item?.title}</option>
                ))}
              </select>
              {formData?.productsIncluded?.map((item: any, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          <div className="flex mt-3">
            <button className="bg-gray-900/80 w-full py-2 rounded-md text-white">Create Coupon</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCoupons
