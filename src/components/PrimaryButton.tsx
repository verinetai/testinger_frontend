import { Pressable, StyleSheet, Text } from "react-native";
import { colors, radii, spacing, typography } from "../theme";

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
};

export function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
  },
  pressed: {
    backgroundColor: colors.accentPressed,
  },
  label: {
    ...typography.caption,
    color: colors.textPrimary,
    textTransform: "none",
    fontSize: 15,
    fontWeight: "600",
  },
});
