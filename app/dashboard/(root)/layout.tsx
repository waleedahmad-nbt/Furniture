import Nav from "@/app/(root)/Components/Nav";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/app/(root)/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
