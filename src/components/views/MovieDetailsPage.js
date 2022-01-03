import { useParams, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import { getMovieInfo } from '../../services/api';
import SubMenu from '../SubMenu/SubMenu';
import LoaderSpinner from '../Loader/Loader';
import GoBack from '../GoBack/GoBack';

const Credits = lazy(() =>
  import('../Credits/Credits' /* webpackChunkName: "Credits" */),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function MoviesPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieInfo(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <GoBack />
          <MovieInfo movie={movie} />
          <SubMenu />
          <Suspense fallback={<LoaderSpinner />}>
            <Routes>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
