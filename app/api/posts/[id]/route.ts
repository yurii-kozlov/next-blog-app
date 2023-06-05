import { NextResponse } from "next/server";
import { headers, cookies } from 'next/headers';
import { redirect } from "next/navigation";

export async function DELETE(req: Request, { params }: {
  params: {id: string}
}) {
  const { id }= params;

  const headersList = headers();
  const type = headersList.get('Content-Type');

  const cookiesList = cookies();
  const cookieRefresh = cookiesList.get('refreshToken')?.value;

  // logic delete a post in db
  // redirect('/blog');

  return NextResponse.json({ id, type, cookieRefresh });
}