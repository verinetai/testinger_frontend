import type { TextStyle } from "react-native";

/**
 * Hiyerarşi:
 *  hero     -> ekran başlığı, "Selam Esat" gibi
 *  display  -> büyük başlıklar
 *  title    -> kart başlıkları
 *  subtitle -> kart alt başlıkları
 *  body     -> normal metin
 *  caption  -> küçük meta (süre, soru sayısı)
 *  label    -> büyük harf etiket (KATEGORİLER)
 *  tiny     -> en küçük yardımcı metin
 */
export const typography = {
  hero: {
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: -0.6,
    lineHeight: 36,
  } satisfies TextStyle,
  display: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: -0.4,
    lineHeight: 30,
  } satisfies TextStyle,
  title: {
    fontSize: 19,
    fontWeight: "700",
    letterSpacing: -0.2,
    lineHeight: 25,
  } satisfies TextStyle,
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
  } satisfies TextStyle,
  body: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  } satisfies TextStyle,
  bodyStrong: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  } satisfies TextStyle,
  caption: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  } satisfies TextStyle,
  label: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    lineHeight: 14,
  } satisfies TextStyle,
  tiny: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.3,
    lineHeight: 13,
  } satisfies TextStyle,
} as const;

export type TypographyKey = keyof typeof typography;
