import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const studentName = String(body.studentName || "").trim();
  const parentName = String(body.parentName || "").trim();
  const phone = String(body.phone || "").trim();

  if (!studentName || !parentName || !phone) {
    return NextResponse.json(
      { error: "Student name, parent name, and phone are required." },
      { status: 400 }
    );
  }

  const lead = await prisma.lead.create({
    data: {
      studentName,
      parentName,
      phone,
      age: body.age ? String(body.age) : null,
      school: body.school ? String(body.school) : null,
      email: body.email ? String(body.email) : null,
      experience: body.experience ? String(body.experience) : null,
      preferredBatch: body.preferredBatch ? String(body.preferredBatch) : null,
      mode: body.mode ? String(body.mode) : null,
      source: body.source ? String(body.source) : "unknown",
    },
  });

  return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
}
