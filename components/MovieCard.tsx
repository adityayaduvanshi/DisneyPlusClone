'use client';

import { Movie } from '@prisma/client';
import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';
import FavouriteButton from './FavouriteButton';
import { useRouter } from 'next/navigation';

interface MovieCardProps {
  movie: Movie;
  currentUser?: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, currentUser }) => {
  const router = useRouter();

  return (
    <div className="group bg-zinc-900  shadow-2xl col-span relative h-[28vw] sm:h-[12vw]">
      <Image
        src={movie.thumbnailUrl}
        alt="movie image"
        fill
        className="w-full group-hover:opacity-90 sm:group-hover:opacity-0 h-[12vw] object-cover cursor-pointer duration-75 transition shadow-2xl rounded-md delay-100 "
      />
      <div className="opacity-0 absolute top-0 transition  duration-200 z-10 invisible sm:visible delay-100 w-full scale-0  group-hover:scale-125  group-hover:-translate-y-10    group-hover:opacity-100">
        <img
          src={movie.thumbnailUrl}
          alt="movie image"
          className="cursor-pointer transition object-cover  duration  shadow-2xl h-[10vw] w-full  rounded-t-md"
        />
        <div className="z-10   bg-[#0d051c] p-2 lg:p-4 absolute w-full  transition  shadow-lg  rounded-b-md ">
          <div className="flex flex-row gap-3 items-center">
            {/* <div className=" cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white  rounded-full flex justify-center items-center transition hover:bg-neutral-300"></div> */}
            <div
              onClick={() => router.push(`/movies/${movie.id}`)}
              className="bg-white cursor-pointer px-0 lg:px-10 flex items-center justify-center hover:bg-gray-300 py-2 rounded-md"
            >
              <BsFillPlayFill className="w-4 h-4" />
              Watch Now
            </div>
            <FavouriteButton movieId={movie.id} currentUser={currentUser} />
          </div>
          <div className="flex text-sm text-gray-300 items-center flex-wrap gap-2 py-2 overflow-hidden">
            <p>2023</p>
            <span>&#8226;</span>
            <p>{movie.duration}</p>
            <span>&#8226;</span>
            <p>{movie.genre}</p>
            <span>&#8226;</span>
            <p>English</p>
          </div>
          <div className="flex">
            <p className="text-gray-500 font-light text-xs">
              {movie.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
