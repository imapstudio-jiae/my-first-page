import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InquiryModal from "@/components/inquiry-modal";
import ArchiveSection from "@/components/archive-section";
import InquiryTriggerButton from "@/components/inquiry-trigger-button";
import SocialLinks from "@/components/social-links";
import ReservationPreviewCard from "@/components/reservation-preview-card";
import { SITE_CONFIG } from "@/data/site-config";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#C1CDD9] text-[#233330] relative overflow-hidden">
      <div className="app-background">
        <div className="pastel-glow glow-mint" />
        <div className="pastel-glow glow-pink" />
      </div>

      <Navbar />

      <main className="flex-1 relative z-10">
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="pt-10 pb-16 sm:pt-14 sm:pb-24">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
            <div className="space-y-1.5">
              <span className="inline-block font-serif-luxury text-xs sm:text-sm tracking-[0.22em] uppercase text-[#4A7C72] font-semibold">
                Private Music &amp; Culture Atelier
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-[0.02em] text-[#1A2825] leading-none">
                IMAP Studio
              </h1>
              <div className="brand-divider">
                <span className="divider-line" />
                <span className="divider-gem">✦</span>
                <span className="divider-line" />
              </div>
              <p className="text-sm sm:text-base text-[#5E736E] font-normal">
                음악을 배우고, 만들고, 기록하는 아늑한 개인 공간
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-[#E2ECE7] shadow-lg max-h-72 sm:max-h-84 bg-[#EDF3F0] group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imap_studio_hero.jpg"
                alt="IMAP Studio 스튜디오 전경"
                className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2825]/60 via-[#1A2825]/10 to-transparent flex flex-col justify-end p-5 sm:p-7 text-left text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-xs font-semibold w-fit mb-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#A7F3D0] shadow-[0_0_6px_#A7F3D0]" />
                  <span>IMAP Studio &amp; ji-stage</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-white/95">
                  기타 선율과 몸의 리듬, 그리고 책과 사람이 머무는 따뜻한 일상
                </p>
              </div>
            </div>

            <div className="pt-4">
              <ReservationPreviewCard />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-[#5E736E]">
              <span>소셜 채널 소식 연결:</span>
              <SocialLinks variant="header" />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1. ABOUT */}
        {/* ========================================================= */}
        <section id="about" className="py-20 sm:py-28 border-t border-[#E2ECE7] bg-white/80">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* 헤더 */}
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDF5F2] text-[#4A7C72] border border-[#D1E3DC]">
                <span className="text-[#D99B95]">✦</span>
                <span className="tracking-[0.16em] uppercase font-serif-luxury">About Jiae &amp; IMAP</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A2825] tracking-tight">
                일상의 재미를 만들고 나누는 공간
              </h2>
              <p className="text-sm sm:text-base text-[#5E736E] leading-relaxed">
                거창한 예술이 아니어도 괜찮습니다. 내 손끝에서 피어나는 따뜻한 기타 화음 하나,
                발레 바(Barre) 앞에서 곧게 세운 척추와 셔플댄스의 경쾌한 스텝,
                그리고 마음을 건네는 책 한 구절이 모여 우리의 하루를 다정하게 채웁니다.
              </p>
            </div>

            {/* 3가지 정체성 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-8 rounded-3xl bg-[#F7FAF8] border border-[#E2ECE7] space-y-4 hover:border-[#4A7C72]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#D1E3DC] flex items-center justify-center text-xl shadow-2xs">🎸</div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#4A7C72] tracking-[0.12em] uppercase font-serif-luxury">Main Identity · 본업</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">기타 레슨 &amp; 공연 기획</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                  IMAP 스튜디오에서 클래식, 어쿠스틱, 핑거스타일 기타를 가르칩니다. 혼자 연습하는 즐거움을 넘어 학생들이 무대 위에서 함께 소리를 모으는 정기 공연을 기획합니다.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#4A7C72]">#1:1레슨 #그룹앙상블 #정기학생공연</div>
              </div>

              <div className="p-8 rounded-3xl bg-[#F7FAF8] border border-[#E2ECE7] space-y-4 hover:border-[#D99B95]/60 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#F0D4D1] flex items-center justify-center text-xl shadow-2xs">🩰</div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#D99B95] tracking-[0.12em] uppercase font-serif-luxury">Movement Record · 신체</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">발레와 댄스, 몸의 기록</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                  발레 바 위에서 고요하게 호흡을 세우는 정적인 시간, 그리고 신나는 비트에 발을 맞추는 셔플댄스의 리듬. 음악을 손끝뿐 아니라 온몸으로 느끼는 몸의 감각을 기록합니다.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#D99B95]">#성인발레 #셔플댄스 #몸의감각</div>
              </div>

              <div className="p-8 rounded-3xl bg-[#F7FAF8] border border-[#E2ECE7] space-y-4 hover:border-[#4A7C72]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#D1E3DC] flex items-center justify-center text-xl shadow-2xs">📖</div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#4A7C72] tracking-[0.12em] uppercase font-serif-luxury">Culture Salon · 연결</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">책과 음악이 있는 문화 기획</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                  책 속 문장에 어쿠스틱 선율을 얹는 &apos;독서 앙상블&apos;부터, 움직임 워크숍과 소규모 살롱 콘서트까지. 공간과 사람이 다정하게 연결되는 프로그램을 만듭니다.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#4A7C72]">#독서앙상블 #문화살롱 #공간협업</div>
              </div>
            </div>

            {/* 지애 소개 스토리 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF1F0] text-[#D99B95] border border-[#F0D4D1]">
                  <span className="tracking-[0.16em] uppercase font-serif-luxury">Story of Jiae</span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A2825]">
                  음악과 몸, 그리고 이야기가<br />흐르는 삶을 삽니다
                </h3>
                <p className="text-sm text-[#5E736E] leading-loose">
                  어릴 때부터 소리에 이끌렸어요. 기타 한 대가 있으면 혼자서도, 둘이서도, 여럿이서도 온전한 세계를 만들 수 있다는 걸 배웠습니다.
                </p>
                <p className="text-sm text-[#5E736E] leading-loose">
                  지금은 IMAP 스튜디오에서 학생들과 함께 기타를 배우고 공연을 준비하면서, 한편으론 발레 바 앞에서 내 몸의 감각을 기록하고, 좋은 책과 음악을 함께 나누는 모임을 열어가고 있어요.
                </p>
                <p className="text-sm text-[#5E736E] leading-loose">
                  예술이 삶의 한복판에 자연스럽게 흐르는 것— 그게 제가 만들고 싶은 일상이고, 이 공간이 담고 싶은 이야기입니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🎸", label: "기타 강의 경력", value: "10년+" },
                  { emoji: "🎤", label: "학생 공연 기획", value: "20회+" },
                  { emoji: "🩰", label: "성인 발레 수련", value: "3년차" },
                  { emoji: "📚", label: "독서 앙상블 모임", value: "정기 운영" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white border border-[#E2ECE7] text-center space-y-2 hover:shadow-sm transition-all">
                    <span className="text-2xl">{stat.emoji}</span>
                    <p className="font-serif-luxury text-xl font-bold text-[#1A2825]">{stat.value}</p>
                    <p className="text-[11px] text-[#5E736E] leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 가치관 / 철학 */}
            <div className="rounded-3xl bg-[#EDF5F2] border border-[#D1E3DC] p-8 sm:p-12 mb-16">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <span className="text-[#4A7C72] font-serif-luxury text-2xl">✦</span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A2825]">
                  &ldquo;좋은 음악 한 소절이<br />누군가의 하루를 바꿀 수 있다고 믿습니다&rdquo;
                </h3>
                <p className="text-sm text-[#5E736E] leading-loose max-w-xl mx-auto">
                  거창하지 않아도 됩니다. 오늘 처음 코드를 짚은 손끝, 발레 바에서 처음 느끼는 중심, 책 속 한 문장에 고개를 끄덕이는 순간— 그 소소한 감각들이 모여 삶을 풍요롭게 합니다.
                  이 공간이 그 순간들의 다정한 기록이 되길 바랍니다.
                </p>
              </div>
            </div>

            {/* 타임라인: 지금까지의 발자국 */}
            <div className="mb-6">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1A2825] mb-8 text-center">지금까지의 발자국</h3>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-[#D1E3DC]" />
                {[
                  { year: "현재", title: "IMAP Studio 운영", desc: "기타 레슨, 공연 기획, 독서 앙상블, 무브먼트 클래스를 통합 운영 중" },
                  { year: "2023", title: "독서 앙상블 시작", desc: "책과 기타 라이브 연주를 결합한 소규모 살롱 모임을 정기적으로 운영 시작" },
                  { year: "2021", title: "성인 발레 수련 시작", desc: "음악과 몸의 연결에 깊이 빠져들며 발레 바와 셔플댄스를 병행 수련" },
                  { year: "2019", title: "IMAP Studio 설립", desc: "개인 음악 스튜디오를 열고 첫 학생들과 함께 기타 레슨을 시작" },
                  { year: "~2019", title: "기타 강의 시작", desc: "다양한 공간에서 기타를 가르치며 음악 교육의 즐거움을 발견" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-14 pb-8">
                    <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-[#4A7C72] border-2 border-white shadow-sm" />
                    <span className="text-[11px] font-bold text-[#4A7C72] tracking-wider uppercase font-serif-luxury">{item.year}</span>
                    <h4 className="font-serif-luxury text-base font-bold text-[#1A2825] mt-0.5">{item.title}</h4>
                    <p className="text-xs text-[#5E736E] leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. STUDIO */}
        {/* ========================================================= */}
        <section id="studio" className="py-20 sm:py-28 border-t border-[#E2ECE7] bg-[#C1CDD9]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* 헤더 */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDF5F2] text-[#4A7C72] border border-[#D1E3DC]">
                  <span className="text-[#D99B95]">✦</span>
                  <span className="tracking-[0.16em] uppercase font-serif-luxury">Studio &amp; Lessons</span>
                </div>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A2825] tracking-tight">
                  IMAP 스튜디오 &amp; 기타 레슨
                </h2>
                <p className="text-sm sm:text-base text-[#5E736E] max-w-xl leading-relaxed">
                  처음 악기를 잡는 설렘부터, 학생들과 함께 무대에 올라 박수를 나누는
                  합주의 기쁨까지. 누구나 편안하게 음악의 주인이 되는 따뜻한 아지트입니다.
                </p>
              </div>
              <InquiryTriggerButton
                variant="cta"
                category="기타 레슨 / 스튜디오 문의"
                label="레슨 상담 예약하기"
              />
            </div>

            {/* 스튜디오 소개 배너 */}
            <div className="rounded-3xl bg-white border border-[#E2ECE7] p-8 sm:p-10 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1A2825]">IMAP Studio란?</h3>
                <p className="text-sm text-[#5E736E] leading-loose">
                  IMAP 스튜디오는 단순한 연습 공간이 아닙니다. 음악을 처음 시작하는 분들이 기타와 친해지고, 실력자들이 더 깊이 들어갈 수 있도록— 각자의 속도에 맞춰 함께 성장하는 곳입니다.
                </p>
                <p className="text-sm text-[#5E736E] leading-loose">
                  아늑하고 따뜻한 분위기의 프라이빗 스튜디오에서 1:1 레슨부터 소규모 그룹, 합주 앙상블, 그리고 학생들의 정기 공연까지 다양한 방식으로 음악을 만납니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["방음 시설 완비", "전자 기타·어쿠스틱 구비", "악보 프린트 가능", "녹음 피드백 지원"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#EDF5F2] text-[#4A7C72] text-xs font-medium border border-[#D1E3DC]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🕐", title: "운영 시간", desc: "평일 오전 10시 ~ 저녁 8시\n주말 협의 후 조율" },
                  { icon: "📍", title: "위치", desc: "사전 문의 후\n상세 주소 안내" },
                  { icon: "🎸", title: "악기 대여", desc: "구비 악기 무료 사용\n첫 수업 시 악기 없어도 OK" },
                  { icon: "📅", title: "수업 방식", desc: "정기 레슨 / 원데이 클래스\n일정 조율 가능" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-[#F7FAF8] border border-[#E2ECE7] space-y-1.5">
                    <span className="text-lg">{item.icon}</span>
                    <p className="text-xs font-bold text-[#1A2825] font-serif-luxury">{item.title}</p>
                    <p className="text-[11px] text-[#5E736E] whitespace-pre-line leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3가지 레슨 프로그램 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* 1:1 정규 레슨 */}
              <div className="p-8 rounded-3xl bg-white border border-[#E2ECE7] flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-[#EDF5F2] text-[#4A7C72] flex items-center justify-center font-bold text-sm font-serif-luxury">01</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#F7FAF8] text-[#5E736E] border border-[#E2ECE7] font-medium">개인 맞춤 진도</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">1:1 정규 레슨</h3>
                  <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                    어쿠스틱, 클래식, 핑거스타일 등 개인의 취향과 목표곡에 맞춘 1:1 집중 레슨입니다. 올바른 소리 내기와 손 모양부터 차근차근 다듬어 나갑니다.
                  </p>
                  <ul className="text-xs text-[#5E736E] space-y-1.5 pt-2 border-t border-[#EDF3F0]">
                    <li>✓ 초보자 기본기 코칭 (코드 체인지, 스트로크)</li>
                    <li>✓ 나만의 완곡 1곡 완성 프로젝트</li>
                    <li>✓ 주 1회 60분 수업 (일정 조율 가능)</li>
                    <li>✓ 녹음 피드백 및 연습 가이드 제공</li>
                    <li>✓ 팝, 클래식, 재즈 등 장르 선택 가능</li>
                  </ul>
                  <div className="pt-3 p-4 rounded-2xl bg-[#F7FAF8] border border-[#E2ECE7]">
                    <p className="text-[11px] text-[#5E736E] leading-snug">
                      <strong className="text-[#4A7C72]">추천 대상:</strong> 기타를 처음 배우는 분, 독학 후 기초를 다시 다지고 싶은 분, 원하는 곡을 완성하고 싶은 분
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <InquiryTriggerButton
                    variant="secondary"
                    category="기타 레슨 / 스튜디오 문의"
                    label="1:1 레슨 문의"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* 그룹 레슨 */}
              <div className="p-8 rounded-3xl bg-white border border-[#E2ECE7] flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-[#FAF1F0] text-[#D99B95] flex items-center justify-center font-bold text-sm font-serif-luxury">02</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#F7FAF8] text-[#5E736E] border border-[#E2ECE7] font-medium">2~4인 소규모</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">그룹 레슨 &amp; 앙상블</h3>
                  <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                    친구, 지인, 혹은 새로운 음악 동료와 함께 기타를 배우고 화음을 맞춥니다. 멜로디와 반주 파트를 나누어 합주하는 특별한 즐거움을 누립니다.
                  </p>
                  <ul className="text-xs text-[#5E736E] space-y-1.5 pt-2 border-t border-[#EDF3F0]">
                    <li>✓ 2중주 및 파트별 화음 실습</li>
                    <li>✓ 합주를 통한 박자감 &amp; 앙상블 감각 습득</li>
                    <li>✓ 함께 배우며 나누는 다정한 동기부여</li>
                    <li>✓ 같은 레벨 매칭 또는 지인 그룹 구성</li>
                    <li>✓ 월 1회 미니 합주 발표 기회</li>
                  </ul>
                  <div className="pt-3 p-4 rounded-2xl bg-[#F7FAF8] border border-[#E2ECE7]">
                    <p className="text-[11px] text-[#5E736E] leading-snug">
                      <strong className="text-[#D99B95]">추천 대상:</strong> 친구와 함께 취미로 배우고 싶은 분, 이미 기타를 치지만 합주 경험이 없는 분
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <InquiryTriggerButton
                    variant="secondary"
                    category="기타 레슨 / 스튜디오 문의"
                    label="그룹 앙상블 문의"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* 학생 정기 공연 */}
              <div className="p-8 rounded-3xl bg-white border border-[#E2ECE7] flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-[#EDF5F2] text-[#4A7C72] flex items-center justify-center font-bold text-sm font-serif-luxury">03</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#F7FAF8] text-[#5E736E] border border-[#E2ECE7] font-medium">IMAP만의 무대</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">학생 정기 공연 프로젝트</h3>
                  <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                    배운 기타를 방 안에만 두지 않고, 따뜻한 조명 아래 무대에서 소중한 사람들과 나눕니다. 공연 기획자로서 학생들의 첫 무대를 정성껏 만듭니다.
                  </p>
                  <ul className="text-xs text-[#5E736E] space-y-1.5 pt-2 border-t border-[#EDF3F0]">
                    <li>✓ 연 1~2회 정기 하우스 콘서트 무대</li>
                    <li>✓ 솔로 연주 및 앙상블 합주 프로그램</li>
                    <li>✓ 공연 포스터 제작 및 연주 영상 기록</li>
                    <li>✓ 무대 의상 및 세트 리스트 함께 선정</li>
                    <li>✓ 공연 후 사진 및 영상 파일 제공</li>
                  </ul>
                  <div className="pt-3 p-4 rounded-2xl bg-[#F7FAF8] border border-[#E2ECE7]">
                    <p className="text-[11px] text-[#5E736E] leading-snug">
                      <strong className="text-[#4A7C72]">추천 대상:</strong> 언젠가 무대에 서보고 싶었던 분, 소중한 사람들에게 연주를 들려주고 싶은 분
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <InquiryTriggerButton
                    variant="secondary"
                    category="기타 레슨 / 스튜디오 문의"
                    label="공연 프로젝트 문의"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </div>

            {/* 레슨 진행 방식 흐름 */}
            <div className="rounded-3xl bg-white border border-[#E2ECE7] p-8 sm:p-10 mb-12">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825] mb-8 text-center">레슨은 이렇게 진행돼요</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { step: "01", icon: "💌", title: "상담 신청", desc: "경험 수준, 원하는 장르, 목표곡 등을 편하게 알려주세요" },
                  { step: "02", icon: "☕", title: "첫 만남", desc: "30분 무료 상담으로 서로를 알아가고 수업 방향을 잡아요" },
                  { step: "03", icon: "🎸", title: "정규 레슨", desc: "매주 1회, 개인 속도에 맞게 체계적으로 실력을 키워요" },
                  { step: "04", icon: "🎤", title: "무대 경험", desc: "준비가 되면 IMAP 하우스 콘서트 무대에 함께 올라요" },
                ].map((item) => (
                  <div key={item.step} className="text-center p-5 rounded-2xl bg-[#F7FAF8] border border-[#E2ECE7] space-y-2">
                    <span className="text-xs font-bold text-[#4A7C72] font-serif-luxury tracking-wider">STEP {item.step}</span>
                    <div className="text-2xl">{item.icon}</div>
                    <p className="font-serif-luxury text-sm font-bold text-[#1A2825]">{item.title}</p>
                    <p className="text-[11px] text-[#5E736E] leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 자주 묻는 질문 */}
            <div className="rounded-3xl bg-white border border-[#E2ECE7] p-8 sm:p-10 mb-12 space-y-5">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825] mb-2">자주 묻는 질문 FAQ</h3>
              {[
                { q: "Q. 악기가 없어도 레슨을 받을 수 있나요?", a: "네, 물론입니다! 스튜디오에 어쿠스틱·클래식 기타가 구비되어 있어 첫 수업은 악기 없이도 편하게 오실 수 있어요. 수업을 시작하신 후 악기 구입 시 추천 모델도 함께 안내해 드립니다." },
                { q: "Q. 완전 초보인데 따라갈 수 있을까요?", a: "걱정 마세요! IMAP 레슨의 절반은 생애 처음 기타를 잡은 분들이에요. 첫 화음을 짚는 날부터 차근차근 함께합니다." },
                { q: "Q. 수업 일정을 유연하게 바꿀 수 있나요?", a: "네, 개인 사정에 따라 시간 조율이 가능합니다. 단, 갑작스러운 당일 취소보다 하루 전 연락을 부탁드리고 있어요." },
                { q: "Q. 성인이어도 괜찮나요?", a: "물론입니다! 오히려 성인 분들이 더 집중적으로 성장하시는 경우가 많아요. 나이와 무관하게 음악은 언제나 시작할 수 있습니다." },
              ].map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F7FAF8] border border-[#E2ECE7] space-y-2">
                  <p className="text-sm font-bold text-[#1A2825]">{faq.q}</p>
                  <p className="text-xs text-[#5E736E] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* 방문 안내 배너 */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2ECE7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#4A7C72] font-semibold font-serif-luxury">Welcome to IMAP</span>
                <h4 className="text-base sm:text-lg font-bold text-[#1A2825] font-serif-luxury">스튜디오 방문 및 악기 상담을 원하시나요?</h4>
                <p className="text-xs sm:text-sm text-[#5E736E]">처음이라 악기가 없어도 괜찮습니다. 스튜디오에 구비된 악기로 편안하게 첫 소리를 체험해보세요.</p>
              </div>
              <InquiryTriggerButton
                variant="cta"
                category="기타 레슨 / 스튜디오 문의"
                label="방문 상담 예약"
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. CULTURE & PROJECTS */}
        {/* ========================================================= */}
        <section id="projects" className="py-20 sm:py-28 border-t border-[#E2ECE7] bg-white/80">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* 헤더 */}
            <div className="max-w-2xl mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDF5F2] text-[#4A7C72] border border-[#D1E3DC]">
                <span className="text-[#D99B95]">✦</span>
                <span className="tracking-[0.16em] uppercase font-serif-luxury">Culture &amp; Projects</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A2825] tracking-tight">
                문화 기획 &amp; 독서 앙상블
              </h2>
              <p className="text-sm sm:text-base text-[#5E736E] leading-relaxed">
                책과 음악, 몸과 공간이 자연스럽게 이어질 때 일상은 훨씬 풍요로워집니다.
                살롱 모임과 워크숍을 통해 감각이 살아나는 다정한 경험을 만듭니다.
              </p>
            </div>

            {/* 핵심 철학 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
              {[
                { icon: "📖", title: "읽는다", desc: "좋은 책 한 권이 새로운 세계로 이어지는 문을 엽니다" },
                { icon: "🎶", title: "연주한다", desc: "문장의 여백에 어쿠스틱 선율이 흘러 활자가 음악이 됩니다" },
                { icon: "🤝", title: "나눈다", desc: "같은 책을 읽은 사람들이 모여 각자의 시선을 다정하게 교환합니다" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-[#EDF5F2] border border-[#D1E3DC] text-center space-y-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-serif-luxury text-base font-bold text-[#1A2825]">{item.title}</p>
                  <p className="text-xs text-[#5E736E] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 3대 프로젝트 카드 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* 독서 앙상블 */}
              <div className="p-8 rounded-3xl bg-[#F7FAF8] border border-[#E2ECE7] flex flex-col justify-between hover:border-[#4A7C72]/50 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">📖🎶</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#4A7C72] tracking-[0.12em] uppercase font-serif-luxury">Signature Salon</span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">독서 앙상블 (Reading Ensemble)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                    한 권의 책을 읽고 마음에 남은 문장을 나눕니다. 문장의 쉼표마다 어쿠스틱 기타의 라이브 연주가 더해져, 활자가 음악으로 스며드는 특별한 북 살롱입니다.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E2ECE7] text-xs text-[#5E736E] space-y-1">
                    <p>• <strong>일정:</strong> 월 1~2회 정기 모임 (소규모 6~8인)</p>
                    <p>• <strong>장소:</strong> IMAP Studio &amp; 연계 문화 공간</p>
                    <p>• <strong>진행:</strong> 문장 낭독 → 나눔 → 기타 연주</p>
                    <p>• <strong>참가비:</strong> 1만원 내외 (음료 포함)</p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold text-[#4A7C72] uppercase tracking-wider font-serif-luxury">최근 읽은 책들</p>
                    {["『채식주의자』— 한강", "『달러구트 꿈 백화점』— 이미예", "『아몬드』— 손원평"].map((book) => (
                      <p key={book} className="text-[11px] text-[#5E736E]">📚 {book}</p>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <InquiryTriggerButton
                    variant="secondary"
                    category="독서 앙상블 / 문화 프로그램 참여"
                    label="독서 앙상블 신청"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* 무브먼트 & 댄스 살롱 */}
              <div className="p-8 rounded-3xl bg-[#F7FAF8] border border-[#E2ECE7] flex flex-col justify-between hover:border-[#D99B95]/60 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">🩰💫</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#D99B95] tracking-[0.12em] uppercase font-serif-luxury">Body &amp; Movement</span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">무브먼트 &amp; 댄스 살롱</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                    발레 바(Barre) 스트레칭으로 굳어있던 척추와 호흡을 정돈하고, 음악 비트에 맞춰 신나는 셔플댄스 기본기를 배우며 온몸의 리듬감을 깨웁니다.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E2ECE7] text-xs text-[#5E736E] space-y-1">
                    <p>• <strong>대상:</strong> 몸을 부드럽게 쓰고 리듬을 타고 싶은 누구나</p>
                    <p>• <strong>내용:</strong> 발레 스트레칭 + 셔플 스텝 + 자유 무브먼트</p>
                    <p>• <strong>특징:</strong> 부담 없이 즐기는 원데이 클래스</p>
                    <p>• <strong>복장:</strong> 편한 옷차림이면 OK</p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold text-[#D99B95] uppercase tracking-wider font-serif-luxury">클래스 구성</p>
                    {[
                      "워밍업 & 발레 바 스트레칭 (20분)",
                      "셔플댄스 기본 스텝 (30분)",
                      "음악에 맞춘 자유 무브먼트 (10분)",
                    ].map((c) => (
                      <p key={c} className="text-[11px] text-[#5E736E]">🩰 {c}</p>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <InquiryTriggerButton
                    variant="secondary"
                    category="독서 앙상블 / 문화 프로그램 참여"
                    label="무브먼트 살롱 문의"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* 살롱 콘서트 & 공간 협업 */}
              <div className="p-8 rounded-3xl bg-[#F7FAF8] border border-[#E2ECE7] flex flex-col justify-between hover:border-[#4A7C72]/50 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">☕🎪</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#4A7C72] tracking-[0.12em] uppercase font-serif-luxury">Collaboration</span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825]">살롱 콘서트 &amp; 공간 협업</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E736E] leading-relaxed">
                    스튜디오 공간을 기반으로 타 아티스트와의 콜라보 연주회, 소규모 강연, 공간 대관 및 복합 문화 기획을 함께 열어갑니다. 언제든 협업을 제안해주세요.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E2ECE7] text-xs text-[#5E736E] space-y-1">
                    <p>• <strong>형태:</strong> 하우스 콘서트, 아티스트 워크숍</p>
                    <p>• <strong>분야:</strong> 음악, 도서, 댄스, 라이프스타일</p>
                    <p>• <strong>수용 인원:</strong> 최대 20인</p>
                    <p>• <strong>문의:</strong> 공간 대관 및 협업 제안</p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold text-[#4A7C72] uppercase tracking-wider font-serif-luxury">협업 사례</p>
                    {[
                      "🎸 어쿠스틱 기타 × 첼로 2인 하우스 콘서트",
                      "📚 출판사 작가와의 북 토크 + 라이브",
                      "🌿 요가 & 명상 × 기타 사운드배스",
                    ].map((c) => (
                      <p key={c} className="text-[11px] text-[#5E736E]">{c}</p>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <InquiryTriggerButton
                    variant="secondary"
                    category="프로젝트 협업 및 대관 문의"
                    label="협업 및 대관 문의"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </div>

            {/* 다가오는 일정 */}
            <div className="rounded-3xl bg-white border border-[#E2ECE7] p-8 sm:p-10 mb-12">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1A2825] mb-6">다가오는 프로그램 일정</h3>
              <div className="space-y-4">
                {[
                  { badge: "독서 앙상블", date: "11월 셋째 주 토요일", title: "『채식주의자』 — 한강 작가 특집", desc: "노벨문학상 수상 기념 특별판. 소설 속 음악적 장면을 기타 라이브로 재현합니다.", color: "text-[#4A7C72]", bg: "bg-[#EDF5F2]", border: "border-[#D1E3DC]" },
                  { badge: "무브먼트", date: "12월 첫째 주 일요일", title: "겨울 발레 바 & 셔플 원데이 클래스", desc: "연말을 앞두고 굳어진 몸을 풀고 리듬을 되찾는 특별 원데이 클래스.", color: "text-[#D99B95]", bg: "bg-[#FAF1F0]", border: "border-[#F0D4D1]" },
                  { badge: "살롱 콘서트", date: "12월 넷째 주", title: "IMAP 겨울 하우스 콘서트", desc: "학생들과 함께하는 연말 정기 공연. 어쿠스틱 기타 앙상블과 소소한 크리스마스 무드.", color: "text-[#4A7C72]", bg: "bg-[#EDF5F2]", border: "border-[#D1E3DC]" },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl ${item.bg} border ${item.border}`}>
                    <div className="shrink-0">
                      <span className={`text-[11px] font-bold uppercase tracking-wider font-serif-luxury ${item.color}`}>{item.badge}</span>
                      <p className="text-[11px] text-[#5E736E] mt-0.5">{item.date}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-serif-luxury text-sm font-bold text-[#1A2825]">{item.title}</p>
                      <p className="text-[11px] text-[#5E736E] leading-snug mt-1">{item.desc}</p>
                    </div>
                    <InquiryTriggerButton
                      variant="secondary"
                      category="독서 앙상블 / 문화 프로그램 참여"
                      label="신청"
                      className="shrink-0"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA 배너 */}
            <div className="text-center p-8 sm:p-10 rounded-3xl bg-white border border-[#E2ECE7] shadow-sm space-y-4">
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#1A2825]">새로운 문화 모임과 협업에 참여하고 싶으신가요?</h3>
              <p className="text-xs sm:text-sm text-[#5E736E] max-w-lg mx-auto leading-relaxed">
                독서 앙상블 참여 신청, 워크숍 일정 안내 요청, 혹은 함께 만들고 싶은 프로그램 아이디어가 있다면 언제든 자유롭게 메시지를 보내주세요.
              </p>
              <InquiryTriggerButton
                variant="cta"
                category="독서 앙상블 / 문화 프로그램 참여"
                label="문화 프로그램 참여 신청하기"
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. ARCHIVE */}
        {/* ========================================================= */}
        <ArchiveSection />

        {/* ========================================================= */}
        {/* FINAL CALLOUT */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-[#C1CDD9] to-[#B3BFCC] border-t border-[#E2ECE7]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
            <span className="text-[#D99B95] text-2xl font-serif-luxury">✦</span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#1A2825] tracking-tight">
              당신의 일상에 음악과 움직임,
              <br />
              다정한 이야기가 머물 수 있도록
            </h2>
            <p className="text-sm sm:text-base text-[#5E736E] max-w-xl mx-auto leading-relaxed">
              기타를 배우고 싶으실 때, 몸의 감각을 깨우고 싶으실 때, 혹은 좋은 책과 선율을 함께 나누고 싶을 때 언제든 편안하게 문을 두드려주세요.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <InquiryTriggerButton
                variant="cta"
                category="기타 레슨 / 스튜디오 문의"
                label="레슨 &amp; 스튜디오 상담 예약"
              />
              <InquiryTriggerButton
                variant="secondary"
                category="독서 앙상블 / 문화 프로그램 참여"
                label="독서 앙상블 참여 신청"
              />
            </div>
            <div className="pt-8 flex flex-col items-center gap-3">
              <span className="text-xs text-[#8FA39E]">소셜 채널에서도 자주 만나요</span>
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
