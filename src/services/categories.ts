import { supabase } from "./supabase";

export type Category = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  content_format: "test" | "card" | "mixed";
  intensity: "chill" | "fun" | "hot";
  icon_emoji: string;
  gradient_start: string;
  gradient_end: string;
  sort_order: number;
};

export async function fetchCategories(): Promise<Category[]> {
  if (!supabase) {
    throw new Error("Supabase yapılandırılmadı");
  }

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []) as Category[];
}
