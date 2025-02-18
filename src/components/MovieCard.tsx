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
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="play-icon" onClick={handlePlayClick}>▶</div>
      <h2>{truncateText(movie.title, 18)}</h2>
      <p className="movie-card__year" >({extractYearFromReleaseDate(movie.release_date)})</p>
      <p className="movie-card__text">{truncateText(movie.overview)}</p>
      <button onClick={handleSpoilerClick}>Spoiler</button>
    </div>
  );
};

export default MovieCard;
