import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    return NextResponse.json(randomMovies[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
