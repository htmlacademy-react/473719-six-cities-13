import { useCallback, useEffect, useState } from 'react';
import { EMPTY_LINE, EMPTY_RATING, Status } from '../const';
import { useAppDispatch } from '../redux-hooks';
import { setCommentStatus } from '../store/app-data/app-data';


function useReviewChanges () {
  const dispatch = useAppDispatch();

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

  function ResetData (commentStatus: Status) {
    useEffect(() => {
      console.log(commentStatus);
      if (commentStatus === Status.Success) {
        console.log('Работает');
        setReview({
          ...review,
          comment: EMPTY_LINE,
          rating: EMPTY_RATING,
        });
        dispatch(setCommentStatus(Status.Idle));
      }
    });
  }


  return [changeText, ResetData, chooseStar, review];
}


export default useReviewChanges;
