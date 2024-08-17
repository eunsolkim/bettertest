import { NextResponse } from "next/server";
import { updateUser } from "../../../../lib/users/update";
import { User } from "../../../../lib/users/types";

import pool from "../../../../lib/db";

export async function POST(request) {
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  const body = await request.json();
  const { id, name, brand, price, category, description, image_link, stock } =
    body;

  try {
    await updateUser(
      id,
      name,
      brand,
      price,
      category,
      description,
      image_link,
      stock
    );

    return NextResponse.json({ headers });
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Database query failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  return new NextResponse(null, { headers });
}
