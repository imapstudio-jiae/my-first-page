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
  title: "ji-stage | IMAP 스튜디오 & 문화 아지트",
  description: "기타 레슨 및 공연 기획, 발레와 댄스의 몸 기록, 책과 음악이 흐르는 문화 프로그램을 만들어가는 공간 ji-stage입니다.",
  openGraph: {
    title: "ji-stage | IMAP 스튜디오 & 문화 아지트",
    description: "기타 레슨 및 공연 기획, 발레와 댄스의 몸 기록, 책과 음악이 흐르는 문화 프로그램을 만들어가는 공간 ji-stage입니다.",
    url: "https://www.jistage.kr",
    siteName: "ji-stage",
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
      <body className="min-h-full flex flex-col font-sans bg-[#C1CDD9] text-[#233330] selection:bg-[#D1E3DC] selection:text-[#1A2825]">
        {children}
      </body>
    </html>
  );
}

