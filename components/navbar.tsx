"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/site-config";
import SocialLinks from "./social-links";
import { openInquiryModal } from "./inquiry-modal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#C1CDD9]/95 backdrop-blur-md shadow-sm border-b border-[#A8B6C4]"
          : "bg-[#C1CDD9]/85 backdrop-blur-xs border-b border-[#B2BFCD]"
      }`}
    >
      {/* =================================================================== */}
      {/* 1. 상단 브랜딩 & 페이지 소개 바 (Full-width Widescreen) */}
      {/* =================================================================== */}
      <div className="w-full px-5 sm:px-8 lg:px-12 py-3.5 border-b border-[#B2BFCD]/70">
        <div className="w-full flex items-center justify-between">
          {/* 좌측: 작은 로고 */}
          <div className="flex items-center gap-2.5">
            <a
              href="#"
              className="group flex items-center gap-2 transition-transform duration-200 active:scale-95"
              aria-label="홈으로 이동"
            >
              <div className="w-8 h-8 rounded-xl bg-white/90 border border-[#A8B6C4] flex items-center justify-center text-sm shadow-2xs group-hover:rotate-6 transition-transform">
                🎸
              </div>
              <span className="hidden sm:inline-block font-serif-luxury text-xs tracking-[0.16em] uppercase text-[#233330] font-semibold">
                ji-stage
              </span>
            </a>
          </div>

          {/* 중앙: ji-stage 아래 IMAP Studio + 페이지 소개 */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <a href="#" className="group flex flex-col items-center">
              <span className="font-serif-luxury font-bold text-2xl sm:text-3xl tracking-[0.03em] text-[#1A2825] leading-none group-hover:text-[#4A7C72] transition-colors">
                ji-stage
              </span>
              <span className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#4A7C72] font-semibold mt-1">
                IMAP Studio
              </span>
            </a>
            {/* 페이지 소개 문구 */}
            <p className="hidden md:block text-[11px] text-[#556774] font-normal mt-0.5 tracking-tight">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* 우측: SNS 링크 & 상담 예약 버튼 */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center">
              <SocialLinks variant="header" />
            </div>

            <div className="hidden sm:block h-3.5 w-px bg-[#A8B6C4]" />

            {/* 상담 예약 버튼 */}
            <button
              onClick={() => openInquiryModal("기타 레슨 / 스튜디오 문의")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#4A7C72] hover:bg-[#3C665D] text-white transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
            >
              <span className="text-[#D99B95]">✦</span>
              <span>상담 예약</span>
            </button>

            {/* 모바일 햄버거 버튼 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-xl border border-[#A8B6C4] bg-white/80 flex items-center justify-center text-sm text-[#233330] cursor-pointer"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. 하단 내비게이션 메뉴 바 (Widescreen Full-width) */}
      {/* =================================================================== */}
      <nav className="w-full hidden md:flex items-stretch bg-[#B4C1CE] border-l border-[#96A8B8]">
        {SITE_CONFIG.navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className="group relative flex-1 flex items-center justify-center gap-1.5 py-3 text-[12px] sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-[#233330] hover:text-[#4A7C72] hover:bg-[#C8D4DF]/60 transition-all duration-200 border-r border-[#96A8B8]"
          >
            <span>{item.label}</span>
            {item.isExternal && (
              <span className="text-[10px] text-[#4A7C72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            )}
            {/* 호버 시 하단 포인트 라인 */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A7C72] group-hover:w-full transition-all duration-200" />
          </a>
        ))}
      </nav>

      {/* =================================================================== */}
      {/* 3. 모바일 드로어 메뉴 */}
      {/* =================================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#A8B6C4] bg-[#C1CDD9] px-6 py-5 animate-fadeIn shadow-lg">
          <div className="text-center pb-3 border-b border-[#A8B6C4]/60 mb-3">
            <p className="text-xs text-[#4A5D6B]">{SITE_CONFIG.tagline}</p>
          </div>

          <ul className="flex flex-col gap-2 mb-4">
            {SITE_CONFIG.navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/90 border border-[#A8B6C4] text-xs font-semibold tracking-wider text-[#1A2825] active:bg-[#EDF5F2]"
                >
                  <span className="font-serif-luxury text-sm">{item.label}</span>
                  <div className="flex items-center gap-1 text-[11px] text-[#556774] font-normal">
                    <span>{item.desc}</span>
                    {item.isExternal && <span>↗</span>}
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-[#A8B6C4]/60 flex items-center justify-between">
            <span className="text-xs font-medium text-[#233330]">소셜 바로가기</span>
            <SocialLinks variant="header" />
          </div>
        </div>
      )}
    </header>
  );
}
