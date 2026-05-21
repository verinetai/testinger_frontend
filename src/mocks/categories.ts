import { categoryStyle, type CategoryKey } from "../theme";

export type CategoryItem = {
  id: CategoryKey;
  label: string;
  emoji: string;
};

export const mockCategories: CategoryItem[] = (
  [
    "personality",
    "relationship",
    "dark",
    "friendship",
    "money",
    "quick",
    "couple",
  ] as const
).map((id) => ({
  id,
  label: categoryStyle[id].label,
  emoji: categoryStyle[id].emoji,
}));
