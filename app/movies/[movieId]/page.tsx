import getMoviebyID from '@/app/actions/getMovieDetails';
import MovieDetail from './components/MovieDetailNavbar';

import { Metadata } from 'next';

interface Iparams {
  params: { movieId: string };
}
export const generateMetadata = async ({
  params,
}: Iparams): Promise<Metadata> => {
  const movieDetails = await getMoviebyID(params);
  return new Promise((resolve) => {
    setTimeout(() => {
      const metadata: Metadata = {
        title: `Watching - ${movieDetails?.title}`,
      };
      resolve(metadata);
    }, 0);
  });
};

const Moviepage: React.FC<Iparams> = async ({ params }) => {
  const movieDetails = await getMoviebyID(params);

  return (
    <div>
      <MovieDetail data={movieDetails} />
    </div>
  );
};

export default Moviepage;
