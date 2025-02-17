import axios from 'axios';
import { BASE_URL, API_TMDB_PARAMS } from '../constants/apiTmdb';

export async function getTrailerLink(movieId: number): Promise<string | null> {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      params: {
        ...API_TMDB_PARAMS,
        language: 'en-US'
      }
    });

    const videos = response.data.results;
    const trailer = videos.find((video: any) => video.type === 'Trailer' && video.site === 'YouTube');

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error('Error fetching trailer link:', error);
    return null;
  }
}
