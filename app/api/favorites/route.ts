import { NextApiRequest, NextApiResponse } from 'next';
import { without } from 'lodash';

import prismadb from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { movieId } = body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return new Response('Something went wrong', {
        status: 404,
      });
    }
    if (!currentUser) {
      return new Response('Unauthorized', {
        status: 404,
      });
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
  } catch (error) {
    console.log(error);

    return new Response('Something went wrong', {
      status: 500,
    });
  }
}

export async function DELETE(req: Request, res: NextApiResponse) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { movieId } = body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!existingMovie) {
      throw new Error('Invalid ID');
    }
    if (!currentUser) {
      return new Response('Unauthorized', {
        status: 404,
      });
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
  } catch (error) {
    console.log(error);

    return new Response('Something went wrong', {
      status: 500,
    });
  }
}
