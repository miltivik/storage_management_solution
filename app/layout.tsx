import type { Metadata } from "next";
import { Poppins, Work_Sans } from 'next/font/google'
import localfont from 'next/font/local'


import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-work_sans',
})

const clashDisplay = localfont({
    src: '/fonts/ClashDisplay-Medium.woff',
    variable: '--font-clashDisplay',
    weight:"500"
})

const satoshi = localfont({
  src: '/fonts/Satoshi-Bold.woff',
  variable: '--font-satoshi',
  weight:"800"
})

export const metadata: Metadata = {
  title: "AirStore",
  description: "AirStore - The only storage solution you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${poppins.variable} ${worksans.variable} ${clashDisplay.variable} ${satoshi.variable} font-poppins  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
