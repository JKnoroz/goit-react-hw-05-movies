import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';
import slugify from 'slugify';

export default function MoviesList({ movies }) {
  let location = useLocation();
  console.log(location);
  return (
    <ul className={s.movies__list}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.movies__item}>
            <Link
              to={{
                pathname: `/movies/${slugify(
                  `${movie.original_title} ${movie.id}`,
                  { lower: true },
                )}`,
                state: { from: { location } },
              }}

              // {`/movies/${movie.id}`}
            >
              {movie.original_title || movie.original_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
