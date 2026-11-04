// 일상 & 소식 (LOG) 데이터
// 일주일에 2번 정도 레슨 현장, 발레·셔플댄스 연습 기록, 소소한 소식을
// 아래 배열 맨 위에 새 항목을 복사해 넣는 것만으로 편하게 추가할 수 있습니다.

export interface LogItem {
  id: string;
  category: "lesson" | "body" | "culture" | "daily";
  categoryLabel: string;
  categoryEmoji: string;
  badgeColor: {
    bg: string;
    text: string;
    border: string;
  };
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
}

export const LOG_ITEMS: LogItem[] = [
  {
    id: "log-1",
    category: "lesson",
    categoryLabel: "기타 레슨",
    categoryEmoji: "🎸",
    badgeColor: {
      bg: "#E8F5F1", // 연한 민트
      text: "#2D6A4F",
      border: "#C7EAE0",
    },
    title: "손끝에 굳은살이 배길 때 찾아오는 첫 완곡의 설렘",
    date: "2026.11.02",
    excerpt:
      "마침내 F코드가 맑게 울렸던 순간의 학생 표정을 잊지 못합니다. 처음엔 아프고 버겁던 줄이 점차 손에 익어가는 과정은 언제 보아도 아름답습니다.",
    content:
      "어쿠스틱 기타를 처음 잡고 3주차에 접어든 지수 님. 손가락 끝 굳은살을 자랑스럽게 보여주시더니, 오늘은 드디어 바레코드(F코드)를 깨끗하게 울리셨어요! 한 음 한 음 소리가 연결되어 첫 연주곡 'Falling Slowly'의 인트로를 완성했을 때 스튜디오 가득 번졌던 미소. 누군가의 첫 연주를 함께하는 이 시간이 제게도 가장 큰 영감입니다.",
    tags: ["#기타레슨", "#IMAP스튜디오", "#첫완곡", "#F코드성공"],
    image: "/moon.jpg",
    imageAlt: "달빛 아래 조용히 울리는 기타 소리",
  },
  {
    id: "log-2",
    category: "body",
    categoryLabel: "몸의 기록",
    categoryEmoji: "🩰",
    badgeColor: {
      bg: "#FBF0F5", // 연한 핑크
      text: "#9D3E6C",
      border: "#F5D0E3",
    },
    title: "토슈즈를 신고 바(Barre) 앞에 선 아침과 셔플 스텝의 리듬",
    date: "2026.10.29",
    excerpt:
      "정적으로 척추를 세우고 호흡을 고르는 발레의 아침, 그리고 음악의 경쾌한 비트에 몸을 던지는 셔플댄스의 오후. 몸을 쓰는 일은 머리를 비우는 가장 정직한 방법입니다.",
    content:
      "매일 아침 바 앞에 서서 를르베(Relevé)를 반복할 때면 온몸의 미세한 감각들이 깨어납니다. 발레가 내면의 축과 고요를 찾는 시간이라면, 저녁의 셔플댄스는 쿵쿵 울리는 비트에 맞춰 심장을 뛰게 만드는 해방의 순간이에요. 몸의 리듬을 기록하는 습관은 음악을 손끝뿐 아니라 온몸으로 느끼게 해줍니다.",
    tags: ["#발레기록", "#셔플댄스", "#몸의감각", "#일상리듬"],
    image: "/river.jpg",
    imageAlt: "자연 속에서 호흡하며 몸과 마음의 균형을 찾는 순간",
  },
  {
    id: "log-3",
    category: "culture",
    categoryLabel: "독서 앙상블",
    categoryEmoji: "📖",
    badgeColor: {
      bg: "#FEF9E7", // 연한 버터
      text: "#8F6B1E",
      border: "#FBE6A2",
    },
    title: "가을밤 독서 앙상블 — 헤르만 헤세의 문장과 클래식 기타 선율",
    date: "2026.10.24",
    excerpt:
      "한 문장을 소리 내어 읽고, 그 여운에 나일론 기타의 부드러운 화음을 얹었습니다. 책과 음악이 만나 만들어낸 다정한 공기.",
    content:
      "제4회 독서 앙상블 모임이 있던 날. 이번 달의 책은 헤르만 헤세의 <청춘은 아름다워>. 각자 마음을 울린 한 줄을 읽고 나면, 제가 그 구절의 감정에 어울리는 짧은 아르페지오 소품을 연주했습니다. 말과 침묵, 그리고 음악이 겹쳐지는 순간 스튜디오의 공기가 더없이 따뜻해졌습니다.",
    tags: ["#독서앙상블", "#책과음악", "#북살롱", "#문화기획"],
    image: "/moon.jpg",
    imageAlt: "밤을 밝히는 책과 음악",
  },
  {
    id: "log-4",
    category: "lesson",
    categoryLabel: "공연 기획",
    categoryEmoji: "🎪",
    badgeColor: {
      bg: "#F4EFFC", // 연한 라벤더
      text: "#6B3FA0",
      border: "#DFD1F6",
    },
    title: "겨울 학생 정기 무대 준비 — 듀엣 합주 셋리스트 구성 중!",
    date: "2026.10.18",
    excerpt:
      "혼자 치던 기타가 두 사람의 소리로 합쳐지는 앙상블의 마법. 올해 12월, IMAP 스튜디오의 학생들과 함께 만들 작은 무대를 스케치합니다.",
    content:
      "레슨을 시작한 지 6개월에서 2년 남짓 된 학생들이 모여 처음으로 2중주 앙상블에 도전합니다. 멜로디 파트와 아르페지오 반주가 서로를 귀 기울여 들으며 하나의 음악으로 완성되어 가는 과정. 틀려도 웃고, 박자를 맞추며 고개를 끄덕이는 모습에서 공연 기획자로서 가장 큰 보람을 느낍니다.",
    tags: ["#학생공연", "#앙상블합주", "#IMAP스튜디오", "#공연기획"],
  },
  {
    id: "log-5",
    category: "daily",
    categoryLabel: "소소한 일상",
    categoryEmoji: "☕",
    badgeColor: {
      bg: "#F5F5F3", // 연한 그레이
      text: "#52524E",
      border: "#E2E2DF",
    },
    title: "스튜디오에 새로운 식물과 따뜻한 국화차를 들였습니다",
    date: "2026.10.12",
    excerpt:
      "문을 열고 들어오는 순간 포근한 안도감을 느끼실 수 있도록. 레슨 전후 편안하게 머물다 가실 수 있는 아지트를 가꾸는 중입니다.",
    content:
      "창가에 작은 올리브 나무 화분을 하나 더 들였습니다. 가을바람이 쌀쌀해지기 시작해 레슨 오시는 분들을 위해 따뜻한 유기농 국화차도 준비해 두었어요. 악기 연습뿐 아니라, 하루의 피로를 잠시 내려놓고 음악 속에서 쉬어가는 쉼표 같은 공간이 되기를 바랍니다.",
    tags: ["#스튜디오일상", "#아지트", "#따뜻한공간", "#지애의기록"],
  },
];

