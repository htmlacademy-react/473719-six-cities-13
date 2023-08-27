import { Status, ratingTypes } from '../../const';
import { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import useReviewChanges from '../../custom-hooks/use-review-changes';

import usePostingComments from '../../custom-hooks/use-posting-comments';
import { ReviewData } from '../../types/types';
import StarMemo from '../star/star';
import { useAppSelector } from '../../redux-hooks';
import { getCommentStatus } from '../../store/app-data/selectors';

type ReviewChangesHookData = [
  (event: ChangeEvent<HTMLTextAreaElement>) => void,
  (commentStatus: Status) => void,
  (event: React.MouseEvent<HTMLInputElement>) => void,
  ReviewData
];

function CommentSection():JSX.Element {
  const commentStatus = useAppSelector(getCommentStatus);
  const offerId = useParams().id as string;
  const [changeText, ResetData, chooseStar, review] = useReviewChanges() as ReviewChangesHookData;
  const [handleSubmit, isSending, isSubmitDisabled] = usePostingComments(review, offerId);
  ResetData(commentStatus);

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTypes.map((rate)=>
          <StarMemo key={rate} rate={rate} chooseStar={chooseStar} isSending={isSending}></StarMemo>
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={changeText}
        disabled={isSending}
      >
      </textarea>
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
