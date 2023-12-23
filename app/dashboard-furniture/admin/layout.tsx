import "@/app/globals.css";
import type { Metadata } from "next";
import Adminlayout from "../layouts/Adminlayout";
import ReduxProvider from "@/lib/store/ReduxProvider";

export const metadata: Metadata = {
  title: "Dashboard - Admin",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          <Adminlayout>
            <main>
              {children}
            </main>
          </Adminlayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
