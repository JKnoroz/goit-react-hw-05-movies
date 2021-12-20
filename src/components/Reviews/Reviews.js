import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getMovieReviews } from '../../services/api';
import Review from './Review/Review';

import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const param = useParams();

  useEffect(() => {
    getMovieReviews(param.movieId).then(res => setReviews(res));
  }, [param.movieId]);

  return (
    reviews && (
      <>
        {reviews.length === 0 ? (
          <div>We don't have any reviews for this movie.</div>
        ) : (
          <ul className={s.reviews}>
            {reviews.map(review => (
              <li key={review.id} className={s.reviews__item}>
                <Review reviews={review} />
              </li>
            ))}
          </ul>
        )}
      </>
    )
  );
}
