import { Movie } from '../types/movie';
import './MovieCard.css';
import { truncateText } from '../utils/truncateText';
import { getTrailerLink } from '../services/tmdb/getTrailerLink.ts';
import { getMistralResponse } from '../services/mistral/getMistralResponse';
import { useState} from 'react';
import SpoilerModal from './SpoilerModal';
import TrailerModal from './TrailerModal';
import { extractYearFromDate } from '../utils/extractYearFromDate.ts';

interface MovieCardProps {
  movie: Movie;
  onPlayClick: (link: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPlayClick }) => {
  const [spoilerMessage, setSpoilerMessage] = useState<string | null>(null);
  const [isSpoilerModalVisible, setIsSpoilerModalVisible] = useState(false);
  const [trailerLink, setTrailerLink] = useState<string | null>(null);
  const [isTrailerModalVisible, setIsTrailerModalVisible] = useState(false);

  const handlePlayClick = async () => {
    const link = await getTrailerLink(movie.id);
    if (link) {
      onPlayClick(link);
      setTrailerLink(link);
      setIsTrailerModalVisible(true);
    }
  };

  const handleSpoilerClick = async () => {
    try {
      const response = await getMistralResponse(movie.title, movie.release_date);
      setSpoilerMessage(response.response);
    } catch (error) {
      setSpoilerMessage('Failed to fetch spoiler. Please try again later.');
    }
    setIsSpoilerModalVisible(true);
  };

  const handleMouseLeave = () => {
    if (isSpoilerModalVisible) {
      setIsSpoilerModalVisible(false);
      setSpoilerMessage(null);
    }
  };

  return (
    <div className="movieCard" onMouseLeave={handleMouseLeave}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="movieCard__image"
      />
      <div className="movieCard__playIcon" onClick={handlePlayClick}>▶</div>
      <h2 className="movieCard__title">{truncateText(`${movie.title} (${extractYearFromDate(movie.release_date)})`, 30)}</h2>
      <p className="movieCard__overview">{movie.overview}</p>
      <button className="movieCard__button" onClick={handleSpoilerClick}>Spoiler</button>
      {isSpoilerModalVisible && (
        <SpoilerModal message={spoilerMessage} onClose={() => setIsSpoilerModalVisible(false)} />
      )}
      {isTrailerModalVisible && (
        <TrailerModal trailerLink={trailerLink} onClose={() => setIsTrailerModalVisible(false)} />
      )}
    </div>
  );
};

export default MovieCard;
