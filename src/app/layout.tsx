import "./globals.css";
import type { Metadata } from "next";
import MianHeader from "@/components/MianHeader";
import MainHeaderBackground from "@/components/MainHeaderBackground";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MianHeader />
        {children}
      </body>
    </html>
  );
}
