import React from 'react';
import ReviewItem from '../review-item/review-item';
import { useAppSelector } from '../../redux-hooks';
import { ReviewItemProps } from '../../types/types';
import { getComments } from '../../store/app-data/selectors';
import { sortReviews } from '../../utils';


function ReviewsList(): JSX.Element {
  const loadedComments = useAppSelector(getComments);
  const sortedComments = sortReviews(loadedComments);
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedComments.length}</span></h2>
      <ul className="reviews__list">
        {sortedComments.map((item: ReviewItemProps) => <ReviewItem key={item.id} {...item}/>)}
      </ul>
    </React.Fragment>
  );

}
export default ReviewsList;
