import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasir Portfolio",
  description: "Portfolio website of Nasir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${dmSans.className} overflow-x-hidden min-h-screen`}>
        <div className='relative w-full'>{children}</div>
      </body>
    </html>
  );
}
