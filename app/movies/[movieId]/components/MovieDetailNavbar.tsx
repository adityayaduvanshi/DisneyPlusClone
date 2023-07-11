'use client';

import { Movie } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface MovieDetailProps {
  data: Movie | null;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          className="text-white cursor-pointer"
          onClick={() => router.back()}
          size={40}
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video
        controls
        autoPlay
        className="h-full w-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default MovieDetail;
