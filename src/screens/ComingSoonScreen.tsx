import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Badge } from "../components/Badge";
import { colors, radii, shadows, spacing, typography } from "../theme";

type ComingSoonScreenProps = {
  emoji: string;
  title: string;
  subtitle: string;
};

/**
 * Discover dışındaki tab'lar için ortak placeholder.
 * Tasarım dilinden kopmaması için aynı kart, renk ve typography'yi kullanır.
 */
export function ComingSoonScreen({
  emoji,
  title,
  subtitle,
}: ComingSoonScreenProps) {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: insets.top + spacing.lg,
          paddingBottom: tabBarHeight + spacing.lg,
        },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.emojiCircle}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Badge
          label="Yakında"
          icon="✨"
          variant="soft"
          color={colors.brand}
          backgroundColor={colors.brandSoft}
          textColor={colors.brand}
          style={{ marginTop: spacing.lg }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xl,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundElevated,
    borderRadius: radii.xl,
    padding: spacing.xxl,
    ...shadows.sm,
  },
  emojiCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.brandSoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  emoji: {
    fontSize: 38,
  },
  title: {
    ...typography.display,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
