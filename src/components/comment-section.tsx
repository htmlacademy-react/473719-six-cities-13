import { ratingTypes } from '../const';
import { ChangeEvent, FormEvent, MouseEvent } from 'react';
import Star from './star';
import { useParams } from 'react-router-dom';
import useReviewChanges from '../custom-hooks/use-review-changes';

import usePostingComments from '../custom-hooks/use-posting-comments';
import { ReviewData } from '../types';

type ReviewChangesHookData = [
  (event: ChangeEvent<HTMLTextAreaElement>) => void,
  (event: FormEvent<HTMLFormElement>) => void,
  (event: MouseEvent<HTMLInputElement, MouseEvent>) => void,
  ReviewData];

function CommentSection():JSX.Element {

  const offerId = useParams().id;
  const [changeText, resetData, choseStar, review] : ReviewChangesHookData = useReviewChanges();

  const [handleSubmit, isSending, isSubmitDisabled] = usePostingComments(review, offerId, resetData);

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
          disabled={isSubmitDisabled}
        >Submit
        </button>
      </div>
    </form>);
}

export default CommentSection;
