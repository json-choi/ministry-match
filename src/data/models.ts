export type MinistryId =
  | "WISHING"
  | "SAI"
  | "HADEUNG"
  | "HARANG"
  | "MASAEM"
  | "SOTONG"
  | "NAU"
  | "YEPUM"
  | "BETHEL";

export interface Ministry {
  id: MinistryId;
  name: string;
  role: string;
  description: string;
  icon: string;
  color: string;
  traits: string[];
  image?: string;
}

export type OptionScores = Partial<Record<MinistryId, number>>;

export interface QuestionOption {
  text: string;
  scores: OptionScores;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export const MINISTRIES: Ministry[] = [
  {
    id: "WISHING",
    name: "위싱",
    role: "찬양팀",
    description:
      "당신은 음악으로 회중과 함께 호흡하며 뜨거운 찬양으로 하나님께 영광을 돌릴 때 가장 빛나는 사람입니다. 넘치는 에너지와 열정으로 공동체의 예배 온도를 높이는 데 탁월한 은사가 있군요!",
    icon: "Music",
    color: "from-pink-500 to-rose-500",
    traits: ["예배의 문을 활짝 여는 열정적인 예배자", "에너지 넘치는", "음악을 사랑하는"],
    image: "/wishing.png",
  },
  {
    id: "SAI",
    name: "사이",
    role: "문서선교팀",
    description:
      "우리 정동 젊은이 공동체의 따뜻한 이야기를 글과 사진으로 담아내는 미디어팀에 최적화된 인재입니다. 남다른 관찰력과 창의적인 시선으로 분기마다 발간되는 정동젊은이교회 소식지 <Light House> 발간에 참여하고 공동체에 감동을 전해보세요.",
    icon: "BookOpen",
    color: "from-emerald-500 to-teal-500",
    traits: ["젊은이와 젊은이 사이를 잇는 아름다운 다리", "관찰력이 뛰어난", "글·디자인을 좋아하는"],
    image: "/sai.png",
  },
  {
    id: "HADEUNG",
    name: "하등",
    role: "중보기도팀",
    description:
      "깊은 영적 감수성을 바탕으로 공동체와 동역자들을 위해 묵묵히 자리를 지키는 분이시군요. 매주 예배 전 함께 모여 예배와 사역자들을 위해 중보기도하는 시간은 젊은이 공동체를 지탱하는 가장 강력한 영적 에너지가 됩니다.",
    icon: "HandHeart",
    color: "from-violet-500 to-purple-600",
    traits: ["무릎으로 승리하는 기도의 용사", "꾸준한", "영적 감수성이 높은"],
  },
  {
    id: "HARANG",
    name: "하랑",
    role: "봉사활동팀",
    description:
      "따뜻한 배려심과 탁월한 행동력을 겸비하셨네요! 매월 진행되는 이웃사랑 프로그램을 통해 교회 안팎의 어려운 곳을 살피고 손과 발이 되어주는 당신의 헌신은 하나님의 사랑을 드러내는 통로가 됩니다.",
    icon: "HandHelping",
    color: "from-orange-400 to-amber-500",
    traits: ["필요한 곳이라면 어디든지 달려가는 섬김의 달인", "따뜻한", "배려심이 깊은"],
  },
  {
    id: "MASAEM",
    name: "마샘",
    role: "새가족 환영팀",
    description:
      "뛰어난 친화력과 높은 공감 능력으로 처음 온 분들의 긴장을 녹여주는 분입니다. 당신의 세심한 배려와 환대는 새 가족이 우리 젊은이 공동체에 뿌리 내리게 하는 가장 큰 힘이 됩니다.",
    icon: "HeartHandshake",
    color: "from-sky-400 to-cyan-500",
    traits: ["마음 문을 여는 따뜻한 미소와 환대", "공감 능력 높은", "세심한"],
    image: "/spring.png",
  },
  {
    id: "SOTONG",
    name: "소통",
    role: "예배 미디어 방송팀",
    description:
      "영상, 음향, 조명 등 보이지 않는 곳에서 예배의 은혜를 풍성하게 만드는 기술적 감각과 책임감을 갖추셨습니다. 당신의 섬세한 손길을 통해 예배의 모든 순간이 성도들에게 더 깊이 전달됩니다.",
    icon: "Video",
    color: "from-blue-500 to-indigo-500",
    traits: ["보이지 않는 곳에서 예배를 완성하는 섬김의 손길", "책임감 있는", "기술적 감각이 있는"],
  },
  {
    id: "NAU",
    name: "나우",
    role: "금요기도회팀",
    description:
      "분주했던 한 주를 기도로 마무리하는 아름다운 신앙을 가지셨군요. 당신의 성실한 예배 태도는 젊은이 공동체의 영적 기초를 세우는 귀한 밑거름입니다.",
    icon: "Moon",
    color: "from-indigo-500 to-slate-600",
    traits: ["평일에도 젊은이 공동체를 하나되게 만드는 금요기도팀", "규칙적인", "예배를 사랑하는"],
  },
  {
    id: "YEPUM",
    name: "예품",
    role: "자립준비청년 지원팀",
    description:
      "세상에 첫발을 내딛는 자립 준비 청년들이 홀로 서지 않도록 곁을 지키며, 건강한 사회 구성원으로 우뚝 설 수 있도록 응원하는 동반자가 되어주세요.",
    icon: "Sprout",
    color: "from-green-500 to-emerald-600",
    traits: ["자립을 준비하는 청년들의 든든한 동반자", "실용적인", "연대 정신이 있는"],
  },
  {
    id: "BETHEL",
    name: "벧엘",
    role: "예배 성가대",
    description:
      "조화로운 화음과 전통의 깊이를 사랑하는 성실한 예배자입니다. 멜로디 속에 진심을 담아 하나님께 영광을 돌리는 당신의 찬양은 듣는 이들의 마음을 평온하게 만듭니다.",
    icon: "MicVocal",
    color: "from-amber-400 to-orange-500",
    traits: ["아름다운 하모니를 만들어가는 하늘의 찬양대", "성실한", "전통과 깊이를 사랑하는"],
    image: "/bethel.png",
  },
];

/**
 * 질문은 총 12문항, 각각 A/B 2개 선택지.
 * 각 선택지는 여러 사역팀에 점수를 분배.
 *
 * 설계 원칙:
 * - 직접적("찬양 좋아요?") 대신 일상 상황으로 성향을 파악
 * - 한 문항이 너무 특정 팀에 쏠리지 않도록 교차 설계
 * - 9개 팀이 고르게 커버되도록 분배
 */
export const QUESTIONS: Question[] = [
  // Q1 — 감정 표현 방식 (위싱/벧엘 vs 하등/나우)
  {
    id: 1,
    text: "마음 속에 크게 감동받은 일이 생겼다. 나는 보통 어떻게 반응하는 편인가?",
    options: [
      {
        text: "몸이 먼저 반응한다. 박수를 치거나, 눈물이 흐르거나, 자기도 모르게 소리를 지른다.",
        scores: { WISHING: 3, BETHEL: 1, HARANG: 1 },
      },
      {
        text: "조용히 속으로 삭힌다. 그 감동이 오래도록 마음에 남는 편이다.",
        scores: { HADEUNG: 3, NAU: 2, SAI: 1 },
      },
    ],
  },

  // Q2 — 처음 온 사람을 대하는 방식 (마샘/하랑 vs 소통/사이)
  {
    id: 2,
    text: "처음 온 사람이 어색하게 서 있는 모습을 보면, 나는 보통 어떻게 행동하는가?",
    options: [
      {
        text: "먼저 말을 걸고 편하게 느끼도록 분위기를 풀어준다.",
        scores: { MASAEM: 3, HARANG: 2, WISHING: 1 },
      },
      {
        text: "직접 나서기보다 상황을 살피며 필요한 준비나 역할에 집중한다.",
        scores: { SOTONG: 3, SAI: 2, HADEUNG: 1 },
      },
    ],
  },

  // Q3 — 문제 해결 방식 (소통/예품 vs 하랑/마샘)
  {
    id: 3,
    text: "팀 안에서 예상치 못한 문제가 터졌다. 내가 가장 자연스럽게 하는 행동은?",
    options: [
      {
        text: "원인을 먼저 파악하고, 해결책을 단계적으로 생각한다.",
        scores: { SOTONG: 3, YEPUM: 2, SAI: 1 },
      },
      {
        text: "당장 할 수 있는 것부터 손발을 움직인다. 나중에 생각하면 된다.",
        scores: { HARANG: 3, MASAEM: 2, WISHING: 1 },
      },
    ],
  },

  // Q4 — 반복과 루틴 (나우/벧엘 vs 사이/예품)
  {
    id: 4,
    text: "매주 반복되는 루틴에 대해 나는 어떤 편인가?",
    options: [
      {
        text: "규칙적으로 반복되는 것이 오히려 힘이 된다. 루틴이 있어야 집중이 잘 된다.",
        scores: { NAU: 3, BETHEL: 2, HADEUNG: 1 },
      },
      {
        text: "같은 패턴이 반복되면 지루함을 느낀다. 새로운 시도와 변화가 활력을 준다.",
        scores: { SAI: 3, YEPUM: 2, WISHING: 1 },
      },
    ],
  },

  // Q5 — 뒤에서 vs 앞에서 (소통/하등 vs 위싱/마샘)
  {
    id: 5,
    text: "행사가 끝난 뒤 가장 기억에 남는 나의 역할은 어떤 것인가?",
    options: [
      {
        text: "앞에 나서서 사람들과 직접 소통하며 분위기를 이끌었던 때",
        scores: { WISHING: 3, MASAEM: 2, HARANG: 1 },
      },
      {
        text: "뒤에서 준비하고 조율하며 전체가 매끄럽게 돌아가도록 했던 때",
        scores: { SOTONG: 3, HADEUNG: 2, BETHEL: 1 },
      },
    ],
  },

  // Q6 — 공동체 이야기를 나누는 방식 (사이 vs 하랑)
  {
    id: 6,
    text: "공동체 안에서 좋았던 일을 다른 사람들에게 전하고 싶을 때, 나는 주로 어떻게 하는가?",
    options: [
      {
        text: "글이나 사진, 영상으로 기록해 오래 남도록 정리하고 나눈다.",
        scores: { SAI: 3, SOTONG: 1, NAU: 1 },
      },
      {
        text: "직접 함께 참여하게 하거나 현장으로 데려가 몸으로 느끼게 한다.",
        scores: { HARANG: 3, MASAEM: 2, YEPUM: 1 },
      },
    ],
  },

  // Q7 — 음악/예술 취향 (위싱 vs 벧엘)
  {
    id: 7,
    text: "음악으로 예배드릴 때, 나는 어떤 상황에서 더 하나님께 가까이 느끼는가?",
    options: [
      {
        text: "온 회중이 함께 하나 되어 외치는 역동적이고 뜨거운 찬양 속에서",
        scores: { WISHING: 3, NAU: 1, HARANG: 1 },
      },
      {
        text: "정제된 화음과 잘 다듬어진 멜로디가 울려 퍼지는 고요한 찬양 속에서",
        scores: { BETHEL: 3, HADEUNG: 2, NAU: 1 },
      },
    ],
  },

  // Q8 — 사람 돕기 스타일 (예품/하랑 vs 마샘/하등)
  {
    id: 8,
    text: "어려움 속에 있는 친구를 돕고 싶을 때, 나는 어떤 방식으로 먼저 다가가는가?",
    options: [
      {
        text: "구체적으로 뭐가 필요한지 묻고, 혼자 설 수 있도록 실질적인 방법을 함께 찾는다.",
        scores: { YEPUM: 3, HARANG: 2, SOTONG: 1 },
      },
      {
        text: "일단 곁에 있어 주며 마음을 듣는다. 편히 기대도록 만드는 것이 먼저다.",
        scores: { MASAEM: 3, HADEUNG: 2, SAI: 1 },
      },
    ],
  },

  // Q9 — 기도와 영적 생활 (하등/나우 vs 위싱/하랑)
  {
    id: 9,
    text: "나에게 영적으로 힘이 되는 시간은 언제인가?",
    options: [
      {
        text: "조용히 혼자 혹은 소수와 함께 깊이 기도하며 공동체를 위해 중보하는 시간",
        scores: { HADEUNG: 3, NAU: 1, BETHEL: 1 },
      },
      {
        text: "정기적으로 함께 모여 예배하고 기도하며 공동체가 하나 되는 시간",
        scores: { NAU: 3, WISHING: 2, HARANG: 1 },
      },
    ],
  },

  // Q10 — 청년/사회 이슈 관심 (예품 vs 사이)
  {
    id: 10,
    text: "교회 밖 세상에 대해 나는 주로 어떤 방식으로 관심을 표현하는가?",
    options: [
      {
        text: "도움이 필요한 청년을 실제로 돕고, 자립할 수 있도록 곁에서 지속적으로 돕는 방식이 좋다.",
        scores: { YEPUM: 3, HARANG: 2, MASAEM: 1 },
      },
      {
        text: "글이나 사진, 이야기로 공동체의 시선을 넓히고 공감을 이끄는 방식이 좋다.",
        scores: { SAI: 3, NAU: 1, HADEUNG: 1 },
      },
    ],
  },

  // Q11 — 완성도 vs 과정 (소통/벧엘 vs 하랑/마샘)
  {
    id: 11,
    text: "무언가를 함께 만들 때, 내가 더 중요하게 생각하는 것은?",
    options: [
      {
        text: "결과물의 완성도 — 세세한 부분까지 제대로 갖춰져야 한다.",
        scores: { SOTONG: 3, BETHEL: 2, SAI: 1 },
      },
      {
        text: "함께하는 과정 — 모든 사람이 참여하고 즐겁게 만들어나가는 것이 중요하다.",
        scores: { MASAEM: 2, HARANG: 2, WISHING: 2 },
      },
    ],
  },

  // Q12 — 지속성과 헌신 (나우/벧엘/하등 vs 위싱/하랑)
  {
    id: 12,
    text: "아무도 알아주지 않더라도 꾸준히 할 수 있는 일은?",
    options: [
      {
        text: "정해진 시간에 빠지지 않고 기도하거나, 책임진 자리를 묵묵히 지키는 것",
        scores: { NAU: 3, HADEUNG: 2, BETHEL: 2 },
      },
      {
        text: "누군가에게 실질적인 도움이 되는 일이라면 뒤에서라도 계속할 수 있다.",
        scores: { YEPUM: 3, HARANG: 2, SOTONG: 1 },
      },
    ],
  },
];
