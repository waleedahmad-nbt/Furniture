import "@/app/globals.css";
import ReduxProvider from "@/lib/store/ReduxProvider";
import type { Metadata } from "next";

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
      <body>
        <ReduxProvider>
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
