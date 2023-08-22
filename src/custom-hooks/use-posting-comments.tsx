import { useAppDispatch } from '../redux-hooks';
import React, {useState} from 'react';
import { CommentDataProps, ReviewData } from '../types';
import { sendComments } from '../store/api-actions';
import { FormEvent } from 'react';
import { useEffect } from 'react';
import { EMPTY_LINE, EMPTY_RATING, MIN_LINE } from '../const';

function usePostingComments(review : ReviewData, offerId: string, resetData: ()=> void) {
  const dispatch = useAppDispatch();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const isValid = (review.comment !== EMPTY_LINE && review.rating !== EMPTY_RATING && review.comment.length > MIN_LINE);

  const onSubmit = async (commentData: CommentDataProps) => await dispatch(sendComments(commentData));

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

  useEffect(()=> {
    if (isValid) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [isValid]);

  return [handleSubmit, isSending, isSubmitDisabled];
}

export default usePostingComments;
