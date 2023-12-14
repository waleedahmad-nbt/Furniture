"use client"
import { Header, Sidebar } from "../components";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Adminlayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const Router = useRouter();

  const User: any = useSelector((state: RootState) => state.user);

  if(User?.role !== "admin") {
    Router.push("/");
  }

  return (
    <div>
      <Header />
      <div className="flex justify-between relative mt-14">
        <div className="w-[12%] h-[93.5vh] sticky top-14 left-0">
          <Sidebar />
        </div>
        <div className="w-[88%] bg-[rgb(241,241,241)]">{children}</div>
      </div>
    </div>
  );
}
