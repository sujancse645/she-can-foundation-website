import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, skills, availability, resume, message } = body;

    if (!name || !email || !skills || !availability) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const volunteer = await prisma.volunteer.create({
      data: { name, email, phone: phone || "", skills, availability, resume, message },
    });

    // Send confirmation to volunteer
    await sendEmail({
      to: email,
      subject: "Thank you for volunteering!",
      html: `
        <h2>Welcome to the Team, ${name}!</h2>
        <p>Thank you for expressing your interest in volunteering with us. We have received your application and will review it shortly.</p>
        <p>Your skills in <strong>${skills}</strong> will be a great addition.</p>
      `,
    });

    return NextResponse.json({ success: true, volunteer });
  } catch (error: any) {
    console.error("Volunteer API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
