import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { donorName, amount } = await req.json();

    if (!donorName || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real application, you would integrate Stripe or Razorpay here
    // and create a payment intent/order before saving to DB.
    // For now, we simulate a successful payment initialization.

    const donation = await prisma.donation.create({
      data: {
        donorName,
        amount: parseFloat(amount),
        paymentStatus: "completed", // Simulated
      },
    });

    return NextResponse.json({ success: true, donation });
  } catch (error: any) {
    console.error("Donation API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
