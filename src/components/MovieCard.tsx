import { Movie } from '../types/movie';
import './MovieCard.css';
import { truncateText } from '../utils/truncateText';
import { getTrailerLink } from '../utils/getTrailerLink';
import { extractYearFromReleaseDate } from '../utils/extractYearFromReleaseDate';

interface MovieCardProps {
  movie: Movie;
  onPlayClick: (link: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPlayClick }) => {

  const handlePlayClick = async () => {
    const link = await getTrailerLink(movie.id);
    if (link) {
      onPlayClick(link);
    }
  };

  const handleSpoilerClick = () => {
    // Implement spoiler button functionality here
  };

  return (
<div className="movieCard">
  <img
    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
    alt={movie.title}
    className="movieCard__image"
  />
  <div className="movieCard__playIcon" onClick={handlePlayClick}>▶</div>
  <h2 className="movieCard__title">{truncateText(movie.title, 18)}</h2>
  <p className="movieCard__releaseDate">Release Date: {extractYearFromReleaseDate(movie.release_date)}</p>
  <p className="movieCard__overview">{truncateText(movie.overview)}</p>
  <button className="movieCard__button" onClick={handleSpoilerClick}>Spoiler</button>
</div>
  );
};

export default MovieCard;
