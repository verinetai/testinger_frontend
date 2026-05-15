import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Category } from "../services/categories";
import { radii, spacing, typography } from "../theme";

type CategoryCardProps = {
  category: Category;
  onPress: () => void;
};

export function CategoryCard({ category, onPress }: CategoryCardProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <LinearGradient
        colors={[category.gradient_start, category.gradient_end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.emoji}>{category.icon_emoji}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {category.title}
        </Text>
        {category.subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {category.subtitle}
          </Text>
        ) : null}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {category.content_format === "test" ? "TEST" : "KART"}
          </Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.9, transform: [{ scale: 0.98 }] },
  gradient: {
    width: 148,
    height: 168,
    borderRadius: radii.lg,
    padding: spacing.md,
    justifyContent: "flex-end",
  },
  emoji: { fontSize: 28, marginBottom: spacing.sm },
  title: {
    ...typography.title,
    fontSize: 16,
    color: "#fff",
  },
  subtitle: {
    ...typography.caption,
    color: "rgba(255,255,255,0.85)",
    marginTop: 2,
  },
  badge: {
    position: "absolute",
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.pill,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.6,
  },
});
