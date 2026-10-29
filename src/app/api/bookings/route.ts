import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { transporter, ADMIN_EMAIL } from "@/lib/email";
import { addDays } from "date-fns";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      clientName,
      clientEmail,
      clientPhone,
      carModel,
      requestedDate,
      requestedTime,
      packageTier,
      userNotes,
    } = body;

    if (!clientName || !clientEmail || !clientPhone || !carModel || !requestedDate || !packageTier) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const timeSlot = requestedTime || "14:00";

    // 1. KROK: ZKONTROLUJEME, ZDA JIŽ NEEXISTUJE REZERVACE NA STEJNÉ DATUM A ČAS
    const existingBooking = await db.booking.findFirst({
      where: {
        requestedDate: new Date(requestedDate),
        requestedTime: timeSlot,
        // Můžeš případně ošetřit, aby se nepočítaly ty, které už byly zamítnuté:
        status: { not: "REJECTED" }, 
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "Tento termín a čas je již bohužel obsazen. Vyberte prosím jiný." },
        { status: 400 }
      );
    }

    // 2. KROK: Pokud je volno, vytvoříme rezervaci v databázi
    const booking = await db.booking.create({
      data: {
        clientName,
        clientEmail,
        clientPhone,
        carModel,
        requestedDate: new Date(requestedDate),
        requestedTime: timeSlot,
        packageTier,
        userNotes: userNotes || "",
        status: "PENDING",
        tokenExpiresAt: addDays(new Date(), 7),
      },
    });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const acceptLink = `${appUrl}/api/bookings/${booking.id}/accept?token=${booking.actionToken}`;
    const rejectLink = `${appUrl}/api/bookings/${booking.id}/reject?token=${booking.actionToken}`;

    // Send action dispatch email to Nick Visuals Admin
    await transporter.sendMail({
      from: `"Nick Visuals Booking" <${process.env.SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: `[Nová Rezervace] ${clientName} - ${carModel} (${packageTier})`,
      html: `
        <div style="font-family: sans-serif; background: #0E1110; color: #F4F0EA; padding: 32px; border-radius: 8px;">
          <h2 style="color: #FFFFFF; font-size: 22px; margin-bottom: 20px;">Nová žádost o automobilové focení</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr><td style="padding: 8px 0; color: #8C694F;">Klient:</td><td><strong>${clientName}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #8C694F;">Email:</td><td><a href="mailto:${clientEmail}" style="color: #F4F0EA;">${clientEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #8C694F;">Telefon:</td><td>${clientPhone}</td></tr>
            <tr><td style="padding: 8px 0; color: #8C694F;">Vozidlo:</td><td>${carModel}</td></tr>
            <tr><td style="padding: 8px 0; color: #8C694F;">Balíček:</td><td>${packageTier}</td></tr>
            <tr><td style="padding: 8px 0; color: #8C694F;">Požadovaný termín:</td><td>${requestedDate} v ${timeSlot}</td></tr>
            <tr><td style="padding: 8px 0; color: #8C694F;">Poznámka:</td><td>${userNotes || "Bez poznámky"}</td></tr>
          </table>
          
          <div style="display: flex; gap: 16px; margin-top: 24px;">
            <a href="${acceptLink}" style="background-color: #14221C; color: #FFFFFF; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; border: 1px solid #2A3F35; margin-right: 12px; display: inline-block;">[ Potvrdit Rezervaci ]</a>
            <a href="${rejectLink}" style="background-color: #4A3525; color: #FFFFFF; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">[ Odmítnout ]</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, bookingId: booking.id }, { status: 201 });
  } catch (err: unknown) {
    console.error("Booking submission error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}