import { createClient } from 'redis';
import { NextResponse } from 'next/server';

const redis = createClient({
    url: process.env.REDIS_URL,
});

redis.on('error', (err) => console.error('Redis Client Error', err));

export const POST = async () => {
    try {
        await redis.connect();
        await redis.incr('visitCounter');
        await redis.disconnect();
        return new NextResponse(JSON.stringify({ message: 'Visit count incremented' }), { status: 200 });
    } catch (error) {
        console.error("Error incrementing visit count: ", error);
        return new NextResponse(JSON.stringify({ message: 'Error incrementing visit count' }), { status: 500 });
    }
};

export const GET = async () => {
    try {
        await redis.connect();
        const count = await redis.get('visitCounter');
        await redis.disconnect();
        return new NextResponse(JSON.stringify({ count: count ? parseInt(count, 10) : 0 }), { status: 200 });
    } catch (error) {
        console.error("Error fetching visit count: ", error);
        return new NextResponse(JSON.stringify({ message: 'Error fetching visit count' }), { status: 500 });
    }
};
