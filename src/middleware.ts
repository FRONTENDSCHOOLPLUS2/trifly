import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export default async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session?.user)
    return NextResponse.redirect(`${request.nextUrl.origin}/login`);
}

export const config = {
  matcher: ["/order/:path*", "/footprint/:path*", "/reservation/:path*"],
};
