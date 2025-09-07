import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { phone } = await req.json();
  // For dev: store OTP in memory (not persistent)
  globalThis.__VISH_OTPS = globalThis.__VISH_OTPS || {};
  const code = '1234'; // DEV: replace with random generator + SMS provider
  globalThis.__VISH_OTPS[phone] = code;
  console.log(`[DEV] OTP for ${phone} = ${code}`);
  return NextResponse.json({ success: true });
}
