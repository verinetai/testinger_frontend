import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  categoryStyle,
  colors,
  radii,
  shadows,
  spacing,
  typography,
} from "../theme";
import type { Test } from "../mocks/tests";

type DailyTestCardProps = {
  test: Test;
  onPress?: () => void;
};

export function DailyTestCard({ test, onPress }: DailyTestCardProps) {
  const cat = categoryStyle[test.category];
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.shadow, pressed && styles.pressed]}
    >
      <LinearGradient
        colors={cat.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.decoBig} />
        <View style={styles.decoSmall} />

        <View style={styles.topRow}>
          <View style={styles.eyebrowPill}>
            <Text style={styles.eyebrowEmoji}>✨</Text>
            <Text style={styles.eyebrow}>Günün Testi</Text>
          </View>
          <View style={styles.xpPill}>
            <Text style={styles.xpLabel}>+{test.xp} XP</Text>
          </View>
        </View>

        <View style={styles.emojiCircle}>
          <Text style={styles.emoji}>{test.emoji}</Text>
        </View>

        <Text style={styles.title}>{test.title}</Text>
        <Text style={styles.description}>{test.description}</Text>

        <View style={styles.metaRow}>
          <MetaDot label={`${test.questionCount} soru`} />
          <MetaDot label={`${test.durationMin} dk`} />
          <MetaDot label={cat.label} />
        </View>

        <View style={styles.ctaRow}>
          <View style={styles.ctaButton}>
            <Text style={styles.ctaLabel}>Teste Başla</Text>
            <Text style={styles.ctaArrow}>›</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

function MetaDot({ label }: { label: string }) {
  return (
    <View style={styles.metaDotWrap}>
      <View style={styles.metaDot} />
      <Text style={styles.metaText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: radii.xl,
    ...shadows.lg,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  card: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    overflow: "hidden",
    minHeight: 240,
  },
  decoBig: {
    position: "absolute",
    right: -40,
    top: -40,
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.10)",
  },
  decoSmall: {
    position: "absolute",
    right: 40,
    bottom: -30,
    width: 90,
    height: 90,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyebrowPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.22)",
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radii.pill,
  },
  eyebrowEmoji: {
    fontSize: 12,
    marginRight: 4,
  },
  eyebrow: {
    ...typography.tiny,
    color: colors.textOnGradient,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    fontWeight: "800",
  },
  xpPill: {
    backgroundColor: "rgba(0,0,0,0.22)",
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radii.pill,
  },
  xpLabel: {
    ...typography.tiny,
    color: colors.textOnGradient,
    fontWeight: "800",
  },
  emojiCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  emoji: {
    fontSize: 30,
  },
  title: {
    ...typography.display,
    color: colors.textOnGradient,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textOnGradientSoft,
    marginBottom: spacing.lg,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: spacing.xl,
  },
  metaDotWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: spacing.lg,
  },
  metaDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginRight: 6,
  },
  metaText: {
    ...typography.caption,
    color: colors.textOnGradientSoft,
    fontWeight: "600",
  },
  ctaRow: {
    flexDirection: "row",
  },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: spacing.xl,
    paddingVertical: 12,
    borderRadius: radii.pill,
  },
  ctaLabel: {
    ...typography.bodyStrong,
    color: colors.textPrimary,
    fontWeight: "800",
  },
  ctaArrow: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "800",
    color: colors.textPrimary,
    marginLeft: 6,
  },
});
