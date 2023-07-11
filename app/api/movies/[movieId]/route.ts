import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

interface IParams {
  movieId?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { movieId } = params;

  const movieDetails = await prisma.movie.findUnique({
    where: { id: movieId },
  });
  return NextResponse.json(movieDetails);
}
