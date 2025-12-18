import { NextResponse } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer";

type ApplicantForm = {
  jobType: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

// --- Validation Logic ---

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function validateApplicantForm(
  obj: unknown
):
  | { ok: true; data: ApplicantForm }
  | { ok: false; errors: Record<string, string> } {
  if (typeof obj !== "object" || obj === null) {
    return { ok: false, errors: { _global: "Invalid payload." } };
  }
  const anyObj = obj as Record<string, unknown>;

  const jobType = anyObj.jobType;
  const fullName = anyObj.fullName;
  const email = anyObj.email;
  const phone = anyObj.phone;
  const message = anyObj.message;

  const errors: Record<string, string> = {};

  if (!isNonEmptyString(jobType)) errors.jobType = "Job type is required.";

  if (!isNonEmptyString(fullName)) errors.fullName = "Full name is required.";
  else if (fullName.trim().length > 30)
    errors.fullName = "Full name is too long (max 30 chars).";

  if (!isNonEmptyString(email)) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    errors.email = "Invalid email format.";

  if (!isNonEmptyString(phone)) errors.phone = "Phone is required.";
  else if (!/^09\d{9}$/.test((phone as string).trim()))
    errors.phone = "Phone must be 09XXXXXXXXX (11 digits).";

  if (!isNonEmptyString(message)) errors.message = "Message is required.";
  else {
    const wc = (message as string).trim().split(/\s+/).filter(Boolean).length;
    if (wc > 250) errors.message = "Message too long (max 250 words).";
    if ((message as string).length > 1000)
      errors.message = "Message too long (max 1000 characters).";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      jobType: (jobType as string).trim(),
      fullName: (fullName as string).trim(),
      email: (email as string).trim(),
      phone: (phone as string).trim(),
      message: (message as string).trim(),
    },
  };
}

function getErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    return err.response?.data?.message || err.message || "Request failed.";
  }
  if (err instanceof Error) return err.message;
  try {
    return String(err);
  } catch {
    return "Unknown error";
  }
}

// --- API Handler ---

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { ok: false, message: "Invalid request body." },
        { status: 400 }
      );
    }
    const bodyObj = body as Record<string, unknown>;
    const captchaTokenRaw = bodyObj["captchaToken"];
    const captchaToken = isNonEmptyString(captchaTokenRaw)
      ? captchaTokenRaw
      : undefined;

    const { captchaToken: _ct, ...formRest } = bodyObj;

    // Validate Fields
    const validated = validateApplicantForm(formRest);
    if (!validated.ok) {
      return NextResponse.json(
        { ok: false, errors: validated.errors, message: "Validation failed." },
        { status: 400 }
      );
    }
    const form = validated.data;

    // Verify reCAPTCHA
    const secretKey = process.env.RECAPTCHA_GOOGLE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { ok: false, message: "Server configuration error." },
        { status: 500 }
      );
    }
    if (!captchaToken) {
      return NextResponse.json(
        {
          ok: false,
          message: "Missing captcha token",
          errors: { recaptcha: "Missing captcha token." },
        },
        { status: 400 }
      );
    }

    const verifyRes = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret: secretKey,
        response: captchaToken,
      }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (!verifyRes.data?.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "reCAPTCHA verification failed",
          errors: { recaptcha: "reCAPTCHA verification failed." },
        },
        { status: 400 }
      );
    }

    // Send Email
    const mailerUser = process.env.NODEMAILER_EMAIL;
    const mailerPass = process.env.NODEMAILER_PASSWORD;
    if (!mailerUser || !mailerPass) {
      return NextResponse.json(
        { ok: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: mailerUser, pass: mailerPass },
    });

    const subject = `Job Application: ${form.jobType} — ${form.fullName}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
          .header { background-color: #ffffff; padding: 30px 40px; border-bottom: 4px solid #8B8B6F; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 700; color: #1f2937; letter-spacing: -0.5px; }
          .header p { margin: 8px 0 0; font-size: 14px; color: #6b7280; }
          .content { padding: 40px; }
          .data-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f3f4f6; }
          .message-box { margin-top: 30px; background-color: #f9fafb; padding: 24px; border-radius: 8px; border-left: 4px solid #8B8B6F; }
          .message-label { font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; margin-bottom: 12px; display: block; }
          .message-body { color: #374151; line-height: 1.6; white-space: pre-wrap; font-size: 15px; }
          .footer { background-color: #f9fafb; padding: 20px 40px; text-align: center; font-size: 12px; color: #9ca3af; }
          table { width: 100%; border-collapse: collapse; }
          td { padding: 12px 0; border-bottom: 1px solid #f3f4f6; vertical-align: top; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Job Application</h1>
            <p>PB+Ocuaman Construction Careers</p>
          </div>
          
          <div class="content">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="left" style="color:#6b7280; font-weight:600; font-size:14px; text-transform:uppercase;">Position</td>
                <td align="right" style="color:#111827; font-weight:600; font-size:15px; text-transform:uppercase;">${escapeHtml(
                  form.jobType
                )}</td>
              </tr>
              <tr>
                <td align="left" style="color:#6b7280; font-weight:600; font-size:14px; text-transform:uppercase;">Full Name</td>
                <td align="right" style="color:#111827; font-weight:500; font-size:15px;">${escapeHtml(
                  form.fullName
                )}</td>
              </tr>
              <tr>
                <td align="left" style="color:#6b7280; font-weight:600; font-size:14px; text-transform:uppercase;">Email</td>
                <td align="right" style="font-size:15px;">
                  <a href="mailto:${escapeHtml(
                    form.email
                  )}" style="color:#8B8B6F; text-decoration:none; font-weight:500;">${escapeHtml(
      form.email
    )}</a>
                </td>
              </tr>
              <tr>
                <td align="left" style="color:#6b7280; font-weight:600; font-size:14px; text-transform:uppercase;">Phone</td>
                <td align="right" style="color:#111827; font-weight:500; font-size:15px;">${escapeHtml(
                  form.phone
                )}</td>
              </tr>
            </table>

            <div class="message-box">
              <span class="message-label">About the Applicant</span>
              <div class="message-body">${escapeHtml(form.message)}</div>
            </div>
          </div>

          <div class="footer">
            Received on ${new Date().toLocaleString("en-US", {
              timeZone: "Asia/Manila",
            })}
          </div>
        </div>
      </body>
      </html>
    `;

    const text = `
New Job Application: ${form.jobType}
------------------------------------
Name:    ${form.fullName}
Email:   ${form.email}
Phone:   ${form.phone}

Message:
${form.message}
    `;

    await transporter.sendMail({
      from: `"PB+Ocuaman Careers" <${mailerUser}>`,
      to: mailerUser,
      replyTo: form.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Applicant API error:", err);
    const msg = getErrorMessage(err);
    return NextResponse.json({ ok: false, message: msg }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
