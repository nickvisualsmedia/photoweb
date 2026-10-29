import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { transporter } from "@/lib/email";

export async function GET(
  req: Request,
  { params }: { params: { id: string; action: string } }
) {
  const { id, action } = params;
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Missing security authentication token", { status: 401 });
  }

  const booking = await db.booking.findUnique({
    where: { id },
  });

  if (!booking || booking.actionToken !== token) {
    return new Response("Invalid or expired authorization token", { status: 403 });
  }

  if (booking.tokenExpiresAt < new Date()) {
    return new Response("This booking verification link has expired", { status: 410 });
  }

  if (action === "accept") {
    await db.booking.update({
      where: { id },
      data: { status: "CONFIRMED" },
    });

    // Formátování data do čitelné české podoby
    const formattedDate = new Date(booking.requestedDate).toLocaleDateString("cs-CZ", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    // Notify client of confirmation
    await transporter.sendMail({
      from: `"Nick Visuals" <${process.env.SMTP_USER}>`,
      to: booking.clientEmail,
      subject: "Potvrzení termínu focení - Nick Visuals Media",
      html: `
        <div style="font-family: sans-serif; background: #0E1110; color: #F4F0EA; padding: 32px; border-radius: 8px;">
          <h2 style="color: #FFFFFF;">Váš termín byl úspěšně potvrzen</h2>
          <p>Dobrý den, ${booking.clientName},</p>
          <p>Váš termín pro automobilové focení vozu <strong>${booking.carModel}</strong> na balíček <strong>${booking.packageTier}</strong> byl potvrzen.</p>
          
          <div style="background: #14221C; border: 1px solid #2A3F35; padding: 16px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0; font-size: 16px; color: #F4F0EA;">
              📅 <strong>Rezervovaný termín:</strong> ${formattedDate} v ${booking.requestedTime || "14:00"}
            </p>
          </div>

          <p>Těším se na spolupráci. V případě dalších dotazů či koordinace lokace mi můžete odpovědět přímo na tento email.</p>
          <br>
          <p>S pozdravem,<br><strong>Nick Visuals Media</strong></p>
        </div>
      `,
    });

    return new Response("Booking has been successfully confirmed. Client notified.", { status: 200 });
  }

  if (action === "reject") {
    await db.booking.update({
      where: { id },
      data: { status: "REJECTED" },
    });

    // Polite notification to client
    await transporter.sendMail({
      from: `"Nick Visuals" <${process.env.SMTP_USER}>`,
      to: booking.clientEmail,
      subject: "Informace k rezervaci focení - Nick Visuals Media",
      html: `
        <div style="font-family: sans-serif; background: #0E1110; color: #F4F0EA; padding: 32px; border-radius: 8px;">
          <h2 style="color: #FFFFFF;">Informace o dostupnosti termínu</h2>
          <p>Dobrý den, ${booking.clientName},</p>
          <p>Bohužel vámi vybraný termín pro focení vozu <strong>${booking.carModel}</strong> je již plně obsazen nebo nedostupný.</p>
          <p>Prosím kontaktujte mě přímo pro nalezení alternativního dne, rád vám vyjdu vstříc.</p>
          <br>
          <p>S pozdravem,<br><strong>Nick Visuals Media</strong></p>
        </div>
      `,
    });

    return new Response("Booking marked as rejected. Polite notification sent to client.", { status: 200 });
  }

  return new Response("Invalid action parameter", { status: 400 });
}