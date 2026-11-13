"use client";

import { useState, useEffect } from "react";
import SocialLinks from "./social-links";
import { openInquiryModal } from "./inquiry-modal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? "bg-[var(--bg-main)]/95 backdrop-blur-md shadow-xs border-b border-[var(--border-subtle)]"
          : "bg-[var(--bg-main)]/85 backdrop-blur-sm border-b border-[var(--border-subtle)]/70"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between gap-3">
        {/* 좌측: 브랜드 로고 */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-200 active:scale-98 shrink-0"
          aria-label="JI.Stage 홈으로 이동"
        >
          <span className="font-serif-luxury font-bold text-xl sm:text-[26px] tracking-tight text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
            JI<span className="text-[var(--accent)] font-black">.</span>Stage
          </span>
          <span className="hidden md:inline-block font-serif-luxury text-[11px] tracking-[0.2em] uppercase text-[var(--primary)] font-semibold border-l border-[var(--border-strong)] pl-3">
            Culture Planning Studio
          </span>
        </a>

        {/* 우측: 소셜 링크 & 핵심 2종 CTA 버튼 */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center mr-1">
            <SocialLinks variant="header" />
          </div>

          <div className="hidden lg:block h-4 w-px bg-[var(--border-strong)] mr-1" />

          <button
            type="button"
            onClick={() => openInquiryModal("독서 앙상블 / 문화 프로그램 참여")}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold border border-[var(--border-strong)] bg-white hover:bg-[var(--primary-light)] text-[var(--text-main)] transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>프로그램 신청</span>
          </button>

          <a
            href="#b2b-inquiry"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>출강 · 공간 제휴 문의</span>
          </a>
        </div>
      </div>
    </header>
  );
}
