import "../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "./components";
import { Header } from "./components";
import ReduxProvider from "@/lib/store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard - Admin",
  description: "",
};

export default function Adminlayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="flex relative">
            <Sidebar />
            <div className="flex-1 absolute right-0 bg-[rgb(241,245,249)] adminHeader">
              <Header />
              <div className="sm:p-10 p-4">{children}</div>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
