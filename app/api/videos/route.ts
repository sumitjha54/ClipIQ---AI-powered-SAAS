/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (_) {
    // Or: console.error("Error fetching videos", error); if you want logging
    return NextResponse.json({ error: "Error fetching videos" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
