import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from './components/MovieCard';
import { Movie } from './types/movie';
import Navbar from './components/Navbar';
import About from './pages/About';
import TrailerModal from './components/TrailerModal';
import './App.css';
import { fetchMovies } from './utils/fetchMovies';
import {
  API_TMDB_NOW_ENDPOINT,
  API_TMDB_UPCOMING_ENDPOINT,
  API_TMDB_TOP_ENDPOINT,
  API_TMDB_PARAMS
} from './constants/apiTmdb';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('now');
  const [trailerLink, setTrailerLink] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  useEffect(() => {
    let endpoint = API_TMDB_NOW_ENDPOINT;
    if (selectedCategory === 'now') {
      endpoint = API_TMDB_NOW_ENDPOINT;
    } else if (selectedCategory === 'upcoming') {
      endpoint = API_TMDB_UPCOMING_ENDPOINT;
    } else if (selectedCategory === 'top') {
      endpoint = API_TMDB_TOP_ENDPOINT;
    }
    fetchMovies(setMovies, endpoint, API_TMDB_PARAMS);
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePlayClick = (link: string) => {
    setTrailerLink(link);
    setIsTrailerModalOpen(true);
  };

  const handleCloseModal = () => {
    setTrailerLink(null);
    setIsTrailerModalOpen(false);
  };

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    autoplay: !isTrailerModalOpen,
    slidesToShow: 5,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };

  return (
    <div className="App">
      <Navbar setSelectedCategory={setSelectedCategory} activeCategory={selectedCategory} />
      <div className="content">
        {selectedCategory !== 'about' ? (
          isDesktop ? (
            <Slider key={isTrailerModalOpen ? 'modal-open' : 'modal-closed'} {...settings}>
              {movies.map(movie => (
                <div key={movie.id}>
                  <MovieCard movie={movie} onPlayClick={handlePlayClick} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="movie-grid">
              {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} onPlayClick={handlePlayClick} />
              ))}
            </div>
          )
        ) : (
          <About />
        )}
      </div>
      {trailerLink && <TrailerModal trailerLink={trailerLink} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
