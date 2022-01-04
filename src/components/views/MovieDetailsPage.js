import { useParams, Route, Routes, useLocation } from 'react-router-dom';
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
  // const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getMovieInfo(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          {/* <Link to={location?.state?.from?.location ?? '/movies'}>
            {location?.state?.from?.label ?? 'Назад'}
          </Link> */}
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
