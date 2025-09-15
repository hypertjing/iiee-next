import { decrypt } from "@/app/lib/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// 1. Specify protected and public routes
// const protectedRoutes = ["/cogs", "/chapter_share"];
const publicRoutes = ["/login", "/"];

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname;
    // const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    // 3. Decrypt the session from the cookie
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    // 4. Redirect to /login if the user is not authenticated
    if (isPublicRoute) {
        if (session?.userId) {
            return NextResponse.redirect(new URL("/cogs", req.nextUrl));
        }

        return NextResponse.next();
    }

    if (session?.userId) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", req.nextUrl));
}

// Routes Middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
