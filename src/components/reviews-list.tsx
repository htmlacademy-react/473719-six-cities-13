import React from 'react';
import ReviewItem from './review-item';

function ReviewsList({comments}): JSX.Element {
  console.log(comments);
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {comments.map((item) => <ReviewItem key={item.id} {...item}/>)}
      </ul>
    </React.Fragment>
  );
}
export default ReviewsList;
