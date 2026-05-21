/**
 * Testinger color palette
 *
 * Felsefe:
 * - Açık zemin, modern sosyal app hissi.
 * - Brand mor + accent pembe (couple/social).
 * - Kategori bazlı renk seti (chip ve kartlarda kullanılır).
 * - Soft tonlar (XSoft) ikincil yüzeylerde fon olarak.
 */
export const colors = {
  background: "#F7F7FB",
  backgroundElevated: "#FFFFFF",
  surface: "#F1F2F7",
  surfaceMuted: "#E9EAF1",
  border: "#E6E7EE",
  borderStrong: "#D5D7E1",

  textPrimary: "#0E0F1A",
  textSecondary: "#5A5C6B",
  textMuted: "#8A8D9C",
  textOnGradient: "#FFFFFF",
  textOnGradientSoft: "rgba(255, 255, 255, 0.85)",

  brand: "#7C3AED",
  brandSoft: "#EDE4FF",
  accent: "#FF4F8B",
  accentSoft: "#FFE3EE",

  success: "#22C55E",
  successSoft: "#DCFCE7",
  warning: "#F59E0B",
  warningSoft: "#FEF3C7",
  danger: "#EF4444",
  dangerSoft: "#FEE2E2",
  info: "#3B82F6",
  infoSoft: "#DBEAFE",

  shadow: "rgba(15, 15, 35, 0.08)",
  shadowStrong: "rgba(15, 15, 35, 0.18)",
  brandShadow: "rgba(124, 58, 237, 0.28)",

  tabActive: "#0E0F1A",
  tabInactive: "#9CA0AC",
  tabBarBackground: "#FFFFFF",
} as const;

/**
 * Reusable gradient token'ları. Tüm büyük kart ve hero alanlar
 * burada tanımlı gradient'leri kullanmalı.
 */
export const gradients = {
  hero: ["#7C3AED", "#FF4F8B"] as const,
  daily: ["#FF5F6D", "#FFC371"] as const,
  candy: ["#F093FB", "#F5576C"] as const,
  sunset: ["#FF8A00", "#E52E71"] as const,
  ocean: ["#36D1DC", "#5B86E5"] as const,
  forest: ["#11998E", "#38EF7D"] as const,
  midnight: ["#232526", "#414345"] as const,
  electric: ["#00C9FF", "#92FE9D"] as const,
  royal: ["#667EEA", "#764BA2"] as const,
} as const;

export type GradientKey = keyof typeof gradients;

/**
 * Kategori başına görsel set: ana renk, soft fon, emoji, gradient.
 * CategoryChips, PopularTestCard ve PackageCard'ta kullanılır.
 */
export const categoryStyle = {
  personality: {
    label: "Kişilik",
    color: "#7C3AED",
    soft: "#EDE4FF",
    emoji: "🧠",
    gradient: ["#8B5CF6", "#7C3AED"] as const,
  },
  relationship: {
    label: "İlişki",
    color: "#FF4F8B",
    soft: "#FFE3EE",
    emoji: "💞",
    gradient: ["#FF4F8B", "#FF8FB1"] as const,
  },
  dark: {
    label: "Dark",
    color: "#2A2540",
    soft: "#E5E3F0",
    emoji: "🌑",
    gradient: ["#1F1B2E", "#4B3F72"] as const,
  },
  friendship: {
    label: "Arkadaşlık",
    color: "#3B82F6",
    soft: "#DBEAFE",
    emoji: "🫂",
    gradient: ["#3B82F6", "#60A5FA"] as const,
  },
  money: {
    label: "Para",
    color: "#10B981",
    soft: "#D1FAE5",
    emoji: "💸",
    gradient: ["#10B981", "#34D399"] as const,
  },
  quick: {
    label: "Hızlı",
    color: "#F59E0B",
    soft: "#FEF3C7",
    emoji: "⚡",
    gradient: ["#F59E0B", "#FBBF24"] as const,
  },
  couple: {
    label: "Couple",
    color: "#EC4899",
    soft: "#FCE7F3",
    emoji: "💑",
    gradient: ["#EC4899", "#A855F7"] as const,
  },
} as const;

export type CategoryKey = keyof typeof categoryStyle;
