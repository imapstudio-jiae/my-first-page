"use client";

import { SITE_CONFIG } from "@/data/site-config";
import SocialLinks from "./social-links";
import { openInquiryModal } from "./inquiry-modal";

export default function Footer() {
  return (
    <footer className="border-t border-[#A8B5C2] bg-[#B3C0CD] text-[#2F3E48] py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#A2B0BD]">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-white border border-[#D1E3DC] flex items-center justify-center text-sm shadow-2xs">
                🎸
              </span>
              <span className="font-serif-luxury font-bold text-2xl text-[#1A2825]">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EDF5F2] text-[#4A7C72] border border-[#D1E3DC] font-semibold">
                IMAP Studio
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed max-w-sm">
              기타 레슨과 공연 기획, 발레·댄스의 몸 기록, 그리고 책과 음악이 흐르는 문화 프로그램을 엮어가는 다정한 개인 공간입니다.
            </p>
            <div className="text-xs text-[#8FA39E] space-y-1">
              <p>📍 위치: 서울시 (IMAP Studio)</p>
              <p>✉️ 이메일: {SITE_CONFIG.email}</p>
            </div>
          </div>

          {/* Quick Menu Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1A2825] font-serif-luxury">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="hover:text-[#1A2825] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs text-[#D99B95]">✦</span>
                    <span className="font-medium">{item.label}</span>
                    {item.isExternal && <span className="text-[10px]">↗</span>}
                    <span className="text-xs text-[#8FA39E]">({item.desc})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Social Links & Quick Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1A2825] font-serif-luxury">
              Connect & Social
            </h4>
            <p className="text-xs text-[#5E736E]">
              유튜브, 인스타그램, 네이버 블로그에서 다양한 소식과 일상을 만나보세요.
            </p>

            {/* Social Links Badge Buttons */}
            <SocialLinks variant="footer" />

            <div className="pt-2">
              <button
                onClick={() => openInquiryModal("일반 문의")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[#D1E3DC] hover:bg-[#EDF5F2] text-xs font-bold text-[#1A2825] shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <span className="text-[#D99B95]">✦</span>
                <span>레슨 및 문화 모임 상담 신청</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8FA39E] gap-3">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name} (IMAP Studio). All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span>Private Music & Culture Atelier</span>
            <span>•</span>
            <a href="#" className="hover:underline text-[#4A7C72]">맨 위로 이동 ↑</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
