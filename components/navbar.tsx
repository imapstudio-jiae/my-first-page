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
          ? "bg-[var(--bg-main)]/92 backdrop-blur-md shadow-xs border-b border-[var(--border-subtle)]"
          : "bg-[var(--bg-main)]/85 backdrop-blur-sm border-b border-[var(--border-subtle)]/70"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* =================================================================== */}
        {/* 좌측: 세련된 타이포 브랜딩 로고 (JI.Stage 시그니처 포인트) */}
        {/* =================================================================== */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-200 active:scale-98"
          aria-label="JI.Stage 홈으로 이동"
        >
          <span className="font-serif-luxury font-bold text-2xl sm:text-[27px] tracking-tight text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
            JI<span className="text-[var(--accent)] font-black">.</span>Stage
          </span>
          <span className="hidden sm:inline-block font-serif-luxury text-[11px] tracking-[0.2em] uppercase text-[var(--primary)] font-semibold border-l border-[var(--border-strong)] pl-3">
            Atelier
          </span>
        </a>

        {/* =================================================================== */}
        {/* 중앙: 요즘 스타일의 미니멀 세그먼트 내비게이션 바 */}
        {/* =================================================================== */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center bg-white/70 backdrop-blur-md p-1 rounded-full border border-[var(--border-subtle)] shadow-2xs">
            {SITE_CONFIG.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="group relative px-5 lg:px-6 py-1.5 rounded-full text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--text-main)] hover:text-[var(--primary)] hover:bg-white hover:shadow-xs transition-all duration-200"
              >
                <span>{item.label}</span>
                {item.isExternal && (
                  <span className="ml-1 text-[10px] text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
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

          <div className="hidden sm:block h-4 w-px bg-[var(--border-strong)]" />

          <button
            onClick={() => openInquiryModal("독서 앙상블 / 문화 프로그램 참여")}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white transition-all duration-200 shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
          >
            <span className="text-[var(--accent)]">✦</span>
            <span>모임 신청</span>
          </button>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl border border-[var(--border-subtle)] bg-white/90 flex items-center justify-center text-sm text-[var(--text-main)] active:scale-95 cursor-pointer"
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
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-main)] px-6 py-5 animate-fadeIn shadow-lg">
          <ul className="flex flex-col gap-2 mb-4">
            {SITE_CONFIG.navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] text-xs font-semibold tracking-wider text-[var(--text-main)] active:bg-[var(--primary-light)]"
                >
                  <span className="font-serif-luxury text-sm">{item.label}</span>
                  <div className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] font-normal">
                    <span>{item.desc}</span>
                    {item.isExternal && <span>↗</span>}
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <span className="text-xs font-medium text-[var(--text-main)]">소셜 채널</span>
            <SocialLinks variant="header" />
          </div>
        </div>
      )}
    </header>
  );
}
