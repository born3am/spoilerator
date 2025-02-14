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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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

const SampleNextArrow = (props: { className?: string; style?: React.CSSProperties; onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: { className?: string; style?: React.CSSProperties; onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

export default MovieCard;
