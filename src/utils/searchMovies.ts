import axios from 'axios';
import { Movie } from '../types/movie';
import { API_TMDB_PARAMS, API_TMDB_SEARCH_ENDPOINT } from '../constants/apiTmdb';

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(API_TMDB_SEARCH_ENDPOINT, {
      params: {
        ...API_TMDB_PARAMS,
        query,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
