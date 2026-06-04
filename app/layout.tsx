import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bengkel UWA | Ketok Magic, Body Repair & Cat Mobil",

  description:
    "Bengkel UWA melayani ketok magic, body repair, pengecatan mobil, dan poles body dengan hasil rapi, cepat, dan bergaransi.",

  keywords: [
    "ketok magic",
    "body repair",
    "cat mobil",
    "bengkel mobil",
    "perbaikan mobil",
    "bengkel uwa",
    "cat body mobil",
    "poles mobil",
  ],

  authors: [
    {
      name: "Bengkel UWA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
