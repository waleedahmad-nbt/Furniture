import type { Metadata } from "next";
import { Header, Sidebar } from "../components";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function Sellerlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Header />
        <div className="flex justify-between relative mt-14">
          <div className="w-[12%] h-[93.5vh] sticky top-14 left-0">
            <Sidebar />
          </div>
          <div className="w-[88%] bg-[rgb(241,241,241)]">{children}</div>
        </div>
      </div>
    </>
  );
}
