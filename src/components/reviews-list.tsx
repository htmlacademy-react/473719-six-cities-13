import React from 'react';
import ReviewItem from './review-item';
import { ReviewItemProps } from '../types';

type CommentsProp = {
  comments: ReviewItemProps[];
}

function ReviewsList({comments}: CommentsProp): JSX.Element {
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {comments.map((item: ReviewItemProps) => <ReviewItem key={item.id} {...item}/>)}
      </ul>
    </React.Fragment>
  );
}
export default ReviewsList;
