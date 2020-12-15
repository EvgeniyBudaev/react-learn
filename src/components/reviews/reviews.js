import React from 'react';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = (props) => {
  const {reviews} = props

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default Reviews;
