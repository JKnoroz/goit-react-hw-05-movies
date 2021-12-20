import PropTypes from 'prop-types';
import s from './Review.module.css';

export default function Review({ reviews }) {
  const { author, content } = reviews;
  return (
    <div className={s.review}>
      <h3 className={s.review__author}>Author: {author}</h3>
      <p className={s.review__text}>{content}</p>
    </div>
  );
}

Review.propTypes = {
  reviews: PropTypes.object,
};
