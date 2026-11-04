// 사이트 기본 정보 및 소셜 미디어 링크 설정
// 이곳에서 인스타그램, 유튜브, 네이버 블로그 주소와 스튜디오 링크를 손쉽게 수정하실 수 있습니다.

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  description: string;
}

export const SITE_CONFIG = {
  name: "ji-stage",
  brandTitle: "IMAP Studio",
  tagline: "음악과 몸의 리듬, 책과 일상이 머무는 아늑한 아지트",
  description:
    "기타 레슨과 학생 공연 기획, 발레와 댄스의 몸 기록, 책과 음악이 흐르는 문화 프로그램을 엮어가는 지애(Jiae)의 공간입니다.",
  email: "jeje423914@gmail.com",
  phone: "010-0000-0000",
  location: "서울시 (IMAP Studio)",

  // IMAP STUDIO 예약/상세 사이트 링크 (새 탭으로 열기)
  imapStudioUrl: "https://res-eight-drab.vercel.app",

  // 외부 소셜 미디어 연결 링크
  social: {
    youtube: {
      name: "유튜브",
      url: "https://www.youtube.com/@ji-stage",
      handle: "@ji-stage",
      description: "기타 연주, 학생 공연 영상, 연습 기록",
    },
    instagram: {
      name: "인스타그램",
      url: "https://www.instagram.com/ji_stage",
      handle: "@ji_stage",
      description: "스튜디오 일상, 발레·댄스 모먼트, 문화 모임 소식",
    },
    naverBlog: {
      name: "네이버 블로그",
      url: "https://blog.naver.com/ji-stage",
      handle: "ji-stage 블로그",
      description: "자세한 레슨 안내, 독서 앙상블 후기, 긴 호흡의 글",
    },
  },

  // 메인 내비게이션 메뉴 (영문 대문자 톤앤매너)
  navItems: [
    { label: "ABOUT", href: "#about", desc: "소개 & 일상의 재미" },
    {
      label: "IMAP STUDIO",
      href: "https://res-eight-drab.vercel.app",
      desc: "스튜디오 & 레슨 상담",
      isExternal: true,
    },
    { label: "CULTURE & PROJECTS", href: "#projects", desc: "독서 앙상블 & 문화 기획" },
    { label: "ARCHIVE", href: "#archive", desc: "유튜브 영상 & 블로그 기록" },
  ],
};
