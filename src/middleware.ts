import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export default async function middleware(request: NextRequest) {
  const session = await auth();

  // if (!session?.user)
  //   return NextResponse.redirect(`${request.nextUrl.origin}/login`);

  // return NextResponse.redirect(`${request.nextUrl.origin}/`);
}

// export const config = {
//   matcher: ["/:type/new"],
// };
