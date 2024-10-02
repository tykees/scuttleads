import { Inter } from "next/font/google";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScuttleAD",
  description: "Shared Advertisement Company",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
    </ClerkProvider>
  );
}
