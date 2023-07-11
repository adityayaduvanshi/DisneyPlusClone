import { Movie } from '@prisma/client';
import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';

interface MovieListProps {
  // data: Record<string, any>[];
  data: Movie[];
  title: string;
  currentUser: any;
}

const MovieList: React.FC<MovieListProps> = ({ data, title, currentUser }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className=" px-10 md:px-20 space-y-8 mt-10">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {data.map((item) => (
            <MovieCard currentUser={currentUser} key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
