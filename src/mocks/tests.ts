import type { CategoryKey } from "../theme";

export type Test = {
  id: string;
  title: string;
  description: string;
  category: CategoryKey;
  questionCount: number;
  durationMin: number;
  xp: number;
  emoji: string;
  plays: number;
  shares: number;
};

export const mockDailyTest: Test = {
  id: "daily-1",
  title: "İnsanlar seni ilk görüşte nasıl görüyor?",
  description:
    "10 soruda dışarıdan bıraktığın ilk izlenimi keşfet. Sonucu hikayene koymak için hazır ol.",
  category: "personality",
  questionCount: 10,
  durationMin: 3,
  xp: 75,
  emoji: "👀",
  plays: 18432,
  shares: 2304,
};

export const mockPopularTests: Test[] = [
  {
    id: "pop-1",
    title: "Ne kadar toxic'sin?",
    description: "Karanlık tarafını tanıyalım.",
    category: "dark",
    questionCount: 12,
    durationMin: 4,
    xp: 60,
    emoji: "☠️",
    plays: 84920,
    shares: 12030,
  },
  {
    id: "pop-2",
    title: "Sevgililik tarzın ne?",
    description: "İlişkide nasıl bir karaktersin?",
    category: "relationship",
    questionCount: 10,
    durationMin: 3,
    xp: 50,
    emoji: "💘",
    plays: 64310,
    shares: 7842,
  },
  {
    id: "pop-3",
    title: "Kaos seviyen kaç?",
    description: "Hayatına kaç gram kaos kattın?",
    category: "quick",
    questionCount: 8,
    durationMin: 2,
    xp: 40,
    emoji: "🌀",
    plays: 41210,
    shares: 5102,
  },
  {
    id: "pop-4",
    title: "Arkadaş grubunda hangi roldesin?",
    description: "Grup içindeki gerçek rolün.",
    category: "friendship",
    questionCount: 12,
    durationMin: 4,
    xp: 65,
    emoji: "🎭",
    plays: 33982,
    shares: 4193,
  },
];
