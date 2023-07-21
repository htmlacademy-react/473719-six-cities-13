import React from 'react';
import { GenericObject } from '../const';

function Star(star: GenericObject, {choseStar}: {choseStar: () => void}): JSX.Element {
  return(
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={star[0]} id={`${star[0]}-stars`} type="radio" onClick={choseStar} />
      <label htmlFor={`${star[0]}-stars`} className="reviews__rating-label form__rating-label" title={star[1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

export default Star;
