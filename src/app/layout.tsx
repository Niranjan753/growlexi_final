import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growlexi",
  description: "Growlexi application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="hubspot-script"
          strategy="afterInteractive"
          src="//js.hs-scripts.com/22203768.js"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
