import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, cameraCount, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Nama, email, dan nomor WhatsApp wajib diisi." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER || "noreply@samtek.id";
    const pass = process.env.SMTP_USER_PASSWORD || "#SamtekNoreplay282802";
    const sender = process.env.SENDER_EMAIL || "noreply@samtek.id";
    const recipient = process.env.RECIPIENT_EMAIL || "contact@samtek.id";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"SAMTEK Demo Request" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: `[Permintaan Demo Baru] ${name} - ${company || "Perorangan / Bisnis"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #06090A; border-bottom: 2px solid #0C6791; padding-bottom: 10px; margin-top: 0;">
            Permintaan Live Demo SAMTEK VMS
          </h2>
          <p style="color: #4b5563; font-size: 14px;">Ada permintaan jadwal live assessment dan demo baru dari website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f3f4f6; width: 35%; font-weight: bold;">Nama Lengkap</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">Perusahaan / Organisasi</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #ffffff;">${company || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #ffffff;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">WhatsApp / Telepon</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #ffffff;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">Estimasi Kamera</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #ffffff;">${cameraCount || "-"} channel</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold; vertical-align: top;">Kebutuhan / Catatan</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #ffffff; white-space: pre-wrap;">${message || "-"}</td>
            </tr>
          </table>

          <div style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 24px;">
            Dikirim secara otomatis melalui sistem landing page SAMTEK (PT Safanah Alvan Maksima).
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email berhasil terkirim." });
  } catch (error: any) {
    console.error("Error sending demo request email:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal mengirim email. Silakan coba lagi nanti." },
      { status: 500 }
    );
  }
}

