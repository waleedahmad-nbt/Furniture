"use client"
import { ProductDetail } from "@/app/dashboard-furniture/components";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`);
        
        if(response.status === 200) {
          console.log(response.data.data);
          setProduct(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
    }

    fetchProduct();
  }, []) 

  return product?.title === undefined ? (
    <div className="Loader w-[15px] border-[2px] border-gray-900"></div>
  ) : (
    <ProductDetail data={product} />
  )
}

export default ViewProduct
