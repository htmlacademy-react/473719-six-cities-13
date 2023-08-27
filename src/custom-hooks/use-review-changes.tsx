import { useCallback, useState } from 'react';
import { EMPTY_LINE, EMPTY_RATING, Status } from '../const';
import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../redux-hooks';
import { getCommentStatus } from '../store/app-data/selectors';
import { setCommentStatus } from '../store/app-data/app-data';


function useReviewChanges () {
  const dispatch = useAppDispatch();
  const commentStatus = useAppSelector(getCommentStatus);

  const [review, setReview] = useState({
    comment: EMPTY_LINE,
    rating: EMPTY_RATING,
  });

  const chooseStar = useCallback ((event: React.MouseEvent<HTMLInputElement>) => {
    const stars = parseInt((event.target as HTMLInputElement).value, 10);
    setReview({
      ...review,
      rating: stars,
    });
  }, [review]);


  function changeText(event: React.ChangeEvent<HTMLTextAreaElement>){
    const text: string = event.target.value;
    setReview({
      ...review,
      comment: text,
    });
  }

  function resetData (event: FormEvent<HTMLFormElement>) {
    if (commentStatus === Status.Success) {
      dispatch(setCommentStatus(Status.Idle));
      setReview({
        ...review,
        comment: EMPTY_LINE,
        rating: EMPTY_RATING,
      });
      event.currentTarget.reset();
    }

  }

  return [changeText, resetData, chooseStar, review];
}


export default useReviewChanges;
