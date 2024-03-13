import React from 'react';
import './globals.css';
import { Overused_Grotesk } from '@/utils/fonts';
import { HomeMetadata } from '@/utils/metadata';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header/Navbar';

export const metadata = HomeMetadata; // metadata for SEO

/**
 * Renders the root layout for the application.
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
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
