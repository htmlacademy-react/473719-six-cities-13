import { Status, RATING_VALUES } from '../../const';
import { useCallback, useState, useMemo, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CommentDataProps} from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { getCommentStatus } from '../../store/app-data/selectors';
import { EMPTY_RATING, EMPTY_LINE, MAX_LINE, MAX_RATING, MIN_LINE, } from '../../const';
import { setCommentStatus } from '../../store/app-data/app-data';
import { sendComment } from '../../store/api-actions';
import { FormEvent } from 'react';

function CommentSection():JSX.Element {
  const commentStatus = useAppSelector(getCommentStatus);
  const offerId = useParams().id as string;
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: EMPTY_RATING,
    comment: EMPTY_LINE,
    offerId: offerId
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const isValid = useMemo(() => formData.rating !== EMPTY_RATING && formData.rating <= MAX_RATING && formData.comment.length >= MIN_LINE && formData.comment.length <= MAX_LINE, [formData.comment, formData.rating]);

  useEffect(() => {
    if (isValid) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [isValid]);

  useEffect(() => {
    if (commentStatus === Status.Success) {
      dispatch(setCommentStatus(Status.Idle));
      setFormData({...formData, comment: EMPTY_LINE, rating: EMPTY_RATING});
    }
  }, [dispatch, formData, commentStatus]);

  const handleInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(evt.target.value)
    });
  }, [formData]);

  const handleTextareaChange = useCallback((evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, comment: evt.target.value});
  },
  [formData]
  );

  const onSubmit = async (newComment: CommentDataProps) => await dispatch(sendComment(newComment));

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsSending(true);

    if(isValid) {
      onSubmit({
        rating: formData.rating,
        comment: formData.comment,
        offerId: offerId,
      }).then(() => {
        setIsSending(false);
      });
    }
  };

  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING_VALUES.map((score) => (
            <Fragment key={score.value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score.value}
                id={`${score.value}-stars`}
                type="radio"
                checked={formData.rating === score.value}
                onChange={handleInputChange}
                disabled={isSending}
              />
              <label
                htmlFor={`${score.value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={score.title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleTextareaChange}
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
