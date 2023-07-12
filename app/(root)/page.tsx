import { redirect } from 'next/navigation';
import getCurrentUser from '.././actions/getCurrentUser';

import prismadb from '@/app/libs/prismadb';

import Billboard from '@/components/Billboard';
import Viewers from '@/components/Viewers';
import MovieList from '@/components/MovieList';
import getFavourite from '../actions/getFavourite';

const HomePage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect('/auth');
  }
  const movies = await prismadb.movie.findMany();
  const favourite = await getFavourite();
  return (
    <div className="pt-16 pb-40 bg-[url('/images/home-background.png')] bg-no-repeat bg-fixed bg-cover">
      <Billboard />
      <Viewers />
      <MovieList data={movies} title="Trending Now" currentUser={currentUser} />
      <MovieList data={favourite} title="Your List" currentUser={currentUser} />
    </div>
  );
};
export default HomePage;
