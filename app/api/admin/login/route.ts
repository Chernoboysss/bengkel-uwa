import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";
import jwt from "jsonwebtoken";

export async function POST(
  request: Request
) {
  const { username, password } =
    await request.json();

  const admin =
    await prisma.admin.findUnique({
      where: {
        username,
      },
    });

  if (!admin) {
    return NextResponse.json(
      {
        message: "Username tidak ditemukan",
      },
      {
        status: 401,
      }
    );
  }

  const valid =
    await verifyPassword(
      password,
      admin.password
    );

  if (!valid) {
    return NextResponse.json(
      {
        message: "Password salah",
      },
      {
        status: 401,
      }
    );
  }

  const token = jwt.sign(
    {
      id: admin.id,
      username: admin.username,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    }
  );

  const response =
    NextResponse.json({
      success: true,
      username: admin.username,
    });

  response.cookies.set(
    "admin_token",
    token,
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }
  );

  return response;
}