import PropTypes from 'prop-types';
import s from './MovieInfo.module.css';

export default function MovieInfo({ movie }) {
  const { title, poster_path, popularity, overview, genres } = movie;

  return (
    <div className={s.MovieInfo}>
      <img
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={`img of ${title}`}
        className={s.MovieInfo__img}
      />
      <div className={s.MovieInfo__desc}>
        <h2 className={s.MovieInfo__title}>{title}</h2>
        <span className={s.MovieInfo__score}>
          User score {Math.round(popularity)}
        </span>

        <h3 className={s.MovieInfo__title}>Overview</h3>
        <p className={s.MovieInfo__overview}>{overview}</p>

        <h3 className={s.MovieInfo__title}>Genres</h3>
        <span className={s.MovieInfo__genres}>
          {genres.map(gen => gen.name).join(', ')}
        </span>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
};
