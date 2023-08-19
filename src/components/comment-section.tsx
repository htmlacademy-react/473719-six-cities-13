import { useEffect, useState } from 'react';
import React from 'react';
import { ratingTypes } from '../const';
import Star from './star';
import { CommentData } from '../types';
import { sendComments } from '../store/api-actions';
import { FormEvent } from 'react';
import { useAppDispatch } from '../redux-hooks';
import { useParams } from 'react-router-dom';
import { EMPTY_LINE, EMPTY_RATING, MIN_LINE } from '../const';


function CommentSection():JSX.Element {

  const offerId = useParams().id;
  const [isSubmintDisabled, setIsSubmitDisabled] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const [review, setReview] = useState({
    comment: EMPTY_LINE,
    rating: EMPTY_RATING,
  });
  const dispatch = useAppDispatch();
  const isValid = (review.comment !== EMPTY_LINE && review.rating !== EMPTY_RATING && review.comment.length > MIN_LINE);

  function choseStar(event: React.MouseEvent<HTMLInputElement>) {
    const stars = parseInt((event.target as HTMLInputElement).value, 10);
    setReview({
      ...review,
      rating: stars,
    });
  }

  function changeText(event: React.ChangeEvent<HTMLTextAreaElement>){
    const text: string = event.target.value;
    setReview({
      ...review,
      comment: text,
    });
  }

  function resetData (event: FormEvent<HTMLFormElement>) {
    setReview({
      ...review,
      comment: EMPTY_LINE,
      rating: EMPTY_RATING,
    });
    event.currentTarget.reset();
  }

  const onSubmit = async (commentData: CommentData) => await dispatch(sendComments(commentData));

  useEffect(()=> {
    if (isValid) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [isValid]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    if (isValid) {
      onSubmit({
        offerId: offerId,
        comment: review.comment,
        rating: review.rating,
      }).then(()=> {
        setIsSending(false);
      });
    }
    resetData(event);
  };

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTypes.map((rate)=>
          <Star key={rate} rate={rate} choseStar ={choseStar} disabled={isSending}></Star>
        )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={review.comment} onChange={changeText} disabled={isSending}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmintDisabled}
        >Submit
        </button>
      </div>
    </form>);
}

export default CommentSection;
