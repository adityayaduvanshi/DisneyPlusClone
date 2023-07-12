import { without } from 'lodash';

import prismadb from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();
  const body = await req.json();
  const { movieId } = body;

  const existingMovie = await prismadb.movie.findUnique({
    where: {
      id: movieId,
    },
  });

  if (!existingMovie) {
    return NextResponse.error();
  }
  if (!currentUser) {
    return NextResponse.error();
  }

  const user = await prismadb.user.update({
    where: {
      email: currentUser.email || '',
    },
    data: {
      favoriteIds: {
        push: movieId,
      },
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(req: Request) {
  const currentUser = await getCurrentUser();
  const body = await req.json();
  const { movieId } = body;

  const existingMovie = await prismadb.movie.findUnique({
    where: {
      id: movieId,
    },
  });
  if (!existingMovie) {
    return NextResponse.error();
  }
  if (!currentUser) {
    return NextResponse.error();
  }
  const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

  const updatedUser = await prismadb.user.update({
    where: {
      email: currentUser.email || '',
    },
    data: {
      favoriteIds: updatedFavoriteIds,
    },
  });
  return NextResponse.json(updatedUser);
}
