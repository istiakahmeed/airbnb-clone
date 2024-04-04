import { Navbar } from "@/app/components/navbar/Navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/modals/RegisterModal";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
