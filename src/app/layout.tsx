import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay | Unity Game Developer",
  description:
    "Professional Unity Game Developer portfolio. Worked on Five Nights at Freddy's: Into the Pit, WrestleQuest, Renfield, and more.",
  keywords: [
    "Unity Developer",
    "Game Developer",
    "C#",
    "Game Programmer",
    "Portfolio",
  ],
  openGraph: {
    title: "Jay | Unity Game Developer",
    description:
      "Professional Unity Game Developer portfolio showcasing shipped titles and game projects.",
    type: "website",
  },
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
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
