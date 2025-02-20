import { API_TMDB_NOW_ENDPOINT, API_TMDB_UPCOMING_ENDPOINT, API_TMDB_TOP_ENDPOINT } from '../services/tmdb/endpoints';

export const getCategoryEndpoint = (selectedCategory: string) => {
  switch (selectedCategory) {
    case 'now':
      return API_TMDB_NOW_ENDPOINT;
    case 'upcoming':
      return API_TMDB_UPCOMING_ENDPOINT;
    case 'top':
      return API_TMDB_TOP_ENDPOINT;
    default:
      return API_TMDB_NOW_ENDPOINT;
  }
};
