import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function GET() {
    const count = await redis.get("visitCounter");
    return NextResponse.json({ count: count ?? 0 });
}