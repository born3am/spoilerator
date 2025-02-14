import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const handleSpoilerClick = () => {
    // Implement spoiler button functionality here
  };

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

  return (
    <div className="movie-card">
      <Slider {...settings}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>{movie.overview}</p>
          <button onClick={handleSpoilerClick}>Spoiler</button>
        </div>
      </Slider>
    </div>
  );
};


export default MovieCard;
