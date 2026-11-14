"use client";

import { useState, useEffect } from "react";
import { ARCHIVE_ITEMS, ArchiveItem } from "@/data/archive";
import { SITE_CONFIG } from "@/data/site-config";

export default function ArchiveSection() {
  const [activeTab, setActiveTab] = useState<"all" | "youtube" | "blog">("all");
  const [selectedVideo, setSelectedVideo] = useState<ArchiveItem | null>(null);

  // ESC 키로 유튜브 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  const filteredItems =
    activeTab === "all"
      ? ARCHIVE_ITEMS
      : ARCHIVE_ITEMS.filter((item) => item.type === activeTab);

  const handleCardClick = (item: ArchiveItem) => {
    if (item.type === "youtube") {
      setSelectedVideo(item);
    } else if (item.blogUrl) {
      window.open(item.blogUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="archive" className="py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] font-serif-luxury">
              ARCHIVE
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
              JI.Stage 아틀리에의 연주 영상과 무대, 발레·댄스 기록, 그리고 네이버 블로그에 연재 중인 깊은 이야기들을 모아두는 아카이브입니다.
            </p>
          </div>

          {/* Tab Filter Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-[var(--bg-main)] p-1.5 rounded-full border border-[var(--border-subtle)]">
            {[
              { key: "all", label: "전체 아카이브", icon: "✦" },
              { key: "youtube", label: "유튜브 영상", icon: "▶" },
              { key: "blog", label: "네이버 블로그", icon: "N" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "all" | "youtube" | "blog")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-[var(--primary)] text-white shadow-xs"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                <span className="text-[11px] font-bold">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const thumbUrl =
              item.thumbnail ||
              (item.youtubeId
                ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
                : "/jistage_hero.jpg");

            return (
              <article
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group flex flex-col justify-between p-5 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--primary)]/50 hover:shadow-lg transition-all duration-300 cursor-pointer relative"
              >
                <div>
                  {/* Thumbnail with Overlay & Play icon */}
                  <div className="relative mb-4 h-48 rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-stone-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumbUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />

                    {/* Badge: YouTube or Blog */}
                    <div className="absolute top-3 left-3 z-10">
                      {item.type === "youtube" ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#E11D48] text-white shadow-sm">
                          <span>▶</span>
                          <span>YouTube 영상</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#03C75A] text-white shadow-sm">
                          <span>N</span>
                          <span>네이버 블로그</span>
                        </span>
                      )}
                    </div>

                    {/* Date Tag */}
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-sm text-[10px] text-white font-medium">
                      {item.date}
                    </div>

                    {/* Play / Open Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                      {item.type === "youtube" ? (
                        <div className="w-12 h-12 rounded-full bg-white/95 text-[#E11D48] flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform">
                          ▶
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-white/95 text-[#03C75A] flex items-center justify-center font-black text-sm shadow-lg group-hover:scale-110 transition-transform">
                          N
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[var(--text-main)] mb-2 leading-snug group-hover:text-[var(--primary)] transition-colors font-serif-luxury line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--bg-main)] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="font-semibold text-[var(--primary)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {item.type === "youtube" ? "영상 재생 팝업 →" : "블로그 보기 ↗"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* User Guide Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
              <span className="text-[var(--accent)]">✦</span>
              <span>새로운 영상과 글을 편하게 추가하세요</span>
            </h4>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              <code className="px-1.5 py-0.5 rounded bg-white border border-[var(--border-subtle)] text-[var(--primary)] font-mono">data/archive.ts</code>에 유튜브 영상 주소(또는 ID)와 소개말을 추가하시면 썸네일과 팝업 플레이어가 사이트에 바로 연결됩니다.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={SITE_CONFIG.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white border border-[var(--border-subtle)] hover:bg-[var(--primary-light)] text-[var(--text-main)] whitespace-nowrap transition-all shadow-2xs cursor-pointer"
            >
              유튜브 채널 바로가기 ↗
            </a>
            <a
              href={SITE_CONFIG.social.naverBlog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white border border-[var(--border-subtle)] hover:bg-[var(--primary-light)] text-[var(--text-main)] whitespace-nowrap transition-all shadow-2xs cursor-pointer"
            >
              네이버 블로그 바로가기 ↗
            </a>
          </div>
        </div>
      </div>

      {/* YOUTUBE VIDEO POPUP MODAL */}
      {selectedVideo && selectedVideo.youtubeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          style={{ backgroundColor: "rgba(18, 28, 25, 0.75)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedVideo(null);
          }}
        >
          <div className="w-full max-w-3xl rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-main)] shadow-2xl overflow-hidden animate-scaleUp">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[var(--border-subtle)] bg-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#E11D48] text-white flex items-center justify-center text-xs font-bold">
                  ▶
                </span>
                <div>
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#E11D48] font-bold">
                    YouTube Video Player
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-main)] font-serif-luxury truncate max-w-md sm:max-w-xl">
                    {selectedVideo.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-[var(--text-subtle)] hover:text-[var(--text-main)] hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            {/* Embedded YouTube Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-white space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-[var(--text-subtle)]">
                  <span>{selectedVideo.date}</span>
                  <span>•</span>
                  <span>JI.Stage Archive</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {selectedVideo.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {selectedVideo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg-main)] text-[var(--primary)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[var(--text-subtle)]">
                  유튜브에서 댓글과 좋아요를 남겨보세요
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(null)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] text-[var(--text-muted)] hover:bg-[var(--bg-main)] cursor-pointer"
                  >
                    닫기
                  </button>
                  <a
                    href={
                      selectedVideo.youtubeUrl ||
                      `https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-xs transition-all cursor-pointer"
                  >
                    <span>유튜브로 이동하여 보기</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
