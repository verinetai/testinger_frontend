import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View, type ViewStyle } from "react-native";
import { colors, gradients, radii, shadows, spacing, typography } from "../theme";

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: "gradient" | "solid" | "soft" | "ghost";
  size?: "md" | "lg";
  fullWidth?: boolean;
  style?: ViewStyle;
  gradientColors?: readonly [string, string];
  icon?: string;
};

/**
 * Tüm CTA'lar için tek buton. Varsayılan: brand gradient (couple/social hissi).
 *  variant='solid'  -> tek renk
 *  variant='soft'   -> brandSoft fon + brand metin
 *  variant='ghost'  -> sadece kenarlık
 */
export function PrimaryButton({
  label,
  onPress,
  variant = "gradient",
  size = "md",
  fullWidth = false,
  style,
  gradientColors,
  icon,
}: PrimaryButtonProps) {
  const paddingVertical = size === "lg" ? 16 : 13;

  const content = (
    <View style={styles.content}>
      {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      <Text
        style={[
          styles.label,
          (variant === "soft" || variant === "ghost") && styles.labelDark,
        ]}
      >
        {label}
      </Text>
    </View>
  );

  if (variant === "gradient") {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.pressable,
          fullWidth && styles.fullWidth,
          pressed && styles.pressed,
          style,
        ]}
      >
        <LinearGradient
          colors={gradientColors ?? gradients.hero}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.base, styles.shadowBrand, { paddingVertical }]}
        >
          {content}
        </LinearGradient>
      </Pressable>
    );
  }

  const baseStyle: ViewStyle = (() => {
    if (variant === "solid") return { backgroundColor: colors.textPrimary };
    if (variant === "soft") return { backgroundColor: colors.brandSoft };
    return {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.border,
    };
  })();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.pressable,
        fullWidth && styles.fullWidth,
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={[styles.base, baseStyle, { paddingVertical }]}>
        {content}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: "flex-start",
  },
  fullWidth: {
    alignSelf: "stretch",
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.985 }],
  },
  base: {
    borderRadius: radii.lg,
    paddingHorizontal: spacing.xl,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowBrand: {
    ...shadows.brand,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    ...typography.subtitle,
    color: colors.textOnGradient,
    marginRight: 8,
  },
  label: {
    ...typography.bodyStrong,
    color: colors.textOnGradient,
    fontSize: 15,
    fontWeight: "700",
  },
  labelDark: {
    color: colors.textPrimary,
  },
});
