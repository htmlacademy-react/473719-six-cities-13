import React from 'react';
import { StarProps } from '../types';
import { ratingTypesMap } from '../const';

function Star({rate, chooseStar}: StarProps): JSX.Element {
  return(
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rate}
        id={`${rate}-stars`}
        type="radio"
        onChange={chooseStar}
      />
      <label htmlFor={`${rate}-stars`} className="reviews__rating-label form__rating-label" title={ratingTypesMap[rate]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

const StarMemo = React.memo(Star);

export default StarMemo;
