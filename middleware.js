import { NextResponse } from "next/server";

export async function middleware(request) {
  const accessToken = request.cookies.get("accessToken");

  const { pathname } = request.nextUrl;

  const publicRoutes = [
    "/login",
    "/register",
    "/verify",
    "/find-account",
    "/passwordd-reset",
  ];

  if (publicRoutes.includes(pathname) && accessToken) {
    return NextResponse.redirect(new URL("/profile", request.url));
  } else if (!accessToken && pathname === "/profile") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Define which routes the middleware should apply to
export const config = {
  matcher: [
    "/((?!api|_next/static|favicon.ico).*)", // Apply to all routes except API routes, static files, and /login
  ],
};
