import { useState } from 'react';
import React from 'react';
import { ratingTypes } from '../const';
import Star from './star';


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
  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTypes.map((rate)=>
          <Star key={rate} rate={rate} choseStar ={choseStar}></Star>
        )}
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
