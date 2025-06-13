import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "armor",
  description: "armor clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
