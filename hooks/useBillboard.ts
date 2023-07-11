import { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '@prisma/client';

// type Movie = {
//   id: string;
//   title: string;
//   description: string;
//   videoUrl: string;
//   thumbnailUrl: string;
//   genre: string;
//   duration: string;
// };

const useBillboard = () => {
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/movies');
        setMovieData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { movieData, loading, error };
};

export default useBillboard;
