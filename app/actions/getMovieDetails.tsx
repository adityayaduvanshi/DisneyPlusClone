import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

interface IParams {
  movieId?: string;
}
export default async function getMoviebyID(params: IParams) {
  try {
    const { movieId } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error('User not found');
    }
    const moviebyId = await prisma.movie.findUnique({ where: { id: movieId } });

    return moviebyId;
  } catch (error: any) {
    throw new Error();
  }
}
