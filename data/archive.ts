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
    id: "arch-1",
    type: "youtube",
    title: "IMAP 스튜디오 학생 정기 연주회 — 어쿠스틱 듀엣 앙상블",
    date: "2026.10.28",
    description:
      "서로의 호흡을 맞추며 하나의 소리로 완성한 첫 번째 듀엣 무대. 6개월간 함께 연습하며 쌓아온 소중한 음악적 순간을 영상으로 나눕니다.",
    tags: ["#학생공연", "#어쿠스틱기타", "#듀엣앙상블", "#IMAP스튜디오"],
    // 유명하고 아름다운 어쿠스틱/클래식 기타 라이브 영상 샘플 (사용자 본인의 영상 ID로 교체 가능)
    youtubeId: "vBghgA1d_vU",
    youtubeUrl: "https://www.youtube.com/watch?v=vBghgA1d_vU",
    thumbnail: "/imap_studio_hero.jpg",
  },
  {
    id: "arch-2",
    type: "youtube",
    title: "손가락 끝의 감각 깨우기 — 어쿠스틱 아르페지오 기초 연습 루틴",
    date: "2026.10.15",
    description:
      "레슨 시간에 학생들과 함께 진행하는 5분 손풀기 패턴입니다. 편안한 자세에서 맑고 투명한 기타 소리를 내는 핑거링 팁을 담았습니다.",
    tags: ["#기타레슨", "#아르페지오", "#기초연습", "#연주루틴"],
    youtubeId: "J_k_bZ7e1hA",
    youtubeUrl: "https://www.youtube.com/watch?v=J_k_bZ7e1hA",
    thumbnail: "/moon.jpg",
  },
  {
    id: "arch-3",
    type: "youtube",
    title: "몸의 리듬과 호흡 — 발레 바 스트레칭 & 셔플댄스 기본 스텝",
    date: "2026.09.28",
    description:
      "오전의 정적인 발레 바 워크로 척추를 세우고, 경쾌한 셔플 스텝으로 음악을 타는 하루. 몸을 움직이며 찾은 일상의 밸런스 기록입니다.",
    tags: ["#몸의기록", "#성인발레", "#셔플댄스", "#일상리듬"],
    youtubeId: "L_LUpnjgPso",
    youtubeUrl: "https://www.youtube.com/watch?v=L_LUpnjgPso",
    thumbnail: "/river.jpg",
  },
  {
    id: "arch-4",
    type: "blog",
    title: "[블로그] F코드 정복기부터 첫 무대까지 — 학생 지수 님의 6개월 여정",
    date: "2026.10.22",
    description:
      "기타를 처음 쥐고 손가락이 아파 울던 날부터, 무대 위에서 첫 곡을 완곡하기까지. 음악이 삶의 든든한 쉼표가 되어준 이야기를 블로그에 길게 담았습니다.",
    tags: ["#블로그기록", "#레슨후기", "#성장기록", "#네이버블로그"],
    thumbnail: "/imap_studio_hero.jpg",
    blogUrl: "https://blog.naver.com/ji-stage",
  },
  {
    id: "arch-5",
    type: "blog",
    title: "[블로그] 가을 독서 앙상블 4기 후기 — 문장 한 줄에 얹은 나일론 기타 선율",
    date: "2026.10.10",
    description:
      "책장을 덮은 뒤 찾아오는 고요를 클래식 기타 화음으로 채웠던 밤. 참여자분들이 나눠주신 따뜻한 문장들과 감상평을 기록했습니다.",
    tags: ["#독서앙상블", "#북살롱", "#책과음악", "#문화기획"],
    thumbnail: "/moon.jpg",
    blogUrl: "https://blog.naver.com/ji-stage",
  },
  {
    id: "arch-6",
    type: "youtube",
    title: "가을밤 클래식 기타 소품곡 연주 — 로망스 & 카반티나",
    date: "2026.09.14",
    description:
      "스튜디오의 따뜻한 조명 아래서 조용히 연주한 가을 기타 소품곡입니다. 하루의 피로를 내려놓고 편안하게 감상해 보세요.",
    tags: ["#기타연주", "#클래식기타", "#스튜디오라이브", "#힐링음악"],
    youtubeId: "bZ_BoOlAXyk",
    youtubeUrl: "https://www.youtube.com/watch?v=bZ_BoOlAXyk",
    thumbnail: "/imap_studio_hero.jpg",
  },
];

