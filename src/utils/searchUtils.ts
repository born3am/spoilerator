import { searchMovies } from '../services/tmdb/searchMovies';
import { fetchMovies } from '../services/tmdb/fetchMovies';
import { API_TMDB_PARAMS, API_TMDB_NOW_ENDPOINT, API_TMDB_UPCOMING_ENDPOINT, API_TMDB_TOP_ENDPOINT } from '../services/tmdb/endpoints';
import { Movie } from '../types/movie';

export const handleSearch = async (query: string, setMovies: React.Dispatch<React.SetStateAction<Movie[]>>, selectedCategory: string) => {
  if (query) {
    const results = await searchMovies(query);
    setMovies(results);
  } else {
    let endpoint = API_TMDB_NOW_ENDPOINT;
    if (selectedCategory === 'now') {
      endpoint = API_TMDB_NOW_ENDPOINT;
    } else if (selectedCategory === 'upcoming') {
      endpoint = API_TMDB_UPCOMING_ENDPOINT;
    } else if (selectedCategory === 'top') {
      endpoint = API_TMDB_TOP_ENDPOINT;
    }
    fetchMovies(setMovies, endpoint, API_TMDB_PARAMS);
  }
};
