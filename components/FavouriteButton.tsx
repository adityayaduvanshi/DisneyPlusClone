'use client';

import React, { useCallback, useMemo } from 'react';
import axios from 'axios';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

// import useFavorite from '@/hooks/useFavourite';

import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface ButtonProps {
  movieId: string;
  currentUser: User;
}

const FavouriteButton: React.FC<ButtonProps> = ({ movieId, currentUser }) => {
  const router = useRouter();
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete('/api/favorites', { data: { movieId } });
    } else {
      response = await axios.post('/api/favorites', { movieId });
    }
    router.refresh();
  };

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-md flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  );
};

export default FavouriteButton;
