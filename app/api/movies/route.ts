import { NextResponse } from 'next/server';

import prismaDb from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function GET() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const movieCount = await prismaDb.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);
  const randomMovies = await prismaDb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });

  return NextResponse.json(randomMovies[0]);
}
