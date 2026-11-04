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
          ? "bg-[#C1CDD9]/92 backdrop-blur-md shadow-xs border-b border-[#A8B6C4]"
          : "bg-[#C1CDD9]/80 backdrop-blur-sm border-b border-[#B2BFCD]/60"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* =================================================================== */}
        {/* 좌측: 세련된 타이포 브랜딩 로고 */}
        {/* =================================================================== */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-200 active:scale-98"
          aria-label="ji-stage 홈으로 이동"
        >
          <span className="font-serif-luxury font-bold text-2xl sm:text-[26px] tracking-[0.02em] text-[#1A2825] group-hover:text-[#4A7C72] transition-colors">
            ji-stage
          </span>
          <span className="hidden sm:inline-block font-serif-luxury text-[11px] tracking-[0.2em] uppercase text-[#4A7C72] font-semibold border-l border-[#A8B6C4] pl-3">
            Atelier
          </span>
        </a>

        {/* =================================================================== */}
        {/* 중앙: 요즘 스타일의 미니멀 세그먼트 내비게이션 바 */}
        {/* =================================================================== */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center bg-white/50 backdrop-blur-md p-1 rounded-full border border-[#A8B6C4]/70 shadow-2xs">
            {SITE_CONFIG.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="group relative px-5 lg:px-6 py-1.5 rounded-full text-[12px] font-semibold tracking-[0.14em] uppercase text-[#233330] hover:text-[#1A2825] hover:bg-white/90 hover:shadow-xs transition-all duration-200"
              >
                <span>{item.label}</span>
                {item.isExternal && (
                  <span className="ml-1 text-[10px] text-[#4A7C72] group-hover:translate-x-0.5 transition-transform">
                    ↗
                  </span>
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* =================================================================== */}
        {/* 우측: SNS 링크 & 모임 신청 버튼 */}
        {/* =================================================================== */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center">
            <SocialLinks variant="header" />
          </div>

          <div className="hidden sm:block h-4 w-px bg-[#A8B6C4]" />

          <button
            onClick={() => openInquiryModal("독서 앙상블 / 문화 프로그램 참여")}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-[#4A7C72] hover:bg-[#3C665D] text-white transition-all duration-200 shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
          >
            <span className="text-[#D99B95]">✦</span>
            <span>모임 신청</span>
          </button>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl border border-[#A8B6C4] bg-white/80 flex items-center justify-center text-sm text-[#233330] active:scale-95 cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 모바일 드로어 메뉴 */}
      {/* =================================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#A8B6C4] bg-[#C1CDD9] px-6 py-5 animate-fadeIn shadow-lg">
          <ul className="flex flex-col gap-2 mb-4">
            {SITE_CONFIG.navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 border border-[#A8B6C4] text-xs font-semibold tracking-wider text-[#1A2825] active:bg-[#EDF5F2]"
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
            <span className="text-xs font-medium text-[#233330]">소셜 채널</span>
            <SocialLinks variant="header" />
          </div>
        </div>
      )}
    </header>
  );
}
