import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  categoryStyle,
  colors,
  radii,
  spacing,
  typography,
} from "../theme";
import type { CategoryItem } from "../mocks/categories";

type CategoryChipsProps = {
  categories: CategoryItem[];
  selectedId?: string;
  onSelect?: (id: CategoryItem["id"]) => void;
};

export function CategoryChips({
  categories,
  selectedId,
  onSelect,
}: CategoryChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {categories.map((cat) => {
        const style = categoryStyle[cat.id];
        const isSelected = selectedId === cat.id;
        return (
          <Pressable
            key={cat.id}
            onPress={() => onSelect?.(cat.id)}
            style={({ pressed }) => [
              styles.chip,
              {
                backgroundColor: isSelected ? style.color : style.soft,
                borderColor: isSelected ? style.color : "transparent",
              },
              pressed && styles.pressed,
            ]}
          >
            <View
              style={[
                styles.dot,
                { backgroundColor: isSelected ? "#fff" : style.color },
              ]}
            />
            <Text style={styles.emoji}>{cat.emoji}</Text>
            <Text
              style={[
                styles.label,
                { color: isSelected ? "#fff" : style.color },
              ]}
            >
              {cat.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingRight: spacing.lg,
    gap: spacing.sm,
    flexDirection: "row",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: 10,
    borderRadius: radii.pill,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  emoji: {
    fontSize: 14,
    marginRight: 6,
  },
  label: {
    ...typography.caption,
    fontWeight: "700",
  },
});
