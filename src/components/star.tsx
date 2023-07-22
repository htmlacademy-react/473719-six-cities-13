import React from 'react';
import { ratingTypesMap } from '../const';

function Star(rate: number, {choseStar}: {choseStar: () => void}): JSX.Element {
  return(
    <React.Fragment key = {rate}>
      <input className="form__rating-input visually-hidden" name="rating" value={rate} id={`${rate}-stars`} type="radio" onClick={choseStar} />
      <label htmlFor={`${rate}-stars`} className="reviews__rating-label form__rating-label" title={ratingTypesMap[rate]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

export default Star;
