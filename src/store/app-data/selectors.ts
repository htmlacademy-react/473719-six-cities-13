import { NameSpace } from '../../const';
import { Offer, ReviewItemProps } from '../../types/types';
import { State } from '../../types/state';
import { Status } from '../../const';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;

export const getOffer = (state: State): Offer | null => state[NameSpace.Data].loadedOffer;
export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDetailsLoading;

export const getNearPlaces = (state: State): Offer[] | undefined => state[NameSpace.Data].nearPlaces;
export const getNearPlacesLoadingStatus = (state: State): boolean => state[NameSpace.Data].isNearPlacesLoading;

export const getComments = (state: State): ReviewItemProps[] => state[NameSpace.Data].comments;
export const getCommentsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isReviewsDataLoading;
export const getCommentStatus = (state: State): Status => state[NameSpace.Data].statusComment;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getFavoriteOffersCount = (state: State): number => state[NameSpace.Data].favoriteOffers.length;
