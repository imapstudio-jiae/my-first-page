// 아카이브(ARCHIVE) 데이터: 유튜브 영상 및 네이버 블로그 글
// 새로운 영상이나 블로그 글을 올리실 때 아래 배열 맨 위에 새 항목을 복사해 넣으시면 됩니다.
// 유튜브 영상은 youtubeId만 넣으시면 썸네일과 영상 재생 팝업이 자동으로 지원됩니다!

export interface ArchiveItem {
  id: string;
  type: "youtube" | "blog";
  title: string;
  date: string;
  description: string; // 짧은 소개말
  tags: string[]; // 태그
  thumbnail?: string; // 지정 썸네일 이미지 (없으면 유튜브 기본 썸네일 사용)
  youtubeId?: string; // 유튜브 영상 ID (예: https://youtu.be/abc123xyz -> 'abc123xyz')
  youtubeUrl?: string; // 유튜브 직접 이동 링크
  blogUrl?: string; // 네이버 블로그 글 링크
}

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "arch-0",
    type: "youtube",
    title: "안개(정훈희) - 연주 김지애",
    date: "2026.11",
    description:
      "기타의 섬세한 울림으로 연주한 정훈희의 '안개'. 아틀리에의 고요하고 깊은 정서를 담은 기타 연주 영상입니다.",
    tags: ["#기타연주", "#안개", "#어쿠스틱기타", "#IMAP"],
    youtubeId: "uyb5qDX3Wkk",
    youtubeUrl: "https://youtu.be/uyb5qDX3Wkk",
  },
  {
    id: "arch-0b",
    type: "youtube",
    title: "봄날은 간다ㅣ백설희ㅣ기타솔로ㅣ편곡 연주 김인웅",
    date: "2026.11",
    description:
      "기타 솔로 편곡으로 깊이 있게 풀어낸 '봄날은 간다'. 서정적인 멜로디와 섬세한 기타 울림을 감상해 보세요.",
    tags: ["#기타솔로", "#봄날은간다", "#핑거스타일", "#IMAP"],
    youtubeId: "pn2bCylCZrM",
    youtubeUrl: "https://youtu.be/pn2bCylCZrM",
  },
  {
    id: "arch-0c",
    type: "youtube",
    title: "목포의 눈물",
    date: "2026.11",
    description:
      "기타 선율로 담아낸 깊은 정서, '목포의 눈물' 연주 영상입니다.",
    tags: ["#기타연주", "#목포의눈물", "#어쿠스틱기타", "#IMAP"],
    youtubeId: "Kn_YjWzjWxo",
    youtubeUrl: "https://youtu.be/Kn_YjWzjWxo",
  },
  {
    id: "arch-0d",
    type: "youtube",
    title: "사랑은 늘 도망가ㅣ이문세ㅣ기타듀엣ㅣ편곡 연주 김인웅 ✕ 김지애",
    date: "2026.11",
    description:
      "두 대의 기타가 어우러져 더욱 풍부하고 따뜻한 하모니를 들려주는 '사랑은 늘 도망가' 기타 듀엣 연주입니다.",
    tags: ["#기타듀엣", "#사랑은늘도망가", "#어쿠스틱기타", "#IMAP"],
    youtubeId: "nJacJYNF-Z0",
    youtubeUrl: "https://youtu.be/nJacJYNF-Z0",
  },
  {
    id: "arch-0e",
    type: "youtube",
    title: "웰컴투더쇼(Day6 데이식스) 초보를 위한 기타5중주&보컬 편곡 TAB",
    date: "2026.11",
    description:
      "기타 입문자도 함께 즐길 수 있도록 편곡한 DAY6 'Welcome to the Show' 기타 5중주 & 보컬 앙상블 연주 영상입니다.",
    tags: ["#기타앙상블", "#데이식스", "#웰컴투더쇼", "#IMAP"],
    youtubeId: "0zbTKyfhN-o",
    youtubeUrl: "https://youtu.be/0zbTKyfhN-o",
  },
  {
    id: "arch-0f",
    type: "youtube",
    title: "백만송이 장미ㅣ심수봉ㅣ편곡 연주 김인웅ㅣMillion RosesㅣBaekManSongi JangMiㅣSim Su BongㅣGuitar solo IWcoverㅣarr. IW",
    date: "2026.11",
    description: "심수봉의 '백만송이 장미'를 기타 솔로로 편곡해 연주한 영상입니다. 섬세하고 서정적인 기타 선율을 감상해 보세요.",
    tags: ["#기타솔로", "#백만송이장미", "#핑거스타일", "#IMAP"],
    youtubeId: "R9xtFb6LpIs",
    youtubeUrl: "https://youtu.be/R9xtFb6LpIs",
  },
  {
    id: "arch-0g",
    type: "youtube",
    title: "Kleine Romanze - Jiae  Kim",
    date: "2026.11",
    description: "김지애(Jiae Kim) 연주자의 'Kleine Romanze' 연주 영상입니다. 클래식 기타의 따뜻하고 서정적인 울림을 감상해 보세요.",
    tags: ["#클래식기타", "#KleineRomanze", "#김지애", "#IMAP"],
    youtubeId: "G0fQVxu-ZBw",
    youtubeUrl: "https://youtu.be/G0fQVxu-ZBw",
  },
];

