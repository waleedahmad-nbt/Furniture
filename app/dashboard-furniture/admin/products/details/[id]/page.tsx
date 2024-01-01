"use client"
import { ProductDetail } from "@/app/dashboard-furniture/components";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`);
        
        if(response.status === 200) {
          console.log(response.data.data);
          setProduct(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }

      setLoading(false);
    }

    fetchProduct();
  }, []) 

  return loading ? (
    <div className="flex justify-center py-10">
      <div className="Loader w-[50px] border-[7px] border-gray-900"></div>
    </div>
  ) : (
    <>
      {product?.title !== undefined ? (
        <ProductDetail data={product} />
      ) : (
        <div className="pl-2 pt-3">Product Not Found</div>
      )}
    </>
  )
}

export default ViewProduct
