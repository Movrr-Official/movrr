import { NextResponse } from "next/server";

import { getServerHiringStatus } from "@/lib/hiring-status";

export async function GET() {
  try {
    const hiringStatus = await getServerHiringStatus();

    return NextResponse.json(hiringStatus);
  } catch (error) {
    console.error("Error fetching hiring status:", error);
    return NextResponse.json(
      { error: "Failed to fetch hiring status" },
      { status: 500 }
    );
  }
}
