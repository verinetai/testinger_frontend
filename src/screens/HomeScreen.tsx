import { useNavigation } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { TestCard } from "../components/TestCard";
import type { RootTabParamList } from "../navigation/AppNavigator";
import { fetchCategories, type Category } from "../services/categories";
import { fetchPublishedTests, type FeedTest } from "../services/tests";
import { colors, spacing, typography } from "../theme";

export function HomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [tests, setTests] = useState<FeedTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);
    try {
      const [cats, feed] = await Promise.all([
        fetchCategories(),
        fetchPublishedTests(),
      ]);
      setCategories(cats);
      setTests(feed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Veri yüklenemedi");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const onCategoryPress = (cat: Category) => {
    if (cat.content_format === "test") {
      return;
    }
    navigation.navigate("Play", {
      categoryId: cat.id,
      categoryTitle: cat.title,
      gradientStart: cat.gradient_start,
      gradientEnd: cat.gradient_end,
    });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.accent} />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => load(true)}
          tintColor={colors.accent}
        />
      }
    >
      <Text style={styles.heading}>Testinger</Text>
      <Text style={styles.subheading}>Oyna · Sor · Güldür</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Text style={styles.section}>Kategoriler</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.catRow}
      >
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            category={item}
            onPress={() => onCategoryPress(item)}
          />
        ))}
      </ScrollView>

      <Text style={styles.section}>Bilgi testleri</Text>
      {tests.length === 0 ? (
        <Text style={styles.empty}>Henüz test yok.</Text>
      ) : (
        tests.map((test) => <TestCard key={test.id} test={test} />)
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  center: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    ...typography.display,
    color: colors.textPrimary,
    fontSize: 32,
  },
  subheading: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  section: {
    ...typography.label,
    color: colors.textMuted,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  catRow: { gap: spacing.sm, paddingBottom: spacing.sm },
  error: { color: colors.danger, marginBottom: spacing.sm },
  empty: { color: colors.textMuted, ...typography.body },
});
