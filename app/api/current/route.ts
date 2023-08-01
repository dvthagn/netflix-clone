import prismadb from "@/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";
import serverAuth from "@/lib/serverAuth";

export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth(req);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
