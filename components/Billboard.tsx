'use client';

import useBillboard from '@/hooks/useBillboard';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from './PlayButton';

const Billboard = () => {
  const { movieData } = useBillboard();

  return (
    <div className="relative h-[46.25vw]  ">
      <video
        className="w-full h-[46.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={movieData?.thumbnailUrl}
        src={movieData?.videoUrl}
      ></video>
      <div className="absolute  top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className=" text-xl md:text-5xl font-bold lg:text-6xl  drop-shadow-xl h-full w-[50%]  text-white">
          {movieData?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movieData?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={movieData?.id} />
          <button
            // onClick={handleOpenModal}
            className="
            bg-blue-800
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <AiOutlineInfoCircle className="w-4 md:w-7 mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
