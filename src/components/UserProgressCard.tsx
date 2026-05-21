import { StyleSheet, Text, View } from "react-native";
import { Badge } from "./Badge";
import { ProgressBar } from "./ProgressBar";
import {
  categoryStyle,
  colors,
  radii,
  shadows,
  spacing,
  typography,
} from "../theme";
import type { UserProgress } from "../mocks/user";

type UserProgressCardProps = {
  user: UserProgress;
};

export function UserProgressCard({ user }: UserProgressCardProps) {
  const xpProgress = user.xp / user.xpForNextLevel;
  const cat = categoryStyle[user.nextUnlock.category];

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.levelPill}>
          <Text style={styles.levelLabel}>LEVEL</Text>
          <Text style={styles.levelValue}>{user.level}</Text>
        </View>

        <View style={styles.streakRow}>
          <Text style={styles.streakIcon}>🔥</Text>
          <Text style={styles.streakValue}>{user.streakDays}</Text>
          <Text style={styles.streakLabel}>günlük seri</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{user.xp}</Text>
          <Text style={styles.statLabel}>XP</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statValue}>{user.profileCompletion}%</Text>
          <Text style={styles.statLabel}>Profil</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statValue}>
            {user.xpForNextLevel - user.xp}
          </Text>
          <Text style={styles.statLabel}>Sonraki lvl</Text>
        </View>
      </View>

      <View style={styles.progressBlock}>
        <View style={styles.progressLabels}>
          <Text style={styles.progressTitle}>Profilini tamamla</Text>
          <Text style={styles.progressPct}>{user.profileCompletion}%</Text>
        </View>
        <ProgressBar
          progress={user.profileCompletion / 100}
          fillColor={colors.brand}
          height={8}
        />
      </View>

      <View style={styles.unlockRow}>
        <Badge
          label={cat.label}
          icon={cat.emoji}
          color={cat.color}
          variant="soft"
          backgroundColor={cat.soft}
          textColor={cat.color}
        />
        <Text style={styles.unlockText}>
          <Text style={styles.unlockStrong}>
            {user.nextUnlock.remainingTests} test
          </Text>{" "}
          daha çöz, {user.nextUnlock.label.replace(" Paketi", "")} açılsın.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: radii.xl,
    padding: spacing.xl,
    ...shadows.md,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },
  levelPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.brandSoft,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  levelLabel: {
    ...typography.tiny,
    color: colors.brand,
    marginRight: 6,
  },
  levelValue: {
    ...typography.subtitle,
    color: colors.brand,
    fontWeight: "800",
  },
  streakRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  streakIcon: {
    fontSize: 18,
    marginRight: 4,
  },
  streakValue: {
    ...typography.subtitle,
    color: colors.textPrimary,
    fontWeight: "800",
    marginRight: 4,
  },
  streakLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.lg,
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    width: 1,
    height: 22,
    backgroundColor: colors.border,
  },
  statValue: {
    ...typography.title,
    color: colors.textPrimary,
  },
  statLabel: {
    ...typography.tiny,
    color: colors.textMuted,
    marginTop: 2,
    textTransform: "uppercase",
  },
  progressBlock: {
    marginBottom: spacing.lg,
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  progressTitle: {
    ...typography.caption,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  progressPct: {
    ...typography.caption,
    color: colors.brand,
    fontWeight: "800",
  },
  unlockRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  unlockText: {
    ...typography.caption,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    flex: 1,
  },
  unlockStrong: {
    fontWeight: "800",
    color: colors.textPrimary,
  },
});
