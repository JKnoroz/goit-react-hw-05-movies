import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { useLocation } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList';
import { getMovieByQuery } from '../../services/api';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  let location = useLocation();

  const urlQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!urlQuery) {
      return;
    }
    getMovieByQuery(urlQuery).then(res => {
      setMovies(res.results);
    });
  }, [urlQuery]);

  return (
    <>
      <SearchForm />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
