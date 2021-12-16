import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import { getMovieInfo } from '../../services/api';

export default function MoviesPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieInfo(movieId).then(res => setMovie(res));
  }, [movieId]);

  return <>{movie && <MovieInfo movie={movie} />}</>;
}
