import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/Components/Template/Header";
import Footer from "@/Components/Template/Footer";

const inter = Inter({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-inter",
});

export const metadata: Metadata = {
  title: "Keripik Pepaya",
  description: "KKN Bina Desa Tebaban Universitas Hamzanwadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer className="" />
      </body>
    </html>
  );
}
