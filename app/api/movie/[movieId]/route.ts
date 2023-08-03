import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

interface IdPrams {
  movieId?: string;
}
export async function GET(req: Request, { params }: { params: IdPrams }) {
  try {
    await serverAuth();
    const { movieId } = params;
    if (!movieId) throw new Error("Invalid Id");

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieId) throw new Error("Invalid Id");
    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 200 });
  }
}
