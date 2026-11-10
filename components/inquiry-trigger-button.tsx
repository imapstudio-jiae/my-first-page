"use client";

import { openInquiryModal } from "./inquiry-modal";

interface InquiryTriggerButtonProps {
  variant?: "header" | "cta" | "secondary";
  category?: string;
  label?: string;
  className?: string;
}

export default function InquiryTriggerButton({
  variant = "cta",
  category = "독서 앙상블 / 문화 프로그램 참여",
  label = "문의하기",
  className = "",
}: InquiryTriggerButtonProps) {
  if (variant === "header") {
    return (
      <button
        onClick={() => openInquiryModal(category)}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer ${className}`}
        id="header-inquiry-btn"
      >
        <span>💬</span>
        <span>{label}</span>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        onClick={() => openInquiryModal(category)}
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-xs border border-[var(--border-subtle)] bg-white/90 hover:bg-[var(--primary-light)] hover:border-[var(--primary-border)] text-[var(--text-main)] transition-all duration-200 active:scale-95 cursor-pointer shadow-xs ${className}`}
      >
        <span className="text-[var(--accent)]">✦</span>
        <span>{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => openInquiryModal(category)}
      className={`inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-103 active:scale-97 cursor-pointer shadow-md bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white ${className}`}
      id="cta-inquiry-btn"
    >
      <span className="text-[var(--accent)]">✦</span>
      <span>{label}</span>
    </button>
  );
}
