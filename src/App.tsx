import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from './components/MovieCard';
import { Movie } from './types/movie';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'en-US',
            page: 1
          }
        });
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    autoplay: true,
    slidesToShow: 5,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: "linear",
    focusOnSelect: true,
    pauseOnHover: true


  };

  return (
    <div className="App slider-container">
      <h1>Popular Movies</h1>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
