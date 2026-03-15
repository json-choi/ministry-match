import { NextResponse } from "next/server";
import { redis, RESULTS_KEY } from "@/lib/redis";

export interface ResultEntry {
  id: string;
  name: string;
  ministryId: string;
  createdAt: number;
}

// GET - 전체 결과 조회
export async function GET() {
  const results = await redis.lrange<ResultEntry>(RESULTS_KEY, 0, -1);
  return NextResponse.json(results);
}

// POST - 결과 저장
export async function POST(req: Request) {
  const body = await req.json();
  const { name, ministryId } = body;

  if (!name || !ministryId) {
    return NextResponse.json({ error: "name, ministryId 필수" }, { status: 400 });
  }

  const entry: ResultEntry = {
    id: crypto.randomUUID(),
    name,
    ministryId,
    createdAt: Date.now(),
  };

  await redis.lpush(RESULTS_KEY, entry);

  return NextResponse.json(entry, { status: 201 });
}
