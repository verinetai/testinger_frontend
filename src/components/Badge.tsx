import { StyleSheet, Text, View, type ViewStyle } from "react-native";
import { colors, radii, spacing, typography } from "../theme";

type BadgeProps = {
  label: string;
  icon?: string;
  variant?: "soft" | "solid" | "outline";
  color?: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
};

/**
 * Genel kullanımlı küçük pill.
 * `color` ile renk grubu; `variant` ile dolu/soft/outline.
 */
export function Badge({
  label,
  icon,
  variant = "soft",
  color = colors.brand,
  backgroundColor,
  textColor,
  style,
}: BadgeProps) {
  const bg =
    backgroundColor ??
    (variant === "solid"
      ? color
      : variant === "outline"
        ? "transparent"
        : hexToSoft(color));

  const fg =
    textColor ??
    (variant === "solid" ? colors.textOnGradient : color);

  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: bg,
          borderColor: variant === "outline" ? color : "transparent",
          borderWidth: variant === "outline" ? 1 : 0,
        },
        style,
      ]}
    >
      {icon ? <Text style={[styles.icon, { color: fg }]}>{icon}</Text> : null}
      <Text style={[styles.label, { color: fg }]}>{label}</Text>
    </View>
  );
}

/**
 * Hex rengi yumuşak bir fon rengine dönüştürür (≈ %14 opacity beyaz mix).
 * categoryStyle.soft kullanılamadığı durumlar için fallback.
 */
function hexToSoft(hex: string): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, 0.12)`;
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radii.pill,
    alignSelf: "flex-start",
  },
  icon: {
    ...typography.caption,
    marginRight: 4,
  },
  label: {
    ...typography.caption,
    fontWeight: "700",
  },
});
