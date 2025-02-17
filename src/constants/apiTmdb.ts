export const API_TMDB_NOW_ENDPOINT = 'https://api.themoviedb.org/3/movie/now_playing';
export const API_TMDB_UPCOMING_ENDPOINT = 'https://api.themoviedb.org/3/movie/upcoming';
export const API_TMDB_TOP_ENDPOINT = 'https://api.themoviedb.org/3/movie/top_rated';
export const API_TMDB_PARAMS = {
  api_key: import.meta.env.VITE_TMDB_API_KEY,
  language: 'en-US',
  page: 1
};
