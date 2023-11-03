import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const overusedgrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff2",
    },
  ],
  variable: "--font-overusedgrotesk",
});

export const metadata = {
  title: "Webstack",
  description: "assorted resources for frontend developers and web designers",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className={`${overusedgrotesk.variable}`}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-overusedgrotesk antialiased">
        {children}
      </body>
    </html>
  );
}
