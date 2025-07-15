import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header  from "../components/Header";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Code Way",
    description: "موقع تعليمي للبرمجة",
    icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/assets/servis/logo-3.jpg" />
        <title>Code Way</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-black`} 
      >
        <Header/>
        <StairTransition/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
