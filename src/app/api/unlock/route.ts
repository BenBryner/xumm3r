import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSCODE = "cryoffear";
const PASSCODE_COOKIE = "xumm3r_gate";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const passcode = String(formData.get("passcode") ?? "");

  if (passcode !== PASSCODE) {
    return NextResponse.redirect(new URL("/passcode?error=1", request.url));
  }

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set({
    name: PASSCODE_COOKIE,
    value: "ok",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/"
  });

  return response;
}
