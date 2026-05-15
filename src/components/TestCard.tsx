import { Pressable, StyleSheet, Text, View } from "react-native";
import type { FeedTest } from "../services/tests";
import { colors, radii, spacing, typography } from "../theme";
import { formatCategory, formatPlayCount } from "../utils/format";
import { GlassCard } from "./GlassCard";

type TestCardProps = {
  test: FeedTest;
  onPress?: () => void;
};

export function TestCard({ test, onPress }: TestCardProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <GlassCard>
        <View style={styles.header}>
          <Text style={styles.category}>{formatCategory(test.category)}</Text>
          <Text style={styles.plays}>{formatPlayCount(test.play_count)}</Text>
        </View>
        <Text style={styles.title}>{test.title}</Text>
        {test.description ? (
          <Text style={styles.description} numberOfLines={2}>
            {test.description}
          </Text>
        ) : null}
      </GlassCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  category: {
    ...typography.label,
    color: colors.accent,
  },
  plays: {
    ...typography.caption,
    color: colors.textMuted,
  },
  title: {
    ...typography.title,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
