import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
} from "react-native-reanimated";
import type { Prompt } from "../services/prompts";
import { colors, radii, spacing, typography } from "../theme";

type SwipePromptDeckProps = {
  prompts: Prompt[];
  gradient: readonly [string, string];
  categoryTitle: string;
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function SwipePromptDeck({
  prompts,
  gradient,
  categoryTitle,
}: SwipePromptDeckProps) {
  const deck = useMemo(() => shuffle(prompts), [prompts]);
  const [index, setIndex] = useState(0);

  const current = deck[index];
  const finished = index >= deck.length;

  const goNext = useCallback(() => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIndex((i) => i + 1);
  }, []);

  if (!current && !finished) {
    return (
      <View style={styles.center}>
        <Text style={styles.muted}>Kart yükleniyor...</Text>
      </View>
    );
  }

  if (finished) {
    return (
      <Animated.View entering={FadeIn} style={styles.center}>
        <Text style={styles.doneTitle}>Tur bitti! 🎉</Text>
        <Text style={styles.muted}>Yeni tur için yenile</Text>
        <Pressable style={styles.button} onPress={() => setIndex(0)}>
          <Text style={styles.buttonText}>Tekrar oyna</Text>
        </Pressable>
      </Animated.View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{categoryTitle}</Text>
      <Animated.View
        key={current.id}
        entering={SlideInRight.springify().damping(18)}
        exiting={FadeOut.duration(120)}
        style={styles.cardWrap}
      >
        <LinearGradient colors={gradient} style={styles.card}>
          <Text style={styles.type}>{current.prompt_type.toUpperCase()}</Text>
          <Text style={styles.body}>{current.body}</Text>
        </LinearGradient>
      </Animated.View>
      <View style={styles.actions}>
        <Pressable style={[styles.button, styles.skip]} onPress={goNext}>
          <Text style={styles.buttonText}>Geç</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={goNext}>
          <Text style={styles.buttonText}>Sonraki →</Text>
        </Pressable>
      </View>
      <Text style={styles.counter}>
        {index + 1} / {deck.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.md },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  category: {
    ...typography.label,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  cardWrap: { flex: 1, justifyContent: "center" },
  card: {
    minHeight: 320,
    borderRadius: radii.lg,
    padding: spacing.lg,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
  },
  type: {
    ...typography.label,
    color: "rgba(255,255,255,0.75)",
    marginBottom: spacing.md,
  },
  body: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 34,
  },
  actions: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  button: {
    flex: 1,
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
    alignItems: "center",
  },
  skip: { backgroundColor: colors.backgroundElevated },
  buttonText: {
    color: colors.textPrimary,
    fontWeight: "700",
    fontSize: 15,
  },
  counter: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: spacing.sm,
  },
  doneTitle: {
    ...typography.display,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  muted: { ...typography.body, color: colors.textSecondary },
});
