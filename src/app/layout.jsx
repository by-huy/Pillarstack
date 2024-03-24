import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const overusedgrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff2",
    },
  ],
  display: "block",
  variable: "--font-overusedgrotesk",
  weight: "200 800",
});

export const metadata = {
  metadataBase: new URL("https://pillarstack.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Pillarstack — Resources for web developers and designers",
  description:
    "Assorted resources for frontend developers and web designers. Explore curated and handpicked goodies that enhance your workflow and cultivate your growth.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${overusedgrotesk.variable}`}>
      <head>
        <link rel="canonical" href="https://pillarstack.com" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-overusedgrotesk antialiased bg-bg section-padding  text-accent box-border">
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-Q3DST65NTS" />
    </html>
  );
}
