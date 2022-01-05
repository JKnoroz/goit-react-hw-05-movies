import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieCredits } from '../../services/api';
import ActorCard from './ActorCard/ActorCard';

import s from './Credits.module.css';

export default function Credits() {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(res => setCredits(res.cast));
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul className={s.credits}>
          {credits.map(actor => (
            <li key={actor.id} className={s.credits__item}>
              <ActorCard actor={actor} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
