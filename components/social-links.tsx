"use client";

import { SITE_CONFIG } from "@/data/site-config";

interface SocialLinksProps {
  variant?: "header" | "footer" | "banner";
  className?: string;
}

export default function SocialLinks({
  variant = "header",
  className = "",
}: SocialLinksProps) {
  const { youtube, instagram, naverBlog } = SITE_CONFIG.social;

  if (variant === "header") {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        {/* YouTube */}
        <a
          href={youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 text-[#D99B95] hover:bg-[#FAF1F0] bg-white border border-[#E2ECE7]"
          title={`${youtube.name} 바로가기`}
          aria-label={youtube.name}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 text-[#D99B95] hover:bg-[#FAF1F0] bg-white border border-[#E2ECE7]"
          title={`${instagram.name} 바로가기`}
          aria-label={instagram.name}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* Naver Blog */}
        <a
          href={naverBlog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 text-[#4A7C72] hover:bg-[#EDF5F2] bg-white border border-[#E2ECE7] font-black text-xs"
          title={`${naverBlog.name} 바로가기`}
          aria-label={naverBlog.name}
        >
          <span className="font-extrabold text-[12px] leading-none">N</span>
        </a>
      </div>
    );
  }

  // Footer or Banner Mode with labels & soft pastel backgrounds
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* YouTube Button */}
      <a
        href={youtube.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs font-medium transition-all duration-200 hover:scale-102 active:scale-98 bg-white border-[#E2ECE7] hover:border-[#D99B95] shadow-xs"
      >
        <span className="w-5 h-5 rounded-full bg-[#FAF1F0] text-[#D99B95] flex items-center justify-center text-[10px] font-bold">
          ▶
        </span>
        <div className="flex flex-col text-left">
          <span className="font-semibold text-xs text-[#233330]">{youtube.name}</span>
          <span className="text-[10px] text-[#8FA39E]">{youtube.handle}</span>
        </div>
      </a>

      {/* Instagram Button */}
      <a
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs font-medium transition-all duration-200 hover:scale-102 active:scale-98 bg-white border-[#E2ECE7] hover:border-[#D99B95] shadow-xs"
      >
        <span className="w-5 h-5 rounded-full bg-[#FAF1F0] text-[#D99B95] flex items-center justify-center text-[10px]">
          📷
        </span>
        <div className="flex flex-col text-left">
          <span className="font-semibold text-xs text-[#233330]">{instagram.name}</span>
          <span className="text-[10px] text-[#8FA39E]">{instagram.handle}</span>
        </div>
      </a>

      {/* Naver Blog Button */}
      <a
        href={naverBlog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs font-medium transition-all duration-200 hover:scale-102 active:scale-98 bg-white border-[#E2ECE7] hover:border-[#4A7C72] shadow-xs"
      >
        <span className="w-5 h-5 rounded-full bg-[#EDF5F2] text-[#4A7C72] flex items-center justify-center text-[11px] font-black">
          N
        </span>
        <div className="flex flex-col text-left">
          <span className="font-semibold text-xs text-[#233330]">{naverBlog.name}</span>
          <span className="text-[10px] text-[#8FA39E]">{naverBlog.handle}</span>
        </div>
      </a>
    </div>
  );
}
