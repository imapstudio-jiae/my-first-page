"use client";

import { useState, useEffect } from "react";

export function openInquiryModal(category?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-inquiry-modal", { detail: { category } })
    );
  }
}

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    category: "기타 레슨 / 스튜디오 문의",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ category?: string }>;
      if (customEvent.detail?.category) {
        setFormData((prev) => ({
          ...prev,
          category: customEvent.detail.category!,
        }));
      }
      setErrorMessage("");
      setIsOpen(true);
    };
    window.addEventListener("open-inquiry-modal", handleOpen);
    return () => window.removeEventListener("open-inquiry-modal", handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !formData.name.trim() ||
      !formData.contact.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage("모든 필수 항목을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "이메일 전송에 실패했습니다.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "전송 중 오류가 발생했습니다.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      contact: "",
      category: "기타 레슨 / 스튜디오 문의",
      message: "",
    });
    setErrorMessage("");
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* 우측 하단 플로팅 문의하기 버튼 (뮤티드 민트 & 더스티 핑크 글로우) */}
      <button
        onClick={() => openInquiryModal("기타 레슨 / 스튜디오 문의")}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-5 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-[#D1E3DC] bg-white text-[#233330]"
        id="floating-inquiry-btn"
        aria-label="문의사항 남기기"
      >
        <span className="w-6 h-6 rounded-full bg-[#EDF5F2] text-[#4A7C72] flex items-center justify-center text-xs group-hover:rotate-12 transition-transform font-bold">
          ✦
        </span>
        <span className="font-semibold text-xs tracking-tight">상담 및 신청</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D99B95] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D99B95]"></span>
        </span>
      </button>

      {/* 문의 팝업 모달 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          style={{ backgroundColor: "rgba(26, 40, 37, 0.45)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="w-full max-w-lg rounded-3xl border border-[#E2ECE7] bg-[#F7FAF8] shadow-2xl overflow-hidden animate-scaleUp">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-[#E2ECE7] bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EDF5F2] text-[#4A7C72] flex items-center justify-center text-lg">
                  ✦
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#4A7C72] font-semibold font-serif-luxury">
                    Reservation & Inquiry
                  </span>
                  <h3 className="text-base font-bold text-[#1A2825] font-serif-luxury">
                    상담 및 참여 신청
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-[#8FA39E] hover:text-[#233330] hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl shadow-sm bg-[#EDF5F2] text-[#4A7C72] border border-[#D1E3DC] animate-bounce">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-[#1A2825] font-serif-luxury">
                    신청이 성공적으로 접수되었습니다
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                    남겨주신 메시지를 꼼꼼히 확인한 후,<br />
                    기재해주신 연락처나 이메일로 다정하게 안내드리겠습니다.
                  </p>

                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full font-semibold text-xs bg-[#4A7C72] hover:bg-[#3C665D] text-white transition-all cursor-pointer shadow-xs"
                    >
                      확인 완료
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-2xl text-xs flex items-start gap-2 border bg-[#FAF1F0] border-[#F0D4D1] text-[#C58882] leading-relaxed">
                      <span>⚠️</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 카테고리 선택 */}
                  <div>
                    <label className="block text-xs font-semibold text-[#5E736E] mb-1.5">
                      상담 및 신청 유형 <span className="text-[#D99B95]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        {
                          val: "기타 레슨 / 스튜디오 문의",
                          icon: "🎸",
                          label: "기타 레슨·스튜디오",
                        },
                        {
                          val: "독서 앙상블 / 문화 프로그램 참여",
                          icon: "📖",
                          label: "독서 앙상블·살롱",
                        },
                        {
                          val: "프로젝트 협업 및 대관 문의",
                          icon: "🎪",
                          label: "공간 협업·대관",
                        },
                        {
                          val: "일반 문의 및 응원 메시지",
                          icon: "☕",
                          label: "일반 문의·응원",
                        },
                      ].map((cat) => (
                        <button
                          key={cat.val}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              category: cat.val,
                            }))
                          }
                          className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center gap-2 transition-all cursor-pointer ${
                            formData.category === cat.val
                              ? "bg-white border-[#4A7C72] text-[#4A7C72] ring-1 ring-[#4A7C72] shadow-2xs font-semibold"
                              : "bg-white/70 border-[#E2ECE7] text-[#5E736E] hover:bg-white"
                          }`}
                        >
                          <span>{cat.icon}</span>
                          <span className="truncate">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 성함 */}
                  <div>
                    <label className="block text-xs font-semibold text-[#5E736E] mb-1">
                      성함 / 닉네임 <span className="text-[#D99B95]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="예: 김지수"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2ECE7] bg-white text-xs text-[#233330] focus:outline-none focus:ring-2 focus:ring-[#4A7C72]/30 focus:border-[#4A7C72] placeholder:text-[#8FA39E]"
                    />
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-xs font-semibold text-[#5E736E] mb-1">
                      연락처 또는 이메일{" "}
                      <span className="text-[#D99B95]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      placeholder="예: 010-1234-5678 또는 name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2ECE7] bg-white text-xs text-[#233330] focus:outline-none focus:ring-2 focus:ring-[#4A7C72]/30 focus:border-[#4A7C72] placeholder:text-[#8FA39E]"
                    />
                  </div>

                  {/* 메시지 */}
                  <div>
                    <label className="block text-xs font-semibold text-[#5E736E] mb-1">
                      남기실 메시지 <span className="text-[#D99B95]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="기타 경험 여부, 원하시는 레슨 형태(1:1/그룹), 또는 참여하고 싶은 문화 프로그램 일정을 적어주세요 :)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2ECE7] bg-white text-xs text-[#233330] focus:outline-none focus:ring-2 focus:ring-[#4A7C72]/30 focus:border-[#4A7C72] placeholder:text-[#8FA39E] resize-none leading-relaxed"
                    />
                  </div>

                  {/* 버튼 */}
                  <div className="pt-2 flex items-center justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#8FA39E] hover:bg-stone-100 transition-colors cursor-pointer"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#4A7C72] hover:bg-[#3C665D] text-white transition-all cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      {isSubmitting ? "전송 중..." : "신청 보내기 →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
