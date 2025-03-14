// src/app/backend/route.ts

import { NextResponse } from 'next/server';
import { supabase } from '../lib/supabase';

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    // 儲存資料到 Supabase 資料表
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        { name, phone }
      ]);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: '資料已成功儲存', data });
  } catch (error) {
    console.error('儲存資料時出錯:', error);
    return NextResponse.json({ message: '儲存資料失敗', error: error.message }, { status: 500 });
  }
}
