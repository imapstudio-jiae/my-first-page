// 사이트 기본 정보 및 소셜 미디어 링크 설정
// 이곳에서 인스타그램, 유튜브, 네이버 블로그 주소와 스튜디오 링크를 손쉽게 수정하실 수 있습니다.

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  desc: string;
  isExternal?: boolean;
}

export const SITE_CONFIG = {
  name: "JI.Stage",
  brandTitle: "JI.Stage",
  tagline: "음악과 움직임을 통해 일상에 새로운 감각을 더합니다",
  description:
    "음악을 배우고, 몸을 움직이고, 생각을 나누는 문화 공간 지애(Jiae)의 JI.Stage입니다.",
  email: "jeje423914@gmail.com",
  phone: "010-0000-0000",
  location: "서울시",

  // 추후 서브도메인으로 연결할 IMAP STUDIO 링크 (필요 시 사용)
  imapStudioUrl: "https://imap.jistage.kr",

  // 외부 소셜 미디어 연결 링크
  social: {
    youtube: {
      name: "유튜브",
      url: "https://www.youtube.com/@imapstudio",
      handle: "@imapstudio",
      description: "연주 영상, 발레·댄스 기록, 일상 브이로그",
    },
    instagram: {
      name: "인스타그램",
      url: "https://www.instagram.com/jiaemuya",
      handle: "@jiaemuya",
      description: "일상, 발레·댄스 모먼트, 문화 모임 소식",
    },
    naverBlog: {
      name: "네이버 블로그",
      url: "https://blog.naver.com/imapstudio",
      handle: "imapstudio 블로그",
      description: "독서 앙상블 후기, 긴 호흡의 생각과 기록",
    },
  },

  // 메인 내비게이션 메뉴 (IMAP STUDIO 제외 후 3대 메뉴 구성)
  navItems: [
    { label: "ABOUT", href: "#about", desc: "소개 & 일상의 재미" },
    { label: "CULTURE & PROJECTS", href: "#projects", desc: "독서 앙상블 & 문화 기획" },
    { label: "ARCHIVE", href: "#archive", desc: "유튜브 영상 & 블로그 기록" },
  ] as NavItem[],
};
