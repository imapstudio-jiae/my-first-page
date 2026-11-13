import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InquiryModal from "@/components/inquiry-modal";
import ArchiveSection from "@/components/archive-section";
import InquiryTriggerButton from "@/components/inquiry-trigger-button";
import SocialLinks from "@/components/social-links";
import { SITE_CONFIG } from "@/data/site-config";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] relative overflow-hidden">
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* ========================================================= */}
        {/* HERO SECTION : JI.Stage 첫 화면 (믿음직하고 세련된 아틀리에) */}
        {/* ========================================================= */}
        <section className="pt-6 pb-12 sm:pt-10 sm:pb-16">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-3.5">
            {/* 상단 서브 라벨 (시그니처 포인트 로고 스타일) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-xs text-[var(--primary)] border border-[var(--border-subtle)] shadow-2xs">
              <span className="font-serif-luxury font-bold tracking-tight text-[var(--text-main)]">
                JI<span className="text-[var(--accent)] font-black">.</span>Stage
              </span>
              <span className="text-[var(--border-strong)]">·</span>
              <span className="tracking-[0.18em] uppercase font-serif-luxury text-[11px] text-[var(--primary)]">
                Culture &amp; Movement
              </span>
            </div>

            {/* 메인 카피: 명확하고 시적인 문구 */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[var(--text-main)] leading-[1.2] max-w-3xl mx-auto">
              음악을 배우고, 몸을 움직이고,<br className="hidden sm:inline" /> 생각을 나누는 공간
            </h1>

            {/* 서브 카피 */}
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal max-w-xl mx-auto leading-relaxed">
              음악과 움직임을 통해 일상에 새로운 감각을 더합니다.
            </p>

            {/* 3초 안에 직관적으로 파악되는 3대 핵심 활동 태그 */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 pb-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-white border border-[var(--border-subtle)] text-[var(--text-main)] shadow-2xs">
                <span>🎸</span> <span>어쿠스틱 &amp; 클래식 기타</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-white border border-[var(--border-subtle)] text-[var(--text-main)] shadow-2xs">
                <span>🩰</span> <span>발레 바 &amp; 무브먼트</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-white border border-[var(--border-subtle)] text-[var(--text-main)] shadow-2xs">
                <span>📖</span> <span>책과 음악의 독서 앙상블</span>
              </span>
            </div>

            {/* 메인 이미지: 제목과 간격을 줄이고 음악과 움직임의 여백을 담은 감각적 이미지 */}
            <div className="!mt-4 relative rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-lg max-h-72 sm:max-h-84 bg-[var(--bg-subtle)] group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jistage_hero.jpg"
                alt="JI.Stage 아틀리에 전경 - 음악과 움직임이 머무는 공간"
                className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-main)]/70 via-[var(--text-main)]/15 to-transparent flex flex-col justify-end p-5 sm:p-7 text-left text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-xs font-semibold w-fit mb-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#A7F3D0] shadow-[0_0_6px_#A7F3D0]" />
                  <span>
                    JI<span className="text-[var(--accent)] font-black">.</span>Stage 아틀리에
                  </span>
                </div>
                <p className="text-sm sm:text-base font-medium text-white/95">
                  음악과 움직임을 통해 일상에 새로운 감각을 더합니다.
                </p>
              </div>
            </div>

            {/* 탐색 중심 안내 & 참여 신청 버튼 */}
            <div className="!mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer"
              >
                <span>프로그램 둘러보기</span>
                <span className="text-[var(--accent)]">↓</span>
              </a>
              <InquiryTriggerButton
                variant="secondary"
                category="독서 앙상블 / 문화 프로그램 참여"
                label="참여 신청하기"
                className="!py-2.5 !px-5 !rounded-full"
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1. ABOUT : 일상의 재미를 만들고 나누는 공간 */}
        {/* ========================================================= */}
        <section id="about" className="py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-main)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* 헤더 */}
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[var(--primary)] border border-[var(--border-subtle)] shadow-2xs">
                <span className="text-[var(--accent)] font-bold">✦</span>
                <span className="tracking-[0.16em] uppercase font-serif-luxury font-bold">About Jiae &amp; JI.Stage</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
                일상의 재미를 만들고 나누는 공간
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                내 손끝에서 만들어지는 아름다운 소리,
                발레 바(Barre) 앞에서 곧게 세운 척추와 셔플댄스의 경쾌한 스텝,
                그리고 마음을 건네는 책 한 구절이 모여 우리의 하루를 다정하게 채웁니다.
              </p>
            </div>

            {/* 3가지 정체성 카드 (선명한 화이트 카드 & 진한 텍스트 대비) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] space-y-4 hover:border-[var(--accent)] hover:shadow-xl transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary-light)] border border-[var(--primary-border)] flex items-center justify-center text-xl shadow-2xs">🎸</div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[var(--accent)] tracking-[0.14em] uppercase font-serif-luxury">Music &amp; Acoustic · 음악</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">기타 연주 &amp; 공연 기획</h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  클래식, 어쿠스틱, 핑거스타일 기타를 함께 나누고 가르칩니다. 혼자 연습하는 즐거움을 넘어 무대 위에서 소리를 모으는 정기 공연을 기획합니다.
                </p>
                <div className="pt-2 text-xs font-bold text-[var(--accent)]">#어쿠스틱 #앙상블합주 #하우스콘서트</div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] space-y-4 hover:border-[var(--accent)] hover:shadow-xl transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] border border-[var(--accent-border)] flex items-center justify-center text-xl shadow-2xs">🩰</div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[var(--accent)] tracking-[0.14em] uppercase font-serif-luxury">Movement Record · 신체</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">발레와 댄스, 몸의 기록</h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  발레 바 위에서 고요하게 호흡을 세우는 정적인 시간, 그리고 신나는 비트에 발을 맞추는 셔플댄스의 리듬. 음악을 온몸으로 느끼는 감각을 기록합니다.
                </p>
                <div className="pt-2 text-xs font-bold text-[var(--accent)]">#성인발레 #셔플댄스 #몸의감각</div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] space-y-4 hover:border-[var(--accent)] hover:shadow-xl transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary-light)] border border-[var(--primary-border)] flex items-center justify-center text-xl shadow-2xs">📖</div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-[var(--accent)] tracking-[0.14em] uppercase font-serif-luxury">Culture Salon · 연결</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">책과 음악이 있는 문화 기획</h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  책 속 문장에 어쿠스틱 선율을 얹는 &apos;독서 앙상블&apos;부터, 움직임 워크숍과 소규모 살롱 콘서트까지. 공간과 사람이 다정하게 연결되는 프로그램을 만듭니다.
                </p>
                <div className="pt-2 text-xs font-bold text-[var(--accent)]">#독서앙상블 #문화살롱 #공간협업</div>
              </div>
            </div>

            {/* 지애 소개 스토리 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent-border)]">
                  <span className="tracking-[0.16em] uppercase font-serif-luxury">Story of Jiae</span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                  음악과 몸, 그리고 이야기가<br />흐르는 삶을 삽니다
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-loose">
                  어릴 때부터 소리에 이끌렸어요. 기타 한 대가 있으면 혼자서도, 둘이서도, 여럿이서도 온전한 세계를 만들 수 있다는 걸 배웠습니다.
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-loose">
                  공간 안에서 음악을 나누고 사람들과 함께 무대를 준비하면서, 한편으론 발레 바 앞에서 내 몸의 감각을 기록하고, 좋은 책과 음악을 함께 나누는 살롱을 열어가고 있어요.
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-loose">
                  예술이 삶의 한복판에 자연스럽게 흐르는 것— 그게 제가 만들고 싶은 일상이고, 이 공간이 담고 싶은 이야기입니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🎸", label: "기타 연주 & 강의", value: "[  ]년" },
                  { emoji: "🎤", label: "공연 & 살롱 기획", value: "[  ]회" },
                  { emoji: "🩰", label: "성인 발레 & 댄스", value: "[  ]년차" },
                  { emoji: "📚", label: "독서 앙상블 살롱", value: "정기 운영" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] text-center space-y-2 hover:border-[var(--accent)] hover:shadow-md transition-all shadow-2xs">
                    <span className="text-2xl">{stat.emoji}</span>
                    <p className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">{stat.value}</p>
                    <p className="text-[11px] text-[var(--text-muted)] font-medium leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 가치관 / 철학 : 묵직하고 믿음직한 딥블루 솔리드 섹션 (약간 진한색 사용) */}
            <div className="rounded-3xl bg-[var(--primary)] text-white border border-[var(--primary-dark)] p-8 sm:p-14 mb-16 shadow-xl relative overflow-hidden">
              <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
                <span className="text-[var(--accent-vibrant)] font-serif-luxury text-3xl">✦</span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                  &ldquo;좋은 음악 한 소절과 따뜻한 문장이<br />누군가의 하루를 바꿀 수 있다고 믿습니다&rdquo;
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-loose max-w-xl mx-auto">
                  거창하지 않아도 됩니다. 오늘 처음 코드를 짚은 손끝, 발레 바에서 처음 느끼는 중심, 책 속 한 문장에 고개를 끄덕이는 순간— 그 소소한 감각들이 모여 삶을 풍요롭게 합니다.
                  JI.Stage가 그 순간들의 다정한 기록이 되길 바랍니다.
                </p>
              </div>
            </div>

            {/* 타임라인: 지금까지의 발자국 */}
            <div className="mb-6">
              <h3 className="font-serif-luxury text-2xl font-bold text-[var(--text-main)] mb-8 text-center">지금까지의 발자국</h3>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-[var(--border-strong)]" />
                {[
                  { year: "현재", title: "JI.Stage 아틀리에 운영", desc: "독서 앙상블, 무브먼트 클래스, 문화 살롱 및 협업 프로그램을 기획·운영 중" },
                  { year: "[    ]", title: "독서 앙상블 살롱 런칭", desc: "책과 기타 라이브 연주를 결합한 소규모 북 살롱 모임을 정기적으로 개최" },
                  { year: "[    ]", title: "성인 발레 & 신체 리듬 수련", desc: "음악과 몸의 연결에 집중하며 발레 바 스트레칭과 셔플댄스를 병행 수련" },
                  { year: "[    ]", title: "음악 스튜디오 아지트 오픈", desc: "개인 음악 아틀리에를 열고 첫 동료들과 함께 소규모 공연을 시작" },
                  { year: "[    ]", title: "기타 강의 및 공연 활동", desc: "다양한 문화 공간에서 연주와 교육을 병행하며 소통의 기쁨을 체감" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-14 pb-8">
                    <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-[var(--primary)] border-2 border-white shadow-sm" />
                    <span className="text-[11px] font-bold text-[var(--primary)] tracking-wider uppercase font-serif-luxury">{item.year}</span>
                    <h4 className="font-serif-luxury text-base font-bold text-[var(--text-main)] mt-0.5">{item.title}</h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CULTURE & PROJECTS : 독서 앙상블 + 무브먼트 + 모임 신청 */}
        {/* ========================================================= */}
        <section id="projects" className="py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-main)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* 헤더 */}
            <div className="max-w-2xl mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--primary-border)]">
                <span className="text-[var(--accent)]">✦</span>
                <span className="tracking-[0.16em] uppercase font-serif-luxury">Culture &amp; Projects</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
                문화 기획 &amp; 독서 앙상블
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
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
                <div key={item.title} className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] text-center space-y-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-serif-luxury text-base font-bold text-[var(--text-main)]">{item.title}</p>
                  <p className="text-xs text-[var(--text-muted)] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 3대 프로젝트 카드 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* 독서 앙상블 */}
              <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between hover:border-[var(--accent)]/60 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">📖🎶</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--accent)] tracking-[0.12em] uppercase font-serif-luxury">Signature Salon</span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">독서 앙상블 (Reading Ensemble)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    한 권의 책을 읽고 마음에 남은 문장을 나눕니다. 문장의 쉼표마다 어쿠스틱 기타의 라이브 연주가 더해져, 활자가 음악으로 스며드는 특별한 북 살롱입니다.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
                    <p>• <strong>일정:</strong> 월 1~2회 정기 모임 (소규모 6~8인)</p>
                    <p>• <strong>장소:</strong> JI.Stage 아틀리에 &amp; 연계 문화 공간</p>
                    <p>• <strong>진행:</strong> 문장 낭독 → 나눔 → 기타 연주</p>
                    <p>• <strong>참가비:</strong> 1만원 내외 (음료 포함)</p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider font-serif-luxury">최근 읽은 책들</p>
                    {["『채식주의자』— 한강", "『달러구트 꿈 백화점』— 이미예", "『아몬드』— 손원평"].map((book) => (
                      <p key={book} className="text-[11px] text-[var(--text-muted)]">📚 {book}</p>
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
              <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between hover:border-[var(--accent)]/60 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">🩰💫</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--accent)] tracking-[0.12em] uppercase font-serif-luxury">Body &amp; Movement</span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">무브먼트 &amp; 댄스 살롱</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    발레 바(Barre) 스트레칭으로 굳어있던 척추와 호흡을 정돈하고, 음악 비트에 맞춰 신나는 셔플댄스 기본기를 배우며 온몸의 리듬감을 깨웁니다.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
                    <p>• <strong>대상:</strong> 몸을 부드럽게 쓰고 리듬을 타고 싶은 누구나</p>
                    <p>• <strong>내용:</strong> 발레 스트레칭 + 셔플 스텝 + 자유 무브먼트</p>
                    <p>• <strong>특징:</strong> 부담 없이 즐기는 원데이 클래스</p>
                    <p>• <strong>복장:</strong> 편한 옷차림이면 OK</p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider font-serif-luxury">클래스 구성</p>
                    {[
                      "워밍업 & 발레 바 스트레칭 (20분)",
                      "셔플댄스 기본 스텝 (30분)",
                      "음악에 맞춘 자유 무브먼트 (10분)",
                    ].map((c) => (
                      <p key={c} className="text-[11px] text-[var(--text-muted)]">🩰 {c}</p>
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
              <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between hover:border-[var(--accent)]/60 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <span className="text-2xl">☕🎪</span>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--accent)] tracking-[0.12em] uppercase font-serif-luxury">Collaboration</span>
                    <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)]">살롱 콘서트 &amp; 공간 협업</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    아틀리에 공간을 기반으로 타 아티스트와의 콜라보 연주회, 소규모 강연, 공간 대관 및 복합 문화 기획을 함께 열어갑니다. 언제든 협업을 제안해주세요.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
                    <p>• <strong>형태:</strong> 하우스 콘서트, 아티스트 워크숍</p>
                    <p>• <strong>분야:</strong> 음악, 도서, 댄스, 라이프스타일</p>
                    <p>• <strong>수용 인원:</strong> 최대 20인</p>
                    <p>• <strong>문의:</strong> 공간 대관 및 협업 제안</p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider font-serif-luxury">협업 사례</p>
                    {[
                      "🎸 어쿠스틱 기타 × 첼로 2인 하우스 콘서트",
                      "📚 출판사 작가와의 북 토크 + 라이브",
                      "🌿 요가 & 명상 × 기타 사운드배스",
                    ].map((c) => (
                      <p key={c} className="text-[11px] text-[var(--text-muted)]">{c}</p>
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
            <div className="rounded-3xl bg-white border border-[var(--border-subtle)] p-8 sm:p-10 mb-12">
              <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-main)] mb-6">다가오는 프로그램 일정</h3>
              <div className="space-y-4">
                {[
                  { badge: "독서 앙상블", date: "11월 셋째 주 토요일", title: "『채식주의자』 — 한강 작가 특집", desc: "노벨문학상 수상 기념 특별판. 소설 속 음악적 장면을 기타 라이브로 재현합니다.", color: "text-[var(--primary)]", bg: "bg-[var(--primary-light)]", border: "border-[var(--primary-border)]" },
                  { badge: "무브먼트", date: "12월 첫째 주 일요일", title: "겨울 발레 바 & 셔플 원데이 클래스", desc: "연말을 앞두고 굳어진 몸을 풀고 리듬을 되찾는 특별 원데이 클래스.", color: "text-[var(--accent)]", bg: "bg-[var(--accent-light)]", border: "border-[var(--accent-border)]" },
                  { badge: "살롱 콘서트", date: "12월 넷째 주", title: "JI.Stage 겨울 하우스 콘서트", desc: "다정한 사람들과 함께하는 연말 살롱 콘서트. 어쿠스틱 선율과 소소한 크리스마스 무드.", color: "text-[var(--primary)]", bg: "bg-[var(--primary-light)]", border: "border-[var(--primary-border)]" },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl ${item.bg} border ${item.border}`}>
                    <div className="shrink-0">
                      <span className={`text-[11px] font-bold uppercase tracking-wider font-serif-luxury ${item.color}`}>{item.badge}</span>
                      <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{item.date}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-serif-luxury text-sm font-bold text-[var(--text-main)]">{item.title}</p>
                      <p className="text-[11px] text-[var(--text-muted)] leading-snug mt-1">{item.desc}</p>
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

            {/* CTA 배너 : 짙은 딥블루 솔리드 + 선명한 크림슨 버튼 포인트 */}
            <div className="text-center p-8 sm:p-12 rounded-3xl bg-[var(--primary)] text-white border border-[var(--primary-dark)] shadow-xl space-y-4">
              <span className="text-[var(--accent-vibrant)] text-2xl font-serif-luxury">✦</span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">새로운 문화 모임과 협업에 참여하고 싶으신가요?</h3>
              <p className="text-xs sm:text-sm text-white/90 max-w-lg mx-auto leading-relaxed">
                독서 앙상블 참여 신청, 워크숍 일정 안내 요청, 혹은 함께 만들고 싶은 프로그램 아이디어가 있다면 언제든 자유롭게 메시지를 보내주세요.
              </p>
              <div className="pt-2">
                <InquiryTriggerButton
                  variant="cta"
                  category="독서 앙상블 / 문화 프로그램 참여"
                  label="문화 프로그램 참여 신청하기"
                  className="!bg-[var(--accent-vibrant)] hover:!bg-[var(--accent)] text-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. ARCHIVE : 유튜브 & 네이버 블로그 아카이브 */}
        {/* ========================================================= */}
        <ArchiveSection />

        {/* ========================================================= */}
        {/* FINAL CALLOUT : 따뜻한 마무리 소통 배너 */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-[var(--bg-main)] to-[var(--bg-subtle)] border-t border-[var(--border-subtle)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
            <span className="text-[var(--accent)] text-2xl font-serif-luxury">✦</span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
              당신의 일상에 음악과 움직임,
              <br />
              다정한 이야기가 머물 수 있도록
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              몸의 감각을 깨우고 싶으실 때, 혹은 좋은 책과 선율을 함께 나누고 싶을 때 언제든 편안하게 문을 두드려주세요.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <InquiryTriggerButton
                variant="cta"
                category="독서 앙상블 / 문화 프로그램 참여"
                label="문화 프로그램 참여 신청"
              />
              <InquiryTriggerButton
                variant="secondary"
                category="프로젝트 협업 및 대관 문의"
                label="프로젝트 협업 &amp; 대관 문의"
              />
            </div>
            <div className="pt-8 flex flex-col items-center gap-3">
              <span className="text-xs text-[var(--text-subtle)]">소셜 채널에서도 자주 만나요</span>
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
