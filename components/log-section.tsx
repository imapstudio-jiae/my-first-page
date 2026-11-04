"use client";

import { useState } from "react";
import { LOG_ITEMS, LogItem } from "@/data/logs";
import { openInquiryModal } from "./inquiry-modal";

export default function LogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLog, setActiveLog] = useState<LogItem | null>(null);

  const categories = [
    { key: "all", label: "전체 기록", icon: "✦" },
    { key: "lesson", label: "기타 레슨·공연", icon: "🎸" },
    { key: "body", label: "발레·댄스 몸 기록", icon: "🩰" },
    { key: "culture", label: "독서 앙상블·문화", icon: "📖" },
    { key: "daily", label: "소소한 일상", icon: "☕" },
  ];

  const filteredLogs =
    selectedCategory === "all"
      ? LOG_ITEMS
      : LOG_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="log" className="py-20 sm:py-28 border-t border-[#E2ECE7] bg-white/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header with Brand Serif */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDF5F2] text-[#4A7C72] border border-[#D1E3DC]">
              <span className="text-[#D99B95]">✦</span>
              <span className="tracking-[0.16em] uppercase font-serif-luxury">Log & Journal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A2825] font-serif-luxury">
              일상 & 몸의 기록
            </h2>
            <p className="text-sm sm:text-base text-[#5E736E] max-w-xl leading-relaxed">
              일주일에 두 번, 레슨 현장의 소리, 발레와 셔플댄스의 몸 기록, 그리고
              책과 음악이 머무는 소소한 일상을 사진과 함께 편안하게 기록합니다.
            </p>
          </div>

          {/* Weekly Posting Note */}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#EDF5F2] border border-[#D1E3DC] text-xs font-medium text-[#4A7C72] self-start md:self-auto shadow-2xs">
            <span>📅</span>
            <span>주 2회 따뜻하게 업데이트됩니다</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-[#4A7C72] text-white shadow-xs"
                  : "bg-white border border-[#E2ECE7] text-[#5E736E] hover:bg-[#EDF5F2] hover:text-[#233330]"
              }`}
            >
              <span className="text-xs">{cat.icon}</span>
              <span>{cat.label}</span>
              {cat.key === "all" && (
                <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-stone-200/60 text-stone-700">
                  {LOG_ITEMS.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Log Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLogs.map((log) => (
            <article
              key={log.id}
              onClick={() => setActiveLog(log)}
              className="group flex flex-col justify-between p-6 rounded-3xl border border-[#E2ECE7] bg-white hover:border-[#4A7C72]/50 hover:shadow-md transition-all duration-300 cursor-pointer relative"
            >
              <div>
                {/* Header: Category Badge + Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EDF5F2] text-[#4A7C72] border-[#D1E3DC]">
                    <span>{log.categoryEmoji}</span>
                    <span>{log.categoryLabel}</span>
                  </span>
                  <span className="text-xs text-[#8FA39E] font-medium">
                    {log.date}
                  </span>
                </div>

                {/* Optional Image */}
                {log.image && (
                  <div className="mb-4 h-44 rounded-2xl overflow-hidden border border-[#E2ECE7] bg-[#F7FAF8]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={log.image}
                      alt={log.imageAlt || log.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1A2825] mb-2.5 leading-snug group-hover:text-[#4A7C72] transition-colors font-serif-luxury">
                  {log.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed line-clamp-3 mb-4">
                  {log.excerpt}
                </p>
              </div>

              {/* Tags & Read More */}
              <div className="pt-4 border-t border-[#EDF3F0] flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {log.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#8FA39E] font-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-[#4A7C72] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  자세히 보기 →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state if any */}
        {filteredLogs.length === 0 && (
          <div className="text-center py-16 text-sm text-[#8FA39E] bg-white rounded-3xl border border-[#E2ECE7]">
            해당 카테고리의 소식이 곧 등록될 예정입니다.
          </div>
        )}

        {/* Post Addition Guide for User */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#EDF5F2]/50 border border-[#D1E3DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#1A2825] flex items-center gap-2">
              <span className="text-[#D99B95]">✦</span>
              <span>글 관리가 가장 편한 구조로 설계되었습니다</span>
            </h4>
            <p className="text-xs text-[#5E736E] leading-relaxed">
              복잡한 코딩 없이 <code className="px-1.5 py-0.5 rounded bg-white border border-[#D1E3DC] text-[#4A7C72] font-mono">data/logs.ts</code> 파일에 새로운 일상이나 사진을 한 덩어리 추가하시면 사이트에 바로 카드가 생성됩니다.
            </p>
          </div>
          <button
            onClick={() => openInquiryModal("일반 문의 및 응원 메시지")}
            className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#D1E3DC] hover:bg-[#EDF5F2] text-[#233330] whitespace-nowrap transition-all shadow-2xs cursor-pointer"
          >
            응원 메시지 남기기
          </button>
        </div>
      </div>

      {/* Detail Modal for Log Reading */}
      {activeLog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          style={{ backgroundColor: "rgba(26, 40, 37, 0.45)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveLog(null);
          }}
        >
          <div className="w-full max-w-2xl max-h-[85vh] rounded-3xl border border-[#E2ECE7] bg-[#F7FAF8] shadow-2xl overflow-y-auto animate-scaleUp p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2ECE7]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-[#EDF5F2] text-[#4A7C72] border-[#D1E3DC]">
                <span>{activeLog.categoryEmoji}</span>
                <span>{activeLog.categoryLabel}</span>
              </span>
              <button
                onClick={() => setActiveLog(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-[#8FA39E] hover:text-[#233330] hover:bg-stone-200/50 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-4">
              <span className="text-xs text-[#8FA39E] font-medium">{activeLog.date}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A2825] leading-snug font-serif-luxury">
                {activeLog.title}
              </h3>

              {activeLog.image && (
                <div className="rounded-2xl overflow-hidden border border-[#E2ECE7] max-h-80 bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeLog.image}
                    alt={activeLog.imageAlt || activeLog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-sm sm:text-base text-[#384844] leading-relaxed whitespace-pre-line pt-2">
                {activeLog.content}
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {activeLog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#E2ECE7] text-[#5E736E]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2ECE7] flex items-center justify-between">
              <span className="text-xs text-[#8FA39E]">소통하고 싶다면</span>
              <button
                onClick={() => {
                  const cat =
                    activeLog.category === "lesson"
                      ? "기타 레슨 / 스튜디오 문의"
                      : activeLog.category === "culture"
                      ? "독서 앙상블 / 문화 프로그램 참여"
                      : "일반 문의 및 응원 메시지";
                  setActiveLog(null);
                  openInquiryModal(cat);
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#4A7C72] hover:bg-[#3C665D] text-white transition-all cursor-pointer shadow-xs"
              >
                관련 문의하기 →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
