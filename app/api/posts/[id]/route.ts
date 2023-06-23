import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function DELETE(req: Request, { params }: {
  params: {id: string}
}): Promise<NextResponse> {
  const { id }= params;

  const headersList = headers();
  const type = headersList.get('Content-Type');

  const cookiesList = cookies();
  const cookieRefresh = cookiesList.get('refreshToken')?.value;

  // logic delete a post in db
  // redirect('/blog');

  return NextResponse.json({ id, type, cookieRefresh });
}
