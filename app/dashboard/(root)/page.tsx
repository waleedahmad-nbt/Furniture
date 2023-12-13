"use client";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const Router = useRouter();

  const handleDashboard = (e: any) => {
    let currentrole = e.target.innerText;
    
    if (currentrole == "Seller Dashboard") {
      Router.push("/dashboard/seller");
    }
    if (currentrole == "Admin Dashboard") {
      Router.push("/dashboard/admin");
    }
  };

  return (
    <div className="w-3/4 py-10 m-auto flex justify-center items-center space-x-5">
      <button
        onClick={handleDashboard}
        className="Seller py-2 px-10 bg-primary text-white text-ubuntu-bold rounded-md"
      >
        Seller Dashboard
      </button>
      <button
        onClick={handleDashboard}
        className="Seller py-2 px-10 bg-primary text-white text-ubuntu-bold rounded-md"
      >
        Admin Dashboard
      </button>
    </div>
  );
};

export default Dashboard;
