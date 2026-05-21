import type { ViewStyle } from "react-native";

export { colors, gradients, categoryStyle } from "./colors";
export type { CategoryKey, GradientKey } from "./colors";
export { typography } from "./typography";
export type { TypographyKey } from "./typography";

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 40,
} as const;

export const radii = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

/**
 * iOS shadow + Android elevation birlikte.
 * Hep `shadows.md` gibi spread ile kullanın.
 */
export const shadows: Record<"sm" | "md" | "lg" | "brand", ViewStyle> = {
  sm: {
    shadowColor: "#0E0F1A",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  md: {
    shadowColor: "#0E0F1A",
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  lg: {
    shadowColor: "#0E0F1A",
    shadowOpacity: 0.14,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  brand: {
    shadowColor: "#7C3AED",
    shadowOpacity: 0.32,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
};

export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radii;
