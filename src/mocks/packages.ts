import type { CategoryKey } from "../theme";

export type TestPackage = {
  id: string;
  title: string;
  description: string;
  category: CategoryKey;
  testCount: number;
  isLocked: boolean;
  unlockHint?: string;
  progress: number; // 0-1
  emoji: string;
};

export const mockPackages: TestPackage[] = [
  {
    id: "pkg-dark",
    title: "Dark Personality Paketi",
    description: "Karanlık tarafına dürüstçe bak.",
    category: "dark",
    testCount: 4,
    isLocked: true,
    unlockHint: "Level 3'te açılır · 2 test daha",
    progress: 0.6,
    emoji: "🌑",
  },
  {
    id: "pkg-relationship",
    title: "İlişki Paketi",
    description: "Aşk dilin, sınırların, beklentilerin.",
    category: "relationship",
    testCount: 6,
    isLocked: false,
    progress: 0.25,
    emoji: "💞",
  },
  {
    id: "pkg-money",
    title: "Para & Başarı Paketi",
    description: "Para ile ilişkin nasıl?",
    category: "money",
    testCount: 5,
    isLocked: true,
    unlockHint: "Level 4'te açılır",
    progress: 0.1,
    emoji: "💰",
  },
];
