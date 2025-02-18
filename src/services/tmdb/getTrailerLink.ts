import axios from 'axios';
import { BASE_URL, API_TMDB_PARAMS } from './endpoints';

export async function getTrailerLink(movieId: number): Promise<string | null> {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      params: {
        ...API_TMDB_PARAMS,
        language: 'en-US'
      }
    });

    const videos = response.data.results;
    interface Video {
  type: string;
  site: string;
  key: string;
}

const trailer = videos.find((video: Video) => video.type === 'Trailer' && video.site === 'YouTube');

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error('Error fetching trailer link:', error);
    return null;
  }
}
