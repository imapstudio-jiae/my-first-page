"use client";

import { useState } from "react";
import { openInquiryModal } from "./inquiry-modal";

export default function ReservationPreviewCard() {
  const [activeMainType, setActiveMainType] = useState<"lesson" | "culture">("lesson");
  const [selectedSubtype, setSelectedSubtype] = useState<string>("어쿠스틱 기타");

  const lessonTypes = [
    { id: "acoustic", label: "어쿠스틱 기타" },
    { id: "classic", label: "클래식 기타" },
    { id: "fingerstyle", label: "핑거스타일" },
    { id: "group", label: "소수 그룹 앙상블" },
    { id: "concert", label: "학생 정기 공연 프로젝트" },
  ];

  const cultureTypes = [
    { id: "reading", label: "독서 앙상블" },
    { id: "movement", label: "무브먼트 & 댄스 살롱" },
    { id: "salon", label: "하우스 콘서트" },
    { id: "collab", label: "공간 대관 및 협업 기획" },
  ];

  const handleApply = () => {
    const category =
      activeMainType === "lesson"
        ? "기타 레슨 / 스튜디오 문의"
        : "독서 앙상블 / 문화 프로그램 참여";
    openInquiryModal(category);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-white/95 border border-[#E2ECE7] shadow-lg p-6 sm:p-9 space-y-7 relative overflow-hidden">
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D1E3DC] via-[#4A7C72] to-[#D99B95]" />

      {/* Step 1: Type Selection */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#EDF5F2] text-[#4A7C72] font-bold text-xs flex items-center justify-center">
            1
          </span>
          <h3 className="font-bold text-sm sm:text-base text-[#1A2825]">
            문의 & 상담 유형 선택
          </h3>
          <span className="text-[11px] text-[#8FA39E]">
            원하시는 분야를 선택해주세요
          </span>
        </div>

        {/* 2 Main Tabs */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveMainType("lesson");
              setSelectedSubtype("어쿠스틱 기타");
            }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              activeMainType === "lesson"
                ? "bg-[#EDF5F2]/80 border-[#4A7C72] shadow-xs"
                : "bg-[#F7FAF8] border-[#E2ECE7] hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xl">🎸</span>
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  activeMainType === "lesson"
                    ? "border-[#4A7C72] bg-[#4A7C72] text-white text-[10px]"
                    : "border-[#CBDCD6]"
                }`}
              >
                {activeMainType === "lesson" && "✓"}
              </span>
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#1A2825]">
              기타 레슨 & 스튜디오
            </p>
            <p className="text-[11px] text-[#5E736E] mt-0.5">
              1:1 맞춤 진도 · 앙상블 · 정기 공연
            </p>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveMainType("culture");
              setSelectedSubtype("독서 앙상블");
            }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              activeMainType === "culture"
                ? "bg-[#FAF1F0]/80 border-[#D99B95] shadow-xs"
                : "bg-[#F7FAF8] border-[#E2ECE7] hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xl">📖</span>
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  activeMainType === "culture"
                    ? "border-[#D99B95] bg-[#D99B95] text-white text-[10px]"
                    : "border-[#CBDCD6]"
                }`}
              >
                {activeMainType === "culture" && "✓"}
              </span>
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#1A2825]">
              독서 앙상블 & 문화 기획
            </p>
            <p className="text-[11px] text-[#5E736E] mt-0.5">
              책과 음악 살롱 · 댄스 워크숍
            </p>
          </button>
        </div>

        {/* Sub-pills */}
        <div className="pt-2">
          <p className="text-xs font-semibold text-[#5E736E] mb-2">
            세부 프로그램 선택
          </p>
          <div className="flex flex-wrap gap-2">
            {(activeMainType === "lesson" ? lessonTypes : cultureTypes).map(
              (sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubtype(sub.label)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedSubtype === sub.label
                      ? "bg-[#4A7C72] text-white shadow-2xs font-semibold"
                      : "bg-[#F7FAF8] border border-[#E2ECE7] text-[#5E736E] hover:bg-[#EDF5F2]"
                  }`}
                >
                  {sub.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Step 2: Confirmation & Apply CTA */}
      <div className="pt-4 border-t border-[#EDF3F0] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="text-xs text-[#8FA39E]">선택된 프로그램</span>
          <p className="font-bold text-sm text-[#1A2825] flex items-center gap-1.5">
            <span className="text-[#D99B95]">✦</span>
            <span>
              {activeMainType === "lesson" ? "기타 레슨" : "문화 기획"} —{" "}
              {selectedSubtype}
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={handleApply}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-[#4A7C72] hover:bg-[#3C665D] text-white shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>선택한 내용으로 상담 신청</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

