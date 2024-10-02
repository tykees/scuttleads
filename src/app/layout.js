import { Inter } from "next/font/google";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScuttleAD",
  description: "Shared Advertisement Company",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
