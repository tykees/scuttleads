import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScuttleAD",
  description: "Shared Advertisement Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
