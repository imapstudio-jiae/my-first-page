"use client";

import { openInquiryModal } from "./inquiry-modal";

interface InquiryTriggerButtonProps {
  variant?: "header" | "cta";
  label?: string;
}

export default function InquiryTriggerButton({
  variant = "header",
  label = "문의하기",
}: InquiryTriggerButtonProps) {
  if (variant === "header") {
    return (
      <button
        onClick={openInquiryModal}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
        style={{
          borderColor: "#FFC30060",
          backgroundColor: "#FFC30015",
          color: "#FFC300",
        }}
        id="header-inquiry-btn"
      >
        <span>💬</span>
        <span>{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={openInquiryModal}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-xl border"
      style={{
        backgroundColor: "#FFC300",
        color: "#003566",
        borderColor: "#FFC300",
        boxShadow: "0 10px 25px -5px rgba(255, 195, 0, 0.4)",
      }}
      id="cta-inquiry-btn"
    >
      <span className="text-lg">💬</span>
      <span>{label}</span>
      <span>→</span>
    </button>
  );
}
