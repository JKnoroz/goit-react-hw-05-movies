import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => setMovies(res.results));
  }, []);

  return <MoviesList movies={movies} />;
}
