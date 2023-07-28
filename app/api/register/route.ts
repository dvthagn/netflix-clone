import bcrypt from "bcrypt";

import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface RegisterBody {
  email: string;
  name: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const body: RegisterBody = await req.json();

    const userRegister = await prismadb.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userRegister) {
      return NextResponse.json({ message: "Email taken" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(body.password, 12);

    const user = await prismadb.user.create({
      data: {
        email: body.email,
        name: body.name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
