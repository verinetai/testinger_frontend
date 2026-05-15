import { StyleSheet, Text, View } from "react-native";
import { GlassCard } from "../components/GlassCard";
import { PrimaryButton } from "../components/PrimaryButton";
import { colors, spacing, typography } from "../theme";

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profil</Text>
      <GlassCard style={styles.card}>
        <Text style={styles.label}>Kullanıcı</Text>
        <Text style={styles.value}>Giriş yapılmadı</Text>
        <Text style={styles.hint}>
          Auth ekranı ve puan/level bilgisi bir sonraki sprintte eklenecek.
        </Text>
        <PrimaryButton label="Giriş yap (yakında)" onPress={() => undefined} />
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  heading: {
    ...typography.display,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  card: {
    marginTop: spacing.sm,
  },
  label: {
    ...typography.label,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  value: {
    ...typography.title,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  hint: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
});
