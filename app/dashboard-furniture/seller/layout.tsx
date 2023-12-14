import "../../globals.css";
import type { Metadata } from "next";
import { Sidebar } from "./components";
import { Header } from "./components";
import ReduxProvider from "@/lib/store/ReduxProvider";

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
      <body>
        <ReduxProvider>
          <div className="relative">
            <Sidebar />
            <div className="bg-[rgb(241,245,249)] adminHeader pl-[250px]">
              <Header />
              <div className="sm:p-10 p-4">{children}</div>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
