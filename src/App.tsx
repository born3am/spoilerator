import React, { useEffect, useState } from 'react';
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

  const handlePlayClick = (link: string) => {
    setTrailerLink(link);
  };

  const handleCloseModal = () => {
    setTrailerLink(null);
  };

  return (
    <div className="App">
      <Navbar setSelectedCategory={setSelectedCategory} activeCategory={selectedCategory} />
      <div className="content">
        {selectedCategory !== 'about' ? (
          <div className="movie-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} onPlayClick={handlePlayClick} />
            ))}
          </div>
        ) : (
          <About />
        )}
      </div>
      {trailerLink && <TrailerModal trailerLink={trailerLink} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
