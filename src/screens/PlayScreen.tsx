import { useRoute, type RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SwipePromptDeck } from "../components/SwipePromptDeck";
import { fetchPromptsByCategory, type Prompt } from "../services/prompts";
import { colors, spacing, typography } from "../theme";
import type { RootTabParamList } from "../navigation/AppNavigator";

export function PlayScreen() {
  const route = useRoute<RouteProp<RootTabParamList, "Play">>();
  const params = route.params;
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(!!params?.categoryId);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params?.categoryId) {
      setLoading(false);
      return;
    }

    fetchPromptsByCategory(params.categoryId)
      .then(setPrompts)
      .catch((e: unknown) =>
        setError(e instanceof Error ? e.message : "Yüklenemedi"),
      )
      .finally(() => setLoading(false));
  }, [params?.categoryId]);

  if (!params?.categoryId) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Oyna</Text>
        <Text style={styles.hint}>
          Keşfet sekmesinden bir eğlence kategorisi seç (🔥 Kart).
        </Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.accent} size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SwipePromptDeck
        prompts={prompts}
        gradient={[params.gradientStart, params.gradientEnd]}
        categoryTitle={params.categoryTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  center: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  title: { ...typography.display, color: colors.textPrimary },
  hint: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: spacing.md,
  },
  error: { color: colors.danger, textAlign: "center" },
});
