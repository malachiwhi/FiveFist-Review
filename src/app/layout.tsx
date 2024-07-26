import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5FistReview",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className = 'w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        </div>
        <div className="bg - slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"> 
            {children}
          <Footer/>
        </div> 
      </body>
    </html>
  );
}