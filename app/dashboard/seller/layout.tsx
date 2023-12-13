import ReduxProvider from "@/lib/store/ReduxProvider";
import "../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard - Seller",
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
        <ReduxProvider>
          <main>
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
