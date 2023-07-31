import React from 'react';
import ReviewItem from './review-item';
import mockReviews from '../mock-comments';

function ReviewsList(): JSX.Element {
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {mockReviews.map((item) => <ReviewItem key={item.userId} {...item}/>)}
      </ul>
    </React.Fragment>
  );
}
export default ReviewsList;
