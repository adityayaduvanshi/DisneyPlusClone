import prismaDb from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

export default async function getFavourite() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }
    const favourites = await prismaDb.movie.findMany({
      where: { id: { in: [...(currentUser.favoriteIds || [])] } },
    });

    const safeFavourite = favourites.map((movie) => ({ ...movie }));

    return safeFavourite;
  } catch (error: any) {
    throw new Error();
  }
}
