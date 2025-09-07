import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { phone, code } = await req.json();
  const otps = (globalThis.__VISH_OTPS || {});
  if (otps[phone] === code) {
    // In prod: create user record and return a token
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false }, { status: 400 });
}
