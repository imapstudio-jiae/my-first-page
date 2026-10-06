"use client";

import { useState } from "react";

export default function InteractiveDemo() {
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm run dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl flex flex-col gap-6">
      {/* Mac Terminal Card */}
      <div
        className="rounded-2xl border shadow-2xl backdrop-blur overflow-hidden"
        style={{ borderColor: "#06D6A030", backgroundColor: "#00244A" }}
      >
        {/* Terminal Header */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: "#06D6A020", backgroundColor: "#001E3C" }}
        >
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono ml-2" style={{ color: "#06D6A080" }}>Mac Terminal</span>
          </div>
          <button
            onClick={copyCommand}
            className="text-xs px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            style={{ backgroundColor: "#06D6A015", color: "#06D6A0", border: "1px solid #06D6A030" }}
            id="copy-command-btn"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#FFC300" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span style={{ color: "#FFC300" }} className="font-medium">복사됨!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>명령어 복사</span>
              </>
            )}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-sm space-y-2">
          <div className="flex items-center gap-2" style={{ color: "#06D6A0" }}>
            <span className="font-bold" style={{ color: "#FFC300" }}>➜</span>
            <span className="font-semibold" style={{ color: "#06D6A0" }}>my_first_page</span>
            <span style={{ color: "#06D6A050" }}>git:(main)</span>
            <span style={{ color: "#06D6A0" }}>npm run dev</span>
          </div>
          <div
            className="text-xs pl-4 border-l space-y-1 pt-1"
            style={{ borderColor: "#06D6A020", color: "#06D6A0AA" }}
          >
            <p>▲ Next.js 16.3 (Turbopack)</p>
            <p>
              - Local:{" "}
              <span style={{ color: "#FFC300", textDecoration: "underline" }}>
                http://localhost:3000
              </span>
            </p>
            <p style={{ color: "#06D6A0" }}>✓ Ready in ~1s</p>
          </div>
        </div>
      </div>

      {/* Interactive React State Widget */}
      <div
        className="p-5 rounded-2xl border backdrop-blur flex items-center justify-between"
        style={{ borderColor: "#06D6A030", backgroundColor: "#06D6A008" }}
      >
        <div>
          <h4 className="text-sm font-semibold" style={{ color: "#FFC300" }}>
            React Client 컴포넌트 테스트
          </h4>
          <p className="text-xs mt-0.5" style={{ color: "#06D6A0AA" }}>
            버튼을 눌러 클라이언트 상태 업데이트가 작동하는지 확인해 보세요.
          </p>
        </div>
        <div
          className="flex items-center gap-3 rounded-xl p-1.5 border"
          style={{ backgroundColor: "#001E3C", borderColor: "#06D6A030" }}
        >
          <button
            onClick={() => setCount((c) => c - 1)}
            className="w-8 h-8 rounded-lg active:scale-95 font-bold transition flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: "#06D6A015", color: "#06D6A0", border: "1px solid #06D6A030" }}
            id="counter-decrement"
          >
            -
          </button>
          <span
            className="font-mono text-base font-bold px-2 min-w-8 text-center"
            style={{ color: "#FFC300" }}
            id="counter-value"
          >
            {count}
          </span>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-8 h-8 rounded-lg active:scale-95 font-bold transition flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: "#FFC300", color: "#003566" }}
            id="counter-increment"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
