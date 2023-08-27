import React from 'react';
import ReviewItem from '../review-item/review-item';
import { useAppSelector } from '../../redux-hooks';
import { ReviewItemProps } from '../../types/types';
import { getComments } from '../../store/app-data/selectors';


function ReviewsList(): JSX.Element {
  const loadedComments = useAppSelector(getComments);
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{loadedComments.length}</span></h2>
      <ul className="reviews__list">
        {loadedComments.map((item: ReviewItemProps) => <ReviewItem key={item.id} {...item}/>)}
      </ul>
    </React.Fragment>
  );

}
export default ReviewsList;
