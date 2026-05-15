import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { supabase } from "./src/lib/supabase";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [appVersionCount, setAppVersionCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function checkBackend() {
      if (!supabase) {
        setError("Önce frontend/.env dosyasını oluşturun (.env.example kopyalayın)");
        setLoading(false);
        return;
      }

      const { count, error: queryError } = await supabase
        .from("app_versions")
        .select("*", { count: "exact", head: true });

      if (cancelled) {
        return;
      }

      if (queryError) {
        setError(queryError.message);
      } else {
        setAppVersionCount(count ?? 0);
      }

      setLoading(false);
    }

    checkBackend().catch((err: unknown) => {
      if (!cancelled) {
        setError(err instanceof Error ? err.message : "Bağlantı hatası");
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testinger</Text>
      <Text style={styles.subtitle}>Mobil frontend temeli (Expo + TypeScript)</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#2563eb" />
      ) : error ? (
        <Text style={styles.error}>Supabase: {error}</Text>
      ) : (
        <Text style={styles.ok}>
          Supabase bağlantısı OK — app_versions kayıt sayısı: {appVersionCount}
        </Text>
      )}

      <Text style={styles.hint}>
        Geliştirme: frontend/ klasöründen push → testinger_frontend repo
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  ok: {
    fontSize: 14,
    color: "#15803d",
    textAlign: "center",
  },
  error: {
    fontSize: 14,
    color: "#b91c1c",
    textAlign: "center",
  },
  hint: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 16,
  },
});
