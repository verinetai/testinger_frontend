import { supabase } from "../services/supabase";

export type SubmitTestAnswer = {
  question_id: string;
  option_id: number;
};

export type SubmitTestRequest = {
  test_id: string;
  answers: SubmitTestAnswer[];
};

export type SubmitTestResponse = {
  score: number;
  total_questions: number;
  earned_points: number;
  total_points: number;
  level: number;
  role: string;
  promoted_to_creator: boolean;
};

export async function submitTest(payload: SubmitTestRequest) {
  if (!supabase) {
    throw new Error("Supabase is not configured");
  }

  const { data, error } = await supabase.functions.invoke<SubmitTestResponse>(
    "submit-test",
    { body: payload },
  );

  if (error) {
    throw error;
  }

  return data;
}
