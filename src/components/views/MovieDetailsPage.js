import {
  useParams,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState, lazy, Suspense, useRef } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import { getMovieInfo } from '../../services/api';
import SubMenu from '../SubMenu/SubMenu';

const Credits = lazy(() =>
  import('../Credits/Credits' /* webpackChunkName: "Credits" */),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function MoviesPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useRef(useLocation()?.state?.from ?? '/');
  const navigate = useNavigate();

  useEffect(() => {
    getMovieInfo(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <button className="btn" onClick={() => navigate(location.current)}>
            Go back
          </button>
          <MovieInfo movie={movie} />
          <SubMenu />
          {/* <Suspense fallback={<p>Loading</p>}>
            <Routes>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense> */}
        </>
      )}
    </>
  );
}
