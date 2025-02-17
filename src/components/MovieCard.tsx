import React from 'react';
import { Movie } from '../types/movie';
import './MovieCard.css';
import { truncateText } from '../utils/truncateText';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const handleSpoilerClick = () => {
    // Implement spoiler button functionality here
  };


  return (
    <div className="movie-card">
        <div>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <h2>{truncateText(movie.title,18)}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>{truncateText(movie.overview)}</p>
          <button onClick={handleSpoilerClick}>Spoiler</button>
        </div>
    </div>
  );
};


export default MovieCard;
