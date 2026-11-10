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
  metadataBase: new URL("https://www.jistage.kr"),
  title: "JI.Stage | 음악을 배우고, 몸을 움직이고, 생각을 나누는 공간",
  description: "음악과 움직임을 통해 일상에 새로운 감각을 더합니다. JI.Stage 문화 & 무브먼트 아틀리에",
  openGraph: {
    title: "JI.Stage | 음악을 배우고, 몸을 움직이고, 생각을 나누는 공간",
    description: "음악과 움직임을 통해 일상에 새로운 감각을 더합니다. JI.Stage 문화 & 무브먼트 아틀리에",
    url: "https://www.jistage.kr",
    siteName: "JI.Stage",
    images: [
      {
        url: "/moon.jpg",
        width: 576,
        height: 1024,
        alt: "ji-stage",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col font-sans bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary-light)] selection:text-[var(--primary)]">
        {children}
      </body>
    </html>
  );
}

