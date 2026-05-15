import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TestCard } from "../components/TestCard";
import { fetchPublishedTests, type FeedTest } from "../services/tests";
import { colors, spacing, typography } from "../theme";

export function HomeScreen() {
  const [tests, setTests] = useState<FeedTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTests = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const data = await fetchPublishedTests();
      setTests(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Testler yüklenemedi");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadTests();
  }, [loadTests]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.accent} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Keşfet</Text>
      <Text style={styles.subheading}>Yayınlanmış testler</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <FlatList
        data={tests}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => loadTests(true)}
            tintColor={colors.accent}
          />
        }
        ListEmptyComponent={
          <Text style={styles.empty}>Henüz yayınlanmış test yok.</Text>
        }
        renderItem={({ item }) => (
          <TestCard test={item} onPress={() => undefined} />
        )}
      />
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
  center: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    ...typography.display,
    color: colors.textPrimary,
  },
  subheading: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  list: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  error: {
    ...typography.caption,
    color: colors.danger,
    marginBottom: spacing.sm,
  },
  empty: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
