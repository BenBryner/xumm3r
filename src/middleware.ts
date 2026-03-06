import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSCODE_COOKIE = "xumm3r_gate";

function isAllowedPath(pathname: string) {
  return (
    pathname === "/passcode" ||
    pathname === "/api/unlock" ||
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isAllowedPath(pathname)) {
    return NextResponse.next();
  }

  const passCookie = request.cookies.get(PASSCODE_COOKIE)?.value;
  if (passCookie === "ok") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/passcode";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
