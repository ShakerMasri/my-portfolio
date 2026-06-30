import { NextResponse, type NextRequest } from "next/server";

const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
