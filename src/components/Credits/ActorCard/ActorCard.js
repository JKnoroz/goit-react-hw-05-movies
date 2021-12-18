import PropTypes from 'prop-types';
import s from './ActorCard.module.css';

export default function ActorCard({ actor }) {
  const { character, name, profile_path } = actor;
  return (
    <div className={s.actorCard}>
      <img
        className={s.actorCard__picture}
        src={`https://image.tmdb.org/t/p/w342${profile_path}`}
        alt={name}
      />
      <div className={s.ActorCard__info}>
        <span className={s.actorCard__name}>{name}</span>
        <span className={s.acrotCard__char}>Character: {character}</span>
      </div>
    </div>
  );
}

ActorCard.propTypes = {
  actor: PropTypes.object,
};
