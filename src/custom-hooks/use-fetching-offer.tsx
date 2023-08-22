import { useAppSelector } from '../redux-hooks';
import { fetchSpecificOffer, fetchComments, fetchNearPlaces } from '../store/api-actions';
import { dropOffer } from '../store/actions';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux-hooks';

function useFetchingOffer(offerId: string) {
  const dispatch = useAppDispatch();
  const loadedOffer = useAppSelector((state) => state.loadedOffer);

  useEffect(() => {
    if(offerId) {
      dispatch(fetchSpecificOffer(offerId));
      dispatch(fetchComments(offerId));
      dispatch(fetchNearPlaces(offerId));
    }
    return () => {
      dispatch(dropOffer());
    };

  }, [offerId, dispatch]);

  return loadedOffer;
}

export default useFetchingOffer;
