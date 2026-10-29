import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Načteme z databáze všechny schválené rezervace
    const confirmedBookings = await db.booking.findMany({
      where: {
        status: "CONFIRMED", // Ztmaví pouze schválené dny (případně uprav podle potřeby)
      },
      select: {
        requestedDate: true,
      },
    });

    // Převedeme data na pole řetězců ve formátu YYYY-MM-DD pro snadnější porovnání
    const occupiedDates = confirmedBookings.map(
      (b) => b.requestedDate.toISOString().split("T")[0]
    );

    return NextResponse.json({ occupiedDates });
  } catch (error) {
    console.error("Error fetching occupied dates:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}