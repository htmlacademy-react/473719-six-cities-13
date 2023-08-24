import { createAction } from '@reduxjs/toolkit';
import { Offer, ReviewItemProps, CommentDataProps } from '../types';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types';
import { AppRoute } from '../const';

export const changeCity = createAction('app/changeCity',
  (city: string) => ({payload: city}));

export const choseFilter = createAction('app/choseFilter',
  (sortType: string) => ({payload: sortType}));

export const getOffers = createAction('data/getOffers',
  (offers: Offer[]) => ({payload: offers}));

export const loadOffers = createAction<Offer[]>('loading/loadOffers');


export const loadSpecificOffer = createAction<Offer>('data/loadSpecificOffer');
export const getSpecificOffer = createAction('offer/fetch',
  (offer: Offer) => ({payload: offer}));

export const loadComments = createAction<ReviewItemProps[]>('data/loadComments');
export const getComments = createAction('comments/fetch',
  (comments: ReviewItemProps[]| null) => ({payload: comments}));

export const loadNearPlaces = createAction<Offer[]>('data/loadNearPlaces');
export const getNearPlaces = createAction('nearPlaces/fetch',
  (nearPlaces: Offer[] | null) => ({payload: nearPlaces}));
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setError = createAction<string | null>('app/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setComment = createAction('comments/post', (review: CommentDataProps | null) => ({payload: review}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const dropOffer = createAction('data/drop');
export const setUserInfo = createAction('user/setUserInfo', (userInfo: UserData | null) => ({payload: userInfo}));


