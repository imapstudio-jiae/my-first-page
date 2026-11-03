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
  title: "My First Next.js App",
  description: "TypeScript, App Router, Tailwind CSS로 구성된 심플하고 모던한 Next.js 프로젝트입니다.",
  verification: {
    google: "nIqCaczgFR304wUcQuFRkQ_mXEz7woYvoajg5NLjWLk",
    other: {
      "naver-site-verification": "25b5461e23bab1aeee56086ef4e7c27d42f9d1c5",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" style={{ backgroundColor: "#003566", color: "#06D6A0" }}>{children}</body>
    </html>
  );
}

