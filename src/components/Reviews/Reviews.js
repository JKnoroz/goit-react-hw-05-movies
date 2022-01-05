import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieReviews } from '../../services/api';
import Review from './Review/Review';

import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(res => {
      if (res.results.length === 0) {
        return;
      }
      setReviews(res.results);
    });
  }, [movieId]);

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
