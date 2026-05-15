import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { colors, radii, spacing } from "../theme";

type GlassCardProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export function GlassCard({ children, style }: GlassCardProps) {
  return (
    <View style={[styles.wrapper, style as ViewStyle]}>
      {Platform.OS === "ios" ? (
        <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
      ) : (
        <View style={styles.androidFallback} />
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radii.lg,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
    backgroundColor: colors.surface,
  },
  androidFallback: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.glassHighlight,
  },
  content: {
    padding: spacing.md,
  },
});
