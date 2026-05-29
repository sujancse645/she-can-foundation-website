import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: { name, email, phone: phone || "", subject: subject || "", message },
    });

    // Send email notification to admin
    await sendEmail({
      to: "admin@shecanfoundation.org", // Replace with real admin email later
      subject: `New Contact Submission: ${subject || "No Subject"}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Send auto-reply to user
    await sendEmail({
      to: email,
      subject: "Thank you for contacting us",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your message and our team will get back to you shortly.</p>
      `,
    });

    return NextResponse.json({ success: true, contact });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
