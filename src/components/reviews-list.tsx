import React from 'react';
import ReviewItem from './review-item';

function ReviewsList(): JSX.Element {
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <ReviewItem />
      </ul>
    </React.Fragment>
  );
}
export default ReviewsList;
