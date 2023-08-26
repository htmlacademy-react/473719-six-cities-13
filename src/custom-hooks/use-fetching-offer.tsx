import { useAppSelector } from '../redux-hooks';
import { fetchSpecificOffer, fetchComments, fetchNearPlaces } from '../store/api-actions';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux-hooks';
import { getOffer } from '../store/app-data/selectors';

function useFetchingOffer(offerId: string) {
  const dispatch = useAppDispatch();
  const loadedOffer = useAppSelector(getOffer);

  useEffect(() => {
    if(offerId) {
      dispatch(fetchSpecificOffer(offerId));
      dispatch(fetchComments(offerId));
      dispatch(fetchNearPlaces(offerId));
    }

  }, [offerId, dispatch]);

  return loadedOffer;
}

export default useFetchingOffer;
