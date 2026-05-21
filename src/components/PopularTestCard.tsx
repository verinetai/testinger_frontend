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

type PopularTestCardProps = {
  test: Test;
  onPress?: () => void;
};

export function PopularTestCard({ test, onPress }: PopularTestCardProps) {
  const cat = categoryStyle[test.category];
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={[styles.iconBox, { backgroundColor: cat.soft }]}>
        <Text style={styles.emoji}>{test.emoji}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.headerRow}>
          <Text style={[styles.category, { color: cat.color }]}>
            {cat.label.toUpperCase()}
          </Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.meta}>{test.durationMin} dk</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.meta}>{test.questionCount} soru</Text>
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {test.title}
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.plays}>
            🔥 {formatCount(test.plays)} kişi oynadı
          </Text>
          <View style={[styles.arrowCircle, { backgroundColor: cat.color }]}>
            <Text style={styles.arrow}>›</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function formatCount(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return `${n}`;
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.backgroundElevated,
    borderRadius: radii.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: radii.md,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  emoji: {
    fontSize: 26,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  category: {
    ...typography.tiny,
    fontWeight: "800",
    letterSpacing: 0.6,
  },
  dot: {
    color: colors.textMuted,
    marginHorizontal: 6,
    fontWeight: "700",
  },
  meta: {
    ...typography.tiny,
    color: colors.textMuted,
    fontWeight: "600",
  },
  title: {
    ...typography.subtitle,
    color: colors.textPrimary,
    marginBottom: 6,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plays: {
    ...typography.caption,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  arrowCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 18,
    marginBottom: 2,
  },
});
