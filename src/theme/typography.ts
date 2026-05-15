import { TextStyle } from "react-native";

export const typography = {
  display: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: -0.5,
  } satisfies TextStyle,
  title: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: -0.3,
  } satisfies TextStyle,
  body: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 22,
  } satisfies TextStyle,
  caption: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
  } satisfies TextStyle,
  label: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  } satisfies TextStyle,
} as const;
