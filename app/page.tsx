import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InquiryModal from "@/components/inquiry-modal";
import ArchiveSection from "@/components/archive-section";
import InquiryTriggerButton from "@/components/inquiry-trigger-button";
import SocialLinks from "@/components/social-links";
import B2BInquiryForm from "@/components/b2b-inquiry-form";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] relative overflow-hidden">
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* ========================================================= */}
        {/* HERO SECTION : 군더더기 없이 깔끔한 타이틀과 아지트 공간 이미지 */}
        {/* ========================================================= */}
        <section className="pt-10 pb-14 sm:pt-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-5">
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[var(--text-main)] leading-[1.25] max-w-3xl mx-auto">
              바쁜 일상 속,
              <br className="hidden sm:inline" /> 자기만의 리듬과 감각을 되찾는 무대
            </h1>

            <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal max-w-2xl mx-auto leading-relaxed">
              음악을 배우고, 몸을 움직이고, 생각을 나누며 온전한 나로 숨 쉬는 곳 &amp; 문화 기획 스튜디오, JI.Stage
            </p>

            {/* 메인 이미지: 뱃지나 오버레이 없이 깔끔한 공간 사진 */}
            <div className="!mt-7 relative rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-lg bg-[var(--bg-subtle)] group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jistage_hero.jpg"
                alt="JI.Stage 아틀리에 전경 - 음악과 움직임이 머무는 프라이빗 아지트"
                className="w-full h-64 sm:h-88 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
            </div>

            {/* 행동 유도 버튼 */}
            <div className="!mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#stages"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer"
              >
                <span>문화 무대 둘러보기</span>
                <span>↓</span>
              </a>
              <a
                href="#b2b-section"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer"
              >
                <span>도서관·기업 출강 &amp; 제휴 안내</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1. JI.Stage의 3가지 무대 (히어로 직하단 핵심 위치) */}
        {/* ========================================================= */}
        <section id="stages" className="py-20 sm:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-main)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight leading-snug">
                프라이빗 아지트에서 시작해,
                <br className="hidden sm:inline" /> 온라인과 세상으로 이어지는 문화 무대
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                아늑한 아지트의 밀도 높은 오프라인 경험에서 출발해, 공간의 제약을 넘는 온라인 클래스, 그리고 도서관·기업·서점을 직접 찾아가는 맞춤형 문화 출강까지 확장합니다.
              </p>
            </div>

            {/* 3단 핵심 무대 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 카드 1: 오프라인 아지트 살롱 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between space-y-5 hover:border-[var(--primary)] hover:shadow-xl transition-all shadow-sm">
                <div className="space-y-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/activity_learn.jpg"
                    alt="오프라인 아지트 살롱"
                    className="w-full aspect-[5/4] object-cover rounded-2xl border border-[var(--border-subtle)]/50"
                  />
                  <div className="space-y-1.5">
                    <span className="block text-xs font-extrabold text-[var(--primary)] tracking-wider uppercase">
                      Stage 01 · Offline Atelier
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">
                      오프라인 아지트 살롱
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    아늑한 공간에서 4~6인이 연결되는 시간
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)]/60">
                  <a
                    href="#schedule"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
                  >
                    <span>모임 일정 보기</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* 카드 2: 온라인 클래스 & 북클럽 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between space-y-5 hover:border-[var(--primary)] hover:shadow-xl transition-all shadow-sm">
                <div className="space-y-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/activity_share.jpg"
                    alt="온라인 클래스 & 북클럽"
                    className="w-full aspect-[5/4] object-cover rounded-2xl border border-[var(--border-subtle)]/50"
                  />
                  <div className="space-y-1.5">
                    <span className="block text-xs font-extrabold text-[var(--primary)] tracking-wider uppercase">
                      Stage 02 · Online Class
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">
                      온라인 클래스 &amp; 북클럽
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    공간의 한계를 넘어 전국 어디서나 함께하는 온라인 독서 모임, 북 마케터 특강 및 자격증 과정
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)]/60">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
                  >
                    <span>온라인 프로그램 보기</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* 카드 3: 도서관 · 기업 · 공간 출강 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[var(--accent)]/70 flex flex-col justify-between space-y-5 hover:border-[var(--accent)] hover:shadow-xl transition-all shadow-md">
                <div className="space-y-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/activity_express.jpg"
                    alt="도서관 · 기업 · 공간 출강"
                    className="w-full aspect-[5/4] object-cover rounded-2xl border border-[var(--border-subtle)]/50"
                  />
                  <div className="space-y-1.5">
                    <span className="block text-xs font-extrabold text-[var(--accent)] tracking-wider uppercase">
                      Stage 03 · B2B &amp; Space
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">
                      도서관 · 기업 · 공간 출강
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    검증된 독서 지도자, 북 큐레이터, 연주자, 발레·댄스 강사진이 귀사의 공간으로 직접 찾아가는 맞춤형 문화 기획
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="#b2b-section"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-all shadow-xs"
                  >
                    <span>출강·제휴 제안 보기</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. 개인 프로그램 안내 (오프라인 아지트 & 온라인 클래스) */}
        {/* ========================================================= */}
        <section id="projects" className="py-20 sm:py-24 border-t border-[var(--border-subtle)] bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-14 space-y-3">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
                살롱 &amp; 온라인 클래스 프로그램
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                아지트에서 소수로 마주 앉는 오프라인 살롱부터, 전국 어디서나 참여할 수 있는 온라인 북클럽·리더 과정까지 취향에 맞게 선택해 보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 프로그램 1: 오프라인 아지트 독서 앙상블 */}
              <div className="p-8 rounded-3xl bg-[var(--bg-main)]/45 border border-[var(--border-subtle)] flex flex-col justify-between hover:border-[var(--primary)] hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">📖🎶</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--primary)] tracking-wider">
                      [오프라인 아지트] 4~6인 소수 정예
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">
                      독서 앙상블 (Reading Ensemble)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    아늑한 프라이빗 아지트에서 책을 읽고 마음에 남은 문장을 나눕니다. 문장의 쉼표마다 어쿠스틱 기타의 라이브 연주가 더해져 활자가 음악으로 스며드는 살롱입니다.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
                    <p>• <strong>정원:</strong> 4~6인 소수 정예</p>
                    <p>• <strong>진행:</strong> 문장 낭독 → 깊은 대화 → 기타 라이브</p>
                    <p>• <strong>포함:</strong> 큐레이션 티 &amp; 다과 제공</p>
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-[var(--primary-border)] text-xs text-[var(--text-main)] space-y-1.5">
                    <p className="flex items-start gap-2">
                      <span className="shrink-0">🗓️</span>
                      <span><strong>진행 요일·시간:</strong> 매주 수요일 저녁 7:30 / 토요일 오후 4:00</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="shrink-0">💳</span>
                      <span><strong>참가비:</strong> 월 4회 100,000원 / 1회 30,000원</span>
                    </p>
                  </div>
                  <InquiryTriggerButton
                    variant="secondary"
                    category="독서 앙상블 / 문화 프로그램 참여"
                    label="독서 앙상블 신청"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* 프로그램 2: 온라인 북클럽 & 독서 리더 과정 */}
              <div className="p-8 rounded-3xl bg-[var(--bg-main)]/45 border border-[var(--border-subtle)] flex flex-col justify-between hover:border-[var(--primary)] hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">💻📚</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--accent)] tracking-wider">
                      [온라인 ZOOM] 전국 실시간 연결
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">
                      온라인 북클럽 &amp; 독서 리더 과정
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    지역에 상관없이 온라인으로 만나는 깊이 있는 독서 토론, 출판·북 마케터의 모임 브랜딩 특강, 그리고 성인 독서지도사 자격 과정까지 체계적으로 운영합니다.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
                    <p>• <strong>방식:</strong> 실시간 ZOOM 화상 클래스</p>
                    <p>• <strong>내용:</strong> 주제 도서 토론 + 북 마케터 특강</p>
                    <p>• <strong>과정:</strong> 독서 모임 리더 · 자격증 대비반</p>
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-[var(--primary-border)] text-xs text-[var(--text-main)] space-y-1.5">
                    <p className="flex items-start gap-2">
                      <span className="shrink-0">🗓️</span>
                      <span><strong>진행 요일·시간:</strong> 매주 목요일 저녁 8:30 / 일요일 저녁 8:00</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="shrink-0">💳</span>
                      <span><strong>참가비:</strong> 월 4회 100,000원 / 1회 30,000원</span>
                    </p>
                  </div>
                  <InquiryTriggerButton
                    variant="secondary"
                    category="독서 앙상블 / 문화 프로그램 참여"
                    label="온라인 클래스 신청"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* 프로그램 3: 기타·우쿨렐레 & 무브먼트 살롱 */}
              <div className="p-8 rounded-3xl bg-[var(--bg-main)]/45 border border-[var(--border-subtle)] flex flex-col justify-between hover:border-[var(--primary)] hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">🎸🩰</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--primary)] tracking-wider">
                      [오프라인 아지트] 음악 &amp; 무브먼트
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">
                      우쿨렐레 · 포크 &amp; 무브먼트 살롱
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    어쿠스틱 기타·우쿨렐레로 좋아하는 곡을 연주하는 소규모 포크 살롱과, 발레 바(Barre) 스트레칭·셔플댄스로 몸의 감각을 깨우는 움직임 클래스를 운영합니다.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
                    <p>• <strong>대상:</strong> 입문자부터 경험자까지 누구나 환영</p>
                    <p>• <strong>구성:</strong> 코드 반주·합주 / 발레 바·셔플댄스</p>
                    <p>• <strong>지원:</strong> 연습용 기타·우쿨렐레 대여 가능</p>
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-[var(--primary-border)] text-xs text-[var(--text-main)] space-y-1.5">
                    <p className="flex items-start gap-2">
                      <span className="shrink-0">🗓️</span>
                      <span><strong>진행 요일·시간:</strong> 매주 화요일 저녁 7:30 / 토요일 오전 11:00</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="shrink-0">💳</span>
                      <span><strong>참가비:</strong> 월 4회 100,000원 / 1회 30,000원</span>
                    </p>
                  </div>
                  <InquiryTriggerButton
                    variant="secondary"
                    category="기타 레슨 / 스튜디오 문의"
                    label="살롱 클래스 문의"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. 도서관 · 기업 · 공간 출강 & 제휴 전용 섹션 (중단 핵심 위치) */}
        {/* ========================================================= */}
        <section
          id="b2b-section"
          className="scroll-mt-20 py-20 sm:py-28 border-t border-[var(--primary-dark)] bg-[var(--primary-dark)] text-white"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-14">
            {/* B2B 헤더 */}
            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs font-bold tracking-[0.16em] uppercase text-[var(--secondary)]">
                B2B &amp; Space Partnership
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-snug tracking-tight">
                도서관 · 기업 · 서점 맞춤형
                <br className="hidden sm:inline" /> 문화 프로그램 기획 및 출강
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                전문 강사진 섭외부터 커리큘럼 기획까지, 공간과 대상에 딱 맞는 독보적인 살롱 프로그램을 턴키로 제안합니다.
              </p>
            </div>

            {/* 4가지 대표 패키지 카드 (2x2 그리드) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "PACKAGE 01",
                  icon: "📖🎸",
                  title: "북 콘서트 & 어쿠스틱 살롱",
                  target: "도서관 · 문화공간 특화",
                  desc: "북 큐레이터의 책 해설과 기타 라이브 연주가 어우러진 도서관·문화공간 특화 프로그램",
                },
                {
                  num: "PACKAGE 02",
                  icon: "🩰🌿",
                  title: "책과 움직임의 테라피",
                  target: "기업 · 기관 힐링 워크숍",
                  desc: "독서 대화로 마음을 열고, 이완 발레·스트레칭으로 몸을 푸는 기업·기관 힐링 워크숍",
                },
                {
                  num: "PACKAGE 03",
                  icon: "🎶🧘",
                  title: "음악과 움직임 : 연주 감상과 스트레칭",
                  target: "오감 리프레시 클래스",
                  desc: "라이브 어쿠스틱 연주를 감상하며 호흡과 스트레칭으로 굳은 몸을 이완하는 오감 리프레시 클래스",
                },
                {
                  num: "PACKAGE 04",
                  icon: "🤝🎯",
                  title: "기업 복지 · 기관 동아리 정기 레슨",
                  target: "다회차(10~20회) 맞춤형 정기 출강",
                  desc: "기업 사내 동아리, 문화재단 생활예술 지원사업, 복지관 등을 위한 기타·발레·댄스·독서 다회차(10~20회) 맞춤형 정기 출강",
                },
              ].map((pkg) => (
                <div
                  key={pkg.title}
                  className="p-7 sm:p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xs space-y-4 hover:bg-white/15 hover:border-white/35 transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-widest text-[var(--secondary)]">
                      {pkg.num}
                    </span>
                    <span className="text-2xl">{pkg.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-white/80">
                      {pkg.target}
                    </p>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
                      {pkg.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 섹션 하단: 출강 · 제휴 빠른 문의 폼 */}
            <B2BInquiryForm />
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. 호스트 소개 & 아지트 위치 + 다가오는 프로그램 일정표 */}
        {/* ========================================================= */}
        <section id="host" className="py-20 sm:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-main)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
            {/* 호스트 소개 & 아지트 위치 */}
            <div>
              <div className="max-w-2xl mb-10 space-y-3">
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
                  호스트 소개 &amp; 아지트 안내
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  프라이빗 아지트에서 피어난 문화의 온기를 온라인과 세상으로 연결하는 JI.Stage 호스트와 공간을 소개합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* 좌측: 호스트 소개 */}
                <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between space-y-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[var(--border-subtle)] shadow-sm shrink-0 bg-[var(--bg-subtle)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/activity_learn.jpg"
                        alt="JI.Stage 호스트 JI 프로필"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[var(--accent)] tracking-wider uppercase">
                        Host &amp; Cultural Planner
                      </span>
                      <h3 className="font-serif-luxury text-2xl font-bold text-[var(--text-main)]">
                        호스트 JI
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[var(--primary)]">
                        기타리스트 · 무브먼트 가이드 · 문화 기획 스튜디오 운영
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="font-serif-luxury text-base sm:text-lg font-bold text-[var(--text-main)] leading-relaxed">
                      &ldquo;각자의 자리에서 빛나는 좋은 예술가·전문가들과 함께, 바쁜 일상 속 당신이 자기만의 리듬과 감각을 되찾는 무대를 만듭니다. 아지트 소모임부터 온라인 클래스, 기업·기관 출강까지 진심을 담아 기획합니다.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-loose">
                      기타 연주와 레슨, 성인 발레와 움직임, 그리고 책과 사람이 만나는 독서 앙상블을 꾸준히 기획해 왔습니다.
                      이제는 각 분야의 검증된 독서 지도자·북 큐레이터·연주자·댄스 강사진과 함께 아지트 살롱은 물론
                      온라인 클래스와 도서관·기업·서점 출강을 통해 더 많은 일상에 다정한 예술을 전하고 있습니다.
                    </p>
                  </div>
                </div>

                {/* 우측: 프라이빗 아지트 위치 & 이용 안내 */}
                <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between space-y-6 shadow-xs">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--primary)] tracking-wider uppercase">
                      Private Atelier &amp; Location
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[var(--text-main)]">
                      아지트 위치 및 이용 안내
                    </h3>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-[var(--text-muted)]">
                    <div className="p-4 rounded-2xl bg-[var(--bg-main)]/55 border border-[var(--border-subtle)] space-y-1">
                      <p className="font-bold text-[var(--text-main)]">📍 아지트 위치</p>
                      <p className="leading-relaxed">
                        경기도 광명시 도덕로 56 (지하철 7호선 광명사거리역 인근)
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[var(--bg-main)]/55 border border-[var(--border-subtle)] space-y-1">
                      <p className="font-bold text-[var(--text-main)]">🏡 공간 규모 및 운영 방식</p>
                      <p className="leading-relaxed">
                        프라이빗 문화 아지트 · 4~6인 소수 정예 사전 예약제 운영
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[var(--bg-main)]/55 border border-[var(--border-subtle)] space-y-1">
                      <p className="font-bold text-[var(--text-main)]">🕰️ 운영 시간</p>
                      <p className="leading-relaxed">
                        평일 11:00 – 21:00 / 주말 정기 살롱 및 출강·기획 미팅 운영
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 다가오는 프로그램 일정표 */}
            <div id="schedule" className="scroll-mt-24 rounded-3xl bg-white border border-[var(--border-subtle)] p-6 sm:p-10 shadow-sm">
              <div className="mb-6 space-y-1.5">
                <h3 className="font-serif-luxury text-2xl font-bold text-[var(--text-main)]">
                  다가오는 프로그램 일정
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  오프라인 아지트 모임과 온라인 ZOOM 클래스 일정을 한눈에 확인하고 신청하실 수 있습니다.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    mode: "[오프라인 아지트]",
                    category: "독서 앙상블 · 4~6인 소수 정예",
                    date: "11월 20일 (수)",
                    time: "저녁 7:30 – 9:30",
                    fee: "1회 30,000원 (월 4회 100,000원)",
                    title: "『채식주의자』 — 한강 작가 특집 북살롱",
                    desc: "노벨문학상 수상 기념 특별 큐레이션. 책의 여백에 어쿠스틱 기타 라이브 연주를 더합니다.",
                    isOnline: false,
                  },
                  {
                    mode: "[온라인 ZOOM]",
                    category: "온라인 북클럽 & 북 마케터 특강",
                    date: "11월 28일 (목)",
                    time: "저녁 8:30 – 10:00",
                    fee: "1회 30,000원 (월 4회 100,000원)",
                    title: "내 취향의 독서 모임을 브랜드로 만드는 법",
                    desc: "전국 어디서나 접속 가능한 실시간 온라인 ZOOM 세미나. 독서 리더·모임 운영 실전 노하우를 나눕니다.",
                    isOnline: true,
                  },
                  {
                    mode: "[오프라인 아지트]",
                    category: "우쿨렐레 · 포크 & 무브먼트 살롱",
                    date: "12월 7일 (토)",
                    time: "오전 11:00 – 12:30",
                    fee: "1회 30,000원 (월 4회 100,000원)",
                    title: "겨울 발레 바 스트레칭 & 어쿠스틱 원데이",
                    desc: "아늑한 아지트에서 몸의 긴장을 푸는 이완 발레 바 스트레칭과 따뜻한 어쿠스틱 리듬을 함께합니다.",
                    isOnline: false,
                  },
                  {
                    mode: "[오프라인 아지트]",
                    category: "살롱 콘서트",
                    date: "12월 27일 (금)",
                    time: "저녁 7:30 – 9:30",
                    fee: "1회 30,000원 (다과·음료 포함)",
                    title: "JI.Stage 겨울 하우스 콘서트",
                    desc: "한 해를 다정하게 마무리하는 소규모 살롱 콘서트. 어쿠스틱 기타와 이야기가 함께합니다.",
                    isOnline: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border ${
                      item.isOnline
                        ? "bg-[var(--accent-light)]/45 border-[var(--accent-border)]"
                        : "bg-[var(--primary-light)]/50 border-[var(--primary-border)]"
                    }`}
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                        <span
                          className={
                            item.isOnline
                              ? "text-[var(--accent)]"
                              : "text-[var(--primary)]"
                          }
                        >
                          {item.mode}
                        </span>
                        <span className="text-[var(--text-subtle)]">·</span>
                        <span className="text-[var(--text-muted)]">{item.category}</span>
                      </div>
                      <p className="font-serif-luxury text-base sm:text-lg font-bold text-[var(--text-main)]">
                        {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-semibold text-[var(--text-main)]">
                        <span>📅 {item.date}</span>
                        <span>⏰ {item.time}</span>
                        <span>💳 {item.fee}</span>
                      </div>
                    </div>
                    <InquiryTriggerButton
                      variant="secondary"
                      category="독서 앙상블 / 문화 프로그램 참여"
                      label="참여 신청"
                      className="shrink-0 self-start sm:self-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. ARCHIVE : 유튜브 & 네이버 블로그 아카이브 */}
        {/* ========================================================= */}
        <ArchiveSection />

        {/* ========================================================= */}
        {/* FINAL CALLOUT : 따뜻한 마무리 소통 배너 */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-[var(--bg-main)] to-[var(--bg-subtle)] border-t border-[var(--border-subtle)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
            <span className="text-[var(--accent)] text-2xl font-serif-luxury">✦</span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight leading-snug">
              아늑한 아지트에서, 그리고 당신의 공간에서
              <br />
              다정한 문화의 순간을 함께 만듭니다
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              개인 살롱·온라인 클래스 참여부터 도서관·기업·서점 출강 및 공간 제휴까지 언제든 편하게 문을 두드려주세요.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <InquiryTriggerButton
                variant="cta"
                category="독서 앙상블 / 문화 프로그램 참여"
                label="개인 프로그램 신청"
              />
              <a
                href="#b2b-inquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-all shadow-md"
              >
                <span>출강 · 공간 제휴 문의하기</span>
                <span>↑</span>
              </a>
            </div>
            <div className="pt-8 flex flex-col items-center gap-3">
              <span className="text-xs text-[var(--text-subtle)] font-medium">소셜 채널에서도 자주 만나요</span>
              <SocialLinks variant="banner" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <InquiryModal />
    </div>
  );
}
