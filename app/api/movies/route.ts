import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const API_KEY = process.env.OMDB_SECRET;
  const query = 'matrix';

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  )

  const movies = await response.json();

  return NextResponse.json(movies);
};
