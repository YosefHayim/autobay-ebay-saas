import { createClient } from "@supabase/supabase-js";

interface Database {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

export const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
