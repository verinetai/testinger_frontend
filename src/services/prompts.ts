import { supabase } from "./supabase";

export type Prompt = {
  id: string;
  category_id: string;
  body: string;
  prompt_type: string;
};

export async function fetchPromptsByCategory(
  categoryId: string,
): Promise<Prompt[]> {
  if (!supabase) {
    throw new Error("Supabase yapılandırılmadı");
  }

  const { data, error } = await supabase
    .from("prompts")
    .select("id, category_id, body, prompt_type")
    .eq("category_id", categoryId)
    .eq("is_active", true);

  if (error) {
    throw error;
  }

  return (data ?? []) as Prompt[];
}
