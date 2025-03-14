// src/app/lib/supabase.ts

import { createClient } from '@supabase/supabase-js';

// 從 .env 文件讀取 Supabase URL 和金鑰
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 創建 Supabase 客戶端實例
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
