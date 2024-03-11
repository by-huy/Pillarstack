import React from 'react';
import './globals.css';
import { Overused_Grotesk } from '@/utils/fonts';
import { HomeMetadata } from '@/utils/metadata';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header/Navbar';

export const metadata = HomeMetadata; // metadata for SEO
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://pillarstack.com" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${Overused_Grotesk.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
