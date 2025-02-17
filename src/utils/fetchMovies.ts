import axios from 'axios';
import { Movie } from '../types/movie';

export const fetchMovies = async (
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>,
  endpoint: string,
  params: Record<string, any>
) => {
  try {
    const response = await axios.get(endpoint, { params });
    setMovies(response.data.results.slice(0, 10));
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
