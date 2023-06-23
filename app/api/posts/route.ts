import { NextResponse } from 'next/server';
import { posts } from 'app/api/posts/posts';

export async function GET(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentPosts);
};

export async function POST(req: Request): Promise<NextResponse> {
  const body = await req.json();

  return NextResponse.json({ body });
}
