import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Avatar } from "../components/Avatar";
import { CategoryChips } from "../components/CategoryChips";
import { DailyTestCard } from "../components/DailyTestCard";
import { PackageCard } from "../components/PackageCard";
import { PopularTestCard } from "../components/PopularTestCard";
import { SectionHeader } from "../components/SectionHeader";
import { UserProgressCard } from "../components/UserProgressCard";
import { mockCategories } from "../mocks/categories";
import { mockPackages } from "../mocks/packages";
import { mockDailyTest, mockPopularTests } from "../mocks/tests";
import { mockUser } from "../mocks/user";
import { colors, spacing, typography } from "../theme";
import type { CategoryKey } from "../theme";

export function DiscoverScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | undefined>(
    undefined,
  );

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {
            paddingTop: insets.top + spacing.md,
            paddingBottom: tabBarHeight + spacing.lg,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>
              Selam {mockUser.name}{" "}
              <Text style={styles.wave}>👋</Text>
            </Text>
            <Text style={styles.subgreeting}>
              Bugün hangi tarafını keşfediyoruz?
            </Text>
          </View>
          <View style={styles.headerActions}>
            <Pressable style={styles.iconButton} hitSlop={6}>
              <View style={styles.bell}>
                <View style={styles.bellTop} />
                <View style={styles.bellBody} />
                <View style={styles.notifDot} />
              </View>
            </Pressable>
            <Avatar
              initials={mockUser.initials}
              color={mockUser.avatarColor}
              size={42}
            />
          </View>
        </View>

        {/* Kullanıcı ilerleme kartı */}
        <View style={styles.block}>
          <UserProgressCard user={mockUser} />
        </View>

        {/* Günün testi */}
        <View style={styles.block}>
          <DailyTestCard test={mockDailyTest} />
        </View>

        {/* Kategori chip'leri */}
        <View style={styles.blockNoH}>
          <View style={styles.sectionPad}>
            <SectionHeader
              title="Kategoriler"
              subtitle="Bugün canının istediğini seç"
            />
          </View>
          <View style={{ paddingLeft: spacing.lg }}>
            <CategoryChips
              categories={mockCategories}
              selectedId={selectedCategory}
              onSelect={(id) =>
                setSelectedCategory((prev) => (prev === id ? undefined : id))
              }
            />
          </View>
        </View>

        {/* Bugün popüler */}
        <View style={styles.block}>
          <SectionHeader
            title="Bugün Popüler"
            subtitle="Herkesin paylaştığı testler"
            actionLabel="Tümü"
          />
          {mockPopularTests.map((test) => (
            <PopularTestCard key={test.id} test={test} />
          ))}
        </View>

        {/* Paketler */}
        <View style={styles.block}>
          <SectionHeader
            title="Yeni Açılan Paketler"
            subtitle="Level atladıkça yeni paketler açılır"
            actionLabel="Tümü"
          />
          {mockPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    ...typography.hero,
    color: colors.textPrimary,
  },
  wave: {
    fontSize: 26,
  },
  subgreeting: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: 4,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.backgroundElevated,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  bell: {
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  bellTop: {
    position: "absolute",
    top: 0,
    width: 4,
    height: 4,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    backgroundColor: colors.textPrimary,
  },
  bellBody: {
    position: "absolute",
    top: 3,
    width: 14,
    height: 12,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    backgroundColor: colors.textPrimary,
  },
  notifDot: {
    position: "absolute",
    top: -1,
    right: -1,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
    borderWidth: 1.5,
    borderColor: colors.backgroundElevated,
  },
  block: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  blockNoH: {
    marginBottom: spacing.xl,
  },
  sectionPad: {
    paddingHorizontal: spacing.lg,
  },
});
