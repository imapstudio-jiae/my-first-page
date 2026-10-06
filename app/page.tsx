import InteractiveDemo from "@/components/interactive-demo";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#003566", color: "#06D6A0" }}
    >
      {/* Header */}
      <header
        className="border-b backdrop-blur sticky top-0 z-50"
        style={{ borderColor: "#06D6A020", backgroundColor: "#00356690" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="h-7 w-7 rounded-lg flex items-center justify-center font-black text-sm shadow-md"
              style={{ backgroundColor: "#FFC300", color: "#003566" }}
            >
              N
            </div>
            <span className="font-semibold text-sm tracking-tight" style={{ color: "#06D6A0" }}>
              my_first_page
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium"
            style={{ borderColor: "#06D6A040", backgroundColor: "#06D6A010", color: "#06D6A0" }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#06D6A0" }} />
            macOS Ready
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 flex flex-col items-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium mb-6"
          style={{ borderColor: "#FFC30040", backgroundColor: "#FFC30015", color: "#FFC300" }}
        >
          <span>✨</span>
          <span>Next.js 16 + TypeScript + Tailwind CSS</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center max-w-2xl leading-tight">
          <span
            style={{
              background: "linear-gradient(to right, #06D6A0, #FFC300, #06D6A0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            안녕하세요, 김지애입니다
          </span>
        </h1>

        {/* moon.jpg — 제목 바로 아래, 달과 별이 잘 보이는 사이즈 */}
        <div
          className="mt-8 rounded-2xl overflow-hidden shadow-2xl border"
          style={{ borderColor: "#06D6A030", width: "260px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/moon.jpg"
            alt="초승달과 별"
            className="w-full object-cover"
            style={{ height: "380px", objectPosition: "center 38%" }}
          />
        </div>

        <p
          className="mt-8 text-center max-w-lg text-sm sm:text-base leading-relaxed"
          style={{ color: "#06D6A0BB" }}
        >
          TypeScript, App Router, 최신 Tailwind CSS 환경이 구성되었습니다.
          아래 명령어로 개발 서버를 시작해 보세요.
        </p>

        {/* Interactive Demo */}
        <section className="mt-10 w-full flex justify-center">
          <InteractiveDemo />
        </section>

        {/* Tech Stack Cards */}
        <section className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "📁", title: "App Router", desc: "app/ 디렉터리 기반의 최신 라우팅 시스템과 리액트 서버 컴포넌트를 지원합니다." },
            { icon: "🛡️", title: "TypeScript", desc: "엄격한 정적 타입 검사로 버그를 사전에 방지하고 안전하게 코드를 작성할 수 있습니다." },
            { icon: "🎨", title: "Tailwind CSS", desc: "최신 Tailwind CSS가 적용되어 유틸리티 클래스로 직관적이고 빠른 UI 디자인이 가능합니다." },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border transition duration-200 hover:scale-[1.02]"
              style={{ borderColor: "#06D6A030", backgroundColor: "#06D6A008" }}
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="font-semibold text-base mb-1" style={{ color: "#FFC300" }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#06D6A0AA" }}>
                {desc}
              </p>
            </div>
          ))}
        </section>

        {/* Quick Steps */}
        <section
          className="mt-10 w-full max-w-2xl rounded-2xl border p-6"
          style={{ borderColor: "#06D6A030", backgroundColor: "#06D6A008" }}
        >
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "#FFC300" }}>
            <span>🚀</span> 맥 터미널에서 다음 단계 진행하기
          </h3>
          <ol className="text-xs space-y-2 list-decimal list-inside leading-relaxed" style={{ color: "#06D6A0AA" }}>
            <li>
              맥 터미널에서{" "}
              <code className="px-1.5 py-0.5 rounded" style={{ color: "#06D6A0", backgroundColor: "#06D6A015" }}>
                npm run dev
              </code>{" "}
              실행
            </li>
            <li>
              브라우저 주소창에{" "}
              <code className="px-1.5 py-0.5 rounded" style={{ color: "#FFC300", backgroundColor: "#FFC30015" }}>
                http://localhost:3000
              </code>{" "}
              접속
            </li>
            <li>
              <code className="px-1.5 py-0.5 rounded" style={{ color: "#06D6A0", backgroundColor: "#06D6A015" }}>
                app/page.tsx
              </code>{" "}
              파일을 열어 원하는 내용으로 자유롭게 수정
            </li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-6 text-center text-xs"
        style={{ borderColor: "#06D6A020", color: "#06D6A060" }}
      >
        <p>Built with Next.js • React • Tailwind CSS</p>
      </footer>
    </div>
  );
}
