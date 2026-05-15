import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { isSupabaseConfigured } from "./src/services/supabase";
import { colors, spacing, typography } from "./src/theme";

export default function App() {
  if (!isSupabaseConfigured) {
    return (
      <View style={styles.missingEnv}>
        <Text style={styles.title}>Testinger</Text>
        <Text style={styles.message}>
          `.env` dosyası eksik. `frontend/.env.example` dosyasını kopyalayıp
          Supabase URL ve Anon Key değerlerini girin.
        </Text>
        <StatusBar style="light" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  missingEnv: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  title: {
    ...typography.display,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  message: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
