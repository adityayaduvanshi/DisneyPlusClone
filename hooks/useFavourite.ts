import { useState } from 'react';
import axios from 'axios';

const useAddMovieToFavorites = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const addMovieToFavorites = async (movieId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/favorites', {
        data: { movieId },
      });
      if (response.data.error) {
        setError(response.data.error);
        setSuccess(false);
      } else {
        setSuccess(true);
      }
    } catch (error) {
      setError('Something went wrong');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, addMovieToFavorites };
};

export default useAddMovieToFavorites;
