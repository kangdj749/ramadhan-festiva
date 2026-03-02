import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { getSheetsClient } from "@/lib/google-sheet-client";

export const runtime = "nodejs";

const RANGE = "registrations!A:N";

type RegistrationBody = {
  fullName: string;
  birthPlace?: string;
  birthDate?: string;
  school?: string;
  grade?: string;
  city?: string;
  phone: string;
  competitions: string[];
  tourGallery?: boolean;
  visitActivities?: string[];
};

export async function POST(req: Request) {
  try {
    const body: RegistrationBody = await req.json();

    const {
      fullName,
      birthPlace,
      birthDate,
      school,
      grade,
      city,
      phone,
    
      competitions,
      tourGallery,
      visitActivities,
    } = body;

    if (!fullName)
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });

    if (!phone)
      return NextResponse.json(
        { error: "Nomor telepon wajib diisi" },
        { status: 400 }
      );

    
    if (!competitions || competitions.length === 0)
      return NextResponse.json(
        { error: "Minimal pilih 1 lomba" },
        { status: 400 }
      );

    const id = nanoid(10);
    const createdAt = new Date().toISOString();

    const row: (string | number)[] = [
      id,
      createdAt,
      fullName,
      birthPlace ?? "",
      birthDate ? new Date(birthDate).toISOString() : "",
      school ?? "",
      grade ?? "",
      city ?? "",
      phone,
  
      JSON.stringify(competitions),
      tourGallery ? "Ya" : "Tidak",
      JSON.stringify(visitActivities ?? []),
    ];

    const sheets = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_LP!,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("REGISTRATION ERROR:", error);
    return NextResponse.json(
      { error: "Gagal simpan pendaftaran" },
      { status: 500 }
    );
  }
}