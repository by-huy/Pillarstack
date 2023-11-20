import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from '@vercel/analytics/react';


const overusedgrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff2",
    },
  ],
  display: "block",
  variable: "--font-overusedgrotesk",
});

export const metadata = {
  title: "Pillarstack",
  description: "Assorted resources for frontend developers and web designers",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className={`${overusedgrotesk.variable}`}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-overusedgrotesk antialiased bg-bg section-padding  text-accent box-border">
        <Navbar />
        {children}
        <Footer />
      <Analytics />
      </body>
    </html>
  );
}
