import React from 'react';
import ReviewItem from './review-item';
import { useAppSelector } from '../redux-hooks';
import { ReviewItemProps } from '../types';


function ReviewsList(): JSX.Element {
  const loadedComments = useAppSelector((state) => state.loadedComments);
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {loadedComments.map((item: ReviewItemProps) => <ReviewItem key={item.id} {...item}/>)}
      </ul>
    </React.Fragment>
  );

}
export default ReviewsList;
