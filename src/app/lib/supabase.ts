import { createClient } from "@supabase/supabase-js";

// 從環境變數中讀取 Supabase URL 和密鑰
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";

// 創建 Supabase 客戶端
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
