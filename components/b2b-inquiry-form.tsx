"use client";

import { useState } from "react";

const PROGRAM_TYPES = [
  "북 콘서트 & 어쿠스틱 살롱",
  "책과 움직임의 테라피",
  "음악과 움직임 (연주 감상 & 스트레칭)",
  "기업 복지 · 기관 동아리 정기 레슨 (다회차)",
  "기타 맞춤형 기획 문의",
];

export default function B2BInquiryForm() {
  const [orgName, setOrgName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([
    "북 콘서트 & 어쿠스틱 살롱",
  ]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!orgName.trim() || !contact.trim() || !message.trim()) {
      setErrorMessage("기관/공간명, 담당자 연락처, 문의 내용을 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const categoryLabel =
        selectedTypes.length > 0
          ? `출강 · 공간 제휴 문의 (${selectedTypes.join(", ")})`
          : "출강 · 공간 제휴 문의";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: orgName.trim(),
          contact: contact.trim(),
          category: categoryLabel,
          message: message.trim(),
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "문의 접수 중 오류가 발생했습니다.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "문의 전송 중 오류가 발생했습니다.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setOrgName("");
    setContact("");
    setSelectedTypes(["북 콘서트 & 어쿠스틱 살롱"]);
    setMessage("");
    setErrorMessage("");
    setIsSubmitted(false);
  };

  return (
    <div
      id="b2b-inquiry"
      className="scroll-mt-24 rounded-3xl bg-white text-[var(--text-main)] border border-[var(--border-subtle)] p-6 sm:p-10 shadow-xl"
    >
      <div className="mb-6 space-y-2">
        <span className="text-xs font-bold text-[var(--accent)] tracking-wider uppercase">
          Quick Proposal &amp; Inquiry
        </span>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
          출강 · 공간 제휴 빠른 문의 폼
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          도서관·기업·서점·카페 등 공간 성격과 대상에 맞는 커리큘럼 및 견적 제안서를 빠르게 보내드립니다.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-10 text-center space-y-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] px-6">
          <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-2xl bg-[var(--primary)] text-white shadow-sm">
            ✓
          </div>
          <h4 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">
            출강 · 공간 제휴 문의가 접수되었습니다
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-md mx-auto">
            남겨주신 기관 및 프로그램 정보를 확인한 뒤, 담당자님 연락처로 맞춤 제안서와 함께 빠르게 회신드리겠습니다.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white transition-all cursor-pointer"
            >
              추가 문의 작성하기
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div className="p-3.5 rounded-2xl text-xs bg-[var(--accent-light)] border border-[var(--accent-border)] text-[var(--accent-hover)] font-medium">
              ⚠️ {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="b2b-org-name"
                className="block text-xs font-bold text-[var(--text-main)] mb-1.5"
              >
                기관 / 공간명 <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                id="b2b-org-name"
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="예: OO시립도서관 / OO기업 / OO책방"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-main)]/40 text-sm text-[var(--text-main)] placeholder:text-[var(--text-subtle)]/70 focus:outline-none focus:border-[var(--primary)] focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="b2b-contact"
                className="block text-xs font-bold text-[var(--text-main)] mb-1.5"
              >
                담당자 성함 및 연락처 <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                id="b2b-contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="예: 홍길동 팀장 / 010-1234-5678 또는 이메일"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-main)]/40 text-sm text-[var(--text-main)] placeholder:text-[var(--text-subtle)]/70 focus:outline-none focus:border-[var(--primary)] focus:bg-white transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <p className="block text-xs font-bold text-[var(--text-main)] mb-2">
              희망 프로그램 유형 (중복 선택 가능)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PROGRAM_TYPES.map((type) => {
                const checked = selectedTypes.includes(type);
                return (
                  <label
                    key={type}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all ${
                      checked
                        ? "bg-[var(--primary-light)]/70 border-[var(--primary)] text-[var(--text-main)] font-semibold"
                        : "bg-[var(--bg-main)]/35 border-[var(--border-subtle)] text-[var(--text-muted)] hover:bg-[var(--bg-main)]/70"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleType(type)}
                      className="w-4 h-4 accent-[var(--primary)] rounded cursor-pointer"
                    />
                    <span>{type}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="b2b-message"
              className="block text-xs font-bold text-[var(--text-main)] mb-1.5"
            >
              문의 내용 (희망 일정, 대상, 예상 인원 등) <span className="text-[var(--accent)]">*</span>
            </label>
            <textarea
              id="b2b-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="희망하시는 분야(기타/발레/댄스/독서), 예상 인원, 진행 횟수(원데이 또는 10~20회 정기 레슨 등)를 편하게 적어주세요."
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-main)]/40 text-sm text-[var(--text-main)] placeholder:text-[var(--text-subtle)]/70 focus:outline-none focus:border-[var(--primary)] focus:bg-white transition-colors resize-y"
              required
            />
          </div>

          <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs text-[var(--text-subtle)]">
              영업일 기준 24시간 이내에 담당 호스트가 직접 연락드립니다.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 text-white transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
            >
              <span>
                {isSubmitting ? "문의 접수 중..." : "출강 · 제휴 제안서 및 상담 신청하기"}
              </span>
              {!isSubmitting && <span>→</span>}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

