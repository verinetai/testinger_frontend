import { supabase } from "./supabase";
import type { Tables } from "../types/database";

export type FeedTest = Pick<
  Tables<"tests">,
  "id" | "title" | "description" | "category" | "play_count" | "thumbnail_url"
>;

export async function fetchPublishedTests(): Promise<FeedTest[]> {
  if (!supabase) {
    throw new Error("Supabase yapılandırılmadı. .env dosyasını kontrol edin.");
  }

  const { data, error } = await supabase
    .from("tests")
    .select("id, title, description, category, play_count, thumbnail_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}
