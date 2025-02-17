export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_TMDB_POPULAR_ENDPOINT = `${BASE_URL}/movie/popular`;
export const API_TMDB_NOW_ENDPOINT = `${BASE_URL}/movie/now_playing`;
export const API_TMDB_UPCOMING_ENDPOINT = `${BASE_URL}/movie/upcoming`;
export const API_TMDB_TOP_ENDPOINT = `${BASE_URL}/movie/top_rated`;
export const API_TMDB_PARAMS = {
  api_key: import.meta.env.VITE_TMDB_API_KEY,
  language: 'en-US',
  page: 1
};
