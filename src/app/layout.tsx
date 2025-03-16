import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MCHeader from "@/components/mc/other/mc-header";
import MCLogo from "@/components/mc/other/mc-logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meidaisai Championship 投票アプリ",
  description: "Meidaisai Championshipで使用する投票アプリのページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/mc/bg.svg')] h-[100svh] overflow-hidden flex flex-col`}
      >
        <MCHeader />
        <main className="grow flex flex-col items-center justify-center">
          <MCLogo />
          {children}
        </main>
      </body>
    </html>
  );
}
