"use client";

import { SITE_CONFIG } from "@/data/site-config";
import SocialLinks from "./social-links";
import { openInquiryModal } from "./inquiry-modal";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-muted)] py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-white border border-[var(--border-subtle)] flex items-center justify-center text-sm shadow-2xs">
                🎸
              </span>
              <span className="font-serif-luxury font-bold text-2xl text-[var(--text-main)]">
                JI<span className="text-[var(--accent)] font-black">.</span>Stage
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--primary-border)] font-semibold">
                Atelier
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              음악을 배우고, 몸을 움직이고, 생각을 나누는 다정한 문화 공간입니다.
            </p>
            <div className="text-xs text-[var(--text-subtle)] space-y-1">
              <p>📍 위치: 서울시 (JI.Stage 아틀리에)</p>
              <p>✉️ 이메일: {SITE_CONFIG.email}</p>
            </div>
          </div>

          {/* Quick Menu Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-main)] font-serif-luxury">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="hover:text-[var(--primary)] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs text-[var(--accent)]">✦</span>
                    <span className="font-medium text-[var(--text-main)]">{item.label}</span>
                    {item.isExternal && <span className="text-[10px] text-[var(--accent)]">↗</span>}
                    <span className="text-xs text-[var(--text-subtle)]">({item.desc})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Social Links & Quick Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-main)] font-serif-luxury">
              Connect & Social
            </h4>
            <p className="text-xs text-[var(--text-muted)]">
              유튜브, 인스타그램, 네이버 블로그에서 다양한 소식과 일상을 만나보세요.
            </p>

            {/* Social Links Badge Buttons */}
            <SocialLinks variant="footer" />

            <div className="pt-2">
              <button
                onClick={() => openInquiryModal("일반 문의")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[var(--border-subtle)] hover:bg-[var(--primary-light)] text-xs font-bold text-[var(--text-main)] shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <span className="text-[var(--accent)]">✦</span>
                <span>모임 & 문화 프로그램 문의</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-subtle)] gap-3">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span>Culture & Movement Atelier</span>
            <span>•</span>
            <a href="#" className="hover:underline text-[var(--primary)]">맨 위로 이동 ↑</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
