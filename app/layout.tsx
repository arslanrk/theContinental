import type { Metadata } from "next";
import "./globals.css";
import 'swiper/swiper-bundle.css';
import { Providers } from "./provider";
import { Montserrat, Playfair_Display } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat", // Optional variable to use with Tailwind
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair", // Optional variable to use with Tailwind
});

export const metadata: Metadata = {
  title: "The Continental",
  description: "The Continental from John Wick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <Providers>
         {children}
        </Providers>
      </body>
    </html>
  );
}
