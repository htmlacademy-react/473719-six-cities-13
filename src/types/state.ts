import { store } from '../store';
import { AuthorizationStatus, Status } from '../const';
import { Offer, UserData } from './types';
import { ReviewItemProps } from './types';
import { CommentDataProps } from './types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppData = {
  offers: Offer[];
  favoriteOffers: Offer[];
  loadedOffer: Offer | null;
  isDetailsLoading: boolean;
  comments: ReviewItemProps[];
  error: string | null;
  isOffersDataLoading: boolean;
  isReviewsDataLoading: boolean;
  loadedComments: ReviewItemProps[];
  nearPlaces: Offer[];
  isNearPlacesLoading: boolean;
  review: CommentDataProps | null;
  statusComment: Status;
  hasError: boolean;
}

export type AppProcess = {
  city: string;
  sort: string;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null;
}
