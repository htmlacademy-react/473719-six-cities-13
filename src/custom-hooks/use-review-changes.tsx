import { useCallback, useState } from 'react';
import { EMPTY_LINE, EMPTY_RATING } from '../const';
import { FormEvent } from 'react';

function useReviewChanges () {
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
    setReview({
      ...review,
      comment: EMPTY_LINE,
      rating: EMPTY_RATING,
    });
    event.currentTarget.reset();
  }

  return [changeText, resetData, chooseStar, review];
}


export default useReviewChanges;
