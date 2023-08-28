import { useAppDispatch } from '../redux-hooks';
import {useMemo, useState} from 'react';
import { CommentDataProps, ReviewData } from '../types/types';
import { sendComment } from '../store/api-actions';
import { FormEvent } from 'react';
import { useEffect } from 'react';
import { EMPTY_LINE, EMPTY_RATING, MIN_LINE, MAX_LINE } from '../const';


function usePostingComments(review : ReviewData, offerId: string): [((event: FormEvent<HTMLFormElement>) => void), boolean, boolean] {
  const dispatch = useAppDispatch();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const isValid = useMemo(() => review.comment !== EMPTY_LINE && review.rating !== EMPTY_RATING && review.comment.length > MIN_LINE && review.comment.length < MAX_LINE, [review.comment, review.rating]);

  const onSubmit = async (commentData: CommentDataProps) => await dispatch(sendComment(commentData));

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
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
  }

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
