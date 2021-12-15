import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../services/images-api';
// import MoviesList from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => setMovies(res.results));
  }, []);

  //   return <MoviesList movies={movies} />;
  return (
    <>
      <h1>Trending today</h1>
      <ul></ul>
    </>
  );
}
