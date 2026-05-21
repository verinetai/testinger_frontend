import type { CategoryKey } from "../theme";

export type UserProgress = {
  name: string;
  initials: string;
  avatarColor: string;
  level: number;
  xp: number;
  xpForNextLevel: number;
  streakDays: number;
  profileCompletion: number;
  nextUnlock: {
    label: string;
    category: CategoryKey;
    remainingTests: number;
  };
};

export const mockUser: UserProgress = {
  name: "Esat",
  initials: "E",
  avatarColor: "#7C3AED",
  level: 2,
  xp: 340,
  xpForNextLevel: 500,
  streakDays: 3,
  profileCompletion: 37,
  nextUnlock: {
    label: "Dark Personality Paketi",
    category: "dark",
    remainingTests: 2,
  },
};
