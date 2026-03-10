export type MinistryId = "WISHING" | "SOTONG" | "SAI" | "BETHEL" | "SPRING";

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
    description: "예배의 문을 여는 열정적인 예배자! 회중과 함께 호흡하며 뜨거운 찬양으로 하나님께 영광을 돌립니다.",
    icon: "Music",
    color: "from-pink-500 to-rose-500",
    traits: ["열정적인", "에너지 넘치는", "음악을 사랑하는"],
    image: "/wishing.png"
  },
  {
    id: "SOTONG",
    name: "소통",
    role: "방송팀",
    description: "보이지 않는 곳에서 예배를 완성하는 디테일의 장인! 영상, 음향, 조명으로 예배의 은혜를 더합니다.",
    icon: "Video",
    color: "from-blue-500 to-indigo-500",
    traits: ["섬세한", "책임감 있는", "기계를 잘 다루는"],
  },
  {
    id: "SAI",
    name: "사이",
    role: "교회소식잡지",
    description: "우리 교회의 따뜻한 이야기를 글과 사진으로 담아냅니다. 성도와 성도 사이를 잇는 아름다운 다리 역할을 합니다.",
    icon: "BookOpen",
    color: "from-emerald-500 to-teal-500",
    traits: ["창의적인", "글쓰기/디자인을 좋아하는", "관찰력이 뛰어난"],
    image: "/sai.png"
  },
  {
    id: "BETHEL",
    name: "벧엘",
    role: "성가대",
    description: "정돈된 화음과 깊이 있는 찬양으로 하나님께 영광을 돌립니다. 아름다운 하모니를 만들어가는 분들에게 어울립니다.",
    icon: "MicVocal",
    color: "from-amber-400 to-orange-500",
    traits: ["조화로운", "성실한", "전통과 깊이를 사랑하는"],
    image: "/bethel.png"
  },
  {
    id: "SPRING",
    name: "마르지않는샘",
    role: "새가족팀",
    description: "교회에 처음 발걸음한 분들의 얼어붙은 마음을 녹이는 따뜻한 미소! 사랑과 환대로 영혼을 맞이합니다.",
    icon: "HeartHandshake",
    color: "from-violet-500 to-purple-500",
    traits: ["따뜻한", "친화력이 좋은", "공감 능력이 뛰어난"],
    image: "/spring.png"
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "친구가 내게 갑자기 이사를 도와달라고 부탁했다. 이삿날, 내가 자연스럽게 맡게 되는 역할은?",
    options: [
      {
        text: "동선과 박스 번호를 미리 정리하며 전체 흐름이 꼬이지 않도록 조율한다.",
        scores: { SOTONG: 3, BETHEL: 1 }
      },
      {
        text: "짐을 나르면서도 지쳐가는 친구 옆에서 계속 말을 걸며 분위기를 띄운다.",
        scores: { SPRING: 3, WISHING: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "단체 사진을 찍고 나서 결과물을 봤을 때, 내가 제일 먼저 확인하는 것은?",
    options: [
      {
        text: "구도, 빛, 초점이 잘 잡혔는지 — 사진 자체의 퀄리티",
        scores: { SOTONG: 3, SAI: 2 }
      },
      {
        text: "내가 아는 사람들 표정이 잘 나왔는지 — 사람들의 모습",
        scores: { SPRING: 3, WISHING: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "처음 가는 동네 맛집을 혼자 갔는데, 자리가 꽉 차 있다. 나는?",
    options: [
      {
        text: "기다리는 동안 가게 인테리어, 손님들 반응 등을 관찰하며 혼자 생각에 잠긴다.",
        scores: { SAI: 3, SOTONG: 1 }
      },
      {
        text: "옆에 혼자 앉은 손님이나 직원에게 자연스럽게 말을 걸어본다.",
        scores: { SPRING: 3, WISHING: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "내가 가장 오래 기억하는 감동적인 순간은 어떤 장면인가?",
    options: [
      {
        text: "공연장이나 예배에서 음악과 함께 온몸에 전율이 흘렀던 순간",
        scores: { WISHING: 3, BETHEL: 2 }
      },
      {
        text: "낯선 사람이 별것 아닌 것 같은 친절을 건네줬던 순간",
        scores: { SPRING: 3, SAI: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "여러 명이 함께 작업물(발표, 영상, 행사 등)을 만들 때, 내가 가장 신경 쓰이는 것은?",
    options: [
      {
        text: "전체가 하나의 톤으로 맞춰져 있는가 — 완성도와 일관성",
        scores: { BETHEL: 3, SOTONG: 2 }
      },
      {
        text: "각 사람의 개성이 살아있는가 — 다양성과 생동감",
        scores: { SAI: 2, WISHING: 2, SPRING: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "길을 걷다가 낯선 사람이 불편해보이는 상황(길을 잃은 것 같은, 무언가 찾는 것 같은)에 처했다. 나는?",
    options: [
      {
        text: "그냥 지나치다가도 마음에 걸려 한 번 더 돌아보고는 먼저 다가간다.",
        scores: { SPRING: 3, WISHING: 1 }
      },
      {
        text: "상대방이 먼저 눈이 마주치거나 부탁하면 도와주지만, 먼저 나서기엔 조심스럽다.",
        scores: { BETHEL: 2, SOTONG: 2, SAI: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "좋아하는 음악을 누군가에게 추천할 때, 나는 어떻게 소개하는 편인가?",
    options: [
      {
        text: "\"이 부분 들어봐, 여기서 무조건 소름 돋아\" — 특정 구간을 직접 틀어준다.",
        scores: { WISHING: 3, BETHEL: 2 }
      },
      {
        text: "\"이 노래가 왜 좋냐면...\" — 어떤 상황에서 어떤 감정이었는지 이야기를 먼저 꺼낸다.",
        scores: { SAI: 3, SPRING: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "팀 프로젝트에서 마감 전날, 예상치 못한 오류가 생겼다. 나의 첫 번째 반응은?",
    options: [
      {
        text: "당장 원인부터 파악한다. 무엇이 문제인지 알아야 움직일 수 있다.",
        scores: { SOTONG: 3, BETHEL: 1 }
      },
      {
        text: "팀원들에게 상황을 먼저 공유한다. 같이 알아야 같이 풀 수 있다.",
        scores: { SPRING: 2, WISHING: 2, SAI: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "내가 어떤 일을 '잘했다'고 느끼는 순간은?",
    options: [
      {
        text: "결과물 자체가 내가 기대했던 수준 이상으로 나왔을 때",
        scores: { SOTONG: 3, SAI: 2, BETHEL: 1 }
      },
      {
        text: "함께한 사람들이 즐거워하거나 편안해하는 모습을 봤을 때",
        scores: { SPRING: 3, WISHING: 2 }
      }
    ]
  },
  {
    id: 10,
    text: "아무도 보지 않는다고 확신할 때, 나는 어떤 사람에 더 가까운가?",
    options: [
      {
        text: "혼자 흥얼거리거나 온몸으로 박자를 타며 음악에 빠져든다.",
        scores: { WISHING: 3, BETHEL: 1 }
      },
      {
        text: "조용히 뭔가를 기록하거나, 머릿속으로 이것저것 구상하고 정리한다.",
        scores: { SAI: 3, SOTONG: 2 }
      }
    ]
  }
];
