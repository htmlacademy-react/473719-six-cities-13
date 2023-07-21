import { useState } from 'react';
import React from 'react';
import { ratingTypes, ratingTypesMap } from '../const';


function CommentSection():JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setStars] = useState(0);


  function choseStar(event: React.MouseEvent<HTMLInputElement>) {
    const stars = parseInt((event.target as HTMLInputElement).value, 10);
    setStars(stars);
  }

  function changeText(event: React.ChangeEvent<HTMLTextAreaElement>){
    const text: string = event.target.value;
    setComment(text);
  }


  console.log(rating);
  console.log(comment);
  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTypes.map((rate)=>(
          <React.Fragment key = {rate}>
            <input className="form__rating-input visually-hidden" name="rating" value={rate} id={`${rate}-stars`} type="radio" onClick={choseStar} />
            <label htmlFor={`${rate}-stars`} className="reviews__rating-label form__rating-label" title={ratingTypesMap[rate]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} onChange={changeText}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>);
}


export default CommentSection;
