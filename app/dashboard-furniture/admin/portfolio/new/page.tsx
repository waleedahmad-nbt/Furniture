import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import AddForm from "./addForm";
import axios from "axios";

async function getCategories() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

const Page = async () => {
  const categories: any = await getCategories();


  return (
    <div className="w-full p-2">
      <div className="xl:w-[950px] w-full m-auto">
        <div className="p-5 flex items-center">
          <Link href={"/dashboard-furniture/admin/portfolio"}>
            <div className="p-1 cursor-pointer mr-3 rounded w-max bg-transparent hover:bg-gray-300">
              <BsArrowLeft />
            </div>
          </Link>
          <p className="text-xl font-bold text-text-gray-300">
            Add Protfolio Image
          </p>
        </div>
      </div>

      <div className="xl:w-[950px] w-full m-auto">
        <div className="p-5 grid md:grid-cols-3 grid-cols-1 gap-3">
          <div className="col-span-2 ">
            <AddForm categories={categories.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
