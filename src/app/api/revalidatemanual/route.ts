import { revalidateTag } from 'next/cache';
import { NextResponse, NextRequest } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: Request) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      const message = 'Revalidation disabled';
      return new NextResponse(JSON.stringify({ message }), { status: 405 });
    }

    const token = req.headers.get('Authorization');
    const body = await req.json();
    if (token !== `Bearer ${process.env.SANITY_REVALIDATE_SECRET}`) {
      const message = 'Invalid credentials';
      return new NextResponse(JSON.stringify({ message }), { status: 401 });
    }

    if (!body?._type) {
      const message = 'Bad Request';
      return new NextResponse(JSON.stringify({ message, body }), { status: 400 });
    }

    revalidateTag(body._type);
    console.log(`(manual) Revalidated sanity cache with tag: ${body._type}`);
    return new NextResponse(undefined, { status: 204 });
  } catch (e: any) {
    console.error(e);
    return new NextResponse(e.message, { status: 500 });
  }
}
