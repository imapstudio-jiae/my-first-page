"use client";

import { useState, useEffect } from "react";

export function openInquiryModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-inquiry-modal"));
  }
}

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    category: "일반 문의",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 전역 이벤트 리스너 (페이지 내 다른 버튼에서도 모달 호출 가능)
  useEffect(() => {
    const handleOpen = () => {
      setErrorMessage("");
      setIsOpen(true);
    };
    window.addEventListener("open-inquiry-modal", handleOpen);
    return () => window.removeEventListener("open-inquiry-modal", handleOpen);
  }, []);

  // ESC 키로 닫기
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

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
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
      const msg = err instanceof Error ? err.message : "전송 중 오류가 발생했습니다.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      contact: "",
      category: "일반 문의",
      message: "",
    });
    setErrorMessage("");
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* 우측 하단 플로팅 문의하기 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border"
        style={{
          backgroundColor: "#FFC300",
          color: "#003566",
          borderColor: "#FFC30080",
          boxShadow: "0 10px 25px -5px rgba(255, 195, 0, 0.4)",
        }}
        id="floating-inquiry-btn"
        aria-label="문의사항 남기기"
      >
        <span className="text-xl group-hover:rotate-12 transition-transform duration-200">💬</span>
        <span className="font-bold text-sm tracking-tight">문의사항 남기기</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-700"></span>
        </span>
      </button>

      {/* 문의 팝업 모달 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn"
          style={{ backgroundColor: "rgba(0, 20, 45, 0.75)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden animate-scaleUp"
            style={{
              backgroundColor: "#00244A",
              borderColor: "#06D6A040",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "#06D6A020", backgroundColor: "#001E3C" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xl">📬</span>
                <div>
                  <h3 className="text-base font-bold" style={{ color: "#FFC300" }}>
                    문의사항 남기기
                  </h3>
                  <p className="text-xs" style={{ color: "#06D6A0AA" }}>
                    궁금한 점이나 전하고 싶은 메시지를 남겨주세요.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-colors cursor-pointer"
                style={{ color: "#06D6A080", backgroundColor: "#06D6A010" }}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl shadow-lg animate-bounce"
                    style={{ backgroundColor: "#06D6A020", color: "#06D6A0", border: "2px solid #06D6A0" }}
                  >
                    ✓
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: "#FFC300" }}>
                    문의가 성공적으로 접수되었습니다!
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#06D6A0BB" }}>
                    작성해주신 소중한 내용은 꼼꼼히 확인 후<br />
                    기재해주신 연락처/이메일로 빠르게 회신드리겠습니다.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer shadow-md"
                      style={{ backgroundColor: "#FFC300", color: "#003566" }}
                    >
                      확인 완료
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div
                      className="p-3 rounded-xl text-xs flex items-start gap-2 border leading-relaxed"
                      style={{
                        backgroundColor: "#FF005515",
                        borderColor: "#FF005540",
                        color: "#FF8099",
                      }}
                    >
                      <span className="text-sm">⚠️</span>
                      <div className="flex-1 font-medium">{errorMessage}</div>
                    </div>
                  )}

                  {/* 이름 입력 */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#06D6A0" }}>
                      성함 / 닉네임 <span style={{ color: "#FFC300" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none transition"
                      style={{
                        backgroundColor: "#001E3C",
                        borderColor: "#06D6A030",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>

                  {/* 연락처 / 이메일 입력 */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#06D6A0" }}>
                      답변받으실 연락처 / 이메일 <span style={{ color: "#FFC300" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: email@example.com 또는 010-0000-0000"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none transition"
                      style={{
                        backgroundColor: "#001E3C",
                        borderColor: "#06D6A030",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>

                  {/* 문의 유형 선택 */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#06D6A0" }}>
                      문의 유형
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["일반 문의", "프로젝트 협업", "기타 의견"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: type })}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border transition cursor-pointer ${
                            formData.category === type ? "font-bold shadow-sm" : ""
                          }`}
                          style={{
                            backgroundColor: formData.category === type ? "#06D6A025" : "#001E3C",
                            borderColor: formData.category === type ? "#06D6A0" : "#06D6A020",
                            color: formData.category === type ? "#FFC300" : "#06D6A080",
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 문의 내용 입력 */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#06D6A0" }}>
                      문의 내용 <span style={{ color: "#FFC300" }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="남기실 내용을 자세히 적어주세요."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none transition resize-none"
                      style={{
                        backgroundColor: "#001E3C",
                        borderColor: "#06D6A030",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>

                  {/* 안내 문구 & 버튼 */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium transition cursor-pointer"
                      style={{ color: "#06D6A080", backgroundColor: "#06D6A010" }}
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg transition active:scale-95 cursor-pointer disabled:opacity-50"
                      style={{
                        backgroundColor: "#06D6A0",
                        color: "#003566",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block animate-spin">⏳</span>
                          <span>전송 중...</span>
                        </>
                      ) : (
                        <>
                          <span>보내기</span>
                          <span>🚀</span>
                        </>
                      )}
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
