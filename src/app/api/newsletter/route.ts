import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json({ error: "Already subscribed" }, { status: 400 });
    }

    const subscription = await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json({ success: true, subscription });
  } catch (error: any) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
