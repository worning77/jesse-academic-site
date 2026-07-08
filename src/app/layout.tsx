import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Chenfeng (Jesse) Gao",
  description:
    "Chenfeng (Jesse) Gao — PhD student at Northwestern University, SPICE Lab. Research on wearable sensing, XR interaction, and human digitization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
