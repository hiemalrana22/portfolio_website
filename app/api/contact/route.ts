import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json({ error: "Message too long." }, { status: 400 });
    }

    // Send via Resend if configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "ranahiemal@gmail.com",
        replyTo: email,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #09090b; color: #fafafa; border-radius: 12px;">
            <h2 style="margin: 0 0 24px; font-size: 20px; color: #6366f1;">New Portfolio Contact</h2>
            <div style="margin-bottom: 16px;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">From</p>
              <p style="margin: 0; color: #fafafa;">${name} &lt;${email}&gt;</p>
            </div>
            <div>
              <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; color: #a1a1aa; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      });

      if (error) {
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
      }
    } else {
      // Log for development without Resend
      console.log("[Contact Form]", { name, email, message });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
