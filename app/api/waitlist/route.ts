import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const emailSchema = z.string().trim().email().max(255);

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const parsed = emailSchema.safeParse(body.email);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email." }, { status: 422 });
  }

  const userEmail = parsed.data;

  try {
    const transporter = createTransporter();

    const year = new Date().getFullYear();
    const timeIST = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    await Promise.all([
      // 1. Thank-you email to the user
      transporter.sendMail({
        from: `"Evenzi" <${process.env.GMAIL_USER}>`,
        to: userEmail,
        replyTo: process.env.GMAIL_USER,
        subject: "You're on the Evenzi waitlist",
        text: `Hi there,\n\nThanks for joining the Evenzi waitlist! You'll be among the first to know when we launch — along with exclusive early-access perks.\n\nWhat Evenzi is building: a premium platform to capture, share and cherish memories from your most precious events — weddings, sangeets, birthdays and more.\n\nWe'll reach out at ${userEmail} the moment we go live.\n\n— The Evenzi Team\nevenzi.official@gmail.com\n\n© ${year} Evenzi`,
        html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;max-width:560px;width:100%;">
        <tr><td style="background:#E5092F;padding:32px 40px;">
          <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:2px;">EVENZI</p>
        </td></tr>
        <tr><td style="padding:40px;">
          <h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#1a1a1a;">You're on the list!</h1>
          <p style="margin:0 0 24px;font-size:15px;color:#555555;line-height:1.7;">
            Thanks for joining the Evenzi waitlist. You'll be among the first to know when we launch — along with exclusive early-access perks.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#fff5f5;border-left:4px solid #E5092F;border-radius:4px;padding:20px 24px;">
              <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#E5092F;">What we're building</p>
              <p style="margin:0;font-size:14px;color:#444444;line-height:1.7;">
                A premium platform to capture, share and cherish memories from your most precious events — weddings, sangeets, birthdays and more.
              </p>
            </td></tr>
          </table>
          <p style="margin:24px 0 0;font-size:14px;color:#888888;line-height:1.7;">
            We'll reach out at <strong style="color:#1a1a1a;">${userEmail}</strong> the moment we go live. No spam, ever.
          </p>
        </td></tr>
        <tr><td style="padding:24px 40px;border-top:1px solid #eeeeee;">
          <p style="margin:0;font-size:12px;color:#aaaaaa;">© ${year} Evenzi &nbsp;·&nbsp; <a href="mailto:evenzi.official@gmail.com" style="color:#E5092F;text-decoration:none;">evenzi.official@gmail.com</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      }),

      // 2. Notification email to Evenzi
      transporter.sendMail({
        from: `"Evenzi Waitlist" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `New waitlist signup: ${userEmail}`,
        text: `New waitlist signup\n\nEmail: ${userEmail}\nTime: ${timeIST} IST`,
        html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:32px;font-family:Arial,sans-serif;background:#f9f9f9;">
  <table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;padding:32px;max-width:480px;">
    <tr><td>
      <h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#1a1a1a;">New Waitlist Signup</h2>
      <p style="margin:0 0 12px;font-size:15px;color:#555;">A new user just joined the Evenzi waitlist:</p>
      <p style="margin:0 0 24px;font-size:20px;font-weight:700;color:#E5092F;background:#f5f5f5;padding:16px 20px;border-radius:8px;">${userEmail}</p>
      <p style="margin:0;font-size:13px;color:#999999;">Signed up at ${timeIST} IST</p>
    </td></tr>
  </table>
</body>
</html>`,
      }),
    ]);
  } catch (emailError) {
    console.error("Email sending failed:", emailError);
  }

  return NextResponse.json({ ok: true });
}
