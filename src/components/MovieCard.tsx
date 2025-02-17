import React, { useState } from 'react';
import { Movie } from '../types/movie';
import './MovieCard.css';
import { truncateText } from '../utils/truncateText';
import { getTrailerLink } from '../utils/getTrailerLink';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

  const handlePlayClick = async () => {
    const link = await getTrailerLink(movie.id);
    if (link) {
      window.open(link, '_blank');
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
      <p>Release Date: {movie.release_date}</p>
      <p>{truncateText(movie.overview)}</p>
      <button onClick={handleSpoilerClick}>Spoiler</button>
    </div>
  );
};

export default MovieCard;
