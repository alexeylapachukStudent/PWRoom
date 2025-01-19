import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/models/LoginModal";
import SignupModal from "./components/models/SignUpModal";

const inter = Inter({
    subsets: ['latin'],
  });

export const metadata: Metadata = {
  title: "Djangobnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const content = () => (
 
        <div>
            <p>Modal content</p>
        </div>
    );


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        
        
        <div className="pt-32">
         {children}
        </div>


        <LoginModal />
        <SignupModal />

    
      </body>
    </html>
  );
}