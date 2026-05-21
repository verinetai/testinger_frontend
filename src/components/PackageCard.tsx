import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "./ProgressBar";
import {
  categoryStyle,
  colors,
  radii,
  shadows,
  spacing,
  typography,
} from "../theme";
import type { TestPackage } from "../mocks/packages";

type PackageCardProps = {
  pkg: TestPackage;
  onPress?: () => void;
};

export function PackageCard({ pkg, onPress }: PackageCardProps) {
  const cat = categoryStyle[pkg.category];

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
        <View style={styles.deco} />

        <View style={styles.topRow}>
          <View style={styles.emojiBox}>
            <Text style={styles.emoji}>{pkg.emoji}</Text>
          </View>

          <View style={[styles.statePill, pkg.isLocked && styles.lockedPill]}>
            <Text style={styles.stateLabel}>
              {pkg.isLocked ? "🔒 Kilitli" : "✓ Açık"}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>{pkg.title}</Text>
        <Text style={styles.description}>{pkg.description}</Text>

        <View style={styles.bottom}>
          <View style={styles.metaRow}>
            <Text style={styles.metaCount}>{pkg.testCount} test</Text>
            {pkg.unlockHint ? (
              <>
                <Text style={styles.metaDot}>·</Text>
                <Text style={styles.metaHint}>{pkg.unlockHint}</Text>
              </>
            ) : null}
          </View>

          <ProgressBar
            progress={pkg.progress}
            fillColor="#fff"
            trackColor="rgba(255,255,255,0.25)"
            height={6}
            style={{ marginTop: 10 }}
          />
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: radii.xl,
    ...shadows.md,
    marginBottom: spacing.md,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  card: {
    borderRadius: radii.xl,
    padding: spacing.lg,
    overflow: "hidden",
    minHeight: 180,
  },
  deco: {
    position: "absolute",
    right: -30,
    top: -30,
    width: 140,
    height: 140,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.10)",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  emojiBox: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 22,
  },
  statePill: {
    paddingHorizontal: spacing.md,
    paddingVertical: 5,
    borderRadius: radii.pill,
    backgroundColor: "rgba(255,255,255,0.22)",
  },
  lockedPill: {
    backgroundColor: "rgba(0,0,0,0.28)",
  },
  stateLabel: {
    ...typography.tiny,
    color: colors.textOnGradient,
    fontWeight: "800",
  },
  title: {
    ...typography.title,
    color: colors.textOnGradient,
    marginBottom: 4,
  },
  description: {
    ...typography.caption,
    color: colors.textOnGradientSoft,
    marginBottom: spacing.md,
  },
  bottom: {
    marginTop: "auto",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  metaCount: {
    ...typography.caption,
    color: colors.textOnGradient,
    fontWeight: "800",
  },
  metaDot: {
    color: colors.textOnGradientSoft,
    marginHorizontal: 6,
    fontWeight: "700",
  },
  metaHint: {
    ...typography.caption,
    color: colors.textOnGradientSoft,
  },
});
