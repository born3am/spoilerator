import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from './components/MovieCard';
import { Movie } from './types/movie';
import Navbar from './components/Navbar';
import About from './pages/About';
import TrailerModal from './components/TrailerModal';
import './App.css';
import { fetchMovies } from './services/tmdb/fetchMovies';
import { handleSearch } from './utils/searchUtils';
import { getCategoryEndpoint } from './utils/categoryUtils';
import { setupResizeListener } from './utils/resizeUtils';
import { API_TMDB_PARAMS } from './services/tmdb/endpoints';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('now');
  const [trailerLink, setTrailerLink] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  const handlePlayClick = (link: string) => {
    setTrailerLink(link);
    setIsTrailerModalOpen(true);
  };

  const handleCloseModal = () => {
    setTrailerLink(null);
    setIsTrailerModalOpen(false);
  };

  useEffect(() => {
    const endpoint = getCategoryEndpoint(selectedCategory);
    fetchMovies(setMovies, endpoint, API_TMDB_PARAMS);
  }, [selectedCategory]);

  useEffect(() => {
    setupResizeListener(setIsDesktop);
  }, []);

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    autoplay: !isTrailerModalOpen,
    slidesToShow: 5,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };

  return (
    <Router>
      <div className="App">
        <Navbar setSelectedCategory={setSelectedCategory} activeCategory={selectedCategory} onSearch={(query) => handleSearch(query, setMovies, selectedCategory)} />
        <div>
          {selectedCategory !== 'about' ? (
            isDesktop ? (
              <Slider className="App__carousel" key={isTrailerModalOpen ? 'modal-open' : 'modal-closed'} {...settings}>
                {movies.map(movie => (
                  <div key={movie.id}>
                    <MovieCard movie={movie} onPlayClick={handlePlayClick} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="App__movie-grid">
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
    </Router>
  );
};

export default App;
