import { NextResponse } from 'next/server';
import supabase from '../lib/supabase';

// 處理 POST 請求，將資料保存到 Supabase
export async function POST(request: Request) {
  const { name, phone } = await request.json();

  // 將資料插入到 Supabase 資料庫
  const { data, error } = await supabase
    .from('your_table_name') // 請替換為你的資料表名稱
    .insert([
      { name, phone }
    ]);

  if (error) {
    return NextResponse.json({ message: '提交失敗，請再試一次！' }, { status: 500 });
  }

  return NextResponse.json({ message: '資料已提交！' }, { status: 200 });
}
