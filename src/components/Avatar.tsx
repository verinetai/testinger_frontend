import { StyleSheet, Text, View, type ViewStyle } from "react-native";
import { colors, radii, shadows, typography } from "../theme";

type AvatarProps = {
  initials: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
};

export function Avatar({
  initials,
  color = colors.brand,
  size = 44,
  style,
}: AvatarProps) {
  return (
    <View
      style={[
        styles.base,
        {
          width: size,
          height: size,
          borderRadius: radii.pill,
          backgroundColor: color,
        },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize: size * 0.42 }]}>
        {initials.slice(0, 2).toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    ...shadows.sm,
  },
  text: {
    ...typography.subtitle,
    color: colors.textOnGradient,
    fontWeight: "800",
  },
});
